import { combineReducers } from 'redux';
import { nodes, setEditingIndex } from './nodes-reducers';

const rootReducer = combineReducers({
  nodes,
  setEditingIndex,
});

export default rootReducer;
