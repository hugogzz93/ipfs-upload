export type Action = {
  name: string,
  payload: Object
}

export type Credentials = {
  name: string,
  phone?: string,
  country?:string
}

export type User = {
  name: string, phone?: string, country?: string
}

export type State = {
  user: User
};

