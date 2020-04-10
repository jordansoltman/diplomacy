import { QueryInterface, DataTypes } from 'sequelize';

export default {
  up: (queryInterface: QueryInterface ) => {
    return queryInterface.createTable('games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      phase_length_minutes: {
        type: DataTypes.INTEGER
      },
      public: {
        type: DataTypes.BOOLEAN
      },
      invite_code: {
        type: DataTypes.STRING
      },
      no_processing_days: {
        type: DataTypes.TINYINT
      },
      variant: {
        type: DataTypes.STRING
      },
      game_messaging: {
        type: DataTypes.STRING
      },
      win_supply_centers: {
        type: DataTypes.INTEGER
      },
      max_turns: {
        type: DataTypes.INTEGER
      },
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
  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable('games');
  }
};