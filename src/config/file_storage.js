export const FileStorageAddress = "0x345ca3e014aaf5dca488057592ee47305d9b3e10";
export const FileStorageABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "ipfsHash",
          "type": "string"
        }
      ],
      "name": "UploadRegistered",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "ipfsHash",
          "type": "string"
        },
        {
          "name": "fileName",
          "type": "string"
        },
        {
          "name": "additionalInfo",
          "type": "string"
        }
      ],
      "name": "addUpload",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getFileCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getUpload",
      "outputs": [
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]
