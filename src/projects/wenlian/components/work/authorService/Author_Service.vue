// 作者服务组件
<template>
  <div class="main_zzfw">
    <div class="daohang f14">
      <span class="color_9b9">您的位置：</span><a href="../index/index.html" class="color_9b9">首页</a> >>
      <span class="color_626" v-text="currentCol.name">投稿方式</span>
    </div>
    <!-- 导航-->
    <div class="zzfw_container">
      <!-- 左边导航-->
      <div class="zzfw_container_left fl" style=" margin:36px 0 0 50px;">
        <work_author_service_navigate namespace="authorservice" :cols="authorServiceCols" :current="currentCol"></work_author_service_navigate>
        <div v-bind:is="currentCol.url" namespace="authorservice" :col="currentCol"></div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from "vuex";
  import URL from "url";

  export default{
    name: 'work_author_service',
    reused: true,
    props: ['namespace'],
    data: function () {
      return {
        colId: '',
        currentCol: {}
      }
    },
    computed: {
      ...mapGetters({
        allNavCols: "cache/getNavCols"
      }),
      authorServiceCols: function () {
        return this.allNavCols.filter(item => {
          return Number(item.parentId) === Number(this.colId) && item.name.indexOf('展示') === -1;
        });
      }
    },
    created: function () {
      this.setColId();
      this.$bus.$on('colChange', this.colChange);
    },
    mounted: function () {

    },
    methods: {
      setColId: function () {
        this.colId = URL.parse(document.URL, true).query.colId;
      },
      colChange: function (col) {
        this.currentCol = col;
      }
    }
  }
</script>
