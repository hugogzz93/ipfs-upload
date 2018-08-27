# Avoiding Common Attacks
Below is a list of the [known common attacks](https://consensys.github.io/smart-contract-best-practices/known_attacks/),
whether they are relevant to the contracts and if so how they are mitigated.

### 1. Reentrancy
Since there are no external calls, this threat is irrelevant.

### 2. Cross-function Race Conditions
Since there are no external calls, this threat is irrelevant.

### 3. Frontrunning 
The only problem frontrunning could place on the contract is in altering the order in which files are uploaded.
For example: 
1. Transaction with file A is created.
2. Transaction with file B is created.
3. Transaction with file B is attached to the blockchain.
4. Transaction with file A is attached to the blockchain.

This would result in an inaccurate ordering. As such, files have a timestamp attached to them.

### 4. Timestamp Dependence
While timestmaps can be gamed, the dependency on timestamps can tolerate the recommended margin of 30 seconds.

### 6. DoS with (Unexpected) revert
Since there are no external calls, this threat is irrelevant.


### 7. Dos with Block Gas Limit
The `Administered` contract was originally vulnerable to this since the list of addresses
were stored in an array. The contract had to iterate through all items  in order to check whether one existed.
The risk was in the array becoming too large. In order to deal with this, the array was removed and replaced by a mapping.

### 8. Forcibly sending ether to a contract
The contract has no operations or transfers of ether. 



