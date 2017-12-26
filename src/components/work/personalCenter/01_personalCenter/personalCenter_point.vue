<!--文联收藏夹-->
<template>
 <el-col :span="19">
<div class="main_right fl">
	<div class="wzdh_jf f14 color_6f6">
		<div class="color_6f6 line-h24">您现在有积分:<span class="re30">{{account.payPoints}}</span></div>
    <div class="color_6f6 line-h24">您现在有虚拟币: <span class="re30">{{account.virtualCoin}}</span></div>
		<div class="color_6f6 line-h24">1积分=1虚拟币 </div>
		<div class="wzdh_jf_duih">
			<div class="wzdh_jf_duih_01">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="elform">
        <el-form-item prop="number" style="width:370px; margin:30px auto;">
          <span>积分：</span>
          <el-input style="width: 200px;" type="text" v-model.number="ruleForm.number" auto-complete="off"
                    placeholder="请输入兑换积分数量" class="inputwid"></el-input>
          <span>兑换</span><span class="re30">{{ruleForm.number}}</span>虚拟币<i class="jf_duih_03"></i>
        </el-form-item>
        <div class="col_full nobottommargin btnbox">
            <el-button type="primary" @click="submitForm('ruleForm')" class="button nomargin">提交</el-button>
        </div>
      </el-form>
      </div>
    </div>

		<div class="wzdh_jf_sm">
			<el-table border :data="pointRecords.data" style="width: 100%">
				<el-table-column type="index" width="150" label="序号" align="center">
				</el-table-column>
				<el-table-column label="获取途径" prop="operName" align="center">
				</el-table-column>
        <el-table-column label="积分值" prop="ruleValue" align="center" sortable>
				</el-table-column>
				<el-table-column label="获取日期" prop="createTime" align="center" sortable>
				</el-table-column>
			</el-table>
			<ui_pagination :pageMessage="{totalCount: this.pointRecords.data && this.pointRecords.totalCount - 0 || 0}" :excuteFunction="pointRecordPaging" :page-sizes="[8,16,32,64]" style="margin-top: 40px;"></ui_pagination>
		</div>
  </div>
</div>
 </el-col>
</template>
<script type="text/ecmascript-6">
import Vue from "vue";
// import * as type from "projectsConfig/config.wl.js";
import { mapGetters, mapActions } from "vuex";
// import { SITE_CONFIG } from "projectConfig";
export default {
    name: "point",
    reused: true,
    props: ["namespace"],
  mounted: function() {
    this.$store.dispatch("personalCenter/queryUser", {
      loadedCallBack: this.loadedCallBack
    });
  },
  data() {
    var validatenumber = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入兑换数额"));
      } else if (!Number.isInteger(value)) {
        callback(new Error("请输入数字"));
      }else if (value === 0) {
        callback(new Error("请输入兑换数额"));
      } else {
        callback();
      }
    };
    return {
      siteId: "",
      rules: {
        number: [{ validator: validatenumber, trigger: "blur" }],
      },
      ruleForm: {
        number: "",
      },
    };
  },
  computed: {
    ...mapGetters("personalCenter/", {
      pointRecords: "getPointRecord",
      account: "getAccount",
    })
  },

  methods: {
    loadedCallBack() {
      this.$store.dispatch("personalCenter/queryPointRecord", {});
    },
    pointRecordPaging({ pageNum, pageSize }) {
      var param = {
        loginName: "",
        pageIndex: pageNum,
        pageSize: pageSize
      };
      this.$store.dispatch("personalCenter/queryPointRecord", param);
    },
    submitForm(ruleForm) {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          var params = {
            number: this.ruleForm.number,
            cb: this.exchangeCallb
          };
          this.$store.dispatch("personalCenter/exchangeVirtualCoin", params);
          this.ruleForm.number = '';  // #42766 个人中心，兑换虚拟币，建议兑换成功后，输入框置空

        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    exchangeCallb(exchangeStatus) {
      if (exchangeStatus == 1) {
        this.$store.dispatch("personalCenter/queryPointRecord", {});
        this.$store.dispatch("personalCenter/queryUser", {
          loadedCallBack: this.loadedCallBack
        });
        this.$message({
          type: "success",
          message: "兑换成功!"
        });
      } else {
        this.$message({
          type: "error",
          message: "积分不够,兑换失败!"
        });
      }
    },
  }
};
</script>
<style>
.re30{
  color:red;
  margin:0 5px;
}
.inputwid{
  width:150px;
}
/*积分*/
/* .wzdh_jf { border:1px solid #d9d9d9; padding:18px 25px 70px 25px;} */
.wzdh_jf .wzdh_jf_duih {width:590px; margin:80px auto; text-align:center;}
.wzdh_jf .wzdh_jf_duih_01 i.jf_duih_03 { background-position:-340px -470px; width:20px; height:20px;}
.wzdh_jf .wzdh_jf_duih_01 input.jf_duih_04{width:143px; height:30px; border:1px solid #e1e1e1; }
.wzdh_jf input.wzdh_jf_btn {background-color: #c50000;border: 0 none;cursor: pointer;height: 28px;line-height:28px;margin-left:20px;margin-top: 20px;width:105px;}
.wzdh_jf .wzdh_jf_sm table{border-collapse:collapse; border:1px solid #e1e1e1; margin:0 auto; width:560px}
.wzdh_jf .wzdh_jf_sm table tr { line-height:34px; vertical-align:middle; text-align:center;}
.wzdh_jf .wzdh_jf_sm table tr.jf_title {background:#f3f3f3;}
.wzdh_jf .wzdh_jf_sm table tr td { border:1px solid #e1e1e1;}
</style>
