var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
var chalk = require("chalk");

MongoClient.connect(url,function(err,db){
	if(err) throw err;
	// linking the database to a varible so we can work with it
	var databaseObject = db.db("Chie7tain");
	// document we want to update
	var tobeUpdated = { title:"The Banker"};
	var newValue = { $set: {title:"The Gentlemen", year:"2020", rating:7.8} };
// using the updateOne method to get and set the new value 
	databaseObject.collection('myMovies').updateOne(tobeUpdated,newValue,function(err,res){
		if(err) throw err;
		console.log(chalk.green("myMovies updated successfully"));
		db.close();
	});
});