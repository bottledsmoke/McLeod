import { combineReducers } from 'redux';
import { nodes, editingIndex, initialNode } from './nodes';
import columns from './columns';

const rootReducer = combineReducers({
  initialNode,
  editingIndex,
  nodes,
  columns,
});

export default rootReducer;
