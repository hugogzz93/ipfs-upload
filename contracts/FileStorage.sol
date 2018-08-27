pragma solidity ^0.4.23;
import './Administered.sol';
import './CircuitBreaker.sol';

contract FileStorage is Administered, CircuitBreaker {
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

  function addUpload(string ipfsHash,
                     string fileName,
                     string additionalInfo)
                     public
                     stopInEmergency
                     {
    uploads[msg.sender].push(Upload(fileName, ipfsHash, additionalInfo, now));
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

