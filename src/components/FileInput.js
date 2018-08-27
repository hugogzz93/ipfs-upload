//@flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ipfs from '../lib/ipfs';
import Spinner from './spinner';
import { type File } from '../lib/types';
import {
  onFileDataChange,
  onFileUploading,
  onFileUploaded
} from '../lib/actions';


@connect(store => {
  return {
    user: store.sessionReducer,
    ipfs: store.ipfsReducer
  }
})
export default class FileInput extends Component<Object> {

  captureName (event: Object): void {
    event.stopPropagation();
    event.preventDefault();
    const name = event.target.value;
    this.props.dispatch(onFileDataChange('fileName', name));
  }

  captureInfo(event: Object): void {
    event.stopPropagation();
    event.preventDefault();
    const text = event.target.value;
    this.props.dispatch(onFileDataChange('additionalInfo', text));
  }

  captureFile (event: Object): void {
    event.stopPropagation();
    event.preventDefault();
    const file = event.target.files[0];
    const fileName = event.target.files[0].name;

    let reader = new window.FileReader();

    reader.readAsArrayBuffer(file);
    reader.onloadend = async () => {
      const buffer = await this.convertToBuffer(reader);
      this.props.dispatch(onFileDataChange('buffer', buffer));
      this.props.dispatch(onFileDataChange('inputFileName', fileName));
    }
  }

  async convertToBuffer(reader: Object): Promise<any> {
    return await Buffer.from(reader.result);
  }

  onSubmit (event: Object): void {
    event.preventDefault();
    this.props.dispatch(onFileUploading());

    const fileBuffer = this.props.ipfs.stagedFile.buffer;
    const fileName = this.props.ipfs.stagedFile.fileName;
    const additionalInfo = this.props.ipfs.stagedFile.additionalInfo;

    ipfs.files.add(fileBuffer, (err, files) => {
      if(err)
        console.log(err)
      else
        this.props.fileStorageInstance.methods.
          addUpload(files[0].hash, fileName, additionalInfo)
            .send({from: this.props.web3.eth.defaultAccount})
            .then(() => {
              this.props.dispatch(onFileUploaded(files[0].hash));
              location.reload();
            })
    })
  }
  
  render() {
    const fileLabel = this.props.ipfs.stagedFile.inputFileName || 'Choose File';
    const spinner = this.props.ipfs.status == 'uploading' ? <Spinner/> : <input type="submit" class="button" value="Upload" />;
    return (
        <form onSubmit={this.onSubmit.bind(this)} autoComplete="off">
          <div class="card-container">
            <div class="card">
              <div class="card__row">
                <input
                  type="text"
                  id="file-name"
                  placeholder="File name"
                  onChange = {this.captureName.bind(this)}
                />
              </div>
              <div class="card__row">
                <textarea 
                  id="additional-info" 
                  placeholder="Place any additional information here..."
                  onChange = {this.captureInfo.bind(this)}>
                </textarea>
              </div>
              <div class="card__row card__row--accent">
                <label for="file-input">
                  {fileLabel}
                </label>
                <input
                  id="file-input"
                  type="file"
                  onChange = {this.captureFile.bind(this)}
                />
              </div>
            </div>
          </div>
          <div class="card-container">
            {spinner}
          </div>
        </form>
    );
  }
}
