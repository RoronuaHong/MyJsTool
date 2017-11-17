;(function(win, doc) {
    var ArrangeArray = function(arr) {
        function arrange(arr) {
            var results = [];

            (function fn(arrs, result) {
                if(arrs.length == 0) {
                    results.push(result);
                } else {
                    for(var i = 0; i < arrs.length; i++) {
                        fn(arrs.slice(0, i).concat(arrs.slice(i + 1)), result.concat(arrs[i]));
                    }
                }
            })(arr, []);

            return results;
        }

        return arrange(arr);
    }

    if(typeof exports == "object") {
        module.exports = ArrangeArray;
    } else if(typeof define == "function" && define.amd) {
        define([], function() {
            return ArrangeArray;
        });
    } else {
        win.ArrangeArray = ArrangeArray;
    }
})(window, document);
