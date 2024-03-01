require('dotenv').config()
const mongoose = require('mongoose')
//Getting mongodb conn string from .env file
const mongoString = process.env.DATABASE_URL;

const connectDb = async () => {
    //using mongodb string to connect mongo db to the server
    mongoose.connect(mongoString);
    const database = mongoose.connection;

    //Db execption handling
    database.on('error', (error) => {
        console.log(error)
    })

    database.once('connected', () => {
        console.log('Database Connected');
    })
}

module.exports = {connectDb}