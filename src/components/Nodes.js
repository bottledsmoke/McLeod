import React, { Component, PropTypes } from 'react';
import Node from './Node';

export default class Nodes extends Component {
  render() {
    console.log('nodes ', this.props);
    return (
      /* TODO Put drop area grid above each node where
              the user can add nodes above existing ones */
      <div className="nodes-container">
        {this.props.nodes.map((node) =>
          <Node text={node.text} />
        )}
      </div>
      /* TODO Put drop area grid below each node where
              the user can add nodes below existing ones */
    );
  }
}

Nodes.propTypes = {
  nodes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
