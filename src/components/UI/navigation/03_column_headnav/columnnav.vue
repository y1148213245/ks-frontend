<!-- Created by song 2018/3/20 头部栏目导航-->
<template>
  <nav class="ui_navigation_03">
    <ul class="ui_navigation_03_ul">
      <li v-for="(item, ind) in columnHead" :key="ind" :class="{ui_navigation_03_li: showColId == item.id}">
        <a :href="item.url" :target="CONFIG.targetType ? CONFIG.targetType : '_blank'">
          <span v-text="item.name"></span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script type="text/ecmascript-6">
import PROJECT_CONFIG from "projectConfig";
import { Post } from '@common';
import URL from "url";

export default {
  name: "ui_navigation_03",
  reused: true,
  props: ["namespace"],
  data () {
    return {
      CONFIG: null,
      columnHead: [],
      showColId: "",
      fileName: ""
    };
  },
  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].navigation.navigation_03;
    this.getLocationFileName();/* 获取地址栏当前文件名 */
  },
  mounted () {
    this.queryColumnHead();
  },
  methods: {
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
    },
    queryColumnHead () {  // 查询栏目
      Post(CONFIG.BASE_URL + this.CONFIG.url + '?colId=' + this.CONFIG.params.colId).then((rep) => {
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
.ui_navigation_03_li:hover {
  background-color: #c50000;
}

.ui_navigation_03_li {
  background-color: #c50000;
}
</style>

