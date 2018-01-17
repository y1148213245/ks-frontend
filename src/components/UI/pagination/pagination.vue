<template>
  <div id="commonPaging" class="block">
    <el-pagination
      class="paging_content_layout"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
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

	excuteFunction函数预传参类型
	function({pageNum,pageSize}){}  /**pageNum 页码 ， pageSize 每页容量**/
-->
<script type="text/ecmascript-6">
export default {
  name: 'ui_pagination',
  reused: true,
  props: {
    propsCurrentPage: {
      default: '',
    },
    namespace: {
      default: '',
    },
    pageMessage: {
      default: '',
    },
    excuteFunction: {
      default: ''
    },
    pageSizes: {
      type: Array,
      default () {
        return [15, 20, 50, 100];
      }
    }
  },
  methods: {
    handleSizeChange (val) {
      this.pageSize = val;
      if (this.currentPage == 1) {/*为第一页时发请求*/
        this.handleCurrentChange(1);
      }
      this.currentPage = this.propsCurrentPage ? this.propsCurrentPage : 1;/*为其他页时改变currentPage，自动触发handleCurrentChange方法*/
    },
    handleCurrentChange (val) {
      if (this.excuteFunction && this.excuteFunction instanceof Function) {
        this.excuteFunction({ pageNo: val.toString(), pageSize: this.pageSize.toString() });
        console.log(this.currentPage);

      }
    }
  },
  computed: {
    totalCount () {
      return this.pageMessage && this.pageMessage.totalCount || 0
    }, //总数
  },
  data () {
    return {
      pageSize: 15,
      currentPage: 1
    };
  },
  created () {
    this.pageSize = this.pageSizes[0];
  }
};
</script>


<style>
.paging_content_layout {
  text-align: center;
}

.el-pager,
.el-pager li {
  margin: 0 !important;
  padding: 0 !important;
}
</style>
