const express = require('express');
const bodyParser = require('body-parser');
const {Client} = require('pg');
const db = require('./dbHandler.js');

const app = express();
const port = 8000;
const connectionString = process.env.DATABASE_URL || 'postgres://127.0.0.1:5432/samaj';

const client = new Client(connectionString);
client.connect();
app.client = client;

app.use(bodyParser.json());

app.get('/number', (req, res) => {
  console.log(req.method, req.url);
  db.getNumbers(req, res);
});


app.post('/number', (req, res) => {
  console.log(req.method, req.url);
  db.saveData(req, res);
});

app.listen(port, () => console.log(`app listening on port ${port}`))
