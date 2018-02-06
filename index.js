var request = require('request');
	var argv = require('yargs').argv;
	

	var apiKey = 'a92bfe0ec8d8bae3dcb255fc03a43667';
	var city = argv.c || "Thanh pho Ho Chi Minh";
	var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
	

	request(url, function (err, response, body) {
	  if(err){
	    console.log('error:', error);
	  } else {
	    var weather = JSON.parse(body)
	    var message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
	    console.log(message);
	  }
	});