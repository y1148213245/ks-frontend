<template>
  <div class="ui_pic_list_24_excellent">
    <div class="ui_pic_list_24_excellent_head">
      <span class="ui_pic_list_24_excellent_name">{{getStaticText('excellentBooks') ? getStaticText('excellentBooks') : '精品图书'}}</span>
      <span class="ui_pic_list_24_excellent_more">
        <a @click="toDetailsPage()">{{getStaticText('more') ? getStaticText('more') : 'MORE+'}}</a>
      </span>
    </div>
    <!-- 精品图书上半部分 -->
    <ui_list_pic_10_refined_book :namespace="namespace" :refined-book="list"></ui_list_pic_10_refined_book>

    <!-- 精品图书下半部分 -->
    <ui_list_pic_09_book_show :namespace="namespace" :book-show="list"></ui_list_pic_09_book_show>
  </div>
</template>

<script>
import { Post, DrawImage } from "@common";
import PROJECT_CONFIG from "projectConfig";

export default {
  name: 'ui_pic_list_24_excellent',
  reused: true,
  props: ["namespace"],
  data () {
    return {
      CONFIG: null,
      list: [],
    }
  },
  created: function () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.list_pic_24;
    this.getRefinedBook()
  },

  methods: {
    getRefinedBook: function () {
      Post(CONFIG.BASE_URL+this.CONFIG.url, this.CONFIG.param).then((rep) => {
        this.list = rep.data.result;
      });
    },
    toDetailsPage: function () {
      window.location.href = this.CONFIG.href + this.CONFIG.colId;
    },
    getStaticText(text){
      if(this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]){
        return this.CONFIG.staticText[text]
      }else {
        return false
      }
    }
  }
}
</script>

<style>
.ui_pic_list_24_excellent {
  border-top-width: 2px;
  padding-left: 20px;
  width: 940px;
  overflow: hidden;
  margin-bottom: 48px;
}

.ui_pic_list_24_excellent .ui_pic_list_24_excellent_head span {
  font-weight: normal;
  line-height: 25px;
  height: 25px;
}

.ui_pic_list_24_excellent .ui_pic_list_24_excellent_name {
  padding: 15px 0 0px 30px;
  background-position: -2px -92px;
  float: left;
}

.ui_pic_list_24_excellent .ui_pic_list_24_excellent_head .ui_pic_list_24_excellent_more {
  padding-top: 20px;
  float: right;
  cursor: pointer;
}
</style>
