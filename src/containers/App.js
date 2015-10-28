import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Nodes from '../components/Nodes';

class App extends Component {
  render() {
    // const { dispatch } = this.props;
    return (
      <Nodes nodes={this.props.nodes} />
    );
  }
}

function stateToProps(state) {
  return {
    nodes: state.nodes
  };
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nodes: PropTypes.array.isRequired
};

export default connect(stateToProps)(App);
