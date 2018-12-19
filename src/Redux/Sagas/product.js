import {
  put,
  call,
  takeLatest
} from 'redux-saga/effects';
import { fetchProductsApi } from 'Service/Api';

import * as ProductTypes from 'Redux/Types/ProductTypes';
import * as ProductActions from 'Redux/Actions/ProductActions';

function* fetchProducts({ payload }) {
  try {
    const response = yield call(
      fetchProductsApi, payload
    );
    yield put(ProductActions.fetchProductsSucceeded(response));
  } catch (err) {
    yield put(ProductActions.fetchProductsFailed(err));
  }
}

export default function* productsSaga() {
  yield takeLatest(ProductTypes.FETCH_PRODUCTS, fetchProducts);
}
