const express = require('express');
const router = express.Router();
const Login = require('../middleware/login');
const mysql = require('../mysql').pool;

const OdsController = require('../controllers/ods-controller');

router.get('/', OdsController.getODS);
router.post('/', Login.obrigatorio, OdsController.postODS);
router.get('/:id_ods', OdsController.oneODS);
router.patch('/', Login.obrigatorio, OdsController.patchODS);
router.delete('/', Login.obrigatorio, OdsController.deleteODS);

module.exports = router;