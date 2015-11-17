import React, { Component, PropTypes } from 'react';
import Node from '../components/Node';
import { setEditingIndex } from '../actions/nodes';

class Column extends Component {
  render() {
    const { dispatch, editingIndex, nodes } = this.props;
    return (
      <div
        className="columnContainer"
        style={{ float: 'left', marginRight: '50px'}}>
        {this.props.column.map((nodeId, index) => {
          // TODO Use Undefined nodeIds as spacers
          if (nodeId) {
            return (
              <Node
                handleClick={() =>
                  this.props.abba(
                      this.props.columnIndex, index
                )}
                index={index}
                isBeingEdited={editingIndex === nodeId}
                key={`node-${nodeId}`}
                setEditingIndex={() =>
                  dispatch(setEditingIndex(nodeId))
                }
                size={200}
                text={nodes[nodeId].text}
              />);
          } else {
            return (
              <div className="spacer"
                   key={`empty-node-${Math.floor(Math.random() * 100)}`}
                   style={{height: '100px'}}>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

import { connect } from 'react-redux';

function stateToProps(state) {
  return {
    editingIndex: state.editingIndex,
    nodes: state.nodes,
  };
}

Column.propTypes = {
  column: PropTypes.array.isRequired,
  columnIndex: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  editingIndex: PropTypes.string.isRequired,
  nodes: PropTypes.object.isRequired
};

export default connect(stateToProps)(Column);
