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

// // Q&A
// // PUT /qa/questions/:question_id/helpful
// // Mark Question as Helpful
// // Updates a question to show it was found helpful.
// const handleHelpfulQuestionSubmit = (qId) => {
//   axios({
//     method: 'put',
//     baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
//     url: `/qa/questions/${qId}/helpful`,
//     headers: {
//       Authorization: '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',
//     },
//   }).then((res) => console.log(res)) // refactor???
//     .catch((err) => { throw Error(err); });
// };

// // Q&A
// // PUT /qa/answers/:answer_id/helpful
// // Mark Answer as Helpful
// // Updates an answer to show it was found helpful.
// const handleHelpfulAnswerSubmit = (aId) => {
//   axios({
//     method: 'put',
//     baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
//     url: `/qa/answers/${aId}/helpful`,
//     headers: {
//       Authorization: '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',
//     },
//   }).then((res) => console.log(res)) // refactor???
//     .catch((err) => { throw Error(err); });
// };

export default getData;
