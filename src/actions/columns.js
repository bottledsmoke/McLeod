import * as constants from '../constants/columns';

export function addNodeToColumn( srcCol, nextCol, colIndex, nodeIndex, text ) {
  return {
    type: constants.ADD_NODE,
    payload: {
      nodeIndex:     nodeIndex,
      columnIndex:   colIndex,
      sourceColumn:  srcCol,
      nextColumn:    nextCol,
      text: text,
    }
  };
}
