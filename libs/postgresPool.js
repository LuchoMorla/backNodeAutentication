const { Pool } = require('pg');

    const pool = new Pool({
        host: 'localhost',
        port: 5432,
        user: `lucho`,
        password: `admin123`,
        database: `my_firStore`,
    });

module.exports = pool;