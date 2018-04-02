<!-- 搜索组件 -->
<template>
  <div class="work_mobile_search_01">
      <a onclick="window.history.go(-1)">
        <i class="el-icon-arrow-left work_mobile_search_01_backicon"></i>
      </a>
      <span class="work_mobile_search_01_search">
       <el-input v-model="searchText" placeholder="请输入您要搜索的图书名" type="search" @keyup.enter.native="doSearch()"></el-input>
       <i class="el-icon-close work_mobile_search_01_clear" @click="doClear()"></i>
			</span>
      <span class="work_mobile_search_01_searchtext" @click="doSearch()">搜索</span>
    </div>
</template>

<script>
import PROJECT_CONFIG from 'projectConfig'

export default {
  name: 'work_mobile_search_01',
  props: ['namespace'],
  reused: true,
  data () {
    return {
      searchText: '',
      CONFIG: null,
    };
  },

  mounted () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].search.search_01;
  },

  methods: {
    doSearch () {
      this.$emit('transSearchText', this.searchText);
      this.$bus.emit(this.CONFIG.eveName, this.searchText);
    },
    doClear () {
      this.searchText = '';
      this.doSearch();
    }
  },
}


</script>
<style>
input[type="search"]::-ms-clear {
  /*IE浏览器*/
  display: none;
}

input::-webkit-search-cancel-button {
  /*chrome浏览器*/
  display: none;
}

.work_mobile_search_01 {
  width: 7.5rem;
  box-sizing: border-box;
  background: #fff;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-bottom: 1px solid #f5f5f5;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-shadow: 0 0.12rem 0.12rem #f5f5f5;
  -moz-box-shadow: 0 0.12rem 0.12rem #f5f5f5;
  box-shadow: 0 0.12rem 0.12rem #f5f5f5;
  color: #918e8e;
  font-weight: 500;
  font-size: 0.3rem;
  padding: 0.2rem 0.2rem 0.25rem 0.2rem;
  margin-bottom: 0.2rem;
}

.work_mobile_search_01_backicon {
  width: 5%;
  font-size: 0.4rem;
}

.work_mobile_search_01_search {
  position: relative;
  width: 70%;
}

.work_mobile_search_01_search input {
  padding: 0.15rem 0.6rem 0.15rem 0.4rem;
  border: 1px solid #7a7a7a;
  border-radius: 0.5rem;
}

.work_mobile_search_01_clear {
  position: absolute;
  right: 0.2rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0.5rem;
}

.work_mobile_search_01_searchtext {
  width: 15%;
}
</style>