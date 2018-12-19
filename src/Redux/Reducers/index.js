import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import cart from './cart';
import search from './search';
import product from './product';

export default history => combineReducers({
  cart,
  search,
  product,
  router: connectRouter(history),
});
