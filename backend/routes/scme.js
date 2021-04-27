const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const ScmeController = require('../controllers/scme-controller');

router.post('/cadastro', ScmeController.postCadastro);
router.post('/login', ScmeController.postLogin);

module.exports = router;