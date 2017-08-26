;(function(win, doc) {
    /**
     * @description 实例对象与函数的关系
     * @type {{init: init}}
     * @author slim。
     * @date 2017.07.20
     */
    var InstanceOf = {
        init: function(object, constructor) {

            //设置对象为当前对象的指针所指向的对象
            object = object.__proto__;

            //当object不是指向空时，进行循环
            while(object !== null) {

                //判断是否指向为构造函数的原型对象
                if(object == constructor.prototype) {
                    return true;
                }

                //判断是否指向xml
                if(typeof object == "xml") {
                    return constructor.prototype == XML.prototype;
                }

                //继续赋值object的原型指针
                object = object.__proto__;
            }

            return false;
        }
    }

    //判断是否为cmd、amd或window
    if(typeof exports == "object") {
        module.exports == InstanceOf;
    } else if(typeof define == "function" && define.amd) {
        define([], function() {
            return InstanceOf;
        });
    } else {
        win.InstanceOf = InstanceOf;
    }
})(window, document);