const connection = require('./../knexfile')['development'];

const dataBase = require('knex')(connection);

const getAllClients = () => {
    return dataBase('cliente');
};

const getClient = (idClient) => {
    return dataBase('clients')
        .where({ id: idClient });
};

const createClient = (client) => {
    return dataBase('clients')
        .insert(client);
};

module.exports = {
    getAllClients,
    getClient,
    createClient
}

