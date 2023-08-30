// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract Xcrypt {
  using SafeERC20 for IERC20;

  struct senderPublicKey {
    bytes32 x;
    bytes32 y;
    bytes1 ss;
    address token;
  }

  address constant XDC = address(0x0);

  uint8 public constant VERSION = 1;

  address private owner;
  senderPublicKey[] keys;

  constructor() {
    owner = msg.sender;
  }

  function send(bytes32 x, bytes32 y, bytes1 ss, address token) private {
    keys.push(senderPublicKey(x, y, ss, token));
  }

  function totalKeys() view external returns (uint256 count) {
    count = keys.length;
  }

  function sendTokenAnonymously(bytes32 x, bytes32 y, bytes1 ss, address token, address target, uint256 amount) external {
    require(amount > 0, "Sending amount should be greater than 0");
    require(token != address(0x0), "Token contract address cannot be Zero");
    require(target != address(0x0), "Receiver address cannot be Zero");

    send(x, y, ss, token);

    IERC20(token).safeTransferFrom(msg.sender, target, amount);
  }

  function sendAnonymously(bytes32 x, bytes32 y, bytes1 ss, address payable target) public payable {
    require(msg.value > 0, "R: Sending amount should be more than 0");
    require(target != address(0x0), "R: Target address required");

    send(x, y, ss, XDC);

    (bool sent, ) = target.call{value: msg.value}("");
    require(sent, "R: Failed to send XDC");
  }

  function getNextKeys(uint256 start) external view returns (senderPublicKey[10] memory) {
    senderPublicKey[10] memory gotKeys;

    uint256 end = start + 10;
    uint256 limit = (keys.length < end) ? keys.length : end;

    for (uint256 i=start; i < limit; i++) {
      gotKeys[i - start] = keys[i];
    }

    return gotKeys;
  }
}