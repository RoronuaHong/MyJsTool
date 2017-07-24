;(function(win, doc) {

    /**
     * @description 倒计时
     * @type {{init: init}}
     * @author slim。
     * @date 2017.07.20
     */
    var CountDownUtil = {
        init: function(ele, eleText, otherText, times, duraction) {

            //判断是否点击过
            if(ele.getAttribute("isClick") != "true") {
                ele.setAttribute("isClick", "true");
                clearInterval(this.timer);

                //进行倒计时
                this.timer = setInterval(function() {
                    if(times < 0) {
                        clearInterval(this.timer);
                        ele.setAttribute("isClick", "false");
                        ele.innerHTML = otherText;
                    } else {
                        //将其按钮内容进行修改
                        ele.innerHTML = eleText + "(" + times + ")";
                    }
                    times--;
                }, duraction);
            }
        }
    }

    if(typeof exports == "object") {
        module.exports = CountDownUtil;
    } else if(typeof define == "function" && define.amd) {
        define([], function() {
            return CountDownUtil;
        });
    } else {
        win.CountDownUtil = CountDownUtil;
    }
})(window, document);
