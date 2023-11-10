const express = require("express")
const path = require("path")

const app = express()

const caminhoBase = path.join(__dirname, "templates")

//https://localhost3000/usuarios
app.get('/usuarios/:id', (requisicao, resposta) => {
    const id = requisicao.params.id

    console.log(`Acessando dados do usuario: ${id}`)

    resposta.sendFile(`${caminhoBase}/usuarios.html`)
})

//https://localhost3000
app.get('/', (requisicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)
})

app.listen(3000, () => {
    console.log("Servidor está rodando na porta 3000")
})

