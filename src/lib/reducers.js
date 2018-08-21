//@flow
import { combineReducers } from 'redux';
import {type State, type Action} from './types';

const defaultState: State = {
  user: {name: null}
}

const sessionReducer = function(state: State=defaultState, action: Action): State {
  const credentials = action.credentials;
  switch(action.type) {
    case 'LOG_IN': { 
      state = {
        ...state,
        user: {
          name: credentials.name,
          phone: credentials.phone,
          country: credentials.country 
        }
      }
      break;
    }
  }
  return state;
}

export default combineReducers({
  sessionReducer
})
