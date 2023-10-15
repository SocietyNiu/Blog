const mysql = require('mysql')

const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'nyt021126',
  database: 'myblog'
})

module.exports = db
