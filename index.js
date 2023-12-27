const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('servidor iniciado')
})

const alunos = [];

//buscar todos os usuarios da lista
app.get('/alunos', (req, res) => {
    console.log('os usuarios foram buscados')
    res.status(200).send(alunos)
})

//buscar usuario por id
app.get('/alunos/:id', (req, res) => {
 console.log(req.query)
 console.log('usuario foi buscado')
 res.status(200).send(x => x.id == alunos)
})

//cadastrar um usuario
app.post('/alunos', (req, res) => {
 console.log(req.dody)
 console.log('novo usuario cadastrado')
 alunos.push(req.body);
 res.status(200).send(req.body)
})

//atualizar usuario
app.put('/alunos/:id', (req,res) => {
    const aluno = alunos.find(x => x.id == req.params.id)
    const idAluno = alunos.indexOf(aluno)
    if(idAluno !== -1){
        alunos[idAluno] = req.body
        res.status(200).send('aluno atualizado')
    }
    else{
        res.status(404).send('aluno não existe')
    }

})  

//deletar usuario
app.delete('/alunos/:id', (req, res) => {
    console.log(req.body)
    const aluno = alunos.find(x => x.id == req.params.id)
    const idAluno = alunos.indexOf(aluno)
    if(idAluno !== -1){
        alunos.splice(idAluno, 1)
        res.status(200).send('aluno deletado')
    }
    else{
        res.status(404).send('aluno não existe')
    }
})