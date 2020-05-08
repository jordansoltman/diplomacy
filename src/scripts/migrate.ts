import knex from 'knex';
import path from 'path';
import config from '../config';

export async function migrate(): Promise<void> {
    const dbConnection = knex({
        client: 'mysql',
        debug: false, // FIXME: should be based on configuration
        connection: {
            host: config.database.host,
            user: config.database.username,
            password: config.database.password,
            database: config.database.database
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: path.resolve(__dirname, '../db/migrations')
        }
    });

    // FIXME: move this drop create outside of this
    await dbConnection.raw(`DROP DATABASE IF EXISTS ${config.database.database};`);
    console.log('dropped the db');
    await dbConnection.raw(`CREATE DATABASE ${config.database.database};`);
    await dbConnection.raw(`USE ${config.database.database};`);
    await dbConnection.migrate.latest();
}
