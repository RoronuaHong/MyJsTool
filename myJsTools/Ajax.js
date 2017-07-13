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

        //开启连接
        xhr.open(defaults.type, defaults.url, defaults.async);

        if(defaults.type.toLocaleLowerCase() == "get") {
            xhr.send(null);
        }
        if(defaults.type.toLocaleLowerCase() == "post") {
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send();
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