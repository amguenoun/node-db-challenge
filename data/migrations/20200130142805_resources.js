
exports.up = function (knex) {
    return knex.schema.createTable('resources', tbl => {
        tbl.increments('id')
            .unique();
        tbl.string('name')
            .notNullable();
        tbl.text('description', 256);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('resources');
};
