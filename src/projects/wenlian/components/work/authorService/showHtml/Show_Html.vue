// 根据栏目ID显示富文本html组件
<template>
  <div class="zzfw_container_right fl">
    <div class="zzfw_name color_c50 f18">
      <span v-html="col.name" class="pr10">作者服务</span>
    </div>
    <div v-html="content.information_a_content" class="tgsm_con line-h35 color_8d8c mt15"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {Get, Post} from '@common';
  import PROJECT_CONFIG from "projectConfig";

  export default{
    name: 'work_author_service_show_html',
    reused: true,
    props: ['namespace', 'col'],
    data: function () {
      return {
        content: {}, // 资源
        queryEditorParams: {}, // 编辑列表查询参数
      };
    },
    computed: {},
    watch: {
      col: function (newV, oldV) {
        if (newV !== oldV && newV) {
          this.initContent();
          this.setQueryCondition(newV);
          this.queryInfo();
        }
      }
    },
    created: function () {

    },
    mounted: function () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].submission;
      this.queryEditorParams = {
        conditions: '',
        pageNo: '1',
        pageSize: '15',
        orderBy: 'pub_a_order asc pub_lastmodified desc id asc',
        searchText: '',
        groupBy: 'pub_resource_id'
      };
    },
    methods: {
      initContent: function () {
        this.content = {};
      },
      setQueryCondition: function (editRoom) {
        this.queryEditorParams.conditions = '[{pub_col_id:' + editRoom.id + '}]';
      },
      queryInfo: function () {
        Post(CONFIG.BASE_URL+this.CONFIG.queryEditorList.url, this.queryEditorParams).then(rep => {
          if (rep && rep.data && rep.data.success && rep.data.result && rep.data.result.length) {
            this.content = rep.data.result[0];
          }
        });
      }
    }
  }
</script>
