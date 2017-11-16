;(function(win, doc) {
    /**
     * @description 数组与数组元素的对比
     * @author slim。
     * @date 2017.11.16
     */
    var ArrayFunc = (function(oldarr, newarr) {
        return {
            /*判断数组是否全等*/
            arrayEqual: function(oldarr, newarr) {
                if(Array.isArray(oldarr) && Array.isArray(newarr)) {
                    if(oldarr === newarr) {
                        return true;
                    }

                    if(oldarr.length !== newarr.length) {
                        return false;
                    }

                    for(var i = 0; i < arr1.length; i++) {
                        if(oldarr[i] !== newarr[i]) {
                            return false;
                        }
                    }
                    return true;
                } else {
                    throw new Error("The arguments isn't Array.");
                }
            },
            /*两个数字数组的元素是否相等*/
            arrayItemEqual: function(oldarr, newarr) {
                //先进行排序
                oldarr.sort();
                newarr.sort();
                return this.arrayEqual(oldarr, newarr);
            },
            /*数组2是否是数组1的子集*/
            arrayInclude: function(oldarr, newarr) {
                var indexs = 0;

                for(var i = 0; i < newarr.length; i++) {
                    for(var j = 0; j < oldarr.length; j++) {
                        if(newarr[i] === oldarr[j]) {
                            indexs++;
                        }
                    }
                }

                if(indexs === newarr.length) {
                    return true;
                } else {
                    return false;
                }
            },
            /*找到两个数组的公共元素*/
            findPublicItem: function(oldarr, newarr) {
                var obj = {},
                    arrs = [];

                for(var i = 0; i < newarr.length; i++) {
                    for(var j = 0; j < oldarr.length; j++) {
                        if(newarr[i] === oldarr[j]) {
                            if(!obj[newarr[i]]) {
                                obj[newarr[i]] = 1;
                                arrs.push(newarr[i]);
                            }
                        }
                    }
                }

                return arrs.sort();
            }
        }
    })();

    if(typeof exports == "object") {
        module.exports = ArrayFunc;
    } else if(typeof define == "function" && define.amd) {
        define([], function() {
            return ArrayFunc;
        });
    } else {
        win.ArrayFunc = ArrayFunc;
    }
})(window, document);