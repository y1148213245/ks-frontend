<template>

</template>

<script>
  import URL from "url";
  export default {
    name: "components_ebook_handleurl",
    reused:true,
    mounted:function(){
      this.$bus.$emit("hotbook");//推荐 - 图书热卖榜
    }
  }
</script>

<style scoped>

</style>
