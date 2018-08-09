<!-- 资讯列表页组件 -->
<template>
  <div class="ui_list_pic_30">
        <p class="ui_list_pic_30_location">
          <template v-for="(item,index) in CONFIG.crumb">
            <a :href="item.href" :key="index">{{item.title}}</a>>
          </template>
          {{titleName ? titleName : CONFIG.comTitle.name}}</p>
        <h3 class="ui_list_pic_30_title" v-if="CONFIG && CONFIG.comTitle && CONFIG.comTitle.isShow">{{titleName ? titleName : CONFIG.comTitle.name}}</h3>
        <div class="ui_list_pic_30_content">
            <ul class="ui_list_pic_30_content_btns">
                <li v-if="busMessage && busMessage.length > 0" class="ui_list_pic_30_content_btns_all" :class="{'ui_list_pic_30-col--active':colId == busMessage[0] || currentColActive == -1}" @click="searchList(-1)">全部</li>
                <li class="ui_list_pic_30_content_btns_li"  v-for="(item,index) in childName" :class="{'ui_list_pic_30-col--active':colId == childId[index]}"  v-if="childName" @click="searchList(index)" :key=index>{{item}}</li>
            </ul>
            <p class="ui_list_pic_30_content_lists_sort" v-if="resourceListsConfig && resourceListsConfig.display && resourceListsConfig.showItem">
                <span class="ui_list_pic_30_content_lists_sort_item" v-for="(item, index) in resourceListsConfig.showItem" :key=index >{{resourceListsConfig.display[item]}}</span>
            </p>
            <ul class="ui_list_pic_30_content_lists">
                <li class="ui_list_pic_30_content_lists_li" v-for="(item,index) in infoList" :key=index >
                  <template v-for="(config, config_i) in resourceListsConfig.complicatedItem">
                    <!-- 最后修改时间 -->
                    <span class="ui_list_pic_30_content_lists_time" :key="config_i" v-if="config.name == 'time'" v-show="resourceListsConfig.showItem.indexOf('time') !=-1">
                      <label class="ui_list_pic_30_content_time_label">{{config.display}}</label>
                      <span v-bind="{class: 'ui_list_pic_30_content_' + config.field}">{{ item[keys[config.field]] | formatDateNEW}}</span>
                    </span>

                    <!-- title 标题 -->
                    <span class="ui_list_pic_30_content_lists_tit" :key="config_i" v-else-if="config.name == 'title'" v-show="resourceListsConfig.showItem.indexOf('title') !=-1">
                      <label class="ui_list_pic_30_content_tit_label">{{config.display}}</label>
                      <span v-bind="{class: 'ui_list_pic_30_content_' + config.field}" @click="toDetail(item)" v-html="item[keys[config.field]]"></span>
                    </span>

                    <!-- 创建时间 -->
                    <span class="ui_list_pic_30_content_lists_created" :key="config_i" v-else-if="config.name == 'createdTime'" v-show="resourceListsConfig.showItem.indexOf('createdTime') !=-1">
                      <label class="ui_list_pic_30_content_created_label">{{config.display}}</label>
                      <span v-bind="{class: 'ui_list_pic_30_content_' + config.field}">{{ item[keys[config.field]] | formatDateNEW}}</span>
                    </span>

                    <!-- 子导航类别 -->
                    <span class="ui_list_pic_30_content_lists_sort" :key="config_i" v-else-if="config.name == 'sort'" v-show="resourceListsConfig.showItem.indexOf('sort') !=-1">
                      <label class="ui_list_pic_30_content_sort_label">{{config.display}}</label>
                      <span v-bind="{class: 'ui_list_pic_30_content_' + config.field}">{{ item[keys[config.field]] | formatColumnName}}</span>
                    </span>

                    <!-- 其他不需要特殊处理的简单项 -->
                    <span :key="config_i" v-else  class="ui_list_pic_30_content_lists_other">
                      <label class="ui_list_pic_30_content_lists_label">{{config.display}}</label>
                      <span v-bind="{class: 'ui_list_pic_30_content_' + config.field}">{{ item[keys[config.field]] }}</span>
                    </span>
                  </template>
                </li>
            </ul>
        </div>
        <ui_pagination class="ui_list_pic_30_ui_pagination" :pageMessage=pageMessage :excuteFunction="paging"></ui_pagination>
  </div>
