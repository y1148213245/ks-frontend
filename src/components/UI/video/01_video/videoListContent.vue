<!-- 视频组件 Created by 2018/05/03 -->
<template>
  <div class="ui_video_01">

    <ul class="ui_video_01_ul">
      <li class="ui_video_01_li" v-for="(item, index) in resourceLists" :key="index">

        <div class="ui_video_01_cover" @click="toDetail(item)">
          <!-- TODO：目前视频没有封面，先用假数据 -->
          <img class="ui_video_01_img" :src="getCover(item[keys.resourceId])" alt="暂无图片">
          <img class="ui_video_01_icon" src="./data/videoIcon.png" v-if="CONFIG && CONFIG.showItem && CONFIG.showItem.indexOf('videoIcon') !== -1">
        </div>
        
        <div class="ui_video_01_content">

          <h4 class="ui_video_01_resName" @click="toDetail(item)" v-if="CONFIG && CONFIG.showItem && CONFIG.showItem.indexOf('resName') !== -1 && keys.resName && item[keys.resName] != undefined"> {{item[keys.resName]}} </h4>

          <div class="ui_video_01_salePrice" v-if="CONFIG && CONFIG.showItem && CONFIG.showItem.indexOf('salePrice') !== -1 && keys.salePrice && item[keys.salePrice] != undefined"> {{item[keys.salePrice] | formatPriceNew}} </div>

          <div class="ui_video_01_time" v-if="CONFIG && CONFIG.showItem && CONFIG.showItem.indexOf('time') !== -1 && keys.time && item[keys.time] != undefined"> {{item[keys.time]}} </div>

          <div class="ui_video_01_cata" v-if="CONFIG && CONFIG.showItem && CONFIG.showItem.indexOf('cata') !== -1 && keys.cata && item[keys.cata] != undefined"> {{item[keys.cata]}} </div>

          <div class="ui_video_01_starnum" v-if="CONFIG && CONFIG.showItem && CONFIG.showItem.indexOf('starnum') !== -1 && keys.starnum && item[keys.starnum] != undefined"> <el-rate v-model="item[keys.starNum]"></el-rate></div>

        </div>

      </li>
    </ul>
    <ui_pagination v-if="CONFIG.showItem.indexOf('paging') !== -1" :pageMessage="{totalCount: this.totalCount - 0 || 0}" :pageSizes="CONFIG.pageSizes || [15, 20, 50, 100]" :excuteFunction="paging"></ui_pagination>
  </div>
</template>

<script>
import { Get, Post, DrawImage, getFieldAdapter } from "@common";
import PROJECT_CONFIG from "projectConfig";
import URL from "url";
export default {
  name: "ui_video_01",
  props: ["namespace", "modulename"],
  reused: true,
  data () {
    return {
      CONFIG: null,
      resourceLists: [], // 获取到的资源列表
      paramsCache: "",
      totalCount: 0,
      videoWidth: null, // 视频封面的宽高
      videoHeight: null, // 视频封面的宽高
      coverSrc: "", // 视频封面链接
    };
  },
  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].ui_video.ui_video_01[this.modulename];
    this.coverSrc = this.CONFIG.getResourceList.coverSrc;
    this.keys = getFieldAdapter(this.CONFIG.getResourceList.sysAdapter, this.CONFIG.getResourceList.typeAdapter);
  },
  mounted () {

    /* console.log(this.keys); */
    this.getLocationParams();
    this.getResourceLists();
  },
  methods: {
    getLocationParams () {
      let paramsObj = Object.assign({}, this.CONFIG.getResourceList.params);

      if (this.CONFIG.getResourceList.queryLocation) {
        let queryLocation = this.CONFIG.getResourceList.queryLocation;/* 配置参数 */
        if (queryLocation.isQuery) {
          let query = URL.parse(document.URL, true).query;/* 地址栏参数 */
          for (const key in queryLocation.keys) {
            const element = queryLocation.keys[key];/* params的key名 */
            /* 遍历params 赋值 */
            for (let index = 0; index < paramsObj.conditions.length; index++) {
              const param = paramsObj.conditions[index];
              if (param.hasOwnProperty(element)) {
                param[element] = query[key];
                break;
              }
            }
          }
        }
      }
      this.paramsCache = paramsObj;
    },
    getResourceLists () {
      let paramsObj = JSON.parse(JSON.stringify(this.paramsCache));

      paramsObj.pageSize = this.CONFIG.maxNum ? this.CONFIG.maxNum + "" : paramsObj.pageSize;
      paramsObj.conditions = JSON.stringify(paramsObj.conditions)
      Post(CONFIG.BASE_URL + this.CONFIG.getResourceList.url, paramsObj).then((rep) => {
        if (rep.data.success) {
          let datas = rep.data.result;
          this.resourceLists = datas;
          this.videoWidth = this.CONFIG.getResourceList.videoWidth;
          this.videoHeight = this.CONFIG.getResourceList.videoHeight;
          this.$nextTick(() => {
            let imgDomArr = document.getElementsByClassName('ui_video_01_img');
            for (var i = 0, len = imgDomArr.length; i < len; i++) {
              imgDomArr[i].onload = DrawImage(imgDomArr[i], this.videoWidth, this.videoHeight);
            }
          })
          this.totalCount = rep.data.totalCount;
        }
      });
    },
    paging ({ pageNo, pageSize }) {
      this.paramsCache.pageNo = pageNo;
      this.paramsCache.pageSize = pageSize;
      this.getResourceLists();
    },
    toDetail (item) { // 去详情页面
      let config = this.CONFIG.toDetail;
      let url = config.url + '?';
      let _this = this;
      for (const key in config.dataKeys) {
        const element = config.dataKeys[key];
        url += key + '=' + item[element] + '&';
      }
      for (const key in config.fixedKeys) {
        const element = config.fixedKeys[key];
        url += key + '=' + element + '&';
      }
      url = url.substring(0, url.length - 1);
      window.location.href = url;
    },
    getCover (id) { // 获取视频封面
      return CONFIG.BASE_URL + this.coverSrc + id;
    }
  }

}
</script>
<style>
.ui_video_01_mydplayer {
  width: 800px;
}

.ui_video_01_ul {
  list-style-type: none;
  display: inline-block;
}

.ui_video_01_li {
  display: inline-block;
}

.ui_video_01_cover {
  position: relative;
  cursor: pointer;
  width: 380px;
  height: 240px;
  background-color: #eee;
  margin-right: 20px;
}

.ui_video_01_img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.ui_video_01_icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70px;
}

.ui_video_01_resName {
  cursor: pointer;
}
</style>