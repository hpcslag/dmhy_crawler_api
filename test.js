var result = require("./Parser/GetListByNameAndTeam.js");

/*
	@args
	name @string,
	team_id @int
*/
result('學戰',303,function(weekly){
	console.log(weekly[0].title)
	console.log(weekly[0].magnet)
});
