<!-- 参赛组件 -->
<template>
<div class="work_contestants_01 work_contestants_01_main">
  <el-steps :active="active" simple>
    <el-step title="参赛人信息" icon="el-icon-edit"></el-step>
    <el-step title="上传作品" icon="el-icon-upload"></el-step>
    <el-step title="完成" icon="el-icon-check"></el-step>
  </el-steps>
    <div v-show="active == 0">
      <el-card class="box-card" :body-style="{ padding: '0 0 0 10px' }">
      <div slot="header" class="clearfix">
      <span class="ac_table_title ac_title_bottom">选择参赛人员</span>
      <el-button style="float: right;" type="primary" round icon="el-icon-plus" size="medium"  @click="additions = true">新增参赛人员</el-button>
 
      <el-dialog title="添加参赛人信息" :visible.sync="additions">
        <div>
          <el-form :model="addParticipantsForm" :rules="rules" ref="addParticipantsForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="姓名：" prop="name">
          <el-input v-model="addParticipantsForm.name"></el-input>
          </el-form-item>
          <el-form-item label="性别：" prop="sex">
          <el-radio-group v-model="addParticipantsForm.sex">
          <el-radio label="1">男</el-radio>
          <el-radio label="0">女</el-radio>
          </el-radio-group>
          </el-form-item>
          <el-form-item label="身份证：" prop="identity">
          <el-input v-model="addParticipantsForm.identity"></el-input>
          </el-form-item>
          <el-form-item label="电话：" prop="telNumber">
          <el-input v-model="addParticipantsForm.telNumber"></el-input>
          </el-form-item>
          </el-form>
        </div>
          <span slot="footer" class="dialog-footer">
            <el-button @click="additions = false">取 消</el-button>
            <el-button type="primary" @click="submitAddParticipantsForm('addParticipantsForm')">确 定</el-button>
          </span>
      </el-dialog>

      </div>
      <el-table
        :data="participantsList"
        max-height="288"
        style="width: 700px"
        highlight-current-row
        @current-change="handleCurrentChange">
      <el-table-column
        align="center"
        prop="userName"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        align="center"
        prop="gender"
        label="性别"
        width="120"
        :formatter="sexFormat">
      </el-table-column>
      <el-table-column
        align="center"
        prop="mobileNum"
        label="手机号"
        width="180">
      </el-table-column>
      <el-table-column
        align="center"
        prop="identifyId"
        label="身份证号"
        show-overflow-tooltip>
      </el-table-column>
    </el-table>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
      <span class="ac_table_title ac_title_bottom">补充相关信息</span>
      </div>
      <div style="display:inline-block;margin-left:30px;">
        <span>地区：</span>
        <el-select v-model="addressInformaitionValue" placeholder="请选择参赛地区" filterable>
          <el-option
          v-for="item in addressInformaition"
          :key="item"
          :label="item.label"
          :value="item">
          </el-option>
        </el-select>
      </div>
      <div  style="display:inline-block;margin-left:30px;">
      <span>组别：</span>
        <el-select v-model="classInformaitionValue" placeholder="请选择参赛组别" filterable>
          <el-option
          v-for="item in classInformaition"
          :key="item"
          :label="item.label"
          :value="item">
          </el-option>
        </el-select>
      </div>

      <el-form :model="addSupplementForm" :rules="rules" ref="addSupplementForm">
      <div>
        <div class="ac_input" style="display:inline-block;margin-left:18px;">
        <el-form-item label="学校：" prop="school">
        <el-input
        placeholder="请填写学校"
        v-model="addSupplementForm.school"
        clearable>
        </el-input>
        </el-form-item>
        </div>
        <div class="ac_input">
        <el-form-item label="教师：" prop="teacher">
        <el-input
        placeholder="请填写指导教师"
        v-model="addSupplementForm.teacher"
        clearable>
        </el-input>
        </el-form-item>
        </div>
      </div>
      </el-form>
    </el-card>
    <el-button type="primary" class="ac_to_next" @click="submitAddSupplementForm('addSupplementForm')">下一步</el-button>
  </div>
  <!-- 上传作品 -->
  <div v-show="active == 1">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="ac_table_title ac_title_bottom">填写作品信息</span>
      </div>
        <el-form :model="addAnnexWorksForm" :rules="rules" ref="addAnnexWorksForm" label-width="100px" class="demo-ruleForm">

        <el-form-item label="标题：" prop="title">
          <el-input v-model="addAnnexWorksForm.title"></el-input>
        </el-form-item>

        <el-form-item label="简介：" prop="synopsis">
          <el-input type="textarea" v-model="addAnnexWorksForm.synopsis"></el-input>
        </el-form-item>

        <el-form-item label="文件：" prop="files">
          <el-checkbox-group v-model="addAnnexWorksForm.files"></el-checkbox-group>
          <el-upload
            class="upload-demo"
            :action="upLoadUrl()"
            name="file"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :on-success="upLoadingSuccess"
            multiple
            :limit="1"
            :on-exceed="handleExceed"
            :file-list="addAnnexWorksForm.files">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="正文：" prop="content">
          <VueEditor v-model="addAnnexWorksForm.content" :editorToolbar="customToolbar"></VueEditor>
        </el-form-item>
        <el-form-item>
          <div class="ac_button">
            <el-button type="primary" @click="previouStep">上一步</el-button>
            <el-button type="primary" @click="submitAddAnnexWorksForm('addAnnexWorksForm')">提交</el-button>
          </div>
        </el-form-item>
        </el-form>
    </el-card>
  </div>
  <div class="ac_last_text" v-show="active == 2">
     <span><i class="el-icon-success"></i>你的作品已提交成功</span>
  </div>


