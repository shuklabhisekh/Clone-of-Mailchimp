const express = require("express");

var fs = require("fs");

const router = express.Router();
const Subscriber = require("../models/subscriber_model");

router.get("/:id", async (req, res) => {
  try {
    const subscriber_data = await Subscriber.find({ user_id: req.params.id })
      .populate("user_id")
      .lean()
      .exec();

    res.status(200).send(subscriber_data);
  } catch (e) {
    res.send(e.message);
  }
});


//for single subscriber 
// id = user id from redux store

router.post("/:id", async (req, res) => {
  try {
    req.body.user_id = req.params.id;
    const subscriber_data = await Subscriber.create(req.body);

    return res.send(subscriber_data);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

///post multiple//////////////////////////////////////////////////////////////////////////////////////////////

router.post("/sbuscriberfile/:id", async (req, res) => {
  try {
    var mydata = fs.readFileSync("mydata.json");

    mydata = JSON.parse(mydata);

    mydata.map((el) => (el.user_id = req.params.id));


    const subscriber_data = await Subscriber.insertMany(mydata);

    return res.send(subscriber_data);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});



router.post("/many/:id", async (req, res) => {
  try {
    const data = req.body;
     data.map((el) => (el.user_id = req.params.id));

    const subscriber_data = await Subscriber.insertMany(data);

    return res.send(subscriber_data);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// to edit info of subscriber


router.patch("/:sub_id", async (req, res) => {
  try {
    const subscriber_data = await Subscriber.findByIdAndUpdate(
      req.params.sub_id,
      req.body,
      {
        new: true,
      }
    )
      .lean()
      .exec();
    res.status(201).send(subscriber_data);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});


/// id =user id

router.delete("/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let subscriber_id = req.body.subscriber_id;
    let item = await Subscriber.findOne({ user_id: id, id: subscriber_id });

    await Subscriber.findByIdAndDelete(item._id);

    res.end();
  } catch (err) {
    res.send("error while deleting Subscriber", err.message);
  }
});

module.exports = router;
