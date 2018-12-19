import { createAction } from 'redux-actions';
import {
  FETCH_CART,
  FETCH_CART_FAILED,
  FETCH_CART_SUCCEEDED,

  ADD_ITEM_TO_CART,
  ADD_ITEM_TO_CART_FAILED,
  ADD_ITEM_TO_CART_SUCCEEDED,

  REMOVE_ITEM_FROM_CART,
  REMOVE_ITEM_FROM_CART_FAILED,
  REMOVE_ITEM_FROM_CART_SUCCEEDED,
} from 'Redux/Types/CartTypes';

export const fetchCart = createAction(FETCH_CART);
export const fetchCartFailed = createAction(FETCH_CART_FAILED);
export const fetchCartSucceeded = createAction(FETCH_CART_SUCCEEDED);

export const addItemToCart = createAction(ADD_ITEM_TO_CART);
export const addItemToCartFailed = createAction(ADD_ITEM_TO_CART_FAILED);
export const addItemToCartSucceeded = createAction(ADD_ITEM_TO_CART_SUCCEEDED);

export const removeItemFromCart = createAction(REMOVE_ITEM_FROM_CART);
export const removeItemFromCartFailed = createAction(REMOVE_ITEM_FROM_CART_FAILED);
export const removeItemFromCartSucceeded = createAction(REMOVE_ITEM_FROM_CART_SUCCEEDED);
