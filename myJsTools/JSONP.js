;(function(win, doc) {
    var JSONP = {

    }

    //判断是否为cmd、amd或window
    if(typeof exports == "object") {
        module.exports = JSONP;
    } else if(typeof define == "function" && define.amd) {
        define([], function() {
            return JSONP;
        });
    } else {
        win.JSONP = JSONP;
    }
})(window, document);
