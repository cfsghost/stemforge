"use strict";

var apps = [
	{ name: 'NAS', desc: 'Network attachment storage' },
	{ name: 'Fax', desc: 'Paperless fax manchine' }
];

var AppDesigner = function() {
	var self = this;
};

AppDesigner.prototype.getPackages = function(opts, callback) {
	var self = this;

	callback(null, apps);
};

module.exports = {
	type: 'engine',
	engine_name: 'AppDesigner',
	prototype: AppDesigner
};
