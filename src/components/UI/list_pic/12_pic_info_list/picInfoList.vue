<template>
  <div class="top">
    <div class="a_bigImg" v-for="(bookDetailInfo,ind) in bookDetailInfoList">
      <div class="img2" :style="{background: '#f4f7f9'}"> <!--这个背景颜色是解决图片，文字重叠的效果的-->
        <dl class="l_big fl">
          <dt class="fl">
            <a target="_blank" href="javascript:void(0)" @click="toBookDetail(bookDetailInfo.pubId)" style="width: 186px;height: 248px;">
              <img onload="DrawImage(this,186,248)" :src="bookDetailInfo && bookDetailInfo.bigPic" alt="暂无图片" style="float: left;text-align: center;line-height: 230px;">
            </a>
          </dt>
          <dd class="fl pl20">
            <p class="title f16"><a href="javascript:void(0)" @click="toBookDetail(bookDetailInfo.pubId)"
                                    v-text="bookDetailInfo && bookDetailInfo.resourceName"></a></p>
            <p class="xing starStyle">
              <el-rate v-model="bookDetailInfo.starNum" :show-text="false" :max="5" disabled
                       disabled-void-color="#c1c1c0" v-if="bookDetailInfo && bookDetailInfo.starNum"></el-rate>

            </p>
            <p class="author f14 book_chuban_text">作者：<span v-text="bookDetailInfo && bookDetailInfo.author"></span></p>
            <p class="banquan book_chuban_text"> 出版社：{{bookDetailInfo && bookDetailInfo.bookCopyright}}</p>
            <p class="chuban"> 出版时间：{{bookDetailInfo && bookDetailInfo.pubTime | formatDate}}</p>
            <p class="price f16">￥{{bookDetailInfo && bookDetailInfo.memberPrice | filterFun}}<span>￥{{bookDetailInfo && bookDetailInfo.ebPrice | filterFun}}</span></p>
            <p class="reader"><a target="_blank" href="javascript:void(0)" @click="shidu(bookDetailInfo && bookDetailInfo.resourceId,0,bookDetailInfo && bookDetailInfo.resourceName)">免费试读</a>
            </p>
          </dd>
        </dl>
        <template v-for="introductions in getBookIntroductions">
          <div v-for="introduction in introductions" v-if="introduction.topic=='内容简介' && introduction.book_documentid == (bookDetailInfo && bookDetailInfo.resourceId)">
            <div class="jianjie" v-html="jianjie(introduction.content)"></div>
          </div>
        </template>

        <a href="./bookList.html?colId=130" class="more">查看全部></a>
      </div>
    </div>
    <ul class="ul_change_a1">
      <li class="now book_index_imgBox" v-for="(getEb,index) in getQueryEbook" v-if="index < 4">
        <img class="book_index_img" onload="DrawImage(this,75,97)" :src="getEb.pub_picBig"
             @click="toBookDetail(getEb.id)" alt="暂无图片" style="line-height:90px;text-align:center;cursor: pointer;">
      </li>
    </ul>
    <div class="pos_title">
      <dl v-for="(getEb,index) in getQueryEbook" v-if="index < 4">
        <dt><a target="_blank" href="javascript:void(0)" @click="toBookDetail(getEb.id)"
               v-text="getEb.pub_resource_name" class="book_list_text"></a></dt>
        <dd v-text="getEb.BOOK_SYS_AUTHORS" class="book_list_text"></dd>
        <dd class="xing starStyle">
          <el-rate v-model="getEb.pub_star_num" :show-text="false" :max="5" disabled
                   disabled-void-color="#c1c1c0"></el-rate>
        </dd>
        <dd><font color="#dd2a48">￥{{getEb.BOOK_EB_PRICE | filterFun}}</font></dd>
      </dl>
    </div>
  </div>
</template>
<script>
    export default {
        name: "ui_list_pic_12",
        reused:true,
        props:[],
        data:function(){
            return {
              bookDetailInfoList:[]
            }
        },
        computed:{

        },
        created:function(){

        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
