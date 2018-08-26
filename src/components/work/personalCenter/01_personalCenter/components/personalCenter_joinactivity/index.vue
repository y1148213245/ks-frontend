<template>
  <section class="personalcenter_join_activity">
    <div v-show="!enrolman">
      <el-dropdown @command="handleCommand"  v-if="activityList.length > 0 && activityList[0].SYS_CURRENTSTATUS" style="float:right;margin-right:30px;">
        <span class="el-dropdown-link">
          审核状态筛选
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">

          <el-dropdown-item command="未审核">未审核</el-dropdown-item>
          <el-dropdown-item command="未通过审核">未通过审核</el-dropdown-item>
          <el-dropdown-item command="已审核">已审核</el-dropdown-item>
          <el-dropdown-item command="评奖中">评奖中</el-dropdown-item>
          <el-dropdown-item command="已评奖">已评奖</el-dropdown-item>
          <el-dropdown-item command="" divided>全部</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-button type="primary" style="margin:0px 0 20px 0;" @click="enrolman = true">管理报名人</el-button>
      <el-table :data="activityList" style="width: 100%">
        <el-table-column v-if="activityList.length > 0 && activityList[0].ACTIVITY_DETAIL && activityList[0].ACTIVITY_DETAIL.SYS_TOPIC" align="center" prop="ACTIVITY_DETAIL.SYS_TOPIC" label="参加活动" width="180">
        </el-table-column>
        <el-table-column v-if="activityList.length > 0 && activityList[0].ACTIVITY_DETAIL && activityList[0].ACTIVITY_DETAIL.END_TIMESTAMPNEW" align="center" prop="ACTIVITY_DETAIL.END_TIMESTAMPNEW" label="活动状态" :formatter="activityState" width="100">
        </el-table-column>
        <el-table-column v-if="activityList.length > 0 && activityList[0].SYS_CURRENTSTATUS" align="center" prop="SYS_CURRENTSTATUS" label="审核状态" :formatter="formateReviewStatus" width="100">
        </el-table-column>
        <el-table-column align="center" prop="SYS_TOPIC" label="作品标题" width="180">
        </el-table-column>
        <el-table-column align="center" prop="POTHUNTER_NAME" label="参赛人" width="150">
        </el-table-column>
        <el-table-column align="center" prop="SYS_CREATED" label="参赛时间" :formatter="dateFormat" sortable width="180">
        </el-table-column>
        <el-table-column align="center" prop="POTHUNTER_IDNUMBER" label="参赛人身份证号" width="180">
        </el-table-column>
        <el-table-column align="center" prop="AWARD" label="获奖情况" width="100" :formatter="worksScore">
        </el-table-column>
        <el-table-column label="操作" align="center" width="190" fixed="right">
          <template slot-scope="scope">
            <el-button v-if="scope.row.SYS_CURRENTSTATUS" @click="handleEdit(scope.$index, scope.row)" :disabled="scope.row.SYS_CURRENTSTATUS=='未审核'|| scope.row.SYS_CURRENTSTATUS=='未通过审核'" size="small">查看作品</el-button>
            <!-- <el-switch
              v-model="isHide"
              active-text="按月付费"
              inactive-text="按年付费">
            </el-switch> -->
            <el-button @click="setIsHide(scope.row.SYS_DOCUMENTID,scope.row.IS_HIDE)" v-show="scope.row.IS_HIDE != '是'" type="error" size="small">隐藏作品</el-button>
            <el-button @click="setIsHide(scope.row.SYS_DOCUMENTID,scope.row.IS_HIDE)" v-show="scope.row.IS_HIDE == '是'" type="error" size="small">公开作品</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 管理报名人 -->
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
        <el-table-column prop="gender" label="性别" :formatter="sexFormat">
        </el-table-column>
        <el-table-column prop="mobileNum" label="联系方式">
        </el-table-column>
        <el-table-column prop="identifyId" label="身份证号码">
        </el-table-column>
        <el-table-column label="操作" prop="action" width="200px">
          <template slot-scope="scope">
            <el-button @click="editClick(scope.$index, scope.row,scope.row.id)" type="success" size="small">编辑</el-button>
            <el-button @click="deleteContestant(scope.row.id)" type="danger" size="small">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="join-back_main">
        <el-button type="primary" @click="enrolman = false">返回</el-button>
      </div>
      <el-dialog title="编辑参赛人信息" :visible.sync="editorsDialog">
        <div class="addressContent">
          <div class="newWrapper">
            <div>姓名：</div>
            <input id="ac_name" type="text" maxlength="40" v-model="identityInformation.userName" @blur="checkName()">
            <span class="warningInfo" v-if="emptyName">请填写参赛人</span>
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
            <span class="warningInfo" v-if="emptyID">请填写正确身份证号</span>
          </div>
          <div class="newWrapper">
            <div>联系电话：</div>
            <input id="ac_phone" type="number" v-model="identityInformation.mobileNum" @blur="checkPhone()" maxlength="11">
            <span class="warningInfo" v-if="emptyPhone">请填写联系电话</span>
          </div>
        </div>

        <div slot="footer" class="dialog-footer">
          <el-button @click="editorsDialog=false">取 消</el-button>
          <el-button type="primary" @click="submitEditorsContestant">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <!-- 管理报名人end -->

  </section>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { ValidateRules } from "@common";
