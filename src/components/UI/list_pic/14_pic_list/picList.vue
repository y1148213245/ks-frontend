<!-- 作者列表 -->
<template>
  <div>
    <div class="list_pic_14">
      <div class="list_pic_14-entry" v-for="entry in list" :key="entry.id">
        <p class="list_pic_14-entry-img_box">
          <a href="javascript:void(0)" @click="toDetail(entry.id)" class="list_pic_14-entry-img_box-a">
            <img :src="entry.pub_picBig" class="list_pic_14-entry-img_box-img" :alt="getStaticText('noCover') ? getStaticText('noCover') : '暂无封面'" onload="DrawImage(this,147,222)">
          </a>
        </p>
        <p class="list_pic_14-entry-img_box-topic">
          <a href="javascript:void(0)" @click="toDetail(entry.id)" class="list_pic_14-entry-img_box-topic-a" v-html="entry.information_SYS_TOPIC"></a>
        </p>
      </div>
    </div>
    <div class="list_pic_14-paging">
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
      CONFIG: "",
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
      this.CONFIG = config;
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
      let configParams = this.CONFIG.param
      let param = {
        conditions: configParams.conditions,
        groupBy: configParams.groupBy,
        orderBy: configParams.orderBy,
        pageNo: this.pageNo,
        pageSize: this.pageSize,
        searchText: ''
      }
      Post(CONFIG.BASE_URL+this.CONFIG.url, param).then((req) => {
        let data = req.data.result;
        this.totalCount = req.data.totalCount;
        if (data && data instanceof Array && data.length >= 0) {
          this.list = data;
        }
      })
    },
    toDetail (id) {
      window.location.href = this.CONFIG.toDetailHref + id + "&currentType=author#";
    },
    getStaticText (text) {
      if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]) {
        return this.CONFIG.staticText[text]
      } else {
        return false
      }
    },
  }
}

</script>
<style>
.list_pic_14 {
  overflow: hidden;
  padding: 20px 0 0 80px;
}
.list_pic_14-entry {
  margin-right: 75px;
  margin-bottom: 20px;
  float: left;
}
.list_pic_14-entry-img_box {
  width: 147px;
  height: 222px;
}
.list_pic_14-entry-img_box-a {
  position: relative;
  display: block;
  width: 147px;
  height: 222px;
  margin: 0;
  padding: 0;
  line-height: 222px;
  text-decoration: none;
  outline: none;
  color: #888888;
}
.list_pic_14-entry-img_box-img {
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  margin: 0;
  padding: 0;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  box-shadow: 0 0 2px #000;
  border: 0px;
}
.list_pic_14-entry-img_box-topic {
  margin-top: 15px;
  text-align: center;
  font-size: 16px;
}
.list_pic_14-entry-img_box-topic-a {
  display: inline-block;
  max-width: 150px;
  line-height: 25px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #3b3b3b;
  text-decoration: none;
}
.list_pic_14-paging {
}
</style>
