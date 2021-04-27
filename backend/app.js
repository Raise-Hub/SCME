const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const rotaClient = require('./routes/client');
const rotaODS = require('./routes/ods');
const rotaSCME = require('./routes/scme');
const rotaProcess = require('./routes/odsprocess');

//app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header', 
        'Origin, X-Requested-With, Content-type, Accept, Authorization',
    );

    if (req.mothod === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
})


app.use('/client', rotaClient);
app.use('/ods', rotaODS);
app.use('/scme', rotaSCME);
app.use('/process', rotaProcess);

app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            messagem: error.message
        }
    })
})


module.exports = app;