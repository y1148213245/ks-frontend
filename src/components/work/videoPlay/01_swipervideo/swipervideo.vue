/*
 * @Author: song
 * @Date: 2018-07-03 10:52:51
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-09-18 17:09:43
 * 视频播放组件 列表是轮播图形式的
 */

<template>
  <div class="work_videoplay_01">
    <section v-for="(config, index) in CONFIG.complicatedItem" v-if="curVideoObj" v-bind="{class: 'work_videoplay_01_item_' + config.field}" :key="index">
      <!-- title -->
      <div v-if="config.name == 'title'" class="work_videoplay_01_option" @click="toCustomFun(config)">
        <label class="work_videoplay_01_label" v-text="config.display"></label>
        <span v-if="config.field" v-bind="{class: 'work_videoplay_01_' + config.field}" v-text="curVideoObj[keys[config.field]]"></span>
      </div>
      <!-- END title -->

      <!-- img 图片 -->
      <div v-else-if="config.name == 'img'" class="work_videoplay_01_imgcontainter" @click="toCustomFun(config)" v-show="resType == 'AUDIO-MEDIA'">
        <label class="work_videoplay_01_img_label">{{config.display}}</label>
        <img class="work_videoplay_01_img" v-bind="{class: 'work_videoplay_01_' + config.field}" :src="curVideoObj[keys[config.field]] || require('@static/img/defaultCover.png')" />
      </div>
      <!-- END img 图片 -->

      <!-- 其他项 -->
      <div v-else class="work_videoplay_01_others" @click="toCustomFun(config)">
        <label class="work_videoplay_01_label" v-text="config.display"></label>
        <span v-if="config.field" v-bind="{class: 'work_videoplay_01_' + config.field}" v-text="curVideoObj[keys[config.field]]"></span>
      </div>
    </section>
    <!-- 视频播放器 -->
    <div class="work_videoplay_01_mydplayer" id="myDPlayer" v-if="resType == 'VIDEO-MEDIA' || resType == 'ZILIAOKU'"></div>
    <!-- END 视频播放器 -->

    <!-- 音频播放器 -->
    <!-- 如果地址栏中有parentId存在，则是音频组，否则是单个音频 -->
    <audio :src="playUrl + (parentId ? (curVideoObj ? curVideoObj[keys.rescource] : '') : mediaResId)" controls v-if="resType == 'AUDIO-MEDIA'"></audio>
    <!-- END 音频播放器 -->

    <!-- 系列课程列表 -->
    <!--购买显示全部能播放-->
    <div class="work_videoplay_01_myswipercon_container" v-show='isBuy==1' v-if="videoLists && videoLists.length>0">
      <div class="work_videoplay_01_myswipercon swiper-container" v-if="CONFIG && CONFIG.showVideoList">
        <div class="work_videoplay_01_myswiperwra swiper-wrapper">
          <div class="work_videoplay_01_myswiper swiper-slide" v-for="(item, index) in videoLists" :key="index" v-text="item[keys.resName]" @click="toPlayVideo(item,index)" :class="{work_videoplay_01_activevideo: curShowIndex == index}"></div>
          <div class="work_videoplay_01_myswiper_tips swiper-slide" v-text="resType == 'VIDEO-MEDIA' ? (CONFIG.staticText && CONFIG.staticText.noNextVideo ? CONFIG.staticText.noNextVideo : '没有下一个视频啦') : (CONFIG.staticText && CONFIG.staticText.noNextAudio ? CONFIG.staticText.noNextAudio : '没有下一个音频啦')"></div>
        </div>
      </div>
      <div class="work_videoplay_01_myswipercon_btns">
        <div class="swiper-button-prev swiper-button-prev-smallPic"></div>
        <div class="swiper-button-next swiper-button-next-smallPic"></div>
      </div>

    </div>

    <!--未购买指给第一条添加播放的点击事件-->
    <div class="work_videoplay_01_myswipercon_container" v-show='isBuy==0' v-if="videoLists && videoLists.length>0">
      <div class="work_videoplay_01_myswipercon swiper-container" v-if="CONFIG && CONFIG.showVideoList">
        <div class="work_videoplay_01_myswiperwra swiper-wrapper">
          <div class="work_videoplay_01_myswiper swiper-slide" v-for="(item, index) in videoLists" :key="index" v-if="index < (CONFIG.freeCourseNum ? CONFIG.freeCourseNum : 0)" v-text="item[keys.resName]" @click="toPlayVideo(item,index)" :class="{work_videoplay_01_activevideo: curShowIndex == index}"></div>
          <div class="work_videoplay_01_myswiper swiper-slide" v-for="(item, index) in videoLists" :key="index" v-if="index>=(CONFIG.freeCourseNum ? CONFIG.freeCourseNum : 0)" v-text="item[keys.resName]" :class="{work_videoplay_01_activevideo: curShowIndex == index}"></div>
          <div class="work_videoplay_01_myswiper_tips swiper-slide" v-text="resType == 'VIDEO-MEDIA' ? (CONFIG.staticText && CONFIG.staticText.noNextVideo ? CONFIG.staticText.noNextVideo : '没有下一个视频啦') : (CONFIG.staticText && CONFIG.staticText.noNextAudio ? CONFIG.staticText.noNextAudio : '没有下一个音频啦')"></div>
        </div>
      </div>
      <div class="work_videoplay_01_myswipercon_btns">
        <div class="swiper-button-prev swiper-button-prev-smallPic"></div>
        <div class="swiper-button-next swiper-button-next-smallPic"></div>
      </div>

    </div>

    <!-- END 系列课程列表 -->
  </div>
