<!-- 基于栏目面包屑导航 -->
<template>
 <el-breadcrumb separator-class="el-icon-arrow-right">
   <el-breadcrumb-item><span>{{getStaticText('currentPosition') ? getStaticText('currentPosition') : '当前位置'}}：</span></el-breadcrumb-item>
   <el-breadcrumb-item v-for="(item,i) in currentCols" :key="i" v-if="currentCols && currentCols.length">
     <a v-if="CONFIG && CONFIG.showLang && CONFIG.showLang ==='Korean'" :href="item.url || 'javascript:void(0)'" v-text="item.code"></a>
     <a v-else :href="item.url || 'javascript:void(0)'" v-text="item.name"></a>
   </el-breadcrumb-item>
</el-breadcrumb>
</template>

<script>
import URL from 'url'
import PROJECT_CONFIG from 'projectConfig'
import { Post, Get } from '@common'
import { joinParams } from '@common/utils/urlUtils.js';

export default {
  name: 'work_crumbs_02',
  reused: true,
  props: {
    namespace: String,
    modulename: String
  },
  data () {
    return {
      CONFIG: null,
      columns: '',
      currentCols: []
    };
  },

  computed: {},

  created () {
    this.initConfig();
    this.$bus.$on(this.CONFIG.event.listenDetail.name, this.getCols);
  },

  mounted () { },

  methods: {
    initConfig () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].crumbs.work_crumbs_02[this.modulename]
    },
    getCols (detail) {
      let getCols = this.CONFIG.getCols;

      if (getCols.params.hasOwnProperty('siteId')) {
        getCols.params[getCols.getGlobalParams.siteId] = CONFIG.SITE_CONFIG.siteId
      }
      let url = joinParams(getCols.url, getCols.params);

      let Query = getCols.type == 'get' ? Get : Post;

      Query(CONFIG.BASE_URL + url).then(resp => {
        var datas = resp.data.data;
        if (resp.data.success && datas && datas.length > 0) {
          this.columns = datas;
          this.getCurrentCols(detail)
        }
      })
    },
    getCurrentCols (detail) {
      let keys = this.CONFIG.event.listenDetail.keys;
      // let colName = detail[keys.colName];
      let colId = detail[keys.colId];

      // let cols = colName.split('~').reverse();
      let currentCols = [];
      /*  for (let i = 0; i < cols.length; i++) {
         const colName = cols[i];
         for (let j = 0; j < this.columns.length; j++) {
           const col = this.columns[j];
           if (colId == col[this.CONFIG.getCols.keys.id] && colName == col[this.CONFIG.getCols.keys.name]) {
             currentCols.push({
               name:col[this.CONFIG.getCols.keys.name],
               url:col[this.CONFIG.getCols.keys.url]
             })
             colId = col[this.CONFIG.getCols.keys.parentId];
             break;
           }
         }
       } */
      this.filterCols(currentCols,colId);
      this.currentCols = currentCols;

    },
    filterCols (currentCols, id) {
      let _this = this;
      for (let index = 0; index < _this.columns.length; index++) {
        const element = _this.columns[index];
        if (id == element.id) {
          currentCols.unshift(element);
          if (element.parentId == 0 || element.parentId == _this.CONFIG.startCol) {
            return
          } else {
            _this.filterCols(currentCols, element.parentId)
            break;
          }

        }
      }
    },
    getStaticText (text) {
      if(this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]){
        return this.CONFIG.staticText[text];
      }else{
        return false;
      }
    }
  }
}
</script>
<style>
</style>
