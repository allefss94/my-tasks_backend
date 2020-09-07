const express = require('express');
const routes = express.Router();

const UserController = require('../controllers/UserController');
const TaskController = require('../controllers/TaskController');
const auth = require('../middlewares/UserAuthentication');

routes.get('/users', UserController.index);
routes.post('/user', UserController.create);
routes.put('/user/:id', UserController.update);
routes.delete('/user/:id', UserController.delete);

routes.get('/tasks', auth.UserAuthentication, TaskController.index);
routes.post('/task', TaskController.create);
routes.put('/task/:id', TaskController.update);
routes.delete('/task/:id', TaskController.delete);

module.exports = routes;
