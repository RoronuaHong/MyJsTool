;(function(win, doc) {
    /**
     * @description 获取字符串参数
     * @type {{get: get, getAll: getAll}}
     * @author slim。
     * @date 2017.07.05
     */
    var GetQueryString = {
        get: function(name) {

            //获取问号后面的字符串
            var string = window.location.search.substring(1);

            //通过正则进行匹配
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = string.match(reg);

            return r ? decodeURIComponent(r[2]) : null;
        },
        getAll: function() {

            //截取问号后面的字符串
            var string = window.location.search.substring(1);

            var obj = {};

            //通过&进行分割
            var arr = string.split("&");

            //通过=进行分割，并添加到对象中
            for(var i = 0; i < arr.length; i++) {
                var small = arr[i].split("=");
                obj[decodeURIComponent(small[0])] = decodeURIComponent(small[1]);
            }

            return obj;
        }
    }

    //判断是否为cmd、amd或window
    if(typeof exports == "object") {
        module.exports = GetQueryString;
    } else if(typeof define == "function" && define.amd) {
        define([], function() {
            return GetQueryString;
        });
    } else {
        win.GetQueryString = GetQueryString;
    }
})(window, document);