<!-- 作者列表 -->
<template>
  <div>
    <div class="zzlb_list">
      <div class="zzlb_list_con fl mb20" v-for="entry in list" :key="entry.id">
        <p class="zzlb_list_con_pic">
          <a href="javascript:void(0)" @click="toDetail(entry.id)" class="imgBox">
            <img :src="entry.pub_picBig" class="img" alt="暂无封面" onload="DrawImage(this,147,222)">
          </a>
        </p>
        <p class="zzlb_list_tit mt15 f16">
          <a href="javascript:void(0)" @click="toDetail(entry.id)" class="color_3b3 scoped_line" v-html="entry.information_SYS_TOPIC"></a>
        </p>
      </div>
    </div>
    <div class="page cl">
        <ui_pagination :pageMessage='{totalCount:totalCount} || null' :excuteFunction='pageCallBack' :pageSizes="pageSizes"></ui_pagination>
    </div>
  </div>
</template>

<script>
import URL from "url";
import PROJECT_CONFIG from "projectConfig";
import { Post } from "@common";

export default {
  name: 'ui_list_pic_14',
  reused: true,
  props: {
    namespace: String,
  },
  data () {
    return {
      projectConfig: null,
      list: null,
      totalCount: 0,
      pageNo: 0,
      pageSize: 0,
      pageSizes:null,
    };
  },

  computed: {},

  created () {
    this.initConfig();
    this.loadDatas();
  },

  mounted () {
  },

  methods: {
    initConfig () {
      let config = PROJECT_CONFIG[this.namespace].list_pic.ui_list_pic_14;
      this.projectConfig = config;
      this.pageNo = config.param.pageNo;
      this.pageSize = config.param.pageSize;
      this.pageSizes = config.pageSizes;
    },
    pageCallBack ({ pageNo, pageSize }) {
      this.pageNo = pageNo;
      this.pageSize = pageSize;
      this.loadDatas();
    },
    loadDatas () {
      let configParams = this.projectConfig.param
      let param = {
        conditions: configParams.conditions,
        groupBy: configParams.groupBy,
        orderBy: configParams.orderBy,
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        searchText: ''
      }
      Post(this.projectConfig.url, param).then((req) => {
        let data = req.data.result;
        this.totalCount = req.data.totalCount;
        if (data && data instanceof Array && data.length >= 0) {
          this.list = data;
        }
      })
    },
    toDetail (id) {
      window.location.href = this.projectConfig.toDetailHref + id;
    }
  }
}

</script>
<style scoped>

</style>