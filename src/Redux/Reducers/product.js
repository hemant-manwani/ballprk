import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_FAILED,
  FETCH_PRODUCTS_SUCCEEDED,
} from 'Redux/Types/ProductTypes';

const INITIAL_STATE = {
  records: [],
  fetching: false
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_PRODUCTS: {
      return {
        ...state,
        fetching: true,
      }
    }
    case FETCH_PRODUCTS_FAILED: {
      return {
        ...state,
        fetching: false,
      }
    }
    case FETCH_PRODUCTS_SUCCEEDED: {
      return {
        ...state,
        fetching: false,
        records: payload
      }
    }
    
    default: {
      return state;
    }
  }
};
