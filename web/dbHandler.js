const saveData = (req, res) => {
  let client = req.app.client;

  client.query(`create table numbers (number int )`, () => {
    client.query(`insert into numbers values($1)`, [req.body.number]);
    res.send();
  });
};


const getNumbers = (req, res) => {
  let client = req.app.client;

  client.query(`select number from numbers`, (err, data) => {
    if (err) {
      res.send([]);
      return;
    }
    res.send(data.rows);
  });
};

module.exports = {
  saveData,
  getNumbers
};
