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
import {FIELD_ADAPTER} from "./utils/FieldAdapter";
import toOtherPage from "./utils/ToOtherPage";
import mobileLoading from "./utils/MobileLoading";

try {
	if (typeof $_$.IS_DISABLE != "undefined" && $_$.IS_DISABLE) { // 站点被禁用
		var targetUrl = "../pages/disablepage.html";
		if (window.location.href.indexOf('disablepage.html') === -1) { // 不在重定向页面
			window.location.href = targetUrl;
		}
	}
} catch (error) {
	console.log(error);
}
var _axios = axios.create({
  timeout: 40000,
  withCredentials: true
});

var Token = function getToken() {
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

_axios.defaults.headers.token = Token();

// 添加请求拦截器
_axios.interceptors.request.use(function (config) {
  // console.log(config);
  // 在发送请求之前做些什么
  if (config.method == 'get') {
    if (config.params) {
      /* axios get params方式传参 中文已进行编码 */
      /* for (const key in config.params) {
        if (config.params.hasOwnProperty(key)) {
          // config.params[key] = encodeURI(config.params[key]);
        }
      } */
      config.params.v_stamp = new Date().getTime();
    }else{
      config.params = {v_stamp:new Date().getTime()}
    }
    config.url =  encodeURI(config.url)
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


var Get = _axios.get;
var Post = readProd || (process.env.NODE_ENV === 'production') ? _axios.post : _axios.get;
var Delete = _axios.delete;

var getFieldAdapter =  (firstAdapter, secondAdapter) => {
  /* console.log(Object.assign(FIELD_ADAPTER[firstAdapter].systemAdapter, FIELD_ADAPTER[firstAdapter][secondAdapter])); */
  return Object.assign({}, FIELD_ADAPTER[firstAdapter].systemAdapter, FIELD_ADAPTER[firstAdapter][secondAdapter]);
}

export {
  Get,
  Post,
  Delete,
  DrawImage,
  ValidateRules,
  CreateCode,
  vv,
  CookieUtils,
  _axios,
  Token,
  toOtherPage,
  getFieldAdapter,
  mobileLoading
};



/* window.addEventListener('storage', function (e) {
  if (e.key == 'token') {
    window.location.reload();
  }
}) */
