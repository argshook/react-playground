const initialState = 0;

export function buttonReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 10;

    case 'DECREMENT':
      return --state;

    default:
      return state;
  }
}

export function increment() {
  return { type: 'INCREMENT' };
}

export function decrement() {
  return { type: 'DECREMENT' };
}

