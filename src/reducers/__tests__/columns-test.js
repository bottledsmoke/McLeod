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
    const columnIndex = 0;
    const nodeIndex   = 1;
    const text = 'LOREM IPSUM DOLOR SIN AVRET';
    expect(
      columns(
        state,
        addNodeToColumn(
          state.columns[0], state.columns[1], columnIndex, nodeIndex, text
        )
      )
    ).toEqual(
      initialState
    );
  });
});
