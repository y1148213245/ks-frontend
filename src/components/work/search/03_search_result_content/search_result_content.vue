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
            Object.assign(CONFIG.params,params);
            Post(CONFIG.url,CONFIG.params).then((req) => {
              console.log(req);
              let data = req.data.result;
              if(data && data instanceof Array && data.length>0){
                this.resultList=this.getData(data);
              }
            })
          },
          getData:function(data){
            let loadDatas = [];
            switch(param.category) {
              case 'book': // 图书
              {
                for(var i = 0; i < datas.length; i++) {
                  var entry = {
                    bookName: datas[i].pub_resource_name || '暂无书名',
                    bookAuthor: datas[i].BOOK_SYS_AUTHORS || '暂无作者',
                    bookContent: datas[i].BOOK_SYNOPSIS || '暂无简介',
                    pubId: datas[i].id || 0,
                    contentType: datas[i].pub_content_type || 0,
                    pub_col_id: datas[i].pub_col_id || 51,
                    pub_col_name: datas[i].pub_col_name || "",
                    bookUrl: datas[i].pub_picBig || "",
                    bookContbookUrl:'图书',
                    dataType:1
                  };
                  loadDatas.push(entry)
                };
                break;
              }
              case 'information': // 资讯
              {
                for(var i = 0; i < datas.length; i++) {
                  var entry = {
                    bookName: datas[i].information_SYS_TOPIC || '暂无资讯名',
                    bookAuthor: datas[i].information_SYS_AUTHORS || '暂无作者',
                    bookContent: datas[i].information_a_abstract || '暂无简介',
                    pubId: datas[i].id || 0,
                    contentType: datas[i].pub_content_type || 0,
                    pub_col_id: datas[i].pub_col_id || 51,
                    pub_col_name: datas[i].pub_col_name || "",
                    bookUrl: datas[i].pub_picBig || "",
                    bookContbookUrl:'资讯',
                    dataType: 2
                  };
                  loadDatas.push(entry)
                };
                break;
              }
              default:  // 全部
              {
                for(var i = 0; i < datas.length; i++) {
                  var entry;
                  if (datas[i].pub_resource_type === "BOOK") {  // 图书
                    entry = {
                      bookName: datas[i].pub_resource_name || '暂无名称',
                      bookAuthor: datas[i].BOOK_SYS_AUTHORS || '暂无作者',
                      bookContent: datas[i].BOOK_SYNOPSIS || '暂无简介',
                      pubId: datas[i].id || 0,
                      contentType: datas[i].pub_content_type || 0,
                      pub_col_id: datas[i].pub_col_id || 51,
                      pub_col_name: datas[i].pub_col_name || "",
                      bookUrl: datas[i].pub_picBig || "",
                      bookContbookUrl:'图书',
                      dataType: 1
                    };
                  } else if (datas[i].pub_resource_type === "information") { // 资讯
                    entry = {
                      bookName: datas[i].information_SYS_TOPIC || '暂无资讯名',
                      bookAuthor: datas[i].information_SYS_AUTHORS || '暂无作者',
                      bookContent: datas[i].information_a_abstract || '暂无简介',
                      pubId: datas[i].id || 0,
                      contentType: datas[i].pub_content_type || 0,
                      pub_col_id: datas[i].pub_col_id || 51,
                      pub_col_name: datas[i].pub_col_name || "",
                      bookUrl: datas[i].pub_picBig || "",
                      bookContbookUrl:'资讯',
                      dataType: 2
                    }
                  }
                  loadDatas.push(entry)
                };
                break;
              }
            }
            return loadDatas;
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
