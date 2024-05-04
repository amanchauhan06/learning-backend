const express = require('express');

const app = express();


app.use('/add-product', (req, res, next) => {
  console.log('In add product route!');
  res.send('<h1>The "Add Product" Page</h1>');
});

app.use('/', (req, res, next) => {
  console.log('In the /route');
  res.send('<h1>Hello from Express!</h1>');
});


app.listen(3000);
