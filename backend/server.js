const express = require('express');
const app = express();

app.get('/', (req,res) =>
{
  res.send({ message: 'Hello front end. This is back end.' });
})

app.use('/users/', require('./router'))

app.listen(3001, () =>
{
  console.log('Server started at port number: 3001');
})