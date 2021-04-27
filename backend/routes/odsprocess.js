const express = require('express');
const router = express.Router();
const Login = require('../middleware/login');
const mysql = require('../mysql').pool;

const ProcessController = require('../controllers/odsprocess-controller');

router.get('/', ProcessController.getProcess);

router.post('/', Login.obrigatorio, ProcessController.postProcess);

router.get('/:id_odsprocess', ProcessController.oneProcess);

router.patch('/', Login.obrigatorio,  ProcessController.patchProcess);

router.delete('/', Login.obrigatorio, ProcessController.deleteProcess)

module.exports = router;