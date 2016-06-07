var request = require('request');
var cheerio = require('cheerio');

module.exports = function(keyword,team_id,callback){
	var regstr = null;//gm; // parse javascript.
	request("http://share.dmhy.org/topics/list?keyword="+encodeURI(keyword)+"&sort_id=0&team_id="+team_id+"&order=date-desc",function(err,res,body){
		if(!err && res.statusCode == 200){
			$ = cheerio.load(body);
			var titles = $("tbody:nth-child(2) tr");
			var result = [];
			for(i=0;i<titles.length;i++) {
				var inside = cheerio.load($(titles[i]).html());
				var title = inside("a:nth-child(2)").text();

				var href = inside(".download-arrow").attr("href");

				var object = {
					title : title.replace(/[\n\t\r]/g,""),
					magnet : href
				}

				result.push(object); 
			}
			callback(result);
		}
	});
}