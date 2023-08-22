const express= require("express")
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const _= require("lodash")


const app= express();
app.set("view engine","ejs")

app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

app.get("/",(req,res)=>{
    res.render(__dirname+"/views/index.ejs")
})

app.listen(3000,()=>{
    console.log("server started at port 3000")
})