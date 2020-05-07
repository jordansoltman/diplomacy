import dotenv from 'dotenv';
dotenv.config();

const config: any = {
    development: {
        database: {
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            host: '127.0.0.1',
            client: 'mysql'
        }
    },
    test: {
        database: {
            username: 'root',
            password: 'tbd',
            database: 'database_test',
            host: '127.0.0.1',
            client: 'mysql'
        }
    },
    production: {
        database: {
            username: 'root',
            password: 'tbd',
            database: 'database_production',
            host: '127.0.0.1',
            client: 'mysql'
        }
    }
};

const env = process.env.NODE_ENV ?? 'development';

export default config[env];
