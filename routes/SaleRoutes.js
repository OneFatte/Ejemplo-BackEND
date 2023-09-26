const express = require('express');
const router = express.Router();


router.get('/', (req, res) => res.status(200).send({
    message: "Sale"
}));
router.post('/', () => { });
router.put('/', () => { });
router.patch('/', () => { });
router.delete('/', () => { });


module.exports = router;