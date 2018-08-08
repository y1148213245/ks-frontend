/*
 * @Author: song
 * @Date: 2018-02-05 17:24:29
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-08-08 10:47:41
 */
<!-- 活动资讯列表 -->
<template>
  <div class="ui_list_word_01">
    <ul class="listUl">
      <li class="listLi" v-for="(item, index) in activitysList" :key="index" @click="toInfoDetail(item.id, item.pub_col_id)" v-if="index >= (CONFIG.startNum ? CONFIG.startNum : 0)">
        <a v-html="item.information_SYS_TOPIC"></a>
        <!--过滤器修改为使用methods中方法格式化时间-->
        <time class="createTime" v-if="controlTime">{{formatDate(item.information_a_pubTime)}}</time>
      </li>
    </ul>
    <ui_pagination class="ui_list_word_01-paging" v-if="controlPagination" :pageMessage="{totalCount: totalCount - 0 || 0}" :excuteFunction="paging" namespace="pagination"></ui_pagination>

  </div>
</template>

<script>
import { Get, Post } from "@common";
import PROJECT_CONFIG from "projectConfig";
import moment from "moment";
import URL from "url";
export default {
  name: 'ui_list_word_01',
  reused: true,
  props: {
    namespace: String,
    controlPagination: {  // 控制分页显示隐藏  简化版的咨询列表不需要显示分页
      type: Boolean,
      default: true,
    },
    controlTime: {  // 控制时间显示隐藏  简化版的咨询列表不需要显示时间
      type: Boolean,
      default: true,
    },
    maxNum: Number,  // 控制显示的数量 简化版需要控制显示资讯个数
  },
  data () {
    return {
      activitysList: [], // 活动资讯列表
      CONFIG: "",
      totalCount: 0,
      paramsObj: null,  // 请求参数
      colId:'',

    };
  },

  created(){
    this.CONFIG = PROJECT_CONFIG[this.namespace].list_word.list_word_01;
  },

  mounted () {
    this.getLocationQuery();
    this.queryActivityInfo();
  },

  methods: {
    getLocationQuery(){
      let query = URL.parse(document.URL, true).query;
      this.colId = query[this.CONFIG.locationQuery.keys.colId];
    },
    queryActivityInfo (param) { // 活动列表查询
      this.paramsObj = Object.assign({}, this.CONFIG.params);
      if (param) {
        this.paramsObj.pageNo = param.pageNo;
        this.paramsObj.pageSize = param.pageSize;
      }

      let conditions = this.paramsObj.conditions
      if (this.colId) {
        conditions.map(item=>{
          if (item.hasOwnProperty('pub_col_id')) {
            item['pub_col_id'] = this.colId
          }
        })
      }

      this.paramsObj.conditions = JSON.stringify(conditions)
      Post(CONFIG.BASE_URL + this.CONFIG.url, this.paramsObj).then(rep => {
        this.totalCount = rep.data.totalCount;
        var data = rep.data.result;
        if (data && data instanceof Array && data.length > 0) {
          this.activitysList = this.maxNum !== undefined && this.maxNum <= data.length ? data.slice(0, this.maxNum + 1) : data;
        }
      });
    },
    toInfoDetail (pubId, colId) { // 跳转咨询详情
      window.open("../pages/informationdetail.html?pubId=" + pubId + '&conditions=' + this.paramsObj.conditions + '&orderBy=' + this.paramsObj.orderBy + '&pageNo=' + this.paramsObj.pageNo + '&pageSize=' + this.paramsObj.pageSize);
    },
    paging: function ({ pageNo, pageSize }) {  // 翻页
      var param = {
        pageNo: pageNo,
        pageSize: pageSize,
      };
      this.queryActivityInfo(param);
    },
    getStaticText (text) {
      if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]) {
        return this.CONFIG.staticText[text]
      } else {
        return false
      }
    },
    formatDate (value) {
      if (value) {
        return moment(value).format("YYYY-MM-DD");
      } else {
        return this.getStaticText('noDate') ? this.getStaticText('noDate') : "暂无日期";
      }
    }
  },
  // filters: {
  //   formatDate (value) {
  //     if (value) {
  //       return moment(value).format("YYYY-MM-DD");
  //     } else {
  //       return vm.getStaticText('noDate') ? vm.getStaticText('noDate') : '暂无日期';
  //       // return "暂无日期";
  //     }
  //   }
  // }
}

</script>
<style>
.ui_list_word_01 {
  width: 100%;
  margin: 0 auto;
}

.ui_list_word_01 .listUl {
  padding-left: 0px;
  margin: 0px;
}
.ui_list_word_01-paging {
  margin-top: 20px;
}
.ui_list_word_01 .listUl .listLi {
  list-style-type: none;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
}

.ui_list_word_01 .listLi .createTime {
  float: right;
  font-size: 14px;
  color: #bcbcbc;
}
</style>
