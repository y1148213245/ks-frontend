<!-- 作品列表 -->
<template>
 <div class="work_activitydetail_05">
   <div v-if="viewType == 'complete'">
    <div class="work_activitydetail_05-totalcount">总数<span v-text="totalCount" class="work_activitydetail_05-totalcount_text"></span></div>
    <template v-for="(item,index) in list">
      <div class="work_activitydetail_05-item" :key="index">
        <h2 class="work_activitydetail_05-title" v-text="item[keys.title]" @click="toProductDetail(item)"></h2>
        <time class="work_activitydetail_05-date_box">{{item[keys.date] | formatTime}}</time>
        <p class="work_activitydetail_05-abstract" v-text="item[keys.abstract] || '暂无简介'"></p>
        <div class="work_activitydetail_05-info_box">
          <span class="work_activitydetail_05-info_box-author_span"><label class="work_activitydetail_05-info_box-author_label">作者：</label>{{item[keys.author] || '暂无作者'}}</span>
          <span class="work_activitydetail_05-info_box-comment_span"><i class="work_activitydetail_05-info_box-comment_icon"></i>{{item[keys.teacherCommentNum]}}<label class="work_activitydetail_05-info_box-comment_label">评论</label></span>
          <span class="work_activitydetail_05-info_box-vote_span"><i class="work_activitydetail_05-info_box-vote_icon"></i>{{item[keys.voteNum]}}<label class="work_activitydetail_05-info_box-vote_label">赞</label></span>
        </div>
        
        <div class="work_activitydetail_05-vote_box" v-show="activityIsActive && activityDetailCache[keys.eventListienLoadDatas_voteSwitch] && activityDetailCache[keys.eventListienLoadDatas_voteSwitch] == '是'">
          <work_common_03 class="work_activitydetail_05-vote_box-content" :namespace="namespace" v-on:vote="totalVoteNum" :docid="item[keys.resourceId]" @click="getDocid(item[keys.resourceId])"></work_common_03>
          <div class="work_activitydetail_05-vote_box-content-illustrate">
            <i class="el-icon-question"></i>
            <div class="work_activitydetail_05-vote_box-content-illustrate-content" v-html="activityDetailCache[keys.eventListienLoadDatas_voteDescription] || '暂无说明'"></div>
          </div>
        </div>
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

   <div v-else-if="viewType == 'classification'">
    <template v-for="(name,i) in CONFIG.classification.titles">
      <div class="work_activitydetail_05-classification-item" :key="i">
        <div class="work_activitydetail_05-classification-item-name">{{name}}</div>
        <!-- v-if="item[CONFIG.classification.key] == name" -->
        <template v-for="(item,index) in list" >
          <div class="work_activitydetail_05-item" :key="index">
            <el-row>
              <el-col :span="24">
                <el-row>
                  <el-col :span="8" class="work_activitydetail_05-title_box"><div class="work_activitydetail_05-title" v-text="item[keys.title]" @click="toProductDetail(item)"></div></el-col>
                  <el-col :span="8" class="work_activitydetail_05-author_box"><div v-text="item[keys.author] || '暂无作者'"></div></el-col>
                  <el-col :span="8" class="work_activitydetail_05-date_box"><div>{{item[keys.date] | formatTime}}</div></el-col>
                </el-row>
                <div v-text="item[keys.abstract] || '暂无简介'"></div>
              </el-col>
            </el-row>
          </div>
        </template>
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
      CONFIG: null,
      keys: null,
      list: [],
      totalCount: 0,
      activityDetailCache: null,
      conditionCache: null,
      isIllustrateActive: false,
      activityIsActive:false,
    };
  },

  computed: {
  },

  created () {
    this.initConfig();
    this.loadCondition();
    this.CONFIG.isDevelopment ? this.loadData() : this.$bus.on(this.CONFIG.eventName_listenLoadedData, this.loadData);
    this.$bus.on(this.CONFIG.eventName_listenSearch, this.loadCondition);
  },

  mounted () { },

  methods: {
    getDocid (id) {
      this.docId = id;
    },
    initConfig () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].activityDetail.work_activitydetail_05[this.module];
      this.keys = this.CONFIG.keys;
    },
    loadCondition (conditions) {//缓存条件
      let params = this.CONFIG.params;
      let keys = this.keys;
      let eventListien_SearchDatasKeyArr = keys.eventListienSearchDatas;
      let condition = null;
      let mustKey = 'activityId';//必传条件key

      let doclibCode = '';
      let relations = '';
      let cols = '';
      let symbols = '';
      let memberType = '';
      let vals = '';

      let keyArr = [mustKey];/* 查询条件配置 key数组,通过其中配置的值来组装哪些字段的参数 */
      let getListParamOptions_fixed = this.CONFIG.params.getListParamOptions_fixed;/* 查询字段的具体值配置 */
      if (getListParamOptions_fixed) {
        for (const key in getListParamOptions_fixed) {
          keyArr.push(key);
        }
      }

      if (!conditions) {
        getCondition(keyArr);
      } else {
        let arr = JSON.parse(JSON.stringify(eventListien_SearchDatasKeyArr));
        /* 添加必传条件key */
        // arr.unshift(mustKey);
        keyArr = keyArr.concat(arr)
        getCondition(keyArr);
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

      function getCondition (keyArr) {
        for (let i = 0, len = keyArr.length; i < len; i++) {

          const vkey = keyArr[i];
          if (vkey == mustKey || (conditions && conditions[vkey]) || getListParamOptions_fixed) {
            let option = params.getListParamOptions[vkey] || getListParamOptions_fixed[vkey];
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
              vals += splitVal + (conditions && conditions[vkey] ? conditions[vkey] : getListParamOptions_fixed[vkey].getListParam_vals);
            }
          }
        }
      }
    },
    toProductDetail (product) {
      let param_resourceType = this.keys.toProductDetailParam_resourceType + '=' + this.CONFIG.params.toProductDetailParam_resourceType;
      let param_resourceId = this.keys.toProductDetailParam_resourceId + '=' + product[this.keys.resourceId];
      let param_resourceName = this.keys.toProductDetailParam_resourceName + '=' + product[this.keys.resourceName];
      let param_activityId = this.keys.toProductDetailParam_activityId + '=' + product[this.keys.activityId];

      let url = this.CONFIG.toProductDetailUrl + '?' + param_resourceType + '&' + param_resourceId + '&' + param_resourceName + '&' + param_activityId + '&colId=';
      window.location.href = url;
    },
    loadData (activityDetail) {
      let params = this.CONFIG.params;//配置参数
      let condition = this.conditionCache;//缓存的条件
      let keys = this.keys;//字段配置

      if (activityDetail) {
        this.activityDetailCache = activityDetail; //缓存数据
        //判断活动过期
          let thisTimestamp = new Date().getTime();
          if (thisTimestamp < this.activityDetailCache[this.keys.eventListienLoadDatas_endDate]) {
            this.activityIsActive = true;
          } else {
            this.activityIsActive = false;
          }
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

      let url = this.CONFIG.url + '?' + doclibCode + '&' + relations + '&' + cols + '&' + symbols + '&' + memberType + '&' + vals;

      Get(CONFIG.BASE_URL+url).then((resp) => {
        let data = resp.data.data.content;
        this.list = data;
        this.totalCount = resp.data.data.totalElements
      })
    },
    /* 投票后刷新数量 */
    totalVoteNum (data, id) {
      let arr = this.list.filter((entry) => {
        return entry[this.keys.resourceId] == id
      })
      if (arr.length > 0) {
        arr[0][this.keys.voteNum] = data;
      }
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
.work_activitydetail_05-totalcount_text{

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
.work_activitydetail_05-abstract{

}
.work_activitydetail_05-vote_box {
  text-align: center;
}
.work_activitydetail_05-vote_box-content {
  display: inline-block;
  width: 70%;
}
.work_activitydetail_05-vote_box-content .is-dark {
  background-color: tomato;
}
.el-tooltip__popper.is-dark {
  background-color: tomato;
}
.work_activitydetail_05-vote_box-content-illustrate {
  display: inline-block;
  position: relative;
}
.work_activitydetail_05-vote_box-content-illustrate-content {
  position: absolute;
  top: 0;
  left: 20px;
  display: none;
  width: 200px;
  padding: 5px;
  background-color: #e15616;
  color: white;
  z-index: 100;
}
.work_activitydetail_05-vote_box-content-illustrate:hover
  .work_activitydetail_05-vote_box-content-illustrate-content {
  display: block;
}
.work_activitydetail_05-vote_box button {
  width: 90%;
}
.work_activitydetail_05-classification-item-name {
  padding: 20px 0;
  height: 50px;
  line-height: 50px;
  font-size: 24px;
}
</style>
