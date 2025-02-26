const mongoose = require("mongoose");

const signSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,  // Ensures email is unique in the database
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6 // Minimum password length for security
    },
    phoneNumber: {
        type: String,
        required: true,
        match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"] // Ensures a valid phone number
    }
}, { timestamps: true });  // Automatically adds createdAt and updatedAt fields

const SignupSchema = mongoose.model("Signup", signSchema);
module.exports = SignupSchema;
