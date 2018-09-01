<template>
  <section class="personalcenter_join_activity">
    <div v-show="!enrolman">
      <el-dropdown @command="handleCommand" v-if="activityList.length > 0 && activityList[0].SYS_CURRENTSTATUS" style="float:right;margin-right:30px;">
        <span class="el-dropdown-link">
          {{getStaticText('auditStatusScreening') ? getStaticText('auditStatusScreening') : '审核状态筛选'}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">

          <el-dropdown-item command="未审核">{{getStaticText('unaudited') ? getStaticText('unaudited') : '未审核'}}</el-dropdown-item>
          <el-dropdown-item command="未通过审核">{{getStaticText('failureToPassAudit') ? getStaticText('failureToPassAudit') : '未通过审核'}}</el-dropdown-item>
          <el-dropdown-item command="已审核">{{getStaticText('audited') ? getStaticText('audited') : '已审核'}}</el-dropdown-item>
          <el-dropdown-item command="评奖中">{{getStaticText('inTheAward') ? getStaticText('inTheAward') : '评奖中'}}</el-dropdown-item>
          <el-dropdown-item command="已评奖">{{getStaticText('haveBeenAwardedPrize') ? getStaticText('haveBeenAwardedPrize') : '已评奖'}}</el-dropdown-item>
          <el-dropdown-item command="" divided>{{getStaticText('all') ? getStaticText('all') : '全部'}}</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>

      <el-button type="primary" style="margin:0px 0 20px 0;" @click="enrolman = true">{{getStaticText('managementEnrolment') ? getStaticText('managementEnrolment') : '管理报名人'}}</el-button>
      <el-table :data="activityList" style="width: 100%">
        <el-table-column v-if="activityList.length > 0 && activityList[0].ACTIVITY_DETAIL && activityList[0].ACTIVITY_DETAIL.SYS_TOPIC" align="center" prop="ACTIVITY_DETAIL.SYS_TOPIC" :label="getStaticText('participateInActivities') ? getStaticText('participateInActivities') : '参加活动'" width="180">
        </el-table-column>
        <el-table-column v-if="activityList.length > 0 && activityList[0].ACTIVITY_DETAIL && activityList[0].ACTIVITY_DETAIL.END_TIMESTAMPNEW" align="center" prop="ACTIVITY_DETAIL.END_TIMESTAMPNEW" :label="getStaticText('activeState') ? getStaticText('activeState') : '活动状态'" :formatter="activityState" width="100">
        </el-table-column>
        <el-table-column v-if="activityList.length > 0 && activityList[0].SYS_CURRENTSTATUS" align="center" prop="SYS_CURRENTSTATUS" :label="getStaticText('auditStatus') ? getStaticText('auditStatus') : '审核状态'" :formatter="formateReviewStatus" width="100">
        </el-table-column>
        <el-table-column align="center" prop="SYS_TOPIC" :label="getStaticText('titleOfWork') ? getStaticText('titleOfWork') : '作品标题'" width="180">
        </el-table-column>
        <el-table-column align="center" prop="POTHUNTER_NAME" :label="getStaticText('contestant') ? getStaticText('contestant') : '参赛人'" width="150">
        </el-table-column>
        <el-table-column align="center" prop="SYS_CREATED" :label="getStaticText('timeOfCompetition') ? getStaticText('timeOfCompetition') : '参赛时间'" :formatter="dateFormat" sortable width="180">
        </el-table-column>
        <el-table-column align="center" prop="POTHUNTER_IDNUMBER" :label="getStaticText('identityCardNumberOfContestant') ? getStaticText('identityCardNumberOfContestant') : '参赛人身份证号'" width="180">
        </el-table-column>
        <el-table-column v-if="activityList.length > 0 && activityList[0].AWARD" align="center" prop="AWARD" :label="getStaticText('awardSituation') ? getStaticText('awardSituation') : '获奖情况'" width="100" :formatter="worksScore">
        </el-table-column>
        <el-table-column :label="getStaticText('operation') ? getStaticText('operation') : '操作'" align="center" width="190" fixed="right" v-if="getIsShow('operate')">
          <template slot-scope="scope">
            <el-button v-if="scope.row.SYS_CURRENTSTATUS" @click="handleEdit(scope.$index, scope.row)" :disabled="scope.row.SYS_CURRENTSTATUS=='未审核'|| scope.row.SYS_CURRENTSTATUS=='未通过审核'" size="small">{{getStaticText('viewTheWork') ? getStaticText('viewTheWork') : '查看作品'}}</el-button>
            <!-- <el-switch
              v-model="isHide"
              active-text="按月付费"
              inactive-text="按年付费">
            </el-switch> -->
            <el-button @click="setIsHide(scope.row.SYS_DOCUMENTID,scope.row.IS_HIDE)" v-show="scope.row.IS_HIDE != '是'" type="error" size="small">{{getStaticText('hiddenWorks') ? getStaticText('hiddenWorks') : '隐藏作品'}}</el-button>
            <el-button @click="setIsHide(scope.row.SYS_DOCUMENTID,scope.row.IS_HIDE)" v-show="scope.row.IS_HIDE == '是'" type="error" size="small">{{getStaticText('openWork') ? getStaticText('openWork') : '公开作品'}}</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <!-- 管理报名人 -->
    <div v-show="enrolman">
      <el-button type="primary" @click="additions=true">{{getStaticText('newPersonnel') ? getStaticText('newPersonnel') : '新增人员'}}</el-button>
      <el-dialog :title="getStaticText('newCompetitorInformation') ? getStaticText('newCompetitorInformation') : '新增参赛人信息'" :visible.sync="additions">
        <div>
          <el-form :model="addParticipantsForm" :rules="rules" ref="addParticipantsForm" label-width="100px" class="demo-ruleForm">

            <el-form-item :label="getStaticText('name') ? getStaticText('name') : '姓名'+'：'" prop="name">
              <el-input v-model="addParticipantsForm.name"></el-input>
            </el-form-item>

            <el-form-item :label="getStaticText('gender') ? getStaticText('gender') : '性别'+'：'" prop="sex">
              <el-radio-group v-model="addParticipantsForm.sex">
                <el-radio label="1">{{getStaticText('male') ? getStaticText('male') : '男'}}</el-radio>
                <el-radio label="0">{{getStaticText('female') ? getStaticText('female') : '女'}}</el-radio>
              </el-radio-group>
            </el-form-item>

            <el-form-item :label="getStaticText('identityCard') ? getStaticText('identityCard') : '身份证'+'：'" prop="identity">
              <el-input v-model="addParticipantsForm.identity"></el-input>
            </el-form-item>

            <el-form-item :label="getStaticText('telephone') ? getStaticText('telephone') : '电话'+'：'" prop="telNumber">
              <el-input v-model="addParticipantsForm.telNumber"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="additions = false">{{getStaticText('cancel') ? getStaticText('cancel') : '取 消'}}</el-button>
          <el-button type="primary" @click="submitAddParticipantsForm('addParticipantsForm')">{{getStaticText('confirm') ? getStaticText('confirm') : '确 定'}}</el-button>
        </span>
      </el-dialog>

      <el-table border :data="activityMemberList" style="width: 100%" max-height="500">
        <el-table-column prop="userName" :label="getStaticText('name') ? getStaticText('name') : '姓名'">
        </el-table-column>
        <el-table-column prop="gender" :label="getStaticText('gender') ? getStaticText('gender') : '性别'" :formatter="sexFormat">
        </el-table-column>
        <el-table-column prop="mobileNum" :label="getStaticText('contactInformation') ? getStaticText('contactInformation') : '联系方式'">
        </el-table-column>
        <el-table-column prop="identifyId" :label="getStaticText('identityCardNumber') ? getStaticText('identityCardNumber') : '身份证号码'">
        </el-table-column>
        <el-table-column :label="getStaticText('operation') ? getStaticText('operation') : '操作'" prop="action" width="200px">
          <template slot-scope="scope">
            <el-button @click="editClick(scope.$index, scope.row,scope.row.id)" type="success" size="small">{{getStaticText('edit') ? getStaticText('edit') : '编辑'}}</el-button>
            <el-button @click="deleteContestant(scope.row.id)" type="danger" size="small">{{getStaticText('delete') ? getStaticText('delete') : '删除'}}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="join-back_main">
        <el-button type="primary" @click="enrolman = false">{{getStaticText('return') ? getStaticText('return') : '返回'}}</el-button>
      </div>
      <el-dialog :title="getStaticText('editCompetitorInformation') ? getStaticText('editCompetitorInformation') : '编辑参赛人信息'" :visible.sync="editorsDialog">
        <div class="addressContent">
          <div class="newWrapper">
            <div>{{getStaticText('name') ? getStaticText('name') : '姓名'}}：</div>
            <input id="ac_name" type="text" maxlength="40" v-model="identityInformation.userName" @blur="checkName()">
            <span class="warningInfo" v-if="emptyName">{{getStaticText('pleaseFillInTheContestants') ? getStaticText('pleaseFillInTheContestants') : '请填写参赛人'}}</span>
          </div>
          <div class="newWrapper">
            <div>{{getStaticText('gender') ? getStaticText('gender') : '性别'}}：</div>
            <el-radio-group v-model="identityInformation.gender">
              <el-radio :label="1">{{getStaticText('male') ? getStaticText('male') : '男'}}</el-radio>
              <el-radio :label="0">{{getStaticText('female') ? getStaticText('female') : '女'}}</el-radio>
            </el-radio-group>
          </div>
          <div class="newWrapper">
            <div>{{getStaticText('identityCardNumber') ? getStaticText('identityCardNumber') : '身份证号'}}：</div>
            <input id="ac_ID" type="text" maxlength="18" v-model="identityInformation.identifyId" @blur="checkID()">
            <span class="warningInfo" v-if="emptyID">{{getStaticText('pleaseFillInTheCorrectIdentityCardNumber') ? getStaticText('pleaseFillInTheCorrectIdentityCardNumber') : '请填写正确身份证号'}}</span>
          </div>
          <div class="newWrapper">
            <div>{{getStaticText('contactNumber') ? getStaticText('contactNumber') : '联系电话'}}：</div>
            <input id="ac_phone" type="number" v-model="identityInformation.mobileNum" @blur="checkPhone()" maxlength="11">
            <span class="warningInfo" v-if="emptyPhone">{{getStaticText('pleaseFillInTheContactNumber') ? getStaticText('pleaseFillInTheContactNumber') : '请填写联系电话'}}</span>
          </div>
        </div>

        <div slot="footer" class="dialog-footer">
          <el-button @click="editorsDialog=false">{{getStaticText('cancel') ? getStaticText('cancel') : '取 消'}}</el-button>
          <el-button type="primary" @click="submitEditorsContestant">{{getStaticText('confirm') ? getStaticText('confirm') : '确 定'}}</el-button>
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
  props: ["namespace", "parentConfig"],
  created () {
    if (this.parentConfig.joinactivity) {
      this.CONFIG = this.parentConfig.joinactivity
    }
  },
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
        callback(new Error(this.getStaticText('pleaseInputTheCorrectPhoneNumber') ? this.getStaticText('pleaseInputTheCorrectPhoneNumber') : "请输入正确电话号"));
      } else {
        callback();
      }
    }
    return {
      CONFIG: null,
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
      isAddingParticipants:false,//是否正在添加人员
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

      status == '已评奖' && isEndActivity == '是' ? status = (this.getStaticText('haveBeenAwardedPrize') ? this.getStaticText('haveBeenAwardedPrize') : '已评奖') : (this.getStaticText('inTheAward') ? this.getStaticText('inTheAward') : '评奖中');
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
        this.setState = this.getStaticText('yes') ? this.getStaticText('yes') : '是';
      } else {
        this.setState = this.getStaticText('no') ? this.getStaticText('no') : '否';
      }
      var params = {
        doclibCode: "PORTAL_WORKS",
        docID: String(id),
        metaMap: {
          IS_HIDE: this.setState
        }
      };
      api.setHide(params).then(response => {
        var _this = this;
        if (response.data.status == "success") {
          this.$store.dispatch("personalCenter/activityList", {});
          this.$message({
            type: "success",
            message: _this.getStaticText('setSuccess') ? _this.getStaticText('setSuccess') : '设置成功'
          });
        } else {
          this.$message({
            type: "error",
            message: _this.getStaticText('setFailed') ? _this.getStaticText('setFailed') : "设置失败!"
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
      var _this = this;
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
          this.isAddingParticipants = true
          api
            .addActivityMember(param)
            .then(response => {
              this.isAddingParticipants = false
              if (response.data.data.errorCode) {
                this.$message({
                  type: "error",
                  message: response.data.data.errorMsg
                });
              } else {
                this.$message({
                  type: "success",
                  message: _this.getStaticText('participantsAddSuccess') ? _this.getStaticText('participantsAddSuccess') : "参赛人添加成功!"
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
              this.isAddingParticipants = false
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
      this.$confirm(_this.getStaticText('areYouSureYouWantToDeleteTheCompetitorInformation') ? _this.getStaticText('areYouSureYouWantToDeleteTheCompetitorInformation') : '您确定要删除该参赛人信息吗?', _this.getStaticText('systemHints') ? _this.getStaticText('systemHints') : "系统提示", {
        confirmButtonText: _this.getStaticText('confirm') ? _this.getStaticText('confirm') : "确定",
        cancelButtonText: _this.getStaticText('cancel') ? _this.getStaticText('cancel') : "取消",
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
              message: _this.getStaticText('informationDeletedSuccessfully') ? _this.getStaticText('informationDeletedSuccessfully') : "信息删除成功!"
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
      var _this = this;
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
              message: _this.getStaticText('informationModifiedSuccessfully') ? _this.getStaticText('informationModifiedSuccessfully') : "信息修改成功!"
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
        return this.getStaticText('male') ? this.getStaticText('male') : "男";
      } else {
        return this.getStaticText('female') ? this.getStaticText('female') : "女";
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
        return this.getStaticText('finished') ? this.getStaticText('finished') : "已结束";
      } else {
        return this.getStaticText('haveInHand') ? this.getStaticText('haveInHand') : "进行中";
      }
    },
    worksScore (row, column) {
      var date = row[column.property];
      if (date == null) {
        return this.getStaticText('scoring') ? this.getStaticText('scoring') : "评分中";
      }
    },
    colShowFilter (property) {

    },
    getIsShow (text) {
      if (this.CONFIG && this.CONFIG.showItem) {
        if (this.CONFIG.showItem.indexOf(text) > -1) {
          return true
        } else {
          return false
        }
      } else {
        return true
      }
    },
    getStaticText(text) {
      if(this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]){
        return this.CONFIG.staticText[text]
      }else {
        return false;
    }
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
