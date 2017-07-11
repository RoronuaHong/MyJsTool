;(function(win, doc) {

    /**
     * @description 函数的节流和去抖
     * @type {{debounce: debounce, throttle: throttle}}
     * @author slim。
     * @date 2017.07.08
     */
    var ThrottleUtil = {
        /**
         * @param fn            相应的执行函数
         * @param context       作用域
         * @param delay         延迟的时间
         * @returns {Function}
         */
        debounce: function(fn, context, delay) {
            return function() {
                var args = arguments;

                clearTimeout(this.timer);
                this.timer = setTimeout(function() {
                    fn.apply(context, args);
                }, delay);
            }
        },
        /**
         * @param fn            相应的执行函数
         * @param context       作用域
         * @param duraction     间隔多长时间执行
         * @param delay         延迟的时间
         * @returns {Function}
         */
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
