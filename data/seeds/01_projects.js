
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { id: 1, name: 'Frontend', description: "Create the frontend", completed: true },
        { id: 2, name: 'Backend', description: "Create the backend", completed: false }
      ]);
    });
};
