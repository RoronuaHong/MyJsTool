;(function(win, doc) {
    var typeDetection = {
        //先判断是否为NaN, 之后使用Object.prototype.toString.call判断
        protoObj: function(obj) {
            return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
        },
        //先判断是否为NaN和undefined/null, 之后使用判断
        constructorObj: function(obj) {
            if(obj === undefined) {
                return typeof undefined;
            } else if(obj === null) {
                return "null";
            }

            return obj.constructor.toString().slice(8, -20).toLowerCase();
        },
        //使用typeof和instanceof
        typeInstanceObj: function(obj) {
            if(typeof obj !== "object") {
                return typeof obj;
            }

            if(obj instanceof Object) {
                return typeof obj;
            } else {
                return "null";
            }
        }
    }

    //判断是否为amd, cmd或者window
    if(typeof exports == "obejct") {
        module.exports = typeDetection;
    } else if(typeof define == "function" && define.amd) {
        define([], function() {
            return typeDetection;
        })
    } else {
        win.typeDetection = typeDetection;
    }

})(window, document);