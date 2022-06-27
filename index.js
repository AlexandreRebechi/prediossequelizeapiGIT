const express = require('express')
const rotas = require('./rotas');

const app = express();

app.use(express.json());

app.use(rotas);

//const db = require("./models");
//db.sequelize.sync();

app.listen(process.env.PORT || 3002, () => {
    console.log('Servidor rodando a API');
})