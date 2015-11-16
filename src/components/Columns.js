import React, { Component, PropTypes } from 'react';
import Nodes from '../containers/Nodes';

export default class Columns extends Component {
  render() {
    return (
      <div>
        {this.props.columns.map((column, index) =>
          <Nodes
            abba={(columnIndex, nodeIndex, sourceColumn) =>
              this.props.handleAddNode(
                columnIndex, nodeIndex,
                sourceColumn, this.props.columns[columnIndex + 1]
              )}
            column={column}
            columnIndex={index}
          />
        )}
      </div>
    );
  }
}

Columns.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.string.isRequired
    ).isRequired
  ).isRequired,
};
