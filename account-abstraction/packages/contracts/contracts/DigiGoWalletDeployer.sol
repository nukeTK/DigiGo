// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./DigiGoWallet.sol";

import "@openzeppelin/contracts/utils/Create2.sol";

contract DigiGoWalletDeployer {
  function deployWallet(address singleton, EIP4337Manager aaModule, address owner, uint256 salt) public returns (DigiGoWallet) {
    return new DigiGoWallet{salt: bytes32(salt)}(singleton, aaModule, owner);
  }

  // this is helper function for rapid development
  function getCreate2Address(address singleton, EIP4337Manager aaModule, address owner, uint256 salt) public view returns (address) {
    bytes memory creationCode = type(DigiGoWallet).creationCode;
    bytes memory initCode = abi.encodePacked(creationCode, abi.encode(singleton, aaModule, owner));
    bytes32 initCodeHash = keccak256(initCode);
    return Create2.computeAddress(bytes32(salt), initCodeHash, address(this));
  }
}
