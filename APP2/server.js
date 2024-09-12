//crianfo uma variavel do express
const express = require('express');

//variavel pra gerenciar o aplicativo, instancia o express
const app = express();
//porta onde o aplictivo vai estar disponivel 
const port = 3002;

//required e response
//responder uma string
app.get('/', (req, res) => {
    res.send('Resposta da API 2');
});
app.listen(port, ()  => {
    console.log('API 2 escutando a porta ' + port);
});

