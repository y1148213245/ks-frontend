<!-- 作品列表 -->
<template>
  <div class="work_activitydetail_05">
    <div v-if="viewType == 'complete'">
      <div class="work_activitydetail_05-totalcount" v-if="getIsShow('totalCount')">作品数量:
        <span v-text="totalCount" class="work_activitydetail_05-totalcount_text"></span>
      </div>
      <span class="work_activitydetail_05-list_title_icon"></span>
      <h3 class="work_activitydetail_05-list_title" v-if="CONFIG.listTitle">{{CONFIG.listTitle}}</h3>
      <template v-for="(item,index) in list">
        <div class="work_activitydetail_05-item" :key="index">
          <h2 class="work_activitydetail_05-title">
            <a v-text="item[keys.title]" @click="toProductDetail(item)" href="javascript:void(0)"></a>
          </h2>
          <time class="work_activitydetail_05-date_box">{{item[keys.date] | formatTime}}</time>
          <!-- <p class="work_activitydetail_05-abstract" v-text="item[keys.abstract] || '暂无简介'"></p> -->
          <div class="work_activitydetail_05-info_box">
            <span class="work_activitydetail_05-info_box-author_span">
              <label class="work_activitydetail_05-info_box-author_label">作者：</label>{{item[keys.author] || '暂无作者'}}</span>
            <span class="work_activitydetail_05-info_box-comment_span">
              <i class="work_activitydetail_05-info_box-comment_icon"></i>{{item[keys.teacherCommentNum]}}
              <label class="work_activitydetail_05-info_box-comment_label">评论</label>
            </span>
            <span class="work_activitydetail_05-info_box-vote_span" v-show="activityDetailCache[keys.eventListienLoadDatas_voteSwitch] && activityDetailCache[keys.eventListienLoadDatas_voteSwitch] == '是'">
              <i class="work_activitydetail_05-info_box-vote_icon"></i>{{item[keys.voteNum]}}
              <label class="work_activitydetail_05-info_box-vote_label">赞</label>
            </span>
          </div>

          <div class="work_activitydetail_05-vote_box" v-show="activityIsActive && activityDetailCache[keys.eventListienLoadDatas_voteSwitch] && activityDetailCache[keys.eventListienLoadDatas_voteSwitch] == '是'">
            <work_common_03 class="work_activitydetail_05-vote_box-content" :namespace="namespace" v-on:vote="totalVoteNum" :docid="item[keys.resourceId]" @click="getDocid(item[keys.resourceId])"></work_common_03>
            <div class="work_activitydetail_05-vote_box-content-illustrate">
              <el-tooltip class="item" effect="dark" placement="top">
                <p class="work_activitydetail_05-vote_box-content-illustrate_info" slot="content" v-html="activityDetailCache[keys.eventListienLoadDatas_voteDescription] || '暂无说明'"></p>
                <i class="el-icon-question"></i>
              </el-tooltip>

            </div>
          </div>
        </div>
      </template>
      <ui_pagination :pageMessage="{totalCount}" :excuteFunction="paging" layout="prev, pager, next, jumper"></ui_pagination>
    </div>
    <div v-else-if="viewType == 'simple'">
      <template v-for="(item,index) in list">
        <div class="work_activitydetail_05-simple-item" :key="index">
          <h2 class="work_activitydetail_05-simple-title">
            <a v-text="item[keys.title]" @click="toProductDetail(item)" href="javascript:void(0)"></a>
          </h2>
          <span class="work_activitydetail_05-simple-span">
            <label class="work_activitydetail_05-simple-label">作者：</label>{{item[keys.author] || '暂无作者'}}</span>
        </div>
      </template>
    </div>

    <div v-else-if="viewType == 'classification'">

      <template v-for="(award,index) in awardList" v-if="award.products.length > 0">

        <div class="work_activitydetail_05-classification-title">
          <span v-text="award.title"></span>
        </div>
        <el-table class="work_activitydetail_05-classification-table" :data="award.products">
          <el-table-column :prop="keys.title" label="标题">
            <template slot-scope="scope">
              <a class="work_activitydetail_05-classification-table-a" href="javascript:void(0)" @click="toProductDetail(scope.row)">{{scope.row[keys.title]}}</a>
            </template>
          </el-table-column>
          <el-table-column :prop="keys.author" label="作者"></el-table-column>
          <el-table-column :prop="keys.date" :formatter="colFormatTime" label="时间"></el-table-column>
          <el-table-column :prop="keys.abstract" label="简介"></el-table-column>
        </el-table>

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
      activityIsActive: false,
      awardList: [],
      pageNo: '',
      pageSize: '',
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
    getIsShow (text) {
      let showItemConfig = this.CONFIG.showItem
      if (showItemConfig) {
        if (showItemConfig.indexOf(text) > -1) {
          return true
        } else {
          return false
        }
      } else {
        return true
      }
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
      let memberType = '4';
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

          // if(!(!(vkey == mustKey) && conditions && conditions[vkey] && ) ) continue

          if (vkey == mustKey || (conditions && conditions[vkey]) || getListParamOptions_fixed[vkey]) {
            let option = params.getListParamOptions[vkey] || getListParamOptions_fixed[vkey];
            let splitVal = ',';
            if (i == 0) {
              splitVal = '';
            }
            /* 组装配置的值 */
            relations += splitVal + option.getListParam_relations;
            cols += splitVal + option.getListParam_cols;
            symbols += splitVal + option.getListParam_symbols;
            // memberType += splitVal + option.getListParam_memberType;
            /* 加入搜索的值 */
            if (vkey != mustKey) {
              vals += splitVal + (conditions && conditions.hasOwnProperty(vkey) ? conditions[vkey] : getListParamOptions_fixed[vkey].getListParam_vals);
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
        if (thisTimestamp < this.activityDetailCache[this.keys.eventListienLoadDatas_endDate] && thisTimestamp > this.activityDetailCache[this.keys.eventListienLoadDatas_startDate]) {
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
      /* 增加排序参数 */
      let orderCondition = keys.getListParam_orderCondition + '=' + params.getListParam_orderCondition



      let url = this.CONFIG.url + '?' + doclibCode + '&' + relations + '&' + cols + '&' + symbols + '&' + memberType + '&' + vals + '&' + orderCondition;

      /* 增加分页参数 */
      if (keys.getListParam_pageNo && keys.getListParam_pageSize) {
        let pageNo = keys.getListParam_pageNo + '=' + ((this.pageNo || params.getListParam_pageNo) - 1);
        let pageSize = keys.getListParam_pageSize + '=' + (this.pageSize || params.getListParam_pageSize);
        url += '&' + pageNo + '&' + pageSize
      }

      Get(CONFIG.BASE_URL + url).then((resp) => {
        let data = resp.data.data.content;
        this.list = data;
        this.totalCount = resp.data.data.totalElements
        if (this.CONFIG.getAwardList) {
          this.loadAwardList()
        }
      })
    },
    paging ({ pageNo, pageSize }) {
      this.pageNo = pageNo;
      this.pageSize = pageSize;
      this.loadData();
    },
    loadAwardList () {
      let url = this.CONFIG.getAwardList.url;
      let params = this.CONFIG.getAwardList.params;
      params.vals = this.activityDetailCache[this.keys.eventListienLoadDatas_activityId],
        Get(CONFIG.BASE_URL + url, {
          params
        }).then((resp) => {
          let data = resp.data.content;

          let arr = [];
          let list = this.list
          for (let index = 0; index < data.length; index++) {
            const element = data[index];
            let award = {
              title: '',
              products: [],
            }

            let awardText = element.AWARD_TYPE + ':' + element.SYS_TOPIC;
            award.title = awardText;

            if (list && list instanceof Array) {
              let arrAward = list.filter(entry => {
                return entry.AWARD && entry.AWARD.indexOf(awardText) != -1
              })
              award.products = arrAward;
              arr.push(award)
            }

          }

          this.awardList = arr;
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
    },
    colFormatTime (row, column, cellVal) {
      if (cellVal) {
        return Moment(cellVal).format("YYYY-MM-DD HH:mm")
      } else {
        return '暂无日期'
      }
    }
  },
  filters: {
    formatTime (str) {
      if (str) {
        return Moment(str).format("YYYY-MM-DD HH:mm")
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
.work_activitydetail_05-list_title{
  text-align: center;
}
.work_activitydetail_05-totalcount {
  margin: 10px 0;
  font-size: 14px;
}
.work_activitydetail_05-totalcount_text {
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
.work_activitydetail_05-abstract {
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
.work_activitydetail_05-classification-table {
  width: 100%;
}
.work_activitydetail_05-classification-title {
  font-size: 24px;
}
</style>
