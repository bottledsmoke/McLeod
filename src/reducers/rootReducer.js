import { combineReducers } from 'redux';

const initialState = {
  text: 'Bonjour World'
};

function message(state = initialState.text, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  message
});

export default rootReducer;
