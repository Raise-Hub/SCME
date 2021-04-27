const mysql = require('../mysql').pool;

exports.getProcess = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        conn.query(
            `SELECT ODSprocess.id_odsprocess,
                    ODSprocess.responsible,
                    ODSprocess.start,
                    ODSprocess.finish,
                    ODSprocess.id_ods,
                    ODSprocess.id_scme,
                    client.name
               FROM ODSprocess
         INNER JOIN client
                 ON client.id_client = ODSprocess.id_client;`,
            (error, result, field) => {
                if(error) { return res.status(500).send({ error: error })};
                return res.status(200).send({ response: result })
            }
        );
    })
};

exports.postProcess = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        conn.query(
            'INSERT INTO ODSprocess (responsible, start, finish, id_ods, id_client, id_scme) VALUES (?, ?, ?, ?, ?, ?)',
            [
                req.body.responsible,
                req.body.start,
                req.body.finish,
                req.body.id_ods,
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
                    id_odsprocess: result.insertId
                })
            }
        );
    })
};

exports.oneProcess = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        conn.query(
            'SELECT * FROM ODS WHERE id_odsprocess = ?', [ req.params.id_odsprocess ],
            (error, result, field) => {
                if(error) { return res.status(500).send({ error: error })};
                return res.status(200).send({ response: result })
            }
        );
    })
};

exports.patchProcess = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        conn.query(
            `UPDATE ODSprocess
                SET responsible = ?, start = ?, finish = ?
            WHERE id_odsprocess = ?`,
            [
                req.body.responsible,
                req.body.start,
                req.body.finish,
                req.body.id_odsprocess 
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

exports.deleteProcess = (req, res, next) => {
    mysql.getConnection((error, conn) => {
        conn.query(
            `DELETE FROM ODS WHERE id_odsprocess = ?`, [ req.body.id_odsprocess ],
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
}