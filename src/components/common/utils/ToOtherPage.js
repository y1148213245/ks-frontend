/**
 * Created by song 2018/5/9
 * 跳转页面 去详情、去更多、去列表
 * 复用性高 抽离出来
 */
var toOtherPage = function(item, TO_CONFIG, keys) {
  let config = TO_CONFIG;
  let url = config.url + '?';
  for (const key in config.dataKeys) {
    const element = config.dataKeys[key];
    //如果是属性的值是数组，则取第一项
    if(item[keys[element]] instanceof Array){
      url += key + '=' + item[keys[element]][0] + '&';
    }else{
      url += key + '=' + item[keys[element]] + '&';
    }
  }
  for (const key in config.fixedKeys) {
    const element = config.fixedKeys[key];
    url += key + '=' + element + '&';
  }
  url = url.substring(0, url.length - 1);
  return url;
}

export default toOtherPage;
