<template>
  <section id="title-nav" class="col_full work_search_02">
    <div class="container clearfix">
      <h1><i class="icon-search3"></i>{{resultList.searchText}}</h1><span>全部<b>{{resultList.totalCount || 0}}</b>条结果</span></div>
  </section>
</template>

<script>
    import {Get,Post,DrawImage} from "@common";
    import PROJECT_CONFIG from "projectConfig";
    export default {
        name: "work_search_02",
        reused:true,
        data:function(){
          return {
            resultList:[]
          }
        },
        props:["namespace","modulename"],
        created:function(){
          this.$bus.$on("searchresult",this.getSearchResult);
        },
        methods:{
          getSearchResult:function(params){
            let namespace=this.namespace;
            let CONFIG=PROJECT_CONFIG[namespace].search.search_result_title_02;
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
              this.resultList=req.data;
              Object.assign(this.resultList,params);
            })
          }
        }
    }
</script>

<style scoped>

</style>
