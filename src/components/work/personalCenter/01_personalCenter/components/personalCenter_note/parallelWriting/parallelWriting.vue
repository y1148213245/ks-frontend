<template>
  <el-form :model="postForm" :rules="rules" ref="postForm">
  <div style="height:600px;width:800px;margin:30px auto;">
  <div style="margin-bottom:20px;">
    <el-form-item style="margin-bottom: 40px;" prop="title">
    <MDinput name="name" v-model="postForm.SYS_TOPIC" required :maxlength="30">
      标题
    </MDinput>
    </el-form-item>
  </div>
  <div>
    <markdown-editor v-model="postForm.CONTENT" ref="markdownEditor" preview-class="markdown-body"></markdown-editor>
  </div>
  <TypeButton @click="markdown2Html" style="float:right;margin:30px 10px 0 0" type="danger">保存笔记</TypeButton>
  </div>
  </el-form>


</template>
<style>
@import "simplemde/dist/simplemde.min.css";
</style>
<script type="text/ecmascript-6">
import { mapGetters } from "vuex";
import markdownEditor from "vue-simplemde/src/markdown-editor";
import MDinput from "./MDinput";
import TypeButton from "./water/TypeButton.vue";
import api from "../../../api/personalCenterApi";
const defaultForm = {
  CONTENT: "",
  SYS_TOPIC: ""
};
export default {
  name: "parallel-writing",
  description: "随手记组件",
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  created() {
    var getUrlStr = function(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    };
    this.DocId = getUrlStr("DocId");
    this.user = getUrlStr("user");
  },
  mounted() {
    if (this.isEdit) {
      this.fetchData();
    } else {
      this.postForm = Object.assign({}, defaultForm);
    }
  },

  computed: {
    ...mapGetters({
      member: "personalCenter/getMember" 
    }),
    simplemde() {
      return this.$refs.markdownEditor.simplemde;
    },
    
  },
  components: {
    markdownEditor,
    MDinput,
    TypeButton
  },
  data() {
    const validateRequire = (rule, value, callback) => {
      if (value === "") {
        this.$message({
          message: rule.field + "不能为空",
          type: "error"
        });
        callback(null);
      } else {
        callback();
      }
    };
    return {
      DocId: "",
      user: "",
      postForm: {},
      html: "",
      configs: {
        status: true, // 禁用底部状态栏
        spellChecker: false // 禁用拼写检查
      },
      rules: {
        title: [{ validator: validateRequire }]
      }
    };
  },
  methods: {
    fetchData() {
      var params = {
        DocIDs: this.DocId,
        loginName: this.user
      };
      api
        .fetchArticle(params)
        .then(response => {
          this.postForm = response.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    markdown2Html() {
      console.log(this.member)
      if (this.member.loginName) {
        if (
          this.postForm.CONTENT.length === 0 ||
          this.postForm.SYS_TOPIC.length === 0
        ) {
          this.$message({
            message: "请填写必要的标题和内容",
            type: "warning"
          });
          return;
        }
        this.loading = true;
        var params = {
          doclibCode: "PORTAL_NOTE",
          docID: this.DocId,
          metaMap: {
            CONTENT: this.postForm.CONTENT,
            SYS_AUTHORS: this.member.loginName,
            SYS_TOPIC: this.postForm.SYS_TOPIC
          },
          cb: this.saveNoteCallback
        };
        this.$store.dispatch("personalCenter/saveNote", params);
      } else {
        this.$alert("请您先登录~", "系统提示", {
          confirmButtonText: "确定"
        });
      }
    },
    saveNoteCallback(rep) {
      if (rep == "success") {
        this.$notify({
          title: "成功",
          message: "笔记保存成功",
          type: "success",
          duration: 2000
        });
        this.loading = false;
      } else {
        console.log("error submit!!");
        return false;
      }
    }
  }
};
</script>

<style>
.title-prompt {
  position: absolute;
  right: 0px;
  font-size: 12px;
  top: 10px;
  color: #ff4949;
  z-index: 999;
}
</style>

