// @flow
import React, { Component } from 'react';
import LeftSidebar from './LeftSidebar';
import Center from './Center';
import uport from '../lib/uport';
import ipfs from '../lib/ipfs';
import store from '../lib/store';
import { 
  logIn,
  setStoredFiles
 } from '../lib/actions';
import { connect } from 'react-redux';
import {type State, type File} from '../lib/types';
import Web3 from 'web3';
import {FileStorageABI, FileStorageAddress } from '../config/file_storage';
import FileCard from './FileCard';
import FileInput from './FileInput';

type Props = Object

const web3 = new Web3(Web3.givenProvider || "http://localhost:9545");

const fileStorageInstance = new web3.eth.Contract(FileStorageABI);
fileStorageInstance.options.address = FileStorageAddress;
console.log(fileStorageInstance);



@connect((store) => {
  return {
    user: store.sessionReducer,
    ipfs: store.ipfsReducer,
  }
})
class App extends Component<Props> {
  componentDidMount() {
    web3.eth.getAccounts().then((accounts) => {
      web3.eth.defaultAccount = accounts[0];
      this.fetchFiles();
    })
  }
  fetchFiles() {
    fileStorageInstance.methods.getFileCount()
      .call({from: web3.eth.defaultAccount})
      .then(count => {
        let files: Array<File> = [];
        let promises = [];
        for(let i = 0; i < count; i++) {
          promises.push(
            fileStorageInstance.
              methods
              .getUpload(i)
              .call({from: web3.eth.defaultAccount}).
              then((res) => {
                const file: File = {
                  fileName: res[0],
                  ipfsHash: res[1],
                  additionalInfo: res[2],
                  timeStamp: res[3]
                }
                files.push(file);
              })
          )
         }
         Promise.all(promises).then(() => {
          this.props.dispatch(setStoredFiles(files));
         })
    })
  }
  
  logIn() {
    uport.requestCredentials({
      requested: ['name', 'phone', 'country'],
      notifications: true
    })
    .then(credentials => {
      this.props.dispatch(logIn(credentials));
    })
  }

  render() {
    const uploadedFiles = this.props.ipfs.uploadedFiles.map(file => <FileCard key={file.ipfsHash} {...file}/>).reverse()
    const alert = this.props.ipfs.status == "uploading" ? 'Large files may take a while to upload to the IPFS.' : ''
    return (
      <div class="App__content">
        <div class="row">
          <h4>{ `Account: ${web3.eth.defaultAccount}` }</h4>
        </div>
        <div class="row">
          <div class="heading">
            <h3> Upload File </h3>
            <div class="heading__tail"/>
          </div>
        </div>
        <div class="row">
          <FileInput
            web3={web3}
            fileStorageInstance={fileStorageInstance} 
           />
        </div>
        <div class="row">
          <div class="alert-container">
            <p>{alert}</p>
          </div>
        </div>
        <div class="heading row">
          <h3> Uploaded Files </h3>
          <div class="heading__tail"/>
        </div>
        {uploadedFiles}
      </div>
    );
  }
}

export default App;
