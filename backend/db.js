const mongoose = require('mongoose');

const mongoUri = "mongodb://localhost:27017/notebook"

const connectToMongo = ()=>{
    mongoose.connect(mongoUri);
}

module.exports = connectToMongo;
