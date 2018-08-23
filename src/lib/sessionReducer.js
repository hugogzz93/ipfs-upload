//@flow
import {type UserState, type Action} from './types';

const defaultState: UserState = {
  name: ''
}

const sessionReducer = function(state: UserState=defaultState, action: Action): UserState {
  const user = action.payload
  switch(action.type) {
    case 'LOG_IN': { 
      const newState = {
        ...state,
        user: {
          name: user.name,
          phone: user.phone,
          country: user.country 
        }
      }
      return newState;
    }
  }
  return state;
}

export default sessionReducer;
