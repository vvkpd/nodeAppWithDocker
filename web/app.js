const express = require('express');
const {Client} = require('pg');
const db = require('./dbHandler.js');

const app = express();

const connectionString = process.env.DATABASE_URL || 'postgres://127.0.0.1:5432/samaj';

const client = new Client(connectionString);
client.connect();

app.client = client;

const port = 8000;

app.use(express.urlencoded({
  extended: false
}));

app.get('/numbers', (req, res) => {
  db.getNumbers(req, res);
});


app.post('/number', (req, res) => {
  db.saveData(req, res);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
