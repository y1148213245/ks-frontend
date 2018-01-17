<template>

</template>

<script>
  import URL from "url";
  export default {
    name: "components_aboutus_handleurl",
    reused:true,
    mounted:function(){
      this.$bus.$emit("setCrumbs","aboutus");
    }
  }
</script>

<style scoped>

</style>
