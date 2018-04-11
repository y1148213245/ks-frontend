<template>
  <div>
    <div class="work_mobile_bookdetail_01_img_center">
      <img class="work_mobile_bookdetail_01_img" :src="bookInfo[keys.pic]"
           onload="DrawImage(this,410,280)" alt="暂无封面">
    </div>
    <div class="work_mobile_bookdetail_01_bookname" v-text="bookInfo[keys.title] || ''">
    </div>
    <div class="work_mobile_bookdetail_01_author" v-text="'作者:'+ (bookInfo[keys.author]|| '')">

    </div>

    <div class="work_mobile_bookdetail_01_rate">
      <el-rate disabled show-score :value="bookInfo[keys.starNum] && (bookInfo[keys.starNum] - 0).toFixed(1)"></el-rate>
    </div>

    <div class="work_mobile_bookdetail_01_four_information">
      <ul class="work_mobile_bookdetail_01_ul">
        <li class="work_mobile_bookdetail_01_member_price">{{bookInfo[keys.memberPrice]}}元</li>
        <li class="work_mobile_bookdetail_01_book_price">{{bookInfo[keys.bookPrice]}}元</li>
        <li class="work_mobile_bookdetail_01_line"></li>
        <li class="work_mobile_bookdetail_01_book_memory">{{(bookInfo[keys.bookSize] && (bookInfo[keys.bookSize]/(1024*1024)).toFixed(2))}}MB</li><!--这里暂时写成这个字段，不知道字段-->
        <!-- <li class="work_mobile_bookdetail_01_line"></li> -->
        <!-- <li class="work_mobile_bookdetail_01_book_star">{{bookInfo[keys.starNum]}}分</li> -->
      </ul>
    </div>

    <div class="work_mobile_bookdetail_01_free_read">
      <el-button @click="toRead(bookInfo.resourceId, 0, bookInfo.bookFreeDownLoadPath)" :class="{work_mobile_bookdetail_01_noProbation: !probation}">免费试读</el-button>
    </div>

    <div class="work_mobile_bookdetail_01_content_validity">内容简介:</div>
    <div class="work_mobile_bookdetail_01_book_synopsis">{{bookInfo[keys.abstract]}}</div>
  </div>


</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import * as interfaces from "@work/login/common/interfaces.js";
import * as type from "@work/bookDetail/common/interfaces.js";
import { Post, Get } from '@common'
import URL from "url";
import PROJECT_CONFIG from "projectConfig";

export default {
  name: "work_mobile_bookdetail_01",
  props: ['namespace'],
  reused: true,
  data () {
    return {
      modalStatus: false,
      contentType: 91, //赋值属性，页面可以调用
      pubId: "",
      keys: {},
      config: $_$,
      value1: null,
      bookInfo: '',
      probation: true,  // 是否可以试读
    };
  },
  created: function () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].bookdetail.bookdetail_01;
    this.keys = this.CONFIG.keys;
    var param = URL.parse(window.location.href, true).query;
    this.pubId = param.pubId; // pubId
    this.loadData();
  },

  computed: {
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER
    }),
  },
  methods: {
    loadData () {
      let url = this.CONFIG.url;
      var paramsObj = {
        pubId: this.pubId,
        loginName: ''
      }
      Get(CONFIG.BASE_URL+url, { params: paramsObj }).then((resp) => {
        this.bookInfo = resp.data.data;
        this.probation = this.bookInfo.bookFreeDownLoadPath ? true : false;
      })

    },
    toRead (bookId, readType, probationUrl) {
      if (!probationUrl) {  // 没有试读地址的情况
        return false;
      }
      var url = CONFIG.READ_URL + '?bookId=' + bookId + '&readType=' + readType + '&userName=&siteType=' + CONFIG.READ_CONFIG.siteType;
      window.location.href = url;
    }
  },
}
</script>

<style>
.work_mobile_bookdetail_01_img_center {
  text-align: center;
}

.work_mobile_bookdetail_01_img {
  width: 100px;
  margin-top: 50px;
}

.work_mobile_bookdetail_01_bookname {
  text-align: center;
  font-size: 0.26rem;
}

.work_mobile_bookdetail_01_author {
  text-align: center;
  font-size: 0.2rem;
}

.work_mobile_bookdetail_01_rate {
  text-align: center;
}

.work_mobile_bookdetail_01_four_information {
  display: inline-block;
}

.work_mobile_bookdetail_01_ul {
  /*position: absolute;*/
  /*margin-top: -80px;*/
}

.work_mobile_bookdetail_01_member_price {
  font-size: 0.12rem;
  text-align: center;
  width: 80px;
  margin-left: 30px;
  display: inline-block;
}

.work_mobile_bookdetail_01_book_price {
  font-size: 0.12rem;
  text-align: center;
  width: 60px;
  display: inline-block;
  text-decoration: line-through;
}

.work_mobile_bookdetail_01_book_memory {
  font-size: 0.12rem;
  text-align: center;
  width: 60px;
  display: inline-block;
}

.work_mobile_bookdetail_01_book_star {
  font-size: 0.12rem;
  text-align: center;
  width: 60px;
  display: inline-block;
}

.work_mobile_bookdetail_01_line {
  height: 12px;
  width: 1px;
  background: grey;
  display: inline-block;
}
.work_mobile_bookdetail_01_free_read {
  text-align: center;
  margin-top: 30px;
}

.work_mobile_bookdetail_01_content_validity {
  font-size: 0.26rem;
  margin-left: 20px;
}

.work_mobile_bookdetail_01_book_synopsis {
  font-size: 0.26rem;
  padding: 0.1rem 0.4rem;
}

.work_mobile_bookdetail_01_noProbation {
  background-color: #ccc;
}
</style>
