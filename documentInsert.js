var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db){
  if(err) throw err;
  var databaseObject = db.db("Chie7tain");
  var document = {slackUsername:"Chie7tain",realName:"Ifeanyi Okwuobi",tracks:"frontend,backend,design"};
  databaseObject.collection("interns").insertOne(document,function(err,res){
    if(err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
