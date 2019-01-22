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

//***** DATABASE METHODS ***/

// const getAll = (actor, callback) => {

//   const query = {
//     text: 'SELECT * FROM movies WHERE actor = $1',
//     values: [actor],
//   };

//   client.query(query, (error, results) => {
//     if (error) {
//       callback(error);
//     } else {
//       callback(null, results);
//     }
//   });
// };

// const cacheMovies = (title, year, image, actor, callback) => {
//   const query = {
//     text: 'INSERT INTO movies(title, year, image, actor) VALUES($1, $2, $3, $4)',
//     values: [title, year, image, actor],
//   };

//   client.query(query, (error, results) => {
//     if (error) {
//       callback(error);
//     } else {
//       callback(null, results);
//     }
//   });

// };
// module.exports = { getAll, cacheMovies };
