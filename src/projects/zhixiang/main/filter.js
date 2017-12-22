import Vue from 'vue';
// 注册
Vue.filter('not-available', function (value) {
  // 返回处理后的值
  if(!value){
    return '暂无';
  }
  return value;
})
