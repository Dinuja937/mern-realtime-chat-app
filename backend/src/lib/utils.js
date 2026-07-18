import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {

    const secret = process.env.JWT_SECRET || "dev_secret_key";
    const token = jwt.sign({ userId }, secret, {
        expiresIn: "7d",
    });
    res.cookie("jwt",token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // MS
        httpOnly: true, //prevent XSS attacks cross-site scripting attaks
        sameSite: "strict", //CSRF atacks cross-site request forgery attacks
        secure: process.env.NODE_ENV !=="development"
    })

    return token; 
};

