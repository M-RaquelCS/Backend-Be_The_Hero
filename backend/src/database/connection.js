const knex = require('knex');

const configuration = require('../../knexfile');

//criando a coneção de desenvolvimento
const connection = knex(configuration.development);

//exporta a coneção com o banco de dados
module.exports = connection;