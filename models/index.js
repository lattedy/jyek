const { Pool } = require('pg')
const dbConfig = require('../config/db.config.js');

const pool = new Pool({
	host: dbConfig.HOST,
	user: dbConfig.USER,
})

// pool.query('SELECT $1::text as name', ['brianc'], (err, result) => {
//   if (err) {
// 		console.log(err);
//     return console.error('Error executing query', err.stack)
//   }
//   console.log(result.rows[0].name) // brianc
// })

module.exports = {
	query : (text, params, callback) => {
		return pool.query(text, params, (err, result)=> {
			if (err) {
				console.log(err);
				return console.error('Error executing query', err.stack)
			}
			console.log(result.rows[0]) // brianc
		})
	}
}