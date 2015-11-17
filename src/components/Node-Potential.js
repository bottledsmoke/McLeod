import React, { PropTypes } from 'react';

import { VelocityComponent } from 'velocity-react';


var PotentialNode = React.createClass({
  propTypes: {
    isBeingEdited: PropTypes.bool.isRequired,
    setEditingIndex: PropTypes.func.isRequired,
    size: PropTypes.number.isRequired,
  },

  animationProps: {
    active: {
      duration: 300,
      animation: {
        scale: 1
      },
      easing: 'easeInCubic',
    },
    inactive: {
      duration: 300,
      animation: {
        scale: 0.1
      },
      easing: 'easeInCubic',
    }
  },

  render: function () {
    const animation = this.props.isBeingEdited ?
                      this.animationProps.active :
                      this.animationProps.inactive;
    return (
      <div className={"node-container"}
           style={{
             overflow: 'hidden',
             position: 'relative',
             width: String(this.props.size) + 'px',
             height: String(this.props.size) + 'px',
           }}>
        <VelocityComponent {...animation}>
          <div className={"node-outer-circle"}
               style={{ backgroundColor: 'transparent', }}>
            <div className={"node-inner-circle vertical-center"}
                 style={{ backgroundColor: 'transparent', }}>
              <div className={'empty-node'}
                  onClick={() => this.props.setEditingIndex()}>
              </div>
            </div>
          </div>
        </VelocityComponent>
      </div>
    );
  }
});

export default PotentialNode;
