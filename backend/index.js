const express = require('express'); //estou importando o modulo express para dentro do modulo express
//essa variavel tem todas as funcionaldades do express disponiveis para mim

//criar a aplicação
const app = express();

//criando a rota
app.get('/', (request, response) => {
    return response.json({
        mensagem: 'Hello World',
        autor: 'Josimar'
    });
});

app.listen(3333);