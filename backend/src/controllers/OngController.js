//controlar o ban=ck-end das ongs, as funções
//encapsular as funcionamentos das rotas

const connection = require('../database/connection')
//importando coneção com o banco de dados
const crypto = require('crypto');

module.exports = {
    /* rota / recurso*/
    //async = função assicrona. await = avisar que deve esperar o evento terminar dentro da função para continuar no proximo evento
    async index (request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create (request, response) {
        const {name, email, whatsapp, city, uf}= request.body; //acessar dados do corpo da requisição
    
        const id = crypto.randomBytes(4).toString('HEX'); //gerará 4 caracteres aleatorios que serao convertidos em uma string do tipo Hexadecimal
    
        //acessando o banco de dados e conseguir fazer as opreções
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({ id });
    }
};