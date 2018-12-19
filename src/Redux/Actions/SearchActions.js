import { createAction } from 'redux-actions';
import {
  UPDATE_SEARCH_STRING
} from 'Redux/Types/SearchTypes';

export const updateSearchString = createAction(UPDATE_SEARCH_STRING);

