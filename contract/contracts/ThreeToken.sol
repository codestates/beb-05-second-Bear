// SPDX-License-Identifier: MIT
pragma solidity >=0.8.10;

 import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ThreeToken is ERC20 {
    constructor() ERC20("ThreeToken", "SAM") {
          _mint(msg.sender, 10000);
    }

}