//criando uma variavel do express
const express = require('express');

//variavel pra gerenciar o aplicativo, instancia o express
const app = express();
//porta onde o aplictivo vai estar disponivel 
const port = 3003;

//required e response
//responder uma string
app.get('/', (req, res) => {
    res.send('Resposta da API 3');
});
app.listen(port, ()  => {
    console.log('API 3 escutando a porta ' + port);
});

