import Vue from 'vue';
// 注册
Vue.filter('formatPrice', function (value) { // 处理书的价格
  if (value == null || value == 'undefined') { // 返回为空
    return '暂无价格';
  } else {
    return '￥' + value;
  }
});

/* Vue.filter('formatCount', function (value) { // 处理分类下书的总数
  if (value == null || value == 'undefined') { // 返回为空
    return '共 0 本';
  } else {
    return '共 ' + value + ' 本';
  }
}); */

