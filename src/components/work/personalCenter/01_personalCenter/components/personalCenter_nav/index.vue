<template>
  <el-col :span="4" class="tac personal_center_nav">
    <slot name='header'>
      <div class="personal_center_nav_header el-button--primary"><p class="personal_center_nav_header_title">个人中心</p>
      </div>
    </slot>
    <el-menu :default-active="currentShowIndex" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <template v-for="(entry,index) in navs">
        <el-menu-item :index="String(index)" class="personal_center_nav_entry" @click="showComponent(index)"><i
          :class="[entry.icon]"></i><span v-text="entry.title"></span></el-menu-item>
      </template>
      <!-- <el-menu-item index="5" class="personal_center_nav_entry" @click="showComponent(4)" v-if="siteId === 2"><i class="el-icon-document" ></i>优惠券</el-menu-item> -->
    </el-menu>
  </el-col>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "vnav",
  reused: true,
  props: ["namespace"],
  props: {
    navs: {
      default() {
        return [
          {
            title: "我的帐号",
            icon: "el-icon-edit",
            tag: "account"
          },
          {
            title: "我的订单",
            icon: "el-icon-menu",
            tag: "list"
          },
          {
            title: "我的书架",
            icon: "el-icon-setting",
            tag: "book"
          },
          {
            title: "收藏夹",
            icon: "el-icon-star-on",
            tag: "collecting"
          },
          {
            title: "我的积分",
            icon: "el-icon-message",
            tag: "point"
          },
          {
            title: "售后记录",
            icon: "el-icon-time",
            tag: "afterservice"
          },
          {
            title: "我的优惠券",
            icon: "el-icon-menu",
            tag: "coupon"
          }
        ];
      }
    },
    currentShowIndex: {
      type: String,
      default: "1"
    }
  },
  data: function() {
    return {
      siteId: ""
    };
  },
  methods: {
    ...mapActions("personalCenter/", {
      updateCurrentShow: "updateCurrentShow"
    }),
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    showComponent(index) {
      this.updateCurrentShow(this.navs[index].tag);
      window.location.hash = this.navs[index].tag;
    }
  },
  // components: {},
  mounted() {
    this.siteId = SITE_CONFIG.siteId;
    var hash = window.location.hash;
    if (hash) {
      var tag = hash.substring(hash.indexOf("#") + 1, hash.length);
      this.updateCurrentShow(tag);
    }
  }
};
</script>

<style>
.personal_center_nav {
  border: 1px solid #d7d7d7;
}

.personal_center_nav_header {
  height: 50px;
  line-height: 50px;
  /*background-color: #CA0000;*/
  text-align: center;
}

.personal_center_nav_header_title {
  display: inline;
  padding-left: 20px;
  /* background: url(~projects/wenlian/assets/img/bg_006.png) no-repeat; */
  background-position: -5px 1px;
  font-size: 18px;
  /*color: white;*/
}

.personal_center_nav_entry {
  padding-left: 45px !important;
}

/*.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item:hover, .el-menu--horizontal.el-menu--dark .el-submenu .el-submenu-title:hover, .el-menu-item:hover {*/
/*background-color: #FBEAEA;*/
/*}*/

.el-menu {
  background-color: white;
}

/*.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active {*/
/*color: #CA0000;*/
/*}*/
</style>
