const sqlite3 = require('sqlite3')

const db = new sqlite3.Database('mydb.db',(err)=>{
    if(err){
        console.log("Erro ao criar o banco")
    }
    else{
        console.log("banco criado com sucesso!!!")
    }
})

module.exports = db