import { createStore as _createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import reducer from './modules/reducer.js';

export default function createStore(initialState = {}) {
  const middleware = [thunkMiddleware, promiseMiddleware];

  let finalCreateStore;
  
  finalCreateStore = applyMiddleware(...middleware)(_createStore);
 

  const store = finalCreateStore(reducer, initialState);

  return store;
}
