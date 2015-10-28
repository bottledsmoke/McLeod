import uuid from 'node-uuid';

const initialState = [
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

export default initialState;
