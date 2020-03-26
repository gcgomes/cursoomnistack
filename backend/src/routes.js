const { Router } = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const AuthController = require('./controllers/AuthController');

const routes = Router();

routes.post('/login', AuthController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

routes.get('/incidents', IncidentController.index);
routes.get('/ong-incidents', IncidentController.indexByOng);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.destroy);

module.exports = routes;