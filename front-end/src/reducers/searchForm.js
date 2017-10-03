import {
  SEARCH_FORM_SUBMIT
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case SEARCH_FORM_SUBMIT:
      return state;
    default:
      return state;
  }
}