const { Client } = require('pg');

async function getConnection() {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: `lucho`,
        password: `admin123`,
        database: `my_firStore`,
    });
    await client.connect();
    return client;
}

module.exports = getConnection;