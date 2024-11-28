import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


const app = express()
app.use(express.json())

const users = []

app.get('/usuarios', (req, res) => {

    res.status(200).json(users)
})

app.post('/usuarios', async (req, res) => {

   await prisma.user.create({
        data:{
            email: req.body.email,
            name: req.body.name,
            age:req.body.age
            
        }
    })

    res.status(201).json({ mensagem: "Usuario criado com sucesso" })
})


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
//http://localhost:3000/usuarios

//req: requisição
//res: resposta
//req => requisição res => resposta
//node --watch server.js => rodar o sistema toda vez que salvar
// npx prisma studio pra rodar o prisma

/*
email mongodb
juniojr555   junio
kABHxYJAG0Eg1PBz  junio5550123
  
*/