const express = require('express'); //estou importando o modulo express para dentro do modulo express
//essa variavel tem todas as funcionaldades do express disponiveis para mim
const routes = require('./routes');
//criar a aplicação
const app = express();

//para utilizar/entender json no corpo das requisições
app.use(express.json());
app.use(routes);




app.listen(3333);