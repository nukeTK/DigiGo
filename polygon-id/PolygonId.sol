// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "./Extras/ZKPVerifier.sol";
import "./Extras/ICircuitValidator.sol";
import "./Extras/GenesisUtils.sol";


contract VerificationResistory is ZKPVerifier {
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
        
    }
}
