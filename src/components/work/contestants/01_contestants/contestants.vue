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
      <el-button style="float: right;" type="primary" round icon="el-icon-plus" size="medium"  @click="addParticipantsDialog = true">新增参赛人员</el-button>
 
      <el-dialog title="添加参赛人信息" :visible.sync="addParticipantsDialog">
        <div>
          <el-form :model="addParticipantsForm" :rules="rules" ref="addParticipantsForm" label-width="100px" class="demo-ruleForm">

          <el-form-item label="姓名：" prop="name">
          <el-input v-model="addParticipantsForm.name"></el-input>
          </el-form-item>

          <el-form-item label="性别：" prop="sex">
          <el-radio-group v-model="addParticipantsForm.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
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
            <el-button @click="addParticipantsDialog = false">取 消</el-button>
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
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        align="center"
        prop="sex"
        label="性别"
        width="120">
      </el-table-column>
      <el-table-column
        align="center"
        prop="phoneNumber"
        label="手机号"
        width="180">
      </el-table-column>
      <el-table-column
        align="center"
        prop="identityCard"
        label="身份证号"
        show-overflow-tooltip>
      </el-table-column>
    </el-table>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
      <span class="ac_table_title ac_title_bottom">补充相关信息</span>
      </div>
      <el-form :model="addSupplementForm" :rules="rules" ref="addSupplementForm" label-width="100px" class="demo-ruleForm">
      <div>
        <div class="ac_input">
        <el-form-item label="地区：" prop="selectedOptions">
        <el-cascader
          :options="CityInfo"
          v-model="addSupplementForm.selectedOptions"
          :change-on-select="true"
          :clearable="true"
          :filterable="true"
          @change="handleChange">
        </el-cascader>
        </el-form-item>
        </div>
        <div class="ac_input">
        <el-form-item label="学校：" prop="school">
        <el-input
        placeholder="请输入学校"
        v-model="addSupplementForm.school"
        clearable>
        </el-input>
        </el-form-item>
        </div>
        <div class="ac_input">
        <el-form-item label="组别：" prop="group">
        <el-input
        placeholder="请输入组别"
        v-model="addSupplementForm.group"
        clearable>
        </el-input>
        </el-form-item>
        </div>
        <div class="ac_input">
        <el-form-item label="教师：" prop="teacher">
        <el-input
        placeholder="请输入指导教师"
        v-model="addSupplementForm.teacher"
        clearable>
        </el-input>
        </el-form-item>
        </div>
      </div>
      </el-form>
    </el-card>


    <div style="display:none">
      <span id="t_city">{{addSupplementForm.city | myAddressCity}}</span>
      <span id="t_erae">{{addSupplementForm.erae | myAddressErae}}</span>
      <span id="t_minerae">{{addSupplementForm.minerae | myAddressMinerae}}</span>
    </div>

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
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
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
import PROJECT_CONFIG from "projectConfig";
import { VueEditor } from 'vue2-editor';

