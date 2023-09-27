const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");


const app = express();

var corsOption = {
    origin : "http://localhost:8081"
};

app.use(cors(corsOption));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended : true }));

app.use(
    cookieSession({
        name:"bukunmi olarinde",
        keys:["COOKIE_SECRET"],
        httpOnly: true
    })
);


//simple route
app.get("/", (req,res)=> {
    res.json({message: "welcome to buuczzi application"})
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})