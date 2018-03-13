// 投稿方式组件
<template>
  <div class="zzfw_container_right fl">
    <div class="zzfw_name color_c50 f18">
      <span class="pr10" v-text="title">投稿方式</span>
    </div>

    <div v-show="!inEditRoom" class="bm_con">
      <div class="bm_list" v-for="entry in submissionCols">
        <div class="bm_name">
          <a @click="toEditRoom(entry)" v-text="entry.name" class="scoped_line" href="javascript:void(0)">编辑室</a>
        </div>
        <div class="bm_name_jj">
          <p>成立时间：<span v-text="entry.create_date || '暂无成立时间'"></span></p>
          <p>团队成员：<span v-text="entry.people_num || '暂无成员数'"></span></p>
          <p>编辑室简介：<span v-text="entry.describe || '暂无简介'"></span></p>
        </div>
      </div>
    </div>

    <div v-show="inEditRoom" class="inEditRoom">
      <div @click="exitEditRoom" class="scoped_tg_back">返回</div>
    </div>
    <template v-show="inEditRoom" v-for="entry in editorPage.result">
      <div class="tgfs_con pb12">
        <span>姓名：</span>
        <a v-html="entry && entry.information_SYS_TOPIC || ''" :href="getEditorDetailUrl(entry)" class="tgfs_con_tit line-h35 mt10 scoped_tg_html"></a>
        <div v-html="entry.information_a_content" class="scoped_tg_content"></div>
        <p class="color_8d8c line-h35 goContribute">
          <a @click="contribute()" href="javascript:void(0)" class="qtg fr pl15 pr15 color_fff f14">去投稿</a>
        </p>
      </div>
    </template>
    <ui_pagination v-show="inEditRoom" :currentPage="editorPage.pageNo" :pageMessage="editorPage" :excuteFunction="queryEditorPage"></ui_pagination>
  </div>
</template>
<script type="text/ecmascript-6">
  import {mapGetters} from "vuex";
  import {Get, Post} from '@common';
  import PROJECT_CONFIG from "projectConfig";

  export default {
    name: 'work_author_service_submission',
    reused: true,
    props: ['namespace', 'col'],
    data: function () {
      return {
        CONFIG: null, // 系统配置
        title: '投稿方式', // 头部显示标题
        inEditRoom: false, // 是否处于编辑列表页面
        queryEditorParams: {}, // 编辑列表查询参数
        editorPage: {} // 编辑列表页
      }
    },
    computed: {
      ...mapGetters({
        member: 'login/getMember',
        allNavCols: 'cache/getNavCols'
      }),
      submissionCols: function () {
        return this.allNavCols.filter(item => {
          if (this.col) {
            return Number(item.parentId) === Number(this.col.id);
          }
        });
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
      setTimeout(() => {
        this.bindingStyle1();
      }, 50);
    },
    methods: {
      bindingStyle1: function () { // 绑定编辑室名称hover样式
        $(".bm_name").hover(function () {
          $(this).next(".bm_name_jj").show();
        }, function () {
          $(this).next(".bm_name_jj").hide();
        });
      },
      toEditRoom: function (editRoom) { // 进入编辑室详情
        this.title = editRoom.name;
        this.inEditRoom = true;
        this.setQueryCondition(editRoom);
        this.queryEditorPage('1', '15');
      },
      exitEditRoom: function () { // 退出编辑室详情，返回编辑室列表
        this.title = '投稿方式';
        this.inEditRoom = false;
        this.editorPage = {};
      },
      setQueryCondition: function (editRoom) {
        this.queryEditorParams.conditions = '[{pub_col_id:' + editRoom.id + '}]';
      },
      queryEditorPage: function (pageNum, pageSize) {
        this.queryEditorParams.pageNo = pageNum;
        this.queryEditorParams.pageSize = pageSize;
        Post(this.CONFIG.queryEditorList.url, this.queryEditorParams).then(rep => {
          if (rep && rep.data && rep.data.success) {
            this.editorPage = rep.data;
          }
        });
      },
      getEditorDetailUrl: function (editor) {
        return 'authordetail.html?pubId=' + editor.id + '&currentType=editor' + '#'
      },
      contribute: function () {
        if (!this.member.loginName) {
          window.location.href = "login.html";
          return;
        }
        let url = CONFIG.GO_CONTRIBUTE_URL + 'authorName=' + this.member.loginName;
        window.open(url);
      }
    }
  }
</script>
<style scoped>
  .scoped_tg_back {
    float: right;
    padding: 10px;
    color: red;
    font-size: 14px;
    cursor: pointer;
  }

  .scoped_tg_content {
    position: relative;
    width: 90%;
    /*font-size: 16px;*/
  }

  .scoped_tg_html {
    position: relative;
  }

  /*单行自动换行处理*/
  .scoped_line {
    display: inline-block;
    max-width: 150px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
<style>
  .scoped_tg_content p {
    margin: 12px 0px;
    padding: auto;
  }
  .zzfw_container_right{
    padding: 35px 22px;
    background: #fff;
    margin: 0 0 40px 27px;
    width: 836px;
  }
  .zzfw_name{
    background: url(/assets/img/bg_004.png) repeat-x scroll center center;
  }
  .zzfw_name span{
    background: #fff;
  }
  .bm_con{
    text-align: left;
  }
  .bm_list{
    position: relative;
    margin-right: 20px;
    width: 135px;
    text-align: center;
    display: inline-block;
  }
  .bm_name{
    line-height: 45px;
    font-size: 16px;
  }
  .bm_name_jj{
    position: absolute;
    left: 145px;
    top: 10px;
    border: 1px solid red;
    padding: 10px 5px;
    z-index: 10;
    width: 210px;
    background-color: #fff;
    text-align: left;
    display: none;
    margin-bottom:15px;
  }
  .inEditRoom{
    width: 100%;overflow: hidden;
  }
</style>
