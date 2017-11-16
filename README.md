JavaScript工具库
===========================================


### 1.事件兼容EventUtil:

		1.getEvent: 获取event对象
		2.getTarget: 获取event.target对象
		3.preventDefault: 阻止默认事件
		4.stopPropagation: 阻止冒泡事件
		5.addEvent: 添加事件
		6.removeEvent: 移除事件
	
### 2.获取cookie的CookieUtil:
		1.get: 获取cookie
		2.set: 设置cookie
		3.unset: 删除cookie
		
### 3.获取子cookie的SubCookieUtil:
		1.getAll: 获取所有子cookie
		2.get: 获取其中一个cookie
		3.setAll: 设置所有子cookie
		4.set: 设置一个子cookie
		5.unsetAll: 删除全部子cookie
		6.unset: 删除一个子cookie
		
### 4.检测浏览器类型UserAgentUtil:
		1.isAndroid: 设备是否为Android
		2.isiPhone: 设备是否为iPhone
		3.isiPad: 设备是否为iPad
		4.isiOS: 设备是否为iOS终端
		5.isMobile: 设备是否为移动端
		6.isWebApp: 是否为web应用程序
		7.isWx: 是否为微信
		8.isQQ: 是否为QQ
		9.isIE: IE内核
		10.isOpera: Opera内核
		11.isWebkit: 苹果、谷歌内核
		12.isFirefox: 火狐内核

### 5.函数的节流与去抖ThrottleUtil:
        1.debounce: 去抖
        2.throttle: 节流

### 6.获取字符串GetQueryString:
        1.get(name): 根据name获取value
        2.getAll: 获取全部字符串，返回该对象

### 7.延迟加载图片lazyLoad:
        1.init: 返回一个函数，判断元素是否在可视区域内，需要事件触发。

### 8.根据元素属性值返回相应标签集合GetElementByAttribute:
        1.init(attrs, attrValue, tagName): 传入属性，属性值，标签名返回相应标签集合

### 9.数组去重RepeatArray:
        1.doubleLoop: 利用双重循环去重
        2.objectRepeat: 利用对象唯一性去重
        3.indexOfFun: 利用filter和indexOf去重
        4.fromFun: 利用ES6的Array.from和new Set()去重
        5.spliceRepeat: 利用splice去重

### 10.时间戳工具TimestampUtil:
        1.getAll({
            times: 1500045453564,       //传入13位毫秒数
            separator: "-",             //默认为"-"样式进行分割
            typeofs: ""                 //默认为全部输出，可选"date"和"year"
        });

        2.get(timer): 获取年月日时分秒
        3.lastTime(timer, boolean):
            1.timer: 倒计时的秒数
            2.boolean: true为秒数, false为毫秒数

### 11.请求数据Ajax:
        1.Ajax({
            hosts: "http://www.xxx.com",        //请求的域名
            url: "/goods!getGoodsList.do",      //请求的pathname
            xhrFields: {
                withCredentials: false           //是否允许携带cookie，默认为false
            },
            type: "get",                        //请求方式"GET"和"POST",默认为"GET"
            dataType: "json",                   //请求的类型，默认为"json"
            async: false,                       //是否同步，默认为false
            data: {                             //请求的数据
              tag_id: 01
            },
            success: function(data) {           //成功的回调
              console.log(JSON.parse(data));
            },
            error: function(data) {             //失败的回调
              console.log(data);
            }
        });

### 12.跨域请求JSONP:
    1.JSONP({
        url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",    //请求的域名
        data: {                                                         //请求的数据
          wd: "神秘海域"
        },
        jsonp: "cb",                                                    //参数的名称
        callback: "responeMethod",                                      //回调的方法名
        success: function(data) {                                       //成功的回调
            console.log(data);
        },
        error: function(data) {                                         //失败的回调
            console.log(data);
        }
    });

### 13.常用正则匹配CommonRegExp:
        1.isTelPhone(string): 检测手机号
        2.isMail(string): 检测邮箱
        3.isIdCard(string): 检测身份证
        4.isChinese(string): 检测中文
        5.isUser(string, min, max): 检测用户名
        6.isPwd(string, min, max): 检测密码

### 14.倒计时CountDownUtil:
        1.init(ele, eleText, otherText, times, duraction):
            ele: 标签元素
            eleText: 倒计时时的文本内容
            otherText: 倒计时结束时的文本内容
            times: 倒计时的时间
            duraction: 倒计时的间隔时间

### 15.倒计时WindowUtil:
        1.ViewPort.getWidth: 获取浏览器的宽度
        2.ViewPort.getHeight: 获取浏览器的高度

### 16.实现栈Stack:
    1.push(ele): 添加元素
    2.pop: 移除栈顶元素
    3.peek: 查看栈顶元素
    4.isEmpty: 栈是否为空
    5.size: 查看栈的大小
    6.clear: 清空栈
    7.print: 查看栈内元素

### 17.实现十进制转换其他进制baseConverter:
    1.baseConverter(decNumber, number):

### 16.实现队列Queue:
    1.enqueue(ele): 添加元素
    2.dequeue: 移除队首元素
    3.front: 查看队首元素
    4.isEmpty: 队列是否为空
    5.size: 查看队列的大小
    6.clear: 清空队列
    7.print: 查看队列元素

### 17.实现优先队列PriorityQueue:
    1.enqueue(element, priority, bools):
     element: 添加的元素
     priority: 优先级
     bools: true 由小到大排序 false 由大到小排序

### 18.实现链表LinkedList:
    1.append(element): 添加元素

### 19.判断对象是否为函数实例InstanceOf:
    1.init(object, constructor):
     object: 实例对象
     constructor: 构造函数

### 20.打印字功能TypeWriter:
    1.init(ele):
     ele: 元素id

### 21.数组与数组元素的对比ArrayFunc:
    1.arrayEqual(oldarr, newarr):
        判断数组是否全等
    2.arrayItemEqual(oldarr, newarr):
        两个数字数组的元素是否相等
    3.arrayInclude(oldarr, newarr):
        newarr是否是oldarr的子集
    4.findPublicItem(oldarr, newarr):
        找到两个数组的公共元素
