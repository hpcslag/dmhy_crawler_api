var request = require('request');

var regstr = /<script\b[^>]*>([\s\S]*?)<\/script>/gm; // parse javascript.

request("http://share.dmhy.org/cms/page/name/programme.html",function(err,res,body){
	if(!err && res.statusCode == 200){

		var javascript_regexp_array = [];

		var match;
		while(match = regstr.exec(body)){
			javascript_regexp_array.push(match[1]);
		}

		eval(javascript_regexp_array[5]); //active javascript in html.

		for(var i = 0;i<sunarray.length;i++){ // get sunday list
			console.log(sunarray[i][1]);
		}
	}
});
