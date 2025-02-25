const express=require('express');
const mdb=require("mongoose");
const dotenv=require("dotenv");
const bcrypt = require("bcrypt");
const signup_schema = require('./models/signSchema');

const app=express();
app.use(express.json());
const port=process.env.PORT || 3000;
dotenv.config();

console.log(process.env.MONGODB_URL);

mdb.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("Connected to MongoDB");
}).catch(err=>{
    console.log("Error connecting to MongoDB",err);
});

app.post("/signup",async (req,res)=>{
    try{
        const {name,email,password}=req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newSignup=new signup_schema({
            name,
            email,
            password:hashedPassword
        });
        newSignup.save();
        console.log("name,email,password",name,email,password);
        res.send({msg:"Signup Successfull"});
    }catch(err){
        console.log("Error in signup",err);
        res.status(400).send("Error in signup");
    }
});

app.get('/',(req,res)=>{
    res.sendFile("C:/PRAKASH/SJITMERN/backend/index.html");
}
);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});