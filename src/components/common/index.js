/**
 * Created by codingnuts on 2017/12/19.
 */
import axios from 'axios';
import readProd from "@project/config/index.js";
import ValidateRules from "./utils/ValidateRules";
import vv from "./utils/vv";
import DrawImage from "./utils/DrawImage";
import CreateCode from "./utils/CreateCode";
import CookieUtils from "./utils/CookieUtils";

try {
	if (typeof IS_DISABLE != "undefined" && IS_DISABLE) { // 站点被禁用
		var targetUrl = "../pages/disablepage.html";
		if (window.location.href.indexOf('disablepage.html') === -1) { // 不在重定向页面
			window.location.href = targetUrl;
		}
	}
} catch (error) {
	console.log(error);
}

var _axios = axios.create({
  timeout: 10000,
  withCredentials: true
});
_axios.defaults.headers.token = getToken();

var Get = _axios.get;
var Post = readProd || (process.env.NODE_ENV === 'production') ? _axios.post : _axios.get;
var Delete = _axios.delete;


export { Get, Post, Delete, DrawImage, ValidateRules, CreateCode, vv, CookieUtils, _axios };

function getToken() {
  let session = sessionStorage;
  let local = localStorage;

  let token = session.getItem('token');
  if (!token) {
    token = local.getItem('token');
    if (!token) {
      token = '';
    }
  }
  return token;
}

window.addEventListener('storage', function (e) {
  if (e.key == 'token') {
    window.location.reload();
  }
})
