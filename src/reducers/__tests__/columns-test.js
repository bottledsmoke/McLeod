/* global describe it */
import expect from 'expect';
import initialState from '../../../lib/initialState';
import columns from '../columns';

const state = initialState;

describe('Columns reducer', () => {
  it('returns initialState.columns by default', () => {
    expect(columns(state.columns, { type: null })).toEqual(state.columns);
  });
});
