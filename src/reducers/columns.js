import * as constants from '../constants/columns';
import initialState from '../../lib/initialState';

function columns(state = initialState.columns, action) {
  const { payload } = action;
  switch (action.type) {
    case constants.ADD_NODE:
      return [
        ...columns.slice(0, payload.columnNumber),
        [
          ...columns[payload.columnNumber].slice(0, payload.startingIndex),

          ...payload.sourceColumn,

          ...columns[payload.columnNumber].slice( payload.startingIndex +
                                                  payload.sourceColumn.length),
        ],
        [
          ...columns[payload.columnNumber + 1].slice(
            0, payload.startingIndex + 1
          ),

          ...payload.nextColumn,

          ...columns[payload.columnNumber + 1].slice(
            1 + payload.startingIndex + payload.nextColumn.length
          )
        ],
        ...columns.slice(payload.columnNumber + 2)
      ];
    default:
      return state;
  }
}

export default columns;
