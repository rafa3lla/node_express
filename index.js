const express = require("express")

app.get('/', (requisicao, resposta) => {
    resposta.send("Estou funcionando com o express")
})

app.listen(3000, () => {
    console.log("Servidor está rodando na porta 3000")
})

