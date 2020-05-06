import Knex from 'knex';

exports.up = function (knex: Knex): Promise<void> {
    return knex.schema.createTable('game', (table) => {
        table.increments('id').notNullable().primary();
        table.string('name').notNullable();
        table.integer('interval_minutes').notNullable();
        table.string('password');
        table.integer('win_condition');
        table.integer('num_player');
        table.dateTime('updated_at');
        table.dateTime('created_at');
    });
};

exports.down = function (knex: Knex): Promise<void> {
    return knex.schema.dropTable('game');
};
