const mongoose = require("mongoose");

const campaigns = new mongoose.Schema(
  {
    title: { type: String },
    contacts: [{ type: String }],
    fromdata: { type: String },
    sub: { type: String },
    html: { type: String },
    status: { type: String },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = mongoose.model("campaings", campaigns);
