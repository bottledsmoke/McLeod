import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {setEditingIndex} from '../actions/nodes-actions';

import Nodes from '../components/Nodes';

class App extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <Nodes
             dispatchSetEditingIndex = {(id) =>
               dispatch(setEditingIndex(id))
             }
             editingIndex={this.props.editingIndex}
             nodes={this.props.nodes} />
    );
  }
}

function stateToProps(state) {
  return {
    initialNode:  state.initialNode,
    editingIndex: state.editingIndex,
    columns: state.columns,
    nodes:   state.nodes,
  };
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  editingIndex: PropTypes.string.isRequired,
  nodes: PropTypes.array.isRequired,
};

export default connect(stateToProps)(App);
