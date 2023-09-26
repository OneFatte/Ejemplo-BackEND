const express = require('express');
const router = express.Router();
const { ProductControllers } = require('./../controllers');


router.get('/', ProductControllers.getProducts);


module.exports = router;