;(function(win, doc) {
    var Ajax = function(Object) {
        var defaults = {
            url: Object.url,
            type: Object.type || "get",
            dataType: Object.dataType || "json",
            data: Object.data,
            async: Object.async || false,
            timeout: Object.timeout,
            crossDomain: Object.crossDomain || false,
            xhrFields: Object.xhrFields || {},
            success: Object.success,
            error: Object.error
        }

        /*实现ajax方法*/
        //新建XML对象
        var xhr = new XMLHttpRequest();

        //拼接data字符串
        var params = "";

        //当data存在，并且为对象时进行拼接
        var data = defaults.data ? defaults : -1;
        if(typeof data == "object") {
            for(var key in data) {
                if(data.hasOwnProperty(key)) {
                    params += key + "=" + data[key] + "&"
                }
            }

            //替换掉结尾的&符号
            params.replace(/&$/, "");
        } else {
            params = "timestamp=" + new Date().getTime();
        }

        //封装get方法
        if(defaults.type.toLocaleLowerCase() == "get") {

            //开启连接
            xhr.open(defaults.type, defaults.url, defaults.async);
            xhr.send(null);
        }

        //封装post方法
        if(defaults.type.toLocaleLowerCase() == "post") {

            //开启连接
            xhr.open(defaults.type, defaults.url, defaults.async);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send();
        }

        //监听状态变化
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4) {
                if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                    if(typeof xhr.responseText === "string") {
                        defaults.success && defaults.success(JSON.parse(xhr.responseText));
                    }
                } else {
                    defaults.error && defaults.error(xhr.status);
                }
            }
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