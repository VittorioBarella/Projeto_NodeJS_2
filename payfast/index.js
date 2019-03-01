// A FUNÇÃO LISTEN DIZ EM QUAL PORTA IRÁ RODAR A APLICAÇÃO.
var app = require('./config/custom-express') ();

app.listen(3000, function() {
    console.log('Servidor rodando na porta 3000.');
});