</div>
</template>

<script>
import { Get } from "@common";
import { Post } from "@common";
import PROJECT_CONFIG from "projectConfig";
import { VueEditor } from "vue2-editor";
import api from "../../../work/personalCenter/01_personalCenter/api/personalCenterApi";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "work_contestants_01",
  reused: true,
  props: {
    namespace: String
  },
  data() {
    return {
      // loginName: null,
      docID: "",
      teacherID: "",
      currentRow: "",
      CONFIG: null,
      active: 0,
      addressInformaition: null,
      addressInformaitionValue: null,
      classInformaition: null,
      classInformaitionValue: null,
      customToolbar: [
        // 自定义编辑器工具栏
        ["bold", "italic", "underline"], // 字体样式：粗体、斜体、下划线
        [{ align: "" }, { align: "center" }, { align: "right" }], // 对齐样式：左对齐、居中、右对齐
        [{ list: "ordered" }, { list: "bullet" }, { list: "check" }], // 列表样式：数字、圆点、对号
        [{ indent: "-1" }, { indent: "+1" }], // 缩进：左、右
        ["color", "background"] // 文字颜色、文字背景颜色
      ],
      rules: {
        name: [
          { required: true, message: "请输入参赛人姓名", trigger: "blur" }
        ],
        identity: [
          { required: true, message: "请输入参赛人身份证号", trigger: "blur" }
        ],
        telNumber: [
          { required: true, message: "请输入参赛人手机号", trigger: "blur" }
        ],
        school: [{ required: true, message: "请输入学校", trigger: "blur" }],
        teacher: [
          { required: true, message: "请输入指导教师", trigger: "blur" }
        ],
        title: [
          { required: true, message: "请输入参赛作品标题", trigger: "blur" }
        ],
        synopsis: [
          { required: true, message: "请输入参赛作品简介", trigger: "blur" }
        ],
        // files: [{ required: true, message: "请上传作品附件", trigger: "blur" }],
        content: [
          { required: true, message: "请填写参赛作品", trigger: "blur" }
        ]
      },
      addParticipantsForm: {
        name: "",
        sex: "1",
        identity: "",
        telNumber: ""
      },
      addSupplementForm: {
        school: "",
        teacher: ""
      },
      addressInformaitionValue: "",
      classInformaitionValue: "",
      addAnnexWorksForm: {
        title: "",
        synopsis: "",
        files: [],
        content: ""
      },
      additions: false,
      participantsList: []
    };
  },
  created() {
    var _this = this;
    Get(BASE_URL + "checkToken.do").then(function(rep) {
      let datas = rep.data.data;
      if (datas && datas.checkStatus == "1") {
        var getUrlStr = function(name) {
          var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
          var r = window.location.search.substr(1).match(reg);
          if (r != null) return unescape(r[2]);
          return null;
        };
        _this.teacherID = datas.id;
      } else {
        alert("请登录");
      }
    });
  },

  mounted() {
    this.CONFIG = PROJECT_CONFIG[this.namespace].contestants.contestants_01;
    this.queryParticipants();
    this.queryRelatedInformation();
  },
  components: {
    VueEditor
  },
  methods: {
    queryParticipants() {
      // 查询参赛人列表
      Get(this.CONFIG.competitionList.url, {
        params: this.CONFIG.competitionList.params
      }).then(rep => {
        console.log(rep);
        this.participantsList = rep.data.data;
      });
    },
    queryRelatedInformation() {
      // 查询补充信息
      Get(this.CONFIG.supplementaryInformation.url, {
        params: this.CONFIG.supplementaryInformation.params
      }).then(rep => {
        this.relatedInformationList = rep.data;
        this.addressInformaition = rep.data.AREALIMT.split(/;/);
        this.classInformaition = rep.data.CLASSLIMT.split(/;/);
      });
    },
    handleCurrentChange(currentRow) {
      console.log(currentRow);
      this.currentRow = currentRow;
    },
    // 提交参赛信息
    submitAddSupplementForm() {
      if (this.currentRow === "") {
        // 收件人为空
        this.$message({
          type: "error",
          message: "请在列表里选择参赛人"
        });
        return false;
      } else if (this.addressInformaitionValue == "") {
        this.$message({
          type: "error",
          message: "请选择地区"
        });
        return false;
      } else if (this.classInformaitionValue == "") {
        this.$message({
          type: "error",
          message: "请选择组别"
        });
        return false;
      } else {
        console.log(this.addressInformaitionValue);
        console.log(this.classInformaitionValue);
        console.log(this.currentRow);
        this.active = 1;
      }
    },
    // 增加参赛人信息
    submitAddParticipantsForm(addParticipantsForm) {
      this.$refs[addParticipantsForm].validate(valid => {
        if (valid) {
          var param = {
            createTime: "",
            gender: this.addParticipantsForm.sex,
            id: 0,
            identifyId: this.addParticipantsForm.identity,
            mobileNum: this.addParticipantsForm.telNumber,
            teacherId: this.teacherID,
            userName: this.addParticipantsForm.name
          };
          api
            .addActivityMember(param)
            .then(response => {
              console.log(response);
              if (response.data.data.errorCode) {
                this.$message({
                  type: "error",
                  message: response.data.data.errorMsg
                });
              } else {
                this.$message({
                  type: "success",
                  message: "学生添加成功!"
                });
                Get(this.CONFIG.competitionList.url).then(rep => {
                  this.participantsList = rep.data.data;
                });
              }
              this.additions = false;
              this.$refs[addParticipantsForm].resetFields(); //清空表单
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    previouStep() {
      this.active = 0;
    },
    upLoadUrl() {
      // 上传地址
      return "http://172.19.57.153/spc-portal-web/dynamicFile/upload.do?";
    },
    upLoadingSuccess(res, file) {
      // 上传成功回调
      console.log(res);
      if ((res.Status = "success")) {
        console.log(res.ID);
        this.$message({
          type: "success",
          message: "文件上传成功"
        });
      } else {
        this.$message({
          type: "info",
          message: "文件上传失败，请重试"
        });
      }
    },
    // 添加附件类参赛作品
    submitAddAnnexWorksForm(addAnnexWorksForm) {
      this.$refs[addAnnexWorksForm].validate(valid => {
        if (valid) {
          let paramsObj = Object.assign(
            {},
            this.CONFIG.informationUploading.params
          );
          paramsObj.metaMap.GUIDE_TEACHER = "tym";
          // var params = {
          //   doclibCode: "PORTAL_WORKS",
          //   metaMap: {
          //     // ACTIVITYLIBID:"PORTAL_ACTIVITY",
          //     ACTIVITYID: "601858",
          //     POTHUNTER_NAME: "联调姓名", //参赛人姓名
          //     POTHUNTER_SEX: "1", //参赛人性别
          //     POTHUNTER_PHONENUMBER: "18888888888", //参赛人手机号
          //     POTHUNTER_IDNUMBER: "210303888888888888", //	参赛人身份证号
          //     GUIDE_TEACHER: "联调指导教师", //指导教师
          //     AREA: "北京~西城", //地区
          //     CLASS: "小学~三年级", //年级
          //     SCHOOL: "联调学校", //学校
          //     SYS_TOPIC: "第六次测试", //作品标题
          //     DESCRIPTION: "联调作品简介", //作品简介
          //     TEXTCONTENT: "", //	正文内容
          //     ATTACHID: "176730", //文件附件ID
          //     COMMITUSER: "18813015362", //提交用户
          //     WORKSTYPE: "附件" //作品类型
          //   },
          //   attachMap: [
          //     {
          //       FILERECORDID: "176730", //文件附件ID
          //       CATEGORYID: "4127" //写死
          //     }
          //   ]
          // };
          Post(this.CONFIG.informationUploading.url, paramsObj).then(rep => {
            var datas = rep.data.result;
            console.log(rep);
          });
          this.$refs[addAnnexWorksForm].resetFields(); //清空表单
          this.active = 2;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    sexFormat: function(row, column) {
      var date = row[column.property];
      if (date == 1) {
        return "男";
      } else {
        return "女";
      }
    },
    // 上传附件
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`只能上传一个参赛作品附件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    }
  }
};
</script>
<style scoped>
.work_contestants_01_main .el-steps--simple {
  background: #ecf0f1;
  color: #5e8242;
}
.work_contestants_01_main {
  width: 700px;
  margin: 0 auto;
}
.work_contestants_01_main .el-table__body-wrapper {
  overflow: auto;
}
.work_contestants_01_main .el-card__header {
  padding: 12px 20px;
}
.work_contestants_01_main .box-card {
  width: 700px;
  margin: 30px auto;
}
.work_contestants_01_main .clearfix .ac_table_title {
  line-height: 36px;
  font-weight: bold;
  font-size: 16px;
}
.work_contestants_01_main .clearfix:before,
.work_contestants_01_main .clearfix:after {
  display: table;
  content: "";
}
.work_contestants_01_main .clearfix:after {
  clear: both;
}
.work_contestants_01_main .ac_title_bottom {
  position: relative;
}
.work_contestants_01_main .ac_title_bottom:before {
  content: "";
  display: block;
  position: absolute;
  top: 195%;
  width: 100%;
  border-style: solid;
  border-width: 3px;
  border-color: #409eff;
}
.work_contestants_01_main .ac_input {
  width: 320px;
  display: inline-block;
  margin-bottom: 10px;
}
.work_contestants_01_main .ac_input span {
  line-height: 40px;
}
.work_contestants_01_main .ac_input .el-input {
  width: 210px;
  display: inline-block;
}
.work_contestants_01_main .ac_to_next {
  float: right;
}
.work_contestants_01_main .ac_last_text {
  color: #5e8242;
  font-size: 24px;
  margin: 0 auto;
  width: 300px;
  height: 40px;
  margin-top: 100px;
  text-align: center;
}
.work_contestants_01_main .ac_button {
  float: right;
}
</style>
