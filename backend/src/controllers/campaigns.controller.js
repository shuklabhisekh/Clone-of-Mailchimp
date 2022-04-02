const express = require("express");

const router = express.Router();
const Campaings = require("../models/campaigns.model");

router.post("/:id", async (req, res) => {
  try {
    req.body.user_id = req.params.id;

    const campaings = await Campaings.create(req.body);
    console.log(campaings);
    return res.send(campaings);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const campaigns = await Campaings.find({ user_id: req.params.id })
      .populate("user_id")
      .lean()
      .exec();
    console.log(campaigns);
    res.status(200).send(campaigns);
  } catch (e) {
    res.send(e.message);
  }
});

module.exports = router;
