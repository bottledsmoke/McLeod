import React, { PropTypes } from 'react';
import uuid from 'node-uuid';

import Node from '../components/Node';
import PotentialNode from '../components/Node-Potential';
import { setEditingIndex } from '../actions/nodes';

import { activateNode } from '../actions/columns';
import { connect } from 'react-redux';

function stateToProps(state) {
  return {
    editingIndex: state.editingIndex,
    nodes: state.nodes,
  };
}

const Column = React.createClass({
  propTypes: {
    column: PropTypes.array.isRequired,
    columnIndex: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
    dispatchClick: PropTypes.func.isRequired,
    editingIndex: PropTypes.string.isRequired,
    nodes: PropTypes.object.isRequired,
  },

  dispatchClick: function (nodeIndex) {
    this.props.dispatchClick(this.props.columnIndex, nodeIndex);
  },

  render: function () {
    const { dispatch, editingIndex, nodes } = this.props;

    const nodeList = this.props.column.map((nodeId, nodeIndex) => {
      const sharedProps = {
        handleClick: () => this.dispatchClick(nodeIndex),
        setEditingIndex: (id = nodeId) => dispatch(setEditingIndex(id)),
        isBeingEdited: editingIndex === nodeId,
        key: `node-${nodeId}`,
        size: 200,
      };

      if (nodeId) {
        if (nodes[nodeId].text) {
          return <Node {...sharedProps} text={nodes[nodeId].text} />;
        } else {
          return (
            <PotentialNode
              {...sharedProps}
              activateNode={(text) =>
                dispatch(activateNode(text, this.props.columnIndex, nodeIndex))
              }
            />);
        }
      } else {
        return (
          /* TODO Make sure that spacers allow the nodes to be aligned by
                  compensating for the lack of a potential node. At the moment,
                  they work fine for those in the same column as an activated
                  node, but when three potential nodes border each other, these
                  three nodes are not spaced correctly.
          */
          <div className="spacer"
               key={`empty-${uuid.v4()}`}
               style={{height: '50px'}}>
          </div>
        );
      }
    });

    return (
      <div className="columnContainer"
           style={{ float: 'left', marginRight: '50px'}}>
        {nodeList}
      </div>
    );
  }
});

export default connect(stateToProps)(Column);
