// Created by song 2018/03/28
// 全局过滤器 每个过滤器简单注释一下功能

import moment from "moment";
import Vue from 'vue';


// 将时间戳转化成 YYYY-MM-DD 格式
Vue.filter('formatDateNEW', function (value) {
  if (value) {
    return moment(Number(value)).format("YYYY-MM-DD"); // 只接收Number类型
  } else {
    return '暂无日期';
  }
});

// 将时间戳转化成 YYYY年MM月DD日 hh:mm 格式
Vue.filter('formatTimeNEW', function (time) {
  if (time !== undefined && time !== '' && time !== null) {
    let date = new Date(parseInt(time));
    return formatDate(date, 'yyyy年MM月dd日 hh:mm')
  }

  function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    }
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + ''
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
      }
    }
    return fmt
  }

  function padLeftZero(str) {
    return ('00' + str).substr(str.length)
  }
});

// 价格保留两位小数  ￥xx.xx形式
Vue.filter('formatPriceNew', function (value) {
  if (value) {
    return '￥' + Number(value).toFixed(2);
  } else {
    return '￥0.00';
  }
});

 // 处理分类下书的总数 “共 xx 本” 形式
Vue.filter('formatCount', function (value) {
  if (value == null || value == undefined) { // 返回为空
    return '共 0 本';
  } else {
    return '共 ' + value + ' 本';
  }
});
