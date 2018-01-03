<!--  -->
<template>
 <ul>
    <template v-for="(entry,index) in list" v-if="index < 6">
      <li :key="entry.id">
        <div class="zzzs_list_pic author_imgBox"><img onload="DrawImage(this,172,264)" class="author_img" :src="entry.pub_picSmall" alt="暂无封面"/></div>
        <div class="txt">
          <h3><a href="javascript:void(0)" @click="toDetail(entry.id)" class="color_fff author author_title" v-html="entry.information_SYS_TOPIC"></a></h3>
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
import { Post } from '@common';
import PROJECT_CONFIG from 'projectConfig';

export default {
  name: 'ui_list_pic_11',
  reused: true,
  props: {
    namespace: String,
  },
  data () {
    return {
      projectConfig: {},
      list: [],
    };
  },

  computed: {},

  created () { },

  mounted () {
    this.initConfig();
    this.loadDatas();
  },

  methods: {
    initConfig () {
      this.projectConfig = PROJECT_CONFIG[this.namespace].list_pic.list_pic_11
    },
    toDetail (id) {
      window.location.href = this.projectConfig.detailHref + id
    },
    loadDatas () {
      Post(this.projectConfig.url, this.projectConfig.param).then((rep) => {
        this.list = rep.data.result;
        this.callback();
      })
    },
    callback () {
      this.$nextTick(function () {
        $(".zzzs_list ul li").find(".txt").hide().animate({ left: "172px" });
        $(".zzzs_list ul li").hover(function () {
          $(this).find(".txt").show().animate({ left: "0px" }, 400);
        }, function () {
          $(this).find(".txt").hide().animate({ left: "172px" }, 400);
        })
      })
    }
  }
}

</script>
<style scoped>
/*多行自动换行处理*/
.zhaiyao_text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  /*width: 300px;*/
  height: 30px;
  word-break: break-all;
}

/*单行自动换行处理*/
.author_title {
  display: inline-block;
  max-width: 150px;
  line-height: 25px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.author_imgBox {
  position: relative;
  display: block;
  width: 172px;
  height: 246px;
  margin: 0;
  padding: 0;
  line-height: 246px;
}
.author_img {
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  margin: 0;
  padding: 0;
  transform: translate(-50%, -50%);
  text-align: center;
  /*box-shadow: 0 0 2px black;*/
}
</style>
