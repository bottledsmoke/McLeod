import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addNode } from '../actions/Columns';

import Columns from '../components/Columns';

class App extends Component {
  render() {
    const { dispatch, columns } = this.props;
    return (
      <Columns
        columns={columns}
        handleAddNode={(columnIndex, nodeIndex) =>
          dispatch(addNode(columnIndex, nodeIndex))}
        />
    );
  }
}

function stateToProps(state) {
  return {
    editingIndex: state.editingIndex,
    columns: state.columns,
  };
}

App.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(stateToProps)(App);
