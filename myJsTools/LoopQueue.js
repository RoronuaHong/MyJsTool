;(function(win, doc) {
    var LoopQueue = function(arrList, num) {
        var queue = new Queue();

        //将数组的数据放入队列中
        for(var i = 0; i < arrList.length; i++) {
            queue.enqueue(arrList[i]);
        }

        //当队列长度大于1的时候持续进行
        while(queue.size() > 1) {
            for(var i = 0; i < num; i++) {

                //重新生成队列
                queue.enqueue(queue.dequeue());
            }

            //移除的元素
            queue.dequeue();
        }

        return queue.dequeue();
    }

    //判断是否为cmd、amd或window
    if(typeof exports == "object") {
        module.exports = LoopQueue;
    } else if(typeof define == "function" && define.amd) {
        define([], function() {
            return LoopQueue;
        })
    } else {
        win.LoopQueue = LoopQueue;
    }
})(window, document);