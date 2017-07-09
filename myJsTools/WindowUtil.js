;(function(win, doc) {

    var WindowUtil = {
        /*获取浏览器视口的宽度和高度*/
        ViewPort: {
            getWidth: function() {
                return window.innerWidth || window.documentElement.clientWidth;
            },
            getHeight: function() {
                return window.innerHeight || window.documentElement.clientHeight;
            }
        }
    }

    //判断是否为cmd、amd或者window
    if(typeof exports == "object") {
        module.exports = WindowUtil;
    } else if(typeof define == "function" && define.amd) {
        define([], function() {
            return WindowUtil;
        });
    } else {
        win.WindowUtil = WindowUtil;
    }
})(window, document);
