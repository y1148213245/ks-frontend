<!-- 作者展示组件 -->
<template>
<div class="ui_pic_list_11 ui_pic_list_11_skin">
  <ul>
    <template v-for="(entry,index) in list" v-if="index < 6">
      <li class="listLi" :key="entry.id">
        <div class="authorImgBox">
          <img onload="DrawImage(this,172,264)" class="authorImg" :src="entry.pub_picSmall" alt="暂无封面"/>
        </div>
        <div class="listText">
          <h3><a href="javascript:void(0)" @click="toDetail(entry.id)" class="author" v-html="entry.information_SYS_TOPIC"></a></h3>
          <p class="zhaiyao zhaiyao_text" v-text="entry.information_a_abstract"
              :title="entry.information_a_abstract"></p>
          <p class="shu">|</p>
          <p class="detail">
            <a class="lookMore" href="javascript:void(0)" @click="toDetail(entry.id)">查看更多</a>
          </p>
        </div>
      </li>
    </template>
    </ul>
</div>
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
      window.location.href = this.projectConfig.detailHref + id + "&currentType=author#";
    },
    loadDatas () {
      Post(this.projectConfig.url, this.projectConfig.param).then((rep) => {
        this.list = rep.data.result;
        this.callback();
      })
    },
    callback () {
      this.$nextTick(function () {
        $(".ui_pic_list_11  ul li").find(".listText").hide().animate({ left: "172px" });
        $(".ui_pic_list_11  ul li").hover(function () {
          $(this).find(".listText").show().animate({ left: "0px" }, 400);
        }, function () {
          $(this).find(".listText").hide().animate({ left: "172px" }, 400);
        })
      })
    }
  }
}

</script>
<style>
/* start 结构样式 */
.ui_pic_list_11 .listLi {
  width: 172px;
  height: 246px;
  float: left;
  margin-right: 20px;
  margin-bottom: 15px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-width: 1px;
  text-align: center;
  list-style: none;
}

.ui_pic_list_11 .listLi .authorImgBox {
  float: left;
  position: relative;
  display: block;
  width: 172px;
  height: 246px;
  margin: 0;
  padding: 0;
  line-height: 246px;
}

.ui_pic_list_11 .listLi .authorImg {
  position: absolute;
  left: 50%;
  display: inline-block;
  top: 50%;
  padding: 0;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.ui_pic_list_11 .listLi .listText {
  float: left;
  width: 172px;
  height: 246px;
  position: absolute;
}

.ui_pic_list_11 .listLi .listText .author {
  border-bottom: 1px solid #fff;
  color: #fff;
  padding: 5px 10px;
  display: inline-block;
  max-width: 150px;
  line-height: 25px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: none;
}

.ui_pic_list_11 .listLi .listText h3 {
  height: 45px;
  text-align: center;
  line-height: 45px;
  padding-top: 45px;
}

.ui_pic_list_11 .listLi .zhaiyao {
  text-align: center;
  padding-bottom: 5px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  height: 30px;
  word-break: break-all;
}

.ui_pic_list_11 .listLi .detail {
  width: 80px;
  margin: 0 auto;
  line-height: 24px;
}
/* end 结构样式 */

/* start 皮肤样式 */

.ui_pic_list_11_skin .listLi {
  border-style: solid;
  border-color: #a6a6a6;
}

.ui_pic_list_11_skin .listLi .listText {
  background: #ca0000;
  color: #fff;
}

.ui_pic_list_11_skin .listLi .listText h3 {
  font-size: 20px;
  font-weight: 100;
}

.ui_pic_list_11_skin .listLi .zhaiyao {
  font-size: 14px;
}

.ui_pic_list_11_skin .listLi .shu {
  font-size: 24px;
  font-weight: 300;
}

.ui_pic_list_11_skin .listLi .detail {
  background: #fff;
  color: #fff;
}

.ui_pic_list_11_skin .listLi .detail .lookMore {
  color: red;
  outline: none;
  text-decoration: none;
}
/* end 皮肤样式 */
</style>
