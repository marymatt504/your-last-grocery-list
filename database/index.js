const db = './credentials.js';

const { Pool, Client } = require('pg');

const pool = new Pool({
  user: db.user,
  password: db.password,
  // host: 'localhost',
  // port: 5432,
  database: 'your_last_grocery_list',
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.log('error from database/index.js line 15', err);
  } else {
    console.log(null, res);
  }
  pool.end();
});

const client = new Client({
  user: db.user,
  password: db.password,
  // host: 'localhost',
  // port: 5432,
  database: 'your_last_grocery_list',
});
client.connect();

//***** DATABASE METHODS **********************************************/

const addUser = (username, password, callback) => {
  const queryStr = {
    text: 'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id',
    values: [username, password]
  };

  client.query(queryStr, (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

const addList = (user_id, store_name, callback) => {
  const queryStr = {
    text: `INSERT INTO lists (user_id, store_name) VALUES ($1, $2) RETURNING id`,
    values: [user_id, store_name]
  };

  client.query(queryStr, (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

const addItem = (name, list_id, category, callback) => {

  const queryStr = {
    text: 'INSERT INTO items(name, list_id, category) VALUES ($1, $2, $3) ON CONFLICT (name, list_id) DO UPDATE SET frequency_count = items.frequency_count + 1, need_to_buy = true',
    values: [name, list_id, category]
  };

  client.query(queryStr, (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

module.exports = { addUser, addList, addItem };