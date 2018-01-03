<template>
  <div class="col-md-9 noleftpadding search-list work_search_03">
    <ul>
      <transition-group name="fade" key="123">
        <li class="clearfix" v-for="entry in resultList" :key="entry.pubId">
          <div>
            <div class="product-image" v-show="entry.dataType == 1">
              <a href="javascript:void(0)" class="search_list_imgBox"><img class="search_list_img" onload="DrawImage(this,120,120)" :src="entry.bookUrl" alt="暂无封面"></a>
            </div>
            <div class="product-desc">
              <div class="product-title">
                <h5 v-show="entry.dataType == 1"><a :href= "'/pages/bookDetail/bookDetail.html?pubId='+entry.pubId+'&contentType='+entry.contentType+'&columnId='+entry.pub_col_id+'&colName='+entry.pub_col_name">{{entry.bookName}}</a></h5>
                <h5 v-show="entry.dataType == 2"><a :href= "'/pages/column/42/46/detail/detail.html?pubId='+entry.pubId">{{entry.bookName}}</a></h5>
              </div>
              <div class="product-author">作者：{{entry.bookAuthor}}</div>
              <div class="product-price"><label>简介：</label> {{entry.bookContent}}</div>
              <div class="product-price"><label>资源类型：</label> {{entry.bookContbookUrl}}</div>
            </div>
          </div>
        </li>
      </transition-group>
    </ul>
    <!-- pagearea
                ============================================= -->
    <div style="width: 100%;">
      <!--<vpage :pageMessage='pageMessage || null' :excuteFunction='toPage'></vpage>-->
    </div>
  </div>
</template>

<script>
  import PROJECT_CONFIG from "projectConfig";
  import {Get,Post,DrawImage} from "@common";
  export default {
        name: "work_search_03",
        reused:true,
        data:function(){
          return {
            resultList:[]
          }
        },
        props:["namespace"],
        created:function(){
          this.$bus.$on("searchresult",this.getSearchResult);
        },
        methods:{
          getSearchResult:function(params){
            let namespace=this.namespace;
            let CONFIG=PROJECT_CONFIG[namespace].search.search_result_title_03;
            var param=null;
            if(params.category !== '0'){
              param={
                conditions: "[{pub_resource_type:'"+params.category+"'},{pub_site_id:'1'}]",
                searchText:params.searchText
              }
            }else{
              param={
                searchText:params.searchText
              }
            }
            Object.assign(CONFIG.params,param);
            Post(CONFIG.url,CONFIG.params).then((req) => {
              let data = req.data.result;
              if(data && data instanceof Array && data.length>0){
                this.resultList=this.getData(data,params);
              }
            })
          },
          getData:function(datas,param){
            var loadDatas = [];
            switch(param.category) {
              case 'book': // 图书
              {
                for(var i = 0; i < datas.length; i++) {
                  loadDatas.push(this.getBook(datas[i]));
                };
                break;
              }
              case 'information': // 资讯
              {
                for(var i = 0; i < datas.length; i++) {
                  loadDatas.push(this.getInformation(datas[i]));
                };
                break;
              }
              default:  // 全部
              {
                for(var i = 0; i < datas.length; i++) {
                  if (datas[i].pub_resource_type === "BOOK") {  // 图书
                    loadDatas.push(this.getBook(datas[i]));
                  } else if (datas[i].pub_resource_type === "information") { // 资讯
                    loadDatas.push(this.getInformation(datas[i]));
                  }
                };
                break;
              }
            }
            return loadDatas;
          },
          getBook:function(datas){
            return {
              bookAuthor: datas.BOOK_SYS_AUTHORS || '暂无作者',
              bookContent: datas.BOOK_SYNOPSIS || '暂无简介',
              bookName: datas.pub_resource_name || '暂无书名',
              bookContbookUrl:'图书',
              dataType:1,
              pubId: datas.id || 0,
              contentType: datas.pub_content_type || 0,
              pub_col_id: datas.pub_col_id || 51,
              pub_col_name: datas.pub_col_name || "",
              bookUrl: datas.pub_picBig || ""
            };
          },
          getInformation:function(datas){
            return {
              bookName: datas.information_SYS_TOPIC || '暂无资讯名',
              bookAuthor: datas.information_SYS_AUTHORS || '暂无作者',
              bookContent: datas.information_a_abstract || '暂无简介',
              bookContbookUrl:'资讯',
              dataType: 2,
              pubId: datas.id || 0,
              contentType: datas.pub_content_type || 0,
              pub_col_id: datas.pub_col_id || 51,
              pub_col_name: datas.pub_col_name || "",
              bookUrl: datas.pub_picBig || ""
            };
          }
        }
    }
</script>

<style>
  .fade-enter-active{
    transition: opacity .4s
  }
  .fade-enter{
    opacity: 0
  }
  .search_list_imgBox {
    display: block!important;
    width: 120px!important;
    height:120px!important ;
    line-height: 120px!important;
    text-align: center!important;
  }
  .search_list_img{
    display:inline-block!important;
  }
</style>
