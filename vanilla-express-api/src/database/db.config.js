const {Pool} = require('pg');
const config = 
{
    user: 'postgres',
    host: 'localhost',
    database: 'simple_test',
    password: 'secret_password',
    port: 5432,
}

db_pool = new Pool(config);

module.exports = db_pool;