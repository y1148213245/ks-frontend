/*
 * @Author: song 
 * @Date: 2018-07-03 10:52:51 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-07-09 19:38:29
 * 视频播放组件 列表是轮播图形式的
 * TODO: 轮播的分页怎么办
 */

<template>
  <div class="work_videoplay_01">
    <!-- 播放器 -->
    <div class="work_videoplay_01_mydplayer" id="myDPlayer"></div>
    <!-- END 播放器 -->

    <section v-for="(config, index) in CONFIG.complicatedItem" v-if="curVideoObj" v-bind="{class: 'work_videoplay_01_item_' + config.field}" :key="index">
      <div class="work_videoplay_01_option" @click="toCustomFun(config)">
        <label class="work_videoplay_01_label" v-text="config.display"></label>
        <span v-if="config.field" v-bind="{class: 'work_videoplay_01_' + config.field}" v-text="curVideoObj[keys[config.field]]"></span>
      </div>
    </section>

    <!-- 系列课程列表 -->
    <div class="work_videoplay_01_myswipercon swiper-container" v-if="CONFIG && CONFIG.showVideoList">
      <div class="work_videoplay_01_myswiperwra swiper-wrapper">
        <div class="work_videoplay_01_myswiper swiper-slide" v-for="(item, index) in videoLists" :key="index" v-text="item[keys.resName]" @click="toPlayVideo(item)" :class="{work_videoplay_01_activevideo: curVideoObj[keys.id] == item[keys.id]}"></div>
      </div>
      <div class="swiper-button-prev swiper-button-prev-smallPic"></div>
      <div class="swiper-button-next swiper-button-next-smallPic"></div>
    </div>
    <!-- END 系列课程列表 -->
  </div>
</template>

<script>
import PROJECT_CONFIG from 'projectConfig';
import { Get, Post, getFieldAdapter, toOtherPage } from "@common";
import URL from "url";
import { Toast } from 'vant';

export default {
  name: 'work_videoplay_01',
  props: ['namespace', 'modulename'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      curId: '', // 当前播放的视频
      parentId: '', // 视频组id
      myDPlayerdp: '', // 视频播放器插件
      videoLists: null, // 视频课程列表
      curVideoObj: null, // 当前播放视频对象
      curShowIndex: 0, // 当前选中列表中的视频
    };
  },

  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].work_videoplay.work_videoplay_01[this.modulename];
    this.keys = getFieldAdapter(this.CONFIG.getResourceLists.sysAdapter, this.CONFIG.getResourceLists.typeAdapter);
    if (this.CONFIG.queryParamsType == 'url') { // 从视频组里取数据的时候才把参数传到地址栏里
      let queryObj = URL.parse(document.URL, true).query;
      this.curId = queryObj && queryObj.id ? queryObj.id : ''; // 当前播放的视频id
      this.parentId = queryObj && queryObj.parentId ? queryObj.parentId : '';// 视频组id
    }
    this.queryResourceLists(); // 查询视频列表
  },

  mounted () {

  },

  methods: {
    queryResourceLists () {
      let QUERYCONFIG = this.CONFIG.getResourceLists;
      let paramsObj = JSON.parse(JSON.stringify(QUERYCONFIG.params));
      paramsObj.conditions.map((item) => {
        if (item.hasOwnProperty('pub_parent_id')) {
          item.pub_parent_id = this.parentId;
        }
        if (item.hasOwnProperty('pub_site_id')) {
          item.pub_site_id = CONFIG.SITE_CONFIG.siteId;
        }
      })

      paramsObj.conditions = JSON.stringify(paramsObj.conditions);
      Post(CONFIG.BASE_URL + QUERYCONFIG.url, paramsObj).then((res) => {
        let datas = res.data;
        if (datas.success && datas.result.length > 0) {
          this.videoLists = datas.result; // 视频列表
          if (this.CONFIG.queryParamsType == 'url') { //  从地址栏里取数据
            this.videoLists.forEach((item, index) => {
              if (item[this.keys.id] == this.curId) {
                this.curVideoObj = item;
                this.curShowIndex = index;
              }
            })
          } else {
            this.curVideoObj = this.videoLists[0];
          }
          this.$nextTick(() => {
            this.initDPlayer();
            this.initSwiper();
          });
        }
      })
    },
    toPlayVideo (item) { // 点击播放视频列表里的某一个
      this.curVideoObj = item;
      this.initDPlayer();
    },
    initDPlayer () { // 初始化视频播放器
      this.curDPlayer = new DPlayer({ // 播放器
        container: document.getElementById('myDPlayer'), // 挂载容器
        screenshot: true, // 截屏
        video: {
          url: CONFIG.BASE_URL + this.CONFIG.playVideoUrl + this.curVideoObj[this.keys.resourceId], // 视频地址
        },
      });
    },
    initSwiper () { // 初始化轮播图
      new Swiper('.swiper-container', {
        initialSlide: this.curShowIndex, // 当前播放的滑倒最左边
        slidesPerView: 4, // 每屏4张
        spaceBetween: 30, // 间隔
        prevButton: '.swiper-button-prev', // 左翻按钮
        nextButton: '.swiper-button-next', // 右翻按钮
      })
    },
    toCustomFun (config) { // 执行自定义事件
      window.open(toOtherPage(this.curVideoObj, this.CONFIG[config.method], this.keys));
    }
  }
}
</script>
<style>
.work_videoplay_01_mydplayer {
  width: 100%;
  height: 500px;
}

.work_videoplay_01_myswipercon {
  margin-top: 50px;
}

.work_videoplay_01_myswiperwra .work_videoplay_01_myswiper:nth-child(4n) {
  margin-right: 0px;
}

.work_videoplay_01_myswiper {
  /* width: calc(25% - 20px); */
  height: 80px;
  cursor: pointer;
  background-color: #ddd;
  margin-right: 20px;
  line-height: 80px;
  text-align: center;
  font-size: 14px;
}

.work_videoplay_01_activevideo {
  border: 1px solid #5fbdf9;
  color: #5fbdf9;
  font-weight: bold;
}
</style>