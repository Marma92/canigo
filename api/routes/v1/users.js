const express = require('express');
const router = express.Router();

const service = require('../../services/user');

router.get('/:id', service.getById);

router.post('/', service.add);

router.patch('/', service.update);

router.delete('/', service.delete);

module.exports = router;