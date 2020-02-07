const express = require('express');

const projectsController = require('./projectsController');

const verification = require('../../utils/verification')

const router = express.Router();

router.post('/', verification.validProject, projectsController.createProject);

router.get('/', projectsController.getAllProjects);

router.get('/:id', verification.validProjectId, projectsController.getProjectById)

module.exports = router