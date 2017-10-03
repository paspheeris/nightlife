import {
  SEARCH_FORM_SUBMIT_SUCCESS,

} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case SEARCH_FORM_SUBMIT_SUCCESS:
      return {
        latLngs: action.payload.businesses.map(business => {
          return ({
            id: business.id,
            name: business.name,
            lat: business.coordinates.latitude,
            lng: business.coordinates.longitude,

          })
        }),
        center: {
          lat: action.payload.region.center.latitude,
          lng: action.payload.region.center.longitude
        }
      };
    default:
      return state;
  }
}