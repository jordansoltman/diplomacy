import Knex from 'knex';

exports.up = function (knex: Knex): Promise<void> {
    return knex.schema.createTable('game_turn', (table) => {
        table.integer('game_id').unsigned().references('game.id');
        table.integer('turn_number');
        table.primary(['game_id', 'turn_number']);
    });
};

exports.down = function (knex: Knex): Promise<void> {
    return knex.schema.dropTable('game_turn');
};
