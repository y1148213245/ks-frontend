<!-- Created by song 2018/3/20 头部栏目导航-->
<template>
  <nav class="ui_navigation_06">
    <el-menu :default-active="showColId" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <!-- 最多二级 暂时写死 -->
      <template v-for="(item, ind) in columnHead" v-if="item[keys.parentId] == CONFIG.showType.parentId">
         <!-- 无子菜单 -->
        <el-menu-item v-if="CONFIG.showType.showChildNav.indexOf(item[keys.id]) == -1" :index="String(item[keys.id])" :key="ind">
          <a :href="item.url" :target="CONFIG.targetType">{{item[keys.name]}}</a></el-menu-item>
          <!-- 有子菜单 -->
        <el-submenu class="ui_navigation_06-sub_nav" :class="{'is-active':item[keys.id] == showColId}" popper-class="ui_navigation_06-sub_nav" v-else :index="String(item[keys.id])" :key="ind">
          <template slot="title"><a :href="item.url" :target="CONFIG.targetType">{{item[keys.name]}}</a></template>

          <el-menu-item v-for="(sub_item,sub_ind) in columnHead" :index="String(sub_item[keys.id])" :key="sub_ind" v-if="sub_item[keys.parentId] == item[keys.id]">
            <a :href="sub_item.url" :target="CONFIG.targetType">{{sub_item[keys.name]}}</a></el-menu-item>

        </el-submenu>

      </template>

    </el-menu>
  </nav>
</template>

<script type="text/ecmascript-6">
import PROJECT_CONFIG from "projectConfig";
import { Post, Get } from '@common';
import URL from "url";
import { joinParams } from '@common/utils/urlUtils.js';
export default {
  name: "ui_navigation_06",
  reused: true,
  props: ["namespace"],
  data () {
    return {
      CONFIG: null,
      keys: null,
      columnHead: [],
      showColId: "",
      fileName: "",

    };
  },
  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].navigation.navigation_06;
    this.keys = this.CONFIG.getCols.keys;
    this.getLocationFileName();/* 获取地址栏当前文件名 */
  },
  mounted () {
    this.queryColumnHead();
  },
  methods: {
    handleSelect (val, num) {
    },
    getLocationFileName () {
      this.fileName = this.getFileName(window.location.href)
    
      let fileNames = this.CONFIG.currentSelect;
      let hasHtmlNames = [];
      /* 过滤符合项 */
      fileNames.map((item) => {
        item.htmls.map((html) => {
          if (html == this.fileName) {
            hasHtmlNames.push(item)
          }
        })
      })

      /* 多个符合项判断来源 */
      if (hasHtmlNames.length > 1) {
        let refferPathName = this.getFileName(document.referrer)
        hasHtmlNames.map((item) => {
          item.htmls.map((html) => {
            if (html == refferPathName) {
              this.showColId = item.id;
            }
          })
        })
      } else if (hasHtmlNames.length == 1) {
        this.showColId = hasHtmlNames[0].id
      }
      console.log(this.showColId);
    },
    queryColumnHead () {  // 查询栏目
      let getCols = this.CONFIG.getCols

      if (getCols.params.hasOwnProperty('siteId')) {
        getCols.params[getCols.getGlobalParams.siteId] = CONFIG.SITE_CONFIG.siteId
      }
      let url = joinParams(getCols.url, getCols.params);

      let Query = getCols.type == 'get' ? Get : Post
      Query(CONFIG.BASE_URL + url).then((rep) => {
        var datas = rep.data.data;
        if (rep.data.success && datas && datas.length > 0) {
          this.columnHead = datas;

        }
      });
    },
    getFileName (path) {
      let pathName = URL.parse(path).pathname
      let arr = pathName.split('/');
      return arr[arr.length - 1];
    }
  }
};
</script>

<style>
.ui_navigation_06_li:hover {
  background-color: #c50000;
}

.ui_navigation_06_li {
  background-color: #c50000;
}
</style>

