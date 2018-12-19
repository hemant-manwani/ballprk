import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

import Cart from 'routes/Cart';
import theme from 'Constants/theme';
import createStore from 'Redux/index';
import CoreLayout from 'layouts/CoreLayout'
import ProductList from 'routes/ProductList';
import registerServiceWorker from './registerServiceWorker';

export const browserHistory = createBrowserHistory();


const store = createStore();
const themeStyles = createMuiTheme(theme)

registerServiceWorker();

const RootView = () => (
  <Switch>
    <CoreLayout path="/cart" name="Cart" component={Cart} />
    <CoreLayout exact path="/" name="Root" component={ProductList} />
    <CoreLayout path="/products" name="ProductList" component={ProductList} />
  </Switch>
);

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={themeStyles}>
      <ConnectedRouter history={browserHistory}>
        <RootView />
      </ConnectedRouter>
    </MuiThemeProvider>  
  </Provider>,
  document.getElementById('root')
);
