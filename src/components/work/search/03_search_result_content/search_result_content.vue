<template>
  <div class="col-md-9 noleftpadding search-list work_search_03">
    <ul class="reault-list">
      <transition-group name="fade" key="123">
        <li class="clearfix result-item" v-for="entry in resultList" :key="entry.pubId">
          <div>
            <div class="product-image" v-show="entry.dataType == 1">
              <a href="javascript:void(0)" class="search_list_imgBox"><img class="search_list_img"
                                                                           onload="DrawImage(this,120,120)"
                                                                           :src="entry.bookUrl" alt="暂无封面"></a>
            </div>
            <div class="product-desc">
              <div class="product-title">
                <h5 v-show="entry.dataType == 1"><a
                  :href="'/pages/bookDetail/bookDetail.html?pubId='+entry.pubId+'&contentType='+entry.contentType+'&columnId='+entry.pub_col_id+'&colName='+entry.pub_col_name">{{entry.bookName}}</a>
                </h5>
                <h5 v-show="entry.dataType == 2"><a :href="'/pages/column/42/46/detail/detail.html?pubId='+entry.pubId">{{entry.bookName}}</a>
                </h5>
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
    <ui_pagination :pageMessage="{totalCount: this.totalCount - 0 || 0}" :excuteFunction="paging"></ui_pagination>
  </div>
</template>

<script>
  import URL from "url";
  import PROJECT_CONFIG from "projectConfig";
  import {Post} from "@common";

  export default {
    name: "work_search_03",
    reused: true,
    data: function () {
      return {
        resultList: [],
        pageMessage: null,
        totalCount: '0'
      }
    },
    props: ["namespace"],
    created: function () {
      this.$bus.$on("searchresult", this.getSearchResult);
    },
    methods: {
      getSearchResult: function (params) {
        let query = URL.parse(document.URL, true).query;
        let namespace = this.namespace;
        let CONFIG = PROJECT_CONFIG[namespace].search.search_result_content_03;
        let param = query.category !== '0' ? Object.assign({},CONFIG.paramsSpecific) : Object.assign({},CONFIG.paramsAll);
        param.pageNo = params ? params.pageNo : param.pageNo;
        param.pageSize = params ? params.pageSize : param.pageSize;
        param.conditions = query.category !== '0' ? param.conditions+query.category+"'}]" : param.conditions;
        param.searchText=query.searchText;

        Post(CONFIG.url, param).then((req) => {
          let data = req.data.result;
          this.totalCount = req.data.totalCount;
          if (data && data instanceof Array && data.length > 0) {
            this.resultList = this.getData(data, params);
          }
        })
      },
      paging: function ({pageNo, pageSize}) {
        let param = {
          pageNo: pageNo,
          pageSize: pageSize
        };
        this.getSearchResult(param);
      },
      getData: function (datas, param) {
        let query = URL.parse(document.URL, true).query;
        let loadDatas = [];
        switch (query.category) {
          case 'book': // 图书
          {
            for (let i = 0; i < datas.length; i++) {
              loadDatas.push(this.getInfo(datas[i],"book"));
            }
            ;
            break;
          }
          case 'information': // 资讯
          {
            for (let i = 0; i < datas.length; i++) {
              loadDatas.push(this.getInfo(datas[i],"information"));
            }
            ;
            break;
          }
          default:  // 全部
          {
            for (let i = 0; i < datas.length; i++) {
              if (datas[i].pub_resource_type === "BOOK") {  // 图书
                loadDatas.push(this.getInfo(datas[i],"book"));
              } else if (datas[i].pub_resource_type === "information") { // 资讯
                loadDatas.push(this.getInfo(datas[i],"information"));
              }
            }
            ;
            break;
          }
        }
        return loadDatas;
      },
      getInfo:function(datas,flag){
        let param={
          bookAuthor: datas.BOOK_SYS_AUTHORS || datas.BOOK_SYS_AUTHORS ||  '暂无作者',
          bookContent: datas.BOOK_SYNOPSIS || datas.BOOK_SYNOPSIS || '暂无简介',
          bookName: datas.pub_resource_name || datas.pub_resource_name || '暂无书名',
          pubId: datas.id || 0,
          contentType: datas.pub_content_type || 0,
          pub_col_id: datas.pub_col_id || 51,
          pub_col_name: datas.pub_col_name || "",
          bookUrl: datas.pub_picBig || ""
        };
        let resultParam = flag == 'book' ? Object.assign(param,{"bookContbookUrl": '图书',"dataType": 1,}) : Object.assign(param,{"bookContbookUrl": '资讯',"dataType": 2,});
        return resultParam;
      }
    }
  }
</script>

<style>
  .fade-enter-active {
    transition: opacity .4s
  }

  .fade-enter {
    opacity: 0
  }

  .search_list_imgBox {
    display: block !important;
    width: 120px !important;
    height: 120px !important;
    line-height: 120px !important;
    text-align: center !important;
  }

  .search_list_img {
    display: inline-block !important;
  }
  .search-list .el-pager li{
    border-top: 0;
  }
  .search-list .el-pager li:last-child{
    border-bottom: 0;
  }
</style>
