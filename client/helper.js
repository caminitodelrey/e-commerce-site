const axios = require('axios');
const config = require('../config.js');

// http://example.com/page?parameter=value&also=another

export default function getData(endpoint) {
  return axios({
    method: 'get',
    baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
    url: endpoint,
    headers: {
      'Content-Type': 'application/json',
      'Retry-After': 3600,
      Authorization: config.TOKEN,
    },
  });
}
