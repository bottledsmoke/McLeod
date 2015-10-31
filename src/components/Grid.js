import React, { Component, PropTypes } from 'react';

export default class Grid extends Component {
  render() {
    const divisions = this.props.divisions || 2;
    const majorUnitSize = this.props.unitSize || 300;

    const config = {
      majorUnitSize: majorUnitSize,
      minorUnitSize: majorUnitSize / divisions,
      gridSize: 6,
      lineWeight: 1,
      color: {
        major: '#3f3f3f',
        minor: '#f3f3f3',
      },
    };

    return (
        <div className={'grid-major-unit'}
             style={{
               position: 'absolute',
               top:  '0',
               left: '0',
               height: '100%',
               width:  '100%',
             }}>
          <div className={'grid-major-outline'}
               style={{
                 position: 'absolute',
                 top:  '0',
                 left: '0',
                 height: '100%',
                 width:  '100%',
                 border: config.lineWeight + 'px solid ' + config.color.major,
                 boxSizing: 'border-box',
               }}>
          </div>
          {[...Array(divisions * divisions)].map((val) =>
            <div className={'grid-minor-unit'}
                 style={{
                   height: String('100' / divisions) + '%',
                   width:  String('100' / divisions) + '%',
                   boxSizing: 'border-box',
                   border: config.lineWeight + 'px solid ' + config.color.minor,
                  //  borderTop: 'none',
                  //  borderLeft: 'none',
                   float: 'left',
                 }}>
            </div>
          )}
        </div>
      // <div className={'grid-container'}
      //      style={{position: 'relative'}}>
      //   {[...Array(config.gridSize)].map((i, index) =>
      //     <div className={'grid-row ' + index}
      //          style={{
      //            position: 'absolute',
      //            top: String(config.minorUnitSize * index) + 'px',
      //            zIndex: -9999,
      //          }}>
      //       {[...Array(config.gridSize)].map((j, innerIndex) =>
      //       <div style={{
      //         position: 'absolute',
      //         width: config.minorUnitSize + 'px',
      //         height: config.minorUnitSize + 'px',
      //         boxSizing: 'border-box',
      //         border: config.lineWeight + 'px solid blue',
      //         left: config.minorUnitSize * innerIndex,
      //       }}></div>
      //       )}
      //     </div>
      //   )}
      // </div>
    );
  }
}

Grid.propTypes = {
  divisions: PropTypes.number.isRequired,
  unitSize: PropTypes.number.isRequred,
};
