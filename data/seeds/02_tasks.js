
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { id: 1, notes: "Simple", projectId: 1, description: "Create a React App", completed: true },
        { id: 2, notes: "Netlify", projectId: 1, description: "Host the App", completed: true },
        { id: 3, notes: "By Friday", projectId: 2, description: "Subcontract this out", completed: false }
      ]);
    });
};
