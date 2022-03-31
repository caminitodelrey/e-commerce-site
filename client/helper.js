const axios = require('axios');
const config = require('../config.js');

// http://example.com/page?parameter=value&also=another
let getData = (endpoint) => {
  axios({
    method: 'get',
    baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
    url: endpoint,
    headers: {
      'User-Agent': 'request',
      'Authorization': config.TOKEN
    }
  }).then(data => data)
    .catch(err => console.error(err));
}

module.exports.getData = getData;