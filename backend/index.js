const express = require('express'); //estou importando o modulo express para dentro do modulo express
//essa variavel tem todas as funcionaldades do express disponiveis para mim

//criar a aplicação
const app = express();

//para utilizar/entender json no corpo das requisições
app.use(express.json());

/**
 * Tipos de parâmetros
 * 
 * Query Params: Parâmentros nomeados enviados na rota apos "?" (filtros, Paginação)
 * localhost:3333/users?name=Josimar&idade=25
 * Route Params: Parâmentros utilizados para identificar recursos
 * app.get('/users/:id', (request, response) => {})
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

//criando a rota
// app.get('/', (request, response) => {
//     return response.json({
//         mensagem: 'Hello World',
//         autor: 'Josimar'
//     });
// });

// //http://localhost:3333/users?name=Josimar&Idade=21
// app.get('/users', (request, response) => {
//     const params = request.query;//objeto com todos os paramentros
//     console.log(params);
//     return response.json({
//         mensagem: 'Hello World',
//         autor: 'Josimar'
//     });
// });
//http://localhost:3333/users/11
// app.get('/users/:id', (request, response) => {
//     const params = request.params;//objeto com todos os paramentros
//     console.log(params);
//     return response.json({
//         mensagem: 'Hello World',
//         autor: 'Josimar'
//     });
// });
//criar um usuario
app.post('/users', (request, response) => {
    const body = request.body;//objeto com todos os dados do body
    console.log(body);
    return response.json({
        mensagem: 'Hello World',
        autor: 'kkkkkkkkkkkk'
    });
});

app.listen(3333);