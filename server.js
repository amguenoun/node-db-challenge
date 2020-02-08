require('dotenv').config()

const express = require('express');

const projectRouter = require('./resources/projects/projectsRouter');

const resourceRouter = require('./resources/resources/resourcesRouter');

const server = express();

server.use(express.json());

server.use('/projects', projectRouter);

server.use('/resources', resourceRouter)

module.exports = server