const path = require("path");
const express=require("express");

module.exports = function(app) {

    app.get("/", function(req,res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
    app.get("/survey", function(req,res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    app.use(express.static(path.join(__dirname,"/../public"))
    );

// app.use(function(req, res){
//     res.sendFile(path.join(__dirname, "/../public/home.html"));
// });

};