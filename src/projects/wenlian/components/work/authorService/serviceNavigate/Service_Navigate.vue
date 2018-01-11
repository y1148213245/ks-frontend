// 作者服务导航组件
<template>
  <div>
    作者服务
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters, mapActions} from "vuex";

  export default{
    name: 'work_author_service_navigate',
    reused: true,
    props: ['namespace'],
    data: function () {
      return {}
    },
    computed: {
      ...mapGetters({
        allNavCols: "cache/getNavCols"
      })
    },
    created: function () {
      console.log("created", this.allNavCols);
    },
    mounted: function () {
      console.log("mounted", this.allNavCols);
    },
    methods: {}
  }
</script>
