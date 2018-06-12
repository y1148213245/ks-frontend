/* 
*url String 地址
*params Object 参数
* */
var joinParams = (url, params) => {
  if (Object.keys(params).length > 0) {
    if (url.match(/[?]/) == null) {
      url += '?';
    }
    url = url.replace(/&$/, "");
    for (const key in params) {
      const element = params[key];
      url += key + '=' + element + '&'
    }
    return url.replace(/&$/, "")
  }
  return url
}
export {
  joinParams
}
