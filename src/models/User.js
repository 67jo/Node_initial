const db = require("../db");

db.serialize(()=>{
    db.run(`CREATE TABLE IF NOT EXISTS user(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome VARCHAR(100) NOT NULL,
        email VARCHAR(50) UNIQUE
    )`);
    console.log("Tabela criada com sucesso!!!");
});
