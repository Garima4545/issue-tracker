const mongoose = require('mongoose');
// const url = "mongodb+srv://01garima01:01garima01@cluster0.v8jgssf.mongodb.net/Issue_Tracker";
// mongoose.connect('url') 
mongoose.connect(process.env.MONGO_URI);
const db=mongoose.connection;

//If any Error then Getting this Line
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));   


db.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")
});

module.exports=db;  //Exports db
