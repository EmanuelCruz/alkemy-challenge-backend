const mysql = require('mysql');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    database : process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
})

module.exports = pool;