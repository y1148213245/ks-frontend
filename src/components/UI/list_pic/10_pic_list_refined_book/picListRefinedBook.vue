<template>
  <div class="ui_pic_list_10 ui_pic_list_10_skin">
    <dl class="refineDl" v-for="(book, index) in refinedBookList" :class="{floatLeft:index % 2 == 0}" v-if="index < number" :key="index">
      <dt class="refineDt">
        <a @click="toDetailPage(book.id)" class="refineImgBox">
          <img class="refineImg" :src="book.pub_picBig" onload="DrawImage(this,135,204)" alt="暂无封面">
        </a>
      </dt>
      <dd class="refineDd">
        <p class="title" :title="book.pub_resource_name">
          <a @click="toDetailPage(book.id)"><span v-text="book.pub_resource_name"></span></a>
        </p>
        <p class="refineAuthor">
          <span class="author">作者：</span>
          <span class="author" v-text="book.BOOK_SYS_AUTHORS" :title="book.BOOK_SYS_AUTHORS"></span>
        </p>
        <p class="zhaiyao" v-text="book.BOOK_SYNOPSIS" :title="book.BOOK_SYNOPSIS"></p>
        <p class="probation"><a class="probationLink" target="_blank" href="javascript:void(0)" @click="freeRead(book.pub_resource_id,0,book.pub_resource_name)">免费试读</a>
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
      window.location.href = this.CONFIG.READ_URL || CONFIG.READ_URL + '?bookId=' + bookId + '&readType=' + readType + '&bookName=' + bookName;
    },
    toDetailPage: function (pubId) {
      //				后期切换成指定页面
      window.location.href = this.CONFIG.bookDetail + pubId;
    }
  }
}
</script>

<style>
.ui_pic_list_10 {
  padding-top: 30px;
  clear: both;
}

.ui_pic_list_10 .refineDl {
  height: 215px;
  width: 457px;
  position: relative;
  float: right;
}

.ui_pic_list_10 .floatLeft {
  float: left;
}

.ui_pic_list_10 .refineDl .refineDt {
  position: absolute;
  top: -10px;
  left: 20px;
  float: left;
}

.ui_pic_list_10 .refineDl .refineImgBox {
  position: relative;
  display: block;
  width: 135px;
  height: 204px;
  margin: 0;
  padding: 0;
  line-height: 204px;
}

.ui_pic_list_10 .refineDl .refineImg {
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  margin: 0;
  padding: 0;
  transform: translate(-50%, -50%);
}

.ui_pic_list_10 .refineDd {
  float: right;
}

.ui_pic_list_10 .refineDd .title {
  width: 260px;
  font-size: 16px;
  padding: 30px 0 15px 0;
}

.ui_pic_list_10 .refineDd .refineAuthor {
  width: 260px;
}

.ui_pic_list_10 .refineDd .author {
  display: inline-block;
  max-width: 250px;
  line-height: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 6px;
}

.ui_pic_list_10 .refineDd .zhaiyao {
  width: 260px;
  line-height: 20px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  height: 77px;
  word-break: break-all;
}

.ui_pic_list_10 .refineDd .probationLink {
  position: absolute;
  bottom: 0px;
  right: 0px;
  width: 86px;
  height: 32px;
  line-height: 32px;
  text-indent: -9999px;
  text-align: center;
}
</style>