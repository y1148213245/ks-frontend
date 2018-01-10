import Vue from 'vue';
// 注册
Vue.filter('notAvailable', function (value) {
  // 返回处理后的值
  if(!value){
    return '暂无';
  }
  return value;
});
Vue.filter('filterFun', function (value) {
  if(value){
    return Number(value).toFixed(2);
  }else{
    return '0.00';
  }
});
Vue.filter('formatDate', function (time) {
  if(time !== undefined && time !== '' && time !== null){
    let date = new Date(parseInt(time))
    return formatDate(date, 'yyyy-MM-dd')
  }
  function formatDate (date, fmt) {
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
  function padLeftZero (str) {
    return ('00' + str).substr(str.length)
  }
});
