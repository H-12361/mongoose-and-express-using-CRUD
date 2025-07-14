const mongoose= require("mongoose");

//  creating  schema

const chatSchema =new mongoose.Schema({

    from:{
        type:String,
        required:true
    },
    to:{
        type  :String,
        required:true
    },
    msg:{
        type :String,
        maxLength:50
    },
    created_at:{
        type:Date
        
    }

});

// creating mongoose.model
 const Chat =  mongoose.model("Chat",chatSchema);

 //export the model 
  module.exports= Chat;
