<template>
  <div class="box">
    <div class="center_container">
      <vnav style="margin-right: 20px;" :navs="navs" :current-show-index="currentShowIndex"></vnav>
      <component :is="currentShow" :detail-url="detailUrl" :show_star="show_star"></component>
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
export default {
  name: "work_personalcenter_01",
  reused: true,
  props: {
    namespace:String,
    show_star: {
      type: Boolean,
      default: true
    },
    detailUrl: {
      type: String,
      default: "../book/bookdetail.html"
    }
  },
  created () {
    this.initConfig();
  },
  mounted() {
    var _this = this;
    this.initCurrentShow();
    this.navs.forEach(function(item, index) {
      if (_this.currentShow === item.tag) {
        _this.currentShowIndex = index + "";
      }
    });
  },
  data: function() {
    return {
      currentShowIndex: "0",
      navs:null,
    }
  },
  computed: {
    ...mapGetters({
      currentShow: "personalCenter/getCurrentShow"
    })
  },
  methods: {
    initConfig () {
      this.navs = PROJECT_CONFIG[this.namespace].navList;
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
        this.$store.dispatch(
          "personalCenter/updateCurrentShow",
          currentShow.tag
        );
      }
    },
    getHtmlParams() {
      let searchUrl = document.URL;
      let params = URL.parse(searchUrl || "");
      if (!params) {
        params = {};
      }
      return params;
    }
  },
  components: {
    vnav,
    account,
    list,
    book,
    collecting,
    point,
    afterservice,
    coupon,
    note
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
</style>
<style scoped>
.box {
  width: 1100px;
  margin: 20px auto;
}
.center_container {
  overflow: hidden;
}
</style>
