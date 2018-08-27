import { combineReducers } from 'redux';
import follow from './follow.js';
import user from './user.js'

const reducerModules = {
  follow,
  user
};


export default combineReducers(reducerModules);
