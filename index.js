const express =require("express");
const app =express();
const mongoose= require("mongoose");
const path = require("path");
const Chat  = require("./model/chat.js")




app.set("views", path.join(__dirname,"views"));
app.set("view engine","ejs");
//public file ko link karne ke liye 
app.use(express.static(path.join(__dirname,"public")));
//pass the data 
app.use(express.urlencoded({extended:true}));
main().then(()=>{
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatapp');

 
}

//insert the chat to main index using post method
app.post("/chats",(req,res)=>{
  let {from,to,msg}=req.body  //from data submit ko nikalna padega to insert into index page
  let newchat=new Chat({
    from:from,
    msg:msg,
    to:to,
    created_at:new Date(),
  });
 
  newchat
  .save()
  .then((res)=>{
    
  console.log("chat was saved");
  })
  .catch((err)=>{   //error check 
    console.log(err);
  })  

  res.redirect("/chats");
})

//creat new chat
app.get("/chat/new",(req,res)=>{
  res.render("newchat.ejs");

})


//Index route
app.get("/chats", async (req, res) => {
  let chats = await Chat.find(); // plural for clarity
  console.log(chats);
   res.render("index.ejs",{chats}); // pass chats not Chat
 });


// pass chat value 

let chat1 = new Chat({
    from:"Harshit",
    to:"yuvraj",
    msg:"send me previous question paper",
    created_at: new Date(),
    
});
  //save the chat into database

  chat1.save().then((res)=>{
    console.log(res);
  })
  .catch((err)=>{
    console.log(err);
  })




app.get("/",(req,res)=> {
    res.send("server working ");
})

app.listen(8080,()=>{
    console.log("server listen port 8080");
});
