var weeklyList = require("../Parser/GetSeasonWeeklyList.js");


new weeklyList(function(weekly){
	console.log("Monday:")
	var mondayList = weekly.monday;
	for(var i = 0;i<mondayList.length;i++){ // get sunday list
		var name = mondayList[i][1];
		console.log(name);
	}
	console.log("-------------------------------");
});



new weeklyList(function(weekly){
	console.log("Tuesday:")
	var tuesdayList = weekly.tuesday;
	for(var i = 0;i<tuesdayList.length;i++){ // get sunday list
		var name = tuesdayList[i][1];
		console.log(name);
	}
	console.log("-------------------------------");
});

new weeklyList(function(weekly){
	console.log("Wednesday:")
	var wednesdayList = weekly.wednesday;
	for(var i = 0;i<wednesdayList.length;i++){ // get sunday list
		var name = wednesdayList[i][1];
		console.log(name);
	}
	console.log("-------------------------------");
});

new weeklyList(function(weekly){
	console.log("Thursday:")
	var thursdayList = weekly.thursday;
	for(var i = 0;i<thursdayList.length;i++){ // get sunday list
		var name = thursdayList[i][1];
		console.log(name);
	}
	console.log("-------------------------------");
});

new weeklyList(function(weekly){
	console.log("Friday:")
	var fridayList = weekly.friday;
	for(var i = 0;i<fridayList.length;i++){ // get sunday list
		var name = fridayList[i][1];
		console.log(name);
	}
	console.log("-------------------------------");
});

new weeklyList(function(weekly){
	console.log("Saturday:")
	var saturdayList = weekly.saturday;
	for(var i = 0;i<saturdayList.length;i++){ // get sunday list
		var name = saturdayList[i][1];
		console.log(name);
	}
	console.log("-------------------------------");
});
