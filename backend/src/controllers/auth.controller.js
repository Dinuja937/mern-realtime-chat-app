import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../lib/utils.js";

export const signup = async (req,res) => {
    const{fullName,email,password} = req.body;
    try{

        if(!fullName || !email || !password){
            return res.status(400).json({message: "All fields are required"});
        }

        if(password.length<6){
            return res.status(400).json({message: "Password must be at least 6 characters"});
        }

        const user=await User.findOne({email})

        if(user) return res.status(400).json({message: "Email already exists"});

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username: fullName,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        try {
            generateToken(newUser._id, res);
        } catch (tokenErr) {
            console.error("Token generation failed:", tokenErr.message);
        }

        if(newUser){
            res.status(201).json({
                _id:newUser._id,
                fullName:newUser.username,
                email:newUser.email,
                profilePic:newUser.profilePic,  
            });   
        }else{
            res.status(400).json({message: "Invalid user data"});
        }

    }catch(error){
        console.error("Error in signup controller", error.message);
        res.status(500).json({message: "Internal Server Error"});
    }    
};

export const login = (req,res) => {
    res.send("login router");
};

export const logout = (req,res) => {
    res.send("logout router");
};