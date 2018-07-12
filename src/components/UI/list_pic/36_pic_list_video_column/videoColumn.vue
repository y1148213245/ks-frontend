<template>
    <div class="ui_list_pic_36">
      <div class="ui_list_pic_36_title">{{display.courseContain}}</div>
      <div class="ui_list_pic_36_column">
        <div class="ui_list_pic_36_column-title">{{display.courseName}}</div>
        <ul class="ui_list_pic_36_videoList">
          <li v-for="(video,index) in videoList" @click="toPlayVideo(video,keys)">
            <div class="ui_list_pic_36_videoList_columnName" @mouseover="showIcon(index)" @mouseout="hideIcon()">{{index + 1}}、{{video[keys.column]}}</div>
            <i class="ui_list_pic_36_videoList_icon" v-if="currentIndex == index"></i>
          </li>
        </ul>
      </div>
      <ui_pagination :page-sizes="CONFIG.pageSizes" :pageMessage="{totalCount}" :excuteFunction="paging"></ui_pagination>
    </div>
</template>

<script>
  import { Post, toOtherPage } from "@common";
  import PROJECT_CONFIG from "projectConfig";
    export default {
      name: "ui_list_pic_36",
      props: ['namespace', 'modulename'],
      reused: true,
      data(){
        return {
          CONFIG: null,
          display: {},  //静态文字配置
          keys: {},  //字段配置
          videoList: [],  //视频组列表
          currentIndex: '',  //控制icon的显示
          totalCount: '0',  //总页数
          pageNo: '',
          pageSize: '',
          params: {}
        }
      },
      created(){
        this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.list_pic_36[this.modulename];
        this.display = this.CONFIG.display;
        this.keys = this.CONFIG.keys;
        this.getVideoList();
      },
      methods: {
        getVideoList: function () {
          let paramsObj = Object.assign({}, this.CONFIG.params);
          paramsObj.pageNo = this.pageNo ? this.pageNo : paramsObj.pageNo;
          paramsObj.pageSize = this.pageSize ? this.pageSize : paramsObj.pageSize;
          Post(CONFIG.BASE_URL + this.CONFIG.url, paramsObj).then((rep) => {
            let datas = rep.data.result;
            this.totalCount = rep.data.totalCount;
            console.log(datas);
            if (datas) {
              this.videoList = datas;
            }
          });
        },
        showIcon(index){
          this.currentIndex = index;
        },
        hideIcon(){
          this.currentIndex = -1;
        },
        paging ({ pageNo, pageSize }) {
          this.pageNo = pageNo;
          this.pageSize = pageSize;
          this.getVideoList();
        },
        toPlayVideo(video,keys){
          console.log(video);
          window.open(toOtherPage(video, this.CONFIG.toDetail, keys));
        }
      }
    }
</script>

<style scoped>
.ui_list_pic_36_videoList_icon {
  float: right;
}
  .ui_list_pic_36_videoList_icon:before {
    content: "\f144";
  }
</style>
