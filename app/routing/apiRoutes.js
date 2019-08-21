const userData = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req,res){
        res.json(userData);
    });

    app.post("/api/friends", function(req, res) {
        const newFriend = req.body;
        const scoreArr = [];
        let 
    })

}