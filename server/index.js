const path = require('path');
const morgan = require('morgan');
const  {apiRequest}  = require('./helper_test.js');
const express = require('express');
const app = express();
const axios = require('axios');

// MIDDLEWARE
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

const PORT = 3000;

// // Gets a single product
app.get('/product', (req, res) => {
  let endpoint = `products/${req.query.productId}/`;
  // console.log('params is ', req.query);
  apiRequest('get', endpoint)
    // .then((response) => res.send(response.data))
    .then((response) => console.log(response.data))
    .catch((err) => console.log(err));
})

// Gets a list of styles from a product
app.get('/product/styles', (req, res) => {
  console.log(`GET request received to ${req.path}`)
  const endpoint = `products/${req.body.productId}/styles`
  apiRequest('get', endpoint)
    .then(({ data }) => res.status(200).send(data))
    .catch((err) => console.log(err));
});

// Gets a single product
// app.get('/product', (req, res) => {
//   let endpoint = `products/${req.query.productId}/`;
//   console.log('endpoint is ', endpoint);
//   axios({
//     method: 'get',
//     baseURL: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/',
//     url: endpoint,
//     headers: {
//       // 'Content-Type': 'application/json',
//       // 'Retry-After': 3600,
//       Authorization: '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',
//     },
//   })
//     .then((response) => res.send(response.data))
//     .catch((err) => console.log(err));
// })

// app.get('/product', (req, res) => {
//   let endpoint = `products/${req.query.productId}/`;
//   // console.log('params is ', req.query);
//   apiRequest('get', endpoint)
//     .then((data) => res.send(data))
//     .catch((err) => console.log(err));
// })

// Gets a list of styles from a product
// app.get('/product/styles', (req, res) => {
//   console.log(`GET request received to ${req.path}`)
//   const endpoint = `products/${req.body.productId}/styles`
//   apiRequest('get', endpoint)
//     .then((data) => res.status(200).send(data))
// });

// // Get a list of related products and their data
// app.get('/product/related', (req, res) => {
//   const endpoint = `products/`
// });

// app.post('/qa/questions', (req, res) => {

// });

// app.put('/name', (req, res) => {
//   apiRequest('put', req.body.endpoint)
//     .then(() => res.status(200).send('SUCCESS!!'))
//     .catch((err) => res.status(400).send('FAIL')
//     )
// })

app.listen(PORT, () => {
  console.log(`To get started, visit: http://localhost:${PORT}`);
});