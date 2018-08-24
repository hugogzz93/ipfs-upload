//@flow
import {type IpfsState, type Action} from './types';

const defaultState: IpfsState = {
  node: { status: 'ready' },
  stagedFile: null,
  uploadedFiles: []
}

const ipfsReducer = function(state: IpfsState=defaultState, action: Action): IpfsState {
  switch(action.type) {
    case 'FILE_CHANGE': {
      const newState: IpfsState = {...state};
      newState.stagedFile = action.payload.file
      return newState;
    }
    case 'FILE_UPLOADING': {
      const newState: IpfsState = { 
        ...state,
        node: {status: 'uploading'}
      }
      return newState;
    }
    case 'FILE_UPLOADED': {
      const newState: IpfsState = { 
        ...state,
        node: {status: 'ready'},
        stagedFile: null
      };
      newState.uploadedFiles.push(action.payload.ipfsHash);
      return newState;
    }
    case 'SET_STORED_FILES': {
      const newState: IpfsState = {
        ...state,
        uploadedFiles: action.payload.files
      }
      return newState;
    }
  }
  return state;
}

export default ipfsReducer;
