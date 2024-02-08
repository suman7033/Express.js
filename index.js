const express=require('express');
const path=require('path');
const bodyParser=require("body-parser")

const app=express();
const port=3000;

app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))

const data=[];

app.get("/",(req,res)=>{
     res.send(`<form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="post">
   Type: <input id="message" name="message" type="text" placeHolder="message">
   <input type="" name="username" id="username"><br/><br/>
   <button type="submit">Send</button>
</form>`)
})
app.post("/",(req,res)=>{
   data.push(`{${req.body.username}:${req.body.message}}`)
   console.log(data);
   console.log(`${req.body.username}:${req.body.message}`)
   res.redirect('/')
})

app.get("/login",(req,res)=>{
   res.sendFile(path.join(__dirname,"/login.html"))
})

app.listen(port, ()=>{
  console.log(`server is working on port: ${port}`)
})