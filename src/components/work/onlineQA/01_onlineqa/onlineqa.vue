/*
 * @Author: song
 * @Date: 2018-07-04 15:50:20
 * @Last Modified by: song
 * @Last Modified time: 2018-07-05 11:30:28
 * 在线问答组件
 */

<template>
  <div class="work_onlineqa_01" v-loading="loading">
    <!-- 提交问题 -->
    <div class="work_onlineqa_01_commit">
      <el-input type="textarea" v-model="question" maxlength="500"></el-input>
      <el-button @click="commitQuestion()"> {{ staticText.commit || '提交' }}</el-button>
    </div>

    <!-- 问答列表 -->
    <div class="work_onlineqa_01_qalists">
      <ul class="work_onlineqa_01_qalists_ul">
        <li class="work_onlineqa_01_qalists_li" v-for="(item, index) in qaLists" :key="index" v-if="qaLists && qaLists.length > 0">
          <div class="work_onlineqa_01_qalists_left">
            <span v-text="item.REQUESTER || staticText.questioner || '提问人'"></span>
          </div>

          <div class="work_onlineqa_01_qalists_right">

            <div class="work_onlineqa_01_qalists_right_questionercon">
              <div class="work_onlineqa_01_qalists_right_questioner" v-text="item.QUES_CONTENT"></div>
              <div class="work_onlineqa_01_qalists_right_questiontime">{{item.SYS_CREATED | formatDateHH}}</div>
            </div>

            <div class="work_onlineqa_01_qalists_right_answercon">
              <div class="work_onlineqa_01_qalists_right_answer">
                <span class="work_onlineqa_01_qalists_right_answerer" v-text="item.RESPONDER || staticText.answer || '回答者'"></span>
                <span class="work_onlineqa_01_qalists_right_content" v-text="item.ANSW_CONTENT"></span>
              </div>
              <div class="work_onlineqa_01_qalists_answertime">{{item.SYS_LASTMODIFIED | formatDateHH}}</div>
            </div>

          </div>
        </li>
        <li v-if="qaLists && qaLists.length == 0"></li>
      </ul>
      <ui_pagination class="work_onlineqa_01_pagination" :pageMessage="{totalCount: totalCount}" :excuteFunction="paging" :page-sizes="CONFIG.pagination.pagesize"></ui_pagination>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as interfaces from "@work/login/common/interfaces.js";
import PROJECT_CONFIG from 'projectConfig';
import { Get, Post } from "@common";

export default {
  name: 'work_onlineqa_01',
  props: ['namespace', 'modulename'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      question: '', // 提交的问题
      qaLists: [], //问答列表
      loading: true,
      totalCount: 0, //  总数
    };
  },

  computed: {
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER,
    })
  },

  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].work_onlineqa.work_onlineqa_01[this.modulename];
    this.staticText = this.CONFIG.staticText;
    this.queryQA();
  },

  mounted () { },

  methods: {
    commitQuestion () { // 提交问题
      if (!this.member.loginName) { // 未登录
        this.$message({
          message: this.staticText.loginFirst || '请您先登录',
          type: 'error'
        });
        return false;
      } else if (this.question == '') { // 未提问内容
        this.$message({
          message: this.staticText.noContent || '提问内容不得为空',
          type: 'error'
        });
        return false;
      }
      this.loading = true;
      let paramsObj = Object.assign({}, this.CONFIG.commitQuestion.params);
      paramsObj.metaMap.SYS_TOPIC = new Date().getTime() + ''; // 问题名称 随机字符串
      paramsObj.metaMap.REQUESTER = this.member.loginName;
      paramsObj.metaMap.QUES_CONTENT = this.question;
      Post(CONFIG.BASE_URL + this.CONFIG.commitQuestion.url, paramsObj).then((res) => {
        if (res.data && res.data.status == 'success') {
          this.$message({
            message: this.staticText.answerSuccess || '您已提问成功，待审核通过后显示。',
            type: 'success'
          });
          this.question="";
        } else {
          this.$message({
            message: this.staticText.opFailed || '操作失败',
            type: 'success'
          });
        }
        // this.queryQA();
        this.loading = false;
      })
    },
    queryQA (pagingParams) { // 获取问答列表
      let paramsObj = Object.assign({}, this.CONFIG.queryQA.params);
      if (pagingParams) {
        paramsObj.page = pagingParams.pageNo;
        paramsObj.size = pagingParams.pageSize;
      }
      Get(CONFIG.BASE_URL + this.CONFIG.queryQA.url, { 'params': paramsObj }).then((res) => {
        let datas = res.data;
        if (res.status == 200 && datas.content && datas.content.length) {
          this.qaLists = datas.content;
          this.totalCount = datas.totalElements;
        }
        this.loading = false;
      })
    },
    paging: function ({ pageNo, pageSize }) { // 翻页
      this.loading = true;
      var pagingParams = {
        pageNo: pageNo-1,
        pageSize: pageSize,
      };
      this.queryQA(pagingParams);
    }
  }

}
</script>
<style>
.work_onlineqa_01_commit textarea {
  height: 180px;
  padding: 15px 20px;
}
</style>