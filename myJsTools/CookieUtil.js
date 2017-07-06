;(function(win, doc) {
    /**
     * @description 获取cookie
     * @type {{get: 获取cookie, set: 设置cookie, unset: 删除cookie}}
     * @author slim。
     * @date 2017.07.05
     */
    var CookieUtil = {
        /**
         * @param name 需要获取的cookie名字
         * @returns cookieValue 返回的value
         */
        get: function(name) {

            //设置需要查找的cookie名字
            var cookieName = encodeURIComponent(name) + "=";

            //根据cookieName查找
            var cookieStart = doc.cookie.indexOf(cookieName);
            var cookieValue = null;

            //判断是否查找到了cookieName
            if(cookieStart > -1) {

                //从cookieStatr位置开始查找第一个分号
                var cookieEnd = doc.cookie.indexOf(";", cookieStart);

                //如果不存在，则表示后面的都是name
                if(cookieEnd == -1) {
                    cookieEnd = doc.cookie.length;
                }

                //使用substring来截取字符串并转码赋值给cookieValue
                cookieValue = decodeURIComponent(doc.cookie.substring(cookieStart + cookieName.length, cookieEnd));
            }
            return cookieValue;
        },
        /**
         *
         * @param name      名字
         * @param value     值
         * @param expires   过期时间
         * @param path      路径
         * @param domain    域
         * @param secure    SSL连接
         */
        set: function(name, value, expires, path, domain, secure) {
            var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);

            //是否存在expires
            expires instanceof Date && (cookieText += "; expires=" + expires.toGMTString());

            //是否存在path
            path && (cookieText += "; path=" + path);

            //是否存在domain
            domain && (cookieText += "; domain=" + domain);

            //是否存在secure
            secure && (cookieText += "; secure");

            doc.cookie = cookieText;
        },
        /**
         *
         * @param name      cookie的名字
         * @param path      路径
         * @param domain    域
         * @param secure    SSL连接
         */
        unset: function(name, path, domain, secure) {

            //通过设置过期时间达到删除目的
            this.set(name, path, new Date(0), domain, secure);
        }
    }

    //检测是否为AMD、CMD或window
    if(typeof exports == "object") {
        module.exports = CookieUtil;
    } else if(typeof define == "function" && define.amd) {
        define([], function() {
            return CookieUtil;
        });
    } else {
        win.CookieUtil = CookieUtil;
    }

})(window, document, undefined);
