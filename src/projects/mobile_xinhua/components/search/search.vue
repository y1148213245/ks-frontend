<!-- 搜索组件 -->
<template>
  <div class="components_work_search">
    <!-- 搜索组件 -->
    <work_mobile_search_01 namespace="search" @transSearchText="acceptSearchText"></work_mobile_search_01>
    <!-- END 搜索组件 -->

    <!-- 热门推荐组件 -->
    <ui_mobile_list_04 namespace="search" v-show="!showResult"></ui_mobile_list_04>
    <!-- END 热门推荐组件 -->

    <!-- 搜索结果组件：图书列表组件 -->
    <ui_mobile_list_02 namespace="booklist" v-show="showResult"></ui_mobile_list_02>
    <!-- END 搜索结果组件：图书列表组件 -->
  </div>
</template>

<script>
export default {
  name: 'components_work_search',
  reused: true,
  data () {
    return {
      showResult: false, // 是否显示搜索结果:图书列表
    };
  },

  mounted () {

  },

  methods: {
    acceptSearchText (data) {
      this.showResult = data == "" ? false : true;
    }
  },
}


</script>
<style>
.components_work_search .ui_mobile_list_02 {
  padding-top: 0rem;
}
</style>