define(function(require, exports, module){
	var $ = require("$");
	var _ = require("underscore");
	var Mustache = require("mustache");
	var Backbone = require("backbone");
	var collection = require("../collection/test.js");
	var testView = require("../view/test.js");

	var App = Backbone.View.extend({
		el : "body",

		initialize : function(){
			this.listenTo(collection, "add", this.addOne);
		},

		render : function(){
			
		},

		events : {
			"click #add" : "add"
		},

		addOne : function(model){
			var view = new testView({model : model});
			this.$("ul").append(view.render().el);
		},

		add : function(){
			var val = $("#val").val();
			if(val == ""){
				alert("input");
				return;
			}
			collection.add({name : val});
		}
	});

	module.exports = App;
});