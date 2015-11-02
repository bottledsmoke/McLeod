import uuid from 'node-uuid';

// const initialState = [
//   {
//     id: uuid.v4(),
//     text: 'First Node'
//   },
//   {
//     id: uuid.v4(),
//     text: 'Second Node',
//   },
//   {
//     id: uuid.v4(),
//     text: 'Third Node'
//   }
// ];

const initialNode = {
  id: uuid.v4(),
  leaves: [],
  parents: [],
  text: 'Initial Node',
};

let initialState = {
  initialNode: initialNode.id,
  editingIndex: '',
  columns: [],
  nodes: {},
};

const nodes = [...Array(5)].map((v, i) => {
  let nodeId = null;
  if (i % 2 === 0) {
    nodeId = i === 2 ? initialNode.id : uuid.v4();
  }
  return nodeId;
});

console.log(nodes);

initialState.nodes[initialNode.id] = initialNode;

// function addNode(text, parent, position = 0, state = initialState) {
//   const pos = Math.abs(Math.floor(position));
//   if (pos < 5 && pos >= 0 && parent) {
//     const nodeId = uuid.v4();
//     const leaves = [
//       ...Array(5 - (5 - pos)),
//       parent,
//       ...Array(5 - pos - 1),
//     ];
//     state.nodes[nodeId] = {
//       id: nodeId,
//       leaves: leaves,
//       parents: [initialNode.id],
//       text: text,
//     };
//   } else {
//     throw new Error('Wrong parameters');
//   }
// }
//
// addNode('Node 2', initialNode.id, 3, initialState);

export default initialState;
