// import config from 'config';
import { OQB } from 'oqb';
import config from '../config';
import models from './models/';

const connection = config.database;

const orm = new OQB({
    client: 'mysql',
    debug: false,
    connection: {
        host: connection.host,
        user: connection.username,
        password: connection.password,
        database: connection.database
    }
});
models(orm);
orm.associateAllModels();

async function destroyConnection() {
    await orm.knex.destroy();
}

export { destroyConnection };
export default orm;
