<template>
<div class="join_ac">
<div v-show="!enrolman">
    <el-button type="primary" style="margin:0px 0 20px 0;" @click="enrolman = true">管理报名人</el-button>
    <el-col :span="19">
    <el-table
    :data="returnGoodsList"
    border
    style="width: 100%"
    >
     <el-table-column
      align="center"
      prop="id"
      label="参加活动"
      width="100">
    </el-table-column>
    <el-table-column
      align="center"
      prop="orderCode"
      label="活动状态"
      width="220">
    </el-table-column>
    <el-table-column
      align="center"
      prop="id"
      label="审核状态"
      width="100"
      :filters="[{ text: '待审核', value: 1 }, { text: '通过审核', value: 2 },{ text: '未通过审核', value: 3 }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
    </el-table-column>
    <el-table-column
      align="center"
      prop="productName"
      label="作品标题"
      width="100">
    </el-table-column>
    <el-table-column
      align="center"
      prop="createTime"
      label="参赛人"
      width="150">
    </el-table-column>
    <el-table-column
      align="center"
      prop="createTime"
      label="参赛时间"
      sortable
      width="150">
    </el-table-column>
    <el-table-column
      align="center"
      prop="num"
      label="参赛人身份证号"
      width="160"
      >
    </el-table-column>
    <el-table-column
      align="center"
      prop="type"
      label="获奖情况"
      width="100"
      :filters="[{ text: '一等奖', value: 1 }, { text: '二等奖', value: 2 },{ text: '三等奖', value: 3 }]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
      >
    </el-table-column>
    <el-table-column label="操作"  align="center" width="160">
        <template slot-scope="scope">
        <el-button @click="handleEdit(scope.$index, scope.row)">查看作品</el-button>
        </template>
    </el-table-column>
  </el-table>
    </el-col>
</div>

      <!-- 管理报名人 -->
    <el-col :span="19">
    <div v-show="enrolman">
      <el-button type="primary" @click="additions=true">新增人员</el-button>
      <el-dialog title="新增参赛人信息" :visible.sync="additions">
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

       <el-table border :data="activityMemberList" style="width: 100%" max-height="500">
        <el-table-column prop="userName" label="姓名">
        </el-table-column>
        <el-table-column prop="gender" label="性别" :formatter="sexFormat" >
        </el-table-column>
        <el-table-column prop="mobileNum" label="联系方式" >
        </el-table-column>
        <el-table-column prop="identifyId" label="身份证号码" >
        </el-table-column>
        <el-table-column label="操作" prop="action" width="200px">
          <template slot-scope="scope">
            <el-button @click="editClick(scope.$index, scope.row,scope.row.id)" type="success" size="small">编辑</el-button>
            <el-button @click="deleteContestant(scope.row.id)" type="danger" size="small" >删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-dialog title="编辑参赛人信息" :visible.sync="editorsDialog">
        <div class="addressContent">
           <div class="newWrapper">
            <div>姓名：</div>
            <input id="ac_name" type="text" maxlength="40" v-model="identityInformation.userName" @blur="checkName()">
            <span class="warningInfo" v-if="emptyName">请填写收货人</span>
          </div>
           <div class="newWrapper">
            <div>性别：</div>
              <el-radio-group v-model="identityInformation.gender">
                <el-radio :label="1">男</el-radio>
                <el-radio :label="0">女</el-radio>
              </el-radio-group>
          </div>
          <div class="newWrapper">
            <div>身份证号：</div>
            <input id="ac_ID" type="text" maxlength="18" v-model="identityInformation.identifyId" @blur="checkID()">
            <span class="warningInfo" v-if="emptyID">请填写身份证号</span>
          </div>
          <div class="newWrapper">
            <div>联系电话：</div>
            <input id="ac_phone" type="number" v-model="identityInformation.mobileNum" @blur="checkPhone()"  maxlength="11">
            <span class="warningInfo" v-if="emptyPhone">请填写联系电话</span>
          </div>
        </div>

        <div slot="footer" class="dialog-footer">
          <el-button @click="editorsDialog=false">取 消</el-button>
          <el-button type="primary" @click="submitEditorsContestant">确 定</el-button>
        </div> 
      </el-dialog>
    </div>
    </el-col>
    <!-- 管理报名人end -->


