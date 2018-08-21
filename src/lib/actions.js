//@flow
import {type Action, type Credentials} from './types';

export function logIn(credentials: Credentials): Action {
  return {
    type: 'LOG_IN',
    credentials
  }
}
