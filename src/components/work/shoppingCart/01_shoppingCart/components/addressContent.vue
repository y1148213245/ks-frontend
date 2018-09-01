<!-- 购物车 收货地址组件 created by song 2017/12/26 -->
<template>
  <div class="work_shoppingcart_01_address">
    <div class="address">
      <div class="infoHead">{{getStaticText('receiverAddress') ? getStaticText('receiverAddress') : '收货地址'}}</div>
      <div class="orderContent" :class="{oneline: showAddress === null}">
        <div class="addressInfo" v-if="showAddress && showAddress !== null">
          <!--没有默认地址 就证明一条地址都没有-->
          <span>{{showAddress.contactor}}</span>
          <span>{{showAddress.province + showAddress.city + showAddress.county + showAddress.address}}</span>
          <span>{{showAddress.phone}}</span>
        </div>
        <span v-else>{{getStaticText('pleaseAddNewAddress') ? getStaticText('pleaseAddNewAddress') :'暂无可选地址，您需要新增地址。'}}</span>
        <a href="javascript:void(0)" v-if="addressList && addressList.length > 0" @click="selectOtherAddress()">{{getStaticText('selectOtherAddress') ? getStaticText('selectOtherAddress') : '选择其他收货地址'}}</a>
        <a href="javascript:void(0)" @click="addNewAddress()">{{getStaticText('addNewAddress') ? getStaticText('addNewAddress') : '新增地址'}}</a>
      </div>
    </div>
    <!--选择收货地址模态弹框-->
    <el-dialog :title="getStaticText('selectReceiverAddress') ? getStaticText('selectReceiverAddress') : '选择收货地址'" :visible.sync="addressDialog" :close-on-press-escape="false" :close-on-click-modal="false">
      <ul class="addressUlCon">
        <el-radio-group v-model="selectedAddressId">
          <li v-for="(address, index) in addressList" v-if="addressList && addressList.length" type="none" :key="index">
            <el-radio :label="address.id" @change="selectAddress(address)">
              <span v-text="address.contactor"></span>
              <span>，</span>
              <span>{{ '' + address.province + address.city + address.county + address.address}} </span>
              <span>，</span>
              <span v-text="address.phone"></span>
            </el-radio>
          </li>
        </el-radio-group>
      </ul>
      <div slot="footer" class="dialog-footer">
        <el-button @click="confirmAdd(false)">{{getStaticText('cancel') ? getStaticText('cancel') : '取 消'}}</el-button>
        <el-button type="primary" @click="confirmAdd(true)">{{getStaticText('yes') ? getStaticText('yes') : '确 定'}}</el-button>
      </div>
    </el-dialog>
    <!--END 选择收货地址模态弹框-->
    <!--新增收货地址弹框-->
    <el-dialog :title="getStaticText('addNewReceiverAddress') ? getStaticText('addNewReceiverAddress') : '新增收货地址'" :visible.sync="addAddressDialog" class="newAddAddress" :close-on-press-escape="false" :close-on-click-modal="false" @close="newAddAddressClose">
      <div class="newWrapper">
        <div>
          <label></label>{{getStaticText('receiver') ? getStaticText('receiver') : '收货人'}}：</div>
        <input id="s_contactor" type="text" maxlength="40" @blur="checkContactor()">
        <div class="warningInfo" v-if="emptyContactor">{{this.contactorError}}</div>
      </div>
      <div class="newWrapper">
        <div>
          <label></label>{{getStaticText('receivingArea') ? getStaticText('receivingArea') : '收货地区'}}：</div>
        <div class="selectPCC">
          <select id="s_province" name="s_province" @blur="checkArea()"></select>
          <select id="s_city" name="s_city" @blur="checkArea()"></select>
          <select id="s_county" name="s_county" @blur="checkArea()"></select>
        </div>
        <div class="warningInfo" v-if="emptyPCC">{{getStaticText('pleaseCompleteInformationOfProvincesAndCities') ? getStaticText('pleaseCompleteInformationOfProvincesAndCities') : '请完整的省市信息'}}</div>
      </div>
      <div class="newWrapper">
        <div>
          <label></label>{{getStaticText('detailedAddress') ? getStaticText('detailedAddress') : '详细地址'}}：</div>
        <input id="s_address" type="text" @blur="checkDetail()">
        <div class="warningInfo" v-if="emptyDetail">{{getStaticText('pleaseFillInTheDetailedAddress') ? getStaticText('pleaseFillInTheDetailedAddress') : '请填写详细地址'}}</div>
      </div>
      <div class="newWrapper">
        <div>
          <label></label>{{getStaticText('phone') ? getStaticText('phone') : '联系电话'}}：</div>
        <!--@keypress="checkNumberType($event)"-->
        <input id="s_phone" @blur="checkPhone()" maxlength="11">
        <div class="warningInfo" v-if="emptyPhone">{{phoneError}}</div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="confirmNewAdd(false)">{{getStaticText('cancel') ? getStaticText('cancel') : '取 消'}}</el-button>
        <el-button type="primary" @click="confirmNewAdd(true)" id="testUseAddressLocation">{{getStaticText('yes') ? getStaticText('yes') : '确 定'}}</el-button>
      </div>
    </el-dialog>
    <!--END 新增收货地址弹框-->
  </div>
