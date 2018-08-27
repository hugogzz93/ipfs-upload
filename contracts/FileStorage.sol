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
  
  //@dev Checks whether index is within the range of the address array.
  modifier isValidIndex(address user, uint index) {
    require(uploads[user].length > index && index >= 0);
    _;
  }

  //@dev Stores uploaded data into the address' uploads mapping.
  //@param ipfsHash ipfs address of stored file
  //@param fileName file name of file being uploaded.
  //@param string for any complementary info the user would like to attach
  // to file.
  function addUpload(string ipfsHash,
                     string fileName,
                     string additionalInfo)
                     public
                     stopInEmergency
                     {
    uploads[msg.sender].push(Upload(fileName, ipfsHash, additionalInfo, now));
    emit UploadRegistered(msg.sender, ipfsHash);
  }

  //@dev Returns number of files the calling address has stored.
  function getFileCount() view public returns (uint) {
    return uploads[msg.sender].length;
  }

  //@dev Return the contents of the sender's uploads at the given index.
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

