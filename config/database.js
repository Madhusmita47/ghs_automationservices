const mysql = require("mysql");
const info = require("../config/test")

const connection = mysql.createConnection({
  host:info.DB_HOST,
  user:info.DB_USER,
  password:info.DB_PASSWORD,
  database: info.DB_DATABASE,
});

function dbQuery(sql, values) {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (err, results) => {
      if (err) {
        console.error(err); // Log the error for debugging purposes
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}



module.exports = { connection, dbQuery};
