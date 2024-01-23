
const express = require('express')
const path=require('path')
const app = express()
const port = 3000


//app.use()

app.get('/', (req, res) => {
  res.send('Hello World!sssssdssssss')
})
app.get('/about',(req, res)=>{
    res.send("about page");
})
app.get('/html',(req,res)=>{
    res.sendFile(path.join(__dirname,'htmltag.html'))
})
app.get('/json',(req, res)=>{
    res.json({"name": 88})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})