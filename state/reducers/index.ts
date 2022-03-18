import { combineReducers, createStore,applyMiddleware } from 'redux';
import { advertReducer } from './advertReducer';
import { tokenReducer } from './tokenReducer';
import logger from 'redux-logger';
export const rootReducer = combineReducers({
  advertReducer,
  tokenReducer
});


const store = createStore(rootReducer,{},applyMiddleware(logger));


export default store;