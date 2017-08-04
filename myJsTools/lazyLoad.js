;(function(win, doc) {

    /**
     * @description 延迟加载图片
     * @type {{getItem: getItem, isVisible: isVisible, init: init}}
     * @author slim。
     * @date 2017.07.10
     */
    var lazyLoad = {
        /*获取所有img元素*/
        getItem: function() {
            var imgList = doc.getElementsByTagName("img");
            var newimgList = [];

            for(var i = 0; i < imgList.length; i++) {
                if(!!imgList[i].getAttribute("data-src")) {
                    newimgList[i] = imgList[i];
                }
            }
            return newimgList;
        },
        /*判断元素是否在视口*/
        isVisible: function() {
            var context = this;

            //通过闭包保留this的指向
            return function() {

                //获取需要lazyLoad的元素
                var dom = context.getItem();

                //判断元素是否在可视窗口位置
                for(var i = 0; i < dom.length; i++) {

                    //获取可视区域的宽高
                    var vWidth = win.innerWidth || win.documentElement.clientWidth;
                    var vHeight = win.innerHeight || win.documentElement.clientHeight;
                    var inView = dom[i].getBoundingClientRect().bottom >= 0 && dom[i].getBoundingClientRect().top <= win.innerHeight && dom[i].getBoundingClientRect().right >= 0 && dom[i].getBoundingClientRect().left <= win.innerWidth;

                    //如果在当前视口，则替换图片
                    if(!!inView) {
                        dom[i].src = dom[i].getAttribute("data-src");
                    }
                }
            }

        },
        init: function() {
            return this.isVisible()();
        }
    }

    //判断是否为cmd、amd或window
    if(typeof exports == "object") {
        module.export = lazyLoad;
    } else if(typeof define == "function" && define.amd) {
        define([], function() {
            return lazyLoad;
        });
    } else {
        win.lazyLoad = lazyLoad;
    }
})(window, document);
