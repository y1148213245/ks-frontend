<!-- 作品列表 -->
<template>
 <div class="work_activitydetail_05">
   <div v-if="viewType == 'complete'">
    <div class="work_activitydetail_05-totalcount">总数<span v-text="totalCount"></span></div>
    <template v-for="(item,index) in list">
      <div class="work_activitydetail_05-item" :key="index">
        <el-row>
          <el-col :span="18">
            <el-row>
              <el-col :span="8" class="work_activitydetail_05-title_box"><div class="work_activitydetail_05-title" v-text="item[keys.title]" @click="toProductDetail(item)"></div></el-col>
              <el-col :span="8" class="work_activitydetail_05-author_box"><div v-text="item[keys.author] || '暂无作者'"></div></el-col>
              <el-col :span="8" class="work_activitydetail_05-date_box"><div>{{item[keys.date] | formatTime}}</div></el-col>
            </el-row>
            <div v-text="item[keys.abstract] || '暂无简介'"></div>
            <div>共<span v-text="item[keys.teacherCommentNum]"></span>篇教师点评</div>
          </el-col>
          <el-col :span="6" class="work_activitydetail_05-vote_box">
            <div>
              <el-button type="button">投票</el-button>
            </div>
            <div><span v-text="item[keys.voteNum]"></span>票</div>
            </el-col>
        </el-row>
      </div>
    </template>
    <ui_pagination :pageMessage="{totalCount}" layout="prev, pager, next, jumper"></ui_pagination>
  </div>
  <div v-else-if="viewType == 'simple'">
    <template v-for="(item,index) in list">
      <div class="work_activitydetail_05-item" :key="index">
        <div class="work_activitydetail_05-title" v-text="item[keys.title]" @click="toProductDetail(item)"></div>
      </div>
    </template>
  </div>
 </div>
</template>

<script>
import URL from "url";
import PROJECT_CONFIG from "projectConfig";
import { Get } from "@common";
import Moment from "moment";

export default {
  name: 'work_activitydetail_05',
  reused: true,
  props: {
    namespace: String,
    module: String,
    viewType: {
      type: String,
      default () {
        return 'complete'
      }
    }
  },
  data () {
    return {
      projectConfig: null,
      keys: null,
      list: [],
      totalCount: 0,
      activityDetailCache: null,
      conditionCache: null,
    };
  },

  computed: {},

  created () {
    this.initConfig();
    this.loadCondition();
    this.projectConfig.isDevelopment ? this.loadData() : this.$bus.on(this.projectConfig.eventName_listenLoadedData, this.loadData);
    this.$bus.on(this.projectConfig.eventName_listenSearch, this.loadCondition);
  },

  mounted () { },

  methods: {
    initConfig () {
      this.projectConfig = PROJECT_CONFIG[this.namespace].activityDetail.work_activitydetail_05[this.module];
      this.keys = this.projectConfig.keys;
    },
    loadCondition (conditions) {//缓存条件
      let params = this.projectConfig.params;
      let keys = this.keys;
      let eventListien_SearchDatasKeyArr = keys.eventListienSearchDatas;
      let condition = null;
      let mustKey = 'activityId';//必传条件key

      let doclibCode = '';
      let relations = '';
      let cols = '';
      let symbols = '';
      let memberType = '';
      let vals = ''
      debugger

      if (!conditions) {
        getCondition([mustKey]);
      } else {
        let arr = JSON.parse(JSON.stringify(eventListien_SearchDatasKeyArr));
        /* 添加必传条件key */
        arr.unshift(mustKey);
        getCondition(arr);
      }

      condition = {
        [keys.getListParam_doclibCode]: doclibCode,
        [keys.getListParam_relations]: relations,
        [keys.getListParam_cols]: cols,
        [keys.getListParam_symbols]: symbols,
        [keys.getListParam_memberType]: memberType,
        [keys.getListParam_vals]: vals,
      }
      this.conditionCache = condition;
      if (conditions) this.loadData();

      function getCondition (eventListienSearchDatas) {
        for (let i = 0, len = eventListienSearchDatas.length; i < len; i++) {

          const vkey = eventListienSearchDatas[i];
          if (vkey == mustKey || conditions && conditions[vkey]) {
            let option = params.getListParamOptions[vkey];
            let splitVal = ',';
            if (i == 0) {
              splitVal = '';
            }
            /* 组装配置的值 */
            relations += splitVal + option.getListParam_relations;
            cols += splitVal + option.getListParam_cols;
            symbols += splitVal + option.getListParam_symbols;
            memberType += splitVal + option.getListParam_memberType;
            /* 加入搜索的值 */
            if (vkey != mustKey) {
              vals += splitVal + conditions[vkey];
            }
            
          }
          debugger
        }
      }
    },
    toProductDetail (product) {
      let param_resourceType = this.keys.toProductDetailParam_resourceType + '=' + this.projectConfig.params.toProductDetailParam_resourceType;
      let param_resourceId = this.keys.toProductDetailParam_resourceId + '=' + product[this.keys.resourceId];
      let param_resourceName = this.keys.toProductDetailParam_resourceName + '=' + product[this.keys.resourceName];
      let param_activityId = this.keys.toProductDetailParam_activityId + '=' + product[this.keys.activityId];

      let url = this.projectConfig.toProductDetailUrl + '?' + param_resourceType + '&' + param_resourceId + '&' + param_resourceName + '&' + param_activityId + '&colId=';
      window.location.href = url;
    },
    loadData (activityDetail) {
      let params = this.projectConfig.params;//配置参数
      let condition = this.conditionCache;//缓存的条件
      let keys = this.keys;//字段配置

      if (activityDetail) {
        this.activityDetailCache = activityDetail; //缓存数据
      }

      let doclibCode = keys.getListParam_doclibCode + '=' + params.getListParam_doclibCode;
      let relations = keys.getListParam_relations + '=' + condition[keys.getListParam_relations];
      let cols = keys.getListParam_cols + '=' + condition[keys.getListParam_cols];
      let symbols = keys.getListParam_symbols + '=' + condition[keys.getListParam_symbols];
      let memberType = keys.getListParam_memberType + '=' + condition[keys.getListParam_memberType];
      let vals = keys.getListParam_vals + '=' + this.activityDetailCache[keys.eventListienLoadDatas_activityId];
      if (condition[keys.getListParam_vals]) {
        vals += condition[keys.getListParam_vals];
      }

      let url = this.projectConfig.url + '?' + doclibCode + '&' + relations + '&' + cols + '&' + symbols + '&' + memberType + '&' + vals;

      Get(url).then((resp) => {
        let data = resp.data.data.content;
        this.list = data;
        this.totalCount = resp.data.data.totalElements
      })


    }
  },
  filters: {
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
.work_activitydetail_05 {
  width: 100%;
}
.work_activitydetail_05-totalcount {
  margin: 10px 0;
  font-size: 14px;
}
.work_activitydetail_05-item {
  margin-top: 10px;
}
.work_activitydetail_05-title_box {
}
.work_activitydetail_05-title {
  cursor: pointer;
}
.work_activitydetail_05-author_box {
}
.work_activitydetail_05-date_box {
  text-align: right;
}
.work_activitydetail_05-vote_box {
  text-align: center;
}
.work_activitydetail_05-vote_box button {
  width: 40%;
}
</style>
