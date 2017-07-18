;(function(win, doc) {
    /**
     * @constructor JSONP请求
     * @param Object
     * @author slim。
     * @date 2017.07.18
     */
    var JSONP = function(Object) {
        var defaults = {
            url: Object.url || "",
            data: formatParams(Object.data || {}),
            callback: Object.callback || "jsonp",
            jsonp: Object.jsonp || "callback",
            timeout: Object.timeout || 3000,
            success: Object.success,
            error: Object.error
        }

        //新建一个script标签
        var script = doc.createElement("script");

        //获取head标签
        var head = doc.getElementsByTagName("head")[0];

        //格式化数据
        function formatParams(data) {
            var arr = [];
            for(var item in data) {
                arr.push(encodeURIComponent(item) + "=" + encodeURIComponent(data[item]));
            }

            //添加一个随机数，防止缓存
            arr.push("v=" + +new Date());
            return arr.join("&");
        }

        //判断url是否存在问号
        defaults.url += defaults.url.indexOf("?") > -1 ? "&" : "?";

        var callbacks = "";
        if(!!defaults.data) {
            callbacks += "&";
        }
        callbacks += defaults.jsonp + "=" + defaults.callback;

        head.appendChild(script);

        //创建回调函数
        window[defaults.callback] = function(datas) {

            //移除script标签
            head.removeChild(script);

            //清除超时计时器
            clearTimeout(script.timer);

            //清除回调函数
            window[defaults.callback] = null;
            defaults.success && defaults.success(datas);
        }

        //发送jsonp请求
        script.src = defaults.url + defaults.data + callbacks;

        //设置超时处理
        script.timer = setTimeout(function() {

            //清除回调函数
            window[defaults.callback] = null;

            //移除script标签
            head.removeChild(script);

            //超时处理
            defaults.error && defaults.error({
                message: "请求超时!"
            });
        }, defaults.timeout);
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