</template>
<script>
import * as type from "@work/shoppingCart/common/interfaces.js";
import * as interfaces from "@work/login/common/interfaces.js";
import { mapGetters, mapActions } from "vuex";
import $ from "jquery";
export default {
  name: "work_shoppingcart_01_components_address",
  reused: true,
  props: ["namespace", "parentconfig"],
  created: function () {
    this.getMemberInfo().then((member) => {
      this.member.loginName = member.loginName;
      this.loadCallBack();
    });
    this.CONFIG = this.parentconfig && this.parentconfig.addressContent ? this.parentconfig.addressContent : null;
  },
  data () {
    return {
      member: {
        loginName: ''
      },
      labelPosition: "top",
      selectedAddressId: null, // 模态弹框选中地址的id
      addressDialog: false, // 地址选择模态弹框  默认关闭
      addAddressDialog: false, // 新增地址模态弹框  默认关闭
      tempAddress: {}, // 存放选择收货地址弹窗里当前选中的地址
      showAddress: {}, // 当前显示的地址 即当前选择的地址
      emptyContactor: false, // 收货人是否为空    默认不为空
      emptyDetail: false, // 详细地址是否为空  默认不为空
      emptyPhone: false, // 联系电话是否为空  默认不为空
      emptyPCC: false, // 收货地区 省市区是否为空 默认不为空
      phoneError: '',//新建收货地址--联系电话验证信息
      contactorError: '',//新建收货地址--收货人验证信息
      goodsInfo: [],//新建收货地址--验证信息,
      CONFIG: null, // 当前组件的配置 需要从父级组件里面取
    };
  },
  computed: {
    ...mapGetters({
      addressList: "shoppingcart/getAddressList", // 获取用户地址列表
      defaultAddress: "shoppingcart/getDefaultAddress" // 获取用户默认地址
    })
  },
  methods: {
    ...mapActions("login", {
      getMemberInfo: interfaces.ACTION_KEEP_SESSION
    }),
    loadCallBack () {
      var _this = this;
      var params = {
        loginName: this.member.loginName,
        myCallback: function (data) {
          if (data && data.length > 0) {
            _this.$store.dispatch("shoppingcart/" + type.QUERY_DEFAULT_ADDRESS, _this.member.loginName); // 查询默认收货地址
          }
        }
      };
      this.$store.dispatch("shoppingcart/" + type.QUERY_ORDER_ADDRESS, params); // 查询收货地址列表
    },
    selectOtherAddress () {// 选择其他收货地址
      this.selectedAddressId = this.showAddress.id;
      this.addressDialog = true;
    },
    addNewAddress: function () {
      // 新增地址
      this.addAddressDialog = true;
      initDom();

      function initDom () {
        setTimeout(function () {
          if (document.getElementById("s_province")) {
            //解决弹框出来的时候DOM可能还没有加载完成问题
            _init_area(document);
          } else {
            initDom();
          }
        }, 50);
      }
    },
    selectAddress: function (address) {
      // 在模态弹窗中选中某个地址
      this.tempAddress = JSON.parse(JSON.stringify(address));
    },
    confirmAdd: function (flag) {
      // 确认/取消添加收货地址
      this.addressDialog = false;
      if (flag) { // 选择确定才更改所选地址 否则不改变所选地址
        this.showAddress = JSON.parse(JSON.stringify(this.tempAddress));
        this.$emit("deliveryAddress", this.showAddress);
      }
    },
    confirmNewAdd: function (flag) {
      // 确认/取消新增地址
      var _this = this;
      if (flag) {
        this.goodsInfo = [];
        this.checkContactor();
        this.checkPhone();
        this.checkDetail();
        this.checkArea();
        if (this.goodsInfo.find(function (item) { return item == "false"; }) === undefined) { // 都不为空
          var requestParams = {
            param: {
              loginName: this.member.loginName,
              contactor: $("#s_contactor").val(),
              phone: $("#s_phone").val(),
              province: $("#s_province").val(),
              city: $("#s_city").val(),
              county: $("#s_county").val(),
              address: $("#s_address").val(),
              post: "",
              createTime: null,
              updateTime: null,
              id: 0,
              isDefault: "0"
            },
            myCallback: function () {
              if (this.addStatus) { // 新增地址成功
                _this.$message({
                  type: "success",
                  message: _this.getStaticText('newAddressSuccessfullyAdded') ? _this.getStaticText('newAddressSuccessfullyAdded') : "新增地址成功"
                });
                var params = {
                  loginName: _this.member.loginName,
                  myCallback: function () { }
                };
                _this.$store.dispatch("shoppingcart/" + type.QUERY_ORDER_ADDRESS, params);
              } else {
                _this.$message({
                  type: "error",
                  message: _this.getStaticText('newAddressFailed') ? _this.getStaticText('newAddressFailed') : "新增地址失败"
                });
              }
            }
          };
          this.$store.dispatch(
            "shoppingcart/" + type.ADD_ORDER_ADDRESS,
            requestParams
          );
          this.addAddressDialog = false;
        } else {
          return false;
        }
      } else {
        this.addAddressDialog = false;
      }
    },
    newAddAddressClose () {
      // 点击取消/确定/右上角x号的时候都会触发 要初始化数据 因为 elementUI 弹窗会记录上一次写入的值
      $("#s_contactor").val("");
      $("#s_address").val("");
      $("#s_phone").val("");
    },
    checkContactor: function () {
      // 联系人失去焦点校验
      let contactorVal = $("#s_contactor").val();
      this.emptyContactor = false;
      if (contactorVal === "") {
        this.contactorError = this.getStaticText('pleaseFillInTheConsignee') ? this.getStaticText('pleaseFillInTheConsignee') : "请填写收货人";
      }
      if (contactorVal.length > 40) {
        this.contactorError = this.getStaticText('consigneeMustNotExceed40Characters') ? this.getStaticText('consigneeMustNotExceed40Characters') : "收货人不能超过40个字符";
      }
      if (contactorVal === "" || contactorVal.length > 40) {
        this.emptyContactor = true;
        this.goodsInfo.push("false");
      } else {
        this.goodsInfo.push("true");
      }
    },
    checkDetail: function () {
      // 详细地址失去焦点校验
      this.emptyDetail = false;
      if ($("#s_address").val() === "") {
        this.emptyDetail = true;
        this.goodsInfo.push("false");
      } else {
        this.goodsInfo.push("true");
      }
    },
    checkPhone: function () {
      // 联系号码格式校验 只能是数字 并且不能超过11位 ??? input type="number" 踩坑
      this.emptyPhone = false;
      let phoneVal = $("#s_phone").val();
      if (!phoneVal) {
        this.phoneError = this.getStaticText('pleaseFillInTheContactNumber') ? this.getStaticText('pleaseFillInTheContactNumber') : "请填写联系电话";
      }
      // if (!String.fromCharCode(event.keyCode).match(/\d/)) {
      let phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
      if (!(phoneReg.test(phoneVal))) {
        this.emptyPhone = true;
        this.phoneError = "请输入正确的手机号码 "
      }
      if (phoneVal.length > 11) {
        this.phoneError = this.getStaticText('theTelephoneIsLong') ? this.getStaticText('theTelephoneIsLong') : "电话长度过长";
      }
      if (!phoneVal || !(phoneReg.test(phoneVal)) || phoneVal.length > 11) {
        this.emptyPhone = true;
        this.goodsInfo.push("false");
      } else {
        this.goodsInfo.push("true");
      }
    },
    checkArea: function () {
      this.emptyPCC = false
      if (
        $("#s_province").val() === "省份" ||
        $("#s_city").val() === "地级市" ||
        $("#s_county").val() === "市、县级市"
      ) {
        // 省市区没有选择或者没有选择完全
        this.emptyPCC = true;
        this.goodsInfo.push("false");
      } else {
        this.goodsInfo.push("true");
      }
    },
    getStaticText (text) {
      if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]) {
        return this.CONFIG.staticText[text]
      } else {
        return false
      }
    }
  },
  watch: {
    defaultAddress () { // 刚进页面时 将默认地址发广播形式给父组件
      this.showAddress = this.defaultAddress;
      this.$emit("deliveryAddress", this.showAddress);
    },
    addressList (newValue, oldValue) { // 点击新增地址的时候 更新用户地址列表 并且取最后一个地址显示出来
      this.showAddress = newValue[newValue.length - 1];
      this.$emit("deliveryAddress", this.showAddress);
    }
  }
};
</script>
<style>
.work_shoppingcart_01_address .el-form-item:last-child {
  text-align: center;
}
.work_shoppingcart_01_address .el-input__inner {
  height: 32px;
  line-height: 32px;
}
.work_shoppingcart_01_address .el-form--label-top .el-form-item__label {
  padding: 0;
}
.work_shoppingcart_01_address .el-form-item__label {
  line-height: 20px;
}
.work_shoppingcart_01_address .el-form-item__label {
  font-weight: unset;
}
.work_shoppingcart_01_address .selectPCC select {
  height: 32px;
  line-height: 32px;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
}
.work_shoppingcart_01_address .address a {
  color: #20a0ff;
}

