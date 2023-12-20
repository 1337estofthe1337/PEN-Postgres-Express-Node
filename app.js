import express from 'express';
import pool from './db.js';

const app = express();
const port = process.env.PORT || 8002;

app.use(express.static('public'));
app.use(express.json());

app.get('/devresources', (req, res) => {
  pool.query('SELECT * FROM topics')

    .then((data) => res.send(data.rows))
    .catch((error) => {
      console.error(error);
      res.status(500).send('Sorry!');
    })
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