</template>

<script> 
import PROJECT_CONFIG from 'projectConfig';
import { Get, Post, getFieldAdapter, toOtherPage } from "@common";
import { mapGetters } from 'vuex';
import * as interfaces from "@work/login/common/interfaces.js";
import URL from "url";
import { Toast } from 'vant';
const BaseConfig = require('../../../../../config');
export default {
  name: 'work_videoplay_01',
  props: ['namespace', 'modulename'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      curId: '', // 当前播放的视频
      parentId: '', // 视频组id
      mediaResId: '',//播放单个视频时需要的VIDEO-MEDIA_RESOURCEID
      myDPlayerdp: '', // 视频播放器插件
      mediaType: 'mp4',//播放的视频类型
      videoLists: null, // 视频课程列表
      curVideoObj: null, // 当前播放视频 / 音频 对象
      curAttachObj: {},  //当前附件对象
      curShowIndex: 0, // 当前选中列表中的视频
      resType: 'VIDEO-MEDIA', // 资源类型：音频 AUDIO-MEDIA / 视频 VIDEO-MEDIA 默认视频
      playUrl: '', // 资源播放地址
      isBuy: 1,
      CORE_PATH: process.env.NODE_ENV === 'production'
        ? BaseConfig.build.assetsPublicPath + BaseConfig.build.assetsSubDirectory
        : BaseConfig.dev.assetsPublicPath + BaseConfig.build.assetsSubDirectory
    };
  },
  computed: {
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER
    }),
  },
  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].work_videoplay.work_videoplay_01[this.modulename];
    this.playUrl = CONFIG.BASE_URL + this.CONFIG.playVideoUrl; // 资源播放地址
    let queryObj = URL.parse(document.URL, true).query;

    /* 添加视频插件 */
    let script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = this.CORE_PATH + '/js/jwplayer/jwplayer.js'
    document.getElementsByTagName('head')[0].appendChild(script)
    /* end添加视频插件 */

    script.onload = () => {
      if (this.CONFIG.queryParamsType == 'url') { // 从视频组里取数据的时候才把参数传到地址栏里
        this.curId = queryObj && queryObj.id ? queryObj.id : ''; // 当前播放的视频id
        this.parentId = queryObj && queryObj.parentId ? queryObj.parentId : '';// 视频组id
        this.mediaResId = queryObj && queryObj.mediaResId ? queryObj.mediaResId : '';//播放单个视频时需要的的VIDEO-MEDIA_RESOURCEID
        this.resType = queryObj && queryObj.resType ? queryObj.resType : 'VIDEO-MEDIA';
      }
      if (this.resType === "AUDIO-MEDIA" && this.CONFIG.getResourceLists.typeAdapter1) {
        this.keys = getFieldAdapter(this.CONFIG.getResourceLists.sysAdapter, this.CONFIG.getResourceLists.typeAdapter1);
      } else if (this.resType === "ZILIAOKU" && this.CONFIG.getResourceLists.typeAdapter2) {
        this.keys = getFieldAdapter(this.CONFIG.getResourceLists.sysAdapter, this.CONFIG.getResourceLists.typeAdapter2);
      } else {
        this.keys = getFieldAdapter(this.CONFIG.getResourceLists.sysAdapter, this.CONFIG.getResourceLists.typeAdapter);
      }
      this.getListOrPlayVideo(); // 查询视频列表
    }

    this.mediaType = this.CONFIG.mediaType ? this.CONFIG.mediaType : this.mediaType //取视频类型的配置
    queryObj.mediaType ? this.mediaType = queryObj.mediaType : ''
    
    if (this.mediaType == 'flv') {//判断是否播放flash文件
      /* 浏览器设置的falsh插件在此网站上是否允许 */
      if (window.ActiveXObject) {
        var s = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
        if (!s) {
          alert('请将您的浏览器设置falsh插件在此网站上始终允许！');
        }
      } else {
        var s = navigator.plugins['Shockwave Flash'];
        if (!s) {
          alert('请将您的浏览器设置falsh插件在此网站上始终允许！');
        }
      }
    }
  },
  methods: {
    getDetailISBUY () {
      if (this.CONFIG.getResourceDetail !== undefined && this.modulename !== 'videoplay') {
        let params = Object.assign({}, this.CONFIG.getResourceDetail.params);
        params.pubId = this.parentId;
        params.loginName = this.member.loginName;
        Get(CONFIG.BASE_URL + this.CONFIG.getResourceDetail.url + '?pubId=' + params.pubId + '&loginName=' + params.loginName).then((rep) => {
          let datas = rep.data;
          if (rep.status == '200' && datas.data) {
            this.isBuy = datas.data.isBuy;
          }
        })
      }
    },
    getListOrPlayVideo () {
      this.getDetailISBUY()
      if (this.CONFIG.queryParamsType == '') { // 从配置里面去参数
        this.queryResourceLists();
        return false;
      }
      if (!this.parentId) {   //没有parentId表示非视频组，那么播放单个视频
        this.CONFIG.showVideoList = false;  //单个视频不显示轮播列表
        this.getDetailById(this.curId);  //获取当前播放视频的详情信息
        this.$nextTick(() => {
          if (this.resType == 'VIDEO-MEDIA' || this.resType == 'ZILIAOKU') {
            // 如果是视频资源才初始化视频播放器插件
            this.initDPlayer(this.playUrl + this.mediaResId)
          }
        });
      } else {    //有parentId表示视频组，那么去视频组播放视频
        this.CONFIG.showVideoList = true; //视频组需要显示轮播列表
        this.queryResourceLists();
      }
    },
    queryResourceLists () {
      let QUERYCONFIG = this.CONFIG.getResourceLists;
      let paramsObj = JSON.parse(JSON.stringify(QUERYCONFIG.params));
      paramsObj.conditions.map((item) => {
        if (item.hasOwnProperty('pub_parent_id')) {
          item.pub_parent_id = this.parentId;
        }
        if (item.hasOwnProperty('pub_col_id')) {
          item.pub_col_id = item.pub_col_id;
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


          if (this.resType == 'ZILIAOKU') {  //如果是资料库，获取视频附件，
            this.getAttachDetail(this.curId);
          }

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
            if (this.resType == 'VIDEO-MEDIA') { // 如果是视频资源才初始化视频播放器插件
              this.initDPlayer();
            }
            this.initSwiper();
          });
        }
      })
    },
    toPlayVideo (item, index) { // 点击播放视频列表里的某一个
      this.curShowIndex = index;   //当前播放视频的索引
      if (this.resType == 'ZILIAOKU') {  //资料库需要通过附件数据来初始化视频
        this.getAttachDetail(item.id);
        //this.curAttachObj = item;
      } else if (this.resType == 'VIDEO-MEDIA') {
        this.curVideoObj = item;
        this.initDPlayer();
      } else if (this.resType == 'AUDIO-MEDIA') {
        this.curVideoObj = item;
      }
      this.emitDetailEvent(item)
    },
    initDPlayer (url = (this.playUrl + (this.resType == 'ZILIAOKU' ? this.curAttachObj[this.keys.fileRecordID] : this.curVideoObj[this.keys.resourceId]))) { // 初始化视频播放器
      var thePlayer = jwplayer('myDPlayer').setup({
        autostart: 'true',//视频自动启动；
        controls: true,
        flashplayer: this.CORE_PATH + '/js/jwplayer/jwplayer.flash.swf', //获取player.swf文件路径
        html5player: this.CORE_PATH + '/js/jwplayer/jwplayer.html5.js',
        file: url, // 视频地址
        type: this.mediaType,
        width: '100%',
        aspectratio: '5:3',
        provider: "http",
        image: this.CORE_PATH + '/js/jwplayer/player.jpg',
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
    },
    getDetailById (id) {  //获取当前播放视频的详情信息
      let params = Object.assign({}, this.CONFIG.getDetailById.params);
      params.pubId = id;
      params.loginName = this.member.loginName;
      Get(CONFIG.BASE_URL + this.CONFIG.getDetailById.url + '?pubId=' + params.pubId + '&loginName=' + params.loginName).then((rep) => {
        let datas = rep.data;
        if (datas.success && datas.data) {
          this.curVideoObj = datas.data;
          this.emitDetailEvent(this.curVideoObj)
        }
      })
    },
    getAttachDetail (id) {  //获取资料库视频附件的
      let paramsObj = Object.assign({}, this.CONFIG.getResourceDetail.params);
      paramsObj.pubId = id;
      Get(CONFIG.BASE_URL + this.CONFIG.getResourceDetail.url + '?pubId=' + paramsObj.pubId + '&loginName=' + this.loginName + '&attachTypes=' + paramsObj.attachTypes).then((rep) => {
        let datas = rep.data;
        if (rep.status == 200 && datas.data) {
          let attachDetail = datas.data;
          if (attachDetail['video']) {
            this.curAttachObj = attachDetail['video'][0];   //初始化视频播放器需要的附件对象
            this.initDPlayer();
            this.emitDetailEvent(this.curAttachObj)
          }
        }
      })
    },
    emitDetailEvent (detail) {
      let eventName = this.CONFIG.event ? this.CONFIG.event.emitDetail_name : 'resourceDetailLoaded'
      this.$bus.emit(eventName, detail)
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

.work_videoplay_01_myswiper_tips {
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 14px;
  margin-left: auto;
}

.work_videoplay_01_activevideo {
  border: 1px solid #5fbdf9;
  color: #5fbdf9;
  font-weight: bold;
}
</style>
