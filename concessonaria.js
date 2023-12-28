const express = require('express');
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('servidor iniciado')
})

const veiculos = []

app.get('/veiculos', (req, res) =>{
    res.status(200).send(veiculos)
})

app.get('/veiculos/:id', (req, res) => {
    const veiculo = veiculos.find(x => x.id == req.params.id)
    res.status(200).send(veiculo)
})

app.post('/veiculos', (req, res) => {
  veiculos.push(req.body)  
  res.status(200).send('veículo cadastrado')
})

app.put('/veiculos/:id', (req, res) => {
    const veiculo = veiculos.find(x => x.id == req.params.id)
    const idVeiculo = veiculos.indexOf(veiculo)
    veiculos[idVeiculo] = req.body
    res.status(200).send('informações do veiculo atualizada')
})

app.delete('/veiculos/:id', (req, res) =>{
    const veiculo = veiculos.find(x => x.id == req.params.id)
    const idVeiculo = veiculos.indexOf(veiculo)
    veiculos.splice(idVeiculo, 1)
    res.status(200).send('veículo excluido')
})

