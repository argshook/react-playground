import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configure-store';

import './styles/main.scss';

import Button from './components/button';

render(
  <Provider store={configureStore()}>
    <Button />
  </Provider>,
  document.getElementById('root')
);

