"use strict";

var fs = require('fs');
var path = require('path');

var filebasePath = path.join(__dirname, '..', 'filebase');

var AppDesigner = function() {
	var self = this;
};

AppDesigner.prototype.getPackages = function(username, projectName, opts, callback) {
	var self = this;

	var projectConfigPath = path.join(filebasePath, username, projectName, 'project.json');
	fs.readFile(projectConfigPath, 'utf8', function(err, data) {
		var settings = JSON.parse(data);

		callback(null, settings.packages);
	});
};

AppDesigner.prototype.getSettings = function(username, projectName, opts, callback) {
	var self = this;

	var projectConfigPath = path.join(filebasePath, username, projectName, 'project.json');
	fs.readFile(projectConfigPath, 'utf8', function(err, data) {
		var settings = JSON.parse(data);

		callback(null, settings.settings);
	});
};

module.exports = {
	type: 'engine',
	engine_name: 'AppDesigner',
	prototype: AppDesigner
};
