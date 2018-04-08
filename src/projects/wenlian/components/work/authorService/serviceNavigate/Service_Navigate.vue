// 作者服务导航组件
<template>
  <div class="zzfw_center fl ">
    <p class="zzfw_center_name f18"><i></i><span>作者服务</span></p>
    <div class="zzfw_center_class f14">
      <p class="tgfs_title" v-for="col in cols" v-on:click="colChange(col)" :class="{bg_on: current.id === col.id}">
        <a href="javascript:void(0)" :class="{on: current.id === col.id}">
          <span class="self mr05" :class="{self_on: current.id === col.id}"></span>
          {{col.name}}
        </a>
      </p>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from "vuex";
  import URL from "url";
  import PROJECT_CONFIG from "projectConfig";

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
          this.$bus.$emit(this.colChangeEmit, newV[0]);
        }
      }
    },
    created: function () {
    },
    mounted: function () {
      this.colChangeEmit=PROJECT_CONFIG[this.namespace].colChangeEmit;
    },
    methods: {
      colChange: function (col) {
        this.$bus.$emit(this.colChangeEmit, col);
      }
    }
  }
</script>
<style>
  .zzfw_center{
    border: 1px solid #d7d7d7;
    width: 183px;
  }
  .zzfw_center .zzfw_center_name{
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #f8dee2;
    background: #ca0000;
  }
  .zzfw_center .zzfw_center_name i{
    background-position: -6px -457px;
    width: 20px;
    height: 22px;
  }
  .zzfw_center .zzfw_center_class{
    padding: 15px 0 20px 0;
    background: #fff;
  }
  .zzfw_center .zzfw_center_class p.bg_on{
    background: url(/assets/img/bg_007.png) no-repeat;
  }
  .zzfw_center .zzfw_center_class p{
    line-height: 45px;
    padding-left: 42px;
  }
  .zzfw_center .zzfw_center_class p a.on{
    color: #ca0000;
  }
  .zzfw_center .zzfw_center_class .tgfs_title a span.self_on{
    background-position: -38px -495px;
  }
  .zzfw_center .zzfw_center_class .tgfs_title a span.self{
    background-position: -6px -495px;
    width: 22px;
    height: 20px;
  }
  .zzfw_center .zzfw_center_name i, .zzfw_center .zzfw_center_class .tgfs_title a span, .zzfw_center .zzfw_center_class .zgqs_title a span, .zzfw_center .zzfw_center_class .tgsm_title a span, .zzfw_center .zzfw_center_class .cbflfg_title a span{
    background: url(/assets/img/bg_10.png) no-repeat;
    display: inline-block;
    vertical-align: middle;
  }
  .zzfw_center .zzfw_center_class p a {
    color: #656260;
  }
</style>
