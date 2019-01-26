var express = require('express');
var bodyParser = require('body-parser');
let db = require('../database/index.js');

var app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));

app.post('/users', (req, res) => {
  let { username, password } = req.body;

  db.addUser(username, password, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(201).send(results);
    }
  });

});

app.post('/lists', (req, res) => {

  console.log('req.body', req.body);
  let { user_id, store_name } = req.body;

  db.addList(user_id, store_name, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(201).send(results);
    }
  })
});

app.post('/items', (req, res) => {

  console.log('req.body', req.body);
  let { name, list_id, category } = req.body;

  db.addItem(name, list_id, category, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(201).send(results);
    }
  })
});

app.get('/lists/:list_id/items', function (req, res) {
  let { list_id } = req.params;

  console.log('listid items request for', list_id);
  db.getItemsByListId(list_id, (err, results) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.status(200).send(results.rows);
    }
  });
});

app.get('/users/:email', function (req, res) {
  let { email } = req.params;
  email = email.toLowerCase();

  console.log('email:', email);

  db.getUserByEmail(email, (err, results) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).send(results.rows);
    }
  });
});

app.get('/users/:userId/lists', function (req, res) {
  let { userId } = req.params;

  db.getListsByUserId(userId, (err, results) => {
    if (err) {
      res.status(500).send(err.message);
    } else {
      res.status(200).send(results.rows);
    }
  });
});

app.listen(3000, function () {
  console.log('listening on port 3000!');
});

