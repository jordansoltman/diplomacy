import Knex from 'knex';

exports.up = function (knex: Knex): Promise<void> {
    return knex.schema.createTable('order', (table) => {
        table.integer('game_id').unsigned();
        table.string('player');
        table.integer('turn_number');
        table.string('type').notNullable();
        table.string('territory').notNullable();
        table.string('territory_secondary');
        table.string('territory_tertiary');
        table
            .foreign(['game_id', 'player', 'turn_number'], 'fk_order-game_turn_has_player')
            .references(['game_id', 'player', 'turn_number'])
            .inTable('game_turn_has_player');
        table.primary(['game_id', 'player', 'turn_number', 'territory']);
    });
};

exports.down = function (knex: Knex): Promise<void> {
    return knex.schema.dropTable('order');
};
