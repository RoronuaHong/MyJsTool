;(function(win, doc) {
    /**
     * @description     优先队列类
     * @type element    要添加的元素
     *       priority   优先级
     * @author slim。
     * @date 2017.08.16
     */

    var PriorityQueue = function() {
        //新建一个存储数组
        var items = [];

        //将参数赋值给当前对象
        function QueueElement(element, priority) {
            this.element = element;
            this.priority = priority;
        }

        //添加元素
        this.enqueue = function(element, priority, bools) {
            var queueElement = new QueueElement(element, priority);
            if(!!this.isEmpty()) {
                items.push(queueElement);
            } else {

                //设置判断priority
                var added = false;

                if(!!bools) {
                    for(var i = 0; i < items.length; i++) {
                        if(queueElement.priority < items[i].priority) {
                            items.splice(i, 0, queueElement);
                            added = true;
                            break;
                        }
                    }
                } else {
                    for(var i = 0; i < items.length; i++) {
                        if(queueElement.priority > items[i].priority) {
                            items.splice(i, 0, queueElement);
                            added = true;
                            break;
                        }
                    }
                }


                //added为false,直接添加
                if(!added) {
                    items.push(queueElement);
                }
            }
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
        module.exports = PriorityQueue;
    } else if(typeof define == "function" && define.amd) {
        define([], function() {
            return PriorityQueue;
        });
    } else {
        window.PriorityQueue = PriorityQueue;
    }
})(window, document);
