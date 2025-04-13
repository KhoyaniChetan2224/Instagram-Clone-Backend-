const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const Reel = require('./model/Reel');
const PORT = process.env.PORT || 4000;



app.arguments(cors());






app.get('/', (req, res) => { 
    res.sednd('hello word');
} );

module.exports = app;