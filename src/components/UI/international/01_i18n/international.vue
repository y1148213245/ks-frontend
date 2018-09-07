/*
 * @Author: song 
 * @Date: 2018-09-03 15:26:00 
 * @Last Modified by: song
 * @Last Modified time: 2018-09-04 19:26:24
 * 国际化组件
 */
 <template>
  <div class="ui_international_01">
    <span class="ui_international_01_langs" v-for="(lang, index) in langsObj" :key="index" @click="toggleLangs(lang)" :class="{activeLangs: activeIndex == lang.order}">
      <a class="ui_international_01_langs_a" v-text="lang.name"></a>
    </span>
  </div>
</template>
 
 <script>
import PROJECT_CONFIG from 'projectConfig';
import Vue from 'vue';
export default {
  name: 'ui_international_01',
  props: ['namespace', 'modulename'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      activeIndex: 0, // 选中高亮
      i18nObj: null,
    };
  },

  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].ui_international.ui_international_01[this.modulename];
    this.langsObj = this.CONFIG.langsObj;
    this.i18nObj = JSON.parse(window.localStorage.getItem('i18n')) || {
      langs: 'cn',
      activeIndex: 0,
      hrefTag: ''
    };
    this.activeIndex = this.i18nObj.activeIndex;
  },

  methods: {
    toggleLangs (item) { // 切换语种 将国际化信息存入浏览器
      var i18n = {
        langs: item.lang,
        activeIndex: item.order,
        hrefTag: item.href
      };
      window.localStorage.setItem('i18n', JSON.stringify(i18n));
      let curUrl = window.location.href; // 完整地址
      let tempHtml = curUrl.substring((curUrl.substring(0, curUrl.indexOf('html'))).lastIndexOf('/'), curUrl.indexOf('html') - 1); //  找到/pages/xxx.html 中的 xxx
      var curHtml = this.i18nObj.langs == 'cn' ? tempHtml : tempHtml.replace(this.i18nObj.hrefTag, '');
      let newUrl = curUrl.replace(tempHtml, curHtml + item.href);
      window.open(newUrl, '_self');
    }
  }

}
</script>
<style>
.ui_international_01 .ui_international_01_langs_a {
  cursor: pointer;
}

.ui_international_01 .activeLangs a {
  color: #5fbdf9;
}
</style>