</div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { mapGetters, mapActions } from "vuex";
import api from "../../api/personalCenterApi";
import $ from "jquery";
export default {
  name: "joinactivity",
  reused: true,
  props: ["namespace"],
  mounted() {
    this.$store.dispatch("personalCenter/queryUser", {
      loadedCallBack: this.loadedCallBack
    });
  },
  computed: {
    ...mapGetters({
      account: "personalCenter/getAccount",
      activityMemberList: "personalCenter/getActivityMemberList",
      returnGoodsList: "personalCenter/getReturnGoodsList"
    })
  },
  data() {
    return {
      rules: {
        name: [
          { required: true, message: "请输入参赛人姓名", trigger: "blur" }
        ],
        identity: [
          { required: true, message: "请输入参赛人身份证号", trigger: "blur" }
        ],
        telNumber: [
          { required: true, message: "请输入参赛人手机号", trigger: "blur" }
        ]
      },
      enrolman: false, //管理报名人页面
      additions: false, //新增人员弹窗
      editorsDialog: false, //编辑人员弹窗
      identityInformation: "", //编辑人员内容初始化
      emptyName: false,
      emptyID: false,
      emptyPhone: false,
      studentId: "", //编辑人员ID
      addParticipantsForm: {
        name: "",
        sex: "1",
        identity: "",
        telNumber: ""
      }
    };
  },
  methods: {
    loadedCallBack() {
      var params = {
        pageNo: 1,
        pageSize: 8
      };
      this.$store.dispatch("personalCenter/getActivityMemberByTeacher", params);
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
            teacherId: this.account.id,
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
                var params = {
                  pageNo: 1,
                  pageSize: 8
                };
                this.$store.dispatch(
                  "personalCenter/getActivityMemberByTeacher",
                  params
                );
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
    /*删除参赛人信息*/
    deleteContestant: function(id) {
      var _this = this;
      this.$confirm("您确定要删除该参赛人信息吗?", "系统提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(function() {
        var param = {
          memberId: id,
          teacherId: _this.account.id
        };
        api.deleteActivityMemberById(param).then(response => {
          console.log(response);
          if (response.data.data.errorCode) {
            _this.$message({
              type: "error",
              message: response.data.data.errorMsg
            });
          } else {
            _this.$message({
              type: "success",
              message: "信息删除成功!"
            });
            var params = {
              pageNo: 1,
              pageSize: 8
            };
            _this.$store.dispatch(
              "personalCenter/getActivityMemberByTeacher",
              params
            );
          }
        });
      });
    },
    /*删除参赛人信息完毕*/
    /*编辑参赛人信息*/
    submitEditorsContestant: function() {
      if ($("#ac_name").val() === "") {
        // 姓名为空
        this.emptyName = true;
        return false;
      } else if ($("#ac_phone").val() === "") {
        // 联系方式为空
        this.emptyPhone = true;
        return false;
      } else if ($("#ac_ID").val() === "") {
        // 身份证号为空
        this.emptyID = true;
        return false;
      } else {
        // 都不为空
        var param = {
          createTime: "",
          gender: this.identityInformation.gender,
          id: this.studentId,
          identifyId: $("#ac_ID").val(),
          mobileNum: $("#ac_phone").val(),
          teacherId: this.account.id,
          userName: $("#ac_name").val()
        };
        console.log(param);
        api.modifyActivityMember(param).then(response => {
          console.log(response);
          if (response.data.error.errorCode) {
            this.$message({
              type: "error",
              message: response.data.error.errorMsg
            });
          } else {
            this.$message({
              type: "success",
              message: "信息修改成功!"
            });
            var params = {
              pageNo: 1,
              pageSize: 8
            };
            this.$store.dispatch(
              "personalCenter/getActivityMemberByTeacher",
              params
            );
          }
          this.editorsDialog = false;
        });
      }
    },
    checkName: function() {
      this.emptyName = $("#ac_name").val() === "" ? true : false;
    },
    checkID: function() {
      this.emptyID = $("#ac_ID").val() === "" ? true : false;
    },
    checkPhone: function() {
      this.emptyPhone = $("#ac_phone").val() === "" ? true : false;
    },
    /*编辑参赛人信息完毕*/
    sexFormat: function(row, column) {
      var date = row[column.property];
      if (date == 1) {
        return "男";
      } else {
        return "女";
      }
    },
    editClick(index, row, studentId) {
      this.editorsDialog = true;
      console.log(studentId);
      this.studentId = studentId;
      this.identityInformation = JSON.parse(
        JSON.stringify(this.activityMemberList[index])
      );
    },
    filterTag(value, row) {
      return row.type === value;
    }
  }
};
</script>
<style>
.join_ac .el-table__body-wrapper {
  overflow: auto;
}
.join_ac .newWrapper {
  margin-bottom: 10px;
}

.join_ac .newWrapper input {
  width: 85%;
  height: 30px;
  line-height: 30px;
  padding-left: 15px;
  border: 1px solid #bfcbd9;
  margin-top: 5px;
}

.join_ac .newWrapper .selectPCC {
  display: inline-block;
  margin-top: 5px;
}

.join_ac .warningInfo {
  font-size: 12px;
  color: red !important;
  text-align: left !important;
}
</style>
