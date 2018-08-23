//@flow
import { combineReducers } from 'redux';
import {type State, type Action} from './types';
//
//stores
import sessionReducer from './sessionReducer';
import ipfsReducer from './ipfsReducer';

export default combineReducers({
  sessionReducer,
  ipfsReducer
})
