const clientModel = require('../models/Client')

const getClients = (req, res) => {
    clientModel.getAllClients()
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};

const getClient = (req, res) => res.status(200).send({
    message: "Client"
});
const insertClient = (req, res) => res.status(200).send({
    message: "Insert Client"
});

module.exports = {
    getClients,
    getClient,
    insertClient
}
