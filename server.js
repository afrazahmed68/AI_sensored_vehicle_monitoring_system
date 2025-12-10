const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const vehicleRoutes = require("./routes/vehicle");
const serviceRoutes = require("./routes/service");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("✅ MongoDB Connected"))
.catch(err => console.log(err));

app.use("/api/auth", authRoutes);
app.use("/api/vehicle", vehicleRoutes);
app.use("/api/service", serviceRoutes);

app.listen(process.env.PORT, () => {
  console.log("✅ Server running on port " + process.env.PORT);
});
