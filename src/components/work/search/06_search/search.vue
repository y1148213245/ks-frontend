<template>
  <div class="work_search_06">
    <el-dropdown class="work_search_06_select" v-if="CONFIG && CONFIG.searchConditionArr && CONFIG.searchConditionArr.length > 0" trigger="click" @command="selectCondition">
      <el-button type="primary">
        {{showCondition.name}}
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="(item, index) in CONFIG.searchConditionArr" :key="index" :command="item">{{item.name}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <div class="work_search_06_searchcon">
      <input class="work_search_06_searchbtn" type="button" value="搜索" name="search" @click="goToSearchResult()">
      <i class="work_search_06_searchicon el-icon-search"></i>
      <input class="work_search_06_searchtext" type="text" id="searchText" value="" placeholder="输入关键字" v-model="searchText" @keyup.13="goToSearchResult($event)">
    </div>
    <div class="work_search_06_advsearch" @click="goToAdvSearch()">高级检索</div>
  </div>
</template>

<script type="text/ecmascript-6">
import PROJECT_CONFIG from "projectConfig";
import { Get } from "@common";
import URL from "url";

export default {
  name: "work_search_06",
  reused: true,
  props: ["namespace"],
  data () {
    return {
      CONFIG: null,
      searchText: '',
      showCondition: {},
    }
  },
  mounted: function () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].search.search_01;
    this.showCondition = this.CONFIG.searchConditionArr && this.CONFIG.searchConditionArr.length > 0 ? this.CONFIG.searchConditionArr[0] : {};
  },
  methods: {
    selectCondition (item) {
      this.showCondition = item;
    },
    goToSearchResult () {
      window.location.href = this.CONFIG.searchUrl + '?searchText=' + this.searchText + '&catagory=' + (this.showCondition ? this.showCondition.tag : "");
    },
    goToAdvSearch () {
      window.location.href = this.CONFIG.advSearchUrl;
    }
  }
}
</script>
<style>
.work_search_06 {
  height: 44px;
  line-height: 44px;
}

.work_search_06_select {
  float: left;
}

.work_search_06_searchcon {
  width: 70%;
  height: 100%;
  float: left;
  border: 2px solid #ca0000;
  position: relative;
}

.work_search_06_searchbtn {
  width: 20%;
  text-align: center;
  float: right;
  border: none;
  padding: 0;
  overflow: hidden;
  font-size: 16px;
  background-color: #c50000;
  color: #fff;
  cursor: pointer;
  background-image: none;
  outline: none;
}

.work_search_06_searchtext {
  width: 80%;
  height: 100%;
  border: 0;
  padding-left: 30px;
  float: left;
  color: #767676;
  outline: none;
  box-sizing: border-box;
}

.work_search_06_advsearch {
  width: 17%;
  height: 100%;
  float: left;
  line-height: 22px;
  color: #3b3b3b;
  font-size: 14px;
  cursor: pointer;
  padding-left: 20px;
  box-sizing: border-box;
}

.work_search_06_searchicon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
}
</style>
