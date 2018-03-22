<!-- Created by song 2018/3/20 头部栏目导航-->
<template>
  <div class="ui_navigation_03">
    <ul class="ui_navigation_03_ul">
      <li v-for="(item, index) in columnHead" :key="index">
        <a :href="item.url">
          <span v-text="item.name"></span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import PROJECT_CONFIG from "projectConfig";
import { Post } from '@common'

export default {
  name: "ui_navigation_03",
  reused: true,
  props: ["namespace"],
  data () {
    return {
      CONFIG: null,
      columnHead: [],
    };
  },

  mounted () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].navigation.navigation_03;
    this.queryColumnHead();
  },
  methods: {
    queryColumnHead () {  // 查询栏目
      Post(this.CONFIG.url + '?colId=' + this.CONFIG.params.colId).then((rep) => {
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

</style>

