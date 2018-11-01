<template>
  <div v-if="isMemberInfo">
    <div class="info" v-if="currentShow=='modifyInfo'">
      <div class="selectUserMode">
        <el-radio v-model="userMode" label="1">{{getStaticText('ordinaryUserText') ? getStaticText('ordinaryUserText') :'普通用户'}}</el-radio>
        <el-radio v-model="userMode" label="2">{{getStaticText('teacherUserText') ? getStaticText('teacherUserText') :'教师用户'}}</el-radio>
      </div>
      <div>
        <el-form  ref="form" :model="modifyUserNav" label-width="80px">
          <el-form-item :label="getStaticText('name') ? getStaticText('name') :'姓名'" v-if="userMode==1||userMode==2" >
            <el-input v-model="modifyUserNav.username"></el-input>
          </el-form-item>
          <div v-if="userMode==2">
            <el-form-item :label="getStaticText('post') ? getStaticText('post') :'职务'">
              <el-input v-model="modifyUserNav.job"></el-input>
            </el-form-item>
            <el-form-item :label="getStaticText('title') ? getStaticText('title') :'职称'">
              <el-select v-model="modifyUserNav.positio" :placeholder="getStaticText('title') ? getStaticText('title') :'职称'">
                <el-option v-for="(item,index) in modifyUser.positio"  :key="index" :label="item" :value="item">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item :label="getStaticText('phone') ? getStaticText('phone') :'电话'">
              <el-input :disabled="true" style="width: 200px" v-model="modifyUserNav.mobileno" @blur="checkPhone(modifyUserNav.mobileno)"></el-input>
              <span>{{checkPhoneInfo}}</span>
            </el-form-item>
          </div>
          <div v-if="userMode==1">
            <el-form-item :label="getStaticText('industry') ? getStaticText('industry') :'行业'">
              <el-select v-model="modifyUserNav.industry" :placeholder="getStaticText('chooseIndustry') ? getStaticText('chooseIndustry') :'请选择行业'">
                <el-option v-for="(item,index) in modifyUser.industry"  :key="index" :label="item" :value="item">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item :label="getStaticText('educationLevel') ? getStaticText('educationLevel') :'教育程度'" >
              <el-select v-model="modifyUserNav.educated" :placeholder="getStaticText('chooseEducationLevel') ? getStaticText('chooseEducationLevel') :'请选择教育程度'" >
                <el-option v-for="(item,index) in modifyUser.educated"  :key="index" :label="item" :value="item">
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <div v-if="userMode==1||userMode==2" >
            <el-form-item :label="getStaticText('province') ? getStaticText('province') :'所在省份'" >
              <el-select v-model="modifyUserNav.areaInfo" :placeholder="getStaticText('chooseProvince') ? getStaticText('chooseProvince') :'请选择所在省份'" >
                <el-option v-for="(item,index) in modifyUser.areaInfo"  :key="index" :label="item" :value="item">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item :label="getStaticText('specificAddress') ? getStaticText('specificAddress') :'具体地址'">
              <el-input type="textarea" v-model="modifyUserNav.address"></el-input>
            </el-form-item>
          </div>
          <div v-if="userMode==2">
            <el-form-item :label="getStaticText('teachingSchool') ? getStaticText('teachingSchool') :'执教学校'">
              <el-input  v-model="modifyUserNav.company"></el-input>
            </el-form-item>
            <el-form-item :label="getStaticText('faculty') ? getStaticText('faculty') :'所属院系'">
              <el-input  v-model="modifyUserNav.faculty"></el-input>
            </el-form-item>
            <el-form-item :label="getStaticText('staffRoom') ? getStaticText('staffRoom') :'教研室'">
              <el-input  v-model="modifyUserNav.staffRoom"></el-input>
            </el-form-item>
            <el-form-item :label="getStaticText('teachingLevel') ? getStaticText('teachingLevel') :'教学层次'">
              <el-select v-model="modifyUserNav.teachLevel" :placeholder="getStaticText('chooseTeachingLevel') ? getStaticText('chooseTeachingLevel') :'请选择教学层次'">
                <el-option v-for="(item,index) in modifyUser.teachLevel"  :key="index" :label="item" :value="item">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item :label="getStaticText('teachingMajor') ? getStaticText('teachingMajor') :'教学专业'" v-if="userMode==2">
              <el-input  v-model="modifyUserNav.subject"></el-input>
            </el-form-item>
            <el-form-item :label="getStaticText('teachingCourse') ? getStaticText('teachingCourse') :'教学课程'" v-if="userMode==2">
              <el-input type="textarea" v-model="modifyUserNav.teachCourse" ></el-input>
            </el-form-item>
          </div>

          <el-form-item :label="getStaticText('postalCode') ? getStaticText('postalCode') :'邮政编码'" v-if="userMode==2||userMode==1">
            <el-input style="width: 200px" v-model="modifyUserNav.postcode" @blur="checkPostcode(modifyUserNav.postcode)"></el-input><span>{{postcodeInfo}}</span>
          </el-form-item>
          <el-form-item :label="getStaticText('bookClassification') ? getStaticText('bookClassification') :'关注图书分类'" prop="type" v-if="userMode==1||userMode==2">
            <el-checkbox-group v-model="modifyUserNav.bookClassifyConcerned">
              <el-checkbox v-for="(item,index) in modifyUser.bookClassifyConcerned" :key="index" :label="item" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-button type="primary"  class="butt_back" @click="ordinaryUserSave(modifyUserNav)">{{getStaticText('save') ? getStaticText('save') : '保存'}}</el-button>
          <el-button type="primary" @click="showCurrent1" class="butt_back">{{getStaticText('return') ? getStaticText('return') : '返回'}}</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import { mapGetters, mapActions } from "vuex";
  import * as interfaces from '@work/login/common/interfaces.js';
  import PROJECT_CONFIG from "projectConfig";

  export default {
    name: "modifyInfo",
    reused: true,
    props: {
      parentConfig: Object,
      currentShow:''
    },
    data: function() {
      return {
        modifyUserNav:{
          bookClassifyConcerned:[],//关注图书分类
          username:"",//用户名
          industry:'',//请选择行业
          educated:'',//教育程度
          areaInfo:'',//所在省份
          address:"",//具体地址
          job:"",//职务
          positio:'',//职称
          mobileno:"", //电话
          staffRoom:"", //教研室
          teachLevel:'', //教学层次
          subject:"", //教学专业
          faculty:"", //所属院系
          company:"", //执教学校
          teachCourse:"", //教学课程
          postcode:"" //邮政编码
        },
        userMode:"1",//判断是普通用户还是教师用户
        CONFIG: null,
        modifyUser:null,//完善个人信息
        fullLoading: "", //全屏加载框
        checkPhoneInfo: "", //完善个人信息--联系电话验证信息
        postcodeInfo:"",//邮编验证信息
        isMemberInfo:""//是否添加编辑组件
      };
    },
    created() {
      this.CONFIG = this.parentConfig.modifyUser;
      this.modifyUser = JSON.parse(JSON.stringify(this.CONFIG.editMemberInfo.params));
      this.isMemberInfo = this.CONFIG.isMemberInfo;
      this.getMemberByName();
    },
    computed: {
      ...mapGetters("personalCenter/", {
        account: "getAccount"
      })
    },
    methods: {
      ...mapActions('login', {
        action_login: interfaces.ACTION_LOGIN,
      }),
      getMemberByName(){
        axios.get(CONFIG.BASE_URL+this.CONFIG.getMemberInfo.submitUrl+'?loginName='+this.account.loginName)
        .then((res)=>{
          let data = res.data.data;
          this.modifyUserNav = Object.assign(this.modifyUserNav,JSON.parse(JSON.stringify(data)));
          this.modifyUserNav.bookClassifyConcerned = this.modifyUserNav.bookClassifyConcerned.split(',');
        })
        .catch(function(err){
          console.log(err)
        });
      },
      ordinaryUserSave(msg){
        let data=JSON.parse(JSON.stringify(msg));
        data.bookClassifyConcerned=data.bookClassifyConcerned.join();
        axios.post(CONFIG.BASE_URL +this.CONFIG.editMemberInfo.submitUrl+"?loginName="+this.account.loginName,data)
        .then((response)=> {
          if (response.data.result == 1) {   
            this.$message({
              type: 'success',
              message: this.getStaticText("saveFormSuccessfully")
            ? this.getStaticText("saveFormSuccessfully")
            : response.data.data.msg
            })
          }else{
            this.$message({
              type: 'error',
              message: this.getStaticText("saveFormFail")
            ? this.getStaticText("saveFormFail")
            : response.data.error.msg
            })
          }
        })
      },
      checkPhone(value){
        let reg=/^[1][3,4,5,6,7,8,9][0-9]{9}$/
        if (value === "") {
          this.checkPhoneInfo = this.getStaticText("pleaseEnterCellPhoneNumber") ? this.getStaticText("pleaseEnterCellPhoneNumber") : "手机号为空";
        } else if (!reg.test(value)) {
          this.checkPhoneInfo = this.getStaticText("pleaseEnterCorrectCellPhoneNumber") ? this.getStaticText("pleaseEnterCorrectCellPhoneNumber") : "请输入正确的手机号"
        } else {
          this.checkPhoneInfo="手机号正确"
        }
      },
      checkPostcode(value){
        let reg=/^[0-9]{6}$/;
        if (value === "") {
          this.postcodeInfo = this.getStaticText("pleaseEnterCellPostNumber") ? this.getStaticText("pleaseEnterCellPostNumber") : "邮编为空"
        } else if (!reg.test(value)) {
          this.postcodeInfo = this.getStaticText("pleaseEnterCorrectCellPostNumber") ? this.getStaticText("pleaseEnterCorrectCellPostNumber") : "请输入正确的邮编";
        } else {
          this.postcodeInfo="邮编正确"
        }
      },
      /*显示状态*/
      showCurrent1() {
        this.$emit('currentShowF',this.currentShow)
      },
      getStaticText(text) {
        if (this.CONFIG &&this.CONFIG.staticText &&this.CONFIG.staticText[text]) {
          return this.CONFIG.staticText[text];
        } else {
          return false;
        }
      },
    },
    watch:{
      account(nv,ov){
        if(nv.loginName){
          var modifyarr=this.modifyUserNav;
          for(var y in modifyarr){
            for(var x in nv){
              if(y==x&&y!="bookClassifyConcerned"&&nv[x]!="undefined"){
                modifyarr[y]=nv[x];
              }else if(y==x&&y=="bookClassifyConcerned"&&nv[x]!="undefined"){
                nv[x].split(",");
                modifyarr[y]=nv[x];
              }
            }
          }
        }
      }
    }
  };
</script>
<style>
.selectUserMode{
  margin: 15px 0;
}
</style>