import moment from "moment";
import { mapGetters, mapActions } from "vuex";
import api from "../../api/personalCenterApi";
import $ from "jquery";
export default {
  name: "joinactivity",
  reused: true,
  props: ["namespace"],
  mounted () {
    this.$store.dispatch("personalCenter/queryUser", {
      loadedCallBack: this.loadedCallBack
    });
  },
  computed: {
    ...mapGetters({
      account: "personalCenter/getAccount",
      activityMemberList: "personalCenter/getActivityMemberList",
      activityList: "personalCenter/getActivityList"
    })
  },
  data () {
    /* 简单电话校验 */
    var mobileCheck = (rule, value, callback) => {
      if (value != '' && !/^[\d()\-\s]*$/.test(value)) {
        callback(new Error("请输入正确电话号"));
      } else {
        callback();
      }
    }
    return {
      rules: {
        name: [
          { required: true, message: "请输入参赛人姓名", trigger: "blur" },
          { validator: ValidateRules.nameCheck, trigger: "blur" }
        ],
        identity: [
          { required: true, message: "请输入参赛人身份证号", trigger: "blur" },
          { validator: ValidateRules.IDCheckSimple, trigger: "blur" }
        ],
        telNumber: [
          { required: true, message: "请输入参赛人手机号", trigger: "blur" },
          { validator: mobileCheck, trigger: "blur" }
        ]
      },
      isHide: false, //作品是否公开
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
  filters: {},
  methods: {
    loadedCallBack () {
      this.$store.dispatch("personalCenter/activityList", {});
      this.getActivityMemberByUser();
    },
    /* 评审状态过滤处理 */
    formateReviewStatus (row, column) {
      // debugger

      let status = row[column.property];
      let isEndActivity = row['ACTIVITY_DETAIL']['IS_ENDACTIVITY']/* 是:已发布评奖结果 */

      status == '已评奖' && isEndActivity == '是' ? status = '已评奖' : '评奖中';
      return status
    },
    //时间格式化
    dateFormat: function (row, column) {
      var date = row[column.property];
      if (date == undefined) {
        return "";
      }
      return moment(date).format("YYYY-MM-DD HH:mm:ss");
    },
    // 设置是否公开
    setIsHide (id, state) {
      var setState;
      if (state != "是") {
        this.setState = "是";
      } else {
        this.setState = "否";
      }
      var params = {
        doclibCode: "PORTAL_WORKS",
        docID: String(id),
        metaMap: {
          IS_HIDE: this.setState
        }
      };
      api.setHide(params).then(response => {
        if (response.data.status == "success") {
          this.$store.dispatch("personalCenter/activityList", {});
          this.$message({
            type: "success",
            message: "设置成功!"
          });
        } else {
          this.$message({
            type: "error",
            message: "设置失败!"
          });
        }
      });
    },
    // 状态筛选
    handleCommand (command) {
      var params = {
        status: command,
        pageSize: 1,
        page: 99
      };
      this.$store.dispatch("personalCenter/activityList", params);
    },
    handleEdit (index, row) {
      console.log(index, row);
      let url =
        "./productiondetail.html?resourceType=PORTAL_WORKS&resourceId=" +
        row.SYS_DOCUMENTID +
        "&colId=&resourceName=" +
        row.SYS_TOPIC +
        "&activityId=" +
        row.ACTIVITYID;
      window.location.href = url;
    },
    // 获取报名人列表
    getActivityMemberByUser () {
      var params = {
        pageNo: 1,
        pageSize: 99
      };
      this.$store.dispatch("personalCenter/getActivityMemberByUser", params);
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
            userId: this.account.id,
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
                  message: "参赛人添加成功!"
                });
                var params = {
                  pageNo: 1,
                  pageSize: 99
                };
                this.$store.dispatch(
                  "personalCenter/getActivityMemberByUser",
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
    deleteContestant: function (id) {
      var _this = this;
      this.$confirm("您确定要删除该参赛人信息吗?", "系统提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(function () {
        var param = {
          id: id,
          userId: _this.account.id
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
              pageSize: 99
            };
            _this.$store.dispatch(
              "personalCenter/getActivityMemberByUser",
              params
            );
          }
        });
      });
    },
    /*删除参赛人信息完毕*/
    /*编辑参赛人信息*/
    submitEditorsContestant: function () {
      if ($("#ac_name").val() === "") {
        // 姓名为空
        this.emptyName = true;
        return false;
      } else if ($("#ac_phone").val() === "") {
        // 联系方式为空
        this.emptyPhone = true;
        return false;
      } else if ($("#ac_ID").val() === "" || !/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test($("#ac_ID").val())) {
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
          userId: this.account.id,
          userName: $("#ac_name").val()
        };

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
              "personalCenter/getActivityMemberByUser",
              params
            );
          }
          this.editorsDialog = false;
        });
      }
    },
    checkName: function () {
      this.emptyName = $("#ac_name").val() === "" ? true : false;
    },
    checkID: function () {
      this.emptyID = $("#ac_ID").val() === "" || !/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test($("#ac_ID").val()) ? true : false;
    },
    checkPhone: function () {
      this.emptyPhone = $("#ac_phone").val() === "" ? true : false;
    },
    /*编辑参赛人信息完毕*/
    sexFormat: function (row, column) {
      var date = row[column.property];
      if (date == 1) {
        return "男";
      } else {
        return "女";
      }
    },
    editClick (index, row, studentId) {
      this.editorsDialog = true;
      console.log(studentId);
      this.studentId = studentId;
      this.identityInformation = JSON.parse(
        JSON.stringify(this.activityMemberList[index])
      );
    },
    activityState (row, column) {
      var date = row[column.property];
      let currentTime = new Date().getTime();
      if (date - currentTime <= 0) {
        return "已结束";
      } else {
        return "进行中";
      }
    },
    worksScore (row, column) {
      var date = row[column.property];
      if (date == null) {
        return "评分中";
      }
    },
    colShowFilter(property){

    }
  }
};
</script>
<style>
.personalcenter_join_activity .el-table__body-wrapper {
  overflow: auto;
}
.personalcenter_join_activity .newWrapper {
  margin-bottom: 10px;
}
.personalcenter_join_activity .el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.personalcenter_join_activity .el-icon-arrow-down {
  font-size: 12px;
}
.personalcenter_join_activity .newWrapper input {
  width: 85%;
  height: 30px;
  line-height: 30px;
  padding-left: 15px;
  border: 1px solid #bfcbd9;
  margin-top: 5px;
}

.personalcenter_join_activity .newWrapper .selectPCC {
  display: inline-block;
  margin-top: 5px;
}

.personalcenter_join_activity .warningInfo {
  font-size: 12px;
  color: red !important;
  text-align: left !important;
}
.join-back_main {
  padding: 5px;
  text-align: right;
}
</style>
