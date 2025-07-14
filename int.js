const mongoose= require("mongoose");
 const Chat  = require("./model/chat.js")

 main().then(()=>{
     console.log("connection successful");
 })
 .catch(err => console.log(err));
 
 async function main() {
   await mongoose.connect('mongodb://127.0.0.1:27017/whatapp');
 
  
 }
 

 let  allChat=[
    {
    from:"janki",
    to:"human",
    msg:"Hello my freind",
    created_at:new Date(),
    },

    {
        from:"Ayush",
        to:" Ayushi",
        msg:" Hi dear how are you ",
        created_at:new Date()
    },
    
    {
        from:"kushi",
        to:"  Harsh",
        msg:" Hi today is DSA interview",
        created_at:new Date()
    },
    
    {
        from:"Komal",
        to:" Ashish",
        msg:" namste",
        created_at:new Date()
    },
    
    {
        from:"Harshit ",
        to:" Vrinda",
        msg:" kal jana hai ghar",
        created_at:new Date()
    }



];
  
Chat.insertMany(allChat);