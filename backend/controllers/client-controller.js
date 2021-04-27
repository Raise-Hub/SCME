const mysql = require('../mysql').pool;

exports.getClient = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        conn.query(
            'SELECT * FROM client',
            (error, result, field) => {
                if(error) { return res.status(500).send({ error: error })};
               
                return res.status(200).send({ response: result })
            }
        )
    })
};

exports.postClient = (req, res, next) => {
    mysql.getConnection((error, conn) => {
     conn.query(
         'INSERT INTO client (name, address, telephone, email, id_scme) VALUES (?, ?, ?, ?, ?)',
         [
             req.body.name,
             req.body.address,
             req.body.telephone,
             req.body.email,
             req.body.id_scme
         ],
         (error, result, field) => {
             conn.release();
 
             if (error) {
                 return res.status(500).send({error: error, response: null});
             }
 
             return res.status(201).send({
                 message: 'Ficha criada com sucesso!',
                 id_client: result.insertId
             })
         }
     );
    }) 
 };

 exports.oneClient = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        conn.query(
            'SELECT * FROM client WHERE id_client = ?', 
            [req.params.id_client],
            (error, result, field) => {
                if(error) { return res.status(500).send({ 
                    error: error 
                    })
                };
                return res.status(200).send({ response: result })
            }
        )
    })
};

exports.patchClient = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        conn.query(
            `UPDATE client
                SET name = ?, address = ?, telephone = ?, email = ?
            WHERE id_client = ?`,
            [
                req.body.name,
                req.body.address,
                req.body.telephone,
                req.body.email,
                req.body.id_client 
            ],
            (error, result, field) => {
                conn.release();
                if (error) {
                    return res.status(500).send({
                        error: error,
                        response: null
                    });
                }
                res.status(202).send({
                    message: 'Ficha alterada com sucesso!'
                })
            }
        )
    })
};

exports.deleteClient = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        conn.query(
            `DELETE FROM client WHERE id_client = ?`, [ req.body.id_client ],
            (error, resultado, field) => {
                conn.release();

                if (error) {
                    return res.status(500).send({
                        error: error,
                        response: null
                    });
                }

                res.status(202).send({
                    message: 'Ficha deletada com sucesso!'
                })
            }
        )
    })
};