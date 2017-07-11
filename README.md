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