import React, { Component, PropTypes } from 'react';

export default class Hello extends Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}

Hello.propTypes = {
  text: PropTypes.string.isRequired,
};
