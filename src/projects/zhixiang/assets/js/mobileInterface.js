/*
 *html与移动设备交互接口
 */
var IOSinterfaceStr = "/FounderIosInterfaceContentParameter=";//IOS接口匹配字符串
/*
 * 获取页面参数    $.request.queryString["name"]取值
 */
$.request = (function () { 
    var apiMap = {}; 
    function request(queryStr) { 
        var api = {}; 
        if (apiMap[queryStr]) { return apiMap[queryStr]; } 
        api.queryString = (function () { 
            var urlParams = {}; 
            var e, 
            d = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); }, 
            q = queryStr.substring(queryStr.indexOf('?') + 1), 
            r = /([^&=]+)=?([^&]*)/g; 
            while (e = r.exec(q))     urlParams[d(e[1])] = d(e[2]);
            return urlParams; 
        })(); 
        api.getUrl = function () { 
            var url = queryStr.substring(0, queryStr.indexOf('?') + 1); 
            for (var p in api.queryString) { url += p + '=' + api.queryString[p] + "&";        } 
            if (url.lastIndexOf('&') == url.length - 1) { return url.substring(0, url.lastIndexOf('&')); } 
            return url; 
        } 
        apiMap[queryStr] = api; 
        return api; 
    } 
    $.extend(request, request(window.location.href)); 
    return request; 
})(); 

/*
* 智能机浏览器版本信息:
**/
var browser = {
	versions : function() {
		var u = navigator.userAgent, app = navigator.appVersion;
		return {// 移动终端浏览器版本信息
			trident : u.indexOf('Trident') > -1, // IE内核
			presto : u.indexOf('Presto') > -1, // opera内核
			webKit : u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
			gecko : u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, // 火狐内核
			mobile : !!u.match(/AppleWebKit.*Mobile.*/)
					|| !!u.match(/AppleWebKit/), // 是否为移动终端
			ios : !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
			android : u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或者uc浏览器
			iPhone : u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, // 是否为iPhone或者QQHD浏览器
			iPad : u.indexOf('iPad') > -1, // 是否iPad
			webApp : u.indexOf('Safari') == -1// 是否web应该程序，没有头部与底部
		};
	}(),
	language : (navigator.browserLanguage || navigator.language).toLowerCase()
};
var browserType = "else";
if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
	browserType = "IOS";
	if($.request.queryString["app"]==1){
		browserType = "IOSapp";
	}
} else if (browser.versions.android) {
	browserType = "Android";
	if($.request.queryString["app"]==1){
		browserType = "Androidapp";
	}
} 
 
// document.writeln("语言版本: " + browser.language);
// document.writeln(" 是否为移动终端: " + browser.versions.mobile);
// document.writeln(" ios终端: " + browser.versions.ios);
// document.writeln(" android终端: " + browser.versions.android);
// document.writeln(" 是否为iPhone: " + browser.versions.iPhone);
// document.writeln(" 是否iPad: " + browser.versions.iPad);
// document.writeln(navigator.userAgent);


/**
 * 给原生APP方法传参数
 * @param str
 */
function sendMsg(str){
//	alert(browserType);
	if(browserType=="Androidapp"){
		window.androidJsInterface.sendToAndroid(str);
	}else if(browserType=="IOSapp"){
		sendToIOS(str);
	}
}

/**
 * 传送字符串到IOS
 * @param str
 */
function sendToIOS(str){
	window.location = IOSinterfaceStr+str;
}


function appbook(bookid){
	alert();
   sendMsg("{\"bookid\":\""+bookid+"\"}");
}

function appbook1(bookid){
   sendMsg("{\"bookid\":\""+bookid+"\",\"type\":\"1\"}");
}

function shoppingcart(){
	sendMsg("{\"shoppingcart\":\"1\"}");
}

function appcid(cid){
   sendMsg("{\"cid\":\""+cid+"\"}");
}
