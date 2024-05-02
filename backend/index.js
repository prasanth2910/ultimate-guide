// const exp = require('constants');
const express = require('express')
const { Signup, User, Blog, connectToDatabase } = require('./database');
const app = express()
const port = 3000
const morgan= require('morgan');
connectToDatabase();
const path = require('path');
const signUpPath = path.join(__dirname, '../Pages-inside/SignUp.html');
app.use(express.static(path.join(__dirname, '../public')));
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../index.html'));
})
app.get('/signup', (req, res) => {
  res.sendFile(signUpPath);
});

app.post('/signup',async(req,res)=>{
    const body=req.body;
   console.log(req.body);
   const Response = await User.create({
    Username: body.username,
    password: body.password,
    email: body.email,
   })
   console.log(Response)
   res.sendFile(path.join(__dirname,'../Pages-inside/blog.html'));

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})