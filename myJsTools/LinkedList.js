;(function(win, doc) {
    var Node = function(element) {
        this.element = element;
        this.next = null;
    }

    var length = 0;
    var head = null;

    this.append = function(element) {

        //新增链表元素
        var node = new Node(element),
            current;

        //列表中的第一个节点
        if(head === null) {
            head = node;
        } else {
            current = head;

            //循环列表，直到找到最后一项元素
            while(!!current.next) {
                current = current.next;
            }

            //找到最后一项，将其next赋为node，建立链接
            current.next = node;
        }

        //更新列表的长度
        length++;
    }

    this.insert = function(position, element) {

    }
})(window, document);
