import React, { Component, PropTypes } from 'react';
import './Node.css';

export default class Node extends Component {
  render() {
    return (
      <div className={"node-outer-circle"}
           /* TODO change bg-color to reflect the type of bubble */
           style={{ backgroundColor: 'transparent', }}>
        <div className={"node-inner-circle vertical-center"}
             /* TODO change bg-color to reflect the type of bubble */
             style={{ backgroundColor: 'transparent', }}>
          <h3 className={"node-inner-circle-text vertical-center"}>
            {this.props.text}
          </h3>
        </div>
      </div>
    );
  }
}

Node.propTypes = {
  text: PropTypes.string.isRequired
};
