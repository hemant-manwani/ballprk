import {
  HIDE_LOADER,
  SHOW_LOADER,
} from 'Redux/Types/UITypes';

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

import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCTS_SUCCEEDED,

} from 'Redux/Types/ProductTypes';

const INITIAL_STATE = {
  loading: false
}

export default (state = INITIAL_STATE, { type }) => {
  switch (type) {
    case FETCH_CART:
    case SHOW_LOADER:
    case FETCH_PRODUCTS:
    case ADD_ITEM_TO_CART:
    case REMOVE_ITEM_FROM_CART: {
      return {
        ...state,
        loading: true
      }
    }

    case HIDE_LOADER: 
    case FETCH_CART_FAILED:
    case FETCH_CART_SUCCEEDED:
    case FETCH_PRODUCTS_FAILED:
    case ADD_ITEM_TO_CART_FAILED:
    case FETCH_PRODUCTS_SUCCEEDED:
    case ADD_ITEM_TO_CART_SUCCEEDED:
    case REMOVE_ITEM_FROM_CART_FAILED:
    case REMOVE_ITEM_FROM_CART_SUCCEEDED: {
      return {
        ...state,
        loading: false
      }
    }
    
    default: {
      return state;
    }
  }
};
