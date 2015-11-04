import React, { Component, PropTypes } from 'react';
import './Node.css';

/* TODO DO NOT LET GRID ENTER PRODUCTION */
import Grid from './Grid';

export default class Node extends Component {
  render() {
    const { text, size } = this.props;
    if (text) {
      return (
        <div className={"node-container"}
             style={{
               overflow: 'hidden',
               position: 'relative',
               width: String(size) + 'px',
             }}>
          <Grid divisions={4} off unitSize={size} />
          <div className={"node-outer-circle"}
               /* TODO change bg-color to reflect the type of bubble */
               style={{ backgroundColor: 'transparent', }}>
            <div className={"node-inner-circle vertical-center"}
                 /* TODO change bg-color to reflect the type of bubble */
                 style={{ backgroundColor: 'transparent', }}>
              <h3 className={"node-inner-circle-text vertical-center"}>
                {text}
              </h3>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={"node-container"}
             style={{
               overflow: 'hidden',
               position: 'relative',
               width: String(size) + 'px',
               height: String(size) + 'px',
             }}>
           <div className="empty-node"
                onClick={() => this.props.handleClick()}
                style={{
                  width: '20px',
                  height: '20px',
                  margin: '0 auto',
                  position: 'relative',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'white',
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}>
          </div>
        </div>
      );
    }
  }
}

Node.propTypes = {
  size: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
