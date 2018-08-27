# Design Pattern Decisions
## Implemented Design Patterns

### 1. Restricted Access
Simple contract that keeps record of authorized addresses.
Has one modifier which prevents execution if address is not in the authorized list.

```
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
```

In this case the pattern is necesary for the circui breaker functions (ahead).
Only authorized users should change the `stopped` variable.


  
### 2. Circuit Breaker
Allows for critical contract functions such as `addUpload` to be stopped in case of emergency.

```
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

```

### 3. Fail Early and Loud
Used as modifiers verifying critical data access.

```
  modifier isValidIndex(address user, uint index) {
    require(uploads[user].length > index && index >= 0);
    _;
  }
```
