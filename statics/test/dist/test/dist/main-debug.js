define("apps/test/1.0.0/main-debug", [ "./view/app-debug", "/sea-modules/jquery/jquery/1.10.1/jquery-debug.js", "/sea-modules/gallery/underscore/1.4.4/underscore-debug.js", "/sea-modules/marketing/mustache/0.7.2/mustache-debug.js", "/sea-modules/gallery/backbone/1.0.0/backbone-debug.js", "gallery/underscore/1.4.4/underscore-debug", "$-debug", "./collection/test-debug", "./model/test-debug", "./view/test-debug" ], function(require, exports, module) {
    var App = require("./view/app-debug");
    var app = new App();
});

define("apps/test/1.0.0/view/app-debug", [ "/sea-modules/jquery/jquery/1.10.1/jquery-debug.js", "/sea-modules/gallery/underscore/1.4.4/underscore-debug.js", "/sea-modules/marketing/mustache/0.7.2/mustache-debug.js", "/sea-modules/gallery/backbone/1.0.0/backbone-debug.js", "gallery/underscore/1.4.4/underscore-debug", "$-debug", "apps/test/1.0.0/collection/test-debug", "apps/test/1.0.0/model/test-debug", "apps/test/1.0.0/view/test-debug" ], function(require, exports, module) {
    var $ = require("/sea-modules/jquery/jquery/1.10.1/jquery-debug.js");
    var _ = require("/sea-modules/gallery/underscore/1.4.4/underscore-debug.js");
    var Mustache = require("/sea-modules/marketing/mustache/0.7.2/mustache-debug.js");
    var Backbone = require("/sea-modules/gallery/backbone/1.0.0/backbone-debug.js");
    var collection = require("apps/test/1.0.0/collection/test-debug");
    var testView = require("apps/test/1.0.0/view/test-debug");
    var App = Backbone.View.extend({
        el: "body",
        initialize: function() {
            this.listenTo(collection, "add", this.addOne);
        },
        render: function() {},
        events: {
            "click #add": "add"
        },
        addOne: function(model) {
            var view = new testView({
                model: model
            });
            this.$("ul").append(view.render().el);
        },
        add: function() {
            var val = $("#val").val();
            if (val == "") {
                alert("input");
                return;
            }
            collection.add({
                name: val
            });
        }
    });
    module.exports = App;
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

define("apps/test/1.0.0/view/test-debug", [ "/sea-modules/jquery/jquery/1.10.1/jquery-debug.js", "/sea-modules/marketing/mustache/0.7.2/mustache-debug.js", "/sea-modules/gallery/backbone/1.0.0/backbone-debug.js", "gallery/underscore/1.4.4/underscore-debug", "$-debug", "apps/test/1.0.0/collection/test-debug", "apps/test/1.0.0/model/test-debug" ], function(require, exports, module) {
    var $ = require("/sea-modules/jquery/jquery/1.10.1/jquery-debug.js");
    var Mustache = require("/sea-modules/marketing/mustache/0.7.2/mustache-debug.js");
    var Backbone = require("/sea-modules/gallery/backbone/1.0.0/backbone-debug.js");
    var collection = require("apps/test/1.0.0/collection/test-debug");
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

define("apps/test/1.0.0/view/app-debug", [ "/sea-modules/jquery/jquery/1.10.1/jquery-debug.js", "/sea-modules/gallery/underscore/1.4.4/underscore-debug.js", "/sea-modules/marketing/mustache/0.7.2/mustache-debug.js", "/sea-modules/gallery/backbone/1.0.0/backbone-debug.js", "gallery/underscore/1.4.4/underscore-debug", "$-debug", "apps/test/1.0.0/collection/test-debug", "apps/test/1.0.0/model/test-debug", "apps/test/1.0.0/view/test-debug" ], function(require, exports, module) {
    var $ = require("/sea-modules/jquery/jquery/1.10.1/jquery-debug.js");
    var _ = require("/sea-modules/gallery/underscore/1.4.4/underscore-debug.js");
    var Mustache = require("/sea-modules/marketing/mustache/0.7.2/mustache-debug.js");
    var Backbone = require("/sea-modules/gallery/backbone/1.0.0/backbone-debug.js");
    var collection = require("apps/test/1.0.0/collection/test-debug");
    var testView = require("apps/test/1.0.0/view/test-debug");
    var App = Backbone.View.extend({
        el: "body",
        initialize: function() {
            this.listenTo(collection, "add", this.addOne);
        },
        render: function() {},
        events: {
            "click #add": "add"
        },
        addOne: function(model) {
            var view = new testView({
                model: model
            });
            this.$("ul").append(view.render().el);
        },
        add: function() {
            var val = $("#val").val();
            if (val == "") {
                alert("input");
                return;
            }
            collection.add({
                name: val
            });
        }
    });
    module.exports = App;
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

define("apps/test/1.0.0/view/test-debug", [ "/sea-modules/jquery/jquery/1.10.1/jquery-debug.js", "/sea-modules/marketing/mustache/0.7.2/mustache-debug.js", "/sea-modules/gallery/backbone/1.0.0/backbone-debug.js", "gallery/underscore/1.4.4/underscore-debug", "$-debug", "apps/test/1.0.0/collection/test-debug", "apps/test/1.0.0/model/test-debug" ], function(require, exports, module) {
    var $ = require("/sea-modules/jquery/jquery/1.10.1/jquery-debug.js");
    var Mustache = require("/sea-modules/marketing/mustache/0.7.2/mustache-debug.js");
    var Backbone = require("/sea-modules/gallery/backbone/1.0.0/backbone-debug.js");
    var collection = require("apps/test/1.0.0/collection/test-debug");
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

define("apps/test/1.0.0/model/test-debug", [ "/sea-modules/gallery/backbone/1.0.0/backbone-debug.js", "gallery/underscore/1.4.4/underscore-debug", "$-debug" ], function(require, exports, module) {
    var Backbone = require("/sea-modules/gallery/backbone/1.0.0/backbone-debug.js");
    var test = Backbone.Model.extend({});
    module.exports = test;
});

define("apps/test/1.0.0/view/test-debug", [ "/sea-modules/jquery/jquery/1.10.1/jquery-debug.js", "/sea-modules/marketing/mustache/0.7.2/mustache-debug.js", "/sea-modules/gallery/backbone/1.0.0/backbone-debug.js", "gallery/underscore/1.4.4/underscore-debug", "$-debug", "apps/test/1.0.0/collection/test-debug", "apps/test/1.0.0/model/test-debug" ], function(require, exports, module) {
    var $ = require("/sea-modules/jquery/jquery/1.10.1/jquery-debug.js");
    var Mustache = require("/sea-modules/marketing/mustache/0.7.2/mustache-debug.js");
    var Backbone = require("/sea-modules/gallery/backbone/1.0.0/backbone-debug.js");
    var collection = require("apps/test/1.0.0/collection/test-debug");
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
