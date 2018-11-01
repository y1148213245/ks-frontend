/**
 * Created by zhu.ly on 2017/8/30.
 * edit by song on 2018/1/4
 */
//获取cookie、
export default {
  getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
      return (arr[2]);
    else
      return null;
  },

  //设置cookie,增加到vue实例方便全局调用
  setCookie(c_name, value, expiredays, domain) {
    let d = new Date();
    d.setTime(d.getTime() + (expiredays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    let cookie = c_name + "=" + value + "; " + expires
    if (domain) {
      cookie += "; domain=" + domain + "; path = /";
    }
    document.cookie = cookie;
  },

  //删除cookie
  delCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = this.getCookie(name);
    if (cval != null)
      document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
  }
}
