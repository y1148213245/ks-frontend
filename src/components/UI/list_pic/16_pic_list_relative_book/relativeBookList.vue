// 相关图书组件：只有封面和书名
<template>
  <div class="ui_list_pic_16 ui_list_pic_16_skin">
    <h6 class="title" v-text="title"></h6>
    <div class="listWrapper">
      <dl class="listCon" v-if="relativeBookList && relativeBookList.length > 0" v-for="(book, index) in relativeBookList" :key="index">
        <dt class="listDt"><img class="listImg" onload="DrawImage(this,180,105)" :src="book.pub_picSmall" alt="暂无封面"/></dt>
        <dd class="listDd" v-text="book.pub_resource_name" @click="toBookDetail(book.id)"></dd>
      </dl>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import PROJECT_CONFIG from "projectConfig";
import Vue from 'vue';
import URL from "url";
import { Get } from "@common";

export default {
  name: "ui_list_pic_16",
  reused: true,
  props: ["namespace"],
  data: function () {
    return {
      CONFIG: null,
      title: '',
      name: '',
      pubId: '',
      relativeBookList: [],
    }
  },
  mounted: function () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.list_pic_16_relative;
    this.title = this.CONFIG.title;
    this.pubId = URL.parse(document.URL, true).query.pubId;
    this.queryRelative(this.pubId);
  },
  methods: {
    queryRelative (pubId) {
      let params = Object.assign({}, this.CONFIG.params);
      params.pubId = pubId;
      Get(this.CONFIG.url, { "params": params }).then((rep) => {
        var data = rep.data.data;
        var hasData = data && Object.prototype.toString.call(data) === "[object Object]" ? true : false;
        if (hasData) {
          this.relativeBookList = data.author.length > 0 ? data.author : data.bookcat;
        }
      })
    },
    toBookDetail (pubId) {
      window.location.href = "../pages/bookdetail.html?pubId=" + pubId;
    },
  }
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.ui_list_pic_16 {
  margin-top: 30px;
}

.ui_list_pic_16 .title {
  height: 29px;
  line-height: 29px;
  width: 222px;
  text-align: center;
}

.ui_list_pic_16 .listWrapper {
  width: 218px;
  text-align: center;
  border-width: 2px;
  border-top: none;
}

.ui_list_pic_16 .listCon {
  border-bottom-width: 1px;
  padding: 20px;
  overflow: hidden;
}

.ui_list_pic_16 .listCon .listDt {
  padding: 0 0 15px 0px;
}

.ui_list_pic_16 .listCon .listImg {
  /* cursor: pointer; */
}

.ui_list_pic_16 .listCon .listDd {
  width: 80px;
  display: inline-block;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
}
</style>


