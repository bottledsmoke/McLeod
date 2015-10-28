import { findIndex } from 'lodash';
import * as constants from '../constants/nodes-constants';

import initialState from '../../lib/initialState.js';

function nodes(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case constants.ADD_NODE:
      return [
        ...state,
        {
          id: payload.id,
          text: payload.text,
        }
      ];
    case constants.REMOVE_NODE:
      const removalIndex = findIndex(state, 'id', payload.id);
      return [
        ...state.slice(0, removalIndex),
        ...state.slice(removalIndex + 1)
      ];
    case constants.EDIT_NODE_TEXT:
      const editIndex = findIndex(state, 'id', payload.id);
      return [
        ...state.slice(0, editIndex),
        {
          ...state[editIndex],
          text: payload.text
        },
        ...state.slice(editIndex + 1)
      ];
    default:
      return state;
  }
}

export default nodes;