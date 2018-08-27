# IPFS File Upload
## Uploads files to the ipfs and stores all user's upload references in an ethereum smart contract.
Permits users to upload files to the [Interplanetary File System](ipfs.io).
A smart contract will store the address (as an ipfs hash) of the file as well 
as a timestamp and optional additional info for the user.

Users may come back later to and the locations of their files will be retrieved
from the small contract.


## Requirements
Metamask must be enabled on the browser.

## Setup
1. Clone the Project
2. Run npm install
3. Run npm start

```
git clone git@github.com:hugogzz93/ipfs-upload.git
npm install
npm start
```

The server will listen on port 8080 by default.

#### Testnet
The smart contract is already deployed on the Rinkeby test network.
The address is `0x09ef946b45df639de340bcd372f5c33d1130e017`.
The default configuration has that address, your metamask instance should be connected to
rinkeby. If you wish to use a local or other network, you will have to deploy the contract
and set the address of that contract to the `FileStorageAddress` variable on `src/config/file_storage.js`.

```
// ./src/config/file_storage.js

//default address on rinkeby
export const FileStorageAddress = "0x09ef946b45df639de340bcd372f5c33d1130e017";
...

```


