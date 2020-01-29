
exports.up = function (knex) {
    return knex.schema.createTable('tasks', tbl => {
        tbl.increments('id')
            .unique();
        tbl.integer('projectId')
            .notNullable()
            .unsigned()
            .references('products.id')
            .onDelete('CASCADE');
        tbl.text('description', 256)
            .notNullable();
        tbl.text('notes', 256);
        tbl.boolean('completed')
            .defaultTo(false)
            .notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('tasks');
};
