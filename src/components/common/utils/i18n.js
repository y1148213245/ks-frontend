import Vue from "vue"
import locale from 'element-ui/lib/locale'
import VueI18n from "vue-i18n"
import messages from "../langs"

Vue.use(VueI18n)

var i18nObj = JSON.parse(window.localStorage.getItem('i18n')) || null;

const i18n = new VueI18n({
  locale: i18nObj && i18nObj.langs ? i18nObj.langs : 'cn',
  messages
})

locale.i18n((key, value) => i18n.t(key, value)) //为了实现element插件的多语言切换



export default i18n