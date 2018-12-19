import { fork } from 'redux-saga/effects';

import cart from './cart';
import product from './product';

export default function* rootSaga() {
  yield fork(cart);
  yield fork(product);
}
