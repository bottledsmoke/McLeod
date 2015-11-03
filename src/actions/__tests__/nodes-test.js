// import expect from 'expect';
// import * as constants from '../../constants/nodes-constants';
//
// import { addNode, removeNode, editNodeText } from '../nodes-actions';
//
// /* global describe, it, */
//
// describe('Nodes Action Creators return correctly formatted actions', () => {
//
//   const testText = 'TEST TEXT';
//   const testId = 1234;
//
//   it('addNode(text)', () => {
//     const result = addNode(testText);
//     const expectedResult = {
//       type: constants.ADD_NODE,
//       payload: {
//         text: testText,
//         id: testId,
//       }
//     };
//     expect(result.type).toEqual(expectedResult.type);
//     expect(result.payload.text).toEqual(expectedResult.payload.text);
//     expect(result.payload.id).toExist().toBeA('string');
//   });
//   it('removeNode(nodeId)', () => {
//     expect(removeNode(testId)).toEqual({
//       type: constants.REMOVE_NODE,
//       payload: {
//         id: testId
//       }
//     });
//   });
//   it('editBlockText(nodeId, text)', () => {
//     expect(editNodeText(testId, testText)).toEqual({
//       type: constants.EDIT_NODE_TEXT,
//       payload: {
//         id: testId,
//         text: testText
//       }
//     });
//   });
// });
