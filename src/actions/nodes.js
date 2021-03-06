import uuid from 'node-uuid';
import * as constants from '../constants/nodes';

export function addNode(text) {
  return {
    type: constants.ADD_NODE,
    payload: {
      id: uuid.v4(),
      text: text,
    }
  };
}

export function editNode(nodeId, text) {
  return {
    type: constants.EDIT_NODE,
    payload: {
      id: nodeId,
      text: text,
    }
  };
}

export function removeNode(nodeId) {
  return {
    type: constants.REMOVE_NODE,
    payload: {
      id: nodeId,
    }
  };
}

export function setEditingIndex(nodeId) {
  return {
    type: constants.SET_EDITING_INDEX,
    payload: {
      id: nodeId
    }
  };
}
