<template>
  <header class="ui_mobile_navigation_01_header">
    <div class="ui_mobile_navigation_01">
      <a class="ui_mobile_navigation_left" href="javascript:void(0)" onclick="window.history.go(-1)">
        <i v-if="CONFIG" v-bind="{class: CONFIG.left.icon}"></i>
      </a>
      <span class="ui_mobile_navigation_title" v-text="title"></span>
      <a v-if="CONFIG" class="ui_mobile_navigation_right" :href="CONFIG.right.url">
        <i v-bind="{class: CONFIG.right.icon}"></i>
      </a>
    </div>
  </header>
</template>

<script type="text/ecmascript-6">

import PROJECT_CONFIG from "projectConfig";
import { Get ,Post } from "@common";
import URL from 'url';

export default {
  name: "ui_mobile_navigation_01",
  reused: true,
  props: ["namespace", "navtitle"],
  data () {
    return {
      CONFIG: null,
      title:'',
      query:'',
      cascadId:'',
      colId: ''
    }
  },
  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].navigation.navigation_01;
    this.query = URL.parse(document.URL, true).query;
    // this.cascadeId = this.query.cascadeId;
    this.initTitle(this.query);
  },
  mounted: function () {
    // this.CONFIG = PROJECT_CONFIG[this.namespace].navigation.navigation_01;
  },
  methods: {
    initTitle (item) {
      if (item){
        //是否按照分类查询
        if (item.cascadId){
          //发送get请求获取text字段
          this.cascadeId = item.cascadId;
          this.getClassification()
        } else if (item.orderBy) {
          //按照排行榜查询时title根据url的orderBy改变
          if (item.orderBy.indexOf('BOOK_PUBDATE') != -1){
            this.title = "新书榜"
          } else if (item.orderBy.indexOf('pub_read_num') != -1) {
            this.title = "人气榜"
          }else if(item.orderBy.indexOf('pub_sales_num') != -1){
            console.log(('pub_sales_num').indexOf(item.orderBy))
            this.title = "畅销榜"
          }
        }else if(item.colId){
          //按照页面推荐查询
          this.colId = item.colId;
          this.loadColDetail();
        } else {
          this.title = this.navtitle;
        }
      }
    },
    getClassification () {
      let _this = this;
      let paramsObj = Object.assign({}, _this.CONFIG.queryClassification.params);
      paramsObj.timeStamp = new Date().getTime();
      Get(CONFIG.BASE_URL + this.CONFIG.queryClassification.url,{params: paramsObj}).then(rep=>{
        var datas = rep.data;
        if (datas && datas instanceof Array && datas.length > 0) {
          for (let i = 0; i < datas.length ; i++) {
            if (_this.cascadeId == datas[i].cascadeId){
              _this.title = datas[i].text + "-" + "图书分类";
              break;
            }
          }
        }
      });

    },
    loadColDetail () {
      let _this = this;
      let getColDetailConfig = this.CONFIG.getColDetail;
      let url = getColDetailConfig.url + '?colId=' + this.colId;
      Post(CONFIG.BASE_URL+url).then((resp) => {
        var datas = resp.data.data;
        _this.title = datas.name;
      })
    }
  }
}
</script>
<style>
.ui_mobile_navigation_01_header {
  position: fixed;
  width: 7.5rem;
  background: #fff;
  z-index: 10;
}

.ui_mobile_navigation_01 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-bottom: 1px solid #f5f5f5;
  -webkit-box-shadow: 0 0.12rem 0.12rem #f5f5f5;
  -moz-box-shadow: 0 0.12rem 0.12rem #f5f5f5;
  box-shadow: 0 0.12rem 0.12rem #f5f5f5;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #5b5b5b;
  font-weight: 500;
  font-size: 0.36rem;
  padding: 0.25rem 0.2rem;
}

.ui_mobile_navigation_01_header a {
  color: #5b5b5b;
}
</style>
