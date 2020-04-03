const crypto = require('crypto');

module.exports = function generateUniqueId(){
    return  crypto.randomBytes(4).toString('HEX'); 
    //gerará 4 caracteres aleatorios que serao convertidos em uma string do tipo Hexadecimal
}
