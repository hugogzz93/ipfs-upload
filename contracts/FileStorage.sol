pragma solidity ^0.4.23;
pragma experimental ABIEncoderV2;

contract FileStorage {
  address public owner;
  struct Upload {
    string ipfsHash;
    string[] tags;
  }
  
  mapping(address => Upload[]) public uploads;

  event UploadRegistered(address user, string ipfsHash);

  constructor() public {
    owner = msg.sender;
  }

  function addUpload(string ipfsHash, string[] tags) public {
    uploads[msg.sender].push(Upload(ipfsHash, tags));
    emit UploadRegistered(msg.sender, ipfsHash);
  }

  // function getUploadHash(address _user, uint i) public view returns(string) {
  //     return uploads[_user][i].ipfsHash;
  // }
  //
  // function getUploadTags(address _user, uint i) public view returns(string[]) {
  //     return uploads[_user][i].tags;
  // }
}

