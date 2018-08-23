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

export type IpfsState = {
  node: { status: $Keys<typeof IpfsConnectionStates>},
  stagedFile: ?Object,
  uploadedFiles: Array<string>

}

export type State = {
  user: UserState,
  ipfs: IpfsState
};


export type Props = Object;
export type ReduxThunk = (Object, ?Function) => void
export type CallbackFn = (error: Error | null, value: string | null) => void
