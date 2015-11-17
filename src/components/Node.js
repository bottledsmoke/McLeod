import React, { Component, PropTypes } from 'react';
import './Node.css';

/* TODO DO NOT LET GRID ENTER PRODUCTION */
import Grid from './Grid';

export default class Node extends Component {
  render() {
    const { text, size, isBeingEdited } = this.props;
    if (text || isBeingEdited) {
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
                  {isBeingEdited ?
                   <input type="text"
                          autofocus="true"
                          style={{
                            backgroundColor: 'transparent',
                            border: 'none',
                            borderBottom: '1px solid white',
                            textAlign: 'center',
                            width: '100%',
                          }}
                    /> :
                    text}
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
           <div className={'empty-node'}
                onClick={() => this.props.setEditingIndex()}>
          </div>
        </div>
      );
    }
  }
}

Node.propTypes = {
  isBeingEdited: PropTypes.bool.isRequired,
  setEditingIndex: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};
