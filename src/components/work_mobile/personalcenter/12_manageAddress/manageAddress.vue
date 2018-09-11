<template>
    <div class="work_mobile_personalcenter_12">
      <van-loading color="black" v-if="isLoading"/>
      <ul class="work_mobile_personalcenter_12_ul">
        <li class="work_mobile_personalcenter_12_li" v-for="item in list">
          <div class="work_mobile_personalcenter_12_li_nameandtel">
            <span class="work_mobile_personalcenter_12_li_name" v-text="item.contactor"></span>
            <span class="work_mobile_personalcenter_12_li_tel" v-text="item.phone"></span>
          </div>
          <div class="work_mobile_personalcenter_12_li_address" v-text="item.province+item.city+item.county+item.address"></div>
          <div class="work_mobile_personalcenter_12_li_btns">
            <input type="radio" name="default" :id="item.id" :checked="item.isDefault == '1'" @click="setDefaultAddress(item)"><label :for="item.id" v-text="display.setDefault"></label>
              <button class="work_mobile_personalcenter_12_li_btns_edit" v-text="display.edit" @click="EditAddress(item)"></button>
            <button class="work_mobile_personalcenter_12_li_btns_delete" v-text="display.delete" @click="deleteAddress(item)"></button>
          </div>
        </li>
      </ul>
      <button class="work_mobile_personalcenter_12_addAddress" v-text="display.addAddress" @click="addAddress"></button>
      <van-dialog
        v-model="show"
        :showConfirmButton="isShowConfirmButton"
        :showCancelButton="isShowCancelButton"
        :closeOnClickOverlay="isCloseOnClickOverlay"
        :before-close="beforeClose">

        <van-address-edit
          :area-list="areaList"
          :show-delete="showDelete"
          :address-info="addressInfo"
          :show-postal="isShowPostal"
          :show-set-default="isShowDefault"
          :tel-validator ="telValidator"
          @save="onSave"
          @delete="onDelete">
        </van-address-edit>

      </van-dialog>
    </div>
</template>

