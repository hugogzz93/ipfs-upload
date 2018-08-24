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
  onFileUploaded
 } from '../lib/actions';
import { connect } from 'react-redux';
import {type State} from '../lib/types';
import Web3 from 'web3';
import {FileStorageABI, FileStorageAddress } from '../config/file_storage';

type Props = Object

const web3 = new Web3(Web3.givenProvider || "http://localhost:9545");
web3.eth.defaultAccount = web3.eth.accounts[0];

const fileStorageInstance = web3.eth.contract(FileStorageABI);
fileStorageInstance.at(FileStorageAddress);



@connect((store) => {
  return {
    user: store.sessionReducer,
    ipfs: store.ipfsReducer,
  }
})
class App extends Component<Props> {

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
      if(err) {
        console.log(err)
        return
      }
      this.props.dispatch(onFileUploaded(files[0].hash))
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
        <h1>{ msg }</h1>
        <button class="loginBtn" onClick={this.logIn.bind(this)}>Log In</button>
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
