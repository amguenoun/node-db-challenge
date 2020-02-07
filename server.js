require('dotenv').config()

const express = require('express');

const projectRouter = require('./resources/projects/projectsRouter');

const server = express();

server.use(express.json());

server.use('/projects', projectRouter);

module.exports = server