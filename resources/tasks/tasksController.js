const db = require('../../data/dbConfig');

exports.createTask = (req, res) => {
    const task = req.task;
    db('tasks')
        .insert(task)
        .then(id => {
            res.status(201).json({ id: id[0] });
        })
        .catch(err => {
            res.status(500).json({ message: 'Cannot access database' })
        })
}

exports.getAllTasks = (req, res) => {
    db('tasks as t')
        .join('projects as p', 't.projectId', 'p.id')
        .select('t.*', 'p.name as projectName', 'p.description as projectDescription')
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(err => {
            res.status(500).json({ message: 'Cannot access database' })
        })
}

exports.getTaskById = (req, res) => {
    const task = req.task;
    res.status(200).json(task)
}