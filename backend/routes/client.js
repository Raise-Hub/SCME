const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;
const login = require('../middleware/login');

const ClientController = require('../controllers/client-controller');

router.get('/', ClientController.getClient);
router.post('/', login.obrigatorio, ClientController.postClient);
router.get('/:id_client', ClientController.oneClient);
router.patch('/', login.obrigatorio, ClientController.patchClient);
router.delete('/', login.obrigatorio, ClientController.deleteClient)

module.exports = router;