<template>
  <div class="ui_list_pic_07 ui_list_pic_07_skin">
    <dl class="listDl" v-for="(entry,index) in popularBookList" :class="{floatLeft:index%2==0}" v-if="index<number" :key="index">
      <dt class="listDt">
        <a @click="toBookDetail(entry.pubId)" class="imgBox">
          <img class="popular_list_img" :src="entry.bookUrl"  onload="DrawImage(this,144,194)"   alt="暂无封面"/>
        </a>
      </dt>
      <dd class="listDd">
        <p class="title">
          <a href="javascript:void(0)" @click="toBookDetail(entry.pubId)" v-text="entry.bookName" class="titleText" :title="entry.bookName"></a>
          </p>
        <p class="xing">
          <el-rate v-model="entry.starNum" :show-text="false" :max="5" disabled disabled-void-color="#c1c1c0"></el-rate>
        </p>
        <p class="author">
          <span class="authorText">作者：</span>
          <span class="authorText" v-text="entry.bookAuthor" :title="entry.bookAuthor"></span>
        </p>
        <p class="banquan"><span class="authorText">出版社：</span><span v-text="entry.BOOK_PRESS_NAME" :title="entry.BOOK_PRESS_NAME" class="authorText"></span></p>
        <p class="banquan"><span class="authorText">出版时间：</span><span v-if="entry.BOOK_PUBDATE?entry.BOOK_PUBDATE:0" :title="entry.BOOK_PUBDATE" class="authorText">{{entry.BOOK_PUBDATE}}</span>
        </p>
        <p class="price">￥<i>{{entry.bookProdPrice?Number(entry.bookProdPrice).toFixed(2):'0.00'}}</i> <span>￥{{entry.bookPrice?Number(entry.bookPrice).toFixed(2):'0.00'}}</span></p>
        <p class="other">
          <a href="http://www.jiathis.com/share" class="share" target="_blank">分享</a>
          <a href="javascript:void(0)" @click="toBookDetail(entry.pubId)" class="goumai f12  color_fff">购买</a>
          <a href="javascript:void(0)" @click="toBookDetail(entry.pubId)" class="chakan f12 color_fff">查看</a>
        </p>
      </dd>
    </dl>
  </div>
</template>

<script>
import { Post, DrawImage } from "@common";
import PROJECT_CONFIG from "projectConfig";


export default {
  name: 'ui_list_pic_o7_popular_book',
  reused: true,
  props: ["namespace"],
  data () {
    return {
      number: 4,
      popularBookList: []
    }
  },
  mounted: function () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.popularBook;
    this.getPopularBookListData();
  },
  methods: {
    getPopularBookListData: function () {
      //				let paramsObj = Object.assign({}, this.CONFIG.param);
      //				if(param){
      //					paramsObj.pageNo = param.pageNo;
      //					paramsObj.pageSize = param.pageSize;
      //				}
      Post(CONFIG.BASE_URL+this.CONFIG.url, this.CONFIG.param).then((rep) => {
        let datas = rep.data.result;
        let loadingDatas = [];
        if (datas) {
          for (let i = 0; i < datas.length; i++) {
            let entry = {
              bookName: datas[i].pub_resource_name || '暂无书名',
              starNum: datas[i].pub_star_num,
              bookProdPrice: datas[i].prod_member_price || 0,
              bookPrice: datas[i].BOOK_EB_PRICE || 0,
              bookAuthor: datas[i].BOOK_SYS_AUTHORS || '暂无作者',
              pubId: datas[i].id || 0,
              contentType: datas[i].pub_content_type || 0,
              pub_col_id: datas[i].pub_col_id || 51,
              bookUrl: datas[i].pub_picBig || "aaa.jpg",
              BOOK_PRESS_NAME: datas[i].BOOK_PRESS_NAME,
              BOOK_PUBDATE: datas[i].BOOK_PUBDATE ? this.formatDate(datas[i].BOOK_PUBDATE, "yyyy-MM-dd") : "暂无日期"
            }
            loadingDatas.push(entry);
          }
        }
        this.popularBookList = loadingDatas;
      });
    },
    toBookDetail (pubId) {
      window.location.href = this.CONFIG.href + pubId;
    },
    formatDate: function (time, fmt) {
      var date = new Date(time);
      if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
      }
      let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
      }
      for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
          let str = o[k] + ''
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length))
        }
      }
      return fmt;
    },
    //分页预留 TODO
    //			paging: function ({pageNo, pageSize}) {
    //				var param = {
    //					pageNo: pageNo,
    //					pageSize: pageSize,
    //				};
    //				this.getPopularBookListData(param);
    //			},
  }
}
</script>

