import * as constants from '../constants/columns';

export function addNodeToColumn( sourceColumn,
                                 nextColumn,
                                 columnNumber,
                                 startingIndex,
                                 text ) {
  return {
    type: constants.ADD_NODE,
    payload: {
      columnNumber:  columnNumber,
      startingIndex: startingIndex,
      sourceColumn:  sourceColumn,
      nextColumn:    nextColumn,
      text:          text,
    }
  };
}
