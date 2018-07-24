<template>
  <div class="swiper-container pic_info_list_12">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :style="{background: '#f4f7f9'}" v-for="(bookDetailInfo,ind) in bookDetailInfoList" :key="ind"> <!--这个背景颜色是解决图片，文字重叠的效果的-->
        <dl class="l_big fl">
          <dt class="fl">
            <a class="swiper-a" target="_blank" href="javascript:void(0)" @click="toBookDetail(bookDetailInfo.pubId)">
              <img class="swiper-img" onload="DrawImage(this,186,248)" :alt="getStaticText('noImg') ? getStaticText('noImg') : '暂无图片'" :src="bookDetailInfo && bookDetailInfo.bigPic">
            </a>
          </dt>
          <dd class="fl pl20">
            <p class="title f16"><a href="javascript:void(0)" @click="toBookDetail(bookDetailInfo.pubId)" v-text="bookDetailInfo && bookDetailInfo.resourceName"></a></p>
            <p class="xing starStyle">
              <el-rate v-model="bookDetailInfo.starNum - 0" :show-text="false" :max="5" disabled
                       disabled-void-color="#c1c1c0" v-if="bookDetailInfo && bookDetailInfo.pub_star_num != 0"></el-rate>
            </p>
            <p class="author f14 book_chuban_text">{{getStaticText('author') ? getStaticText('author') : '作者：'}}<span v-text="bookDetailInfo && bookDetailInfo.author"></span></p>
            <p class="banquan book_chuban_text">{{getStaticText('press') ? getStaticText('press') : ' 出版社：'}}{{notAvailableNew(bookDetailInfo && bookDetailInfo.BOOK_PRESS_NAME)}}</p>
            <p class="chuban">{{getStaticText('pubTime') ? getStaticText('pubTime') : ' 出版时间：'}}{{formatDateNEW(bookDetailInfo && bookDetailInfo.pubTime)}}</p>
            <p class="price f16">{{formatPriceNew(bookDetailInfo && bookDetailInfo.memberPrice)}}<span>{{formatPriceNew(bookDetailInfo && bookDetailInfo.ebPrice)}}</span>
            </p>
            <p class="reader">
              <a target="_blank" href="javascript:void(0)" @click="shidu(bookDetailInfo && bookDetailInfo.resourceId,0,bookDetailInfo && bookDetailInfo.resourceName)">{{getStaticText('freeReading') ? getStaticText('freeReading') : '免费试读'}}</a>
            </p>
          </dd>
        </dl>
        <div>
        <div class="jianjie" v-html="jianjie(bookIntroductions[ind])"></div>
        </div>
        <a href="javascript:;" @click="viewAll()" class="more">{{getStaticText('seeAll') ? getStaticText('seeAll') : '查看全部>'}}</a>
      </div>
    </div>

  </div>
