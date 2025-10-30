const User = require("./../models/user.model");
const { generateToken } = require("./../utils/auth.util");
const { hashPassword , comparePassword } = require("./../utils/hash.util");

const signup = async (req,res) => {
    try{
        const { name, email, password } = req.body;

        if(!name) return res.status(401).json({msg:"Name is required !"});
        if(!email) return res.status(401).json({msg:"Email is required !"});
        if(!password) return res.status(401).json({msg:"Password is required !"});

        const userExists = await User.findOne({email});

        if(userExists){
            return res.status(201).json({
                msg: "Email already exists. Please try to signup with a different email or login with the same email."
            })
        }

        const hashedPassword = await hashPassword(password);

        const newUser = new User({
            name: name,
            password: hashedPassword,
            email: email
        })

        await newUser.save();


        const token = generateToken({ id: newUser._id});        

        return res.status(200).json({
            msg: "New user added successfully.",
            token: token,
            UserInfo: newUser
        });
    }catch(err){
        console.log(err.message);
        return res.status(500).json({
            msg: "Interval server error."
        })
    }
}

const login = async (req,res) => {
    try{
        const { email, password } = req.body;

        if(!email) return res.status(401).json({
        msg: "Email id is missing."
        })
        if(!password) return res.status(401).json({
        msg: "Password is missing."
        })

        const userExists = await User.findOne({email}).select("+password");

        if(!userExists) return res.status(401).json({
        msg: "Email id does not exist. Please login with a registered email id."
        })

        console.log("Password from request:", password);
        console.log("Hashed password from DB:", userExists.password);

        const isMatch = await comparePassword(password,userExists.password);

        if(!isMatch) return res.status(401).json({
        msg: "Incorrect password."
        })

        const token = await generateToken({id: userExists._id});

        return res.status(200).json({
        msg: "Login successful !",
        token: token
        })
    }catch(err){
        console.log(err.message);
        return res.status(500).json({
            msg: "Internal server error."
        })
    }
}


module.exports = {
    signup,
    login
}