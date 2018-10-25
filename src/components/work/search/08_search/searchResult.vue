<template>
  <div class="work_search_08">
    <div class="work_search_08_content">
      <!-- 图书 -->
      <div v-if="currentSearch === 'BOOK'">
        <work_search_04 :namespace=namespace></work_search_04>
      </div>
      <!-- 电子书 -->
      <div v-if="currentSearch === 'EBOOK'">
        <work_search_04 :namespace=namespace :modulename=modulename></work_search_04>
      </div>
      <!-- 资料 -->
      <div v-if="currentSearch === 'DOWNLOAD'">
        <ui_list_pic_37 :namespace=namespace :modulename=modulename></ui_list_pic_37>
      </div>
      <!-- 视频 -->
      <div v-if="currentSearch === 'VIDEO'">
        <ui_list_pic_29 :namespace=namespace :modulename=modulename></ui_list_pic_29>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { mobileLoading, Get, Post, getFieldAdapter, toOtherPage  } from "@common";
import URL from "url";
import PROJECT_CONFIG from "projectConfig";
import { Icon, Toast } from 'vant';
import { mapGetters } from 'vuex';
import $ from "jquery";
import work_search_04 from '@/components/work/search/04_search_result/searchResult.vue'
import ui_list_pic_37 from '@/components/UI/list_pic/37_pic_list_resource_center/resourceCenter.vue'
import ui_list_pic_29 from '@/components/UI/list_pic/29_pic_list_information/information.vue'
export default {
  name: 'work_search_08',
  reused: true,
  props: ['namespace', 'modulename'],
  components:{
    work_search_04,
    ui_list_pic_37,
    ui_list_pic_29
  },
  data () {
    return {
      currentSearch:''
    };
  },
  created(){
    // 获取url的catagorySearch
    let locationQuery = URL.parse(document.URL, true).query;
    this.currentSearch = locationQuery.catagorySearch;
  },
  methods:{
    
  }

  
}

</script>
<style>
.work_search_08{width: 1200px;margin:0 auto;}
.work_search_08 .work_search_08_content{padding:0 15px;}
</style>
