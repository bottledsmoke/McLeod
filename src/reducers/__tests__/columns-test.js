/* global describe it */
import expect from 'expect';
import initialState from '../../../lib/initialState';
import { addNodeToColumn } from '../../actions/columns';
import columns from '../columns';

const state = initialState;

describe('Columns reducer', () => {
  it('returns initialState.columns by default', () => {
    expect(columns(state.columns, { type: null })).toEqual(state.columns);
  });
  it('adds a column using addNodeToColumn', () => {
    console.log(initialState.columns);
    const columnIndex = 0;
    const nodeIndex   = 0;
    expect(
      columns(
        state,
        addNodeToColumn(
          columnIndex, nodeIndex
        )
      )
    ).toEqual(
      initialState
    );
  });
});
