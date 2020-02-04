
exports.up = function (knex) {
    return knex.schema.createTable('projects', tbl => {
        tbl.increments('id')
            .unique();
        tbl.string('name')
            .notNullable();
        tbl.text('description', 256);
        tbl.boolean('completed')
            .defaultTo(false)
            .notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('projects');
};
