//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "@account-abstraction/contracts/gnosis/GnosisSafeProxy4337.sol";

contract DigiGoWallet is SafeProxy4337 {
  constructor(address singleton, EIP4337Manager aaModule, address owner) SafeProxy4337(singleton, aaModule, owner) {}

  // this is for test to make sure it is deployed
  string public thisIsTestAndShouldReturnValue = "thisIsTestAndShouldReturnValue";
}
