// const axios = require('axios');
// // const config = require('../config.js');

// function getData(endpoint) {
//   return axios({
//     method: 'get',
//     baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
//     url: endpoint,
//     headers: {
//       'Content-Type': 'application/json',
//       'Retry-After': 3600,
//       Authorization: process.env.TOKEN,
//     },
//   });
// }

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
//       Authorization: process.env.TOKEN,
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
//       Authorization: process.env.TOKEN,
//     },
//   }).then((res) => console.log(res)) // refactor???
//     .catch((err) => { throw Error(err); });
// };

// // Q&A
// // PUT /qa/questions/:question_id/report
// // Report Question
// // Updates a question to show it was reported.
// // Note, this action does not delete the question,
// // but the question will not be returned in the above GET request.
// const handleReportQuestionSubmit = (questionId) => {
//   axios({
//     method: 'put',
//     baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
//     url: `/qa/answers/${questionId}/report`,
//     headers: {
//       Authorization: process.env.TOKEN,
//     },
//   }).then((res) => console.log(res)) // refactor???
//     .catch((err) => { throw Error(err); });
// };

// // Q&A
// // PUT /qa/answers/:answer_id/report
// // Report Answer
// // Updates an answer to show it has been reported.
// // Note, this action does not delete the answer,
// // but the answer will not be returned in the above GET request.
// const handleReportAnswerSubmit = (answerId) => {
//   axios({
//     method: 'put',
//     baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
//     url: `/qa/answers/${answerId}/report`,
//     headers: {
//       Authorization: process.env.TOKEN,
//     },
//   }).then((res) => console.log(res)) // refactor???
//     .catch((err) => { throw Error(err); });
// };

// // Q&A
// // POST /qa/questions
// // Add a Question
// // Adds a question for the given product
// const handleAddQuestionSubmit = (data) => {
//   axios({
//     method: 'post',
//     baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
//     url: '/qa/questions/',
//     headers: {
//       Authorization: process.env.TOKEN,
//     },
//     data,
//   }).then((res) => console.log(res)) // refactor???
//     .catch((err) => { throw Error(err); });
// };

// // Q&A
// // POST /qa/questions/:question_id/answers
// // Add an Answer
// // Adds an answer for the given question
// const handleAddAnswerSubmit = (data, qId) => {
//   axios({
//     method: 'post',
//     baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
//     url: `/qa/questions/${qId}/answers`,
//     headers: {
//       Authorization: process.env.TOKEN,
//     },
//     data,
//   }).then((res) => console.log(res)) // refactor???
//     .catch((err) => { throw Error(err); });
// };

// //ratingReview helper funcs
// const reviewsHelpful = (endpoint) => {
//   axios({
//     method: 'put',
//     baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
//     url: endpoint,
//     headers: {
//       Authorization: process.env.TOKEN,
//     },
//   }).then((res) => console.log('Reveiw helpful submitted!'))
//     .catch((err) => { throw Error(err); });
// };

// const reviewsReport = (endpoint) => {
//   axios({
//     method: 'put',
//     baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
//     url: endpoint,
//     headers: {
//       Authorization: process.env.TOKEN,
//     },
//   }).then((res) => console.log('Reveiw report submitted!'))
//     .catch((err) => { throw Error(err); });
// };

// //clicktracker
// //HandleClickTracker
// const handleClickTracker = (endpoint, element, widget, time) => {
//   axios({
//     method: 'post',
//     baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
//     url: endpoint,
//     headers: {
//       Authorization: process.env.TOKEN,
//     },
//     data: {
//       "element": element,
//       "widget": widget,
//       "time": time
//     }
//   }).then((res) => console.log(res))
//     .catch((err) => { throw Error(err); });
// };

// export {
//   getData,
//   handleHelpfulQuestionSubmit,
//   handleHelpfulAnswerSubmit,
//   handleReportQuestionSubmit,
//   handleReportAnswerSubmit,
//   handleAddQuestionSubmit,
//   handleAddAnswerSubmit,
//   reviewsHelpful,
//   reviewsReport,
//   handleClickTracker,
// };
