
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { id: 1, name: 'Laptop', description: "An essential tool" },
        { id: 2, name: 'Designer', description: "For the creative work" },
        { id: 3, name: 'Subcontractor', description: "For work you don't want to have to do" }
      ]);
    });
};
