const router = require("express").Router();
const Service = require("../models/Service");

router.post("/book", async (req, res) => {
  const service = new Service(req.body);
  await service.save();
  res.json({ msg: "Service Booked Successfully" });
});

router.get("/all", async (req, res) => {
  const services = await Service.find();
  res.json(services);
});

module.exports = router;
