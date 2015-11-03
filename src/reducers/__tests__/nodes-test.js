// /* global describe, it, beforeEach */
// import expect from 'expect';
// import { nodes } from '../nodes-reducers';
// import * as constants from '../../constants/nodes-constants';
// import initialState from '../../../lib/initialState';
//
// describe('Nodes Reducer', () => {
//   var state;
//   const testText = 'TEST TEXT';
//   const testId = '1234';
//
//   beforeEach(() => {
//     state = initialState;
//   });
//
//   it('should add nodes using addNode(text)', () => {
//     expect(
//       nodes(state, {
//         type: constants.ADD_NODE,
//         payload: {
//           id: testId,
//           text: testText,
//         }
//       })
//     ).toEqual([
//       ...state,
//       {
//         id: testId,
//         text: testText,
//       }
//     ]);
//   });
//
//   it('should remove nodes using removeNode(nodeId)', () => {
//     const removeIndex = Math.floor(state.length / 2);
//     expect(
//       nodes(state, {
//         type: constants.REMOVE_NODE,
//         payload: {
//           id: state[removeIndex].id
//         }
//       })
//     ).toEqual([
//       ...state.slice(0, removeIndex),
//       ...state.slice(removeIndex + 1)
//     ]);
//   });
//
//   it('should edit node text using editNodeText(nodeId, text)', () => {
//     const editIndex = Math.floor(state.length / 2);
//     expect(
//       nodes(state, {
//         type: constants.EDIT_NODE_TEXT,
//         payload: {
//           id: state[editIndex].id,
//           text: testText
//         }
//       })
//     ).toEqual([
//       ...state.slice(0, editIndex),
//       {
//         ...state[editIndex],
//         text: testText
//       },
//       ...state.slice(editIndex + 1)
//     ]);
//   });
// });
