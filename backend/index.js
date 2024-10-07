require('dotenv').config();
const express = require("express");

const dbConnect = require("./conf/db/dbConfig")

const app = express();
let PORT =process.env.PORT || 5000

app.use(express.json());

app.use("/api",userRouter)

// testing url
app.use("/",(req,res)=>{
    // console.log(res)
    res.send("jay shree ram ")
})


// connect to mongoDB
dbConnect();

app.listen(PORT,()=>{
    console.log(`app is listiening on ${PORT}`)
})


