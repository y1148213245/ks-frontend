<template>
  <div class="ui_list_pic_27">
    <!-- 组件标题是从接口取出来的 取栏目名 -->
    <div class="ui_list_pic_27_comtitle" v-if="columnBookList && columnBookList.length>0 && CONFIG && CONFIG.comTitle && CONFIG.comTitle.isShow">
      <span class="ui_list_pic_27_comtitle_icon">{{ columnBookList[0][keys.colName] ? columnBookList[0][keys.colName] : CONFIG.comTitle.name }}</span>
      <a class="ui_list_pic_27_comtitle_more" :href="CONFIG && CONFIG.moreHref + '?colId=' + columnBookList[0][keys.colId]"> {{CONFIG.display.more}} </a>
    </div>

    <div class="ui_list_pic_27_listCon">
      <dl class="ui_list_pic_27_listDl" v-for="(item, index) in columnBookList" :key="index">
        <dt class="ui_list_pic_27_listDt">
          <a class="ui_list_pic_27_imgBox" @click="toBookDetail(item[keys.pubId])">
            <img class="ui_list_pic_27_img" :src="item[keys.bookPic]"  onload="DrawImage(this,144,194)"  alt="暂无封面"/>
          </a>
        </dt>
        <dd class="ui_list_pic_27_listDd">
          <!-- 书名 -->
          <p class="ui_list_pic_27_title" v-if="CONFIG && CONFIG.showItem && CONFIG.showItem.indexOf('bookName') !== -1">
            <a class="ui_list_pic_27_titleText"  href="javascript:void(0)" @click="toBookDetail(item[keys.pubId])" v-text="item[keys.bookName]" :title="item[keys.bookName]"></a>
            </p>

          <!-- 评分 -->
          <p class="ui_list_pic_27_star" v-if="CONFIG && CONFIG.showItem && CONFIG.showItem.indexOf('starNum') !== -1">
            <el-rate v-model="item[keys.starNum]" :show-text="false" :max="5" disabled disabled-void-color="#c1c1c0"></el-rate>
          </p>

          <!-- 作者 -->
          <p class="ui_list_pic_27_author" v-if="CONFIG && CONFIG.showItem && CONFIG.showItem.indexOf('bookAuthor') !== -1">
            <span class="ui_list_pic_27_authorText">{{CONFIG.display.bookAuthor}}</span>
            <span class="ui_list_pic_27_authorText" >{{ item[keys.bookAuthor] | formatAuthor }}</span>
          </p>

          <!-- 出版社 -->
          <p class="ui_list_pic_27_banquan" v-if="CONFIG && CONFIG.showItem && CONFIG.showItem.indexOf('pressName') !== -1">
            <span class="ui_list_pic_27_authorText">{{CONFIG.display.pressName}}</span>
            <span class="ui_list_pic_27_authorText" v-text="item[keys.pressName]" :title="item[keys.pressName]"></span>
          </p>

          <!-- 出版时间 -->
          <p class="ui_list_pic_27_banquan" v-if="CONFIG && CONFIG.showItem && CONFIG.showItem.indexOf('pubDate') !== -1">
            <span class="ui_list_pic_27_authorText" v-if="CONFIG && CONFIG.display && CONFIG.display.pubDate">{{CONFIG.display.pubDate}}</span>
            <span class="ui_list_pic_27_authorText">{{item[keys.pubDate] | formatDateNEW}}</span>
          </p>

          <!-- 价格 -->
          <p class="ui_list_pic_27_price" v-if="CONFIG && CONFIG.showItem && CONFIG.showItem.indexOf('price') !== -1">
            <span class="ui_list_pic_27_memberPrice">{{item[keys.memberPrice] | formatPriceNew}}</span><!-- 会员价 （现价） -->
            <span class="ui_list_pic_27_ebPrice">{{item[keys.ebPrice] | formatPriceNew}}</span><!-- 电子书价格 （原价） -->
          </p>

          <!-- 其他操作：分享、收藏、点赞 -->
          <p class="ui_list_pic_27_otherInfo">
            <a href="http://www.jiathis.com/share" class="ui_list_pic_27_share" target="_blank" v-if="CONFIG && CONFIG.showItem && CONFIG.showItem.indexOf('share') !== -1">{{CONFIG.display.share}}</a>
            <a href="javascript:void(0)" class="ui_list_pic_27_buy" @click="toBookDetail(item[keys.pubId])" v-if="CONFIG && CONFIG.showItem && CONFIG.showItem.indexOf('buy') !== -1">{{CONFIG.display.buy}}</a>
            <a href="javascript:void(0)" class="ui_list_pic_27_review" @click="toBookDetail(item[keys.pubId])" v-if="CONFIG && CONFIG.showItem && CONFIG.showItem.indexOf('review') !== -1">{{CONFIG.display.review}}</a>
          </p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import { Post, DrawImage } from "@common";
