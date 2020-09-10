const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');
const TaskController = require('../controllers/TaskController');
const UserAuth = require('../middlewares/Authentications');

router.get('/users', UserController.index);
router.post('/user', UserController.create);
router.put('/user/:id', UserController.update);
router.delete('/user/:id', UserController.delete);

router.get('/tasks', UserAuth.UserAuthentication, TaskController.index);
router.post('/task', TaskController.create);
router.put('/task/:id', TaskController.update);
router.delete('/task/:id', TaskController.delete);

module.exports = router;
