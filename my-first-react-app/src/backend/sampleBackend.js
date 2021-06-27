import express from 'express';

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.jason());

app.get('/', (err, req, res) =>
{
  try {
    res.status(200).send({ success: 'true', message: 'Hay! You did well', data: '1 2 3 4' });
  } catch {
    (err) => { console.log(`err: ${ err }`) }
  };
});

app.listen(3000, () =>
{
  console.log('server running on port 3000');
})