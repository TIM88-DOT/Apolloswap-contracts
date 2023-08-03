// SPDX-License-Identifier: GPL-3.0-or-later

pragma solidity =0.8.4;

import {ApolloswapERC20} from "../ApolloswapERC20.sol";

contract ERC20 is ApolloswapERC20 {
    constructor(uint256 _totalSupply) {
        _mint(msg.sender, _totalSupply);
    }
}
