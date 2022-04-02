const user = require("../models/user_model");

require("dotenv").config();

const jwt = require("jsonwebtoken");
// const res = require("express/lib/response");

const newToken = (user) => {
  return jwt.sign({ user }, "process.env.jwt_sec_key");
};

const register = async (req, res) => {
  try {
    let user_data = await user.find({ email: req.body.email }).lean().exec();
    console.log(user_data);

    if (user_data.length !== 0) {
      return res
        .status(400)
        .send({ message: "account associated with this email already exist" });
    }

    user_data = await user.create(req.body);

    const token = newToken(user_data);

    res.send({ user_data, token });
  } catch (e) {
    res.status(500).send(e.message);
  }
};

const login = async (req, res) => {
  try {
    const user_data = await user.findOne({ email: req.body.email });

    console.log("from mongo", user_data);

    if (!user_data) {
      return res
        .status(400)
        .send({ message: "please check your email or password" });
    }

    const match = user_data.checkPassword(req.body.password);

    if (!match) {
      return res
        .status(400)
        .send({ message: "please check your email or password" });
    }

    const token = newToken(user_data);

    res.send({ user_data, token });
  } catch (e) {
    res.status(400).send({ status: 400, err: e.message });
  }
};

module.exports = { register, login };
