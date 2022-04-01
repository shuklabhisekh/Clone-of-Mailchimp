const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const CLIENT_ID =
  "165275498088-upjj8npss69klo4pu5hnst5so19la7bo.apps.googleusercontent.com";
const CLEINT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04JHqdKknpixmCgYIARAAGAQSNwF-L9Ir5RoUcVV0LQuyeveREp0n01lLJl6ye6je1ppM4n587Q4WqeGZm_bYbYpXX7zKek-Lg8A";

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLEINT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const sendMails = async (req, res) => {
  try {
    console.log("geting mail from react", req.body);
    const { contacts, fromdata, sub, prev, html } = req.body.data;

    let listSenders = [];
    JSON.parse(contacts).forEach((el) => {
      listSenders.push(el.email);
    });

    listSenders = listSenders.join(",");

    //SEND MAIL
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "mailchimpclone@gmail.com",
        clientId: CLIENT_ID,
        clientSecret: CLEINT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: `Team Mailchimp mailchimpclone@gmail.com`,
      to: listSenders,
      subject: sub,
      html: JSON.parse(html),
    };

    const result = await transport.sendMail(mailOptions);
    console.log(result);
    if (result) {
      console.log("email sent..");
    } else {
      console.log("email not send..");
    }

    res.send("ok").status(200);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

module.exports = { sendMails };
