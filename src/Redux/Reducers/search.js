import {
  UPDATE_SEARCH_STRING
} from 'Redux/Types/SearchTypes';

const INITIAL_STATE = ''

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case UPDATE_SEARCH_STRING: {
      return payload
    }
    
    default: {
      return state;
    }
  }
};
