<template>

</template>

<script>
  import URL from "url";
    export default {
        name: "components_authordetail_handleurl",
        reused:true,
        mounted:function(){
          let query = URL.parse(document.URL, true).query;
          this.$bus.$emit("authordetail",query);
        }
    }
</script>

<style scoped>

</style>
