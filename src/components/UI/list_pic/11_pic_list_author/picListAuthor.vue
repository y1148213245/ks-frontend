<!--  -->
<template>
 <ul>
    <template v-for="(entry,index) in authorList" v-if="index < 6">
      <li :key="entry.id">
        <div class="zzzs_list_pic author_imgBox"><img onload="DrawImage(this,172,264)" class="author_img" :src="entry.information_a_picSmall" alt="暂无封面"/></div>
        <div class="txt">
          <h3><a href="javascript:void(0)" @click="toDetail(entry.id)" class="color_fff author author_title"
                  v-html="entry.information_SYS_TOPIC"></a></h3>
          <p class="zhaiyao zhaiyao_text" v-text="entry.information_a_abstract"
              :title="entry.information_a_abstract"></p>
          <p class="shu">|</p>
          <p class="detail">
            <a href="javascript:void(0)" @click="toDetail(entry.id)" class="ck_more">查看更多</a>
          </p>
        </div>
      </li>
    </template>
  </ul>
</template>

<script>
import {Post,DrawImage} from '@common';
import PROJECT_CONFIG from 'projectConfig';

export default {
  name: 'ui_list_pic_11',
  reused: true,
  props: {
    namespace:String,
  },
  data () {
    return {
      projectConfig:{},
      authorList:[],
    };
  },

  computed: {},

  created () { },

  mounted () { },

  methods: {
    initConfig(){
      this.projectConfig = PROJECT_CONFIG[this.namespace].list_pic.list_pic_11
    },
    toDetail(id){
      window.location.href = this.projectConfig.detailHref + id
    }
  }
}

</script>
<style scoped>

</style>
