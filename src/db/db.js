const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectdb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to the Mongo database.");
    }catch(err){
        console.log(err.message);
    }
}

module.exports = connectdb;