
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects_resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects_resources').insert([
        { projectId: 1, resourceId: 1 },
        { projectId: 1, resourceId: 2 },
        { projectId: 2, resourceId: 1 },
        { projectId: 2, resourceId: 3 }
      ]);
    });
};
