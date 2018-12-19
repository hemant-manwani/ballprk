import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import ui from './ui';
import cart from './cart';
import search from './search';
import product from './product';

export default history => combineReducers({
  ui,
  cart,
  search,
  product,
  router: connectRouter(history),
});
