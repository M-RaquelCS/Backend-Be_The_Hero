const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count();
        
        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5) //esquema de paginação
        .offset((page - 1)* 5)   //esquema de paginação
        .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);

        response.header('X-Total-Count', count['count(*)']);//esquema de paginação

        return response.json(incidents);
    },

    async create(request, response){
        const {title, description, value} = request.body;
        //autenticação = cabeçalho (id), 
        //guarda informaçoes do contexto da requisição
        // (guarda dados da localização, da autenticação, dados sobre o idioma)
        //request.headers;
        const ong_id = request.headers.authorization;
        //armazena o  unico registro ou seja um unico id, 
        //o primeiro valor dessa arreview sera armazenada na variavel chave id
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });

    },

    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id != ong_id){
            return response.status(401).json({ error: 'Operation not permitted.'});
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
};