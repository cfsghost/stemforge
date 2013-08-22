module.exports = {
	'/': function(req, res) {
		res.render('index');
	},
	'/appdesigner': function(req, res) {
		res.render('appdesigner');
	}
};