</template>
<script>
  import {Get, Post} from "@common";
  import PROJECT_CONFIG from "projectConfig";
  import Swiper from 'swiper';

  export default {
    name: "ui_pic_info_list_12",
    reused: true,
    props: ["namespace"],
    data: function () {
      return {
        bookDetailInfoList: [],
        bookIntroductions:[],
        CONFIG: null,
      }
    },
    created: function () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.pic_info_list_12;
      this.$bus.$on("setBookInfo", this.getBookInfo); //图书详情
      this.$bus.$on("setIntroductions", this.getIntroductions); //图书详情页简介
    },
    methods: {
      viewAll:function(){
        window.location.href = this.CONFIG.moreUrl;
      },
      getBookInfo: function (param) {
        let bookInfo = [];
        let bookParam = Object.assign({}, this.CONFIG.params);
        let _this = this;
        let i = 0;
        let promise=new Promise(function(resolve){
          function cb() {
            if (i == param.length) {
              resolve(bookInfo);
            } else {
              bookParam.pubId = param[i];
              Get(CONFIG.BASE_URL+_this.CONFIG.url, {"params": bookParam}).then((rep) => {
                let data = rep.data.data;
                if (data) {
                  bookInfo.push(data);
                  i++;
                  cb();
                }
              });
            }
          }
          cb();
        });
        promise.then(function(data){
          _this.bookDetailInfoList=data;
          _this.$nextTick(_this.initSwiper);           //书城首页列表详情加载完，执行轮播
        })
      },
      getIntroductions:function(param){
        let bookIntroductions = [];
        let bookParam = Object.assign({}, this.CONFIG.introductionParams);
        let _this = this;
        let i = 0;
        let promise=new Promise(function(resolve){
          function cbIntroductions() {
            if (i == param.length) {
              resolve(bookIntroductions);
            } else {
              bookParam.doclibCode = param[i].type;
              bookParam.docID = param[i].id;
              Get(CONFIG.BASE_URL+_this.CONFIG.introductionUrl, {"params": bookParam}).then((rep) => {
                let content=JSON.parse(JSON.stringify(rep)).data.filter(function(data){
                  return data.topic== (_this.getStaticText('briefIntroduction') ? _this.getStaticText('briefIntroduction') : "内容简介");
                })[0].content;
                  bookIntroductions.push(content);
                  i++;
                  cbIntroductions();
              });
            }
          }
          cbIntroductions();
        });
        promise.then(function(data){
          _this.bookIntroductions=data;
        })
      },
      initSwiper: function () {
        new Swiper(".swiper-container", {
          autoplay: 2000,  // 轮播延迟 单位：毫秒
          loop: true,      // 循环
          effect: 'fade'  // 切换效果：slide（位移切换） fade（淡入）
        })
        // var mydom = $('.swiper-slide');
        // mydom.soChange({
        //   thumbObj: '#change_4 .ul_change_a1 li'
        // })
      },
      toBookDetail:function(pubId){
        //详情页
        let url = "./bookdetail.html?pubId="+pubId;
        window.location.href = url;
      },
      shidu:function(bookId,readType,bookName){
        var url = this.CONFIG.READ_URL|| CONFIG.READ_URL+'?bookId='+bookId+'&readType='+readType+'&bookName='+bookName + '&userName=&siteType=' + CONFIG.READ_CONFIG.siteType;
        window.open(url);
      },
      jianjie:function(value){
        if(value){
          var str = value.replace(/<[^>]+>/g,"");//去掉所有的html标记
          if(str.length-1 < 35) {
            return str;
          }else{
            return str.substring(0,280)+"...";
          }
        }
      },
      getStaticText (text) {
        if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]) {
          return this.CONFIG.staticText[text]
        } else {
          return false
        }
      },
      formatDateNEW (value) {
        if (value) {
          return moment(Number(value)).format("YYYY-MM-DD"); // 只接收Number类型
        } else {
          return this.getStaticText('noDate') ? this.getStaticText('noDate') : '暂无日期';
        }
      },
      formatPriceNew (value) {
        if (value) {
          return (this.getStaticText('yuan') ? this.getStaticText('yuan') : '￥') + Number(value).toFixed(2);
        } else {
          return (this.getStaticText('yuan') ? this.getStaticText('yuan') : '￥')+'0.00';
        }
      },
      notAvailableNew (value) {
        if (!value) {
          return this.getStaticText('notHaveYet') ? this.getStaticText('notHaveYet') : '暂无';
        }
        return value;
      }
    }
  }
</script>

<style>
  .book_jdt dl.l_big{
    overflow: hidden;
  }
  .book_jdt dl.l_big dd p.title{
    padding-top: 20px;
  }
  .book_jdt dl.l_big dd{
    width: 250px;
    overflow: hidden;
  }
  .book_jdt dl.l_big{
    overflow: hidden;
  }
  .book_jdt dl.l_big dd p.title a{
    color: #494949;
  }
  .book_jdt dl.l_big dd p.xing{
    margin: 2px 0 5px 0;
  }
  .book_jdt dl.l_big dd p.author{
    color: #727272;
    line-height: 23px;
    margin-top: 15px;
  }
  .book_jdt dl.l_big dd p.banquan, .book_jdt dl.l_big dd p.chuban{
    color: #8d8c8c;
    line-height: 25px;
  }
  .book_jdt dl.l_big dd p.price{
    color: #494949;
    margin: 3px 0 15px;
  }
  .book_jdt dl.l_big dd p.reader{
    line-height: 28px;
    margin-top: 25px;
  }
  .book_jdt dl.l_big dd p.price span{
    color: #9c9595;
    text-decoration: line-through;
    padding-left: 8px;
  }
  .book_jdt dl.l_big dd p.reader a{
    padding: 6px 15px;
    color: #fff;
    background: #c50000;
  }
  .book_jdt .id_flash a{
    color: #000;
    overflow: hidden;
    text-decoration: none;
  }
  .book_jdt .id_flash{
    height: 100%
  }
  .book_jdt .id_flash .top{
    clear: both;
    position: relative;height: 100%;overflow: hidden
  }
  .book_jdt{
    border: 1px solid #e0dfde;
    width: 695px;
    padding: 20px 20px 10px 20px;
    overflow: hidden;
    background: #f4f7f9;
    margin-bottom: 65px;
    height: 425px;
    margin-left: 223px;
    margin-top: 30px;
  }
  .pic_info_list_12{
    float: left;
    width: 460px;
    height: 100%
  }
  .pic_info_list_12 .l_big{
    width: 100%
  }
  .pic_info_list_12 .swiper-a{
    width: 186px;
    height: 248px;
  }
  .pic_info_list_12 .swiper-img{
    float: left;
    text-align: center;
    line-height: 230px;
  }
  .pic_info_list_12 .swiper-wrapper .more{
    position: absolute;
    right: 10px;
    bottom: 10px;
    color: #c50000;
    font-size: 10px;
  }
  .pic_info_list_12{
    float: left;
    width: 460px;
    height: 100%;
  }
  a img{
    border: 0;
  }
  .jianjie{
    width: 455px;
    font-size: 10px;
    line-height: 18px;
    padding-top: 24px;
    overflow: hidden;
  }
</style>
