;(function(win, doc) {
    /**
     * @description 实现禁止转换
     * @type decNumber 要添加的元素
     *       number    需要转换的进制
     * @author slim。
     * @date 2017.08.14
     */
    var baseConverter = function(decNumber, number) {

        var remStack = new Stack(),
            rem,
            baseString = "",
            digits = "0123456789ABCDEFG";

        //当decNumber大于0的时候，进行进制转换
        while(decNumber > 0) {
            rem = ~~(decNumber % number);

            //将rem放入栈中
            remStack.push(rem);

            //将decNumber重新赋值
            decNumber = ~~(decNumber / number);
        }

        //当栈不为空的时候，将值赋给baseString
        while(!remStack.isEmpty()) {
            baseString += digits[remStack.pop()];
        }

        return baseString;
    }

    //判断是否为amd, cmd或者window
    if(typeof exports == "object") {
        module.exports = baseConverter;
    } else if(typeof define == "function" && define.amd) {
        define([], function() {
            return baseConverter;
        });
    } else {
        win.baseConverter = baseConverter;
    }
})(window, document);