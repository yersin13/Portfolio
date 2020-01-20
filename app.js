
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require ("ejs");
const mongoose = require("mongoose");

const app = express();




app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    
   res.render("index"); 
});

app.get("/cv-yersin", function(req, res){
    res.render("cv-yersin");
});
app.post("/cv-yersin", function(req, res){
   res.render("cv-yersin"); 
});


app.get("/about-me", function(req, res){
   res.render("about-me"); 
});
app.post("/about-me", function(req, res){
   res.render("about-me"); 
});


app.get("/projects", function(req, res){
    res.render("projects");
});

app.post("/projects", function(req, res){
   res.render("projects"); 
});



let port = process.env.PORT;
if (port == null || port == ""){
    port = 3000;
}

app.listen(port, function() {
   console.log("server started on port 3000!"); 
});