import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers
} from 'redux';

import thunk from 'redux-thunk';
import rootReducer from './root-reducer';

export default (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      // https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if(module.hot) {
    module.hot.accept('./root-reducer', () => {
      const nextRootReducer = require('./root-reducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

