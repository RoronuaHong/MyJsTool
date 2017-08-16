;(function(win, doc) {
    /**
     * @description 队列类
     * @type ele 要添加的元素
     * @author slim。
     * @date 2017.08.16
     */
    var Queue = function() {
        //新建一个存储数组
        var items = [];

        //添加元素
        this.enqueue = function(ele) {
            items.push(ele);
        }

        //删除元素
        this.dequeue = function() {
            return items.shift();
        }

        //查看队列第一个元素
        this.front = function() {
            return items[0];
        }

        //判断队列是否为空
        this.isEmpty = function() {
            return items.length == 0;
        }

        //队列的大小
        this.size = function() {
            return items.length;
        }

        //清空队列
        this.clear = function() {
            items = [];
        }

        //打印队列数据
        this.print = function() {
            console.log(items);
        }
    }

    //判断是否为cmd、amd或window
    if(typeof exports == "object") {
        module.exports = Queue;
    } else if(typeof define == "function" && define.amd) {
        define([], function() {
            return Queue;
        });
    } else {
        window.Queue = Queue;
    }

})(window, document);