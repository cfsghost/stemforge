"use strict";

var fs = require('fs');
var path = require('path');

var AppDesigner = function() {
	var self = this;
};

AppDesigner.prototype.getPackages = function(username, projectName, opts, callback) {
	var self = this;

	var projectConfigPath = path.join(__dirname, '..', 'filebase', username, projectName, 'project.json');
	fs.readFile(projectConfigPath, 'utf8', function(err, data) {
		var settings = JSON.parse(data);

		callback(null, settings.packages);
	});
};

module.exports = {
	type: 'engine',
	engine_name: 'AppDesigner',
	prototype: AppDesigner
};
