import React from 'react';
import { render } from 'react-dom';
import Scoreboard from './src/containers/Scoreboard';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducer from './src/reducers/player'

const store = createStore(
  Reducer,
  window.devToolsExtension && window.devToolsExtension()
);

render(
  <Provider store={store}>
    <Scoreboard />
  </Provider>,
  document.getElementById('root')
);
