<template>
  <div class="ui_list_pic_25">
    <div v-bind:is="currentView" namespace="booklist" :colId="colId"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import URL from "url";

  export default {
    name: 'ui_list_pic_25',
    reused: true,
    props: {
      namespace: String
    },
    data: function () {
      return {
        colId: 0,
        currentView: ''
      }
    },
    computed: {},
    created: function () {

    },
    mounted: function () {
      this.adapt();
      this.work();
    },
    methods: {
      adapt: function () {
        this.colId = Number(URL.parse(document.URL, true).query.colId);
      },
      work: function () {
        if (CONFIG.BOOK_LIST_TYPE._2_COLS.indexOf(this.colId) !== -1) {
          this.currentView = 'ui_list_pic_18_2_cols_with_rank';
        } else if (CONFIG.BOOK_LIST_TYPE._3_COLS.indexOf(this.colId) !== -1) {
          this.currentView = 'ui_list_pic_17_3_cols_with_sort';
        } else {
          this.currentView = 'ui_list_pic_17_3_cols_with_sort';
        }
      }
    }
  }
</script>
<style>
  .ui_list_pic_25{
    width: 1200px;
    margin: 0 auto;
    background: #fff;
    overflow: hidden;
  }
</style>
