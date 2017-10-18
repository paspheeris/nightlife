const API_ROOT = 'https://secure-hollows-42406.herokuapp.com/api';

const requests = {
  get: url =>
    fetch(`${API_ROOT}${url}`)
};

const Yelp = {
  getBars: (searchTerm) =>
    requests.get(`/yelp/bars/${searchTerm}`),
};

export default {
  Yelp
}