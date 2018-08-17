<!-- created by zrn 2018-06-27 -->
<!-- 金融官网应聘填表 -->
<template>
  <div class="ui_form_01">
    <h3 v-if="CONFIG && CONFIG.formTitle.isShow" v-html="CONFIG.formTitle.name"></h3>
    <div class="ui_form_01_upload">
      <el-form ref="form" :model="form" :label-width="CONFIG.labelWidth?CONFIG.labelWidth:'600'" :rules="rules" >
          <el-form-item v-for="(item, i) in CONFIG.formItem" :key="i" v-bind:class="'ui_form_01_form_item_'+ item.type+'_'+ i" :label="item.label" :prop="item.model">
            <!-- 图片 -->
            <el-upload 
            v-if="item.type === 'fileimg'"
            class="avatar-uploader"
            :action="uploadUrl"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            v-model="form[item.model]">
              <div class="ui_form_01_display_img">
                <img :src="imageUrl.url || require('@static/img/people.jpg')"/>
              </div>
              <el-button v-if="item.btnName">{{item.btnName}}</el-button>
            </el-upload>

            <!-- 其他附件 -->
            <el-upload v-if="item.type === 'file'" v-model="form[item.model]">
              <el-button v-if="item.btnName">{{item.btnName}}</el-button>
            </el-upload>

            <!-- 单选按钮 -->
             <el-radio-group v-if="item.type === 'radio'" v-model="form[item.model]">
                <el-radio v-for="(item1,ri) in item.radio" :key="ri" 
                v-if="item.radio"
                :label="item1.value"
                >{{item1.label}}</el-radio>
             </el-radio-group> 

            <!-- 复选框 -->
            <el-checkbox-group v-if="item.type==='checkbox'" v-model="form[item.model]">
              <el-checkbox v-for="(item2,ci) in item.checkbox" :key="ci" v-if="item.checkbox" :label="item2.value">{{item2.label}}</el-checkbox>
            </el-checkbox-group>

            <!-- 单行输入框 -->
            <el-input v-if="item.type === 'text'" :placeholder="item.placeholder || ''" v-model="form[item.model]"></el-input>

            <!-- 多行输入框 -->
            <el-input v-model="form[item.model]" v-if="item.type === 'textarea'" type="textarea" :rows="item.rows || 5" :placeholder="item.placeholder || ''"></el-input>

            <!--日期选择器-->
            <el-date-picker 
            v-if="item.type === 'date'" 
            type="date" 
            v-model="form[item.model]"
            :placeholder="item.placeholder || ''" 
            :format="item.format" 
            :value-format="item.valueFormat">
            </el-date-picker>

            <!-- 下拉框 -->
            <el-select v-if="item.type==='select'" v-model="form[item.model]" :multiple="item.isMultiple" :placeholder="item.placeholder || ''" :popper-class="item.className">
                <el-option v-for="(option, index) in options[item.id]" :key="index" :label="option.label" :value="option.value"></el-option>
            </el-select>

            <el-cascader v-if="item.type === 'cascader'"
              :options="cascaders"
              v-model="form[item.model]"
              :placeholder="item.placeholder"
              @change="handleItemChange">
            </el-cascader>

            <!-- 额外button -->
            <el-button v-if="item.type=== 'extra-button'" type="primary" :id="item.id || ''">{{item.name}}</el-button>

            <!-- 发送验证码 -->
            <el-button v-if="item.type=== 'button-code'" type="primary" :id="item.id || ''" @click="doSendCode()" :class="{'isdisabled': isDisabled}" :disabled="isDisabled">
              {{sendTxt || item.name}}
              <span v-if="isCountDown">{{time}}s</span>
            </el-button>
            <!-- 提交按钮 -->
            <el-button v-if="item.type=== 'button'" type="primary" @click="submitForm()">{{item.name}}</el-button>
            
          </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import PROJECT_CONFIG from "projectConfig";
import { Post, Get, ValidateRules, getFieldAdapter } from "@common";
import area from "./js/area.js";
import URL from "url";

