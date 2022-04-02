const express = require("express");
const app = express();

const cors = require("cors");

const connect = require("./config/db");
app.use(express.json());
app.use(cors());

const { sendMails } = require("./controllers/sendingMail.controller");

app.post("/sendmail", sendMails);

const user_controller = require("./controllers/user_controller");
const subscriber_controller = require("./controllers/subscriber_controller");
const mailcontroller = require("./controllers/Send_mail");
const campaigns_controller = require("./controllers/campaigns.controller");
const { register, login } = require("./controllers/auth_controller");

let port = process.env.PORT || 3001;
app.use(cors());

app.use("/user", user_controller);

app.use("/subscriber", subscriber_controller);

app.use("/mails", mailcontroller);

app.use("/campaigns", campaigns_controller);

app.post("/register", register);

app.post("/login", login);

app.get("/test", (req, res) => {
  res.send("testing the route.....success");
});

app.get("/check", (req, res) => {
  res.send("checking the routs.........");
});

app.listen(3001, async () => {
  try {
    await connect();
    console.log("listning to port 2349");
  } catch (err) {
    console.log(err);
  }
});
