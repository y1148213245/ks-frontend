<template>
  <article-detail :is-edit='true'></article-detail>
</template>

<script>
import ArticleDetail from './parallelWriting/parallelWriting.vue'
export default {
  name: 'editForm',
  description: "随手记新建组件",
  components: { ArticleDetail }
}
</script>

