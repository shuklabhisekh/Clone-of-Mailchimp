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
    <div style="width: 50%; margin: auto;text-align: center; background-color: antiquewhite;padding:  50px 20px  50px 20px; border-radius: 5px">
        <h3>Account verification</h3>
        <p>hey ${name} , to ensure account security we'll need to verify your identity.</p>
        <a href="http://localhost:3000/login"><button style="background-color: burlywood; border-radius: 5px; border: none; padding:  5px 15px  5px 15px;">Verify</button></a>
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
