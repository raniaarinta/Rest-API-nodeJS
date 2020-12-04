const express= require('express');
const app = express();
const mongoose =require('mongoose');
const Museum = require('./models/museum');
const bodyParser =require('body-parser');

//import route
const MuseumRoute = require('./Routes/museumRoutes');
const UserRoute =require('./Routes/UserRouter');

// middle ware
app.use(bodyParser.json());
app.use('/museum',MuseumRoute);
app.use('/user',UserRoute);


//connect database
const mongodbUri=''
mongoose.connect(mongodbUri,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
    console.log('conected to database');
});
app.listen(3000);

