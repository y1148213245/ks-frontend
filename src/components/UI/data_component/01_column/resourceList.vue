/*
 * @Author: song 
 * @Date: 2018-07-16 10:48:41 
 * @Last Modified by: song
 * @Last Modified time: 2018-07-18 14:00:01
 * 数据组件 资源列表 用于从栏目里面取数据
 */

<template>
  <div class="ui_data_component_01">
    <slot v-bind:resourceLists="resourceLists">
      <!-- 默认显示内容 -->
    </slot>

    <!-- 分页组件 -->
    <!-- <pagination :pageMessage="{totalCount: totalCount}" excuteFunction="paging" :page-sizes="[15, 30, 60, 100]"></pagination> -->
    <!-- END 分页组件 -->
  </div>
</template>

<script>
import Vue from 'vue'
import PROJECT_CONFIG from "projectConfig"
import api_interface from "@api"
import { Get, Post } from "@common"
// import pagination from '@components/UI/pagination/pagination/pagination'

export default {
  name: 'ui_data_component_01',
  props: ['namespace', 'modulename'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      resourceLists: null, // 请求得到的资源列表
      totalCount: null, // 总数
    };
  },
  /* components: {
    pagination
  }, */
  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].ui_data_component.ui_data_component_01[this.modulename];
    this.queryResourceLists();
  },
  methods: {
    queryResourceLists () {
      let params = this.CONFIG.queryResourceLists.params;
      params.conditions = JSON.stringify(params.conditions);
      api_interface.publish.queryResourceData(params).then((res) => {
        var datas = res.data;
        if (datas.success && datas.result && datas.result.length) { // 请求成功
          this.resourceLists = datas.result;
          this.totalCount = datas.totalCount;
        }
      });
    },
    /* paging: function ({ pageNo, pageSize }) { // 翻页
      var pagingParams = {
        pageNo: pageNo,
        pageSize: pageSize
      };
      this.queryResourceLists(pagingParams);
    }, */
  }
}

</script>
