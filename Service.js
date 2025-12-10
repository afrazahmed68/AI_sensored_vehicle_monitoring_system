const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  user: String,
  date: String,
  time: String,
  type: String,
  location: String,
  status: { type: String, default: "Scheduled" }
});

module.exports = mongoose.model("Service", serviceSchema);
