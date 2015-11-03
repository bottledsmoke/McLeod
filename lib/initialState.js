import uuid from 'node-uuid';

let initialState = {
  initialNode: uuid.v4(),
  editingIndex: '',
  columns: [],
  nodes: {},
};

const { initialNode, nodes } = initialState;

nodes[initialNode] = {
  id: initialNode,
  leaves: [...Array(5)],
  parents: [],
  text: 'Initial Node',
};

// make columns
const sourceNodes = [...Array(5)].map((v, i) => {
  if (i % 2 === 0 && i !== 2) {
    const nodeId = uuid.v4();
    nodes[initialNode].leaves[i] = nodeId;
    nodes[nodeId] = makeNode(nodeId, [initialNode]);
    return nodeId;
  }
  if (i === 2) {
    return initialNode;
  }
  return null;
});

const nextNodes = [...Array(5)].map((v, i) => {
  if (i !== 0 && i !== 4) {
    const nodeId = uuid.v4();
    nodes[initialNode].leaves[i] = nodeId;
    nodes[nodeId] = makeNode(nodeId, [initialNode]);
    return nodeId;
  }
  return null;
});
// end make columns

initialState.columns = [sourceNodes, nextNodes];

function makeNode(id, parents = [], leaves = [], text = '') {
  return {
    id: id,
    leaves: leaves,
    parents: parents,
    text: text,
  };
}

export default initialState;
