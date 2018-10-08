<template>
  <div class="personalcenter_box">
    <!-- <el-tooltip effect="dark" content="自定义主题色" placement="bottom">
        <theme-picker class="theme-switch right-menu-item"></theme-picker>
    </el-tooltip> -->
    <div class="center_container">
      <vnav :navs="navs" :parent-config="CONFIG.subConfig" :current-show-index="currentShowIndex" class="personalcenter_nav"></vnav>
      <div class="center_container_crumbs" v-if="CONFIG && CONFIG.staticText && CONFIG.staticText.crumbs == true">
        <a href="./index.html">{{getStaticText('homePage') ? getStaticText('homePage') : '首页 '}}</a>>>
        <a href="./personalcenter.html">{{getStaticText('personalCenter') ? getStaticText('personalCenter') : '个人中心'}}</a>>>
        {{currentShow.title}}
      </div>
      <h1 class="center_container-title">{{currentShow.title}}</h1>
      <component ref="currentComponent" v-if="updateContrl" :is="currentShow.tag" :detail-url="detailUrl" :show_star="show_star" :parent-config="CONFIG.subConfig" class="personalcenter_section"></component>

    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";
import URL from "url";
import vnav from "./components/personalCenter_nav";
import account from "./components/personalCenter_account";
import list from "./components/personalCenter_list";
import book from "./components/personalCenter_bookshelf";
import collecting from "./components/personalCenter_collection";
import point from "./components/personalCenter_point";
import afterservice from "./components/personalCenter_afterservice";
import coupon from "./components/personalCenter_coupon";
import note from "./components/personalCenter_note";
import PROJECT_CONFIG from "projectConfig";
import ThemePicker from "./components/ThemePicker";
import message from "./components/personalCenter_message";
import comment from "./components/personalCenter_comment";
import feedback from "./components/personalCenter_feedback";
import samplebook from "./components/personalCenter_samplebook";
import learning from "./components/personalCenter_learning"


export default {
  name: "work_personalcenter_01",
  reused: true,
  props: {
    namespace: String,
    show_star: {
      type: Boolean,
      default: true
    },
    detailUrl: {
      type: String,
      default: "../book/bookdetail.html"
    }
  },
  created() {
    this.initConfig();
  },
  mounted() {
    var _this = this;
    this.initCurrentShow();
    this.navs.forEach(function(item, index) {
      if (_this.currentShow.tag === item.tag) {
        _this.currentShowIndex = index + "";
      }
    });
  },
  data: function() {
    return {
      CONFIG: null,
      currentShowIndex: "0",
      navs: null,
      updateContrl:true
    };
  },
  computed: {
    ...mapGetters({
      currentShow: "personalCenter/getCurrentShow"
    })
  },
  methods: {
    initConfig() {
      this.CONFIG =
        PROJECT_CONFIG[this.namespace].personalcenter.personalcenter_01;
      this.navs = this.CONFIG.navList;
    },
    initCurrentShow() {
      let param = this.getHtmlParams();
      if (param.show) {
        let currentShow = this.navs.filter((entry, index) => {
          if (param.show == entry.tag) {
            this.currentShowIndex = index;
            return true;
          } else {
            return false;
          }
        })[0];
        this.$store.dispatch("personalCenter/updateCurrentShow", currentShow);
      }
    },
    getHtmlParams() {
      let searchUrl = document.URL;
      let params = URL.parse(searchUrl || "");
      if (!params) {
        params = {};
      }
      return params;
    },
    getStaticText(text) {
      if (
        this.CONFIG &&
        this.CONFIG.staticText &&
        this.CONFIG.staticText[text]
      ) {
        return this.CONFIG.staticText[text];
      } else {
        return false;
      }
    }
  },
  watch:{
    currentShow(nv,ov){
      this.updateContrl = false
      this.$nextTick(()=>{
       this.updateContrl = true
      })
    }
  },
  components: {
    vnav, //左侧导航
    account, //我的账号
    list, //我的订单
    book, //我的书架
    collecting, //收藏夹
    point, //我的积分
    afterservice, //售后
    coupon, //优惠券
    note, //随手记
    // ThemePicker //主题色更换
    message,        //我的消息
    comment,        //我的评论
    feedback,       //反馈建议
    samplebook,     //样书申领
    learning       //学习中心
  }
};
</script>
<style>
ol,
ul,
li {
  list-style: none;
}
table {
  border-collapse: collapse;
  margin-bottom: 0px !important;
}
/* 浮动相关 */
.fl {
  float: left;
}
.fr {
  float: right;
}
.cl {
  clear: both;
}

.personalcenter_box {
  width: 1200px;
  margin: 20px auto;
}
.personalcenter_nav {
  float: left;
  width: 18%;
}
.personalcenter_section {
  float: right;
  width: 78%;
  padding: 20px;
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #dddddd;
}
.center_container {
  overflow: hidden;
}
.center_container-title {
  float: right;
  width: 78%;
  margin: 20px 0;
}
.center_container_crumbs{
  width: 78%;
  float: right;
}

/* UI美化样式 */
/* .center_container{width: 1200px;margin: 0 auto}
.personalcenter_box{width: 1200px}
.personal_center_nav{margin-right: 30px!important}
.personal_center_nav_header_title{padding: 0px}
.el-dropdown{border: 1px solid #409eff;padding: 6px 2px;margin-right: 0px}
.center_ad ul li{margin: 10px 0px!important;border-bottom: 1px solid #f5f5f5;padding-bottom: 10px;}
.el-menu-item{border-bottom: 1px solid #E9E9E9}
.el-col[data-v-18498296]{float: right;border: 1px solid #f2f2f2;box-shadow:0 1px 3px 0 rgba(189,189,189,0.19);background: #fff;width: 80%;padding: 20px 0px}
.center_ad li[data-v-18498296]{font-size: 14px;padding: 20px;padding-bottom: 24px;border-bottom: 1px dotted #E9E9E9;}
.center_ad hr{display: none}
.center_cl[data-v-18498296]{height: 60px;line-height: 60px;padding: 30px 0px 40px 30px;margin: 0px}
.el-dialog__header{padding: 20px;border-bottom: 1px solid #E9E9E9;background: #FAFAFA;font-size: 18px;font-weight: bold;}
.el-dialog__title{font-size: 18px;font-weight: bold;}
.el-table td, .el-table th.is-leaf{background: #fff}
.el-table .el-table__header thead th.is-leaf{background: #f5f5f5}
.el-table tr.current-row{background: #ccc!important;color: #fff}
.el-table--enable-row-hover .el-table__body tr:hover > td {background: #5E8242;color: #fff}
.el-step__head.is-finish,.el-step.is-simple .el-step__main{color: #c0c4cc} */
</style>
