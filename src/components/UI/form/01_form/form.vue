<!-- created by zrn 2018-06-27 -->
<!-- 金融官网应聘填表 -->
<template>
  <div class="ui_form_01">
    <h3 v-if="CONFIG && CONFIG.formTitle.isShow" v-html="CONFIG.formTitle.name"></h3>
    <div class="ui_form_01_upload">
      <el-form ref="form" :model="form" :label-width="CONFIG.labelWidth" :rules="rules" >
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
             <div v-if="item.type === 'radio'">
               <div   >
                <el-radio v-for="(item1,ri) in item.radio" :key="ri" 
                v-if="item.radio"
                v-model="form[item.model]"
                :label="item1.value"
                :class="{uichecked:form.sex==item1.value}"
                >{{item1.label}}</el-radio>
              </div>
             </div> 

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

            <!-- 按钮 -->
            <el-button v-if="item.type=== 'button'" type="primary" @click="submitForm()">{{item.name}}</el-button>
            
          </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import PROJECT_CONFIG from "projectConfig";
import { Post, ValidateRules, getFieldAdapter } from "@common";

export default {
  name: "ui_form_01",
  reused: true,
  props: {
    namespace: String
  },
  data() {
    return {
      CONFIG: null,
      imageUrl: {
        // 图片信息
        url: "",
        fileRecordID: ""
      },
      uploadUrl: "",
      keys: {}, // 接口字段容器
      form: {
        sex: "",
        radio1: 0,
        radio2: 0,
        radio3: 0,
        date1: "" //
      }, // 表单绑定对象
      rules: {
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
      }
    };
  },
  computed: {},
  created() {
    this.CONFIG = PROJECT_CONFIG[this.namespace].form.ui_form_01;
    this.uploadUrl = CONFIG.BASE_URL + this.CONFIG.upload.url;
    this.keys = JSON.parse(
      JSON.stringify(
        getFieldAdapter(this.CONFIG.sysAdapter, this.CONFIG.typeAdapter)
      )
    );
    // 初始化绑定对象
    this.CONFIG.formItem.forEach((val, i) => {
      if (val.model) {
        if (val.type === "checkbox") {
          this.form[val.model] = [];
        } else if (val.type === "radio" && val.radio.length > 0) {
          this.form[val.model] = val.radio[0].value;
        } else {
          this.form[val.model] = "";
        }
      }
    });
    //console.log(this.form);
  },
  mounted() {
    //console.log("mounted");
  },
  methods: {
    submitForm() {
      this.$refs.form.validate(valid => {
        if (this.imageUrl.fileRecordID && valid) {
          let paramsObj = Object.assign({}, this.CONFIG.submit.params);
          for (let key in this.form) {
            if (this.keys[key]) {
              paramsObj.metaMap[this.keys[key]] = this.form[key];
            }
          }
          //console.log(11, paramsObj);
          paramsObj.metaMap["COVERID"] = this.imageUrl.fileRecordID + "";
          paramsObj.metaMap["RESOURCEID"] = this.imageUrl.fileRecordID + "";
          Post(CONFIG.BASE_URL + this.CONFIG.submit.url, paramsObj).then(
            res => {
              let datas = res.data;
              if (datas.status == "success" && datas.data) {
                window.open(this.CONFIG.toUrl);
              }else{
                this.$message({
                  type: "warning",
                  message: "提交失败"
                });
              }
            }
          );
        } else {
          this.$message({
            type: "error",
            message: "请上传图片"
          });
        }
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
