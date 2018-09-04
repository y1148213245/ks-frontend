/*
 * @Author: song 
 * @Date: 2018-09-03 15:26:00 
 * @Last Modified by: song
 * @Last Modified time: 2018-09-04 13:46:17
 * 国际化组件
 */
 <template>
  <div class="ui_international_01">
    <span class="ui_international_01_langs" v-for="(lang, index) in langsObj" :key="index" @click="toggleLangs(lang)" :class="{activeLangs: activeIndex == index}">
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
    };
  },

  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].ui_international.ui_international_01[this.modulename];
    this.langsObj = this.CONFIG.langsObj;
    var i18nObj = JSON.parse(window.localStorage.getItem('i18n')) || null;
    this.activeIndex = i18nObj && i18nObj.activeIndex ? i18nObj.activeIndex : 0;
  },

  methods: {
    toggleLangs (item) { // 切换语种 将国际化信息存入浏览器
      var i18n = {
        langs: item.lang,
        activeIndex: item.order
      }
      window.localStorage.setItem('i18n', JSON.stringify(i18n));
      window.open(item.href, '_self');
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