export default {
  name: "work_contestants_01",
  reused: true,
  props: {
    namespace: String
  },
  data () {
    return {
      CONFIG: null,
      active: 0,
      customToolbar: [  // 自定义编辑器工具栏
        ['bold', 'italic', 'underline'],  // 字体样式：粗体、斜体、下划线
        [{ 'align': '' }, { 'align': 'center' }, { 'align': 'right' }],  // 对齐样式：左对齐、居中、右对齐
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],  // 列表样式：数字、圆点、对号
        [{ 'indent': '-1' }, { 'indent': '+1' },],  // 缩进：左、右
        ['color', 'background'],  // 文字颜色、文字背景颜色
      ],
      rules: {
        selectedOptions: [
          { required: true, message: "请输入地区", trigger: "blur" }
        ],
        school: [
          { required: true, message: "请输入学校", trigger: "blur" }
        ],
        group: [
          { required: true, message: "请输入组别", trigger: "blur" }
        ],
        teacher: [
          { required: true, message: "请输入指导教师", trigger: "blur" }
        ],
        name: [
          { required: true, message: "请输入参赛人姓名", trigger: "blur" }
        ],
        identity: [
          { required: true, message: "请输入参赛人身份证号", trigger: "blur" }
        ],
        telNumber: [
          { required: true, message: "请输入参赛人手机号", trigger: "blur" }
        ],
        title: [
          { required: true, message: "请输入参赛作品标题", trigger: "blur" }
        ],
        synopsis: [
          { required: true, message: "请输入参赛作品简介", trigger: "blur" }
        ],
        files: [
          { required: true, message: "请输入参赛作品简介", trigger: "blur" }
        ],
        content: [
          { required: true, message: "请填写参赛作品", trigger: "blur" }
        ]
      },
      addParticipantsForm: {
        name: "",
        sex: "男",
        identity: "",
        telNumber: ""
      },
      addSupplementForm: {
        city: "",
        erae: "",
        minerae: "",
        selectedOptions: [],//地区筛选数组
        school: "",
        group: "",
        teacher: ""
      },
      addAnnexWorksForm: {
        title: "",
        synopsis: "",
        /* files: [{ name: 'demo.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],  */
        files: [],
        content: '',
      },
      addParticipantsDialog: false,
      input10: "",
      CityInfo: CityInfo,
      participantsList: []
    };
  },
  mounted () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].contestants.contestants_01;
    this.queryParticipants();
  },
  components: {
    VueEditor
  },
  filters: {
    myAddressCity: function (value) {
      for (var y = 0; y < CityInfo.length; y++) {
        if (CityInfo[y].value == value) {
          return CityInfo[y].label;
        }
      }
    },
    myAddressErae: function (value) {
      for (var y = 0; y < CityInfo.length; y++) {
        for (var z = 0; z < CityInfo[y].children.length; z++) {
          if (CityInfo[y].children[z].value == value && value != undefined) {
            return CityInfo[y].children[z].label;
          }
        }
      }
    },
    myAddressMinerae: function (value) {
      for (var y = 0; y < CityInfo.length; y++) {
        for (var z = 0; z < CityInfo[y].children.length; z++) {
          for (var i = 0; i < CityInfo[y].children[z].children.length; i++) {
            if (
              CityInfo[y].children[z].children[i].value == value &&
              value != undefined
            ) {
              return CityInfo[y].children[z].children[i].label;
            }
          }
        }
      }
    }
  },
  methods: {
    queryParticipants () {  // 查询参赛人列表
      Get(this.CONFIG.url, { params: this.CONFIG.params }).then(rep => {
        this.participantsList = rep.data.data;
      });
    },
    handleCurrentChange (currentRow) {
      console.log(currentRow);
    },
    handleChange (value) {
      this.addSupplementForm.city = this.addSupplementForm.selectedOptions[0];
      this.addSupplementForm.erae = this.addSupplementForm.selectedOptions[1];
      this.addSupplementForm.minerae = this.addSupplementForm.selectedOptions[2];
    },
    // 提交参赛信息
    submitAddSupplementForm (addSupplementForm) {
      this.$refs[addSupplementForm].validate(valid => {
        if (valid) {
          this.active = 1;
          // this.$refs[addSupplementForm].resetFields(); 
          
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 增加参赛人信息
    submitAddParticipantsForm (addParticipantsForm) {
      this.$refs[addParticipantsForm].validate(valid => {
        if (valid) {
          this.addParticipantsDialog = false;
          this.$refs[addParticipantsForm].resetFields(); //清空表单
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    previouStep () {
      this.active = 0;
    },
    // 添加附件类参赛作品
    submitAddAnnexWorksForm (addAnnexWorksForm) {
      this.$refs[addAnnexWorksForm].validate(valid => {
        if (valid) {
          this.$refs[addAnnexWorksForm].resetFields(); //清空表单
          this.active = 2;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 上传附件
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePreview (file) {
      console.log(file);
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove (file, fileList) {
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
  top: 170%;
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
  margin-right: 10px;
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
