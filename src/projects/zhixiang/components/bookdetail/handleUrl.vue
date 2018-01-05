<template>

</template>

<script type="text/ecmascript-6">
  import URL from "url";

  export default {
    name: "components_bookdetail_handleurl",
    reused: true,
    mounted: function () {
      var query = URL.parse(document.URL, true).query;
      this.$bus.$emit("relativebook", query.pubId);
      this.$bus.$emit("historylist", query.contentType);
    }
  }
</script>

<style scoped>

</style>
