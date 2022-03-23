import { combineReducers, createStore,applyMiddleware } from 'redux';
import { advertReducer } from './advertReducer';
import { authReducer } from './authReducer';
import logger from 'redux-logger';
export const rootReducer = combineReducers({
  advertReducer,
  authReducer
});


const store = createStore(rootReducer,{},applyMiddleware(logger));


export default store;