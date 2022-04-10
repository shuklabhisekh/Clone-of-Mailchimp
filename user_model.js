const mongoose = require("mongoose");

const bcrypt= require("bcryptjs");

const user_schema = new mongoose.Schema({

   first_name:{type:String},

   last_name:{type:String},
    
   email:{type:String, required:true},

   password:{type:String, required:true},

   website:{type:String},
},{
    versionKey:false,
    timestamps:true,
});





user_schema.pre("save", function(next){
    if(!this.isModified("password"))return next();


    var hash = bcrypt.hashSync(this.password,8)
    this.password = hash;
    return next();

});

user_schema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };

const user = mongoose.model("user",user_schema)
module.exports = user;