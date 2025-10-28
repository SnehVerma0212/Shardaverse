const mongoose = require("mongoose");
const { required } = require("zod/mini");
const Schema = mongoose.Schema;

const userModel = new Schema({
    Name: {type: String, required: true},
    Password: {type: String, required: true},
    Email: {type: String, required: true},
    CollegeEmail: {type: String},
    Bio: {type: String},
    Batch: {type: String},
    Department: {type: String},
})

module.exports = mongoose.model("users",userModel);