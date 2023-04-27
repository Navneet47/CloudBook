const mongoose = require('mongoose');
const {MONGODB_URL} = require('./config/keys');

// const mongoUri = "mongodb://localhost:27017/notebook"
// const connectToMongo = ()=>{
//     mongoose.connect(mongoUri);
// }

// const MONGODB_URL = "mongodb+srv://sharmanavneet125:nVqE7MLSKZ01nFGm@cluster0.harq6a3.mongodb.net/notebook?retryWrites=true&w=majority";

if(!MONGODB_URL){
    throw new Error("Please define the MONGODB_URL");
}
let cached = global.mongoose;

if(!cached){
    cached = global.mongoose = {ccn: null, promise: null}
}

const connectToMongo = async ()=>{
    if(cached.conn){
        return cached.conn;
    }

    if(!cached.promise){
        const opts = {
             bufferCommands: false
        };
        cached.promise = await mongoose.connect(MONGODB_URL, opts).then((mongoose)=>{
            return mongoose
        })
    }

    try{
        cached.conn = await cached.promise;
    }catch(e){
        cached.promise = null;
        throw e;
    }
    return cached.conn;
}

module.exports = connectToMongo;
