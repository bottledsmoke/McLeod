import React, { Component, PropTypes } from 'react';

export default class Grid extends Component {
  render() {
    const config = {
      unitSize: 150,
      gridSize: 6,
      lineWeight: 1,
    };
    return (
      <div className={'grid-container'}
           style={{position: 'relative'}}>
        {[...Array(config.gridSize)].map((i, index) =>
          <div className={'grid-row ' + index}
               style={{
                 position: 'absolute',
                 top: String(config.unitSize * index) + 'px',
                 zIndex: -9999,
               }}>
            {[...Array(config.gridSize)].map((j, innerIndex) =>
            <div style={{
              position: 'absolute',
              width: config.unitSize + 'px',
              height: config.unitSize + 'px',
              boxSizing: 'border-box',
              border: config.lineWeight + 'px solid blue',
              left: config.unitSize * innerIndex,
            }}></div>
            )}
          </div>
        )}
      </div>
    );
  }
}

Grid.propTypes = {
  unitSize: PropTypes.number.isRequred,
};
