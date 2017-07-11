;(function(win, doc) {

    /**
     * @attrs 元素名称
     * @attrValue 元素值
     * @tagName 标签名
     * @type {{init: init}}
     * @author slim。
     * @date 2017.07.12
     */
    var GetElementByAttribute = {
        init: function(attrs, attrValue, tagName) {
            var newItem = [];

            //通过标签获取所有元素
            var item = document.getElementsByTagName(tagName);


            //判断该元素的className是否符合
            for(var i = 0; i < item.length; i++) {

                //判断该属性值是否存在空格
                if(!!item[i].getAttribute(attrs) && item[i].getAttribute(attrs).indexOf(attrValue) > -1) {
                    newItem.push(item[i]);
                }
            }
            return newItem;
        }
    }

    //判断是否为cmd、amd或window
    if(typeof exports == "object") {
        return module.exports;
    } else if(typeof define == "function" && define.amd) {
        define([], function() {
            return GetElementByAttribute;
        });
    } else {
        win.GetElementByAttribute = GetElementByAttribute;
    }
})(window, document);