require('dotenv/config')
const PG = require('pg');
const Pool = PG.Pool;
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME
const DB_HOST = process.env.DB_HOST
const DB_PORT = process.env.DB_PORT

const pool = new Pool({
	password: DB_PASSWORD,
	database: DB_NAME,
	user: DB_USER,
	host: DB_HOST,
	port: DB_PORT,
});

module.exports = {pool}
