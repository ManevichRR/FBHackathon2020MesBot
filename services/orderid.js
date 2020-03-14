
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subSchema = new Schema({
  response: { type: String, required: true },
  payload: { type: String },
  psid: { type: int },
  date: { type: Date, default: Date.now }
});

const Sub = mongoose.model("Sub", subSchema);

module.exports = Sub;