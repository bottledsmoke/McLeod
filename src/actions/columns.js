import * as constants from '../constants/columns';
import uuid from 'node-uuid';
// import logError from '../../lib/logError';

export function addNode( columnIndex, nodeIndex ) {

  // if ( sourceColumn.length !== columnLength ||
  //      nextColumn.length !== columnLength ) {
  //   logError(
  //     'Columns must be ' + columnLength + ' nodes long'
  //   );
  // }
  // if ( sourceColumn[1] || sourceColumn[3] ||
  //      nextColumn[0] || nextColumn[4]) {
  //   logError(
  //     'There\'s a node is blocking the paths of your new node\'s leaves.'
  //   );
  // }
  return {
    type: constants.ADD_NODE,
    payload: {
      columnIndex,
      nodeIndex,
    }
  };
}

/*

  Creating a New Node. Occurs onClick on a Potential Node.

  1. Check above and below for active nodes. Abort if so. Return an object
     with the potential nodes above and below.
  2. Make an ID and store it in a constant for the new node's id.
  3. Create the node.
  4. Place the node in a column and nullify above and below.
  5. Update parents to remove links using the object from 1.
  6. Delete the potential nodes above and below using the object from 1.
  7. Do not need to pad columns because no new nodes are being added.

  ---

  Activating a New Node. Occurs onSubmit in a Potential Node.

  1. Take target area snapshot.
  2. Make an updateTemplate using the set nodeTeplate as constrained by
     the snapshot.
  3. Make leaf id's for each in the update template.
  4. Make leaf nodes.
  5. Add leaf ids to the column.
  6. Update the parent node structure to render leaf links using the
     updateTemplate.
  7. Pad other columns (async)

*/


export function activateNode(text, columnIndex, nodeIndex) {
  // placeholder code below.
  return {
    type: constants.ACTIVATE_NODE, 
    payload: {
      text,
      columnIndex,
      nodeIndex
    }
  };
}

function addNodeToColumn(columnIndex, nodeIndex) {
  return function (dispatch) {
    const newNodeId = uuid.v4();
    return dispatch(
      createNode(newNodeId)
    ).then(() =>
      Promise.all([
        activateNode(columnIndex, nodeIndex)
      ])
    ).then(() =>
      equalizeColumnLengths()
    );
  };
}
