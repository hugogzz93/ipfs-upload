//@flow
export type Action = {
  type: string,
  payload: Object
}

export type User = {
  name: string,
  phone?: string,
  country?: string
}

export type UserState = User;

const IpfsConnectionStates = {
  ready: 0,
  uploading: 1
}

export type File= {
  fileName: string,
  ipfsHash: string,
  timeStamp?: string,
  additionalInfo?: string,
  inputFileName?: string
}

export type IpfsState = {
  status: $Keys<typeof IpfsConnectionStates>,
  stagedFile: File,
  uploadedFiles: Array<File>

}

export type State = {
  user: UserState,
  ipfs: IpfsState
};




export type Props = Object;
export type ReduxThunk = (Object, ?Function) => void
export type CallbackFn = (error: Error | null, value: string | null) => void
