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
    <el-table
        :data="participantsedList"
        max-height="288"
        style="width: 700px"
        :row-class-name="setParticipantsListTableCellClassName"
        @current-change="handleCurrentChange">
      <el-table-column
        align="center"
        prop="userName"
        label="已参赛"
        
        width="120">
      </el-table-column>
      <el-table-column
        align="center"
        prop="gender"
        width="120"
        :formatter="sexFormat">
      </el-table-column>
      <el-table-column
        align="center"
        prop="mobileNum"
        width="180">
      </el-table-column>
      <el-table-column
        align="center"
        prop="identifyId"
        show-overflow-tooltip>
      </el-table-column>
    </el-table>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
      <span class="ac_table_title ac_title_bottom">补充相关信息</span>
      </div>
      <div class="work_contestants_01-supplement is-required">
        <label class="el-form-item__label">地区：</label>
        <el-select v-model="addressInformaitionValue" placeholder="请选择参赛地区" filterable  @change="updateSchool">
          <el-option
          v-for="item in addressInformaition"
          :key="item"
          :label="item.label"
          :value="item">
          </el-option>
        </el-select>
      </div>
      <div  class="work_contestants_01-supplement is-required">
      <label class="el-form-item__label">组别：</label>
        <el-select v-model="classInformaitionValue" placeholder="请选择参赛组别" filterable  @change="updateSchool">
          <el-option
          v-for="item in classInformaition"
          :key="item"
          :label="item.label"
          :value="item">
          </el-option>
        </el-select>
      </div>

      <div class="work_contestants_01-supplement is-required">
      <label class="el-form-item__label">学校：</label>
      <el-select v-model="schoolInformaitionValue" placeholder="请选择学校"  filterable>
         <el-option v-for="(item,index) in schoolArr" :label="item.label" :value="item.SYS_TOPIC" :key="index"></el-option>
         <el-option label="其他" :value="-1"></el-option>
      </el-select>
      </div>

      <div class="work_contestants_01-supplement">
        <el-form :model="addSupplementForm" :rules="rules" ref="addSupplementForm" style="display：inline-block">
          <div class="ac_linetext">
            <div class="ac_input">
            <el-form-item label="班级：" prop="class">
              <el-input placeholder="请填写班级" v-model="addSupplementForm.class" clearable class="work_contestants_01-supplement-class_input"></el-input>
            </el-form-item>
            </div>
          </div>
        </el-form>
      </div>
      
      <div class="work_contestants_01-supplement isLongInput" v-show="isShowCustomeSchool">
        <el-form :model="addSupplementForm" :rules="rules" ref="addSupplementForm" style="display：inline-block" >
          <div class="ac_linetext">
            <div class="ac_input">
            <el-form-item label="学校：" prop="customSchool">
              <el-input placeholder="请填写学校" v-model="addSupplementForm.customSchool" clearable></el-input>
            </el-form-item>
            </div>
          </div>
        </el-form>
      </div>

      <div class="work_contestants_01-supplement isLongInput">
        <el-form :model="addSupplementForm" :rules="rules" ref="addSupplementForm" style="display：inline-block" >
          <div class="ac_linetext">
            <div class="ac_input">
            <el-form-item label="学校地址：" prop="schoolAddress">
              <el-input placeholder="请填写学校地址" v-model="addSupplementForm.schoolAddress" clearable></el-input>
            </el-form-item>
            </div>
          </div>
        </el-form>
      </div>

      <div class="work_contestants_01-supplement isLongInput">
        <el-form :model="addSupplementForm" :rules="rules" ref="addSupplementForm" style="display：inline-block" >
          <div class="ac_linetext">
            <div class="ac_input">
            <el-form-item label="邮箱：" prop="email">
              <el-input placeholder="请填写邮箱" v-model="addSupplementForm.email" clearable></el-input>
            </el-form-item>
            </div>
          </div>
        </el-form>
      </div>

      <div class="work_contestants_01-supplement isLongInput">
        <el-form :model="addSupplementForm" :rules="rules" ref="addSupplementForm" style="display：inline-block" >
          <div class="ac_linetext">
            <div class="ac_input">
            <el-form-item label="邮编：">
              <el-input placeholder="请填写邮编" v-model="addSupplementForm.zipCode" clearable></el-input>
            </el-form-item>
            </div>
          </div>
        </el-form>
      </div>
      
      <div class="work_contestants_01-supplement isLongInput">
        <el-form :model="addSupplementForm" :rules="rules" ref="addSupplementForm" style="display：inline-block" >
          <div class="ac_linetext">
            <div class="ac_input">
            <el-form-item label="指导教师：">
              <el-input placeholder="请填写指导教师" v-model="addSupplementForm.teacher" clearable></el-input>
            </el-form-item>
            </div>
          </div>
        </el-form>
      </div>

      <div class="work_contestants_01-supplement isLongInput">
        <el-form :model="addSupplementForm" :rules="rules" ref="addSupplementForm" style="display：inline-block" >
          <div class="ac_linetext">
            <div class="ac_input">
            <el-form-item label="指导教师电话：">
              <el-input placeholder="请填写指导教师电话" v-model="addSupplementForm.teacherPhone" clearable></el-input>
            </el-form-item>
            </div>
          </div>
        </el-form>
      </div>

      <div class="work_contestants_01-supplement isLongInput">
        <el-form :model="addSupplementForm" :rules="rules" ref="addSupplementForm" style="display：inline-block" >
          <div class="ac_linetext">
            <div class="ac_input">
            <el-form-item label="组织教师：">
              <el-input placeholder="请填写组织教师" v-model="addSupplementForm.organizationTeacher" clearable></el-input>
            </el-form-item>
            </div>
          </div>
        </el-form>
      </div>  

      <div class="work_contestants_01-supplement isLongInput">
        <el-form :model="addSupplementForm" :rules="rules" ref="addSupplementForm" style="display：inline-block" >
          <div class="ac_linetext">
            <div class="ac_input">
            <el-form-item label="组织教师电话：">
              <el-input placeholder="请填写组织教师电话" v-model="addSupplementForm.organizationTeacherPhone" clearable></el-input>
            </el-form-item>
            </div>
          </div>
        </el-form>
      </div>

      <div class="work_contestants_01-supplement isLongInput">
        <el-form :model="addSupplementForm" :rules="rules" ref="addSupplementForm" style="display：inline-block" >
          <div class="ac_linetext">
            <div class="ac_input">
            <el-form-item label="设为隐私">
              <el-radio-group v-model="addSupplementForm.isHide">
                <el-radio label="是"></el-radio>
                <el-radio label="否"></el-radio>
              </el-radio-group>
            </el-form-item>
            </div>
          </div>
        </el-form>
      </div>
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

        <el-form-item label="文件：" prop="files" v-show="worktype == '附件'">
          <el-checkbox-group v-model="addAnnexWorksForm.files"></el-checkbox-group>
          <el-upload
            class="upload-demo"
            :action="upLoadUrl()"
            name="file"
            :before-upload="beforeFileUpload"
            :on-preview="handlePreview"
            :on-success="upLoadingSuccess"
            multiple
            :limit="1"
            :on-exceed="handleExceed"
            :file-list="addAnnexWorksForm.files"
            >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="正文：" prop="content" v-show="worktype != '附件'">
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
     <div class="where_to_go">
     <el-button type="primary" round @click="toIndex">前往首页</el-button>
     <el-button type="primary" round @click="toPersonal">前往参与的活动</el-button>
     </div>

  </div>


