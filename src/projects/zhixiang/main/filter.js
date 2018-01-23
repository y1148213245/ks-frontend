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
