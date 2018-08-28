/* 根据 pub_parent_id 调取 list.do 接口查询 视频组 / 音频组/ 课件组的资源列表 */
<template>
  <div class="ui_list_pic_36">
    <div class="ui_list_pic_36_title">{{display.courseContain}}</div>
    <div class="ui_list_pic_36_column">
      <div class="ui_list_pic_36_column-title">{{display.courseName}}</div>
      <!-- 需要通过配置来判断是否购买的课程 -->
      <div v-if="CONFIG && CONFIG.needtobuy" class="ui_list_pic_36_videoList_out">
        <ul class="ui_list_pic_36_videoList" v-if="videoList && videoList.length && isBuy == '1'">
          <!-- 已经购买 课程列表全部展示-->
          <li v-for="(video,index) in videoList" :key="index" @mouseover="showIcon(index)" @mouseout="hideIcon()" @click="toPlayVideo(video)">
            <div class="ui_list_pic_36_videoList_columnName">{{index + 1}}{{display.symbol}}{{video[keys.resName]}}</div>
            <div class="ui_list_pic_36_videoList_icon" v-show="currentIndex == index">
              <span class="playvideo-tip" @click.stop="toPlayVideo(video)"><i class="fa" :class="[resourceDetail[keys.pubResType] == 'ZILIAOZU' ? 'fa-file-text' : 'fa-play-circle']"></i>{{resourceDetail[keys.pubResType] == 'ZILIAOZU' ? display.read : display.play}}</span>              
            </div>
          </li>
        </ul>
        <ul class="ui_list_pic_36_videoList" v-if="videoList && videoList.length && isBuy == '0'">
          <!-- 还未购买 只给第一条课程添加事件-->
          <li v-for="(video,index) in videoList" :key="index" @click="toPlayVideo(video)" v-if="index < (CONFIG.freeCourseNum ? CONFIG.freeCourseNum : 0)" class="ui_list_pic_36_videoList_first">
            <div class="ui_list_pic_36_videoList_columnName">{{index + 1}}{{display.symbol}}{{video[keys.resName]}}</div>
            <div class="ui_list_pic_36_videoList_icon">
              <span class="playvideo-tip" @click.stop="toPlayVideo(video)"><i class="fa" :class="[resourceDetail[keys.pubResType] == 'ZILIAOZU' ? 'fa-file-text' : 'fa-play-circle']"></i>{{resourceDetail[keys.pubResType] == 'ZILIAOZU' ? display.read : display.play}}</span>
            </div>
          </li>
          <li v-for="(video,index) in videoList" :key="index" v-if="index >= (CONFIG.freeCourseNum ? CONFIG.freeCourseNum : 0)" class="ui_list_pic_36_videoList_others">
            <div class="ui_list_pic_36_videoList_columnName">{{index + 1}}{{display.symbol}}{{video[keys.resName]}}</div>
          </li>
        </ul>
        <div v-else>{{display.noData || '暂无数据'}}</div>
      </div>
      <!-- 不需要判断是否购买的课程，直接展示 -->
      <div v-else class="ui_list_pic_36_videoList_out">
        <ul class="ui_list_pic_36_videoList" v-if="videoList && videoList.length">
          <li v-for="(video,index) in videoList" :key="index" @mouseover="showIcon(index)" @mouseout="hideIcon()" @click="toPlayVideo(video)">
            <div class="ui_list_pic_36_videoList_columnName">{{index + 1}}{{display.symbol}}{{video[keys.resName]}}</div>
            <div class="ui_list_pic_36_videoList_icon" v-show="currentIndex == index">
              <span class="playvideo-tip" @click.stop="toPlayVideo(video)"><i class="fa fa-play-circle"></i>{{display.play}}</span>
              <span style="display: none" class="playtest-tip" @click.stop="toReadTest(video)"><i class="fa fa-file-text"></i>{{display.test}}</span>
            </div>
          </li>
        </ul>
        <div v-else>{{display.noData || '暂无数据'}}</div>
      </div>
    </div>
    <ui_pagination v-if="videoList && videoList.length" :page-sizes="CONFIG.pageSizes" :pageMessage="{totalCount}" :excuteFunction="paging">
    </ui_pagination>
    <el-dialog :title="dialogTitle" :visible.sync="isDialogShow" :close-on-click-modal="modal">
      <el-button type="info" round @click="changeBtn()">{{istest?display.anwser:display.testWord}}</el-button>
      <img :src="attachSrc">
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as interfaces from "@work/login/common/interfaces.js";
import { Post, Get, getFieldAdapter, toOtherPage } from "@common";
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
      pub_parent_id: '',
      isBuy: "0",   //判断课程是否购买
      resourceDetail: {},  //存在课程详情信息
      isDialogShow: false,  //是否显示测试卷弹窗
      dialogTitle: '',  //弹窗标题
      istest: true,  //按钮文字默认显示答案
      modal: false,
      attachSrc: "",   //用于存放附件图片src的
      attachPicture: {},  //用于存放答案和测试卷的recordId的
      
    }
  },
  computed: {
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER
    }),
  },
  created () {
    this.pubId = URL.parse(document.URL, true).query.pubId; // 从地址栏接收栏目id
    this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.list_pic_36[this.modulename];
    this.display = this.CONFIG.display;
    this.keys = getFieldAdapter(this.CONFIG.sysAdapter, this.CONFIG.typeAdapter);
    this.getVideoList();
    if(this.CONFIG && this.CONFIG.getResourceDetail){
      this.getResourceDetail();
    }
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
    //获取课程详情信息
    getResourceDetail(){
      let paramsObj = Object.assign({},this.CONFIG.getResourceDetail.params);
      paramsObj.pubId = this.pubId;
      Get(CONFIG.BASE_URL + this.CONFIG.getResourceDetail.url + '?pubId=' + paramsObj.pubId + '&loginName=' + this.loginName).then((rep)=>{
        let datas = rep.data;
        if (rep.status == 200 && datas.data) {
          this.resourceDetail = datas.data;
          this.isBuy = this.resourceDetail[this.keys.isbuy];
        }else {
          this.$message({
            type: "error",
            message: "数据获取失败"
          })
        }
      })
    },
    // 获取附件详情信息
    getAttachDetail(item,attach){   //附件类型参数可传可不传，
      let paramsObj = Object.assign({},this.CONFIG.getResourceDetail.params);
      paramsObj.pubId = item.id;
      paramsObj.attachTypes = attach;
      Get(CONFIG.BASE_URL + this.CONFIG.getResourceDetail.url + '?pubId=' + paramsObj.pubId + '&loginName=' + this.loginName+ '&attachTypes=' + paramsObj.attachTypes).then((rep)=>{
        let datas = rep.data;
        if (rep.status == 200 && datas.data) {
          let attachDetail = datas.data;
          let attachList = [];
          // 如果有附件，执行以下操作
          if(attachDetail[attach]){
            if(attach == 'video'){
              // 如果附件是视频，那么把该资料库的pub_parentId和pub_id以及当前附件视频的fileRecordID传到视频播放器，在视频播放器中处理资料库的视频附件
              attachList = attachDetail[attach][0];
              window.open(toOtherPage(item,this.CONFIG.toPlayZLKVideo,this.keys)+'&mediaResId='+ attachList['fileRecordID']);
            }else if(attach == 'orgicpic'){
              // 如果附件是图片，遍历图片，把相应图片的fileRecordID存起来
              attachList  = attachDetail[attach];
              for(let attach of attachList){
                if(attach.attachName.includes('答案')){
                  this.attachPicture['answerRecordId'] = attach.fileRecordID;
                }else {
                  this.attachPicture['testRecordId'] = attach.fileRecordID;
                }
              }
              // 默认展示测试卷图片
              this.attachSrc = CONFIG.BASE_URL + this.CONFIG.getAttachPictureUrl + this.attachPicture['testRecordId'];
              
            }else if(attach == 'lowqualitypdf'){
              // 如果附件是PDF，那么直接取第一个，去阅读器阅读
              attachList = attachDetail[attach][0];
              console.log(attachList);
              
              let params = Object.assign({},this.CONFIG.toEbook.params) ;
              let url = CONFIG.READ_URL + '?bookId=' + attachList['attachID'] + '&readType=' + params.readType + '&bookName=' + attachList['attachName'] + '&userName=&siteType=' + CONFIG.READ_CONFIG.siteType + '&doclibCode=ZILIAOKU';
              console.log(url);
              
              window.open(url);

            }
          }
        }else {
          this.$message({
            type: "error",
            message: "数据获取失败"
          })
        }
      })
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
        case this.display.ziliao:
          this.getAttachDetail(item,this.CONFIG.ziliaozuAttachType);
          break;
      }
      // window.open(toOtherPage(video, this.CONFIG.toPlayVideo, keys));
    },
    toReadTest(item){
      this.dialogTitle = item[this.keys.resName];
      this.attachSrc = '';
      this.istest = true;
      this.getAttachDetail(item,'orgicpic');
      this.isDialogShow = true;
    },
    changeBtn(){
      this.istest = !this.istest;
      // 展示测试卷图片或者是答案图片
      this.attachSrc = this.istest ? (CONFIG.BASE_URL + this.CONFIG.getAttachPictureUrl + this.attachPicture['testRecordId'])
                                   : (CONFIG.BASE_URL + this.CONFIG.getAttachPictureUrl + this.attachPicture['answerRecordId']);
    }
  },
  watch: {
    member: function (newValue, oldValue) {
      console.log(newValue);
      console.log(oldValue);
      if (newValue.loginName && newValue.loginName != oldValue.loginName) {
        this.loginName = newValue.loginName;
      }
    }
  }
}
</script>

<style scoped>

</style>
