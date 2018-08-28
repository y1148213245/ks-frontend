
<template>
  <section class="personalcenter-feedback-box">
    <div class="personalcenter-feedback-page" v-if="this.showPage == this.showPageList[0]">
      <div>
        <textarea class="personalcenter-feedback-input"></textarea>
      </div>
      <div>
        <button @click="toSubmitFeedback()" class="personalcenter-feedback-submit">提交</button>
      </div>
    </div>
    <div class="personalcenter-feedback-page01" v-if="this.showPage == this.showPageList[1]">
      <span  class="personalcenter-feedback-right"></span>
      <h4 class="personalcenter-feedback-success-tip">提交成功</h4>
      <button class="el-button el-button--primary" @click="goPageNum(0)">返回</button>
    </div>
  </section>
</template>
<script type="text/ecmascript-6">
import { mapGetters, mapActions } from "vuex";
import { Get, Post } from '@common';
export default {
  name: "feedback",
  reused: true,
  props: ["namespace", "parentConfig"],
  data() {
    return {
      // readConfig: READ_CONFIG
      showPage: "index",     // 展示的页面
      showPageList:[
        "index",
        "success",
      ],  // 展示页面数组
    };
  },
  created() {
    this.CONFIG = this.parentConfig.feedback;
  },
  mounted: function () {
    this.$store.dispatch("personalCenter/queryUser", {
      loadedCallBack: this.loadedCallBack
    });
  },
  computed: {
    ...mapGetters("personalCenter/", {
      member: "getMember",
    })
  },
  methods: {
    loadedCallBack() { },
    toSubmitFeedback() {
      let paramsObj = this.CONFIG.params;
      let paramsChild = {
        "REQUESTER":this.member.loginName,
        "QUE_CONTENT":$(".personalcenter-feedback-input").val(),
        "QUES_CONTENT":$(".personalcenter-feedback-input").val()
      }
      // paramsObj.metaMap[this.CONFIG.feedbackkeys] = $(".personalcenter-feedback-input").val();
      paramsObj.metaMap = paramsChild;
      Post(CONFIG.BASE_URL + this.CONFIG.submitUrl, paramsObj).then(
        res => {
          let datas = res.data;
          if (datas.status == "success" && datas.data) {
            console.log("success");
            this.showPage = this.showPageList[1];
          } else {
            this.$message({
              type: "warning",
              message: "提交失败"
            });
          }
        }
      );
    },
    goPageNum(num){
      this.showPage = this.showPageList[num];
    }
  }
};
</script>
<style scoped>
.personalcenter-feedback-box {
  text-align: center;
  font-size: 16px;
}
.personalcenter-feedback-input {
  width: 80%;
  height: 300px;
  resize: none;
  border: 1px solid #a7c0db;
  padding: 10px 20px;
  margin: 30px auto;
}
.personalcenter-feedback-submit {
  color: #fff;
  line-height: 30px;
  padding: 0 50px;
  border: 1px solid #166cc9;
  background: #166cc9;
  cursor: pointer;
}
.personalcenter-feedback-page01{
  text-align: center;
  font-size: 16px;
  line-height: 40px;
}
.personalcenter-feedback-success-tip{
  margin-bottom:50px;
}
.personalcenter-feedback-right{
  display: inline-block;
  margin:40px 0;
}
</style>
