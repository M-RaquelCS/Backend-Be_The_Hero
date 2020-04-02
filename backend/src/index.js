const express = require("express"); //importando o modulo express para variavel constate express

const cors = require('cors');

const app = express(); //variavel que armazenara minha aplicação

const routes = require('./routes'); 
/*importando a variavel routes*/
/*./ referenciar que é a mesma pagina do arquivo index*/

app.use(express.json());

app.use(cors());

app.use(routes);

app.listen(3333);
 //mandar a minha aplicação ouvir a porta 3333 (porta 80 é a padrão)