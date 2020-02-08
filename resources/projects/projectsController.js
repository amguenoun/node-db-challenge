const db = require('../../data/dbConfig');

exports.createProject = (req, res) => {
    const project = req.project

    db('projects')
        .insert(project)
        .then(id => {
            res.status(201).json({ id: id[0] });
        })
        .catch(err => {
            res.status(500).json({ message: "Cannot access database" });
        })
}

exports.getAllProjects = (req, res) => {
    db('projects')
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            res.status(500).json({ message: "Cannot access database" });
        })
}

exports.getProjectById = (req, res) => {
    const project = req.project
    res.status(200).json(project)
}