export default {
  name: "ui_form_01",
  reused: true,
  props: {
    namespace: String
  },
  data() {
    return {
      CONFIG: null,
      correctCheckNum: "",
      isCountDown: false, // 是否正在倒计时
      time: 60,
      isDisabled: false,
      imageUrl: {
        // 图片信息
        url: "",
        fileRecordID: ""
      },
      uploadUrl: "", // 附件上传接口地址
      keys: {}, // 接口字段容器
      form: {
        // 表单绑定对象
      },
      rules: {
        // 默认验证规则
        sysTopic: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { validator: ValidateRules.nameCheck, trigger: "blur" }
        ],
        sex: [{ required: true, message: "请选择性别", trigger: "change" }],
        cardId: [
          { required: true, message: "请输入身份证号", trigger: "blur" },
          { validator: ValidateRules.IDCheckSimple, trigger: "blur" }
        ],
        phone: [
          { required: true, message: "请输入手机号", trigger: "blur" },
          { validator: ValidateRules.mobileCheck, trigger: "blur" }
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { validator: ValidateRules.validateEmail, trigger: "blur" }
        ]
      },
      options: [], //所有下拉框的选项数组
      sendTxt: "", //发送验证码按钮的显示文字
      imgObj: null, // 图片上传配置,
      flag: true, //图片验证结果
      codeFlag: true, // 验证码验证结果
      cascaders: null, // 级联数据源
      cascadersArrs: [], //级联遍历数据,为了取到label的值
      codeModel: "", // 验证码model
      phoneCodeModel: "", // 发送验证码的手机号model
      addressModel: "", //地址model
      detailAddressModel: "", // 详细地址model
      address: "", // 省市区和街道信息组合字符串
      sysTopic: "", // 图书名称
      bookName:""  // 图书名称 - 沈乾
    };
  },
  computed: {},
  created() {
    var uriQuery = URL.parse(document.URL, true).query;
    if (typeof uriQuery.SYS_TOPIC != "undefined") {
      this.bookName = uriQuery.SYS_TOPIC;
    }

    this.CONFIG = PROJECT_CONFIG[this.namespace].form.ui_form_01;
    this.uploadUrl = CONFIG.BASE_URL + this.CONFIG.upload.url;
    this.keys = JSON.parse(
      JSON.stringify(
        getFieldAdapter(this.CONFIG.sysAdapter, this.CONFIG.typeAdapter)
      )
    );
    this.cascaders = area.CityInfo;

    /* 获取验证规则 */
    if (this.CONFIG.rules) {
      this.rules = this.CONFIG.rules;
      if("email" in this.rules){
        this.rules["email"].push({
          validator: ValidateRules.validateEmail, trigger: "blur"
        });
      }

      if("name" in this.rules){
        this.rules["name"].push({
          validator: ValidateRules.nameCheck, trigger: "blur"
        });
      }

      if("telephone" in this.rules){
        this.rules["telephone"].push({
          validator: ValidateRules.mobileCheck, trigger: "blur"
        });
      }

      if("cardId" in this.rules){
        this.rules["cardId"].push({
          validator: ValidateRules.IDCheckSimple, trigger: "blur"
        });
      }

    }
    // 初始化绑定对象
    this.CONFIG.formItem.forEach((val, i) => {
      if (val.model) {
        if (val.type === "checkbox" || val.type === "cascader") {
          this.$set(this.form, val.model, []);
          //this.form[val.model] = []; // 这种写法不会触发视图更新,因为它不在data里
          if (val.address) {
            this.addressModel = val.model;
          }
        } else {
          this.$set(this.form, val.model, "");
          // 获取发送验证码的手机号model
          if (val.isPhone && val.widthCheckCode) {
            this.phoneCodeModel = val.model;
          }

          // 获取详细地址的model
          if (val.detailAddress) {
            this.detailAddressModel = val.model;
          }

          // 获取验证码的model
          if(val.checkCode){
            this.checkCode = val.model;
          }
        }
      }
    });

    this.getSelect();
  },
  mounted() {
    //console.log("mounted");
  },
  methods: {
    doSendCode() {
      this.formatPhoneNumber();
    },
    formatPhoneNumber() {
      // 手机号校验
      let phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
      if (this.form[this.phoneCodeModel] == "") {
        // 手机号为空
        this.$message({
          type: "error",
          message: "请输入手机号"
        });
      } else if (!phoneReg.test(this.form[this.phoneCodeModel])) {
        // 手机号格式有误
        this.$message({
          type: "error",
          message: "手机号格式有误"
        });
      } else {
        // 手机号格式正确 在格式正确的基础上去校验是否已经注册过
        this.sendCode();
      }
    },
    sendCode() {
      this.isDisabled = true;
      //  发送验证码方法
      var inter = null; // 定时器变量
      var _this = this;
      let sendConfig = this.CONFIG.sendCheckNumber;
      let paramsObj = Object.assign({}, sendConfig.params);
      paramsObj.mobileNum = this.form[this.phoneCodeModel];
      this.sendTxt = sendConfig.sendingTxt;
      Get(CONFIG.BASE_URL + sendConfig.url, { params: paramsObj }).then(
        resp => {
          // 发送验证码
          let res = resp.data;
          if (res.result == "1") {
            // 请求成功
            _this.correctCheckNum = res.data; // 请求回来的验证码
            _this.isCountDown = true; // 进入倒计时状态
            _this.time = 60;
            _this.sendTxt = sendConfig.resendTxt;
            inter = setInterval(function() {
              if (_this.time > 0) {
                _this.time = _this.time - 1;
              } else {
                window.clearInterval(inter); // 清除定时器
                _this.isCountDown = false; // 退出倒计时状态
                _this.sendTxt = sendConfig.sendTxt;
                _this.isDisabled = false;
              }
            }, 1000);
          } else {
            // 发送失败
            let errorMsg =
              res.error && res.error.errorMsg
                ? res.error.errorMsg
                : sendConfig.failMsg;
            _this.$message({
              type: "error",
              message: errorMsg
            });
            _this.sendTxt = sendConfig.sendTxt;
          }
        }
      );
    },
    // 获取配置项中所有的select数据
    getSelect() {
      let selectArr = [],
        self = this;
      this.CONFIG.formItem.forEach(function(item, index, arr) {
        if (item.type === "select") {
          selectArr.push(item);
        }

        // 顺带获取图片模块对象
        if (item.type === "fileimg") {
          self.imgObj = item;
        }
      });
      selectArr.forEach(function(item, index, arr) {
        // 判断是从接口获取数据渲染还是静态数据渲染(option)
        if ("url" in item) {
          let param = Object.assign({}, item.params);
          Post(CONFIG.BASE_URL + item.url, param).then(res => {
            if (res.data.length > 0) {
              Vue.set(self.options, item.id, res.data);
            }
          });
        } else {
          Vue.set(self.options, item.id, item.options);
        }
      });
    },

    // 表单提交
    submitForm() {
      this.$refs.form.validate(valid => {
        let paramsObj = Object.assign({}, this.CONFIG.submit.params);
        // 有图片上传并且必传
        if (this.imgObj && this.imgObj.required) {
          if (this.imageUrl.fileRecordID) {
            this.flag = true;
            // 图片特殊处理
            paramsObj.metaMap["COVERID"] = this.imageUrl.fileRecordID + "";
            paramsObj.metaMap["RESOURCEID"] = this.imageUrl.fileRecordID + "";
          } else {
            this.flag = false;
            this.$message({
              type: "error",
              message: "请上传图片"
            });
            return;
          }
        }

        // 若表单中有发送验证码,判断输入的验证码和后台返回的验证码是否一致
        if(this.CONFIG.isCode){
            if(this.form[this.checkCode].trim() === this.correctCheckNum){
              this.codeFlag = true;
            }else{
              this.codeFlag = false;
              this.$message({
                type: "error",
                message: "验证码输入错误"
              });
              return;
            }
        }
        // 验证通过
        if (this.flag && valid && this.codeFlag) {
          for (let key in this.form) {
            if (this.keys[key]) {
              if(key === this.addressModel){
                paramsObj.metaMap[this.keys[key]] = this.address + this.form[this.detailAddressModel];
              }else{
                paramsObj.metaMap[this.keys[key]] = this.form[key];
              }
             
            }
          }

          // 样书申领传图书名称
          if("SYS_TOPIC" in paramsObj.metaMap){
            paramsObj.metaMap["SYS_TOPIC"] = this.bookName ? this.bookName : paramsObj.metaMap["SYS_TOPIC"];
          }
          

          Post(CONFIG.BASE_URL + this.CONFIG.submit.url, paramsObj).then(
            res => {
              let datas = res.data;
              if (datas.status == "success" && datas.data) {
                // window.open(this.CONFIG.toUrl);
                window.location.href = this.CONFIG.toUrl;
              } else {
                this.$message({
                  type: "warning",
                  message: "提交失败"
                });
              }
            }
          );
        }
      });
    },
    // 获取级联对象
    getCascaderObj(val, opt) {
      return val.map(function(value, index, array) {
        for (var itm of opt) {
          if (itm.value == value) {
            opt = itm.children;
            return itm;
          }
        }
        return null;
      });
    },
    // 级联change事件
    handleItemChange(val) {
      let self = this;
      this.cascadersArrs = this.getCascaderObj(val, this.cascaders);
      this.cascadersArrs.map(function(item, index, arr) {
        self.address += item.label;
      });
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl.url =
        CONFIG.BASE_URL + "dynamicFile/stream.do?recordID=" + res.ID;
      this.imageUrl.fileRecordID = res.ID;
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || "image/png" || "image/jpg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("暂不支持" + file.type + "格式的图片");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>
