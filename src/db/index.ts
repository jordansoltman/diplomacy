'use strict';
import { Sequelize } from 'sequelize';
import Game from './models/game';

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/sequelize.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {
    models: {
        game: Game
    },
    sequelize: sequelize
};

Object.values(db.models).forEach((model) => {
    model.associate();
    model.initialize(sequelize);
});

export default db;
