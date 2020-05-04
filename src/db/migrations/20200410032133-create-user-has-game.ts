/* eslint-disable @typescript-eslint/camelcase */

import { QueryInterface, DataTypes } from 'sequelize';

export default {
    up: (queryInterface: QueryInterface): Promise<void> => {
        return queryInterface.createTable('user_has_game', {
            user_username: {
                type: DataTypes.STRING,
                references: {
                    model: 'user',
                    key: 'username'
                }
            },
            game_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'game',
                    key: 'id'
                }
            }
        });
    },
    down: (queryInterface: QueryInterface): Promise<void> => {
        return queryInterface.dropTable('games');
    }
};
