;(function(win, doc) {
    /**
     * @description 实现IE6~8的bind方法
     * @author slim。
     * @date 2017.09.17
     */
    var bind = function(fn, context) {
        return function() {
            return fn.apply(context, arguments);
        }
    }

    //判断是否是AMD、CMD或win
    if(typeof exports == "object") {
        module.exports = bind;
    } else if(typeof define == "function" && define.amd) {
        define([], function() {
            return bind;
        });
    } else {
        win.bind = bind;
    }
})(window, document);
