<!-- 购物车 发票信息组件 created by song 2017/12/27 -->
<template>
  <div class="work_shoppingcart_01_invoice">
        <!-- 选择发票类型弹框 -->
        <el-dialog title="选择发票类型" :visible.sync="invoiceDialog" class="invoiceWrapper" :close-on-press-escape="false"
                   :close-on-click-modal="false" @close="invoiceWrapperClose">
          <div class="invoiceHead">
            <span @click="selectInvoiceType('普通发票')" :class="{selectedInVoice: curInvoice.invoiceType == '普通发票'}">普通发票</span>
            <span @click="selectInvoiceType('增值税发票')" :class="{selectedInVoice: curInvoice.invoiceType == '增值税发票'}">增值税发票</span>
          </div>
          <!--发票有三种： 普通纸质发票/电子发票/增值税发票 目前支持前两种-->
          <div class="commonInvoice invoiceCon" v-if="curInvoice.invoiceType == '普通发票'">
            <div>发票抬头：</div>
            <input type="text" value="个人" disabled="disabled">
            <div class="invoiceDetail">发票内容：</div>
            <span @click="selectInvoiceDetail('明细')" :class="{invoice: curInvoice.receiptId == '明细'}">明细</span>
            <span @click="selectInvoiceDetail('办公用品')" :class="{invoice: curInvoice.receiptId == '办公用品'}">办公用品</span>
            <span @click="selectInvoiceDetail('电脑配件')"
                  :class="{invoice: curInvoice.receiptId == '电脑配件'}">电脑配件</span>
            <span @click="selectInvoiceDetail('耗材')" :class="{invoice: curInvoice.receiptId == '耗材'}">耗材</span>
          </div>
          <div class="taxInvoice invoiceCon" v-if="curInvoice.invoiceType == '增值税发票'">
            <div>
              <span class="invoiceInfo"><span style="color: red;">* </span>单位名称：</span>
              <input id="receiptTitle" type="text" v-model="curInvoice.receiptTitle" @blur="checkReceiptTitle()">
              <span class="warningInfo" v-if="receiptTitle">请填写单位名称</span>
            </div>
            <div>
              <span class="invoiceInfo"><span style="color: red;">* </span>纳税人识别码：</span>
              <input id="taxpayerCode" type="text" v-model="curInvoice.taxpayerCode" @blur="checkTaxpayerCode()"
                     @keypress="checkTaxPayer($event)" maxlength="20">
              <span class="warningInfo" v-if="taxpayerCode">请填写纳税人识别号</span>
            </div>
            <div>
              <span class="invoiceInfo"><span style="color: red;">* </span>注册地址：</span>
              <input id="companyAddress" type="text" v-model="curInvoice.companyAddress" @blur="checkCompanyAddress()">
              <span class="warningInfo" v-if="companyAddress">请填写注册地址</span>
            </div>
            <div>
              <span class="invoiceInfo"><span style="color: red;">* </span>注册电话：</span>
              <input id="companyPhone" type="number" v-model="curInvoice.companyPhone" @blur="checkCompanyPhone()"
                     @keypress="checkNumberTypes($event)">
              <span class="warningInfo" v-if="companyPhone">请填写注册电话</span>
            </div>
            <div>
              <span class="invoiceInfo"><span style="color: red;">* </span>开户银行：</span>
              <input id="bankName" type="text" v-model="curInvoice.bankName" @blur="checkBankName()">
              <span class="warningInfo" v-if="bankName">请填写开户银行</span>
            </div>
            <div>
              <span class="invoiceInfo"><span style="color: red;">* </span>银行账户：</span>
              <input id="bankAccount" type="number" v-model="curInvoice.bankAccount" @blur="checkBankAccount()"
                     @keypress="checkAccountType($event)" maxlength="21">
              <span class="warningInfo" v-if="bankAccount">请填写银行账户</span>
            </div>
          </div>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="confirmAddInvoice()">确 定</el-button>
          </div>
        </el-dialog>
        <!-- END 选择发票类型弹框 -->
        <div class="orderContents">
            <span v-text="tempInvoice.invoiceType"></span>
            <span v-if="tempInvoice.invoiceType == '普通发票'">
                <span v-text="tempInvoice.receipttypes"></span>
                <span v-text="tempInvoice.receiptId"></span>
            </span>
            <span v-if="tempInvoice.invoiceType == '增值税发票'">
                <span v-text="tempInvoice.receiptTitle"></span>
                <span v-text="tempInvoice.taxpayerCode"></span>
            </span>
            <a href="javascript:void(0)" @click="selectInvoice()">修改</a>
        </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
    name: "work_shoppingcart_01_components_invoice",
    reused: true,
    props: ["namespace"],
    data () {
        return {
            invoiceDialog: false,   // 选择发票类型弹框 默认关闭
            receiptTitle: false,    // 单位名称提示信息 为空时才显示
            taxpayerCode: false,    // 纳税人识别号提示信息 为空时才显示
            companyAddress: false,  // 注册地址提示信息 为空才显示
            companyPhone: false,    // 注册电话提示信息 为空才显示
            bankName: false,        // 开户银行提示信息
            bankAccount: false,     // 开户账号提示信息
            curInvoice: {           // 模态弹窗中填写的发票信息
                invoiceType: "普通发票", // 发票类型 默认显示普通发票
                receipttypes: "个人",
                receiptType: "1",       // 1:个人  2:单位
                receiptId: "明细",      // 普通发票的明细  默认显示明细
                receiptTitle: "",       // 单位名称
                taxpayerCode: "",       // 纳税人识别号
                companyAddress: "",     // 公司住址 即注册地址
                companyPhone: "",       // 公司联系方式 即注册电话
                bankName: "",           // 开户银行
                bankAccount: ""         //开户账号
            },
            tempInvoice: {        // 显示出来的信息
                invoiceType: "普通发票", // 发票类型 默认显示普通发票
                receipttypes: "个人",
                receiptType: "1",       // 1:个人  2:单位
                receiptId: "明细",      // 普通发票的明细  默认显示明细
                receiptTitle: "",       // 公司名称
                taxpayerCode: "",       // 纳税人识别号
                companyAddress: "",     // 公司住址 即注册地址
                companyPhone: "",       // 公司联系方式 即注册电话
                bankName: "",           // 开户银行
                bankAccount: ""         // 开户账号
            },
        };
    },
    computed: {},
    mounted() {},
    methods: {
        invoiceWrapperClose: function() {
            this.invoiceDialog = false;
            this.curInvoice = {  // // 点击取消/确定/右上角x号的时候都会触发 要初始化数据 因为 elementUI 弹窗会记录上一次写入的值
                invoiceType: "普通发票", // 发票类型 默认显示普通发票
                receipttypes: "个人",
                receiptType: "1",      // 1:个人  2:单位
                receiptId: "明细",     // 普通发票的明细  默认显示明细
                receiptTitle: "",      // 公司名称
                taxpayerCode: "",      // 纳税人识别号
                companyAddress: "",    // 公司住址
                companyPhone: "",      // 公司联系方式
                bankName: "",          // 开户银行
                bankAccount: ""        //开户账号
            };
        },
        checkNumberTypes: function(event) {  // 联系号码不得超过11位
            if (!String.fromCharCode(event.keyCode).match(/\d/)) {
                event.preventDefault();
            }
            if ($("#companyPhone").val().length > 10) {
                event.preventDefault();
            }
        },
        checkAccountType: function(event) {  // 开户银行账户不得超过21位
            if (!String.fromCharCode(event.keyCode).match(/\d/)) {
                event.preventDefault();
            }
            if ($("#bankAccount").val().length > 21) {
                event.preventDefault();
            }
        },
        checkTaxPayer: function(event) {  // 纳税人识别号不得超过20位 且只能是数字和字母
            if ( !( (event.keyCode >= 97 && event.keyCode <= 122) || (event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 48 &&  event.keyCode <= 57) )) {
                event.preventDefault();
            }
        },
        selectInvoice: function() {
            this.invoiceDialog = true;
        },
        selectInvoiceType: function(item) {      // 选择发票类型：普通发票 增值税发票
            this.curInvoice.invoiceType = item;
        },
        selectInvoiceDetail: function(item) {   // 普通发票的发票内容 有四种：明细 办公用品 电脑配件 耗材
            this.curInvoice.receiptId = item;
        },
        checkReceiptTitle: function() {     // 单位名称失去焦点校验
            this.receiptTitle = $("#receiptTitle").val() === "" ? true : false;
        },
        checkTaxpayerCode: function() {    // 纳税人识别号失去焦点校验
            this.taxpayerCode = $("#taxpayerCode").val() === "" ? true : false;
        },
        checkCompanyAddress: function() {  // 注册地址失去焦点校验
            this.companyAddress = $("#companyAddress").val() === "" ? true : false;
        },
        checkCompanyPhone: function() {    // 注册电话失去焦点校验
            this.companyPhone = $("#companyPhone").val() === "" ? true : false;
        },
        checkBankName: function() {        // 开户银行名称失去焦点校验
            this.bankName = $("#bankName").val() === "" ? true : false;
        },
        checkBankAccount: function() {    // 开户账号失去焦点校验
            this.bankAccount = $("#bankAccount").val() === "" ? true : false;
        },
        confirmAddInvoice: function() {
            if ($("#receiptTitle").val() === "") {
                this.receiptTitle = true;
                return false;
            } else if ($("#taxpayerCode").val() === "") {
                this.taxpayerCode = true;
                return false;
            } else if ($("#companyAddress").val() === "") {
                this.companyAddress = true;
                return false;
            } else if ($("#companyPhone").val() === "") {
                this.companyPhone = true;
                return false;
            } else if ($("#bankName").val() === "") {
                this.bankName = true;
                return false;
            } else if ($("#bankAccount").val() === "") {
                this.bankAccount = true;
                return false;
            } else {
                this.invoiceDialog = false;
                this.tempInvoice = JSON.parse(JSON.stringify(this.curInvoice));
                this.tempInvoice.receiptType = this.curInvoice.invoiceType === "普通发票" ? 1 : 2;
                this.$emit('invoiceInfo', this.tempInvoice);
            }
        },
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
  height: 400px;
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

.work_shoppingcart_01_invoice .invoiceWrapper .commonInvoice div {
  margin-top: 18px;
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

.work_shoppingcart_01_invoice .orderContents a {
  color: #20a0ff;
}

.work_shoppingcart_01_invoice .orderContents {
  height: 40px;
  line-height: 40px;
  padding-left: 28px;
}

.work_shoppingcart_01_invoice  .orderContents span {
  margin-right: 20px;
}

</style>