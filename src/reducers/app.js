import { Map } from 'immutable';

const initialState = Map({
  counter: 0,
});

export default function app(state = initialState, action = {}) {
  const { type, ...payload } = action;

  switch (type) {
    case 'ADD_COUNTER':
      return state.set('counter', state.get('counter') + payload.amount);

    case 'SUB_COUNTER':
      return state.set('counter', state.get('counter') - payload.amount);

    default:
      return state;
  }
}
