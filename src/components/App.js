// @flow
import React, { Component } from 'react';
import LeftSidebar from './LeftSidebar';
import Center from './Center';
import uport from '../lib/uport';
import ipfs from '../lib/ipfs';
import store from '../lib/store';
import { 
  logIn,
  onFileChange,
  onFileUploading,
  onFileUploaded,
  setStoredFiles
 } from '../lib/actions';
import { connect } from 'react-redux';
import {type State} from '../lib/types';
import Web3 from 'web3';
import {FileStorageABI, FileStorageAddress } from '../config/file_storage';

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
    fileStorageInstance.methods.getFileCount().call({from: web3.eth.defaultAccount}).then((count) => {
      let files = [];
      let promises = [];
      for(let i = 0; i < count; i++) {         
        promises.push(
          fileStorageInstance.
            methods.uploads(web3.eth.defaultAccount, i)
            .call({from: web3.eth.defaultAccount}).
            then(hash => files.push(hash))
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


  captureFile (event: Object): void {
    event.stopPropagation();
    event.preventDefault();
    const file = event.target.files[0];
    let reader = new window.FileReader();

    reader.readAsArrayBuffer(file);
    reader.onloadend = () => this.convertToBuffer(reader);
  }

  async convertToBuffer(reader: Object): Promise<any> {
    const buffer = await Buffer.from(reader.result);
    this.props.dispatch(onFileChange(buffer));
  }

  onSubmit (event: Object): void {
    event.preventDefault();
    this.props.dispatch(onFileUploading());

    ipfs.files.add(this.props.ipfs.stagedFile, (err, files) => {
      if(err)
        console.log(err)
      else
        fileStorageInstance.methods.addUpload(files[0].hash, []).send({from: web3.eth.defaultAccount}).then(() => {
          this.props.dispatch(onFileUploaded(files[0].hash));
        })
    })
  }



  render() {
    const logged = this.props.user.name;
    const msg = logged ? 'Hello ' + this.props.user.name : 'Log in!';
    const ipfsState = this.props.ipfs.node.status;
    const fileRows = this.props.ipfs.uploadedFiles.map(hash => {
      return (
      <div key={hash} class="file-row">
        <a href={`https://gateway.ipfs.io/ipfs/${hash}`}>
          {hash}
        </a>
      </div>
      )
    })
    return (
      <div class="content">
        <h1>{ `Account: ${web3.eth.defaultAccount}` }</h1>
        {/* <button class="loginBtn" onClick={this.logIn.bind(this)}>Log In</button> */}
        <form onSubmit={this.onSubmit.bind(this)}>
          <input
            class={"button " + ipfsState}
            type="file"
            onChange = {this.captureFile.bind(this)}
          />
          <input type="submit" value="Go!" class="button" />
        </form>
        {fileRows}
      </div>
    );
  }
}

export default App;
