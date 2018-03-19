import Vue from 'vue';
// 注册
Vue.filter('formatPrice', function (value) { // 处理书的价格
  if (value == null || value == 'undefined') { // 返回为空
    return '暂无价格';
  } else {
    return '￥' + value;
  }
});
