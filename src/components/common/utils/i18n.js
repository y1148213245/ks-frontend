import Vue from "vue"
import locale from 'element-ui/lib/locale'
import VueI18n from "vue-i18n"
import messages from "../langs"

var i18n = {};
if (CONFIG && CONFIG.LANGS_CONFIG) {
  Vue.use(VueI18n)
  let curUrl = window.location.href; // 完整地址
  let tempHtml = curUrl.substring((curUrl.substring(0, curUrl.indexOf('html'))).lastIndexOf('/'), curUrl.indexOf('html') - 1); //  找到/pages/xxx.html 中的 xxx
  var tempHrefTag = tempHtml.indexOf('_') == -1 ? '' : tempHtml.substring(tempHtml.indexOf('_'), tempHtml.length); // 取出hrefTag 朝鲜语：'_k'  中文：'' 置为default
  var hrefTag = tempHrefTag ? tempHrefTag : 'default'; // langsConfig的key
  window.localStorage.setItem('i18n', JSON.stringify(CONFIG.LANGS_CONFIG[hrefTag])); // 语种的配置根据页面来定

  // var i18nObj = JSON.parse(window.localStorage.getItem('i18n')) || null;

  i18n = new VueI18n({
    locale: CONFIG.LANGS_CONFIG && CONFIG.LANGS_CONFIG[hrefTag] && CONFIG.LANGS_CONFIG[hrefTag].lang ? CONFIG.LANGS_CONFIG[hrefTag].lang : 'cn',
    messages
  })
  locale.i18n((key, value) => i18n.t(key, value)) //为了实现element插件的多语言切换
}
export default i18n
