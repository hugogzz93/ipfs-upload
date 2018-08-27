pragma solidity ^0.4.23;

contract Administered {
  mapping(address => bool) admins;

  //@dev Allows execution if address is in the admins mapping.
  modifier onlyAdmin {
      require(admins[msg.sender] == true);
      _;
    }

  //@dev Grants an address administrator priviledges.
  function addAdmin(address _a) 
  public
  onlyAdmin
  returns(bool)
  {
      admins[_a] = true;
      return true;
   } 
}

