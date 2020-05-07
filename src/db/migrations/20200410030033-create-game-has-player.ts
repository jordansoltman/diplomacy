import Knex from 'knex';

exports.up = function (knex: Knex): Promise<void> {
    return knex.schema.createTable('game_has_player', (table) => {
        table.integer('game_id').unsigned().notNullable().references('game.id');
        table.string('player').notNullable().references('user.username');
        table.primary(['game_id', 'player']);
    });
};

exports.down = function (knex: Knex): Promise<void> {
    return knex.schema.dropTable('game_has_player');
};
