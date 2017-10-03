var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

var Yelp = require('yelpv3');
/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
router.get('/api/yelp/bars/:location', (req, res) => {
  let id = process.env.YELP_CLIENT_ID;
  let secret = process.env.YELP_CLIENT_SECRET;
  let access_token = undefined;
  fetch(`https://api.yelp.com/oauth2/token?grant_type=client_credentials&client_id=${id}&client_secret=${secret}`,
    { method: 'POST' })

    .then(data => {
      return data.json();
    })
    .then(data => {
      access_token = data.access_token;
      return fetch(`https://api.yelp.com/v3/businesses/search?term=bar&location=${req.params.location}`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`
          }
        })

    })
    .then(data => {
      return data.json();
    })
    .then(json => {
      res.json(json);
    })
    .catch(error => {
      console.log(error)
    })
})

module.exports = router;
