<template>
  <article-detail :is-edit='false'></article-detail>
</template>

<script>
import ArticleDetail from './parallelWriting/parallelWriting.vue'
export default {
  name: 'createForm',
  reused: true,
  props: ["namespace"],
  components: { ArticleDetail }
}
</script>

