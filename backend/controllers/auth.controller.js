// Logic to register a user

const user_model = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = require("../configs/auth.config");

const signUp = async (req, res) => {
    // read request body
    const request_body = req.body;
    console.log(request_body);

    //insert the data in the users collection in MongoDB
    const token = jwt.sign({ email: request_body.email }, secret.secret);

    const userObj = {
        name: request_body.name,
        email: request_body.email,
        password: bcrypt.hashSync(request_body.password, 8),
    };

    try {
        const user_created = await user_model.create(userObj);

        //returning this user
        const res_obj = {
            accessToken: token,
            name: user_created.name,
            email: user_created.email,
            createdAt: user_created.createdAt,
            updatedAt: user_created.updatedAt,
        };
        res.status(201).send(res_obj);
    } catch (err) {
        console.log("Error while registering the user", err);
        res.status(500).send({
            message: "some error occured while registering the user",
        });
    }
};

const signIn = async (req, res) => {
    // check if email is present or not
    const user = await user_model.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send({
            message: "No user with email is present, Sign Up first",
        });
    }

    console.log(user);

    //Is Password Correct?
    const isPasswordValid = bcrypt.compareSync(req.body.password, user.password);

    if (!isPasswordValid) {
        return res.status(401).send({
            message: "Wrong password passed",
        });
    }

    // using JWT we will create the access token
    const token = jwt.sign({ email: user.email }, secret.secret);

    res.status(200).send({
        name: user.name,
        email: user.email,
        accessToken: token,
    });
};

module.exports = {
    signIn,
    signUp,
};
