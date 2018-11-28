<!-- 分享列表组件 Created by zong 2018/06/1 -->
<template>
  <div class="ui_share_01">
    <div class="bdsharebuttonbox" v-if="CONFIG && shareLists">
      <span v-for="(item, index) in shareLists" :key="index">
        <a v-bind:class="item.class" :data-cmd="item.cmd" :title="item.title"></a>
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
  beforeCreate(){
    window._bd_share_config = "";
  },
  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].share.ui_share_01[this.modulename];
    this.shareLists = this.CONFIG && this.CONFIG.shareLists;
    // this.shareScript();

  },

  mounted () {
    this.$nextTick(() => {
      window._bd_share_config = {
        common : {
          bdUrl : ((window.location.href).indexOf("resType")==-1) ? window.location.href.split('&')[0] : (window.location.href.split('&')[0]+'&'+window.location.href.split('&')[1]),
        },
        share : {
          "bdSize" : 16,
        }
      }
      // 注意页面中不能出现多个bdsharebuttonbox类 否则会出现点击出现多个分享
      let len = document.getElementsByClassName("bdsharebuttonbox")[0].length;
      if(len != 0 ){
        document.body.appendChild(document.createElement('script')).src =
        'http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=' + ~(-new Date() / 36e5);
        console.log('share init')
      }
      
    })
  },

  methods: {
    shareScript () {
      window.onload=function (){
      document.getElementsByClassName("bdsharebuttonbox")[0].appendChild(document.createElement('script')).src =
        'http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=' + ~(-new Date() / 36e5);
      }
    },
    // 一下代码会导致点击一次，弹出两个分享页面，因此注释掉
    // console () {
    //   this.url = window.location.href;
    //   console.log(this.url.length)
    // }
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


