const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, { useNewUrlParser: true });
 //Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('error', console.error.bind(console, 'MongoDB connection error:')) = require("mongoose");
const cors = require("cors");

const searchRoute = require("../Routes/search");
const postRoutes = require("../Routes/post");
const profileRoutes = require('./Routes/profile');


const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/posts', postRoutes);
app.use('/api/profile', profileRoutes);

mongoose.connect("mongodb://localhost:27017/instagram_clone");
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => app.listen(5000, () => console.log("Server running on port 5000")))
  .catch(err => console.log(err));


app.use("/api/search", searchRoute);

app.listen(5000, () => console.log("Server started on port 5000"));
