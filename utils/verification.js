const db = require('../data/dbConfig');

exports.validProject = (req, res, next) => {
    const project = req.body;
    if (!project.name) {
        res.status(400).json({ message: "A project requires a name field" });
    }
    else {
        req.project = project;
        next();
    }
}

exports.validTask = (req, res, next) => {
    const task = req.body;
    if (!task.description) {
        res.status(400).json({ message: "A task requires a description field" });
    }
    else if (!task.projectId) {
        res.status(400).json({ message: "A task requires a projectId field" });
    }
    else {
        db('projects')
            .where("id", task.projectId)
            .then(project => {
                if (!project) {
                    res.status(400).json({ message: "The projectId provided was not valid" });
                }
                else {
                    req.task = task;
                    next();
                }
            })
            .catch(err => {
                res.status(500).json({ message: "Cannot access database" })
            })
    }
}

exports.validResource = (req, res, next) => {
    const resource = req.body;
    if (!resource.name) {
        res.status(400).json({ message: "A resource requires a name field" });
    }
    else {
        req.resource = resource;
        next();
    }
}


exports.validProjectId = (req, res, next) => {
    const projectId = req.params.id
    db('projects')
        .where("id", projectId)
        .then(project => {
            if (project.length == 0) {
                res.status(400).json({ message: "The projectId provided was not valid" });
            }
            else {
                req.project = project
                next();
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Cannot access database" })
        })
}

exports.validTaskId = (req, res, next) => {
    const taskId = req.params.id
    db('tasks')
        .where("id", taskId)
        .then(task => {
            if (task.length == 0) {
                res.status(400).json({ message: "The taskId provided was not valid" });
            }
            else {
                req.task = task
                next();
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Cannot access database" })
        })
}

exports.validResourceId = (req, res, next) => {
    const resourceId = req.params.id
    db('resources')
        .where("id", resourceId)
        .then(resource => {
            if (resource.length == 0) {
                res.status(400).json({ message: "The resourceId provided was not valid" });
            }
            else {
                req.resource = resource
                next();
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Cannot access database" })
        })
}