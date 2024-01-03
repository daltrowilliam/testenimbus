const pgp = require('pg-promise')();
const fs = require('fs');
const connection = {
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'root',
};

const db = pgp({ ...connection, database: 'nimbus' });

const createDatabase = async () => {
    try {
        const masterDb = pgp({ ...connection, database: 'postgres' });

        const databaseExists = await masterDb.oneOrNone("SELECT 1 FROM pg_database WHERE datname = 'nimbus'");

        if (!databaseExists) {
            await masterDb.query('CREATE DATABASE nimbus');
            console.log('Database created.');
        } else {
            console.log('Database already exists. Skipping creation.');
        }

        const nimbusDb = pgp({ ...connection, database: 'nimbus' });

        const tableExists = await nimbusDb.oneOrNone("SELECT to_regclass('public.alerts')");

        if (!tableExists.to_regclass) {
            const sqlFile = fs.readFileSync(__dirname + '/queries.sql', 'utf8');
            const queries = sqlFile.split(';');

            for (const query of queries) {
                if (query.trim() !== '') {
                    await nimbusDb.query(query);
                }
            }
            console.log('Tables created and populated.');
        }

    } catch (error) {
        console.error('Error creating database:', error);
    }
};

module.exports = { db, createDatabase };






