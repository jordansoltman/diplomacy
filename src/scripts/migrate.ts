import Umzug from 'umzug';
import db from '../db';

const umzug = new Umzug({
    migrations: {
        path: './dist/db/migrations',
        params: [db.sequelize.getQueryInterface()]
    },
    storage: 'sequelize',
    storageOptions: { sequelize: db.sequelize }
});

// FIXME: this is temporary and should be resolved using config files

db.sequelize
    .query('DROP DATABASE diplomacy')
    .then(() => {
        return db.sequelize.query('CREATE DATABASE diplomacy');
    })
    .then(() => {
        return db.sequelize.query('USE diplomacy');
    })
    .then(() => {
        return umzug.up();
    })
    .then(() => {
        console.log('Migration complete!');
    });
