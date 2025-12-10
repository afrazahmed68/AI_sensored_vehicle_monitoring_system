const router = require("express").Router();
const Vehicle = require("../models/Vehicle");

router.get("/live", async (req, res) => {
  const vehicle = await Vehicle.findOne();
  res.json(vehicle);
});

// SIMULATE LIVE SENSOR UPDATE
router.post("/update", async (req, res) => {
  await Vehicle.findOneAndUpdate({}, req.body);
  res.json({ msg: "Vehicle Updated" });
});

module.exports = router;
