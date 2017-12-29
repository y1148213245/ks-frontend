<template>
  <div name="data_column_block">
    <div class="hot_book_list cl">
      <dl class="fr mb35" v-for="(entry,index) in popularBookList" :class="{float_left:index%2==0}" v-if="index<number">
        <dt class="fl popular_list_dtBox">
          <a @click="toBookDetail(entry.pubId)"   class="popular_list_imgBox">
            <img class="popular_list_img" :src="entry.bookUrl"  onload="DrawImage(this,144,194)"   alt="暂无封面"/>
          </a>
        </dt>
        <dd>
          <p class="title f16"><a href="javascript:void(0)" @click="toBookDetail(entry.id)" v-text="entry.bookName" class="text" :title="entry.bookName"></a></p>
          <p class="xing starStyle">
            <el-rate v-model="entry.starNum" :show-text="false" :max="5" disabled disabled-void-color="#c1c1c0"></el-rate>
          </p>
          <p class="author f14"><span class="text">作者：</span><span v-text="entry.bookAuthor" :title="entry.bookAuthor" class="text"></span></p>
          <p class="banquan f14"><span class="text">出版社：</span><span v-text="entry.BOOK_PRESS_NAME" :title="entry.BOOK_PRESS_NAME"  class="text"></span></p>
          <p class="chuban f14"><span class="text">出版时间：</span><span v-text=""   v-if="entry.BOOK_PUBDATE?entry.BOOK_PUBDATE:0" :title="entry.BOOK_PUBDATE" class="text">{{entry.BOOK_PUBDATE}}</span>
          </p>
          <p class="price f16">￥<i v-text="">{{entry.bookProdPrice?Number(entry.bookProdPrice).toFixed(2):'0.00'}}</i> <span>￥{{entry.bookPrice?Number(entry.bookPrice).toFixed(2):'0.00'}}</span></p>
          <p class="other">
            <a href="http://www.jiathis.com/share" class="jiathis jiathis_txt jtico jtico_jiathis share share-box" target="_blank">分享</a>
            <a href="javascript:void(0)" @click="toBookDetail(entry.pubId)" class="goumai f12  color_fff">购买</a>
            <a href="javascript:void(0)" @click="toBookDetail(entry.pubId)" class="chakan f12 color_fff">查看</a>
          </p>
        </dd>
      </dl>
     <!-- &lt;!&ndash;<ui_pagination :pageMessage="{totalCount: this.totalCount - 0 }" :excuteFunction="paging"></ui_pagination>&ndash;&gt;-->
    </div>
  </div>
</template>

<script>
	import {Post,DrawImage} from "@common";
	import PROJECT_CONFIG from "projectConfig";


	export default {
		name: 'ui_list_pic_o7_popular_book',
		reused: true,
    props:["namespace"],
		data () {
			return {
				number:4,
        popularBookList:[]
			}
		},
    mounted:function () {
			this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.popularBook;
      this.getPopularBookListData();
    },
		methods:{
			getPopularBookListData:function () {
//				let paramsObj = Object.assign({}, this.CONFIG.param);
//				if(param){
//					paramsObj.pageNo = param.pageNo;
//					paramsObj.pageSize = param.pageSize;
//				}
				Post(this.CONFIG.url, this.CONFIG.param).then((rep) => {
            let datas = rep.data.result;
            let loadingDatas = [];
            if(datas) {
              for (let i = 0; i < datas.length; i++) {
                let entry = {
                  bookName: datas[i].pub_resource_name || '暂无书名',
                  starNum:datas[i].pub_star_num,
                  bookProdPrice:datas[i].prod_member_price || 0,
                  bookPrice: datas[i].BOOK_EB_PRICE || 0,
                  bookAuthor: datas[i].BOOK_SYS_AUTHORS || '暂无作者',
                  pubId: datas[i].id || 0,
                  contentType: datas[i].pub_content_type || 0,
                  pub_col_id: datas[i].pub_col_id || 51,
                  bookUrl: datas[i].pub_picBig || "aaa.jpg",
                  BOOK_PRESS_NAME: datas[i].BOOK_PRESS_NAME,
                  BOOK_PUBDATE:datas[i].BOOK_PUBDATE? this.formatDate(datas[i].BOOK_PUBDATE,"yyyy-MM-dd"): "暂无日期"
                }
                loadingDatas.push(entry);
              }
            }
            this.popularBookList = loadingDatas;
				});
			},
			toBookDetail(pubId) {
				window.location.href = this.CONFIG.href + pubId;
			},
			formatDate: function(time, fmt) {
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

<style>
  .block{
    position: relative;
    margin-top: 10px;
    clear: both;
  }
  .share-box {
    border: 1px solid #d2d2d2
  }

  .float_left {
    float: left;
  }
  .text {
    display: inline-block;
    max-width: 250px;
    line-height: 23px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .popular_list_dtBox {
    margin-left: 19px;
    margin-top: 20px;
  }

  .popular_list_imgBox {
    position: relative;
    display: block !important;
    width: 144px !important;
    height: 194px !important;
    margin: 0 !important;
    padding: 0 !important;
    line-height: 194px !important;
  }

  .popular_list_img {
    position: absolute;
    top: 50%;
    left: 50%;
    display: inline-block;
    margin: 0 !important;
    padding: 0 !important;
    transform: translate(-50%, -50%);
  }
</style>