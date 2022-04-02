const express = require("express");
const nodemailer = require("nodemailer");
const Subscriber = require("../models/subscriber_model");

const router = express.Router();

const { google } = require("googleapis");

const config = require("../config/config");

const OAuth2 = google.auth.OAuth2;

const OAuth2_clint = new OAuth2(config.clintId, config.clintSecret);
OAuth2_clint.setCredentials({ refresh_token: config.refreshToken });

router.post("/sendverification", async (req, res) => {
  console.log("the data is from send server", req.body);
  function myhtml(name) {
    return `
    <div style="width: 80%; margin: auto; background-color: #efeeea">
      <div style="background-color: #ffe01b; height: 220px; margin: auto">
        <div style="width: 150px; margin: auto">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrWxTOn47t_x5l7OFkh0SOkC9y4NpG3ZaaOcvOwL0bMG0RBjh8Cf5tTsPGYntl1aO2QXo&usqp=CAU"
            alt=""
            style="height: 150px"
          />
        </div>
      </div>
      <div
        style="
          width: 50%;
          margin: auto;
          position: relative;
          top: -100px;
          background-color: white;
          text-align: center;
          padding: 50px;
        "
      >
        <p style="font-family: Lora; font-size: 30px; font-weight: 400">
          We're glad you're here,
        </p>
        <p style="font-family: Lora; font-size: 30px; font-weight: 400">
          ${name}
        </p>
        <a href="http://localhost:3000/login" traget="_blank">
          <button
            style="
              background-color: #007c89;
              border-radius: 0px;
              border: none;
              padding: 15px 22px 15px 22px;
              color: white;
              margin-top: 20px;
              width: 200px;
              font-size: 18px;
              font-weight: 400;
              cursor: pointer;
            "
          >
            Activate Account
          </button>
        </a>
        <p
          style="
            font-family: Lora;
            font-size: 15px;
            margin-top: 100px;
            color: rgb(77, 71, 71);
          "
        >
          (Just confirming you're you.)
        </p>
        <br />
        <hr style="color: rgb(77, 71, 71)" />
        <p style="color: darkgrey">
          © 2001-2022 Mailchimp®, All Rights Reserved.
        </p>
        <p style="color: darkgrey">
          675 Ponce De Leon Ave NE • Suite 5000 • Atlanta, GA 30308 USA
        </p>
        <p style="color: darkcyan">
          Contact Us • Terms of Use • Privacy Policy
        </p>
      </div>
    </div>
    `;
  }

  try {
    const accessToken = OAuth2_clint.getAccessToken();

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: config.user,
        clientId: config.clintId,
        clientSecret: config.clintSecret,
        refreshToken: config.refreshToken,
        accessToken: accessToken,
      },
    });

    var mailOptions = {
      from: `Team Mailchimp <${config.user}>`,
      to: req.body.email,
      subject: "email verifaction",
      html: myhtml(req.body.username),

      // attachments: [
      //   {
      //     filename: 'report.pdf',
      //     path: __dirname+'/../../local-files/report.pdf'
      //   }
      // ]
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        return res.status(201).json({
          status: 201,
          msg: "something went wrong please try again",
          err: err,
        });
      } else {
        return res.status(200).json({
          status: 200,
          msg: "Mail was Sent Please Check Your Mail",
        });
      }
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post("/sendcampain/:id", async (req, res) => {
  function myhtml(name) {
    return `
      <h3> hey buddy..! ${name} Welcome to mailchimp</h3>
      `;
  }

  try {
    const subscriber_data = await Subscriber.find({ user_id: req.params.id })
      .populate("user_id")
      .lean()
      .exec();
    let all_subscribers = subscriber_data.map((el) => el.email);

    all_subscribers = all_subscribers.join(", ");

    const accessToken = OAuth2_clint.getAccessToken();

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: config.user,
        clientId: config.clintId,
        clientSecret: config.clintSecret,
        refreshToken: config.refreshToken,
        accessToken: accessToken,
      },
    });

    var mailOptions = {
      from: `Team Mailchimp <${config.user}>`,
      to: all_subscribers,
      subject: req.body.subject,
      html: myhtml(req.body.first_name),

      // attachments: [
      //   {
      //     filename: 'report.pdf',
      //     path: __dirname+'/../../local-files/report.pdf'
      //   }
      // ]
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        return res.status(201).json({
          status: 201,
          msg: "something went wrong please try again",
          err: err,
        });
      } else {
        return res.status(200).json({
          status: 200,
          msg: "Mail was Sent Please Check Your Mail",
        });
      }
    });
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
