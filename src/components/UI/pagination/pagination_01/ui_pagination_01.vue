<template>
  <div class="ui_pagination_01">
    <a class="fl pre" :href="urls.prev" :class="{clickFalse:prev}">&lt;&lt;上一篇</a>
    <a href="javascript:;" @click="returnList()">返回列表</a>
    <a class="fr next" :href="urls.next" :class="{clickFalse:next}">下一篇&gt;&gt;</a>
  </div>
</template>

<script>
  import URL from "url";
  import Querystring from "querystring";
  import PROJECT_CONFIG from "projectConfig";
  import {Post} from "@common";

  export default {
    name: "ui_pagination_01",
    reused: true,
    props: ["namespace"],
    data: function () {
      return {
        urls: {},
        prev: false,
        next: false
      }
    },
    mounted: function () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].pagination.ui_pagination_01;
      let query = URL.parse(document.URL, true).query;
      this.params = Object.assign({}, query);
      this.params.id = this.params.pubId;
      delete this.params.pubId;
      this.getPreNext();
    },
    methods: {
      getPreNext: function () {
        Post(this.CONFIG.url, this.params).then((rep) => {
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
        })
      },
      returnList: function () {
        let currentHost=document.URL.replace(/(.*\/)*([^.]+).*/ig,"$2");
        let referrerHost=document.referrer.replace(/(.*\/)*([^.]+).*/ig,"$2");
        if(currentHost!==referrerHost){
          window.sessionStorage.setItem("listUrl",document.referrer);
          window.location.href = document.referrer;
        }else{
          if(window.sessionStorage.getItem("listUrl")){
            window.location.href = window.sessionStorage.getItem("listUrl");
          }
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
