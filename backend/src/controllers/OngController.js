const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    async list(request, response) {
        const ongs = await connection('ongs').select('*');
    
        response.json(ongs);
    },

    async create(request, response) {
        const data = request.body;
        const {name, email, whatsapp, city, uf} = request.body;
        //console.log(data);
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id, name, email,whatsapp, city, uf        
        })
    
        return response.json({ id });
    }
};