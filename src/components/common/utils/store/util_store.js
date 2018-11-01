/*
 * @Author: yan.chaoming
 * @Date: 2017-12-26 09:23:33
 * @Last Modified by: yancm
 * @Last Modified time: 2018-11-01 14:13:15
 */
import * as interfaces from "./interfaces"
import { Get, Post, _axios} from "@common";
import axios from 'axios';

let state = {
	currentTime: null
};

let getters = {
	[interfaces.GET_CURRENT_TIME]: state => state.currentTime
};

let mutations = {
	[interfaces.GET_CURRENT_TIME]: (state, currentTime) => {
		state.currentTime = currentTime;
	}
};

let actions = {
	[interfaces.GET_CURRENT_TIME]({ commit }, params) {
		
		return new Promise(function (resolve, reject) {
			// 获取response header信息
			let xmlhttp = null;
			if (window.XMLHttpRequest) {
				// code for Firefox, Mozilla, IE7, etc.
				xmlhttp = new XMLHttpRequest();
			} else if (window.ActiveXObject) {
				// code for IE6, IE5
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			if (xmlhttp != null) {
				xmlhttp.onreadystatechange = function () {
					if (xmlhttp.readyState == 4) {
						// 4 = "loaded"
						if (xmlhttp.status == 200) {
							// 200 = "OK
							let date = new Date(xmlhttp.getResponseHeader('Date')).getTime()
							commit(interfaces.GET_CURRENT_TIME, date);
							resolve(date)
						} else {
							reject("Problem retrieving data:" + xmlhttp.statusText)
							console.log("Problem retrieving data:" + xmlhttp.statusText);
						}
					}
				};
				xmlhttp.open("GET", document.location.href, true);
				xmlhttp.send(null);
			} else {
				reject("Your browser does not support XMLHTTP.")
				console.log("Your browser does not support XMLHTTP.");
			}
		})
	}
};

export default {
	namespaced: true,
	name: "util",
	state,
	getters,
	actions,
	mutations
};
