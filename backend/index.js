const express=require('express');
const mdb=require("mongoose");
const dotenv=require("dotenv");
const bcrypt = require("bcrypt");
const signup_schema = require('./models/signSchema');
const cors=require("cors");


const app=express();
app.use(express.json());
const port=process.env.PORT || 3000;
dotenv.config();
app.use(cors({
    origin: "http://localhost:5173", // Allow requests from frontend
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    credentials: true // Allow cookies if needed
  }));
  

console.log(process.env.MONGODB_URL);

mdb.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("Connected to MongoDB");
}).catch(err=>{
    console.log("Error connecting to MongoDB",err);
});

app.post("/signup", async (req, res) => {
    try {
        const { firstName, lastName, email, password, phoneNumber } = req.body;

        const existingUser = await signup_schema.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "Email already registered" });
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new signup_schema({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            phoneNumber
        });
        await newUser.save();

        console.log("User registered:", firstName, lastName, email);
        res.status(201).json({ msg: "Signup Successful" });
    } catch (err) {
        console.error("Error in signup", err);
        res.status(500).json({ msg: "Internal Server Error" });
    }
});



app.post("/login",async (req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await signup_schema.findOne({email});
        if(!user){
            return res.status(404).json({message:"Enter valid User"});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid Password"});
        }
        res.status(200).json({message:"Valid user"});
        console.log("Valid")
    }catch(err)
    {
        console.log("Error in login",err);
        res.status(404).json({message:"Error Occurred"});
    }
});

app.get('/',(req,res)=>{
    res.sendFile("C:/PRAKASH/SJITMERN/backend/index.html");
}
);

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});