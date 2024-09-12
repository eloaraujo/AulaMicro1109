//crianfo uma variavel do express
const express = require('express');

//variavel pra gerenciar o aplicativo, instancia o express
const app = express();
//porta onde o aplictivo vai estar disponivel 
const port = 3001;

//required e response
//responder uma string
app.get('/', (req, res) => {
    res.send('Resposta da API 1');
});
app.listen(port, ()  => {
    console.log('API 1 escutando a porta ' + port);
});

