const express = require('express');
const router = express.Router();
const { ClientControllers } = require('./../controllers');

router.get('/', ClientControllers.getClients);


module.exports = router;

