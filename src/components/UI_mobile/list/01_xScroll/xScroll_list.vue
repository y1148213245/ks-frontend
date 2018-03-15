<!-- 图书横滑动列表 -->
<template>
 <div class="ui_list_01">
    <div class="ui_list_01-col_title">
      <i class="ui_list_01-col_title-ico"></i>
      {{colDetail[colDetailKeys.name]}}
      <a href="javascript:void(0);" @click="toMoreBookList(colDetail[colDetailKeys.id])" class="ui_list_01-col_title-more">更多></a>
    </div>
    <!--slider_scroll-->
    <div class="ui_list_01-scroll">
      <ul class="ui_list_01-scroll-list">
        <li class="ui_list_01-scroll-list-li" v-for="(item, index) in list" v-if="index<7" :key="index">
          <a class="ui_list_01-scroll-list-a">
            <img class="ui_list_01-scroll-list-img" :src="item[listKeys.pic]" @click="appbook(item[listKeys.id])">
            <p class="ui_list_01-scroll-list-title" @click="appbook(item[listKeys.id])">{{item[listKeys.title]}}</p>
            <p class="ui_list_01-scroll-list-author">{{item[listKeys.author]}}</p>
          </a>
        </li>
      </ul>
    </div>
    <!--slider_scroll-->
  </div>
</template>

<script>
import URL from 'url'
import PROJECT_CONFIG from 'projectConfig'
import { Post, Get } from '@common'
export default {
  name: 'ui_mobile_list_01',
  reused: true,
  props: {
    namespace: String,
    module: String,
  },
  data () {
    return {
      projectConfig: null,
      listKeys: null,
      list: [],
      colDetail: {},
      colDetailKeys: null,
    };
  },

  computed: {},

  created () {
    this.initConfig();
    this.loadColDetail();
    this.loadList();
  },

  mounted () { },

  methods: {
    initConfig () {
      this.projectConfig = PROJECT_CONFIG[this.namespace].list.ui_mobile_list_01[this.module];
      this.listKeys = this.projectConfig.getList.keys;
      this.colDetailKeys = this.projectConfig.getColDetail.keys;
    },
    loadColDetail () {
      let getColDetailConfig = this.projectConfig.getColDetail;
      let url = getColDetailConfig.url;
      Post(url).then((resp) => {
        this.colDetail = resp.data.data;
        // this.list = resp.data.result;
      })

    },
    loadList () {
      let getListConfig = this.projectConfig.getList;
      let url = getListConfig.url;
      getListConfig.params.conditions = JSON.stringify(getListConfig.params.conditions);
      Post(url, getListConfig.params).then((resp) => {
        this.list = resp.data.result;
      })
    },
    toMoreBookList () {

    },
    /* 调用移动端图书详情 */
    appbook (pubId) {
      appbook(pubId);
    }
  }
}
</script>
<style>
.ui_list_01 {
  font-size: 48px;
}
.ui_list_01-col_title {
  margin: 0.4rem 0.3rem 0.3rem 0.3rem;
  overflow: hidden;
  line-height: 0.32rem;
  height: 0.32rem;
  color: #c40001;
  font-size: 0.3rem;
}
.ui_list_01-col_title-ico {
  display: inline-block;

  width: 0.03rem;
  height: 0.36rem;
  background: url(./data/img/bg_ico.png) no-repeat;
  background-position: 0rem -0.38rem;
  margin-right: 0.2rem;
  vertical-align: middle;
  -webkit-background-size: 5rem 5rem;
  -moz-background-size: 5rem 5rem;
  background-size: 5rem 5rem;
}
.ui_list_01-col_title-more {
  font-size: 0.24rem;
  float: right;
  text-decoration: none;
  color: #939393;
}
.ui_list_01-scroll {
  margin-left: 0.3rem;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  width: 100%;
  clear: both;
}
.ui_list_01-scroll-list {
  margin: 0 auto;
  padding: 0;
  max-width: 900px;
  position: relative;
  width: auto;
}
.ui_list_01-scroll-list li:first-child {
  margin-left: 0;
}
.ui_list_01-scroll-list-li {
  display: inline-block;
  margin-left: 0.4rem;
  list-style-type: none;
}
.ui_list_01-scroll-list-a {
  display: block;
  width: 1.62rem;
  text-decoration: none;
  color: #939393;
}
.ui_list_01-scroll-list-img {
  border-radius: 3px;
  width: 100%;
  height: 2.12rem;
  border: none;
}
.ui_list_01-scroll-list-title {
  color: #5b5b5b;
  font-size: 0.28rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-break: break-all;
  overflow: hidden;
  white-space: normal;
  line-height: 0.39rem;
  height: 0.75rem;
}
.ui_list_01-scroll-list-author {
  color: #8b8b8b;
  text-align: left;
  font-size: 0.24rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  height: 0.32rem;
}
</style>
