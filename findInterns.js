var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
var chalk = require("chalk");// the chalk package helps to colour the console message different colours

MongoClient.connect(url,function(err,db){
	if(err) throw err;
	var databaseObject = db.db("Chie7tain");
	databaseObject.collection("myMovies").findOne({},function(err,result){
		if(err) throw err;
		console.log(chalk.blue("(A) The first document in the collection"));
		console.log(result)
	});

	// the query variable holds the search query the find method would use to locate the values we are looking for in the collection

	var query = { rating: 7};
	databaseObject.collection("myMovies").find(query).toArray(function(err,result){
		if(err) throw err;
		console.log(chalk.blue("(B) All Movies with he rating of 7: "));

		console.log(result);
	});

	// we use the projection object option to limit the search result by specifying 1 for yes and 0 for no 
	// NOTE:You are not allowed to specify both 0 and 1 values in the same object (except if one of the fields is the _id field). If you specify a field with the value 0, all other fields get the value 1, and vice versa:

	databaseObject.collection("myMovies").find({}, { projection: { _id:0 ,movie:1 } }).toArray(function(err,result){
		if(err) throw err;
		console.log(chalk.blue("(C) return the only the movie titles and nothing else"));
		console.log(result);
		db.close();
	});
});