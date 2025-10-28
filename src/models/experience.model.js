const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const experienceModel = new Schema({
    company: { type: String, required: true },
    role: { type: String, required: true },
    description: { type: String },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
})

module.exports = mongoose.model("experiences",experienceModel);