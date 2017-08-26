;(function(win, doc) {
    // var Node = function(element) {
    //     this.element = element;
    //     this.next = null;
    // }
    //
    // var length = 0;
    // var head = null;
    //
    // this.append = function(element) {
    //
    //     //新增链表元素
    //     var node = new Node(element),
    //         current;
    //
    //     //列表中的第一个节点
    //     if(head === null) {
    //         head = node;
    //     } else {
    //         current = head;
    //
    //         //循环列表，直到找到最后一项元素
    //         while(!!current.next) {
    //             current = current.next;
    //         }
    //
    //         //找到最后一项，将其next赋为node，建立链接
    //         current.next = node;
    //     }
    //
    //     //更新列表的长度
    //     length++;
    // }
    //
    // //指定位置插入元素
    // this.insert = function(position, element) {
    //
    // }

    // //指定位置移除元素
    // this.removeAt = function(position) {
    //
    //     //检查越界值
    //     if(position > -1 && position < length) {
    //         var current = head,
    //             previous,
    //             index = 0;
    //
    //         //移除第一项
    //         if(position === 0) {
    //             head = current.next;
    //         } else {
    //             while(index++ < position) {
    //                 previous = current;
    //                 current = current.next;
    //             }
    //
    //             //将previous与current的下一项链接起来: 跳过current, 从而移除它
    //             previous.next = current.next;
    //         }
    //         length--;
    //         return current.element;
    //     } else {
    //         return null;
    //     }
    // }

    //创建Node构造函数，包含element和next指针
    var Node = function(element) {
        this.element = element;
        this.next = null;
    }

    //设置长度、链表头head
    var length = 0,
        head = null;

    //新增元素
    this.append = function(element) {

        //实例化Node函数, 设置当前项
        var node = new Node(element),
            current;

        //判断head是否有元素，没有则添加
        if(head === null) {
            head = node;
        } else {
            current = head;

            //循环判断指针next是否存在元素
            while(!!current.next) {
                current = current.next;
            }

            //将值赋值给当前为null的current的指针next
            current.next = head;
        }

        //更新长度
        length++;
    }

    //删除指定位置的元素
    this.removeAt = function(position) {

        //检查越界值
        if(position > -1 && position < length) {

            //声明当前项并赋值为head，前一项，index
            var current = head,
                previous,
                index = 0;

            //判断是否是删除head
            if(position === 0) {
                current.next = head;
            } else {

                //判断是否是移除项
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }

                //将前一项previous与当前项current的后一项连接起来
                previous.next = current.next;
            }
            //长度减小
            length--;

            return current.element;
        } else {
            return null;
        }
    }
})(window, document);