</div>
</template>

<script>
import { Get, Post, ValidateRules } from "@common";
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
  data () {
    var customSchoolValidate = (rule, value, callback) => {
      if (this.schoolInformaitionValue === -1 && value == "") {
        callback(new Error("请填写学校"));
      } else {
        callback();
      }
    }
    return {
      // loginName: null,
      docId: "",
      userId: "",
      loginName: "",
      currentRow: "",
      attachID: "",
      worktype: "",
      topic: "",
      keys: null,
      schoolArr: [],
      CONFIG: null,
      active: 0,
      addressInformaition: null,
      addressInformaitionValue: null,
      classInformaition: null,
      classInformaitionValue: null,
      schoolInformaitionValue: null,
      isShowCustomeSchool: false,
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
          { required: true, message: "请输入参赛人姓名", trigger: "blur" },
          { validator: ValidateRules.nameCheck, trigger: "blur" }
        ],
        identity: [
          { required: true, message: "请输入参赛人身份证号", trigger: "blur" },
          { validator: ValidateRules.IDCheck, trigger: "blur" }
        ],
        telNumber: [
          { required: true, message: "请输入参赛人手机号", trigger: "blur" },
          { validator: ValidateRules.mobileCheck, trigger: "blur" }
        ],
        school: [{ required: true, message: "请输入学校", trigger: "blur" }],
        customSchool: [
          { required: true, message: "请输入学校", trigger: "blur" },
          { validator: customSchoolValidate, trigger: "blur" }
        ],
        teacher: [
          { required: true, message: "请输入指导教师", trigger: "blur" }
        ],
        class: [
          { required: true, message: "请输入班级", trigger: "blur" }
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" }
        ],
        schoolAddress: [
          { required: true, message: "请输入学校地址", trigger: "blur" }
        ],
        title: [
          { required: true, message: "请输入参赛作品标题", trigger: "blur" }
        ],
        synopsis: [
          { required: true, message: "请输入参赛作品简介", trigger: "blur" }
        ]
        // files: [{ required: true, message: "请上传作品附件", trigger: "blur" }],
        // content: [
        //   { required: true, message: "请填写参赛作品", trigger: "blur" }
        // ]
      },
      addParticipantsForm: {
        name: "",
        sex: "1",
        identity: "",
        telNumber: ""
      },
      addSupplementForm: {
        school: "",
        customSchool: "",
        schoolAddress: '',
        teacher: "",
        teacherPhone: '',
        class: '',
        email: '',
        zipCode: '',
        organizationTeacher: '',
        organizationTeacherPhone: '',
        isHide: '否'
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
      participantsList: [],
      participantsedList: []
    };
  },
  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].contestants.contestants_01;
    var _this = this;
    Get(CONFIG.BASE_URL + "checkToken.do").then(function (rep) {
      let datas = rep.data.data;
      if (datas && datas.checkStatus == "1") {
        _this.userId = datas.id;
        _this.loginName = datas.loginName;
        _this.queryParticipants();
      } else {
        alert("请登录");
        let url = "./login.html";
        window.location.href = url;
      }
    });
  },

  mounted () {
    this.queryRelatedInformation();
  },
  components: {
    VueEditor
  },
  methods: {
    queryParticipants () {
      // 查询参赛人列表
      Get(CONFIG.BASE_URL + this.CONFIG.competitionList.url, {
        params: {
          userId: this.userId,
          pageNo: "1",
          pageSize: "99"
        }
      }).then(rep => {
        let participantsArr = [];
        let participantsedArr = [];
        let participantsList = rep.data.data;
        Get(CONFIG.BASE_URL + this.CONFIG.competitionList.competitionedUrl, {
          params: {
            loginName: this.loginName,
            pageSize: '1',
            page: '99',
            pageable: '1'
          }
        }).then(resp => {
          // console.log(resp.data);
          let participantsedList = resp.data.data;
          for (let i = 0, len = participantsList.length; i < len; i++) {
            let participant = participantsList[i];
            let isParticipant = false;
            for (let j = 0, len = participantsedList.length; j < len; j++) {
              let participantsed = participantsedList[j];
              if (participant.userName == participantsed.POTHUNTER_NAME) {
                isParticipant = false;
                break;
              } else {
                isParticipant = true;
              }
            }
            if (isParticipant) {
              participantsArr.push(participant);
            } else {
              participantsedArr.push(participant)
            }
          }
          this.participantsedList = participantsedArr;
          this.participantsList = participantsArr;
        })

      });
    },
    setParticipantsListTableCellClassName (row, rowIndex) {
      return 'work_contestants_01-cell--disable'
    },
    //查询学校
    updateSchool () {
      let doclibCode =
        this.CONFIG.supplementaryInformation.keys.getSchoolRequest_doclibCode +
        "=" +
        this.CONFIG.supplementaryInformation.params.getSchoolRequest_doclibCode; //配库码
      let relations =
        this.CONFIG.supplementaryInformation.keys.getSchoolRequest_relations +
        "=" +
        this.CONFIG.supplementaryInformation.params.getSchoolRequest_relations; //并且，或者
      let cols =
        this.CONFIG.supplementaryInformation.keys.getSchoolRequest_cols +
        "=" +
        this.CONFIG.supplementaryInformation.params.getSchoolRequest_cols; //字段名
      let symbols =
        this.CONFIG.supplementaryInformation.keys.getSchoolRequest_symbols +
        "=" +
        this.CONFIG.supplementaryInformation.params.getSchoolRequest_symbols; //匹配模式，包含，等于，不等于
      let vals =
        this.CONFIG.supplementaryInformation.keys.getSchoolRequest_vals +
        "=" +
        this.addressInformaitionValue +
        "," +
        this.classInformaitionValue; //值

      let url =
        this.CONFIG.supplementaryInformation.getSchoolUrl +
        "?" +
        doclibCode +
        "&" +
        relations +
        "&" +
        cols +
        "&" +
        symbols +
        "&" +
        vals;
      Get(CONFIG.BASE_URL + url).then(resp => {
        this.schoolInformaitionValue = ""; //清空学校
        this.schoolArr = resp.data.content;
        console.log(this.schoolArr);
      });
    },
    queryRelatedInformation () {
      // 查询补充信息
      var getUrlStr = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]);
        return null;
      };
      this.docId = getUrlStr("docId");
      Get(CONFIG.BASE_URL + this.CONFIG.supplementaryInformation.url, {
        params: {
          doclibCode: "PORTAL_ACTIVITY",
          docID: this.docId
        }
      }).then(rep => {
        this.worktype = rep.data.WORKTYPE;
        this.topic = rep.data.SYS_TOPIC;
        this.relatedInformationList = rep.data;
        this.addressInformaition = rep.data.AREALIMT.split(/;/);
        this.classInformaition = rep.data.CLASSLIMT.split(/;/);
      });
    },
    handleCurrentChange (currentRow) {
      console.log(currentRow);
      this.currentRow = currentRow;
    },
    // 提交参赛信息
    submitAddSupplementForm () {
      if (this.currentRow === "") {
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
      } else if (this.schoolInformaitionValue == "") {
        this.$message({
          type: "error",
          message: "请选择选择学校"
        });
        return false;
      } else if (this.schoolInformaitionValue === -1 && this.addSupplementForm.customSchool == '') {
        this.$message({
          type: "error",
          message: "请选择填写学校"
        });
        return false;
      } else if (this.addSupplementForm.schoolAddress == "") {
        this.$message({
          type: "error",
          message: "请选择填写学校地址"
        });
        return false;
      } else if (this.addSupplementForm.class == "") {
        this.$message({
          type: "error",
          message: "请选择填写班级"
        });
        return false;
      } else if (this.addSupplementForm.email == "") {
        this.$message({
          type: "error",
          message: "请选择填写邮箱"
        });
        return false;
      } else {
        this.active = 1;
      }
    },
    // 增加参赛人信息
    submitAddParticipantsForm (addParticipantsForm) {
      this.$refs[addParticipantsForm].validate(valid => {
        if (valid) {
          var param = {
            createTime: "",
            gender: this.addParticipantsForm.sex,
            id: 0,
            identifyId: this.addParticipantsForm.identity,
            mobileNum: this.addParticipantsForm.telNumber,
            userId: this.userId,
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
                this.queryParticipants();
                /*  Get(CONFIG.BASE_URL+this.CONFIG.competitionList.url, {
                   params: {
                     userId: this.userId,
                     pageNo: "1",
                     pageSize: "99"
                   }
                 }).then(rep => {
                   this.participantsList = rep.data.data;
                 }); */
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
    previouStep () {
      this.active = 0;
    },
    upLoadUrl () {
      // 上传地址
      return CONFIG.BASE_URL + this.CONFIG.upLoadUrl;
    },
    beforeFileUpload (file) {
      const isDOCX =
        file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
      const isDOC = file.type === "application/msword";
      const isText = file.type === "text/plain";
      const isPdf = file.type === "application/pdf";

      let size = file.size / 1024;

      if (!isDOCX && !isDOC && !isText && !isPdf) {
        this.$message.error("上传作品文件只能是 doc、docx、txt或pdf格式!");
        if (size > 10240) {
          this.$message.error("上传作品文件不能超过10M!");
          return false
        }
      }

      return isDOCX || isDOC || isText || isPdf;
    },
    upLoadingSuccess (res, file) {
      // 上传成功回调
      console.log(res);
      if ((res.Status = "success")) {
        this.attachID = res.ID;
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
    submitAddAnnexWorksForm (addAnnexWorksForm) {
      this.$refs[addAnnexWorksForm].validate(valid => {
        if (valid) {
          if (this.worktype == "附件" && this.attachID == "") {
            this.$message({
              type: "error",
              message: "请上传参赛附件"
            });
            return false;
          } else if (
            this.worktype != "附件" &&
            this.addAnnexWorksForm.content == ""
          ) {
            this.$message({
              type: "error",
              message: "请填写参赛正文"
            });
            return false;
          } else {
            let paramsObj = Object.assign(
              {},
              this.CONFIG.informationUploading.params
            );
            paramsObj.metaMap.ACTIVITYID = this.docId;
            paramsObj.metaMap.ACTIVITY_NAME = this.topic; //活动名称
            paramsObj.metaMap.POTHUNTER_NAME = this.currentRow.userName; //参赛人姓名
            paramsObj.metaMap.POTHUNTER_SEX = this.currentRow.gender.toString(); //参赛人性别
            paramsObj.metaMap.POTHUNTER_PHONENUMBER = this.currentRow.mobileNum; //参赛人手机号
            paramsObj.metaMap.POTHUNTER_IDNUMBER = this.currentRow.identifyId; //	参赛人身份证号
            paramsObj.metaMap.AREA = this.addressInformaitionValue; //	参赛地区
            paramsObj.metaMap.CLASS = this.classInformaitionValue; //	参赛组别
            paramsObj.metaMap.SCHOOL = this.schoolInformaitionValue === -1 ? this.addSupplementForm.customSchool : this.schoolInformaitionValue; //	参赛人学校

            paramsObj.metaMap.GUIDE_TEACHER = this.addSupplementForm.teacher; //	参赛人指导教师
            paramsObj.metaMap.CONCRETE_CLASS = this.addSupplementForm.class; //班级
            paramsObj.metaMap.SCHOOL_ADDRESS = this.addSupplementForm.schoolAddress;//学校
            paramsObj.metaMap.MAILBOX = this.addSupplementForm.email; //邮箱
            paramsObj.metaMap.POSTCODE = this.addSupplementForm.zipCode;//邮编
            paramsObj.metaMap.GUIDETEACHER_PHONENUMBER = this.addSupplementForm.teacherPhone;//指导教师电话
            paramsObj.metaMap.ORGANIZE_TEACHER = this.addSupplementForm.organizationTeacher;//组织教师
            paramsObj.metaMap.ORGANIZETEACHER_PHONENUMBER = this.addSupplementForm.organizationTeacherPhone;//组织教师电话
            paramsObj.metaMap.IS_HIDE = this.addSupplementForm.isHide;//是否是隐私

            paramsObj.metaMap.SYS_TOPIC = this.addAnnexWorksForm.title; //	参赛作品标题
            paramsObj.metaMap.DESCRIPTION = this.addAnnexWorksForm.synopsis; //	参赛作品简介
            paramsObj.metaMap.TEXTCONTENT = this.addAnnexWorksForm.content; //	参赛作品正文
            paramsObj.metaMap.ATTACHID = this.attachID.toString(); //文件附件ID
            paramsObj.metaMap.RESOURCEID = this.attachID.toString(); //文件附件ID
            paramsObj.attachMap[0].FILERECORDID = this.attachID.toString(); //文件附件ID
            paramsObj.metaMap.COMMITUSER = this.loginName; //	提交用户
            paramsObj.metaMap.WORKSTYPE = this.worktype; //	文件类型
            Post(CONFIG.BASE_URL + this.CONFIG.informationUploading.url, paramsObj).then(rep => {
              var datas = rep.data.result;
              console.log(rep.data.status);
              if (rep.data.status == "success") {
                this.$refs[addAnnexWorksForm].resetFields(); //清空表单
                this.active = 2;
              } else if (rep.data.status == "faild") {
                this.$message({
                  type: "error",
                  message: "提交失败"
                });
              }
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    toIndex () {
      let url = "./activity.html";
      window.location.href = url;
    },
    toPersonal () {
      let url = "./personalcenter.html#joinactivity";
      window.location.href = url;
    },
    sexFormat: function (row, column) {
      var date = row[column.property];
      if (date == 1) {
        return "男";
      } else {
        return "女";
      }
    },
    // 上传附件
    handlePreview (file) {
      console.log(file);
    },
    handleExceed (files, fileList) {
      this.$message.warning(`只能上传一个参赛作品附件`);
    }
  },
  watch: {
    schoolInformaitionValue (val, oldVal) {
      if (val === -1) {
        this.isShowCustomeSchool = true;
      } else {
        this.isShowCustomeSchool = false;
      }
    }
  }
};
</script>
<style>
.work_contestants_01_main .el-steps--simple {
  background: #ecf0f1;
  color: #5e8242;
}
.work_contestants_01_main {
  width: 700px;
  margin: 0 auto;
}
.work_contestants_01-cell--disable {
  background-color: #c0c4cc !important;
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
  width: 300px;
  display: inline-block;
  margin-bottom: 10px;
}
.work_contestants_01_main .ac_input span {
  line-height: 40px;
}
.work_contestants_01_main .ac_input .el-input {
  /* width: 217px; */
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
.work_contestants_01_main .ac_last_text .where_to_go {
  margin-top: 30px;
}
.work_contestants_01-required_icon {
  color: red;
}
.work_contestants_01-supplement {
  display: inline-block;
  margin-left: 30px;
}
.work_contestants_01-supplement .ac_linetext {
  margin-top: 10px;
}
.work_contestants_01-supplement.is-required .el-form-item__label:before {
  content: "*";
  color: #f56c6c;
  margin-right: 4px;
}
.work_contestants_01-supplement-class_input {
  width: 200px;
}
.work_contestants_01-supplement.isLongInput .el-form-item__label {
  /* text-align: left; */
  width: 110px;
}
.work_contestants_01-supplement.isLongInput .ac_input {
  width: 563px;
}
.work_contestants_01-supplement.isLongInput .ac_input .el-input {
  width: 453px;
}
</style>
