pragma solidity ^0.4.23;
import './Administered.sol';

contract CircuitBreaker is Administered {
  bool public stopped = false;
  modifier stopInEmergency { require(!stopped); _; }
  modifier onlyInEmergency { require(stopped); _; }
  
  function startEmergency()
  onlyAdmin
  stopInEmergency
  public {
    stopped = true;
  }

  function stopEmergency()
  onlyAdmin
  onlyInEmergency
  public {
    stopped = false;
  }
}
