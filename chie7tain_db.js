
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/Chie7tain_db";

MongoClient.connect(url,function(err,db){
	if(err)throw err;
	console.log("Database created by Chie7tain");
	db.close();
});