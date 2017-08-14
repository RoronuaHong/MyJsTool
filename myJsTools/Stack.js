;(function(win, doc) {
    var Stack = function() {
        var items = [];

        /*增加元素方法*/
        this.push = function(ele) {
            items.push(ele)
        }

        /*移除栈顶元素*/
        this.pop = function() {
            return items.pop();
        }

        /*返回栈顶元素，不影响栈*/
        this.peek = function() {
            return items[items.length - 1];
        }

        /*判断是否为空栈*/
        this.isEmpty = function() {
            return items.length == 0;
        }

        /*栈的长度*/
        this.size = function() {
            return items.length;
        }

        /*清空栈*/
        this.clear = function() {
            items = [];
        }

        /*输出栈里的元素*/
        this.print = function() {
            console.log(items.toString());
        }
    }

    //判断是否为amd、cmd或window
    if(typeof exports == "object") {
        module.exports = Stack;
    } else if(typeof define == "function" && define.amd) {
        define([], function() {
            return Stack;
        });
    } else {
        win.Stack = Stack;
    }
})(window, document);
