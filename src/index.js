import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React, { Fragment } from 'react';
import { createBrowserHistory } from 'history';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import createStore from 'Redux/index';
import CoreLayout from 'layouts/CoreLayout'
import ProductList from 'routes/ProductList';
import registerServiceWorker from './registerServiceWorker';

export const browserHistory = createBrowserHistory();
const store = createStore();
registerServiceWorker();

const RootView = () => (
  <Switch>
    <CoreLayout path="/" name="Root" component={ProductList} />
    <CoreLayout path="/products" name="ProductList" component={ProductList} />
  </Switch>
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={browserHistory}>
      <RootView />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
