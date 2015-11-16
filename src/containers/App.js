import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addNodeToColumn } from '../actions/Columns';
// import { setEditingIndex } from '../actions/nodes';

// import Nodes from '../components/Nodes';
import Columns from '../components/Columns';

class App extends Component {
  // prepareAddNode(columnIndex, nodeIndex) {
  //   const { columns } = this.props;
  //   const sourceColumn = columns[columnIndex];
  //   const nextColumn = columns[columnIndex + 1];
  // }
  render() {
    const { dispatch, columns } = this.props;
    return (
      <Columns
        columns={columns}
        handleAddNode={(columnIndex, nodeIndex, sourceColumn, nextColumn) =>
          dispatch(
            addNodeToColumn(
              sourceColumn, nextColumn, columnIndex, nodeIndex, )
            )}
        />
    );
  }
}

function stateToProps(state) {
  return {
    initialNode:  state.initialNode,
    editingIndex: state.editingIndex,
    columns: state.columns,
  };
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  editingIndex: PropTypes.string.isRequired,
  nodes: PropTypes.array.isRequired,
};

export default connect(stateToProps)(App);
