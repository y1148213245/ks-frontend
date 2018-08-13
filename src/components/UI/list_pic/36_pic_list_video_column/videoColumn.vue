/* 根据 pub_parent_id 调取 list.do 接口查询 视频组 / 音频组/ 课件组的资源列表 */
<template>
  <div class="ui_list_pic_36">
    <div class="ui_list_pic_36_title">{{display.courseContain}}</div>
    <div class="ui_list_pic_36_column">
      <div class="ui_list_pic_36_column-title">{{display.courseName}}</div>
      <ul class="ui_list_pic_36_videoList">
        <li v-for="(video,index) in videoList" :key="index" @mouseover="showIcon(index)" @mouseout="hideIcon()">
          <div class="ui_list_pic_36_videoList_columnName">{{index + 1}}{{display.symbol}}{{video[keys.resName]}}</div>
          <div class="ui_list_pic_36_videoList_icon" v-if="currentIndex == index">
            <span class="playvideo-tip" @click="toPlayVideo(video)"><i class="fa fa-play-circle"></i>{{display.play}}</span>
            <span class="playtest-tip"><i class="fa fa-file-text"></i>{{display.test}}</span>
          </div>
        </li>
      </ul>
    </div>
    <ui_pagination v-if="videoList && videoList.length" :page-sizes="CONFIG.pageSizes" :pageMessage="{totalCount}" :excuteFunction="paging">
    </ui_pagination>
  </div>
</template>

<script>
import { Post, getFieldAdapter, toOtherPage } from "@common";
import PROJECT_CONFIG from "projectConfig";
import URL from 'url';
export default {
  name: "ui_list_pic_36",
  props: ['namespace', 'modulename'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      display: {},  //静态文字配置
      keys: {},  //字段配置
      videoList: [],  //视频组列表
      currentIndex: '',  //控制icon的显示
      totalCount: '0',  //总页数
      pageNo: '',
      pageSize: '',
      params: {},
      pubId: '',
      pub_parent_id: ''
    }
  },
  created () {
    this.pubId = URL.parse(document.URL, true).query.pubId; // 从地址栏接收栏目id
    this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.list_pic_36[this.modulename];
    this.display = this.CONFIG.display;
    this.keys = getFieldAdapter(this.CONFIG.sysAdapter, this.CONFIG.typeAdapter);
    this.getVideoList();
  },
  methods: {
    getVideoList: function () {
      let paramsObj = Object.assign({}, this.CONFIG.params);
      paramsObj.pageNo = this.pageNo ? this.pageNo : paramsObj.pageNo;
      paramsObj.pageSize = this.pageSize ? this.pageSize : paramsObj.pageSize;
      //conditions只能传字符串格式，因此这么拼接
      paramsObj.conditions.map((item) => {
        if (item.hasOwnProperty('pub_parent_id')) {
          item.pub_parent_id = this.pubId;
        }
        if (item.hasOwnProperty('pub_site_id')) {
          item.pub_site_id = CONFIG.SITE_CONFIG.siteId;
        }
      })

      paramsObj.conditions = JSON.stringify(paramsObj.conditions);
      //paramsObj.conditions = "[{pub_parent_id:" + this.pubId + "},{pub_site_id:" + CONFIG.SITE_CONFIG.siteId + "}]";
      Post(CONFIG.BASE_URL + this.CONFIG.url, paramsObj).then((rep) => {
        let datas = rep.data.result;
        this.totalCount = rep.data.totalCount;
        if (datas) {
          this.videoList = datas;
        }
      });
    },
    showIcon (index) {
      this.currentIndex = index;
    },
    hideIcon () {
      this.currentIndex = -1;
    },
    paging ({ pageNo, pageSize }) {
      this.pageNo = pageNo;
      this.pageSize = pageSize;
      this.getVideoList();
    },
    toPlayVideo (item) {
      switch (item[this.keys.pubResType]) {
        case this.display.book:   //去阅读电子书
          let params = Object.assign({},this.CONFIG.toEbook.params) ;
          let url = CONFIG.READ_URL + '?bookId=' + item[this.keys.resId] + '&readType=' + params.readType + '&bookName=' + item[this.keys.resName] + '&userName=&siteType=' + CONFIG.READ_CONFIG.siteType;
          
          window.open(url);
          break;
        case this.display.audio:  //去播放音频
          let audioParams = Object.assign({},this.CONFIG.toPlayAudio.params);
          window.open(toOtherPage(item,this.CONFIG.toPlayAudio,this.keys)+'&mediaResId='+item[audioParams.audioResId]);
          break;
        case this.display.video:  //去播放视频
          //把video_resource_id传给视频播放器，因为播放单个视频时需要这个id
          let videoParams = Object.assign({},this.CONFIG.toPlayVideo.params);
          window.open(toOtherPage(item,this.CONFIG.toPlayVideo,this.keys)+'&mediaResId='+item[videoParams.videoResId]);
          break;
      }
      // window.open(toOtherPage(video, this.CONFIG.toPlayVideo, keys));
    }
  }
}
</script>

<style scoped>

</style>
