import React, { Component, PropTypes } from 'react';
import Nodes from '../containers/Nodes';

export default class Columns extends Component {
  render() {
    return (
      <div>
        {this.props.columns.map((column, index) =>
          <Nodes column={column}
                 index={index}
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
