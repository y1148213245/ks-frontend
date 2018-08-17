<template>
  <div class="ui_pagination_01">
    <a class="fl pre" :href="!prev ? urls.prev:'javascript:void(0)'" :class="{clickFalse:prev}" :title="prevDetail[CONFIG.getDetail.keys.title]">&lt;&lt;{{getStaticText('previousChap') ? getStaticText('previousChap') : '上一篇'}}</a>
    <!-- <a href="javascript:;" @click="returnList()">{{getStaticText('backToList') ? getStaticText('backToList') :"返回列表"}}</a> -->
    <a class="fr next" :href="!next ? urls.next:'javascript:void(0)'" :class="{clickFalse:next}" :title="nextDetail[CONFIG.getDetail.keys.title]">{{getStaticText('nextChap') ? getStaticText('nextChap') : '下一篇'}}&gt;&gt;</a>
  </div>
</template>

<script>
import URL from "url";
import Querystring from "querystring";
import PROJECT_CONFIG from "projectConfig";
import { Post, Get } from "@common";

export default {
  name: "ui_pagination_01",
  reused: true,
  props: ["namespace"],
  data: function () {
    return {
      urls: {
        prev: '',
        next: ''
      },
      prev: false,
      next: false,
      prevDetail:'',
      nextDetail:'',
      CONFIG: null
    }
  },
  created:function(){
    this.CONFIG = PROJECT_CONFIG[this.namespace].pagination.ui_pagination_01;
  },
  mounted: function () {
    let query = URL.parse(document.URL, true).query;
    this.params = Object.assign({}, query);
    this.getPreNext();
    this.initReturnUrl();
  },
  methods: {
    initReturnUrl () {
      let currentHost = document.URL.replace(/(.*\/)*([^.]+).*/ig, "$2");
      let referrerHost = document.referrer.replace(/(.*\/)*([^.]+).*/ig, "$2");
      if (currentHost !== referrerHost) {
        window.sessionStorage.setItem("listUrl", document.referrer);
      }
    },
    getPreNext: function () {
      let params = {};
      let _this = this;
      for (const key in this.CONFIG.queryKeys) {
          const queryKey = this.CONFIG.queryKeys[key];
          params[key] = this.params[queryKey];
      }

      let pageConfig = this.CONFIG.pageConfig
      if (!pageConfig.isGetLocationQuery) {
        params[pageConfig.keys.pageNo] = this.CONFIG.pageConfig.pageNo;
        params[pageConfig.keys.pageSize] = this.CONFIG.pageConfig.pageSize;
      }

      Post(CONFIG.BASE_URL + this.CONFIG.url, params).then((rep) => {
        //上一篇
        let prev = Object.assign({}, this.params);
        prev.pubId = rep.data.prev;
        delete prev.id;
        this.prev = rep.data.prev ? false : true;
        this.urls.prev = this.CONFIG.prevNextUrl + Querystring.stringify(prev);
        //下一篇
        let next = Object.assign({}, this.params);
        next.pubId = rep.data.next;
        delete next.id;
        this.next = rep.data.next ? false : true;
        this.urls.next = this.CONFIG.prevNextUrl + Querystring.stringify(next);

        /* 上一篇详情 */
        if (!this.prev) {
          Get(CONFIG.BASE_URL + this.CONFIG.getDetail.url, { "params": {pubId:prev.pubId,loginName:''} }).then(function (resp) {
            _this.prevDetail = resp.data.data;
          })
        }
        /* 下一篇详情 */
        if (!this.next) {
          Get(CONFIG.BASE_URL + this.CONFIG.getDetail.url, { "params": {pubId:next.pubId,loginName:''} }).then(function (resp) {
            _this.nextDetail = resp.data.data;
          })
        }
        
      })
    },
    returnList: function () {
      window.location.href = window.sessionStorage.getItem("listUrl");
    },
    getStaticText(text){
      if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]) {
        return this.CONFIG.staticText[text]
      }else {
        return false
      }
    }
  }
}
</script>

<style>
.ui_pagination_01 {
  text-align: center;
}

.ui_pagination_01 .clickFalse {
  pointer-events: none;
  color: #9c9c9c;
}
</style>
