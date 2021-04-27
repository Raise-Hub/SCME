const express = require('express');
const mysql = require('../mysql').pool;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.postCadastro = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error:error })};
        conn.query('SELECT * FROM scme WHERE login = ?', [req.body.login], (error, results) => {
            if (error) { return res.status(500).send({ error:error })};
            if (results.length > 0) {
                res.status(401).send({ mensagem: 'Usuário já cadastrado' })
            }else {
                bcrypt.hash(req.body.password, 10, (errBcrypt, hash) => {
                    if (errBcrypt) { return res.status(500).send({ error: errBcrypt }) }
                    conn.query(
                        `INSERT INTO scme (login, password) VALUES(?,?)`,
                        [req.body.login, hash],
                        (error, results) => {
                            conn.release
                            if (error) { return res.status(500).send({ error:error })};       
                            response =  {
                                mensagem: 'Usuário criado com sucesso',
                                usuarioCriado: {
                                    id_scme: results.insertId,
                                    login: req.body.login
                                }
                            }
                            return res.status(201).send(response);            
                        });
                });
            }
        })
        
    
    });
};

exports.postLogin = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error}) };
        const query = `SELECT * FROM scme WHERE login = ?`;
        conn.query(query, [req.body.login], (error,results, fields) => {
            conn.release();
            if (error) { return res.status(500).send({ error: error }) }
            if (results.length < 1) {
                return res.status(401).send({ message: 'Falha na autenticação'})
            }
            bcrypt.compare(req.body.password, results[0].password, (err, result) => {
                if (err) {
                    return res.status(401).send({ message: 'Falha na autenticação'});
                }
                if (result) {
                    const token = jwt.sign({
                        id_scme: results[0].id_scme,
                        login: results[0].login
                    }, process.env.JWT_KEY,
                    {
                        expiresIn: "1h"
                    })
                    return res.status(200).send({ 
                        message: 'Autenticado com sucesso',
                        token: token
                    });
                }
                return res.status(401).send({ message: 'Falha na autenticação'})
                
            })
        });
    });
}