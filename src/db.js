const mysql = require("mysql");

const db = mysql.createConnection({
  host: "sql10.freesqldatabase.com",
  user: "sql10629733",
  password: "VUFsPiJzHl",
  database: "sql10629733",
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
    return;
  }
  console.log("Conectado ao banco de dados MySQL");
});

module.exports = db;
