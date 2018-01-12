// 投稿方式组件
<template>
  <div class="zzfw_container_right fl">
    <div class="zzfw_name color_c50 f18">
      <span class="pr10">投稿方式</span>
    </div>

    <div class="bm_con">
      <div class="bm_list" v-for="entry in list">
        <div class="bm_name">
          <a class="scoped_line" href="javascript:void(0)">编辑室</a>
        </div>
        <div class="bm_name_jj">
          <p style="margin-bottom:15px;">成立时间:<span v-text="entry || '暂无成立时间'"></span></p>
          <p style="margin-bottom:15px;">团队成员:<span v-text="entry || '暂无成员数'"></span></p>
          <p style="line-height:20px;">编辑室简介:<span v-text="entry || '暂无简介'"></span></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from "vuex";

  export default {
    name: 'work_author_service_submission',
    reused: true,
    props: ['namespace', 'col'],
    data: function () {
      return {
        entry: '',
        list: [1, 2]
      }
    },
    computed: {
      ...mapGetters({
        allNavCols: "cache/getNavCols"
      })
    },
    created: function () {

    },
    mounted: function () {

    },
    methods: {}
  }
</script>
