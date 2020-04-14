var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";
var chalk = require('chalk');//using the chalk package to colour the console message

MongoClient.connect(url,function(err,db){
  if(err) throw err;

  // linking the database to a variable
  var databaseObject = db.db("Chie7tain");
  // using the createCollection method to create the interns collection
  databaseObject.createCollection("interns",function(err,res){
    if(err) throw err;
    console.log(chalk.green("Interns Collection created"));
  });

  // calling the createCollection method to create a new collection/table
  databaseObject.createCollection("myMovies", function(err,res){
  	if(err) throw err;//if an error is found display error
  	//else create collection
  	console.log(chalk.green("myMovies collection created successfully!"));
  });

  //the document to added is an array of movie objects
  var documentTobeAdded = 
  [ 
	  {movie: "The Banker", year: "2020", rating: 8},  
	  {movie: "Bad Boys", year: "2020", rating: 7}, 
	  {movie: "The Hunt", year: "2020", rating: 7}, 
	  {movie: "Bloodshot", year: "2020", rating: 7.5}, 
	  {movie: "First Cow", year: "2020", rating: 6.5} 
  ];
  // inserting many documents into the myMovies collection using the insertMany method
  databaseObject.collection("myMovies").insertMany(documentTobeAdded,function(err,res){
  	if(err) throw err;
  	console.log(chalk.green("number of documents added are: " + res.insertedCount));
  	db.close();
  });
});