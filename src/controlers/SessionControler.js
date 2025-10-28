const db = require('../db')

class SessionControler{
    checkfields(req, res, next){
        const { nome, email } = req.body
        if(nome === '' || nome[0] === ' ' && nome.length >= 1){
            
            return res.status(400).json({msg:"Não pode haver campos vazios"})
        }
        else if(email === '' || email[0] === ' ' && email.length >= 1){
            
            return res.status(400).json({msg:"Não pode haver campos vazios"})
        }

        return next()

    }
    store(req, res){
        const { nome, email } = req.body
        db.run(`INSERT INTO user(nome, email) VALUES(?,?)`, [nome, email], (err)=>{
            if(err){
                return res.status(400).json({msg:err.message})
            }
            else{
                return res.json({msg:'Cadastrado com sucesso'})
            }
        })
    }

    show(req, res){
        const { id } = req.params
        db.all(`SELECT * FROM user WHERE id = ?`,[id],(err, row)=>{
            return res.json(row)
        })
    }

    index(req, res){
        db.all(`SELECT * FROM user`,(err, rows)=>{
            if(err){
                console.log("erro")
            }
            else{
                return res.json(rows)
            }
        })
    }
}
module.exports = new SessionControler()