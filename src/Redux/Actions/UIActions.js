import { createAction } from 'redux-actions';
import {
  HIDE_LOADER,
  SHOW_LOADER,
} from 'Redux/Types/UITypes';

export const hideLoader = createAction(HIDE_LOADER);
export const showLoader = createAction(SHOW_LOADER);

