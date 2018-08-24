//@flow
import {type Action, type User, type ReduxThunk, type CallbackFn} from './types';
import ipfs from './ipfs'

export function logIn(credentials: User): Action {
  return {
    type: 'LOG_IN',
    payload: credentials
  }
}

export function connectIpfs(callBack: CallbackFn ): ReduxThunk  {
  return (dispatch, getState) => {
  }
}

export function onFileChange(file: Object): Action {
  return {
    type: 'FILE_CHANGE',
    payload: { file }
  }
}

export function onFileUploaded(ipfsHash: String): Action {
  return {
    type: 'FILE_UPLOADED',
    payload: { ipfsHash }
  }
}

export function onFileUploading(): Action {
  return {
    type: 'FILE_UPLOADING',
    payload: {}
  }
}
