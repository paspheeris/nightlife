import {
  SEARCH_FORM_SUBMIT_SUCCESS,

} from '../constants/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case SEARCH_FORM_SUBMIT_SUCCESS:
      return [
        ...action.payload.businesses,
      ];
    default:
      return state;
  }
}