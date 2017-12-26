<template>
  <div class="content-wrap ui_list_pic_01_pic_list_page">
    <div class="container clearfix"  >
      <!-- 新闻列表
          ============================================= -->
      <div class="news-feature" v-for="(news,index) in listNewsCenter">
        <div v-if="index==0">
          <div class="news-hot">
            <a href="javascript:void(0)" @click="toNewsDetail(news.pubId)" target="_blank">
              <!--<img src="/assets/img/news-big.jpg">-->
              <img onload="DrawImage(this,310,240)" :src="news.bookUrl" v-if="news.bookUrl">
            </a>
            <div class="heading-block">
              <h3><a href="javascript:void(0)" @click="toNewsDetail(news.pubId)" target="_blank">{{news.bookName}}</a></h3>
              <span>{{news.pubTime }}</span>
            </div>
          </div>
        </div>

        <div v-else="index==1">
          <div class="news-thumb">
            <a href="javascript:void(0)" @click="toNewsDetail(news.pubId)" >
              <img onload="DrawImage(this,310,240)" :src="news.bookUrl" v-if="news.bookUrl">
            </a>
            <div class="heading-block">
              <h4><a href="javascript:void(0)" @click="toNewsDetail(news.pubId)" target="_blank">{{news.bookName}}</a></h4>
              <span>{{news.pubTime }}</span>
              <p>{{news.pubToPic}}</p>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="news-thumb notopborder">
            <a href="javascript:void(0)" @click="toNewsDetail(news.pubId)">
              <img onload="DrawImage(this,310,240)" :src="news.bookUrl" v-if="news.bookUrl">
            </a>
            <div class="heading-block">
              <h4><a href="javascript:void(0)" @click="toNewsDetail(news.pubId)" target="_blank">{{news.bookName}}</a></h4>
              <span>{{news.pubTime}}</span>
              <p>{{news.pubToPic}}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <ui_pagination :pageMessage="{totalCount: this.totalCount - 0 || 0}" :excuteFunction="paging"></ui_pagination>
  </div>
</template>

<script>
	import {Post} from "@common";
	import PROJECT_CONFIG from "projectConfig";
	import vpage from "../../pagination/pagination.vue";


	export default {
		name: "ui_list_pic_01_pic_list_page",
		reused: true,
		props: ["namespace"],
		data () {
			return{
				CONFIG:null,
        listNewsCenter:[],
				pageMessage:null,
				totalCount:'0'
      }
		},
    mounted(){
			this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.ui_list_pic_01_news_center;
			this.getNewCenterData();
    },
    methods:{
      getNewCenterData:function (param) {
	      let paramsObj = Object.assign({}, this.CONFIG.params);
        if(param){
	        paramsObj.pageNo = param.pageNo;
	        paramsObj.pageSize = param.pageSize;
        }
	      Post(this.CONFIG.url, paramsObj).then((rep) => {

		      var datas = rep.data.result;
		      var loadDatas = [];
		      if(datas&& datas instanceof Array && datas.length>0){
			      for (var i = 0; i < datas.length; i++) {
				      var entry = {
					      bookName: datas[i].pub_resource_name || '暂无书名',
                pubTime:this.formatDate(datas[i].information_a_pubTime,"yyyy-MM-dd") ||0,
                pubToPic:datas[i].information_SYS_TOPIC,
					      pubId: datas[i].id || 0,
					      bookUrl: datas[i].pub_picBig || ""
				      };
				      loadDatas.push(entry)
			      };
			      this.listNewsCenter = loadDatas;
			      this.totalCount = rep.data.totalCount;
          }
	      })
      },
	    toNewsDetail(pubId) {
		    //window.location.href =  locationUtils.addParams({pubId:pubId},"../detail/detail.html");
		    window.location.href = "../pages/bookdetail.html?pubId="+pubId;
	    },
	    paging: function ({pageNo, pageSize}) {
		    var param = {
			    pageNo: pageNo,
			    pageSize: pageSize,
			    pubColId:this.CONFIG.pubColId
		    };
		    this.getNewCenterData(param);
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
      }

    },
	}
</script>

<style>
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .container {
    margin-bottom:10px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
  }

  .news-feature {
    margin-top: 24px;
  }
  .news-hot {
    height: 443px;
    overflow: hidden;
  }
  .news-hot, .news-thumb {
    width: 50%;
    display: inline-block;
    padding: 20px;
    float: left;
    border: 1px solid #DCDCDC;
  }
  a {
    text-decoration: none !important;
  }
  .news-hot a img {
    width: 310px;
    height: 208.654px;
    border: none;
    max-width: 100%;
    vertical-align: middle;
  }
  .news-hot h3 {
    margin-top: 8px;
  }
  h3 {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.5;
    margin: 0 0 8px 0;
  }
  .heading-block:after {
    content: '';
    display: block;
    margin-top: 30px;
    width: 40px;
  }
  .news-thumb a img {
    width: 310px;
  }
  .news-feature .news-thumb {
    border-left: 0px;
  }
  .news-thumb h4 {
    margin-bottom: 0px;
  }
  h4 {
    margin-top: 10px;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
  }
  .news-thumb p {
    margin-top: 18px;
  }
  p {
    margin: 0 0 10px;
  }

</style>