import { combineReducers } from 'redux';
import nodes from './nodes-reducers';

const rootReducer = combineReducers({
  nodes
});

export default rootReducer;
