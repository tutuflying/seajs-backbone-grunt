define("apps/test/1.0.0/model/test-debug", [ "backbone-debug" ], function(require, exports, module) {
    var Backbone = require("backbone-debug");
    var test = Backbone.Model.extend({});
    module.exports = test;
});
