const axios = require('axios');
const config = require('../config.js');

// http://example.com/page?parameter=value&also=another

function getData(endpoint) {
  return axios({
    method: 'get',
    baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
    url: endpoint,
    headers: {
      Authorization: config.TOKEN,
    },
  });
}

// export default function questionHelpful(question_id) {
//   return axios({
//     method: 'put',
//     baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
//     url: `/qa/questions/${question_id}/helpful`,
//     headers: {
//       Authorization: config.TOKEN,
//     },
//   });
// }

export default getData;
