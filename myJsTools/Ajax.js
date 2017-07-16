;(function(win, doc) {
    /**
     * @constructor AJAX请求
     * @param Object
     * @author slim。
     * @date 2017.07.16
     */
    var Ajax = function(Object) {
        var defaults = {
            hosts: Object.hosts,
            url: Object.hosts + Object.url,
            crossDomain: Object.crossDomain || true,
            xhrFields: Object.xhrFields || { withCredentials: true },
            type: (Object.type || "get").toUpperCase(),
            dataType: Object.dataType || "json",
            data: formatParams(Object.data || {}),
            async: Object.async || false,
            timeout: Object.timeout || 0,
            success: Object.success,
            error: Object.error
        }

        /*实现ajax方法*/
        //新建XML对象
        var xhr = new XMLHttpRequest();

        //监听状态变化
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
                if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {

                    //判断返回的内容类型
                    var response = "";
                    var types = xhr.getResponseHeader("Content-Type");

                    if(types.indexOf("xml") > -1 && types.responseXML) {

                        //document对象响应
                        response = xhr.responseXML;
                    } else if(types === "application/json") {

                        //JSON响应
                        response = JSON.parse(xhr.responseText);
                    } else {
                        response = xhr.responseText;
                    }

                    //成功回调函数
                    defaults.success && defaults.success(response);
                } else {
                    defaults.error && defaults.error(xhr.status);
                }
            }
        }

        //封装get方法
        if(defaults.type === "GET") {

            defaults.url += defaults.url.indexOf("?") > -1 ? "&" : "?";

            //开启连接,添加参数
            xhr.open(defaults.type, defaults.url + "?" + defaults.data, defaults.async);
            xhr.send(null);
        }

        //封装post方法
        if(defaults.type === "POST") {

            //开启连接
            xhr.open(defaults.type, defaults.url, defaults.async);

            //设置POST的类型
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
            xhr.send(defaults.data);
        }

        /*格式化data数据*/
        function formatParams(data) {
            var arr = [];
            for(var item in data) {

                //使用encodeURIComponent对数据进行编码
                arr.push(encodeURIComponent(item) + "=" + encodeURIComponent(data[item]));
            }

            //设置一个随机数参数，防止缓存
            arr.push("v=" + +new Date());
            return arr.join("&");
        }
    }

    //判断是否为cmd、amd或window
    if(typeof exports == "object") {
        module.exports = Ajax;
    } else if(typeof define == "function" && define.amd) {
        define([], function() {
            return Ajax;
        });
    } else {
        win.Ajax = Ajax;
    }
})(window, document);