import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { promiseMiddleware } from './middleware';
import mockData from './mockData'
const enhancers = compose(
  applyMiddleware(thunk, promiseMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const bars = mockData.businesses;
const location = {
  latLngs: mockData.businesses.map(business => {
    return ({
      id: business.id,
      name: business.name,
      lat: business.coordinates.latitude,
      lng: business.coordinates.longitude
    })
  }),
  center: {
    lat: mockData.region.center.latitude,
    lng: mockData.region.center.longitude
  }
}
// const bars = [];
// const location = {};
const store = createStore(reducer, { bars, location }, enhancers);
export default store;