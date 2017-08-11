;(function(win, doc) {
    /**
     * @description 常用正则
     * @author slim。
     * @date 2017.07.20
     */
    var commonRegExp = {
        /*检测是否为手机号码*/
        isTelPhone: function(strings) {
            var veg = /^1[34589]\d{9}$/gi;

            return veg.test(strings);
        },
        /*将手机号中间4位替换为*号*/
        telPhoneChange: function(string) {
            var veg = /^(.)(.)(.).+(.)(.)(.)(.)(.)$/gi;
            !!string.match(veg) && (string = string.replace(veg, "$1$2$3****$5$6$7$8"));

            return string;
        },
        /*检测邮箱*/
        isMail: function(strings) {
            var veg = /^[\w.-]+@[0-9a-zA-Z]+(\.[a-zA-Z]{2,4}){1,2}$/gi;

            return veg.test(strings);
        },
        /*检测是否为15位或18位的身份证*/
        isIdCard: function(strings) {
            var veg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

            return veg.test(strings);
        },
        /*中文匹配*/
        isChinese: function(strings) {
            var veg = /^[\u4e00-\u9fa5]{2,20}$/gi;

            return veg.test(strings);
        },
        /*检测用户名*/
        isUser: function(strings, min, max) {
            var veg = new RegExp("^[a-zA-Z]\\w{" + min + "," + max + "}$");

            return veg.test(strings);
        },
        /*检测密码*/
        isPwd: function(strings, min, max) {
            var veg = new RegExp("^[a-zA-Z]\\w{" + min + "," + max + "}$");

            return veg.test(strings);
        }
    }

    //判断是否为cmd、amd或者window
    if(typeof exports == "object") {
        module.exports = commonRegExp;
    } else if(typeof define == "function" && define.amd) {
        define([], function() {
            return commonRegExp;
        });
    } else {
        win.commonRegExp = commonRegExp;
    }
})(window, document);
