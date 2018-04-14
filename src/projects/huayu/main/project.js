/**
 * Created by codingnuts on 2018/3/6.
 */
function ScanVues (requireContext = require.context("../components", true, /\.vue$/)) {
	var map = {};
	requireContext.keys().map(requireContext).forEach(function (item) {
		if (item.default.name && item.default.reused) {
			map[item.default.name] = item.default;
		}
	});
	window.GLOBAL_PROJECT_VUES = map;
}

ScanVues();

import { _axios, Post } from "@common";

let vcookie = getCookie('token');
if (vcookie) {
	_axios.defaults.headers.token = vcookie;
	localStorage.setItem('token', vcookie)
}else{
	_axios.defaults.headers.token = '';
	localStorage.setItem('token','')
}

function getCookie (name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if (arr = document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return null;
}
// console.log(document.domain);
window.YNXH_MEMBER_EXIT = function (member, url) {
	let PHPSESSID = getCookie('PHPSESSID');
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
				// console.log(xhr.responseText);
				setCookie('token', '', -1);
				window.location.reload(true);
			} else {
				// console.log("Request was unsuccessful: " + xhr.status);
			}
		}
	};
	xhr.open('post', url, true);
	xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	xhr.send('username=' + member.loginName + '&PHPSESSID=' + PHPSESSID + '&client=2');

	function setCookie (cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
		var expires = "expires=" + d.toUTCString();
		document.cookie = cname + "=" + cvalue + "; " + expires + "; " + "domain=.ynxhbook.com; path = /";
	}

}