<script>
  import { Post, Get, mobileLoading } from "@common";
  import { mapGetters } from 'vuex';
  import * as interfaces from "@work/login/common/interfaces.js";
  import PROJECT_CONFIG from 'projectConfig';
  import areaList from "@common/utils/areaList.js";
  import Vue from "vue";
  import { Dialog, AddressEdit, Loading, Toast } from 'vant';
  Vue.use(AddressEdit).use(Loading);

  export default {
    name: "work_mobile_personalcenter_12",
    props: ['namespace'],
    reused: true,
    data(){
      return {
        loginName: '',
        isLoading: 'false',
        CONFIG: null,     //获取组件配置的
        display: null,    //展示组件静态文本的
        chosenAddressId: '1',  //选择的地址id
        list: [],  //地址列表
        show: false,  //是否显示弹窗
        isShowConfirmButton: false,  //是否展示弹窗确认按钮
        isShowCancelButton: true, // 是否展示弹窗取消按钮
        isCloseOnClickOverlay: true,  //点击遮罩层关闭弹窗
        addressInfo: {},   //收货人信息
        isShowPostal: true,  //是否显示邮编
        isShowDefault: true,  //显示默认地址栏
        areaList: areaList,  //地区列表
        isEditDialog: '',  //判断是编辑弹窗还是新建地址弹窗 编辑（0），新建（1）
        showDelete: false,
        areaCode: ''
      }
    },
    computed: {
      ...mapGetters("login", {
        member: interfaces.GET_MEMBER
      }),
    },
//    beforeCreate(){
//      let urlData=window.location.href;
//      var bluefile =urlData.match(/\?modal=(.*)/)
//      var urlparameter;
//      if(bluefile!=null){
//        urlparameter=bluefile[1]
//      }
//      if(urlparameter=="details"){//判断是否进入订单详情页的详情页
//        let urlDress = urlData.substring(0, urlData.indexOf("?"));
//        location.href=urlDress;
//        location.reload()
//      }
//    },
    created(){
      //获取配置文件中的数据
      this.CONFIG = PROJECT_CONFIG[this.namespace].work_mobile_personalcenter.work_mobile_personalcenter_12;
      this.display = this.CONFIG.display;
      this.addressInfo = this.CONFIG.addressInfo;
      let urlData=window.location.href;
      var bluefile =urlData.substring(urlData.indexOf("=")+1, urlData.indexOf("#"))
      if(bluefile=="details"){
        this.show = true;
        this.isEditDialog = true;
      }
    },
    mounted(){
      //发广播
      this.$bus.$emit(this.CONFIG.emitEvent.contextEventName, this.display.navTitle);
    },
    methods: {
      EditAddress(item){
        //需要将表单传过来的数据接收到，由于数据格式字段不一样，所以一个一个接受
        this.addressInfo.id = item.id;
        this.addressInfo.name = item.contactor;
        this.addressInfo.tel = item.phone;
        this.addressInfo.province = item.province;
        this.addressInfo.city = item.city;
        this.addressInfo.county = item.county;
        for (var i in areaList.county_list){
          if(item.county&&areaList.county_list[i]==item.county){  //通过item.county获取areaCode值
            this.areaCode=i;
          }
        }
        this.addressInfo.address_detail = item.address;
        this.addressInfo.postal_code = item.post;
        this.addressInfo.area_code = this.areaCode;
        this.addressInfo.is_default = item.isDefault == '1' ? true : false;
        var urlData=window.location.href;
        let urlDress = urlData.substring(0, urlData.indexOf("?"));
        let splicingUrl=urlData.substring(0, urlData.indexOf("#"));
        let splicingUrlend=urlData.substring(urlData.indexOf("#"), urlData.length);
        var jumpEditPage=splicingUrl+"?modal=details"+splicingUrlend
        if(urlDress==""){
          history.pushState(null, "", jumpEditPage);
          this.show = true;
          this.isEditDialog = true;
        }else{
          this.show = true;
          this.isEditDialog = true;
        }
      },
      addAddress(){
        this.addressInfo = {
          id: '',
          name: '',
          tel: '',
          province: '',
          city: '',
          county: '',
          address_detail: '',
          area_code: '',
          postal_code: '',
          is_default: false,
        };

        var urlData=window.location.href;
        let urlDress = urlData.substring(0, urlData.indexOf("?"));
        let splicingUrl=urlData.substring(0, urlData.indexOf("#"));
        let splicingUrlend=urlData.substring(urlData.indexOf("#"), urlData.length);
        var jumpEditPage=splicingUrl+"?modal=details"+splicingUrlend
        if(urlDress==""){
          history.pushState(null, "", jumpEditPage);
          this.show = true;
          this.isEditDialog = false
        }else{
          this.show = true;
          this.isEditDialog = false
        }
      },
      deleteAddress(item){
        debugger;
        Dialog.confirm({
          message: this.display.sureToDeleteAddress
        }).then(() => {
          Post(CONFIG.BASE_URL + this.CONFIG.deleteAddress + '?ids='+item.id).then((resp) => {
            let res = resp.data;
            if (res.result == '1') {
              this.getAddressList(this.loginName);
            }else{
              if(res.error!=""&&res.error!=null){
                Toast(res.error.errorMsg);
              }
            }
          });
        }).catch(() => {
          Toast(this.display.cancelDeleteAddress);
          conosle.log("取消按钮")
        });

      },
      getAddressList(loginName){
        this.isLoading = true;
        this.list = [];
        Get(CONFIG.BASE_URL + this.CONFIG.addressUrl + '?loginName=' + (loginName ? loginName : this.member.loginName)).then((resp) => {
          this.isLoading = false;
          let res = resp.data;
          if (res.result == '1' && res.data.length > 0) {
            this.list = res.data;
          }else{
            if(res.error!=""&&res.error!=null){
              Toast(res.error.errorMsg);
            }

          }
        })
      },
      toAddAddress(params){
        //新添加地址id先给0
        params.id = 0;
        this.show = false;
        Post(CONFIG.BASE_URL + this.CONFIG.addAddress,params).then((resp) => {
          let res = resp.data;
          if (res.result == '1' && res.data) {
            Toast(res.data.msg);
            this.getAddressList(this.loginName);
          }else{
            if(res.error!=""&&res.error!=null){
              Toast(res.error.errorMsg);
            }
          }
        });
      },
      toEditAddress(params){
        this.show = false;
        if(params.isDefault == '1'){
          this.setDefaultAddress(params);
        }
        Post(CONFIG.BASE_URL + this.CONFIG.updateAddress,params).then((resp) => {
          let res = resp.data;
          if (res.result == '1') {
            Toast(res.data.msg);
            this.getAddressList(this.loginName);
            var urlData=window.location.href;
            let splicingUrl=urlData.substring(0, urlData.indexOf("?"));
            let splicingUrlend=urlData.substring(urlData.indexOf("#"), urlData.length);
            var jumpEditPage=splicingUrl+splicingUrlend
            history.pushState(null, "", jumpEditPage);
          }else{
            if(res.error!=""&&res.error!=null){
              Toast(res.error.errorMsg);
            }
          }
        });

      },
      setDefaultAddress(item){
        Get(CONFIG.BASE_URL + this.CONFIG.setDefaultAddress + '?loginName=' + (this.loginName?this.loginName:this.member.loginName) +'&id=' + item.id).then((resp) => {
          let res = resp.data;
          if(res.result == '1'){
            this.getAddressList(this.loginName);
          }else{
            if(res.error!=""&&res.error!=null){
              Toast(res.error.errorMsg);
            }
          }

        })
      },
      dataChange(content){
        let params = {};
        params.id = content.id;
        params.contactor = content.name;
        params.phone = content.tel;
        params.province = content.province;
        params.city = content.city;
        params.county = content.county;
        params.address = content.address_detail;
        params.post = content.postal_code;
        params.isDefault = content.is_default?'1':'0';
        params.loginName = this.loginName;
        params.createTime = null;
        params.updateTime = null;
        return params;
      },
      beforeClose(action, done) {
        if (action === 'confirm') {
          setTimeout(done, 1000);
        } else {
          done();
        }
        var urlData=window.location.href;
        let splicingUrl=urlData.substring(0, urlData.indexOf("?"));
        let splicingUrlend=urlData.substring(urlData.indexOf("#"), urlData.length);
        var jumpEditPage=splicingUrl+splicingUrlend
        history.pushState(null, "", jumpEditPage);
      },
      onSave(content){
        //给后台传的参数也需要转换一下
        let params = this.dataChange(content);

        if(this.isEditDialog){

          this.toEditAddress(params);
        }else {

          this.toAddAddress(params);
        }

      },
      onDelete(content){
        this.show = false;
        Post(CONFIG.BASE_URL + this.CONFIG.deleteAddress + '?ids='+content.id).then((resp) => {
          let res = resp.data;
          if (res.result == '1') {
            this.getAddressList(this.loginName);
          }else{
            if(res.error!=""&&res.error!=null){
              Toast(res.error.errorMsg);
            }
          }
        });
      },
      //手机号验证
	    telValidator(tel){
      	let reg1 = /^1\d{10}$/;
      	let reg2 =  /^0\d{2,3}-?\d{7,8}$/;
      	if(reg1.test(tel) || reg2.test(tel)){
      		return true;
        }else{
      		return false
        }
      }
    },
    watch: {
      member: function (newValue, oldValue) {
        if (newValue.loginName && newValue.loginName != oldValue.loginName) {
          this.getAddressList(newValue.loginName); // 初始化数据之后再执行查询已购图书的方法
          this.loginName = newValue.loginName;
        }
      }
    }
  }
</script>

<style >
  .work_mobile_personalcenter_12 {
    font-size: 14px;
  }
  .work_mobile_personalcenter_12 .van-field__body {
    line-height: .32rem;
    height: auto;
  }
  .work_mobile_personalcenter_12 .van-field__body .van-field__control{
    height: .3rem;
  }
  .work_mobile_personalcenter_12 .van-field__body textarea.van-field__control{

  }
</style>
