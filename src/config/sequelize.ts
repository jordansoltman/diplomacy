export default {
    development: {
        username: 'root',
        password: '1247133182',
        database: 'diplomacy_development',
        host: '127.0.0.1',
        dialect: 'mysql',
        operatorsAliases: false
    },
    test: {
        username: 'root',
        password: null,
        database: 'database_test',
        host: '127.0.0.1',
        dialect: 'mysql',
        operatorsAliases: false
    },
    production: {
        username: 'root',
        password: null,
        database: 'database_production',
        host: '127.0.0.1',
        dialect: 'mysql',
        operatorsAliases: false
    }
};
