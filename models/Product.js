const connection = require('./../knexfile')['development'];

const dataBase = require('knex')(connection);

const getAllProducts = () => {
    return dataBase('productos');
};

const getProduct = (idProduct) => {
    return dataBase('productos')
        .where({ id: idProduct });
};

const createProduct = (Product) => {
    return dataBase('productos')
        .insert(Product);
};

module.exports = {
    getAllProducts,
    getProduct,
    createProduct
}