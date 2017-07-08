;(function(win, doc) {

    var ThrottleUtil = {
        debounce: function(fn, context, delay) {
            return function() {
                var args = arguments;

                clearTimeout(this.timer);
                this.timer = setTimeout(function() {
                    fn.apply(context, args);
                }, delay);
            }
        },
        throttle: function(fn, context, duraction, delay) {
             var startTime = +new Date();

             return function() {
                var args = arguments;
                var endTime = +new Date();

                clearTimeout(this.timer);
                if(endTime - startTime >= duraction) {
                    fn.apply(context, args);
                    startTime = endTime;
                } else {

                    this.timer = setTimeout(function() {
                        fn.apply(context, args);
                    }, delay);
                }
             }
        }
    }

    //判断是否是cmd、amd或window
    if(typeof exports == "object") {
        module.exports = ThrottleUtil;
    } else if(typeof define == "function" && define.amd) {
        define([], function() {
            return ThrottleUtil;
        });
    } else {
        win.ThrottleUtil = ThrottleUtil;
    }
})(window, document);
