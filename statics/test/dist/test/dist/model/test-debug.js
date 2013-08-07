define("apps/test/1.0.0/model/test-debug", [ "/sea-modules/gallery/backbone/1.0.0/backbone-debug.js", "gallery/underscore/1.4.4/underscore-debug", "$-debug" ], function(require, exports, module) {
    var Backbone = require("/sea-modules/gallery/backbone/1.0.0/backbone-debug.js");
    var test = Backbone.Model.extend({});
    module.exports = test;
});
