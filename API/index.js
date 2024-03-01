require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const {connectDb} = require('./config/db.js')
const routes = require('./routes/routes');
const seed = require('./util/seed.js');
const cors = require('cors');

connectDb();

// Creating an instance of Express
const app = express();
app.use(cors());
app.use(express.json());

//Base endpoint
app.use('/api', routes);

//Port num
const PORT = process.env.PORT || 5000;

app.listen(5000, () =>{
    console.log(`Server Started at ${5000}`)
})