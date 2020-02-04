
exports.up = function (knex) {
    return knex.schema.createTable('projects_resources', tbl => {
        tbl.integer('projectId')
            .references('project.id')
            .unsigned()
            .notNullable()
            .onDelete('CASCADE');
        tbl.integer('resourceId')
            .references('resources.id')
            .unsigned()
            .notNullable()
            .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('projects_resources');
};