import PROJECT_CONFIG from "projectConfig";


export default {
  name: 'ui_list_pic_27',
  reused: true,
  props: ["namespace", "modulename"],
  data () {
    return {
      CONFIG: null,
      keys: {},
      columnBookList: []
    }
  },
  mounted: function () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.list_pic_27[this.modulename];
    this.keys = this.CONFIG.keys;
    this.getBookList();
  },
  methods: {
    getBookList: function () {
      let paramsObj = Object.assign({}, this.CONFIG.params);
      paramsObj.pageSize = this.CONFIG.maxNum ? this.CONFIG.maxNum + "" : "15";
      Post(CONFIG.BASE_URL + this.CONFIG.url, paramsObj).then((rep) => {
        let datas = rep.data.result;
        console.log(datas);
        if (datas) {
          this.columnBookList = datas;
        }
      });
    },
    toBookDetail (pubId) {  // 去详情页：购买 / 查看
      window.location.href = this.CONFIG.detailHref + '?pubId=' + pubId;
    }
  }
}
</script>

<style>
.ui_list_pic_27 {
  clear: both;
  font-family: "Microsoft Yahei", "微软雅黑", "\5FAE\8F6F\96C5\9ED1", "宋体";
  font-size: 12px;
  color: #888888;
  background-color: #ffffff;
}

.ui_list_pic_27_comtitle_more {
  float: right;
  font-size: 12px;    
  padding-top: 20px;
  font-weight: bold;
}

.ui_list_pic_27_comtitle {
  width: 100%;
  height: 50px;
  border-top: 2px solid #da0b2d;
}

.ui_list_pic_27_comtitle_icon {
  color: #7e7e7e;
  font-size: 18px;
  background: url(./data/bg_001.png) no-repeat;
  padding: 17px 0 0 30px;
  background-position: -2px -92px;
  float: left;
}

.ui_list_pic_27_listCon {
  clear: both;
}

.ui_list_pic_27_listDl {
  margin: 0;
  width: 458px;
  margin-bottom: 35px;
  background-color: #f3f3f3;
  display: inline-block;
  padding: 20px;
  box-sizing: border-box;
  margin-right: 20px;
}

.ui_list_pic_27_listDt {
  float: left;
}

.ui_list_pic_27_imgBox {
  position: relative;
  display: block;
  width: 144px;
  height: 194px;
  margin: 0;
  padding: 0;
  line-height: 194px;
}

.ui_list_pic_27_img {
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-block;
  margin: 0;
  padding: 0;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  border: 0px;
}

.ui_list_pic_27_listDd {
  float: left;
  width: calc(100% - 164px);
  box-sizing: border-box;
  margin-left: 20px;
}

.ui_list_pic_27_title {
  padding-top: 20px;
  font-size: 16px;
}

.ui_list_pic_27_titleText {
  display: inline-block;
  max-width: 250px;
  line-height: 23px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #494949;
}

.ui_list_pic_27_star {
  margin: 2px 0 5px 0;
}

.ui_list_pic_27_star i {
  font-size: 16px;
}

.ui_list_pic_27_author {
  line-height: 23px;
  font-size: 14px;
  color: #727272;
}

.ui_list_pic_27_authorText {
  display: inline-block;
  max-width: 250px;
  line-height: 23px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.ui_list_pic_27_banquan {
  line-height: 23px;
  color: #8d8c8c;
  font-size: 14px;
}

.ui_list_pic_27_price {
  margin: 3px 0 15px;
  font-size: 16px;
  color: #494949;
}

.ui_list_pic_27_price i {
  font-style: normal;
}

.ui_list_pic_27_ebPrice {
  color: #9c9595;
  text-decoration: line-through;
}

.ui_list_pic_27_otherInfo {
  line-height: 28px;
}

.ui_list_pic_27_share {
  display: inline-block;
  height: 28px;
  width: 38px;
  text-indent: -9999px;
  background-position: 0 90px;
  border-width: 1px;
  background-image: url(./data/bg_005.png);
  border-style: solid;
  border-color: #d2d2d2;
  cursor: pointer;
}

.ui_list_pic_27_share:hover {
  background-position: -36px -20px;
}

.ui_list_pic_27_buy {
  display: inline-block;
  width: 52px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  color: #fff;
  background: #c50000;
  cursor: pointer;
}

.ui_list_pic_27_review {
  display: inline-block;
  width: 52px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background: #515151;
  color: #ffffff;
  cursor: pointer;
}

.ui_list_pic_27 a {
  text-decoration: none;
}

.ui_list_pic_27 p {
  margin: 0px;
  padding: 0;
  height: 30px;
  line-height: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>