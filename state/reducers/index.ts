import { combineReducers, createStore,applyMiddleware } from 'redux';
import { advertReducer } from './advertReducer';
import { authReducer } from './authReducer';
import { filterReducer } from './filterReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
export const rootReducer = combineReducers({
  advertReducer,
  authReducer,
  filterReducer
});


const store = createStore(rootReducer,{},applyMiddleware(thunk,logger));


export default store;