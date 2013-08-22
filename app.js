var Frex = require('frex.js');

var app = Frex();

app.configure(function() {
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(Frex.cookieParser());
	app.use(Frex.cookieSession({
		key: 'stemforge',
		secret: 'STEMFORGESNOIEW1231298nLakjsdLOIy128947KJDSA'
	}));
	app.use(app.router);
	app.use(Frex.static(__dirname + '/public'));
});

app.listen(8000, function() {
	console.log('website is ready.');
});
