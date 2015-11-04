import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
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

function stateToProps(state) {
  return {
    nodes: state.nodes,
  };
}

Column.propTypes = {
  column: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  nodes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(stateToProps)(Column);
