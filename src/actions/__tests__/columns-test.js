/* global describe it */
import expect from 'expect';
import * as constants from '../../constants/columns';
import { addNodeToColumn } from '../columns';

describe('Columns Actions: addNodeToColumn(args)', () => {
  /* args */
  const text = 'T E S T   T E X T   B A B Y';
  const sourceColumn = [ 'id-0', null, 'id-2', null, 'id-4', ];
  const nextColumn   = [ null, 'id-1', 'id-2', 'id-3', null, ];
  const columnIndex  = 0;
  const nodeIndex    = 1;

  it('correctly dispatches actions', () => {
    expect(
      addNodeToColumn( sourceColumn, nextColumn, columnIndex, nodeIndex, text )
    ).toEqual(
      {
        type: constants.ADD_NODE,
        payload: {
          sourceColumn: sourceColumn,
          columnIndex:  columnIndex,
          nextColumn:   nextColumn,
          nodeIndex:    nodeIndex,
          text: text,
        }
      }
    );
  });

  it('won\'t add nodes when there are nodes in the way of its leaves', () => {
    const errColumn = [ 'id-1', 'id-2', 'id-3', 'id-4', 'id-5', ];
    expect(() =>
      addNodeToColumn( errColumn, nextColumn, columnIndex, nodeIndex, text)
    ).toThrow('There\'s a node is blocking the paths ' +
              'of your new node\'s leaves.');
    expect(() =>
      addNodeToColumn( sourceColumn, errColumn, columnIndex, nodeIndex, text)
    ).toThrow('There\'s a node is blocking the paths ' +
              'of your new node\'s leaves.');
  });

  it('won\'t add nodes when columns are too short or long', () => {
    const shortColumn = [ 'id-1', null, 'id-3', null ];
    const longColumn  = [ 'id-1', null, 'id-3', null, 'id-5', null, ];
    expect(() =>
      addNodeToColumn( sourceColumn, shortColumn, columnIndex, nodeIndex, text)
    ).toThrow('Columns must be 5 nodes long');
    expect(() =>
      addNodeToColumn( sourceColumn, longColumn, columnIndex, nodeIndex, text)
    ).toThrow('Columns must be 5 nodes long');
    expect(() =>
      addNodeToColumn( shortColumn, nextColumn, columnIndex, nodeIndex, text)
    ).toThrow('Columns must be 5 nodes long');
    expect(() =>
      addNodeToColumn( longColumn, nextColumn, columnIndex, nodeIndex, text)
    ).toThrow('Columns must be 5 nodes long');
  });
});
