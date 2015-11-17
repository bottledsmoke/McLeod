import * as constants from '../constants/columns';
import initialState from '../../lib/initialState';

function columns(state = initialState.columns, action) {
  switch (action.type) {
    case constants.ADD_NODE:

      // if (!columns[columnIndex] || !columns[columnIndex][nodeIndex]) {
      //   throw new Error('Node does not exist at this location');
      // }

      const { columnIndex, nodeIndex } = action.payload;

      const sourceColumn = state[columnIndex];
      const nextColumn = state[columnIndex + 1];
      return [
        ...state.slice(0, columnIndex),
        [
          ...state[columnIndex].slice(0, nodeIndex),

          ...sourceColumn,

          ...state[columnIndex].slice( nodeIndex + sourceColumn.length),
        ],
        [
          ...state[columnIndex + 1].slice(
            0, nodeIndex + 1
          ),

          ...nextColumn,

          ...state[columnIndex + 1].slice(
            1 + nodeIndex + nextColumn.length
          )
        ],
        ...state.slice(columnIndex + 2)
      ];
    default:
      return state;
  }
}

export default columns;
