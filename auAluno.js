const express = require('express');
const app = express();
const sb = require('./simulaBanco.js')
const sbcontext = sb.AlunosDatabase()

app.use(express.json());

app.listen(3000, () => {
    console.log('servidor iniciado')
})

//buscar todos os usuarios da lista
app.get('/alunos', async (req, res) => {
    console.log('os usuarios foram buscados')  
    res.status(200).send(await sbcontext.list())
})

//buscar usuario por id
app.get('/alunos/:id', async (req, res) => {
 res.status(200).send(await sbcontext.get(req.params.id))
})

//cadastrar um usuario
app.post('/alunos', async (req, res) => {
 res.status(200).send(await sbcontext.insert(req.body))
})

//atualizar usuario
app.put('/alunos/:id', async (req,res) => {
    res.status(200).send(await sbcontext.update(req.body, req.params.id))
})  

//deletar usuario
app.delete('/alunos/:id', async (req, res) => {
    await sbcontext.del(req.params.id)
    res.status(200).send('aluno deletado')
})