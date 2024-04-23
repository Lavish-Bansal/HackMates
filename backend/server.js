
const express = require("express")
const mongoose = require("mongoose")
const app = express()
// const bcrypt = require("bcrypt")
const db_config = require("./configs/db.config")
const server_config = require("./configs/server.config")

const authRouter = require("./routes/auth.route")

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const cors = require('cors')

app.use(cors())

app.use(express.json())

//connecting with MongoDB

mongoose.connect(db_config.DB_URL)
.then( () => {
    console.log("connection successful")
})
.catch( (err) => {
    console.log(err);
})

//stitching route to the server

app.use('/auth', authRouter);

// Starting the server

app.listen(8888, () => {
    console.log("Server Started at port number : ", server_config.PORT)
})

