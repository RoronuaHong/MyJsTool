;(function(win, doc) {

    var SubCookieUtil = {
        /**
         *
         * @param name      名字
         */
        getAll: function(name) {

            //先获取整条的name
            var cookieName = encodeURIComponent(name) + "=",
                cookieStart = document.cookie.indexOf(cookieName),
                cookieValue = null,
                cookieEnd,
                subCookies,
                result = {};

            //是否存在cookiename
            if(cookieStart > -1) {

                //判断是否有分号，如果没有，则获取整条，如果有则获取截取到第一个分号位置
                cookieEnd = document.cookie.indexOf(";", cookieStart);
                if(cookieEnd == -1) {
                    cookieEnd = document.cookie.length;
                }
                cookieValue = decodeURIComponent(document.cookie.substring(cookieName.length + cookieStart, cookieEnd));

                //若cookieValue存在，则进行切割
                if(cookieValue.length > 0) {

                    //先分割&
                    subCookies = cookieValue.split("&");

                    //然后分割=

                    for(var i = 0; i < subCookies.length; i++) {
                        var paths = subCookies[i].split("=");

                        //将其放入对象中
                        result[decodeURIComponent(paths[0])] = decodeURIComponent(paths[1]);
                    }

                    return result;
                }
            }
            return null;
        },
        /**
         *
         * @param name      cookie名字
         * @param subName   cookie子名字
         * @returns subCookie[subName] 子名字的属性
         */
        get: function(name, subName) {
            var subCookie = this.getAll(name);
            if(subCookie) {
                return subCookie[subName];
            } else {
                return null;
            }
        },
        /**
         * @param name          名字
         * @param subCookies    子属性
         * @param expires       过期时间
         * @param path          路径
         * @param domain        域
         * @param secure        SSL连接
         */
        setAll: function(name, subCookies, expires, path, domain, secure) {
            var cookieText = encodeURIComponent(name) + "=",
                subcookieParts = [];

            //如果子cookie存在该属性，则添加到subcookieParts中
            for(var subName in subCookies) {
                if(subName.length > 0 && subCookies.hasOwnPropoty(subName)) {
                    subcookieParts.push(encodeURIComponent(subName) + "=" + encodeURIComponent(subCookies[subName]));
                }
            }

            //将其写入到cookieText中
            if(subcookieParts.length > 0) {
                cookieText += subcookieParts.join("&");

                if(expires) {
                    cookieText += "; expires=" + expires;
                }

                if(path) {
                    cookieText += "; path=" + path;
                }

                if(domain) {
                    cookieText += "; domain=" + domain;
                }

                if(secure) {
                    cookieText += "; secure";
                }
            } else {
                cookieText += "; expires=" + (new Date(0)).toGMTString();
            }

            document.cookie = cookieText;
        },
        /**
         *
         * @param name          名字
         * @param subName       子属性
         * @param value         值
         * @param expires       过期时间
         * @param path          路径
         * @param domain        域
         * @param secure        SSL连接
         */
        set: function(name, subName, value, expires, path, domain, secure) {
            var subCookies = this.getAll(name) || {};
            subCookies[subName] = value;
            this.setAll(name, subCookies, expires, path, domain, secure);
        },
        /**
         *
         * @param name      cookie名字
         * @param subName   cookie子名字
         * @param path      路径
         * @param domain    域
         * @param secure    SSL连接
         */
        unsetAll: function(name, subName, path, domain, secure) {
            var subcookies = this.getAll(name);

            if(subcookies) {

                //清除当前子属性
                delete subcookies[subName];
                this.setAll(name, subcookies, null, path, domain, secure);
            }
        },
        /**
         *
         * @param name      cookie名字
         * @param path      路径
         * @param domain    域
         * @param secure    SSL连接
         */
        unset: function(name, path, domain, secure) {
            this.setAll(name, null, new Date(0), path, domain, secure);
        }
    }

    //判断是否为amd、cmd或window
    if(typeof exports == "object") {
        module.exports = SubCookieUtil;
    } else if(typeof define == "function" && define.amd) {
        define([], function() {
            return SubCookieUtil;
        })
    } else {
        win.SubCookieUtil = SubCookieUtil;
    }
})(window, document);
