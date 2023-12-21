import express from 'express';
import pool from './db.js';

const app = express();
const port = process.env.PORT || 8002;

app.use(express.static('public'));
app.use(express.json());

app.get('/bookmarks', (req, res) => {
  pool.query('SELECT * FROM bookmarks')
    .then((data) => res.status(200).send(data.rows))
    .catch((error) => {
      console.error(error);
      res.status(500).send('Sorry!');
    })
});

app.post('/bookmarks', (req, res) => {
  const { title, url, description, topic_id } = req.body;
  pool.query(
    'INSERT INTO bookmarks (title, url, description, topic_id) VALUES ($1, $2, $3, $4)',
    [title, url, description, topic_id]
  ).then(() => res.status(201).send('Bookmark created successfully'))
    .catch((error) => {
      console.error(error);
      res.status(500).send('Sorry!');
    });
});

app.patch('/bookmarks/:id', (req, res) => {
  const bookmarkId = req.params.id;
  const { title, url, description, topic_id } = req.body;
  pool.query(
    'UPDATE bookmarks SET title = $1, url = $2, description = $3, topic_id = $4 WHERE id = $5',
    [title, url, description, topic_id, bookmarkId]
  ).then(() => res.send(`Bookmark with ID ${bookmarkId} updated successfully`))
    .catch((error) => {
      console.error(error);
      res.status(500).send('Sorry');
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
