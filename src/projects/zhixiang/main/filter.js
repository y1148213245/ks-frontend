import Vue from 'vue';
// 注册
Vue.filter('notAvailable', function (value) {
  // 返回处理后的值
  if(!value){
    return '暂无';
  }
  return value;
});
Vue.filter('twoPoint', function (value) {
  // 返回处理后的值
  return Number(value).toFixed(2);
});
Vue.filter('cutOut', function (value) {
  // 返回处理后的值
  let result = value.length>16 ? `${value.slice(0,16)}...` : value.slice(0,16);
  return result;
});
