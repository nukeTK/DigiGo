// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "./Extras/ZKPVerifier.sol";
import "./Extras/ICircuitValidator.sol";
import "./Extras/GenesisUtils.sol";

import "@connext/nxtp-contracts/contracts/core/connext/interfaces/IConnext.sol";
import "@connext/nxtp-contracts/contracts/core/connext/interfaces/IXReceiver.sol";

import "@openzeppelin/contracts/access/Ownable.sol";

contract VerificationResistory is IXReceiver, ZKPVerifier {

  event BridgeSet(uint32 indexed domainId, address indexed bridge);

  address public constant CONNEXT_ASSET_FOR_NONE = address(0x0);
  uint256 public constant CONNEXT_AMOUNT_FOR_NONE = 0;

  function setBridge(uint32 domainId_, address bridge) external onlyOwner {
    bridges[domainId_] = bridge;
    emit BridgeSet(domainId_, bridge);
  }

    mapping(uint32 => address) public bridges;

    // this is only one for demo
    mapping(address => bool) public verified;

    // crosschain
    address public connext;

    constructor(address connext_) {
      connext = connext_;
    }

    /*
     * polygon id
     */
    uint64 public constant TRANSFER_REQUEST_ID = 1;
    /* ====================
     * functions
     * ====================
    /*
     * polygon id integration
     */
    function _beforeProofSubmit(
        uint64 /* requestId */,
        uint256[] memory inputs,
        ICircuitValidator validator
    ) internal view override {
        // check that challenge input of the proof is equal to the msg.sender
        address addr = GenesisUtils.int256ToAddress(
            inputs[validator.getChallengeInputIndex()]
        );
        require(_msgSender() == addr, "VerificationResistory: sender invalid");
    }

    function _afterProofSubmit(
        uint64 requestId,
        uint256[] memory inputs,
        ICircuitValidator validator
    ) internal override {
        address sub = _msgSender();
        require(
            requestId == TRANSFER_REQUEST_ID,
            "VerificationResistory: reuqest id invalid"
        );
        verified[sub] = true;
    }

    function sync(uint32 destination, uint256 relayerFee, uint256 slippage, address sub) public {
      address bridge = bridges[destination];
      bytes memory data = abi.encode(sub);
      IConnext(connext).xcall{value: relayerFee}(
        destination,
        bridge,
        CONNEXT_ASSET_FOR_NONE,
        _msgSender(),
        CONNEXT_AMOUNT_FOR_NONE,
        slippage,
        data
      );
    }

  function xReceive(
    bytes32 transferId,
    uint256 amount,
    address asset,
    address originSender,
    uint32 origin,
    bytes memory callData
  ) external override returns (bytes memory) {
    require(asset == CONNEXT_ASSET_FOR_NONE, "HashiConnextAdapter: asset is invalid");
    require(amount == CONNEXT_AMOUNT_FOR_NONE, "HashiConnextAdapter: amount is invalid");
    address bridge = bridges[origin];
    require(bridge == originSender, "HashiConnextAdapter: bridge is invalid");
    require(_msgSender() == connext, "HashiConnextAdapter: msg sender is invalid ");
    address sub = abi.decode(callData, (address));
    verified[sub] = true;
    return "";
  }

}
