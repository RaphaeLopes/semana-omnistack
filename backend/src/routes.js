const express = require('express');
const ongController = require('./controllers/OngController')
const incidentController = require('./controllers/IncidentController')
const profileController = require('./controllers/ProfileController')
const sessionController = require('./controllers/SessionController')

const routes = express.Router();
routes.get('/sessions', sessionController.create);

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

routes.get('/incident', incidentController.index);
routes.post('/incident', incidentController.create);
routes.delete('/incident/:id', incidentController.delete);

routes.get('/profile', profileController.index);



module.exports = routes;