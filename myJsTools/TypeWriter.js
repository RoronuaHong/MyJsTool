;(function(win, doc) {
    /**
     * @constructor TypeWriter  打印字功能
     * @param ele  传入id名称
     * @author slim。
     * @date 2017.08.28
     */
    var TypeWriter =  {
        getWholeHtml: function(ele) {
            var allEle = doc.getElementById(ele);
            return allEle;
        },
        operateHtml: function(eles) {

            //获取整个html内容
            var ele = this.getWholeHtml(eles),
            wholehtml = this.getWholeHtml(eles).innerHTML;

            //将当前内容清空
            ele.innerHTML = "";

            //声明进度和当前的字符串
            var process = 0,
                current = '';

            //通过计时器来判断标签
            var timer = setInterval(function() {

                //设置当前字符为截取的字符
                current = wholehtml.substr(process, 1);
                console.log(current);

                //判断字符是否为'<'
                if(current == '<') {
                    console.log(process)
                    //从当前字符开始查找到相应的'>'
                    process =  wholehtml.indexOf('>', process) + 1;
                    console.log(process)
                } else {

                    //当前的进度前进一格
                    process++;
                }

                //将标签填入
                ele.innerHTML = wholehtml.substr(0, process) + (process % 2 == 0 ? '_' : ' ');

                //判断process是否大于整个html的长度
                if(wholehtml.length <= process) {
                    clearInterval(timer);
                    wholehtml.substring(0, wholehtml.length - 1);
                }
            }, 16);

            // console.log(wholehtml);
        },
        init: function(ele) {
            console.log(ele)
            this.operateHtml(ele);
        }
    }

    //判断是否为cmd、amd或者window
    if(typeof exports == "object") {
        module.exports == TypeWriter;
    } else if(typeof define == "function" && define.amd) {
        define([], function() {
            return TypeWriter;
        });
    } else {
        win.TypeWriter = TypeWriter;
    }
})(window, document);
