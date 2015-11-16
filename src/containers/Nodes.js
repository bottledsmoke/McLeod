import React, { Component, PropTypes } from 'react';
import Node from '../components/Node';

class Column extends Component {
  render() {
    const { nodes } = this.props;
    return (
      <div className="columnContainer" style={{ float: 'left'}}>
        {this.props.column.map((nodeId, index) => {
          // TODO Use Undefined nodeIds as spacers
          if (nodeId) {
            return (
              <Node
                handleClick={() =>
                  this.props.abba(
                    index, this.props.columnIndex, this.props.column,
                  )}
                index={index}
                size={200}
                text={nodes[nodeId].text}

              />);
          } else {
            return <div className="spacer" style={{height: '100px'}}></div>;
          }
        })}
      </div>
    );
  }
}

import { connect } from 'react-redux';

function stateToProps(state) {
  return {
    nodes: state.nodes,
  };
}

Column.propTypes = {
  column: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  columnIndex: PropTypes.number.isRequired,
  nodes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(stateToProps)(Column);
