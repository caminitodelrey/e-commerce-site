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

// GET uses query or params
// POST and PUT uses body

// // Gets a single product
app.get('/product', (req, res) => {
  let endpoint = `products/${req.query.productId}/`;
  // console.log('params is ', req.query);
  apiRequest('get', endpoint)
    // .then((response) => res.send(response.data))
    .then((response) => console.log(response.data))
    .catch((err) => console.log('catch on server side - product info'));
})

// Gets a list of styles from a product
app.get('/product/styles', (req, res) => {
  console.log(`GET request received toooo(o ${req.path})`);
  // console.log('style query:', req);
  const endpoint = `products/${req.query.productId}/styles`;
  apiRequest('get', endpoint)
    .then(({ data }) => res.status(200).send(data))
    .catch((err) => console.log('catch on server side - styles'));
});

app.get('/product/related', (req, res) => {
  console.log('THIS', req.query.productId)
  const endpoint = `products/${req.query.productId}/related`;
  apiRequest('get', endpoint)
    .then(({ data }) => res.status(200).send(data))
    .catch((err) => console.log('catch on server side - related'));
});

// Question & Answers
// /qa
app.get('/qa', (req, res) => {
  // console.log(`in /qa - GET - req.query.productId: (${req.body})`);
  // console.log(req.body);
  const endpoint = `qa/questions?product_id=${req.query.productId}`
  apiRequest('get', endpoint)
    .then(({ data }) => res.status(200).send(data))
    .catch((err) => console.log('ERROR in /qa GET'));
});

// /qa/q/report
app.put('/qa/q/report', (req, res) => {
  console.log(`GET request received to ${req.path}`)
  const endpoint = `/qa/answers/${req.query.questionId}/report`;
  apiRequest('put', endpoint)
    .then(({ data }) => res.status(200).send(data))
    .catch((err) => console.error(err));
});

// /qa/a/report
app.put('/qa/q/report', (req, res) => {
  console.log(`GET request received to ${req.path}`)
  const endpoint = `/qa/answers/${req.query.questionId}/report`;
  apiRequest('put', endpoint)
    .then(({ data }) => res.status(200).send(data))
    .catch((err) => console.error(err));
});
// /qa/q/helpful
// /qa/a/helpful
// /qa/q/add
// /qa/a/add

// getData(`qa/questions?product_id=${product.id}`)

app.get('/product/reviews', (req, res) => {
  // const endpoint = `reviews/meta?product_id=${req.query.productId}`;
  apiRequest('get', endpoint)
    .then(({ data }) => res.status(200).send(data))
    .catch((err) => console.log('ERROR in /product/reviewss GET'));
});


app.listen(PORT, () => {
  console.log(`To get started, visit: http://localhost:${PORT}`);
});