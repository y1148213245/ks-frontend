<template>
  <div>

  </div>
</template>
<script type="text/ecmascript-6">
  import URL from "url";

  export default {
    name: 'components_book_list_adapter',
    reused: true,
    props: ['namespace'],
    data: function () {
      return {colId: 0}
    },
    computed: {},
    created: function () {

    },
    mounted: function () {
      this.adapt();
    },
    methods: {
      adapt: function () {
        this.colId = URL.parse(document.URL, true).query.colId
      }
    }
  }
</script>
