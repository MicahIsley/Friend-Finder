var friends = require("../data/friends");

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friends);
	});

	app.post("/api/friends", function(req, res) {
		friends.push(req.body);
		res.json(true);
		var totalDiff = 0;
		for(i=0; i<10; i++) {
			var newest = friends[1].scores[i];
			var potentialFriend = friends[0].scores[i]
			var difference = parseInt((Math.abs(newest -= potentialFriend)));
			totalDiff = totalDiff + difference;
			}	
	});

};
