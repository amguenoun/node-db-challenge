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
    }
}

exports.validResource = (req, res, next) => {
    const resource = req.body;
    if (!resource.name) {
        res.status(400).json({ message: "A resource requires a name field" });
    }
    else {
        req.task = task;
        next();
    }
}

