import Umzug from 'umzug';
import db from '../db';

const umzug = new Umzug({
    migrations: {
        path: './dist/db/migrations',
        params: [
            db.sequelize.getQueryInterface()
        ]
    },
    storage: 'sequelize',
    storageOptions: { sequelize: db.sequelize }
});

umzug.up().then(() => {
    console.log("Migration complete!")
});