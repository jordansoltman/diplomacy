import { QueryInterface, DataTypes } from 'sequelize';

export default {
    up: (queryInterface: QueryInterface): Promise<void> => {
        return queryInterface.createTable('user', {
            username: {
                primaryKey: true,
                type: DataTypes.STRING
            },
            email: { type: DataTypes.STRING },
            createdAt: {
                allowNull: false,
                type: DataTypes.DATE
            },
            updatedAt: {
                allowNull: false,
                type: DataTypes.DATE
            }
        });
    },
    down: (queryInterface: QueryInterface): Promise<void> => {
        return queryInterface.dropTable('user');
    }
};
