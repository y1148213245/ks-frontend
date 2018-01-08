<template>
  <div class="index_jpts_t cl">
    <dl class="fr" v-for="(book, index) in refinedBookList" :class="{float_left:index % 2 == 0}" v-if="index < number">
      <dt class="pic fl" style="background-color: white;">
        <a @click="toDetailPage(book.id)" class="jingpin_header_imgBox">
          <img class="jingpin_img" :src="book.pub_picBig" onload="DrawImage(this,135,204)" alt="暂无封面">
        </a>
      </dt>
      <dd class="fr bookDetail">
        <p class="title" :title="book.pub_resource_name">
          <a @click="toDetailPage(book.id)"><span v-text="book.pub_resource_name"></span></a>
        </p>
        <p class="f14"><span class="jp_zz">作者111：</span><span v-text="book.BOOK_SYS_AUTHORS"
                                                           :title="book.BOOK_SYS_AUTHORS"
                                                           class="jp_zz"></span></p>
        <p class="zhaiyao zhaiyao_jp_text" v-text="book.BOOK_SYNOPSIS" :title="book.BOOK_SYNOPSIS"></p>
        <!--<p class="shoucang">收藏</p>-->
        <p class="reader"><a target="_blank" href="javascript:void(0)" @click="freeRead(book.pub_resource_id,0,book.pub_resource_name)">免费试读</a>
        </p>
      </dd>
    </dl>
  </div>
</template>

<script>
import { Post, DrawImage } from "@common";
import PROJECT_CONFIG from "projectConfig";

export default {
  name: "ui_list_pic_10_refined_book",
  reused: true,
  props: ["namespace", "refinedBook"],
  data: function () {
    return {
      CONFIG: null,
      refinedBookList: [],
      number: 2
    }
  },
  mounted: function () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.picListRefinedBook;
    this.getRefinedBookData();
  },
  methods: {
    getRefinedBookData: function () {
      if (this.refinedBook && this.refinedBook instanceof Array && this.refinedBook.length > 0) {
        this.refinedBookList = this.refinedBook;
      } else {
        Post(this.CONFIG.url, this.CONFIG.param).then((rep) => {
          this.refinedBookList = rep.data.result;
        });
      }
    },
    freeRead (bookId, readType, bookName) {
      //				后期切换成指定页面
      window.location.href = this.CONFIG.baseURL + '/ebook/read.jsp?bookId=' + bookId + '&readType=0&bookName=' + bookName;
    },
    toDetailPage: function (pubId) {
      //				后期切换成指定页面
      window.location.href = this.CONFIG.bookDetail + pubId;
    }
  }
}
</script>

<style>

</style>