const express = require('express');
const app = express();
const db = require('./bancoDados')
const dbContext = db.veiculosDatabase()

app.use(express.json());

app.listen(3000, () => {
    console.log('servidor iniciado')
})

app.get('/veiculos', async (req, res) =>{
    res.status(200).send(await dbContext.list())
})

app.get('/veiculos/:id', async (req, res) => {
    res.status(200).send(await dbContext.get(req.params.id))
})

app.post('/veiculos', async (req, res) => {
  res.status(200).send(await dbContext.insert(req.body))
})

app.put('/veiculos/:id', async (req, res) => {
    res.status(200).send(await dbContext.update(req.body,req.params.id))
})

app.delete('/veiculos/:id', async (req, res) =>{
    await dbContext.del(req.params.id)
    res.status(200).send('veículo excluido')
})