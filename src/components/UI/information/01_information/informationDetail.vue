//  Created by song 2018/3/30
// 封装资讯详情组件为公共组件
<template>
  <div class="ui_information_01">
    <div class="ui_information_01-nav">
      您的位置:
      <a href="../pages/index.html" class="ui_information_01-nav_home">首页</a>>>
      <a class="ui_information_01-nav_home_content">资讯内容</a>
    </div>
    <div class="ui_information_01-news">
      <div class="ui_information_01-news_con">
        <div class="ui_information_01-news_tit" v-text="information[keys.title]"></div>
        <div class="ui_information_01-news_other">
          <span class="ui_information_01-news_author" v-if="CONFIG && CONFIG.displayItem">{{information[keys.author] || displayItem.noAuthor}}</span>
          <span class="ui_information_01-news_pubTime">{{information[keys.pubTime] | formatTime}}</span>

          <span class="ui_information_01-news_share" v-if="CONFIG && CONFIG.showItem && CONFIG.showItem.indexOf('share') !== -1 ? true : false">
						<a href="http://www.jiathis.com/share" class="jiathis jiathis_txt jtico jtico_jiathis ui_information_01-news_share_a" target="_blank">
              <i class="ui_information_01-news_other_03"></i>
              <span v-if="CONFIG && displayItem" v-text="CONFIG.displayItem"></span>
            </a>
					</span>

          <span class="ui_information_01-news_sc" @click="collectOrLike('0',information.pub_content_type,information.id)" v-if="CONFIG && CONFIG.showItem && CONFIG.showItem.indexOf('collect') !== -1 ? true : false">
            <i class="ui_information_01-news_other_02_cg" v-if="information.isCollect == '1'"></i> <!-- 收藏成功 -->
            <i class="ui_information_01-news_other_02" v-else></i>  <!-- 未收藏 -->
            <span v-if="CONFIG && displayItem" v-text="displayItem.collect"></span>
					</span>

          <span class="ui_information_01-news_dz" @click="collectOrLike('1',information.pub_content_type,information.id)" v-if="CONFIG && CONFIG.showItem && CONFIG.showItem.indexOf('like') !== -1 ? true : false">
            <i class="ui_information_01-news_other_01" v-if="information.isLike == '1'"></i> <!-- 点赞成功 -->
            <i class="ui_information_01-news_other_01_cg" v-else></i>  <!-- 未点赞 -->
            <span v-if="CONFIG && displayItem" v-text="displayItem.like"></span>
					</span>

          <template>
            <div class="bdsharebuttonbox shareHide" v-if="CONFIG && shareLists">
              <span>分享到：</span>
                <span v-for="(item, index) in shareLists"  :key="index">
                  <a href="#" v-bind:class="item.class" :data-cmd="item.cmd" :title="item.title" ></a>
                </span>
            </div>
          </template>

        </div>
        <div class="ui_information_01-news_nr" v-html="information[keys.content]"></div>
        <!-- <div class="ui_information_01-news_infoImg">
          <img :src="information[keys.picture]" onload="DrawImage(this,940,455)">
        </div> -->

        <!-- 评论组件 -->
        <work_bookreview_01 namespace="information" v-if="CONFIG && CONFIG.showItem && CONFIG.showItem.indexOf('review') !== -1 ? true : false"></work_bookreview_01>
        <!-- END 评论组件 -->
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import { mapGetters } from "vuex";
import * as interfaces from "@work/login/common/interfaces.js";
import { Get, Post } from "@common";
import URL from 'url';
import PROJECT_CONFIG from "projectConfig";

