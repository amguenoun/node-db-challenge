
exports.up = function (knex) {
    return knex.schema.createTable('products', tbl => {
        tbl.increment('id');
        tbl.string('name')
            .notNullable();
        tbl.text('description', 256);
        tbl.boolean('completed')
            .defaultTo(false)
            .notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('products');
};
