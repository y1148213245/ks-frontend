<template>
  <div>

  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: "components_searchresult_handleurl",
    reused: true,
    mounted: function () {
      this.$bus.$emit("searchresult");
    }
  }
</script>
<style>

</style>
