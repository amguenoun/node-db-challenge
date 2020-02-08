const db = require('../../data/dbConfig');

exports.createResource = (req, res) => {
    const resource = req.resource
    db('resources')
        .insert(resource)
        .then(id => {
            res.status(201).json({ id: id[0] });
        })
        .catch(err => {
            res.status(500).json({ message: "Cannot access database" });
        })
}

exports.getAllResources = (req, res) => {
    db('resources')
        .then(resources => {
            res.status(200).json(resources);
        })
        .catch(err => {
            res.status(500).json({ message: "Cannot access database" });
        })
}

exports.getResourceById = (req, res) => {
    const resource = req.resource
    res.status(200).json(resource)
}