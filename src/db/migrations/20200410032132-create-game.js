'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      phase_length_minutes: {
        type: Sequelize.INTEGER
      },
      public: {
        type: Sequelize.BOOLEAN
      },
      invite_code: {
        type: Sequelize.STRING
      },
      no_processing_days: {
        type: Sequelize.TINYINT
      },
      variant: {
        type: Sequelize.STRING
      },
      game_messaging: {
        type: Sequelize.STRING
      },
      win_supply_centers: {
        type: Sequelize.INTEGER
      },
      max_turns: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('games');
  }
};