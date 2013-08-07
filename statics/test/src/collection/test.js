define(function(require, exports, module){
	var Backbone = require("backbone");
	var m = require("../model/test.js");

	var test = Backbone.Collection.extend({
		model : m
	});
	module.exports = new test();
});