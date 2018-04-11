<template>
  <section class="col_full work_search_02">
    <div class="container clearfix">
      <h1 class="text"><i class="icon-search3"></i>"{{resultList.title}}"</h1><span class="text-all">全部<b class="text-result">{{resultList.totalCount || 0}}</b>条结果</span></div>
  </section>
</template>

<script>
    import URL from "url";
    import {Post} from "@common";
    import PROJECT_CONFIG from "projectConfig";
    export default {
        name: "work_search_02",
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
          getSearchResult:function(){
            let query = URL.parse(document.URL, true).query;
            let CONFIG=PROJECT_CONFIG[this.namespace].search.search_result_title_02;
            let param = query.category !== '0' ? Object.assign({},CONFIG.paramsSpecific) : Object.assign({},CONFIG.paramsAll);
            param.conditions = query.category !== '0' ? param.conditions+query.category+"'}]" : param.conditions;
            param.searchText=query.searchText;
            let title="全部";
            if(query.category !== '0'){
              title = query.category == "BOOK"  ? "图书" : "资讯";
            }
            console.log(title);
            Post(CONFIG.BASE_URL+CONFIG.url,param).then((req) => {
              this.resultList=req.data;
              Object.assign(this.resultList,{"title":title});
            })
          }
        }
    }
</script>

<style scoped>

</style>
