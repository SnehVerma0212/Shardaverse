const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const careerModel = new Schema({
    user: { type: ObjectId, ref: "users", required: true },
    experiences: { type: [ObjectId], ref: "experiences" },
    summary: { type: String }     
})

module.exports = mongoose.model("careers",careerModel);