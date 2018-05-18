/**
 * Created by song 2018/5/9
 * 跳转页面 去详情、去更多、去列表
 * 复用性高 抽离出来
 */
var toOtherPage = function(_this, item, TO_CONFIG) {
  var vthis = _this
  let config = TO_CONFIG;
  let url = config.url + '?';
  for (const key in config.dataKeys) {
    const element = config.dataKeys[key];
    url += key + '=' + item[vthis.keys[element]] + '&';
  }
  for (const key in config.fixedKeys) {
    const element = config.fixedKeys[key];
    url += key + '=' + element + '&';
  }
  url = url.substring(0, url.length - 1);
  return url;
}

export default toOtherPage;
