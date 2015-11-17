import React, { PropTypes } from 'react';

import { VelocityComponent } from 'velocity-react';


var PotentialNode = React.createClass({
  propTypes: {
    activateNode: PropTypes.func.isRequired,
    isBeingEdited: PropTypes.bool.isRequired,
    setEditingIndex: PropTypes.func.isRequired,
    size: PropTypes.number.isRequired,
  },

  animationProps: {
    active: {
      duration: 200,
      animation: {
        scale: 1,
        backgroundColorAlpha: '0',
      },
      easing: 'ease',
    },
    inactive: {
      duration: 200,
      animation: {
        scale: 0.1,
        backgroundColorAlpha: '1'
      },
      easing: 'ease',
    }
  },

  handleSubmit: function (e) {
    if (e.keyCode === 13) {
      const node = this.refs.input;
      const text = node.value;
      this.props.activateNode(text);
      node.value = '';
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
               onClick={() => this.props.setEditingIndex()}
               style={{ backgroundColor: '#FFF',
                        cursor: 'pointer',
                        position: 'relative'}}>
            <div className={"node-inner-circle vertical-center"}
                 style={{ backgroundColor: 'transparent', }}>
              {this.props.isBeingEdited ?
                <input
                  autoFocus
                  className="vertical-center node-inner-circle-input"
                  onBlur={() => this.props.setEditingIndex('')}
                  onKeyUp={(e) => this.handleSubmit(e)}
                  ref="input"
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid white',
                    textAlign: 'center',
                  }}
                  type="text" /> :
                <div className={'empty-node'}></div>
              }
            </div>
          </div>
        </VelocityComponent>
      </div>
    );
  }
});

export default PotentialNode;
