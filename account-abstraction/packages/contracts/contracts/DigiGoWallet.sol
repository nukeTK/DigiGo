//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "@account-abstraction/contracts/gnosis/GnosisSafeProxy4337.sol";
import "@openzeppelin/contracts/interfaces/IERC1271.sol";
import "@openzeppelin/contracts/utils/introspection/ERC165.sol";

contract DigiGoWallet is ERC165, SafeProxy4337, IERC1271 {
  constructor(address singleton, EIP4337Manager aaModule, address owner) SafeProxy4337(singleton, aaModule, owner) {}

  // this is for test to make sure it is deployed
  string public thisIsTestAndShouldReturnValue = "thisIsTestAndShouldReturnValue";

  function isValidSignature(bytes32 _hash, bytes calldata _signature) external view override returns (bytes4) {
      // this should check the signer, but pass it for the simple demo
      return type(IERC1271).interfaceId;
  }

  function supportsInterface(bytes4 interfaceId) public view virtual override returns (bool) {
    return interfaceId == type(IERC1271).interfaceId || super.supportsInterface(interfaceId);
  }

}
