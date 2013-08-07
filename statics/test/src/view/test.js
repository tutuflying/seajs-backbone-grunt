define(function(require, exports, module){
	var $ = require("$");
	var Mustache = require("mustache");
	var Backbone = require("backbone");
	var collection = require("../collection/test.js");

	var view = Backbone.View.extend({
		tagName : "li",

		template : $("#testTemplate").html(),

		initialize : function(){
			this.listenTo(this.model, "change", this.render);
		},

		render : function(){
			var html = Mustache.to_html(this.template, this.model.toJSON());
			this.$el.html(html);
			return this;
		},

		events : {
			"click span" : "delete"
		},

		delete : function(){
			collection.remove(this.model);
			this.$el.remove();
		}

	});

	module.exports  = view;
});