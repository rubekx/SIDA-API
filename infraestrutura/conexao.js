const mysql = require('mysql')

const conexao = mysql.createConnection({
  host: '10.16.0.223',
  port: 3306,
  user: '######',
  password: '#######',
  database: 'sints',
  multipleStatements: true
})

module.exports = conexao
