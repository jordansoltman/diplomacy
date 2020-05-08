/* eslint-disable @typescript-eslint/camelcase */
import db from '../db';

export async function seed(): Promise<void> {

    console.log('STARTING SEED');
    // Create Games
    await db.models.game.insert([
        {
            name: 'Epic Euro Saga',
            interval_minutes: 3,
            password: '1248',
            win_condition: 18,
            num_players: 7
        },
        {
            name: "Tyler's Game",
            interval_minutes: 5,
            password: 'tyler',
            win_condition: 18,
            num_players: 7
        },
        {
            name: "Jordan's Game",
            interval_minutes: 7,
            password: '124833',
            win_condition: 18,
            num_players: 7
        },
        {
            name: 'Metes Game',
            interval_minutes: 10,
            password: 'mete',
            win_condition: 18,
            num_players: 7
        }
    ]);

    // Create Users
    await db.models.user.insert([
        {
            username: 'Jordan',
            password: '1234',
            email: 'me@jordansoltman.com'
        },
        {
            username: 'Tyler',
            password: '1234',
            email: 'me@tylersayvetz.com'
        },
        {
            username: 'Peter',
            password: '1234',
            email: 'me@peterthemeter.com'
        },
        {
            username: 'Mete',
            password: '1234',
            email: 'me@meterthepeter.com'
        }
    ]);

    // Add users to games
    await db.models.game_has_player.insert([
        {
            player: 'Tyler',
            game_id: 1,
            country: 'ENGLAND'
        },
        {
            player: 'Jordan',
            game_id: 1,
            country: 'TURKEY'
        },
        {
            player: 'Mete',
            game_id: 1,
            country: 'AUSTRIA'
        },
        {
            player: 'Peter',
            game_id: 1,
            country: 'RUSSIA'
        },
        {
            player: 'Tyler',
            game_id: 2,
            country: 'ENGLAND'
        },
        {
            player: 'Jordan',
            game_id: 2,
            country: 'TURKEY'
        },
        {
            player: 'Jordan',
            game_id: 3,
            country: 'ENGLAND'
        },
        {
            player: 'Mete',
            game_id: 3,
            country: 'FRANCE'
        }
    ]);

    /**
     * Create game turns
     * We have three games that have turns.
     * One turn for each.
     * The forth game has no turns.
     */
    await db.models.game_turn.insert([
        {
            game_id: 1,
            turn_number: 1
        },
        {
            game_id: 1,
            turn_number: 2
        },
        {
            game_id: 2,
            turn_number: 1
        },
        {
            game_id: 3,
            turn_number: 1
        },
        {
            game_id: 4,
            turn_number: 1
        }
    ]);

    //Add players to game turns (create game_turn_has_player's)
    await db.models.game_turn_has_player.insert([
        //game 1 (jordan's game)
        {
            game_id: 1,
            turn_number: 1,
            player: 'Jordan',
            state: 'READY'
        },
        {
            game_id: 1,
            turn_number: 1,
            player: 'Tyler',
            state: 'NO_ORDERS'
        },
        {
            game_id: 1,
            turn_number: 1,
            player: 'Peter',
            state: 'SAVED'
        },
        {
            game_id: 1,
            turn_number: 1,
            player: 'Mete',
            state: 'READY'
        },
        {
            game_id: 1,
            turn_number: 2,
            player: 'Jordan',
            state: 'READY'
        },
        {
            game_id: 1,
            turn_number: 2,
            player: 'Tyler',
            state: 'NO_ORDERS'
        },
        {
            game_id: 1,
            turn_number: 2,
            player: 'Peter',
            state: 'NO_ORDERS'
        },
        {
            game_id: 1,
            turn_number: 2,
            player: 'Mete',
            state: 'NO_ORDERS'
        },

        //game 2 (Tyler's game)
        {
            game_id: 2,
            turn_number: 1,
            player: 'Jordan',
            state: 'READY'
        },
        {
            game_id: 2,
            turn_number: 1,
            player: 'Tyler',
            state: 'READY'
        },

        //game 3 ( Peter's game)
        {
            game_id: 3,
            turn_number: 1,
            player: 'Peter',
            state: 'NO_ORDERS'
        },

        //game 4 (mete's game)
        {
            game_id: 4,
            turn_number: 1,
            player: 'Mete',
            state: 'NO_ORDERS'
        }
        /*
        order status options: 
        NO_ORDERS,
        SAVED,
        READY
        */
    ]);

    //Create orders

    await db.models.order.insert([
        //jordan's game turn 1
        {
            player: 'Jordan',
            game_id: 1,
            turn_number: 1,
            type: 'BUILD',
            territory: 'WALES',
            territory_secondary: null,
            territory_tertiary: null,
            convoy: false,
            unit: 'FLEET'
        },
        {
            player: 'Jordan',
            game_id: 1,
            turn_number: 1,
            type: 'BUILD',
            territory: 'BREST',
            territory_secondary: null,
            territory_tertiary: null,
            convoy: false,
            unit: 'FLEET'
        },
        {
            player: 'Tyler',
            game_id: 1,
            turn_number: 1,
            type: 'BUILD',
            territory: 'BERLIN',
            territory_secondary: null,
            territory_tertiary: null,
            convoy: false,
            unit: 'ARMY'
        },
        {
            player: 'Peter',
            game_id: 1,
            turn_number: 1,
            type: 'BUILD',
            territory: 'CONSTANTINOPLE',
            territory_secondary: null,
            territory_tertiary: null,
            convoy: false,
            unit: 'ARMY'
        },
        {
            player: 'Mete',
            game_id: 1,
            turn_number: 1,
            type: 'BUILD',
            territory: 'SPAIN',
            territory_secondary: null,
            territory_tertiary: null,
            convoy: false,
            unit: 'ARMY'
        },

        //jordan's game turn 2

        {
            player: 'Mete',
            game_id: 1,
            turn_number: 2,
            type: 'MOVE',
            territory: 'SPAIN',
            territory_secondary: 'GASCONY',
            territory_tertiary: null,
            convoy: false,
            unit: null
        },
        {
            player: 'Peter',
            game_id: 1,
            turn_number: 2,
            type: 'MOVE',
            territory: 'CONSTANTINOPLE',
            territory_secondary: 'ANKARA',
            territory_tertiary: null,
            convoy: false,
            unit: null
        },
        {
            player: 'Tyler',
            game_id: 1,
            turn_number: 2,
            type: 'MOVE',
            territory: 'BERLIN',
            territory_secondary: 'PRUSSIA',
            territory_tertiary: null,
            convoy: false,
            unit: null
        }
    ]);
}