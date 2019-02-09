const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.all('*', (req, res) => {
  let options = {
    method: req.method,
    body: req.body,
    json: true,
    uri: `${process.env.WEB1_DNS}${req.url}`
  };

  console.log('request->', options);

  request(options, (err, response) => {
    res.send(response.body);
  })
});

app.listen(port, () => console.log(`proxy listening on port ${port}!`))
