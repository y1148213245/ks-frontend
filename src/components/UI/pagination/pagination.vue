<template>
  <div id="commonPaging" class="block">
    <el-pagination
      class="paging_content_layout"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalCount">
    </el-pagination>
  </div>
</template>
<!--
	pageMessage结构
	{
		totalCount:''
	}
	-----
	excuteFunction函数预传参类型
	function({pageNum,pageSize}){}  /**pageNum 页码 ， pageSize 每页容量**/
-->
<script type="text/ecmascript-6">
  export default {
    name: 'paging',
    props: {
      pageMessage: {
        default: '',
      },
      excuteFunction: {
        default: ''
      },
      pageSizes: {
        type: Array,
        default() {
          return [15, 20, 50, 100];
        }
      }
    },
    methods: {
      handleSizeChange(val) {
        this.pageSize = val;
        this.handleCurrentChange(1);
      },
      handleCurrentChange(val) {
        if (this.excuteFunction && this.excuteFunction instanceof Function) {
          this.excuteFunction({pageNo: val.toString(), pageSize: this.pageSize.toString()});
        }
      }
    },
    computed: {
      totalCount() {
        return this.pageMessage && this.pageMessage.totalCount || 0
      }, //总数
    },
    data() {
      return {
        pageSize: 15
      };
    },
    created() {
      this.pageSize = this.pageSizes[0];
    }
  };
</script>


<style>
  .paging_content_layout {
    text-align: center;
  }

  .el-pager, .el-pager li {
    margin: 0 !important;
    padding: 0 !important;
  }
</style>
