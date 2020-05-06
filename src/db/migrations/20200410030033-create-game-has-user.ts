import Knex from 'knex';

exports.up = function (knex: Knex): Promise<void> {
    return knex.schema.createTable('game_has_user', (table) => {
        table.integer('game_id').unsigned().notNullable().references('game.id');
        table.string('user_username').notNullable().references('user.username');
        table.primary(['game_id', 'user_username']);
    });
};

exports.down = function (knex: Knex): Promise<void> {
    return knex.schema.dropTable('game_has_user');
};
