;(function(win, doc) {
    /**
     * @description 事件兼容方案
     * @type {{getEvent: getEvent, getTarget: getTarget, preventDefault: preventDefault, stopPropagation: stopPropagation, addEvent: addEvent, removeEvent: removeEvent}}
     * @author slim。
     * @date 2017.07.05
     */
    var EventUtil = {

        //获取事件对象
        getEvent: function(event) {
            return event ? event : window.event;
        },
        //获取事件对象目标
        getTarget: function(event) {
            return event.target || event.srcElement;
        },
        //阻止默认事件
        preventDefault: function(event) {
            if(event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        },
        //阻止冒泡事件
        stopPropagation: function(event) {
            if(event.stopPropagation) {
                event.stopPropagation();
            } else {
                event.cancelBubble = true;
            }
        },
        //添加事件
        addEvent: function(ele, type, fn) {
            if(ele.addEventListener) {
                ele.addEventListener(type, fn, false);
            } else if(ele.attchEvent) {
                ele.attachEvent("on" + type, fn);
            } else {
                ele["on" + type] = fn;
            }
        },
        //移除事件
        removeEvent: function(ele, type, fn) {
            if (ele.removeEventListener) {
                ele.removeEventListener(type, fn, false);
            } else if (ele.detachEvent) {
                ele.detachEvent("on" + type, fn);
            } else {
                ele["on" + type] = null;
            }
        }
    }

    //兼容amd、cmd和window
    if(typeof exports == "object") {
        module.exports = EventUtil;
    } else if(typeof define == "function" && define.amd) {
        define([], function() {
            return EventUtil;
        });
    } else {
        win.EventUtil = EventUtil;
    }
})(window, document, undefined);
