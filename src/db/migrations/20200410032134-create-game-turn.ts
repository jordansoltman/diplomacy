/* eslint-disable @typescript-eslint/camelcase */

import { QueryInterface, DataTypes } from 'sequelize';

export default {
    up: (queryInterface: QueryInterface): Promise<void> => {
        return queryInterface.createTable('game_turn', {
            game_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'game',
                    key: 'id'
                }
            },
            turn: { type: DataTypes.INTEGER }
        });
    },
    down: (queryInterface: QueryInterface): Promise<void> => {
        return queryInterface.dropTable('game_turn');
    }
};
