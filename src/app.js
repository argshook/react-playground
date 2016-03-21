import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configure-store';

import Button from './components/button';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Button />
      </Provider>
    );
  }
};