.work_shoppingcart_01_address .address .infoHead {
  width: 100%;
  height: 36px;
  line-height: 36px;
  padding-left: 16px;
  background-color: #f6f6f6;
}

.work_shoppingcart_01_address .address .orderContent {
  height: 100px;
  padding-left: 28px;
}

.work_shoppingcart_01_address .address .oneline {
  line-height: 80px;
}

.work_shoppingcart_01_address .address .orderContent a:last-child {
  float: right;
}

.work_shoppingcart_01_address .address .addressInfo {
  height: 55px;
  line-height: 70px;
}

.work_shoppingcart_01_address .address .addressInfo span {
  margin-right: 20px;
}

.work_shoppingcart_01_address .newWrapper .warningInfo {
  font-size: 12px;
  color: #ff4949;
  text-align: left !important;
}

.work_shoppingcart_01_address .addressUlCon li {
  height: 30px;
  line-height: 30px;
}

.work_shoppingcart_01_address .addressUlCon .el-radio-group {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.work_shoppingcart_01_address .newAddAddress .el-dialog__body {
  padding: 16px 80px;
}

.work_shoppingcart_01_address .newAddAddress .newWrapper {
  margin-bottom: 10px;
}

.work_shoppingcart_01_address .newAddAddress .newWrapper .selectPCC {
  display: inline-block;
  margin-top: 5px;
}

.work_shoppingcart_01_address .newAddAddress .newWrapper select {
  min-width: 100px;
  height: 30px;
  line-height: 30px;
  padding-left: 5px;
  border: 1px solid #bfcbd9;
  margin-right: 10px;
}

.work_shoppingcart_01_address .el-dialog__body .newWrapper input {
  width: 80%;
  height: 30px;
  line-height: 30px;
  padding-left: 5px;
  border: 1px solid #bfcbd9;
  margin-top: 5px;
}
.work_shoppingcart_01_address .newAddAddress .newWrapper label:before {
  content: '*';
  color: #f56c6c;
  margin-right: 4px;
}
</style>
