<!-- Created by song 2018/3/20 头部栏目导航-->
<template>
  <div class="ui_navigation_03">
    <ul class="ui_navigation_03_ul">
      <li v-for="(item, ind) in columnHead" :key="ind" :class="{ui_navigation_03_li: showColId == item.id || ind == firstColumn}">
        <a :href="item.url + '?navColId=' + item.id" :target="CONFIG.targetType ? CONFIG.targetType : '_blank'">
          <span v-text="item.name"></span>
        </a>
      </li>
    </ul>
  </div>
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
      firstColumn: 0,  // 默认选中第一个栏目
      showColId: "",
    };
  },
  mounted () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].navigation.navigation_03;
    this.showColId = URL.parse(document.URL, true).query.navColId;
    this.firstColumn = this.showColId ? -1 : 0;
    this.queryColumnHead();
  },
  methods: {
    queryColumnHead () {  // 查询栏目
      Post(CONFIG.BASE_URL+this.CONFIG.url + '?colId=' + this.CONFIG.params.colId).then((rep) => {
        var datas = rep.data.data;
        if (rep.data.success && datas && datas.length > 0) {
          this.columnHead = datas;
        }
      });
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

