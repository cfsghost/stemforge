"use strict";

var apps = [
	{ name: 'NAS', desc: 'Network attachment storage' },
	{ name: 'Fax', desc: 'Paperless fax manchine' }
];

var Application = function() {
	var self = this;
};

Application.prototype.getApps = function(opts, callback) {
	var self = this;

	callback(null, apps);
};

module.exports = {
	type: 'engine',
	engine_name: 'Application',
	prototype: Application
};
