import React, { PropTypes } from 'react';
import Node from '../components/Node';
import PotentialNode from '../components/Node-Potential';
import { setEditingIndex } from '../actions/nodes';

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
      if (nodeId) {
        if (nodes[nodeId].text) {
          return (
            <Node
              handleClick={() => this.dispatchClick(nodeIndex)}
              isBeingEdited={editingIndex === nodeId}
              key={`node-${nodeId}`}
              setEditingIndex={() =>
                dispatch(setEditingIndex(nodeId))
              }
              size={200}
              text={nodes[nodeId].text}
            />
          );
        } else {
          return (
            <PotentialNode
              handleClick={() => this.dispatchClick(nodeIndex)}
              isBeingEdited={editingIndex === nodeId}
              key={`node-${nodeId}`}
              setEditingIndex={() =>
                dispatch(setEditingIndex(nodeId))
              }
              size={200}
            />
          );
        }
      } else {
        return (
          <div className="spacer"
               key={`empty-node-${Math.floor(Math.random() * 100)}`}
               style={{height: '50px'}}>
          </div>
        );
      }
    });

    return (
      <div className="columnContainer"
           style={{ float: 'left',
                    marginRight: '50px'
      }}>
        {nodeList}
      </div>
    );
  }
});

import { connect } from 'react-redux';

function stateToProps(state) {
  return {
    editingIndex: state.editingIndex,
    nodes: state.nodes,
  };
}

export default connect(stateToProps)(Column);
