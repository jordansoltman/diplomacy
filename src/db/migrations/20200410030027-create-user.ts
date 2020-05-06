import Knex from 'knex';

exports.up = function (knex: Knex): Promise<void> {
    return knex.schema.createTable('user', (table) => {
        table.string('username').notNullable().primary();
        table.string('email').notNullable();
        table.string('password');
        table.dateTime('created_at');
        table.dateTime('updated_at');
    });
};

exports.down = function (knex: Knex): Promise<void> {
    return knex.schema.dropTable('user');
};
