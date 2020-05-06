import Knex from 'knex';

exports.up = function (knex: Knex): Promise<void> {
    return knex.schema.createTable('game_turn_has_player', (table) => {
        table.integer('game_id').unsigned();
        table.string('player').references('user.username');
        table.integer('turn_number');
        table.string('state');
        table
            .foreign(['game_id', 'turn_number'], 'fk_game_turn-game_turn_has_player')
            .references(['game_id', 'turn_number'])
            .inTable('game_turn');
        table.primary(['game_id', 'player', 'turn_number']);
    });
};

exports.down = function (knex: Knex): Promise<void> {
    return knex.schema.dropTable('game_turn_has_player');
};
