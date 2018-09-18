/*
 * @Author: song 
 * @Date: 2018-09-08 11:52:11 
 * @Last Modified by: song
 * @Last Modified time: 2018-09-10 10:26:01
 */
<!-- 购物车 发票信息组件 created by song 2017/12/27 -->

<template>
  <div class="work_shoppingcart_01_invoice invoice">
    <div class="infoHead">{{getStaticText('invoiceInfo') ? getStaticText('invoiceInfo') : '发票信息'}}</div>
    <div class="work_shoppingcart_01_invoice_selectinvoice" :class="{orderContent: needInvoice === '0', chooseInvoice: needInvoice === '1'}">
      <span>{{getStaticText('chooseWetherNeedInvoice') ? getStaticText('chooseWetherNeedInvoice') : '选择是否需要发票：'}}</span>
      <template>
        <el-radio-group v-model="needInvoice">
          <el-radio @change="toggleFlag(true)" label="1">{{getStaticText('yes') ? getStaticText('yes'): '是'}}</el-radio>
          <el-radio @change="toggleFlag(false)" label="0">{{getStaticText('no') ? getStaticText('no') : '否'}}</el-radio>
        </el-radio-group>

        <!-- 选择需要发票才显示  显示选择的发票类型 -->
        <div class="orderContents" v-if="showInvoiceContent">
          <span v-text="tempInvoice.invoiceType"></span>
          <span v-if="tempInvoice.invoiceType == '普通发票' || tempInvoice.invoiceType == '일반 령수증'">
            <span v-text="tempInvoice.unReceiptTitle"></span>
            <span v-text="tempInvoice.unTaxpayerCode"></span>
            <span v-text="tempInvoice.receiptId"></span>
          </span>
          <span v-if="tempInvoice.invoiceType == '增值税发票' || tempInvoice.invoiceType == '부가가치세 령수증'">
            <span v-text="tempInvoice.receiptTitle"></span>
            <span v-text="tempInvoice.taxpayerCode"></span>
          </span>
          <a href="javascript:void(0)" @click="selectInvoice()">{{getStaticText('alter') ? getStaticText('alter') : '修改'}}</a>
        </div>
      </template>
    </div>
    <!-- 选择发票类型弹框 -->
    <div class="selectInvoiceWrapper" v-if="needInvoice == '1'">
      <el-dialog :title="getStaticText('chooseInvoiceType') ? getStaticText('chooseInvoiceType') : '选择发票类型'" :visible.sync="invoiceDialog" class="invoiceWrapper" :close-on-press-escape="false" :close-on-click-modal="false" @close="invoiceWrapperClose" :show-close="false">
        <div class="invoiceHead">
          <span @click="selectInvoiceType('普通发票', 1)" :class="{selectedInVoice: curInvoice.invoiceType == '普通发票'}">{{getStaticText('regularInvoice') ? getStaticText('regularInvoice') : '普通发票'}}</span>
          <span @click="selectInvoiceType('增值税发票', 2)" :class="{selectedInVoice: curInvoice.invoiceType == '增值税发票'}">{{getStaticText('valueAddedTaxInvoice') ? getStaticText('valueAddedTaxInvoice') : '增值税发票'}}</span>
        </div>
        <!--发票有三种： 普通发票/增值税发票/电子发票 目前支持前两种-->
        <div class="commonInvoice invoiceCon" v-show="curInvoice.invoiceType == '普通发票' || curInvoice.invoiceType == '일반 령수증'">
          <!-- <div>{{getStaticText('invoiceTitle') ? getStaticText('invoiceTitle') : '发票抬头'}}：</div>
              <input type="text" value="个人" disabled="disabled"> -->
          <el-form :model="curInvoice" :rules="unrules" ref="uncurInvoice" label-width="120px" class="undemo-ruleForm">
            <el-form-item :label="getStaticText('companyName') ? getStaticText('companyName') : '户名'" prop="unReceiptTitle">
              <el-input v-model="curInvoice.unReceiptTitle" id="unReceiptTitle"></el-input>
            </el-form-item>
            <el-form-item :label="getStaticText('taxpayerIdentificationCode') ? getStaticText('taxpayerIdentificationCode') : '税号'" prop="unTaxpayerCode">
              <el-input v-model="curInvoice.unTaxpayerCode" id="unTaxpayerCode"></el-input>
            </el-form-item>
          </el-form>
          <div class="invoiceDetail">{{getStaticText('invoiceContent') ? getStaticText('invoiceContent') : '发票内容'}}：</div>
          <span @click="selectInvoiceDetail('明细')" :class="{invoice: curInvoice.receiptId == '明细'}">{{getStaticText('detail') ? getStaticText('detail') : '明细'}}</span>
          <span @click="selectInvoiceDetail('图书')" :class="{invoice: curInvoice.receiptId == '图书'}">{{getStaticText('stationery') ? getStaticText('stationery') : '图书'}}</span>
        </div>
        <div class="taxInvoice invoiceCon" v-show="curInvoice && (curInvoice.invoiceType == '增值税发票' || curInvoice.invoiceType == '부가가치세 령수증')">
          <el-form :model="curInvoice" :rules="rules" ref="curInvoice" label-width="120px" class="demo-ruleForm">
            <el-form-item :label="getStaticText('companyName') ? getStaticText('companyName') : '户名'" prop="receiptTitle">
              <el-input v-model="curInvoice.receiptTitle" id="receiptTitle"></el-input>
            </el-form-item>
            <el-form-item :label="getStaticText('taxpayerIdentificationCode') ? getStaticText('taxpayerIdentificationCode') : '税号'" prop="taxpayerCode">
              <el-input v-model="curInvoice.taxpayerCode" id="taxpayerCode"></el-input>
            </el-form-item>
            <el-form-item :label="getStaticText('registeredAddress') ? getStaticText('registeredAddress') : '地址'" prop="companyAddress">
              <el-input v-model="curInvoice.companyAddress" id="companyAddress"></el-input>
            </el-form-item>
            <el-form-item :label="getStaticText('registeredTelephone') ? getStaticText('registeredTelephone') : '电话'" prop="companyPhone">
              <el-input v-model="curInvoice.companyPhone" id="companyPhone"></el-input>
            </el-form-item>
            <el-form-item :label="getStaticText('depositBank') ? getStaticText('depositBank') : '开户银行'" prop="bankName">
              <el-input v-model="curInvoice.bankName" id="bankName"></el-input>
            </el-form-item>
            <el-form-item :label="getStaticText('bankAccount') ? getStaticText('bankAccount') : '银行账户'" prop="bankAccount">
              <el-input v-model="curInvoice.bankAccount" id="bankAccount"></el-input>
            </el-form-item>
          </el-form>
        </div>

        <div class="invoiceConSureDiv">
          <el-button type="primary" @click="comfirmNoInvoice()" id="noInvoice">{{getStaticText('noInvoice') ? getStaticText('noInvoice') : '不需要发票'}}</el-button>
          <el-button type="primary" @click="confirmAddInvoice(curInvoice.receiptType == 1 ? 'uncurInvoice':'curInvoice')" id="invoiceConSure">{{getStaticText('confirm') ? getStaticText('confirm') : '确 定'}}</el-button>
        </div>
      </el-dialog>
    </div>
    <!-- END 选择发票类型弹框 -->
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "work_shoppingcart_01_components_invoice",
  reused: true,
  props: ["namespace", "parentconfig"],
  data () {
    return {
      rules: {},
      invoiceDialog: true,   // 选择发票类型弹框 默认关闭
      receiptTitle: false,    // 户名提示信息 为空时才显示
      taxpayerCode: false,    // 纳税人识别号提示信息 为空时才显示
      companyAddress: false,  // 地址提示信息 为空才显示
      companyPhone: false,    // 电话提示信息 为空才显示
      bankName: false,        // 开户银行提示信息
      bankAccount: false,     // 开户账号提示信息
      curInvoice: {           // 模态弹窗中填写的发票信息
        invoiceType: "普通发票", // 发票类型 默认显示普通发票
        receiptType: "1",       // 1:普通发票  2:增值税发票
        receiptId: "明细",      // 普通发票的明细  默认显示明细
        unReceiptTitle: "", // 普通发票的户名
        unTaxpayerCode: "", // 普通发票的税号
        receiptTitle: "",       // 户名
        taxpayerCode: "",       // 纳税人识别号
        companyAddress: "",     // 公司住址 即地址
        companyPhone: "",       // 公司联系方式 即电话
        bankName: "",           // 开户银行
        bankAccount: ""         //开户账号
      },
      tempInvoice: {        // 显示出来的信息
        invoiceType: "", // 发票类型 默认显示普通发票
        receiptType: "1",       // 1:普通发票  2:增值税发票
        receiptId: "",      // 普通发票的明细  默认显示明细
        unReceiptTitle: "", // 普通发票的户名
        unTaxpayerCode: "", // 普通发票的税号
        receiptTitle: "",       // 户名
        taxpayerCode: "",       // 纳税人识别号
        companyAddress: "",     // 公司住址 即地址
        companyPhone: "",       // 公司联系方式 即电话
        bankName: "",           // 开户银行
        bankAccount: ""         // 开户账号
      },
      CONFIG: null, // 当前组件的配置 需要从父级组件里面取
      needInvoice: "0",     // 是否需要发票： 1 是    0 否  默认不需要发票 
      showInvoiceContent: false, // 是否在页面显示发票信息 
    };
  },
  created () {
    this.CONFIG = this.parentconfig && this.parentconfig.invoiceContent ? this.parentconfig.invoiceContent : null;
    this.unrules = {
      unReceiptTitle: [
        { required: true, message: this.getStaticText('pleaseFillInTheCompanyName') ? this.getStaticText('pleaseFillInTheCompanyName') : '请填写户名', trigger: 'blur' },
      ],
      unTaxpayerCode: [
        { required: true, message: this.getStaticText('pleaseFillInTheTaxpayerIdentificationNumber') ? this.getStaticText('pleaseFillInTheTaxpayerIdentificationNumber') : '请填写税号', trigger: 'blur' },
        { max: 20, message: this.getStaticText('theTaxpayerIdentificationNumberShallNotExceed20Characters') ? this.getStaticText('theTaxpayerIdentificationNumberShallNotExceed20Characters') : '税号不能超过20个字符', trigger: 'blur' }
      ]
    };
    this.rules = {
      receiptTitle: [
        { required: true, message: this.getStaticText('pleaseFillInTheCompanyName') ? this.getStaticText('pleaseFillInTheCompanyName') : '请填写户名', trigger: 'blur' },
      ],
      taxpayerCode: [
        { required: true, message: this.getStaticText('pleaseFillInTheTaxpayerIdentificationNumber') ? this.getStaticText('pleaseFillInTheTaxpayerIdentificationNumber') : '请填写税号', trigger: 'blur' },
        { max: 20, message: this.getStaticText('theTaxpayerIdentificationNumberShallNotExceed20Characters') ? this.getStaticText('theTaxpayerIdentificationNumberShallNotExceed20Characters') : '税号不能超过20个字符', trigger: 'blur' }
      ],
      companyAddress: [
        { required: true, message: this.getStaticText('pleaseFillInTheRegisteredAddress') ? this.getStaticText('pleaseFillInTheRegisteredAddress') : '请填写地址', trigger: 'blur' }
      ],
      companyPhone: [
        { required: true, message: this.getStaticText('pleaseFillInTheRegistrationNumber') ? this.getStaticText('pleaseFillInTheRegistrationNumber') : '请填写电话', trigger: 'blur' }
      ],
      bankName: [
        { required: true, message: this.getStaticText('pleaseFillOutTheOpeningBank') ? this.getStaticText('pleaseFillOutTheOpeningBank') : '请填写开户银行', trigger: 'blur' },
        { max: 21, message: this.getStaticText('theOpeningBankCannotExceed21Characters') ? this.getStaticText('theOpeningBankCannotExceed21Characters') : '开户银行不能超过21个字符', trigger: 'blur' }
      ],
      bankAccount: [
        { required: true, message: this.getStaticText('pleaseFillOutYourBankAccount') ? this.getStaticText('pleaseFillOutYourBankAccount') : '请填写银行账户', trigger: 'blur' }
      ]
    };
  },
  methods: {
    toggleFlag (flag) { // 切换是否需要发票
      this.needInvoice = flag ? "1" : "0";
      this.invoiceDialog = flag ? true : false;
      if (!flag) { // 不需要发票
        this.showInvoiceContent = false;
      }
    },
    invoiceWrapperClose: function () {
      this.invoiceDialog = false;
      this.curInvoice = {  // // 点击取消/确定/右上角x号的时候都会触发 要初始化数据 因为 elementUI 弹窗会记录上一次写入的值
        invoiceType: this.getStaticText('regularInvoice') ? this.getStaticText('regularInvoice') : "普通发票", // 发票类型 默认显示普通发票
        receiptType: "",  // 1普通 2增值税发票
        receiptId: "",     // 普通发票的明细  默认显示明细
        unReceiptTitle: "", // 普通发票的户名
        unTaxpayerCode: "", // 普通发票的税号
        receiptTitle: "",      // 户名
        taxpayerCode: "",      // 纳税人识别号
        companyAddress: "",    // 公司住址
        companyPhone: "",      // 公司联系方式
        bankName: "",          // 开户银行
        bankAccount: ""        //开户账号
      };
    },
    checkNumberTypes: function (event) {  // 联系号码不得超过11位
      if (!String.fromCharCode(event.keyCode).match(/\d/)) {
        event.preventDefault();
      }
      if ($("#companyPhone").val().length > 10) {
        event.preventDefault();
      }
    },
    checkAccountType: function (event) {  // 开户银行账户不得超过21位
      if (!String.fromCharCode(event.keyCode).match(/\d/)) {
        event.preventDefault();
      }
      if ($("#bankAccount").val().length > 21) {
        event.preventDefault();
      }
    },
    checkTaxPayer: function (event) {  // 纳税人识别号不得超过20位 且只能是数字和字母
      if (!((event.keyCode >= 97 && event.keyCode <= 122) || (event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 48 && event.keyCode <= 57))) {
        event.preventDefault();
      }
    },
    selectInvoice: function () { // 修改操作
      this.curInvoice = JSON.parse(JSON.stringify(this.tempInvoice)); // 点击“修改”打开的模态弹框要取当前显示的值
      this.invoiceDialog = true;
    },
    selectInvoiceType: function (item, ind) {      // 选择发票类型：普通发票 增值税发票
      this.curInvoice.invoiceType = item; // 发票类型：普通发票 增值税发票
      this.curInvoice.receiptType = ind; // 发票类型Id  1:普通发票  2：增值税发票
    },
    selectInvoiceDetail: function (item) {   // 普通发票的发票内容 有四种：明细 图书 电脑配件 耗材
      this.curInvoice.receiptId = item;
    },
    confirmAddInvoice: function (formName) { // 确定添加发票信息
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.dealInvoice();
        } else {
          return false;
        }
      });
    },
    dealInvoice () {
      this.invoiceDialog = false;
      this.tempInvoice = JSON.parse(JSON.stringify(this.curInvoice));
      this.tempInvoice.receiptType = this.curInvoice.invoiceType === "普通发票" ? 1 : 2;
      this.showInvoiceContent = true;
      if(this.tempInvoice.invoiceType=='普通发票'|| this.tempInvoice.invoiceType == '일반 령수증'){
        this.tempInvoice.invoiceType=this.getStaticText('regularInvoice') ? this.getStaticText('regularInvoice') : '普通发票';
        if(this.tempInvoice.receiptId=='明细'|| this.tempInvoice.receiptId == '명세'){
          this.tempInvoice.receiptId=this.getStaticText('detail') ? this.getStaticText('detail') :'明细';
        }else{
          this.tempInvoice.receiptId=this.getStaticText('stationery') ? this.getStaticText('stationery') :'图书';
        }
      }else{
        this.tempInvoice.invoiceType=this.getStaticText('valueAddedTaxInvoice') ? this.getStaticText('valueAddedTaxInvoice') : '增值税发票';
      }
      this.$emit('invoiceInfo', this.tempInvoice);
    },
    getStaticText (text) {
      if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]) {
        return this.CONFIG.staticText[text]
      } else {
        return false
      }
    },
    comfirmNoInvoice () { // 不需要发票
      this.needInvoice = '0';
      this.invoiceDialog = false;
      this.showInvoiceContent = false;
    }
  },
  watch: {
    needInvoice (newVal, oldVal) {
      this.needInvoice = newVal;
      this.$emit('needinvoiceFlag', newVal);
    }
  }
}

