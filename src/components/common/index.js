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
  timeout: 10000,
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

var Get = _axios.get;
var Post = readProd || (process.env.NODE_ENV === 'production') ? _axios.post : _axios.get;
var Delete = _axios.delete;

var getFieldAdapter =  (firstAdapter, secondAdapter) => {
  /* console.log(Object.assign(FIELD_ADAPTER[firstAdapter].systemAdapter, FIELD_ADAPTER[firstAdapter][secondAdapter])); */
  return Object.assign(FIELD_ADAPTER[firstAdapter].systemAdapter, FIELD_ADAPTER[firstAdapter][secondAdapter]);
}

export { Get, Post, Delete, DrawImage, ValidateRules, CreateCode, vv, CookieUtils, _axios, Token, toOtherPage, getFieldAdapter };


/* window.addEventListener('storage', function (e) {
  if (e.key == 'token') {
    window.location.reload();
  }
}) */
