const mongoose = require("mongoose");

const connect = async ()=>{
try{

    return  await mongoose.connect("mongodb+srv://AkshayJagtap:Akshay1234@cluster0.vdytl.mongodb.net/mailchimp_DB?retryWrites=true&w=majority")

}catch(err){

    console.log("error form connection :", err.message )
}
    
}


module.exports=connect;