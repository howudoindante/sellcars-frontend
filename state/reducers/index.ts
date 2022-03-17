import { combineReducers, createStore,applyMiddleware } from 'redux';
import { advertReducer } from './advertReducer';
import logger from 'redux-logger';
export const rootReducer = combineReducers({
  advertReducer,
});


const store = createStore(rootReducer,{},applyMiddleware(logger));


export default store;