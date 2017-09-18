(function(win, doc) {
    /**
     * @description 循
     * @author slim。
     * @date 2017.09.18
     */
    var Sort = {
        /*普通洗牌算法*/
        shuffle: function(arr) {
            var len = arr.length,
                index,
                temp,
                i;

            //设置相应的随机数进行交换
            for(i = 1; i < len; i++) {
                index = Math.floor(Math.random() * (len - 1)) + 1;

                //判断随机是否与i相同，不相同则交换
                if(index != i) {
                    temp = arr[i];
                    arr[i] = arr[index];
                    arr[index] = temp;
                }
            }
            return arr;
        },
        /*余数洗牌算法*/
        remainedShuffle: function(arr) {
            var len = arr.length,
                index,
                temp,
                i;

            for(i = len - 1; i > 0; i--) {
                index = Math.floor(Math.random() * i) % (i + 1);

                //进行交换
                temp = arr[i];
                arr[i] = arr[index];
                arr[index] = temp;
            }

            return arr;
        }
    }

    //判断是否为CMD、AMD或window
    if(typeof exports == "object") {
        module.exports = Sort;
    } else if(typeof define == "function" && define.amd) {
        define([], function() {
            return Sort;
        });
    } else {
        window.Sort = Sort;
    }
})(window, document);
