let FileStorage = artifacts.require("./FileStorage.sol");

contract('FileStorage', function(accounts) {
  const owner = accounts[0];

  beforeEach(async function(){
    fileStorage = await FileStorage.new();
  });

  it('stores uploads from user for future retrieval', async () => {
    // const fileStorage = await FileStorage.deployed();
    const ipfsHash = '0x00000000000';
    const fileName = 'README.txt';
    const additionalInfo = 'INFO';

    await fileStorage.addUpload(ipfsHash, fileName, additionalInfo, {from: owner});
    const upload = await fileStorage.getUpload(0, {from: owner });

    assert.equal(upload[0], fileName, 'fileName should be stored accurately');
    assert.equal(upload[1], ipfsHash, 'ipfsHash should be stored accurately');
    assert.equal(upload[2], additionalInfo, 'additionalInfo should be stored accurately');
  })

  it('emits event every time a file is uploaded', async () => {
    const LogUploddRegistered = await fileStorage.UploadRegistered();

    const ipfsHash = '0x00000000000';
    const fileName = 'README.txt';
    const additionalInfo = 'INFO';


    fileStorage.addUpload(ipfsHash, fileName, additionalInfo, {from: owner});

    const log = await new Promise((res, rej) => {
      LogUploddRegistered.watch((errors, log) => res(log))
    })

    const loggedUser = log.args.user;
    const loggedHash = log.args.ipfsHash;
    assert.equal(loggedUser, owner, 'Logs should display the uploading user');
    assert.equal(loggedHash, ipfsHash, 'Logs should display the uploaded ipfs address');
    
  })

  it('stored a count of hoy many files the use has uploaded', async () => {
    // const fileStorage = await FileStorage.deployed();

    const ipfsHash = '0x00000000000';
    const fileName = 'README.txt';
    const additionalInfo = 'INFO';

    await fileStorage.addUpload(ipfsHash, fileName, additionalInfo, {from: owner});

    const ipfsHash2 = '0x00000000001';
    const fileName2 = 'CONFIG';
    const additionalInfo2 = '...';

    await fileStorage.addUpload(ipfsHash2, fileName2, additionalInfo2, {from: owner});

    const fileCount = await fileStorage.getFileCount.call({from: owner});
    assert.equal(fileCount.toString(10), '2', 'should return the exact number of files');
  })
})

