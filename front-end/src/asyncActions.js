// import store from './store';

const API_ROOT = 'https://localhost:7777/api';
// const API_ROOT = 'https://nightlife-rlwshuezej.now.sh/api';

const requests = {
  // del: url =>
  //   superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: url =>
    fetch(`${API_ROOT}${url}`)
  // const promiseMiddleware = store => next => action => {
  // put: (url, body) =>
  //   superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  // post: (url, body) =>
  //   superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

const Yelp = {
  getBars: (searchTerm) =>
    requests.get(`/yelp/bars/${searchTerm}`),
  // login: (email, password) =>
  //   requests.post('/users/login', { user: { email, password } }),
  // register: (username, email, password) =>
  //   requests.post('/users', { user: { username, email, password } }),
  // save: user =>
  //   requests.put('/user', { user }
};

export default {
  Yelp
}