//@flow
import {
  type IpfsState,
  type Action,
  type File
} from './types';

const defaultState: IpfsState = {
  status: 'ready',
  stagedFile: {
    fileName: '',
    ipfsHash: ''
  },
  uploadedFiles: []
}

const ipfsReducer = function(state: IpfsState=defaultState, action: Action): IpfsState {
  switch(action.type) {
    case 'FILE_CHANGE': {
      const newState: IpfsState = {...state};
      newState.stagedFile[action.payload.key] = action.payload.data;
      return newState;
    }
    case 'FILE_UPLOADING': {
      const newState: IpfsState = { 
        ...state,
        status: 'uploading'
      }
      return newState;
    }
    case 'FILE_UPLOADED': {
      const newState: IpfsState = { 
        ...state,
        status: 'ready',
        stagedFile: defaultState.stagedFile
      };
      const file: File = {
        ...state.stagedFile,
        ipfsHash: action.payload.ipfsHash
      }
      newState.uploadedFiles.push(file);
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
