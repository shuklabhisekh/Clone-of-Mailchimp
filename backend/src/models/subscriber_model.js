const mongoose = require("mongoose");



const subscriber_schema = new mongoose.Schema({

    first_name:{type:String,required:true },

    last_name:{type:String, required:true},
    
    email:{type:String, required:true},

    address:{type:String},

   phone_number:{type:Number},

   birth_day:{type:Date},

   tag:{type:String ,default:""},

   user_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
   }


   
},{
    versionKey:false,
    timestamps:true,
});


const Subscriber = mongoose.model("subscriber",subscriber_schema)
module.exports = Subscriber;