export default {
  name: 'ui_information_01',
  reused: true,
  props: ['namespace'],
  data: function () {
    return {
      CONFIG: null, // API配置
      pubId: 0, // 资讯ID
      information: {}, // 资讯详情
      commentList: [], // 评论列表
      keys: {},  // 字段兼容
      displayItem: {},
      shareLists:[] //新分享
    }
  },
  computed: {
    ...mapGetters("login", { // 获取用户信息
      member: interfaces.GET_MEMBER
    })
  },
  mounted: function () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].information.information_01;
    this.keys = this.CONFIG.queryDetail.keys;
    this.displayItem = this.CONFIG.queryDetail.display;
    this.pubId = URL.parse(document.URL, true).query.pubId;
    this.queryInformation();
    if(this.CONFIG.shareLists){
      this.shareLists = this.CONFIG.shareLists;
    }else{
      this.shareLists = [
        {
          title: 'QQ好友',
          class: 'popup_sqq',
          cmd: 'sqq',
        },
        {
          title: '微信',
          class: 'popup_weixin',
          cmd: 'weixin',
        },
        {
          title: '分享到新浪微博',
          class: 'bds_tsina',
          cmd: 'tsina',
        },
        {
          title: '更多',
          class: 'bds_more',
          cmd: 'more',
        }
      ];
    }
    this.shareScript();   //新分享
  },
  methods: {
    queryInformation () {  // 查资讯详情
      /* let paramsObj = Object.assign({}, this.CONFIG.queryDetail.params);
      paramsObj.loginName = this.member.loginName;
      paramsObj.pubId = this.pubId; */

      Get(CONFIG.BASE_URL+this.CONFIG.queryDetail.url + '?loginName=' + this.member.loginName + '&pubId=' + this.pubId).then(rep => {
        if (rep.data && rep.data.success) {
          this.information = rep.data.data;
        }
      });
    },
    collectOrLike: function (operateType, contentType, id) {  // 收藏或点赞 点赞：1   收藏：0
      var loginName = this.member.loginName;
      if (!loginName) {
        this.$message({
          message: "请登录",
          type: 'warning'
        });
        return;
      }
      /* let paramsObj = Object.assign({}, this.CONFIG.collectOrLike.params);
      paramsObj.loginName = loginName;
      paramsObj.pubId = this.pubId;
      paramsObj.loginName = operateType;  // 操作类型  点赞：1   收藏：0 */

      Post(CONFIG.BASE_URL+this.CONFIG.collectOrLike.url + '?loginName=' + this.member.loginName + '&pubId=' + this.pubId + '&operateType=' + operateType + '&siteId=' + CONFIG.SITE_CONFIG.siteId).then((rep) => {
        if (rep.data && rep.data.result == '1') {  // 操作成功
          this.queryInformation();
          this.$message({
            message: rep.data.data.msg,
            type: 'success'
          })
        } else {
          this.$message({
            message: "操作有误，请稍后重试",
            type: 'error'
          })
        }
      });
    },


    shareScript () {
      window.onload=function (){
        document.getElementsByClassName("bdsharebuttonbox")[0].appendChild(document.createElement('script')).src =
          'http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=' + ~(-new Date() / 36e5);
      }
    }
  }
}
</script>
<style>
  .shareHide{
    display: none;
  }
.ui_information_01 {
  width: 1200px;
  margin: 0 auto 48px auto;
  overflow: hidden;
  background: #fff;
}
.ui_information_01-nav {
  border-bottom: 2px solid #da0b2d;
  font-size: 14px;
  line-height: 35px;
  color: #9b9b9b;
  margin-top: 18px;
  margin-left: 12px;
}
.ui_information_01-nav_home {
  color: #9b9b9b;
  text-decoration: none !important;
  outline: none;
}
.ui_information_01-nav_home_content {
  color: #626262;
  text-decoration: none !important;
  outline: none;
}
.ui_information_01-news_con {
  padding: 15px 30px 50px 30px;
}
.ui_information_01-news_tit {
  color: #ca0000;
  border-bottom: 1px solid #fce8e8;
  text-align: center;
  font-size: 20px;
  padding-bottom: 10px;
}
.ui_information_01-news_other {
  overflow: hidden;
  font-size: 14px;
  color: #ababab;
  padding-top: 10px;
  text-align: center;
}
.ui_information_01-news_share {
  float: right;
}
.ui_information_01-news_share:hover .ui_information_01-news_other_03 {
  background-position: -70px -506px;
}

.ui_information_01-news_share_a {
  text-decoration: none !important;
  color: #ae0f29;
  outline: none;
}
.ui_information_01-news_other_03 {
  background-image: url(./data/bg_10.png);
  background-position: -70px -488px;
  display: inline-block;
  vertical-align: middle;
  height: 18px;
  width: 18px;
}
.ui_information_01-news_sc {
  cursor: pointer;
  float: right;
  margin-left: 20px;
  margin-right: 20px;
}
.ui_information_01-news_other_02_cg {
  background-position: -70px -430px;
  background-image: url(./data/bg_10.png);
  display: inline-block;
  vertical-align: middle;
  height: 18px;
  width: 18px;
  cursor: pointer;
}
.ui_information_01-news_other_02 {
  background-position: -70px -410px;
  background-image: url(./data/bg_10.png);
  display: inline-block;
  vertical-align: middle;
  height: 18px;
  width: 18px;
  cursor: pointer;
}
.ui_information_01-news_dz {
  cursor: pointer;
  float: right;
}
.ui_information_01-news_other_01_cg {
  background-position: -70px -469px;
  background-image: url(./data/bg_10.png);
  display: inline-block;
  vertical-align: middle;
  height: 18px;
  width: 18px;
}
.ui_information_01-news_other_01 {
  background-position: -70px -450px;
  background-image: url(./data/bg_10.png);
  display: inline-block;
  vertical-align: middle;
  height: 18px;
  width: 18px;
}
.ui_information_01-news_nr {
  font-size: 14px;
  line-height: 24px;
  padding-top: 20px;
  color: #737373;
  padding-bottom: 25px;
}
.ui_information_01-news_infoImg {
  text-align: center;
  width: 940px;
  margin: 0 auto;
  overflow: hidden;
}
</style>
