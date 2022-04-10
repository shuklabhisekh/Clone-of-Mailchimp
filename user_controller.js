const express= require("express");

const bcrypt= require("bcryptjs");

const router = express.Router();
const User = require("../models/user_model")

router.get("", async (req,res)=>{

    try{

        const user_data= await User.find().lean().exec()

        res.status(200).send(user_data)

    }catch(e){

        res.send(e.message)

    }

});


router.patch("/:id", async (req, res) => {

    try {
       
      if(req.body.password){

        var hash = bcrypt.hashSync(req.body.password,8)
        req.body.password = hash;

      }

     
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
        .lean()
        .exec();
      res.status(201).send(user);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });




module.exports=router;