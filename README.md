# dmhy_crawler_api
### TODO LIST:
 - Get all names in season.
 - Search
 - Get all Session in season by subtitle team name
  - In list has so many titles, and will just show the pattern when neighbors pattern not match. (give user to select what pattern is you want)

# api
### Get Weekly List by day:
```javascript
var weeklyList = require("./GetSeasonWeeklyList.js");

new weeklyList(function(weekly){
	console.log("Monday:")
	var mondayList = weekly.monday;
	for(var i = 0;i<mondayList.length;i++){ // get sunday list
		var name = mondayList[i][1];
		console.log(name);
	}
});
```

### Get Anime List by Team_id and name:
```javascript
result('學戰',303,function(weekly){
	console.log(weekly[0].title)
	console.log(weekly[0].magnet)
});
```

### Get team list by Search anime name:
```
```

### Get anime name search result:
```
```
