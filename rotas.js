const { Router } = require('express');
const predioControle = require('./controladores/PredioControladores');

const rotas = Router();

rotas.get('/predio', predioControle.index);

rotas.get('/predio/:id', predioControle.show);

rotas.post('/predio', predioControle.store);

rotas.put('/predio/:id', predioControle.update);

rotas.delete('/predio/:id', predioControle.destroy);

module.exports = rotas;