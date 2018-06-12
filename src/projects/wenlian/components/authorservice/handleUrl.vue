<template>

</template>

<script>
  import URL from "url";
  import PROJECT_CONFIG from "projectConfig";
  export default {
    name: "components_authorservice_handleurl",
    reused:true,
    props:{
      namespace:String
    },
    mounted:function(){
      this.CONFIG=PROJECT_CONFIG[this.namespace].crumbs;
      this.getCrumbdEmit=this.CONFIG.getCrumbdEmit;
      this.$bus.$emit(this.getCrumbdEmit,"authorservice");
    }
  }
</script>

<style scoped>

</style>
