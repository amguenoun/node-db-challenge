const router = require('express').Router();

const tasksController = require('./tasksController');

const verification = require('../../utils/verification');

router.post('/', verification.validTask, tasksController.createTask);

router.get('/', tasksController.getAllTasks);

router.get('/:id', verification.validTaskId, tasksController.getTaskById)

module.exports = router