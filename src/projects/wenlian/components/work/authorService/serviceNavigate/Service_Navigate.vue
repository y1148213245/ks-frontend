// 作者服务导航组件
<template>
  <div class="zzfw_center fl ">
    <p class="zzfw_center_name f18"><i></i><span>作者服务</span></p>
    <div class="zzfw_center_class f14">
      <p class="tgfs_title" v-for="col in cols" v-on:click="colChange(col)" :class="{bg_on: current === col.url}">
        <a href="javascript:void(0)" :class="{on: current === col.url}">
          <span class="self mr05" :class="{self_on: current === col.url}"></span>
          {{col.name}}
        </a>
      </p>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from "vuex";
  import URL from "url";

  export default{
    name: 'work_author_service_navigate',
    reused: true,
    props: ['namespace', 'cols', 'current'],
    data: function () {
      return {}
    },
    watch: {
      cols: function (newV, oldV) {
        if (newV !== oldV && newV && newV.length) {
          this.$bus.$emit('colChange', newV[0]);
        }
      }
    },
    created: function () {
    },
    mounted: function () {

    },
    methods: {
      colChange: function (col) {
        this.$bus.$emit('colChange', col);
      }
    }
  }
</script>