</script>
<style>
.work_shoppingcart_01_invoice .warningInfo {
  font-size: 12px;
  color: #ff4949;
  text-align: left !important;
}

.work_shoppingcart_01_invoice .invoiceWrapper .el-dialog {
  height: auto;
}

.work_shoppingcart_01_invoice .invoiceWrapper .el-dialog__footer {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

.work_shoppingcart_01_invoice .invoiceWrapper .invoiceHead span,
.work_shoppingcart_01_invoice .invoiceWrapper .commonInvoice span {
  position: relative;
  margin-right: 10px;
  border: 1px solid #ebebeb;
  padding: 6px 24px;
  cursor: pointer;
}

.work_shoppingcart_01_invoice .invoiceWrapper .invoiceCon {
  margin-top: 22px;
}

.work_shoppingcart_01_invoice .invoiceWrapper .commonInvoice .invoice {
  border: 2px solid #e4393c;
}

.work_shoppingcart_01_invoice .invoiceWrapper .invoiceCon input {
  width: 55%;
  height: 30px;
  line-height: 30px;
  padding-left: 5px;
  border: 1px solid #bfcbd9;
  margin-top: 5px;
}

.work_shoppingcart_01_invoice .invoiceWrapper .invoiceDetail {
  margin-bottom: 20px;
}

.work_shoppingcart_01_invoice .invoiceWrapper .taxInvoice .invoiceInfo {
  display: inline-block;
  width: 110px;
  text-align: right;
}

.work_shoppingcart_01_invoice .invoiceWrapper .invoiceHead .selectedInVoice {
  border: 2px solid #e4393c;
}

.work_shoppingcart_01_invoice .work_shoppingcart_01_invoice_selectinvoice {
  display: table-cell;
  vertical-align: middle;
}

.work_shoppingcart_01_invoice .orderContents a {
  color: #20a0ff;
}

.work_shoppingcart_01_invoice .orderContents {
  /* height: 40px;
  line-height: 40px;
  padding-left: 28px;*/
}

.work_shoppingcart_01_invoice .orderContents span {
  margin-right: 20px;
}
.work_shoppingcart_01_invoice .el-form-item__label {
  line-height: 35px;
}
.work_shoppingcart_01_invoice div.el-form-item {
  margin-bottom: 0;
}
.work_shoppingcart_01_invoice .invoiceConSureDiv {
  padding-right: 20px;
  text-align: right;
}
.work_shoppingcart_01_invoice .el-form-item__error {
  left: 60%;
  top: 10px;
}
</style>
