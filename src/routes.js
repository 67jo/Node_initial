const express = require('express');
const db = require('./db');
const SessionControler = require('./controlers/SessionControler');

const routes = express();



routes.post('/',
 SessionControler.checkfields, 
 SessionControler.store);

routes.get('/:id',SessionControler.show);

routes.get('/', SessionControler.index);

module.exports = routes;


