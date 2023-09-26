const productModel = require('../models/Product')

const getProducts = (req, res) => {
    productModel.getAllProducts()
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};


module.exports = {
    getProducts
}