import {
  put,
  call,
  takeLatest
} from 'redux-saga/effects';
import { addItemToCartApi, removeItemFromCartApi } from 'Service/Api';

import * as CartTypes from 'Redux/Types/CartTypes';
import * as CartActions from 'Redux/Actions/CartActions';

function* addItemToCart({ payload }) {
  try {
    const response = yield call(
      addItemToCartApi, payload
    );
    yield put(CartActions.addItemToCartSucceeded(response));
  } catch (err) {
    yield put(CartActions.addItemToCartFailed(err));
  }
}

function* removeItemFromCart({ payload }) {
  try {
    const response = yield call(
      removeItemFromCartApi, payload
    );
    yield put(CartActions.removeItemFromCartSucceeded(response));
  } catch (err) {
    yield put(CartActions.removeItemFromCartFailed(err));
  }
}

export default function* cartSaga() {
  yield takeLatest(CartTypes.ADD_ITEM_TO_CART, addItemToCart);
  yield takeLatest(CartTypes.REMOVE_ITEM_FROM_CART, removeItemFromCart);
}
