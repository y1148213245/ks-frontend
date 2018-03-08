<!-- 竞赛新闻组件 -->
<template>
 <div class="work_activitydetail_03">
   <template v-for="(item,index) in  list">
    <div class="work_activitydetail_03-item" :key="index">
      <div class="work_activitydetail_03-item-title" v-text="item[keys.title]" @click="toDetail(item)"></div>
      <div class="work_activitydetail_03-item-img_box">
        <img class="work_activitydetail_03-item-img" :src="getPicUrl(item[keys.picId])" alt="暂无图片">
      </div>
      <div class="work_activitydetail_03-item-content">
        <span class="work_activitydetail_03-item-content-date">{{item[keys.date] | formatTime}}</span>
        <div class="work_activitydetail_03-item-content-abstract" v-text="item[keys.abstract]"></div>
      </div>
    </div>
   </template>
 </div>
</template>

<script>
import URL from "url";
import PROJECT_CONFIG from "projectConfig";
import { Get } from "@common";
import Moment from "moment";
export default {
  name: 'work_activitydetail_03',
  reused: true,
  props: {
    namespace: String
  },
  data () {
    return {
      projectConfig: null,
      keys: null,
      list: [],
      activityDetailCache: null,
      pagingConfig: {
        pageNo: '',
        pageSize: '',
      }
    };
  },

  computed: {},

  created () {
    this.initConfig();
    this.projectConfig.isDevelopment ? this.loadDatas() : this.$bus.on(this.projectConfig.eventName_listen, this.loadDatas);
  },

  mounted () { },

  methods: {
    initConfig () {
      this.projectConfig = PROJECT_CONFIG[this.namespace].activityDetail.work_activitydetail_03;
      this.keys = this.projectConfig.keys;
      this.pagingConfig.pageNo = this.projectConfig.params.getListParam_pageNo;
      this.pagingConfig.pageSize = this.projectConfig.params.getListParam_pageSize;
    },
    loadDatas (activityDetail) {
      let keys = this.keys;
      if (activityDetail) {
        this.activityDetailCache = activityDetail; //缓存数据
      }

      let activityID = keys.getListParam_activityID + '=' + this.activityDetailCache[keys.eventListenData_activityId];
      let pageNo = keys.getListParam_pageNo + '=' + this.pagingConfig.pageNo;
      let pageSize = keys.getListParam_pageSize + '=' + this.pagingConfig.pageSize;
      let orderBy = keys.getListParam_orderBy + '=' + this.projectConfig.params.getListParam_orderBy;

      let url = this.projectConfig.url + '?' + activityID + '&' + pageNo + '&' + pageSize + '&' + orderBy;
      Get(url).then((resp) => {
        let data = resp.data.data;
        this.list = data;
      })
    },
    toDetail (item) {
      let keys = this.keys;
      if (this.projectConfig.toDetailMode.event) {
        /* 组装列表的查询条件 */
        let listConfig = {
          [keys.getListParam_activityID]: this.activityDetailCache[keys.eventListenData_activityId],
          [keys.getListParam_pageNo]: this.pagingConfig.pageNo,
          [keys.getListParam_pageSize]: this.pagingConfig.pageSize,
          [keys.getListParam_orderBy]: this.projectConfig.params.getListParam_orderBy
        }
        this.$bus.emit(this.projectConfig.toDetailMode.event.name, item, listConfig)
      } else if (this.projectConfig.toDetailMode.href) {
        let hrefMode = this.projectConfig.toDetailMode.href;
        let params = hrefMode.params;
        let url = hrefMode.url + '?';

        /* 装载参数 */
        for (const key in params) {
          url += key + '=' + item[params[key]] + '&';
        }
        var _url = url.substring(0, url.length - 1);
        window.location.href = _url;
      }

    },
    /* 获取新闻图片 */
    getPicUrl (coverId) {
      let url = this.projectConfig.getPicUrl;
      url += '?' + this.keys.getPicParam_coverId + '=' + coverId;
      return url;
    }
  },
  filters: {
    /* 时间戳转日期 */
    formatTime (str) {
      if (str) {
        return Moment(str).format("YYYY-MM-DD hh:mm")
      } else {
        return '暂无日期'
      }
    }
  }
}

</script>
<style>
.work_activitydetail_03 {
  width: 100%;
}
.work_activitydetail_03-item {
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid slategray;
  overflow: hidden;
}
.work_activitydetail_03-item-title {
  margin: 10px 0;
  font-size: 18px;
}
.work_activitydetail_03-item-img_box {
  float: left;
  width: 200px;
}
.work_activitydetail_03-item-img {
  border: 1px solid black;
  width: 100%;
  height: 100%;
  text-align: center;
}
.work_activitydetail_03-item-content {
  margin-left: 200px;
  padding: 10px;
  font-size: 12px;
}
.work_activitydetail_03-item-content-date {
  font-size: 12px;
  color: #aeaeae;
}
.work_activitydetail_03-item-content-abstract {
}
</style>
