const { Pool } = require('pg');
const dotenv = require('dotenv');
const logger = require('./logger');

dotenv.config();

// ==> Conex?o com a Base de Dados:
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  logger.info('연결 성공!!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};