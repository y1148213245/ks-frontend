<template>
  <div class="wenlian_common_refine wenlian_common_refine_skin">
    <div class="index_jpts_head">
      <span class="index_jpts_name">精品图书</span>
      <span class="more">
        <a @click="toDetailsPage()">MORE+</a>
      </span>
    </div>
    <!-- 精品图书上半部分 -->
    <ui_list_pic_10_refined_book namespace="index" :refined-book="list"></ui_list_pic_10_refined_book>

    <!-- 精品图书下半部分 -->
    <ui_list_pic_09_book_show namespace="index" :book-show="list"></ui_list_pic_09_book_show>
  </div>
</template>

<script>
import { Post, DrawImage } from "@common";
import PROJECT_CONFIG from "projectConfig";

export default {
  name: 'wenlian_common_refined_book',
  reused: true,
  props: ["namespace"],
  data () {
    return {
      CONFIG: null,
      list: [],
    }
  },
  created: function () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.refinedBook;
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
    }
  }
}
</script>

<style>
.wenlian_common_refine {
  border-top-width: 2px;
  padding-left: 20px;
  width: 940px;
  overflow: hidden;
  margin-bottom: 48px;
}

.wenlian_common_refine .index_jpts_head span {
  font-weight: normal;
  line-height: 25px;
  height: 25px;
}

.wenlian_common_refine .index_jpts_name {
  padding: 15px 0 0px 30px;
  background-position: -2px -92px;
  float: left;
}

.wenlian_common_refine .index_jpts_head .more {
  padding-top: 20px;
  float: right;
  cursor: pointer;
}
</style>