
exports.up = function (knex) {
    return knex.schema.createTable('products_resources', tbl => {
        tbl.integer('pId')
            .references('products.id')
            .unsigned()
            .notNullable()
            .onDelete('CASCADE');
        tbl.integer('rId')
            .references('resources.id')
            .unsigned()
            .notNullable()
            .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('products_resources');
};
