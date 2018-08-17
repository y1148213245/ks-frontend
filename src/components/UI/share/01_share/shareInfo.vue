<!-- 分享列表组件 Created by zong 2018/06/1 -->
<template>
  <div class="ui_share_01">
    <div class="bdsharebuttonbox" v-if="CONFIG && shareLists">
      <span v-for="(item, index) in shareLists" :key="index">
        <a href="#" v-bind:class="item.class" :data-cmd="item.cmd" :title="item.title"></a>
      </span>
    </div>

  </div>
</template>

<script>
import PROJECT_CONFIG from "projectConfig";

export default {
  name: 'ui_share_01',
  props: ['namespace', 'modulename'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      shareLists: [],
    };
  },

  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].share.ui_share_01[this.modulename];
    this.shareLists = this.CONFIG.shareLists;
    // this.shareScript();

  },

  mounted () {
    $(document).ready(() => {
      let len = document.getElementsByClassName("bdsharebuttonbox").length;
      document.getElementsByClassName("bdsharebuttonbox")[len - 1].appendChild(document.createElement('script')).src =
        'http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=' + ~(-new Date() / 36e5);
    })
  },

  methods: {
    shareScript () {
      window.onload=function (){
      document.getElementsByClassName("bdsharebuttonbox")[0].appendChild(document.createElement('script')).src =
        'http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=' + ~(-new Date() / 36e5);
      }
    },
    console () {
      this.url = window.location.href;
      console.log(this.url.length)
    }
  }
}

// var url = window.location.href;
// if (url.length > 209){
//   url = url.substring(0,208)
// }
// window._bd_share_config = {
//   common : {
//     bdUrl : url
//   }
// }

</script>


