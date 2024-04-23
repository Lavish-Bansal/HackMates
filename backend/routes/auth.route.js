// POST localhost:8888/hackathon/api/v1/auth/signup

const express = require("express");
const router = express.Router();
const {signIn, signUp} = require("../controllers/auth.controller");

router.route("/hackathon/api/v1/auth/signup").post(signUp);
router.route("/hackathon/api/v1/auth/signin").post(signIn);

module.exports = router;
