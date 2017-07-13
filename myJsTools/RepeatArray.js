;(function(win, doc) {

    /**
     * @description 数组去重
     * @type {{doubleLoop: doubleLoop, objectRepeat: objectRepeat, indexOfFun: indexOfFun, fromFun: fromFun, spliceRepeat: spliceRepeat}}
     * @author slim。
     * @date 2017.07.05
     */
    var RepeatArray = {
        /*双重循环去重*/
        doubleLoop: function(arr) {
            var newarr = [arr[0]];
            for(var i = 1; i < arr.length; i++) {

                //设置一个开关
                var isTrue = false;

                for(var j = 0; j < newarr.length; j++) {
                    console.log(arr[i], newarr[j])
                    if(arr[i] == newarr[j]) {
                        isTrue = true;
                        break;
                    }
                }

                //判断是否有元素相同
                if(!isTrue) {
                    newarr.push(arr[i]);
                }
            }
            return newarr;
        },
        /*对象唯一性法*/
        objectRepeat: function(arr) {
            var newarr = [];
            var obj = {};

            for(var i = 0; i < arr.length; i++) {
                if(!obj[arr[i]]) {
                    obj[arr[i]] = 1;
                    newarr.push(arr[i]);
                }
            }
            return newarr;
        },
        /*filter和indexOf法*/
        indexOfFun: function(arr) {
            return arr.filter(function(item, index, array) {
                // return array.indexOf(item) === index;

                //或者
                return array.indexOf(item, index + 1) == -1;
            });
        },
        /*ES6的from和set法*/
        fromFun: function(arr) {
            return Array.from(new Set(arr));
        },
        /*splice去重*/
        spliceRepeat: function(arr) {
            for(var i = 0; i < arr.length; i++) {
                for(var j = i + 1; j < arr.length; j++) {
                    if(arr[i] === arr[j]) {
                        arr.splice(j, 1);
                    }
                }
            }
            return arr;
        }
    }

    //判断是否为cmd, amd或window
    if(typeof exports == "object") {
        module.exports = RepeatArray;
    } else if(typeof define == "function" && define.amd) {
        define([], function() {
            return RepeatArray;
        });
    } else {
        win.RepeatArray = RepeatArray;
    }
})(window, document);