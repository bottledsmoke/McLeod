/* global describe it */
import expect from 'expect';
import * as constants from '../../constants/columns';
import { addNodeToColumn } from '../columns';

describe('Columns Actions: addNodeToColumn(args)', () => {
  /* args */
  const columnIndex  = 0;
  const nodeIndex    = 1;

  it('correctly dispatches actions', () => {
    expect(
      addNodeToColumn(  columnIndex, nodeIndex )
    ).toEqual(
      {
        type: constants.ADD_NODE,
        payload: {
          columnIndex:  columnIndex,
          nodeIndex:    nodeIndex,
        }
      }
    );
  });
});
