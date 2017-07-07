;(function(win, doc) {

    /**
     * @description 浏览器设备检测
     * @type {{isAndroid: isAndroid, isiPhone: isiPhone, isiPad: isiPad, isiOS: isiOS, isMobile: isMobile, isWebApp: isWebApp, isWx: isWx, isQQ: isQQ, isIE: isIE, isOpera: isOpera, isWebkit: isWebkit, isFirefox: isFirefox}}
     * @author slim。
     * @date 2017.07.05
     */
    var UserAgentUtil = {
        /*设备是否为Android*/
        isAndroid: function(u) {
            return u.indexOf("Android") > -1 || u.indexOf("Ard") > -1;
        },
        /*设备是否为iPhone*/
        isiPhone: function(u) {
            return u.indexOf("iPhone") > -1;
        },
        /*设备是否为iPad*/
        isiPad: function(u) {
            return u.indexOf("iPad") > -1;
        },
        /*设备是否为iOS终端*/
        isiOS: function(u) {
            return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        },
        /*设备是否为移动端*/
        isMobile: function(u) {
            return !!u.match(/AppleWebkit.*Mobile.*/);
        },
        /*是否为web应用程序*/
        isWebApp: function(u) {
            return u.indexOf("Safari") > -1;
        },
        /*是否为微信*/
        isWx: function(u) {
            u.indexOf("MicroMessager") > -1;
        },
        /*是否为QQ*/
        isQQ: function(u) {
            return !!u.match(/\sQQ/i);
        },
        /*IE内核*/
        isIE: function(u) {
            return u.indexOf("Trident") > -1;
        },
        /*Opera内核*/
        isOpera: function(u) {
            return u.indexOf("Presto") > -1;
        },
        /*苹果、谷歌内核*/
        isWebkit: function(u) {
            return u.indexOf("AppleWebkit") > -1;
        },
        /*火狐内核*/
        isFirefox: function(u) {
            return u.indexOf("Geoko");
        }
    }

    //检测cmd、amd或者window
    if(typeof exports == "object") {
        module.exports = UserAgentUtil;
    } else if(typeof define == "function" && define.amd) {
        define([], function() {
           return UserAgentUtil;
        });
    } else {
        win.UserAgentUtil = UserAgentUtil;
    }
})(window, document);