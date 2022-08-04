const pg = require('pg');
const dbConfig = require('../config/db.config.js');

//postgres://username:password@db.us-east-2.rds.amazonaws.com:5432/testdb
const conString = "postgres://" + dbConfig.USER + ":" + dbConfig.PASSWORD + "@" + dbConfig.HOST + ":" + dbConfig.PORT + "/" + dbConfig.DB;

var client = new pg.Client(conString);
client.connect();

var query = client.query("SELECT NOW()");
//fired after last row is emitted

query.on('row', function(row) {
    console.log(row);
});

query.on('end', function() {
    client.end();
});