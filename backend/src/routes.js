const express = require('express');

const OngController = require('./controllers/OngController');
const incidentController = require('./controllers/incidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router(); 
/*desacoplando o modelo de rotas do express e salvando em uma variavel*/

//get = listar alguma coisa
//listagem de ongs
routes.get('/ongs', OngController.index);
//cadastro de ongs
routes.post('/ongs', OngController.create); 
//rota raiz e dizendo que vou receber uma função como segundo parametro, 
//que receberá dois parametros, requisição e resposta

routes.post('/incidents', incidentController.create);
routes.get('/incidents', incidentController.index);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', ProfileController.index);

//criando uma seção fazendo um login
routes.post('/sessions', SessionController.create);


module.exports = routes; 
/*exportanto a variavel routes para ser importada e ultilizada em outro arquivo*/