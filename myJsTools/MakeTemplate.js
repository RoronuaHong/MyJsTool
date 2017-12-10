;(function(win, doc) {
    /**
     * @description 输出定义模板
     * @author slim。
     * @date 2017.12.10
     */
    var makeTemplate = function(text, arrays, clas, label, colorArray, colors) {
        var html = text,
            newHtml = "",
            con = doc.querySelector(clas);

        // console.log(text);

        for(var i = 0; i < html.length; i++) {
            for(var j = 0; j < arrays.length; j++) {
                if(html[i].indexOf(arrays[j]) > -1) {
                    newHtml += html[i] + "<br>";
                    i++;
                    break;
                }
            }

            html[i] && (newHtml += html[i]);
        }

        for(var i = 0; i < colorArray.length; i++) {
            if(newHtml.indexOf(colorArray[i]) > -1) {
                newHtml = newHtml.replace(colorArray[i], "<" + label + " style='color: " + colors + ";'>" + colorArray[i] + "</span>");
                // console.log(typeof newHtml);
            }
        }

        con.textContent = newHtml.toString();
    }

    if(typeof module == "object") {
        module.exports = makeTemplate;
    } else if(typeof define == "function" && define.amd) {
        define([], function() {
            return makeTemplate;
        })
    } else {
        win.makeTemplate = makeTemplate;
    }
})(window, document);
