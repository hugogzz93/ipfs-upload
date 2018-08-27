pragma solidity ^0.4.23;

contract Administered {
  mapping(address => bool) admins;

 modifier onlyAdmin {
      require(admins[msg.sender] == true);
      _;
    }

  function addAdmin(address _a) 
  public
  onlyAdmin
  returns(bool)
  {
      admins[_a] = true;
      return true;
   } 
}

