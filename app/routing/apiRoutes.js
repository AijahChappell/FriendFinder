const userData = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req,res){
        res.json(userData);
    });

    app.post("/api/friends", function(req, res) {
        const newFriend = req.body;
        const scoreArr = [];
        let count = 0;
        let match = 0;

        for(let i=0; i<userData.length; i++) {
            let difference = 0;
            for(let j=0; j<newFriend.scores.length; j++) {
                difference += (Math.abs(parseInt(userData[i].scores[j])))
            }
            scoreArr.push(difference);
        }
        for(let k=0; k<scoreArr.length; k++) {
            if(scoreArr[k] <= scoreArr[match]){
                match=k;
            }
        }

        let newBestFriend=userData[match];
        res.json(newBestFriend);
        userData.push(req.body);
    })

}