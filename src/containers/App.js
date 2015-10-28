import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Hello from '../components/hello/hello';

class App extends Component {
  render() {
    const { dispatch } = this.props;
    return (
      <Hello text={this.props.message} />
    );
  }
}

function stateToProps(state) {
  return {
    message: state.message
  };
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired
};

export default connect(stateToProps)(App);
