import 'normalize.css';
import './styles.css';
import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import createBrowserHistory from '../node_modules/history/lib/createBrowserHistory';
import configureStore from './stores/store';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import App from './containers/App';

const history = createBrowserHistory();
const store = configureStore();

ReactDOM.render(
  <div className='app-root'>
    <Provider store={store}>
      <Router history={history}>
        {/* <Route component={App} path="/" /> */}
      </Router>
    </Provider>
    <DebugPanel bottom right top>
      <DevTools monitor={LogMonitor}
                store={store}
                visibleOnLoad={true}
      />
    </DebugPanel>
  </div>,
  document.getElementById('root')
);
