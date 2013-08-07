define("apps/test/1.0.0/collection/test-debug", [ "backbone-debug", "../model/test-debug" ], function(require, exports, module) {
    var Backbone = require("backbone-debug");
    var m = require("../model/test-debug");
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
