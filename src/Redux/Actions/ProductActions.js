import { createAction } from 'redux-actions';
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCTS_SUCCEEDED,
} from 'Redux/Types/ProductTypes';

export const fetchProducts = createAction(FETCH_PRODUCTS);
export const fetchProductsFailed = createAction(FETCH_PRODUCTS_FAILED);
export const fetchProductsSucceeded = createAction(FETCH_PRODUCTS_SUCCEEDED);
