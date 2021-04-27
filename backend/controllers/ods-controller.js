const mysql = require('../mysql').pool;

exports.getODS = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        conn.query(
            `SELECT ODS.id_ods,
                    ODS.equipment,
                    ODS.type,
                    ODS.brand,
                    ODS.description,
                    ODS.id_scme,
                    client.name
               FROM ODS
         INNER JOIN client
                 ON client.id_client = ODS.id_client;`,
            (error, result, field) => {
                if(error) { return res.status(500).send({ error: error })};
                return res.status(200).send({ response: result })
            }
        );
    })
};

exports.postODS = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        conn.query(
            'INSERT INTO ODS (equipment, type, brand, description, id_client, id_scme) VALUES (?, ?, ?, ?, ?, ?)',
            [
                req.body.equipment,
                req.body.type,
                req.body.brand,
                req.body.description,
                req.body.id_client,
                req.body.id_scme
            ],
            (error, result, field) => {
                conn.release();

                if (error) {
                    return res.status(500).send({
                        error: error,
                        response: null
                    })
                };

                res.status(202).send({
                    message: 'Ordem de Serviço criada.',
                    id_ods: result.insertId
                })
            }
        );
    })
};

exports.oneODS = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        conn.query(
            'SELECT * FROM ODS WHERE id_ods = ?', [ req.params.id_ods ],
            (error, result, field) => {
                if(error) { return res.status(500).send({ error: error })};
                return res.status(200).send({ response: result })
            }
        );
    })
};

exports.patchODS = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        conn.query(
            `UPDATE ODS
                SET equipment = ?, type = ?, brand = ?, description = ?
            WHERE id_ods = ?`,
            [
                req.body.equipment,
                req.body.type,
                req.body.brand,
                req.body.description,
                req.body.id_ods 
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
                    message: 'ODS alterada com sucesso!'
                })
            }
        )
    })
};

exports.deleteODS = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        conn.query(
            `DELETE FROM ODS WHERE id_ods = ?`, [ req.body.id_ods ],
            (error, resultado, field) => {
                conn.release();

                if (error) {
                    return res.status(500).send({
                        error: error,
                        response: null
                    });
                }

                res.status(202).send({
                    message: 'ODS deletada com sucesso!'
                })
            }
        )
    })
};