import React, { Component, PropTypes } from 'react';

export default class Node extends Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}

Node.propTypes = {
  text: PropTypes.string.isRequired
};
