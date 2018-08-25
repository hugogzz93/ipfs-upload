pragma solidity ^0.4.23;

contract FileStorage {
  address public owner;
  struct Upload {
    string fileName;
    string ipfsHash;
    string additionalInfo;
    uint256 timeStamp;
  }
  
  mapping(address => Upload[]) private uploads;

  event UploadRegistered(address user, string ipfsHash);
  
  modifier isValidIndex(address user, uint index) {
    require(uploads[user].length > index && index >= 0);
    _;
  }

  constructor() public {
    owner = msg.sender;
  }

  function addUpload(string ipfsHash, string fileName, string additionalInfo) public {
    uploads[msg.sender].push(Upload(ipfsHash, fileName, additionalInfo, now));
    emit UploadRegistered(msg.sender, ipfsHash);
  }

  function getFileCount() view public returns (uint) {
    return uploads[msg.sender].length;
  }

  function getUpload(uint index) 
  isValidIndex(msg.sender, index)
  view
  public
  returns(string, string, string, uint256)
   {
     Upload memory upload = uploads[msg.sender][index];
    return (upload.fileName,
            upload.ipfsHash,
            upload.additionalInfo,
            upload.timeStamp);
  }
}

