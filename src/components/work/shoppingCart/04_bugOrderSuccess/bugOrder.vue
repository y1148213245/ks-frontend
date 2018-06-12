<!-- 提交订单成功组件 NEW Created by zong 2018/06/08. -->
<script src="js/example.js"></script>
<template>
  <div class="work_shoppingcartsuccess_04">
    <div class="work_shoppingcartsuccess_04_main">
    <template v-for="(config, config_i) in resourceDetailConfig.complicatedItem" v-if="resourceDetail">
      <!-- 需要特殊处理的复杂项 -->
      <!-- img 图片 -->
      <div :key="config_i" v-if="config.name == 'img'" class="work_shoppingcartsuccess_04_imgcontainter" @click="toCustomFun( config)">
        <label class="work_shoppingcartsuccess_04_img_label">{{config.display}}</label>
        <img class="work_shoppingcartsuccess_04_img" v-bind="{class: 'work_shoppingcartsuccess_04_' + config.field}" :src=" resourceDetail[keys[config.field]] " alt="暂无图片" @load="dealResourceImg($event)"/>
      </div>

      <!-- 自定义事件按钮 包括（title 标题） -->
      <div :key="config_i" v-else-if="config.name == 'button'" v-bind="{class: 'work_shoppingcartsuccess_04_btncontainer_' + config.field + '_' + config_i}" @click="toCustomFun( config)">
        <i v-bind="{class: config.className}"></i>
        <label class="work_shoppingcartsuccess_04_btnlabel">{{config.display}}</label>
        <span v-bind="{class: 'work_shoppingcartsuccess_04__btncontainer_' + config.field}" v-if="keys[config.field]">{{ resourceDetail[keys[config.field]] }}</span>
      </div>

      <!-- price 价格 -->
      <div :key="config_i" v-else-if="config.name == 'price'" class="work_shoppingcartsuccess_04_pricecontainter">
        <label class="work_shoppingcartsuccess_04_price_label">{{config.display}}</label>
        <span v-bind="{class: 'work_shoppingcartsuccess_04_' + config.field}">{{ resourceDetail[keys[config.field]]  | formatPriceNew }}</span>
      </div>

      <!-- time 时间 -->
      <div :key="config_i" v-else-if="config.name == 'time'" class="work_shoppingcartsuccess_04_timecontainter">
        <label class="work_shoppingcartsuccess_04_time_label">{{config.display}}</label>
        <span v-bind="{class: 'work_shoppingcartsuccess_04_' + config.field}">{{ resourceDetail[keys[config.field]] | formatDateNEW}}</span>
      </div>

      <!-- 其他不需要特殊处理的简单项 -->
      <div :key="config_i" v-else  class="work_shoppingcartsuccess_04_other">
        <i v-bind="{class: config.className}"></i>
        <label class="work_shoppingcartsuccess_04_label">{{config.display}}</label>
        <span v-if="config.field" v-bind="{class: 'work_shoppingcartsuccess_04_' + config.field}" v-html="resourceDetail[keys[config.field]] || '暂无'"></span>
      </div>

    </template>
  </div>
    <div class="work_shoppingcartsuccess_04_moneymain" v-if="moneyList">
      <div class="work_shoppingcartsuccess_04_moneymain_one" v-if="moneyList && moneyList.money_one">
        <span>{{moneyList.money_one.name}}</span>
        <span>{{bookMoney}}{{moneyList.money_one.unit}}</span>
      </div>
      <div class="work_shoppingcartsuccess_04_moneymain_one" v-if="moneyList && moneyList.money_two">
        <span>{{moneyList.money_two.name}}</span>
        <span>{{menberMoney}}{{moneyList.money_two.unit}}</span>
      </div>
    </div>
    <div class="work_shoppingcartsuccess_04_button" v-if="buttonList">
      <div class="work_shoppingcartsuccess_04_button_one" v-if="buttonList && buttonList.button_one">
        <el-button class="work_shoppingcartsuccess_04_button_one_button"  @click="toCustomFun(buttonList.button_one)">{{buttonList.button_one.name}}</el-button>
      </div>
      <div class="work_shoppingcartsuccess_04_button_two" v-if="buttonList && buttonList.button_two">
        <el-button class="work_shoppingcartsuccess_04_button_two_button"  @click="toCustomFun( buttonList.button_two)">{{buttonList.button_two.name}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapState } from 'vuex';
  import * as interfaces from "@work/login/common/interfaces.js";
  import Vue from 'vue';
  import { Get, Post, DrawImage, getFieldAdapter, toOtherPage } from "@common";
  import URL from 'url';
  import PROJECT_CONFIG from "projectConfig";

  export default {
    name: 'work_shoppingcartsuccess_04',
    props: ['namespace', 'modulename'],
    reused: true,
    data () {
      return {
        CONFIG: null,
        resourceDetail: {}, // 详情信息
        resourceDetailConfig: {}, // 详情信息配置
        keys: {}, // 详情接口字段容器
        resId: "",
        loginName: "", //ada123
        menberData:{},
        contentType: $_$.bookContentType,
        pubId: "", // 书的pubId
        menberMoney:"0",//有多少余额
        bookMoney:"0",// 应该付款多少钱
        buttonList:{},
        moneyList:{},
      };
    },

    mounted () {
      this.pubId = URL.parse(document.URL, true).query.pubId; // 从地址栏接收id
      this.CONFIG = PROJECT_CONFIG[this.namespace].shoppingcartsuccess.work_shoppingcartsuccess_04[this.modulename];
      this.resourceDetailConfig = this.CONFIG.getResourceDetail;
      this.buttonList = this.CONFIG.buttonList;
      this.moneyList = this.CONFIG.moneyList;
      this.keys = JSON.parse(JSON.stringify(getFieldAdapter(this.resourceDetailConfig.sysAdapter, this.resourceDetailConfig.typeAdapter)));
      this.getMenberDetail();   //获取用户信息
      this.getResourceDetail();  //获取图书详情信息
    },

    created: function () {
      this.getMemberInfo().then((member) => {
        this.loginName = member.loginName;
        this.getMenberDetail();   //获取用户信息
        this.getResourceDetail();  //获取图书详情信息
      });
    },

    computed: {
      ...mapGetters("login", {
        member: interfaces.GET_MEMBER
      }),
    },

    methods: {
      ...mapActions("login", {
        getMemberInfo: interfaces.ACTION_KEEP_SESSION
      }),
      dealResourceImg (eve) {  // 处理图片尺寸
        DrawImage(eve.path[0], this.CONFIG.infoImgWidth, this.CONFIG.infoImgHeight);
      },
      toCustomFun (config) { // 执行自定义事件
        window.open(toOtherPage(this.resourceDetail, this.CONFIG[config.method], this.keys));
      },
      getResourceDetail () {  //获取商品详情
        let paramsObj = Object.assign({}, this.resourceDetailConfig.params);
        paramsObj.pubId = this.pubId;
        // CONFIG.BASE_URL +
        Get(CONFIG.BASE_URL + this.resourceDetailConfig.url + '?pubId=' + paramsObj.pubId + '&loginName=' + this.loginName).then((rep) => {
          let datas = rep.data;
          if (rep.status == 200 && datas.data) {
            this.resourceDetail = datas.data;
            console.log(this.resourceDetail);
            this.resId = this.resourceDetail[this.keys.resId];
            this.bookMoney = Number(this.resourceDetail[this.keys.memberPrice]);
          }
        });
      },
      getMenberDetail(){
        this.loginName = this.member.loginName;
        if (!this.loginName) {  // 未登录
          return false;
        }
        Get(CONFIG.BASE_URL + 'user/getMemberByName.do', {
        // Get("http://172.19.36.97:9092/spc-portal-web/user/getMemberByName.do", {
          params: {
            loginName: this.loginName
          }
        }).then(resp => {
          if(resp.data){
            // console.log(resp.data);
            this.menberData = resp.data.data;
            this.menberMoney = resp.data.data.virtualCoin;
          }
          // console.log(resp.data)
        })
      }

    }
  }

</script>
<style>
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }


  .work_shoppingcartsuccess_04_imgcontainter {
    background-color: #ddd;
    width: 220px;
    height: 320px;
    position: relative;
  }

  .work_shoppingcartsuccess_04_img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
