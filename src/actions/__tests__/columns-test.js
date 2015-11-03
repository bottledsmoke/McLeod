/* global describe it */
import expect from 'expect';
import * as constants from '../../constants/columns';
import { addNodeToColumn } from '../columns';

describe('Columns Action Creators', () =>{
  it('correctly dispatch addNodeToColumn(args) actions', () => {
    /* args sourceColumn, nextColumn, columnNumber, startingIndex, text */
    const srcCol    = [ 'id-0', 'id-1', 'id-2', 'id-3', 'id-4', ];
    const nextCol   = [ 'id-0', 'id-1', 'id-2', 'id-3', 'id-4', ];
    const colIndex  = 0;
    const nodeIndex = 1;
    const text = 'T E S T   T E X T   B A B Y';
    expect(
      addNodeToColumn(srcCol, nextCol, colIndex, nodeIndex, text)
    ).toEqual(
      {
        type: constants.ADD_NODE,
        payload: {
          nodeIndex: nodeIndex,
          columnIndex: colIndex,
          sourceColumn: srcCol,
          nextColumn: nextCol,
          text: text,
        }
      }
    );
  });
});
