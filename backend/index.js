require('dotenv').config();
const express = require("express");

const dbConnect = require("./conf/db/dbConfig")

const app = express();
let PORT =process.env.PORT || 5000

app.use("/",(req,res)=>{
    // console.log(res)
    res.send("jay shree ram ")
})

// const connectToDatabase = async () => {
//     try {
//         await dbConnect();
//         console.log("MongoDB Connected");
//     } catch (err) {
//         console.log("MongoDB Connection Error:", err);
//     }
// };

// connectToDatabase();

// connect to DB
dbConnect();

app.listen(PORT,()=>{
    console.log(`app is listiening on ${PORT}`)
})