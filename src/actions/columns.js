import * as constants from '../constants/columns';

const columnLength = 5;

export function addNodeToColumn( srcCol, nextCol, colIndex, nodeIndex, text ) {
  if ( srcCol.length !== columnLength || nextCol.length !== columnLength ) {
    throw new Error('Columns must be ' + columnLength + ' nodes long');
  }
  if (srcCol[1] || srcCol[3] || nextCol[0] || nextCol[4]) {
    throw new Error('Cannot add node. There\'s a node is blocking the ' +
                    'paths of your new node\'s leaves');
  }
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
