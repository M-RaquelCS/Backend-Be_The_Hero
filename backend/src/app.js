const express = require("express"); //importando o modulo express para variavel constate express
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes'); 
/*importando a variavel routes*/
/*./referenciar que é a mesma pagina do arquivo index*/

const app = express(); //variavel que armazenara minha aplicação

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
 //mandar a minha aplicação ouvir a porta 3333 (porta 80 é a padrão)