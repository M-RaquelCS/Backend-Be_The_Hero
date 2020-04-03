const knex = require('knex');
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV == 'test' ? configuration.test : configuration.development;

//criando a coneção de desenvolvimento
const connection = knex(config);

//exporta a coneção com o banco de dados
module.exports = connection;