// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DigiGOToken is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("DigiGOToken", "DGO") {}

    function mint() public payable onlyOwner {
        uint256 amountToMint = (msg.value * 2) / 100;
        _mint(msg.sender, amountToMint);
    }

    function useLoyalty(address _to, uint256 _amount) public {
        require(balanceOf(msg.sender) > 0, "You dont have the Loyalty points");
        require(_amount > 0, "enter the right value");
        uint256 transferAmount;
        uint256 tokentoMint;
        if (_amount > balanceOf(msg.sender)) {
            transferAmount = _amount - balanceOf(msg.sender);
            burn(balanceOf(msg.sender));
            payable(_to).transfer(transferAmount);
        } else {
            burn(_amount);
        }
        tokentoMint = (_amount * 2) / 100;
        _mint(msg.sender, tokentoMint);
    }
}
