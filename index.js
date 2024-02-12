const express=require('express');
const path=require('path');
const bodyParser=require("body-parser")
const fs=require('fs');

const app=express();
const port=3000;

app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))

const data=[];

app.get("/",(req,res)=>{
   fs.readFile('username.txt', (err,data)=>{
      if(err){
         console.log(err)
         data='No chat Exists'
      }
    
   res.send(`${data}<form action="/" onsubmit="document.getElementById('username').value=localStorage.getItem('username')" method="post">
   Type: <input id="message" name="message" type="text" placeHolder="message">
   <input type="hidden" name="username" id="username"><br/><br/>
   <button type="submit">Send</button>
</form>`)
})
});

app.post("/",(req,res)=>{
      console.log(req.body.username);
      console.log(req.body.message);
      fs.writeFile("username.txt", `${req.body.username} : ${req.body.message} &nbsp;`,{flag: 'a'},(err)=>
       err ? console.log(err) : res.redirect("/")
      )
   })


app.get("/login",(req,res)=>{
   res.sendFile(path.join(__dirname,"/login.html"))
})

app.listen(port, ()=>{
  console.log(`server is working on port: ${port}`)
})