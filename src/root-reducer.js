import { combineReducers } from 'redux';

import { buttonReducer } from './components/button/redux.js';

export default combineReducers({
  button: buttonReducer
});

