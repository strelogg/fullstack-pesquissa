import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ mensagem: 'API funcionando!' })
})

app.get('/usuarios', (req, res) => {
  res.json([
    { id: 1, nome: 'Maria' },
    { id: 2, nome: 'João' },
  ])
})

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
})