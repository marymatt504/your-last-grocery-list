const db = './credentials.js';

const { Pool, Client } = require('pg');
const utils = require('./hashUtils.js');

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

  let salt = utils.createRandom32String();
  let hash = utils.createHash(password, salt);

  const queryStr = {
    text: 'INSERT INTO users (username, password, salt) VALUES ($1, $2, $3) RETURNING id',
    values: [username, hash, salt]
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
  // shoudl also consider that someone might try to add an item, when it's already on their toBuy list
  // in that case, would only want to updateFrequency if need_to_buy column is currently set to false
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

const getItemsByListId = (list_id, callback) => {
  const queryStr = {
    text: 'SELECT * from items WHERE list_id = $1',
    values: [list_id]
  };

  client.query(queryStr, (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

const getListsByUserId = (user_id, callback) => {
  const queryStr = {
    text: 'SELECT * from lists WHERE user_id = $1',
    values: [user_id]
  };

  client.query(queryStr, (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

const getUserByEmail = (email, callback) => {
  const queryStr = {
    text: 'SELECT * from users WHERE username = $1',
    values: [email]
  };

  client.query(queryStr, (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });

};

module.exports = { addUser, addList, addItem, getItemsByListId, getUserByEmail, getListsByUserId };