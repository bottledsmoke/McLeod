var uuid = require('node-uuid');

var initialState = [
  {
    id: uuid.v4(),
    text: 'The quick brown fox'
  },
  {
    id: uuid.v4(),
    text: 'Jumps over',
  },
  {
    id: uuid.v4(),
    text: 'The lazy dog'
  }
];

module.exports = initialState;
