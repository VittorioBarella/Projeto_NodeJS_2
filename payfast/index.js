var express = require('express');
var app = express();

// A FUNÇÃO LISTEN DIZ EM QUAL IRÁ RODAR A APLICAÇÃO.
app.listen(3000, function() {
    console.log('Servidor rodando na porta 3000.');
});

app.get('/teste',function (req,res) {
    console.log('Recebida requisição de teste na porta 3000.');
    res.send('OK');
 });