const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`To get started, visit: http://localhost:${PORT}`);
});