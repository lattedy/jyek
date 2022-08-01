const { Pool } = require('pg')
const { RDS } = require('aws-sdk')
const signerOptions = {
  credentials: {
    accessKeyId: 'AKIARKBK4QYVOVJ6HPYY',
    secretAccessKey: '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',
  },
  region: 'ap-northeast-2',
  hostname: 'jyek-db.cymjlrnstfba.ap-northeast-2.rds.amazonaws.com',
  port: 5432,
  username: 'postgres',
}
const signer = new RDS.Signer()
const getPassword = () => signer.getAuthToken(signerOptions)

const pool = new Pool({
  host: signerOptions.hostname,
  port: signerOptions.port,
  user: signerOptions.username,
  database: 'poastgress',
  password: getPassword,
})

module.exports = {
	query: (text, params, callback) => {
		console.log(text);
		const start = Date.now();
		return pool.query(text, (err, res) => {
      const duration = Date.now() - start;
      console.log(res);
      callback(err, res);
    })
	},
}