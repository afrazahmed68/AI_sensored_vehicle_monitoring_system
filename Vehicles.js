const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  owner: String,
  model: String,
  regNo: String,

  engineOil: Number,
  tyreFront: Number,
  tyreRear: Number,
  brakePad: Number,
  battery: String,
  coolant: String,

  speed: Number,
  rpm: Number,
  fuel: Number,

  latitude: Number,
  longitude: Number
});

module.exports = mongoose.model("Vehicle", vehicleSchema);
