<template>
  <article-detail :is-edit='true'></article-detail>
</template>

<script>
import ArticleDetail from "./parallelWriting/parallelWriting.vue";
export default {
  name: "edit_note",
  reused: true,
  props: ["namespace"],
  components: { ArticleDetail }
};
</script>