<style scoped>
/* start 结构样式 */
* {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.ui_list_pic_07 {
  clear: both;
}

.ui_list_pic_07 .listDl {
  float: right;
  width: 458px;
  height: 240px;
  margin-bottom: 35px;
}

.ui_list_pic_07 .floatLeft {
  float: left;
}

.ui_list_pic_07 .listDl .listDt {
  margin-left: 19px;
  margin-top: 20px;
  float: left;
}

.ui_list_pic_07 .listDl .listDt .imgBox {
  position: relative;
  display: block;
  width: 144px;
  height: 194px;
  margin: 0;
  padding: 0;
  line-height: 194px;
}

.ui_list_pic_07 .listDl .listDt .imgBox img {
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

.ui_list_pic_07 .listDl .listDd {
  width: 270px;
  float: left;
  padding-left: 25px;
}

.ui_list_pic_07 .listDl .listDd .title {
  padding-top: 20px;
}

.ui_list_pic_07 .listDl .listDd .titleText {
  display: inline-block;
  max-width: 250px;
  line-height: 23px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.ui_list_pic_07 .listDl .listDd .xing {
  margin: 2px 0 5px 0;
}

.ui_list_pic_07 .listDl .listDd .author {
  line-height: 23px;
}

.ui_list_pic_07 .listDl .listDd .authorText {
  display: inline-block;
  max-width: 250px;
  line-height: 23px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.ui_list_pic_07 .listDl .listDd .banquan {
  line-height: 23px;
}

.ui_list_pic_07 .listDl .listDd .price {
  margin: 3px 0 15px;
}

.ui_list_pic_07 .listDl .listDd .other {
  line-height: 28px;
}

.ui_list_pic_07 .listDl .listDd .other .share {
  display: inline-block;
  height: 28px;
  width: 38px;
  text-indent: -9999px;
  background-position: 0 90px;
  border-width: 1px;
}

.ui_list_pic_07_skin .listDl .listDd .other .share:hover {
  background-position: -36px -20px;
}

.ui_list_pic_07 .listDl .listDd .other .goumai {
  display: inline-block;
  width: 52px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}

.ui_list_pic_07 .listDl .listDd .other .chakan {
  display: inline-block;
  width: 52px;
  height: 30px;
  text-align: center;
  line-height: 30px;
}
/* end 结构样式 */

/* start 皮肤样式 */
.ui_list_pic_07_skin {
  font-family: "Microsoft Yahei", "微软雅黑", "\5FAE\8F6F\96C5\9ED1", "宋体";
  font-size: 12px;
  color: #888888;
}

.ui_list_pic_07_skin a {
  text-decoration: none;
}

.ui_list_pic_07_skin .listDl {
  background-color: #f3f3f3;
}

.ui_list_pic_07_skin .listDl .listDd .title {
  font-size: 16px;
}

.ui_list_pic_07_skin .listDl .listDd .titleText {
  color: #494949;
}

.ui_list_pic_07_skin .listDl .listDd .xing i {
  font-size: 16px;
}

.ui_list_pic_07_skin .listDl .listDd .author {
  font-size: 14px;
  color: #727272;
}

.ui_list_pic_07_skin .listDl .listDd .banquan {
  color: #8d8c8c;
  font-size: 14px;
}

.ui_list_pic_07_skin .listDl .listDd .price {
  font-size: 16px;
  color: #494949;
}

.ui_list_pic_07_skin .listDl .listDd .price i {
  font-style: normal;
}

.ui_list_pic_07_skin .listDl .listDd .price span {
  color: #9c9595;
  text-decoration: line-through;
}

.ui_list_pic_07_skin .listDl .listDd .other .share {
  background-image: url(./data/bg_005.png);
  border-style: solid;
  border-color: #d2d2d2;
  cursor: pointer;
}

.ui_list_pic_07_skin .listDl .listDd .other .goumai {
  color: #fff;
  background: #c50000;
  cursor: pointer;
}

.ui_list_pic_07_skin .listDl .listDd .other .chakan {
  background: #515151;
  cursor: pointer;
}
/* end 皮肤样式 */
</style>