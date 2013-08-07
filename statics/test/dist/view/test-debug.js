define("apps/test/1.0.0/view/test-debug", [ "$-debug", "mustache-debug", "backbone-debug", "../collection/test-debug", "../model/test-debug" ], function(require, exports, module) {
    var $ = require("$-debug");
    var Mustache = require("mustache-debug");
    var Backbone = require("backbone-debug");
    var collection = require("../collection/test-debug");
    var view = Backbone.View.extend({
        tagName: "li",
        template: $("#testTemplate").html(),
        initialize: function() {
            this.listenTo(this.model, "change", this.render);
        },
        render: function() {
            var html = Mustache.to_html(this.template, this.model.toJSON());
            this.$el.html(html);
            return this;
        },
        events: {
            "click span": "delete"
        },
        "delete": function() {
            collection.remove(this.model);
            this.$el.remove();
        }
    });
    module.exports = view;
});

define("apps/test/1.0.0/collection/test-debug", [ "backbone-debug", "apps/test/1.0.0/model/test-debug" ], function(require, exports, module) {
    var Backbone = require("backbone-debug");
    var m = require("apps/test/1.0.0/model/test-debug");
    var test = Backbone.Collection.extend({
        model: m
    });
    module.exports = new test();
});

define("apps/test/1.0.0/model/test-debug", [ "backbone-debug" ], function(require, exports, module) {
    var Backbone = require("backbone-debug");
    var test = Backbone.Model.extend({});
    module.exports = test;
});
