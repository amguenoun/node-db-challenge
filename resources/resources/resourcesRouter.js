const router = require('express').Router();

const resourcesController = require('./resourcesController');

const verification = require('../../utils/verification');

router.post('/', verification.validResource, resourcesController.createResource);

router.get('/', resourcesController.getAllResources);

router.get('/:id', verification.validResourceId, resourcesController.getResourceById)

module.exports = router;