</template>
<script>
import PROJECT_CONFIG from "projectConfig";
import { Post, getFieldAdapter, toOtherPage } from "@common";
import ui_pagination from "../../pagination/pagination/pagination";

export default {
  name: "ui_list_pic_30",
  reused: true,
  props: ["namespace", "modulename"],
  data () {
    return {
      CONFIG: null,
      resourceListsConfig: null,
      keys: {}, // 接口字段容器
      infoList: [], //查询post返回的数据
      pageMessage: {
        totalCount: 0 //查询当前分类条目的总数
      },
      busMessage: null, //接受的广播数组
      titleName: null, //当前标题
      colId: null, //要查询的列表所在分类的colId
      childId: null, //当前分类的子分类id
      childName: null, //当前分类的子分类name
      currentColActive: '',/* 当前选中栏目 */
      requestParams: "", // 去详情页需要传查询list.do的所有参数
    };
  },
  components: {
    ui_pagination
  },
  created () {
    this.CONFIG =
      PROJECT_CONFIG[this.namespace].list_pic.list_pic_30[this.modulename];
    this.resourceListsConfig = this.CONFIG.getResourceLists;
    this.keys = getFieldAdapter(
      this.CONFIG.getResourceLists.sysAdapter,
      this.CONFIG.getResourceLists.typeAdapter
    );
    this.$bus.$on(this.CONFIG.broadcastName, this.getMessage);

    this.getList();
  },
  methods: {
    getMessage (message) {
      // console.log(message);
      // 接收并处理广播数据
      this.colId = message[0];
      this.titleName = message[1];
      this.childId = message[2];
      this.childName = message[3];
      this.busMessage = message;
      this.getList();
    }, 
    getList (colId, pagingParams) {
      this.infoList = [];
      // this.pageMessage.totalCount = 0  /* 总数变化会初始化分页页码 */
      // 查询数据
      let paramsObj = Object.assign({}, this.resourceListsConfig.params);
      let queryChildId = this.childId && this.childId.length > 0 ? this.childId.join(" ") : this.colId;
      paramsObj.conditions.map((item) => {
        if (item.hasOwnProperty(this.keys.colId)) {
          item[this.keys.colId] = colId ? colId : queryChildId;
        }
      })
      paramsObj.conditions = JSON.stringify(paramsObj.conditions);
      if (pagingParams) {
        paramsObj.pageNo = pagingParams.pageNo;
        paramsObj.pageSize = pagingParams.pageSize;
      }
      this.requestParams = paramsObj;
      Post(CONFIG.BASE_URL + this.resourceListsConfig.url, paramsObj).then(
        rep => {
          if (
            rep.data.success &&
            rep.data.result &&
            rep.data.result.length > 0
          ) {
            this.infoList = rep.data.result;
          }
	        this.pageMessage.totalCount = rep.data.totalCount;
        }
      );
    },
    searchList (ind) {
      this.currentColActive = ind;
      if (ind == -1) {
        this.colId = this.childId.length > 0 ? this.childId.join(" ") : this.colId;
      } else {
        this.colId = this.childId[ind];
      }
      this.getList(this.colId);
    },
    toDetail (item) { // 去详情
      let detailParams = "";
      for (let param in this.requestParams) {
        detailParams = detailParams + '&' + param + '=' + this.requestParams[param]
      }
      window.open(toOtherPage(item, this.CONFIG.toDetail, this.keys) + detailParams);
    },
    paging ({ pageNo, pageSize }) {
      //当前页码或者每页显示数量发生改变
      // debugger;
      var pagingParams = {
        pageNo: pageNo,
        pageSize: pageSize
      };
      this.getList(this.colId, pagingParams);
    }
  },
  /* filters: {
    //显示资讯分类的过滤器
    getType (val) {
      return val.substr(val.length - 2, 2);
    }
  } */
};
</script>
<style>
.ui_list_pic_30 {
  width: 880px;
  height: 680px;
  float: left;
  background: #d2dde1;
}
.ui_list_pic_30_location {
  line-height: 36px;
  border-bottom: 1px solid #333;
}
.ui_list_pic_30_title {
  line-height: 40px;
}
.ui_list_pic_30_content {
  height: 440px;
}
.ui_list_pic_30_content_btns {
  overflow: hidden;
}
.ui_list_pic_30_content_btns li {
  float: left;
  cursor: pointer;
}
</style>

