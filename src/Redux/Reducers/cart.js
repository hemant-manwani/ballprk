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

const INITIAL_STATE = {
  items: {},
  fetched: false,
  fetching: false,
  addingToCart: false,
  removingFromCart: false,
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_CART: {
      return {
        ...state,
        fetching: true,
        fetched: false,
      }
    }
    case FETCH_CART_FAILED: {
      return {
        ...state,
        fetched: false,
        fetching: false,
      }
    }
    case FETCH_CART_SUCCEEDED: {
      return {
        ...state,
        fetched: true,
        fetching: false,
        items: payload
      }
    }
    case ADD_ITEM_TO_CART: {
      return {
        ...state,
        addingToCart: true,
      }
    }
    case ADD_ITEM_TO_CART_FAILED: {
      return {
        ...state,
        addingToCart: false,
      }
    }
    case ADD_ITEM_TO_CART_SUCCEEDED: {
      return {
        ...state,
        addingToCart: false,
        items: { ...state.items, [payload.id]: payload }
      }
    }
    case REMOVE_ITEM_FROM_CART: {
      return {
        ...state,
        removingFromCart: true,
      }
    }
    case REMOVE_ITEM_FROM_CART_FAILED: {
      return {
        ...state,
        removingFromCart: false,
      }
    }
    case REMOVE_ITEM_FROM_CART_SUCCEEDED: {
      return {
        ...state,
        removingFromCart: true,
        items: {
          ...state.items,
          [payload.id]: payload
        }
      }
    }
  
    default: {
      return state;
    }
  }
};
