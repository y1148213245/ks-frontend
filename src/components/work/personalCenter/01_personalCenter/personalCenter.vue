<template>
  <div class="box">
    <div class="center_container">
      <vnav style="margin-right: 20px;" :navs="navs" :current-show-index="currentShowIndex"></vnav>
      <component :is="currentShow" :detail-url="detailUrl" :show_star="show_star"></component>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import {mapGetters} from 'vuex';
  import URL from "url";
  import vnav from './components/personalCenter_nav';
  import account from './components/personalCenter_account';
  import list from './components/personalCenter_list';
  import book from './components/personalCenter_bookshelf';
  import collecting from './components/personalCenter_collection';
  import point from './components/personalCenter_point';
  import afterservice from './components/personalCenter_afterservice';
  import coupon from './components/personalCenter_coupon';
  import note from './components/personalCenter_note';

  export default {
    name: "work_personalcenter_01",
    reused: true,
    props: ["namespace"],
    props: {
      show_star: {
        type: Boolean,
        default: true
      },
      navs: {
        type: Array,
        default() {
          return [
            {
              title: '我的帐号',
              icon: 'el-icon-edit',
              tag: 'account',
            },
            {
              title: '我的订单',
              icon: 'el-icon-menu',
              tag: 'list',
            },
            {
              title: '我的书架',
              icon: 'el-icon-setting',
              tag: 'book',
            },
            {
              title: '收藏夹',
              icon: 'el-icon-star-on',
              tag: 'collecting',
            },
            {
              title: '我的积分',
              icon: 'el-icon-message',
              tag: 'point',
            },
            {
            	title:'售后记录',
            	icon:'el-icon-time',
            	tag:'afterservice',
            },
            {
              title: '我的优惠券',
              icon: 'el-icon-menu',
              tag: 'coupon',
            },
            {
              title: '随手记',
              icon: 'el-icon-document',
              tag: 'note',
            }
          ]
        }
      },
      detailUrl: {
        type: String,
        default: '../book/bookdetail.html'
      }
    },
    mounted() {
      var _this = this;
      this.initCurrentShow();
      this.navs.forEach(function (item, index) {
        if (_this.currentShow === item.tag) {
          _this.currentShowIndex = index + '';
        }
      })
    },
    data: function () {
      return {
        currentShowIndex: '0',
      };
    },
    computed: {
      ...mapGetters({
        currentShow: 'personalCenter/getCurrentShow'
      })
    },
    methods: {
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
          this.$store.dispatch('personalCenter/updateCurrentShow', currentShow.tag);
        }
      },
      getHtmlParams() {
        let searchUrl = document.URL;
        let params = URL.parse(searchUrl || '');
        console.log(params);
        if (!params) {
          params = {}
        }
        return params
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
    },
  }
</script>
<style>
  ol, ul, li {
    list-style: none;
  }
  table {
    border-collapse: collapse;
    margin-bottom: 0px !important
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
