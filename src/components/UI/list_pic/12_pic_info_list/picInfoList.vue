<template>
  <div class="swiper-container pic_info_list_12" style="float: left;width: 460px;height: 100%">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :style="{background: '#f4f7f9'}" v-for="(bookDetailInfo,ind) in bookDetailInfoList"> <!--这个背景颜色是解决图片，文字重叠的效果的-->
        <dl class="l_big fl" style="width: 100%">
          <dt class="fl">
            <a target="_blank" href="javascript:void(0)" @click="toBookDetail(bookDetailInfo.pubId)"
               style="width: 186px;height: 248px;">
              <img onload="DrawImage(this,186,248)" alt="暂无图片" :src="bookDetailInfo && bookDetailInfo.bigPic"
                   style="float: left;text-align: center;line-height: 230px;">
            </a>
          </dt>
          <dd class="fl pl20">
            <p class="title f16"><a href="javascript:void(0)" @click="toBookDetail(bookDetailInfo.pubId)"
                                    v-text="bookDetailInfo && bookDetailInfo.resourceName"></a></p>
            <!--<p class="xing starStyle">-->
              <!--<el-rate v-model="bookDetailInfo.starNum" :show-text="false" :max="5" disabled-->
                       <!--disabled-void-color="#c1c1c0" v-if="bookDetailInfo && bookDetailInfo.starNum"></el-rate>-->
            <!--</p>-->
            <p class="author f14 book_chuban_text">作者：<span v-text="bookDetailInfo && bookDetailInfo.author | not-available"></span></p>
            <p class="banquan book_chuban_text"> 出版社：{{bookDetailInfo && bookDetailInfo.bookCopyright | not-available}}</p>
            <p class="chuban"> 出版时间：{{bookDetailInfo && bookDetailInfo.pubTime | formatDate}}</p>
            <p class="price f16">￥{{bookDetailInfo && bookDetailInfo.memberPrice | filterFun}}<span>￥{{bookDetailInfo && bookDetailInfo.ebPrice | filterFun}}</span>
            </p>
            <p class="reader"><a target="_blank" href="javascript:void(0)"
                                 @click="shidu(bookDetailInfo && bookDetailInfo.resourceId,0,bookDetailInfo && bookDetailInfo.resourceName)">免费试读</a>
            </p>
          </dd>
        </dl>
        <div>
        <div class="jianjie" v-html="jianjie(bookIntroductions[ind])"></div>
        </div>

        <a href="./bookList.html?colId=130" class="more" style="position: absolute;right: 10px;bottom: 10px;color: #c50000;font-size: 10px;">查看全部></a>
      </div>
    </div>
  </div>
</template>
<script>
  import {Get, Post} from "@common";
  import PROJECT_CONFIG from "projectConfig";
  // import Swiper from 'swiper';

  export default {
    name: "pic_info_list_12",
    reused: true,
    props: ["namespace"],
    data: function () {
      return {
        bookDetailInfoList: [],
        bookIntroductions:[]
      }
    },
    created: function () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.pic_info_list_12;
      this.$bus.$on("setBookInfo", this.getBookInfo); //图书详情
      this.$bus.$on("setIntroductions", this.getIntroductions); //图书详情页简介
    },
    methods: {
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
              Get(_this.CONFIG.url, {"params": bookParam}).then((rep) => {
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
              Get(_this.CONFIG.introductionUrl, {"params": bookParam}).then((rep) => {
                let content=JSON.parse(JSON.stringify(rep)).data.filter(function(data){
                  return data.topic=="内容简介";
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
        // new Swiper(".swiper-container", {
        //   autoplay: true,
        //   loop: true,
        //   delay: 10,
        // })
        var mydom = $('.swiper-slide');
        mydom.soChange({
          thumbObj: '#change_4 .ul_change_a1 li'
        })
      },
      toBookDetail:function(pubId){
        //详情页
        let url = "./bookdetail.html?pubId="+pubId;
        window.location.href = url;
      },
      //TODO 试读页
      shidu:function(bookId,readType,bookName){
        var url = type.READ_CONFIG.baseURL+'/ebook/read.jsp?bookId='+bookId+'&readType='+readType+'&bookName='+bookName;
        window.open(url);
      },
      jianjie:function(value){
        var str = value.replace(/<[^>]+>/g,"");//去掉所有的html标记
        if(str.length-1 < 35) {
          return str;
        }else{
          return str.substring(0,280)+"...";
        }
      }
    }
  }
</script>

<style scoped>

</style>
