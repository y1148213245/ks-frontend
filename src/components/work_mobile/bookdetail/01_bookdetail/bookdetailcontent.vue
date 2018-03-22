<template>
  <div>
    <div class="work_mobile_bookdetail_01_img_center">
      <img class="work_mobile_bookdetail_01_img" :src="bookInfo[keys.pic] || '../assets/img/zwfm.png'"
           onload="DrawImage(this,410,280)" alt="暂无封面">
    </div>
    <div class="work_mobile_bookdetail_01_bookname" v-text="bookInfo[keys.title] || ''">
    </div>
    <div class="work_mobile_bookdetail_01_author" v-text="'作者:'+ (bookInfo[keys.author]|| '')">

    </div>

    <div class="work_mobile_bookdetail_01_rate">
      <el-rate v-model="value1"></el-rate>
    </div>

    <div class="work_mobile_bookdetail_01_four_information">
      <ul class="work_mobile_bookdetail_01_ul">
        <li class="work_mobile_bookdetail_01_member_price">{{bookInfo[keys.memberPrice]}}开元</li>
        <li class="work_mobile_bookdetail_01_book_price">{{bookInfo[keys.bookPrice]}}开元</li>
        <li class="work_mobile_bookdetail_01_line"></li>
        <li class="work_mobile_bookdetail_01_book_memory">{{bookInfo[keys.bookPrice]}}M</li><!--这里暂时写成这个字段，不知道字段-->
        <li class="work_mobile_bookdetail_01_line"></li>
        <li class="work_mobile_bookdetail_01_book_star">{{bookInfo[keys.starNum]}}分</li>
      </ul>
    </div>

    <div class="work_mobile_bookdetail_01_content_validity">内容简介:</div>
    <div class="work_mobile_bookdetail_01_book_synopsis">{{bookInfo.BOOK_SYNOPSIS}}</div>
  </div>


</template>

<script>
  import {mapGetters, mapActions, mapState} from 'vuex';
  import * as interfaces from "@work/login/common/interfaces.js";
  import * as type from "@work/bookDetail/common/interfaces.js";
  import URL from "url";
  import PROJECT_CONFIG from "projectConfig";

  export default {
    name: "work_mobile_bookdetail_01",
    props: ['namespace'],
    reused: true,
    data() {
      return {
        modalStatus: false,
        contentType: 91, //赋值属性，页面可以调用
        pubId: "",
        keys: {},
        config: $_$,
        value1: null,
      };
    },
    created: function () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].bookdetail.bookdetail_01;
      this.keys = this.CONFIG.keys;
      var param = URL.parse(window.location.href, true).query;
      this.pubId = param.pubId; // pubId
      var params = {
        loginName: '',
        pubId: this.pubId,
        siteId: CONFIG.SITE_CONFIG.siteId
      };
      this.$store.dispatch('bookDetail/' + type.BOOK_DETAIL, params);
    },
    computed: {
      ...mapGetters({
        bookInfo: 'bookDetail/bookDetailInfo',
      }),
      ...mapGetters("login", {
        member: interfaces.GET_MEMBER
      }),
    },
    methods: {},
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
    font-size: 0.20rem;
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

  .work_mobile_bookdetail_01_content_validity {
    font-size: 0.26rem;
    margin-left: 20px;
  }

  .work_mobile_bookdetail_01_book_synopsis {
    font-size: 0.26rem;
    margin-left: 20px;
  }


</style>
