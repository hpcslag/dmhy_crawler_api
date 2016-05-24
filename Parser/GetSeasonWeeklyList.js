/*
['圖片','動畫名','直接搜索連結','字幕組','官方公式']  範例：
___array.push(['http://share.dmhy.org/images/weekly/dragon.gif','龍珠．改','%E9%bE%8D%E7%8f%A0','<a href="/topics/list?keyword=%E9%bE%8D%E7%8f%A0+team_id%3A241">幻櫻</a>','http://abc.com']);
*/

var request = require('request');

module.exports = function(callback){
	var regstr = /<script\b[^>]*>([\s\S]*?)<\/script>/gm; // parse javascript.
	request("http://share.dmhy.org/cms/page/name/programme.html",function(err,res,body){
		if(!err && res.statusCode == 200){

			var javascript_regexp_array = [];

			var match;
			while(match = regstr.exec(body)){
				javascript_regexp_array.push(match[1]);
			}

			eval(javascript_regexp_array[5]); //active javascript in html.
			
			callback({
				sunday : sunarray,
				monday : monarray,
				tuesday : tuearray,
				wednesday : wedarray,
				thursday : thuarray,
				friday : friarray,
				saturday : satarray
			})
		}
	});
}