define("apps/test/1.0.0/view/test-debug", [ "/sea-modules/jquery/jquery/1.10.1/jquery-debug.js", "/sea-modules/marketing/mustache/0.7.2/mustache-debug.js", "/sea-modules/gallery/backbone/1.0.0/backbone-debug.js", "gallery/underscore/1.4.4/underscore-debug", "$-debug", "../collection/test-debug", "../model/test-debug" ], function(require, exports, module) {
    var $ = require("/sea-modules/jquery/jquery/1.10.1/jquery-debug.js");
    var Mustache = require("/sea-modules/marketing/mustache/0.7.2/mustache-debug.js");
    var Backbone = require("/sea-modules/gallery/backbone/1.0.0/backbone-debug.js");
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

define("apps/test/1.0.0/collection/test-debug", [ "/sea-modules/gallery/backbone/1.0.0/backbone-debug.js", "gallery/underscore/1.4.4/underscore-debug", "$-debug", "apps/test/1.0.0/model/test-debug" ], function(require, exports, module) {
    var Backbone = require("/sea-modules/gallery/backbone/1.0.0/backbone-debug.js");
    var m = require("apps/test/1.0.0/model/test-debug");
    var test = Backbone.Collection.extend({
        model: m
    });
    module.exports = new test();
});

define("apps/test/1.0.0/model/test-debug", [ "/sea-modules/gallery/backbone/1.0.0/backbone-debug.js", "gallery/underscore/1.4.4/underscore-debug", "$-debug" ], function(require, exports, module) {
    var Backbone = require("/sea-modules/gallery/backbone/1.0.0/backbone-debug.js");
    var test = Backbone.Model.extend({});
    module.exports = test;
});

define("apps/test/1.0.0/collection/test-debug", [ "/sea-modules/gallery/backbone/1.0.0/backbone-debug.js", "gallery/underscore/1.4.4/underscore-debug", "$-debug", "apps/test/1.0.0/model/test-debug" ], function(require, exports, module) {
    var Backbone = require("/sea-modules/gallery/backbone/1.0.0/backbone-debug.js");
    var m = require("apps/test/1.0.0/model/test-debug");
    var test = Backbone.Collection.extend({
        model: m
    });
    module.exports = new test();
});

define("apps/test/1.0.0/model/test-debug", [ "/sea-modules/gallery/backbone/1.0.0/backbone-debug.js", "gallery/underscore/1.4.4/underscore-debug", "$-debug" ], function(require, exports, module) {
    var Backbone = require("/sea-modules/gallery/backbone/1.0.0/backbone-debug.js");
    var test = Backbone.Model.extend({});
    module.exports = test;
});

define("apps/test/1.0.0/model/test-debug", [ "/sea-modules/gallery/backbone/1.0.0/backbone-debug.js", "gallery/underscore/1.4.4/underscore-debug", "$-debug" ], function(require, exports, module) {
    var Backbone = require("/sea-modules/gallery/backbone/1.0.0/backbone-debug.js");
    var test = Backbone.Model.extend({});
    module.exports = test;
});
