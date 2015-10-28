import React, { Component, PropTypes } from 'react';
import Node from './Node';

export default class Nodes extends Component {
  render() {
    console.log('nodes ', this.props);
    return (
      <div className="nodes-container">
        {this.props.nodes.map((node) =>
          <Node text={node.text} />
        )}
      </div>
    );
  }
}

Nodes.propTypes = {
  nodes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
