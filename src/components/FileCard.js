//@flow
import React, { Component } from 'react';
import {type File} from '../lib/types'
import unixToDate from '../vendor/unixTimestamp';


export default class FileCard extends Component<File> {
  render() {
    return (
      <div class="card-container">
        <div class="card">
          <div class="card__row">
            <a href={`http://gateway.ipfs.io/ipfs/${this.props.ipfsHash}`}>
              <p>
                {this.props.fileName}
                <span class="card__time-stamp">
                  {unixToDate(this.props.timeStamp)}
                </span>
              </p>
            </a>
          </div>
          <div class="card__row">
            <p>
              {this.props.additionalInfo}
            </p>
          </div>
          <div class="card__row card__row--accent">
            <p class="text--weak">
              {this.props.ipfsHash}
            </p>
          </div>
        </div>
    </div>
    )
  }
  
}
