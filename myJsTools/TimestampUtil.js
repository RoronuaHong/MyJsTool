;(function(win, doc) {

    /**
     * @author slim。
     * @date 2017.07.12
     * @type {{getAll: getAll, get: get}}
     */
    var TimestampUtil = {
        getAll: function(Object) {

            //获取时间戳,判断是否为数字
            //1.时间
            //2.分隔符
            //3.需要的时间
            this.default = {
                times: Object.times || 0,
                separator: Object.separator || "-",
                typeofs: Object.typeofs || ""
            }

            //判断是否为数字, 转换为对象
            if(!!Object.times && typeof this.default.times != "object") {
                this.default.times = new Date(this.default.times);
            }

            //获取时间数组
            var timearr = [];

            timearr.push(this.default.times.getFullYear());
            timearr.push(this.default.times.getMonth() + 1);
            timearr.push(this.default.times.getDate());
            timearr.push(this.default.times.getHours());
            timearr.push(this.default.times.getMinutes());
            timearr.push(this.default.times.getSeconds());

            //通过个数显示时间
            var params = "";

            for(var i = 0; i < 6; i++) {
                params += timearr[i] + this.default.separator;
            }

            //去除掉最后一个"-"
            params = params.substring(0, params.length - 1);

            var reg = new RegExp("(\\d+)" + this.default.separator + "(\\d+)" + this.default.separator + "(\\d+)" + this.default.separator + "(\\d+)" + this.default.separator + "(\\d+)" + this.default.separator + "(\\d+)");

            //替换成需要的格式
            params = params.replace(reg, "$1-$2-$3 $4:$5:$6");

            if(this.default.typeofs.toLowerCase() == "year") {
                return params.split(" ")[0];
            }

            if(this.default.typeofs.toLowerCase() == "date") {
                return params.split(" ")[1];
            }

            return params;
        },
        get: function(timers) {
            this.timers = new Date(timers);
            this.obj = {};

            //转换时间
            this.obj["year"] = this.timers.getFullYear();
            this.obj["month"] = this.timers.getMonth() + 1;
            this.obj["date"] = this.timers.getDate();
            this.obj["hours"] = this.timers.getHours();
            this.obj["minutes"] = this.timers.getMinutes();
            this.obj["second"] = this.timers.getSeconds();

            return this.obj;
        }
    }

    //判断是否为cmd、amd或window
    if(typeof exports == "object") {
        module.exports = TimestampUtil;
    } else if(typeof define == "function" && define.amd) {
        define([], function() {
            return TimestampUtil;
        });
    } else {
        win.TimestampUtil = TimestampUtil;
    }
})(window, document);