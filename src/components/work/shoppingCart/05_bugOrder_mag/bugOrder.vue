<!-- 期刊订阅提交订单组件 NEW Created by zong 2018/06/07. -->
<script src="js/example.js"></script>
<template>
  <div class="work_shoppingcart_05">
    <!--<span>{{showPageName}}</span>-->
    <div class="work_shoppingcart_05_buyMain" v-show="showPageName=='buyMain'">
      <!--切换购买-->
      <div class="changeBuy" v-if="CONFIG && changeBuy && changeBuy.length>0">
        <template>
          <div class="changeBuy_div" v-for="(item, key) in changeBuy">
            <span class="changeBuy_div_span" @click="toUrlFun(item.toUrl)">{{item.name}}</span>
          </div>
        </template>
      </div>

      <!--//介绍信息区域-->
      <div class="aboutMsg" v-if="CONFIG && CONFIG.aboutMsg">
        <span class="aboutMsg_span" v-html="CONFIG.aboutMsg"></span>
      </div>

      <div class="work_shoppingcart_bodyDiv">
        <!--期刊种类区域-->
        <div class="work_shoppingcart_bodyDiv_box magType" v-if="CONFIG && magType">
          <div class="box_title">
            <span class="box_title_span" v-if="magType.titleName" v-text="magType.titleName"></span>
          </div>
          <span class="box_title_span_text" v-if="checkMagTypeName">{{checkMagTypeName}}</span>
          <span class="box_title_span_btn" v-text="magType.buttonName" @click="cutPage('idMagType')"></span>
        </div>
        <!--订阅方式渔区-->
        <div class="work_shoppingcart_bodyDiv_box takeType" v-if="CONFIG && takeType">
          <div class="box_title">
            <span class="box_title_span" v-if="takeType.titleName" v-text="takeType.titleName"></span>
          </div>
          <span class="box_title_span_text" v-if="TakeNameChange">{{TakeNameChange}}</span>
          <span class="box_title_span_btn" v-text="takeType.buttonName" @click="cutPage('idTakeDiv')"></span>
        </div>
        <!--配送方式-->
        <!--<div class="delivery" v-if="CONFIG && delivery && delivery.deliveryShow">-->
        <!--<div class="delivery_title">-->
        <!--<span class="delivery_title_span" v-if="delivery.titleName" v-text="delivery.titleName"></span>-->
        <!--</div>-->
        <!--<ul class="work_shoppingcart_05_delivery_ul" v-if="deliveryList && deliveryList.length > 0">-->
        <!--<li class="work_shoppingcart_05_delivery_ul_li" v-for="(item, index) in deliveryList" :key="index">-->
        <!--&lt;!&ndash; 选择框 &ndash;&gt;-->
        <!--<span class="work_shoppingcart_05_delivery_ul_li_imgcontainter"-->
        <!--:class="{work_shoppingcart_05_delivery_ul_li_imgcontainter_active:deliveryCheck==item.methods}"-->
        <!--@click="selectdelivery(item)"></span>-->
        <!--<span v-text="item.methods"></span>-->
        <!--</li>-->
        <!--</ul>-->
        <!--</div>-->
        <!--订购数量-->
        <!--<div class="buyNumDiv" v-if="CONFIG && buyNum && buyNumDiv.buyNumDivShow">-->
        <!--<div class="buyNumDiv_title">-->
        <!--<span class="buyNumDiv_title_span" v-if="buyNumDiv.titleName" v-text="buyNumDiv.titleName"></span>-->
        <!--</div>-->
        <!--<div class="buyNumDiv_number">-->
        <!--<input class="buyNumDiv_number_input" type="number" v-model="buyNum">-->
        <!--<span class="buyNumDiv_number_span" v-text="buyNumDiv.unit"></span>-->
        <!--</div>-->
        <!--<div class="buyNumDiv_price">-->
        <!--<span class="buyNumDiv_price_title" v-text="buyNumDiv.priceTitle"></span>-->
        <!--<span class="buyNumDiv_price_price">{{allprice}}</span>-->
        <!--</div>-->
        <!--</div>-->
        <!--其他表单信息-->
        <!--<div class="otherDiv" v-if="CONFIG && otherDiv && otherDiv.otherDivShow">-->
        <!--<div class="otherDiv_title">-->
        <!--<span class="otherDiv_title_span" v-if="otherDiv.titleName" v-text="otherDiv.titleName"></span>-->
        <!--</div>-->
        <!--<div class="otherDiv_form">-->
        <!--<div class="otherDiv_form_item">-->
        <!--<span class="otherDiv_form_item_span">订阅人</span>-->
        <!--<span class="otherDiv_form_item_span">-->
        <!--<input type="text" maxlength="50" v-model="otherFrom.otherMan">-->
        <!--</span>-->
        <!--</div>-->
        <!--<div class="otherDiv_form_item">-->
        <!--<span class="otherDiv_form_item_span">单位全称</span>-->
        <!--<span class="otherDiv_form_item_span">-->
        <!--<input type="text" maxlength="50" v-model="otherFrom.otherCompany">-->
        <!--</span>-->
        <!--</div>-->
        <!--<div class="otherDiv_form_item">-->
        <!--<span class="otherDiv_form_item_span">邮寄地址</span>-->
        <!--<span class="otherDiv_form_item_span">-->
        <!--<input type="text" maxlength="50" v-model="otherFrom.otherSite">-->
        <!--</span>-->
        <!--</div>-->
        <!--<div class="otherDiv_form_item">-->
        <!--<span class="otherDiv_form_item_span">邮编</span>-->
        <!--<span class="otherDiv_form_item_span">-->
        <!--<input type="text" maxlength="50" v-model="otherFrom.otherPost">-->
        <!--</span>-->
        <!--</div>-->
        <!--<div class="otherDiv_form_item">-->
        <!--<span class="otherDiv_form_item_span">联系电话</span>-->
        <!--<span class="otherDiv_form_item_span">-->
        <!--<input type="text" maxlength="50" v-model="otherFrom.otherPhone">-->
        <!--</span>-->
        <!--</div>-->
        <!--</div>-->

        <!--</div>-->
        <!--付款方式-->
        <!--<div class="payType">-->

        <!--</div>-->
        <!--发票信息-->
        <div class="work_shoppingcart_bodyDiv_box billInfo" v-if="CONFIG && billInfo && billInfo.billInfoShow">
          <div class="box_title">
            <span class="box_title_span" v-if="billInfo.titleName" v-text="billInfo.titleName"></span>
          </div>
          <div class="billInfo_main">
            <div class="billInfo_no">
              <span class="billInfo_checkBut" :class="{billInfo_checkBut_active:isReceipt==0}" @click="isGetBill(0)"></span>
              <span class="billInfo_tip">否</span>
            </div>
            <div class="billInfo_yes">
              <span class="billInfo_checkBut" :class="{billInfo_checkBut_active:isReceipt==1}" @click="isGetBill(1)"></span>
              <span class="billInfo_tip">是</span>
              <span class="billInfo_name">{{billInfo_name}}</span>
              <span class="billInfo_name_content">{{billInfo_name_content}}</span>
              <span class="billInfo_name_content_button" @click="cutPage('idBillInfo')">修改</span>
            </div>
          </div>
        </div>

        <!--  姓名区域 -->
        <div class="work_shoppingcart_bodyDiv_box username" v-if="CONFIG">
          <div class="box_title">
            <span class="box_title_span">姓名</span>
          </div>
          <span class="box_title_span_text" v-if="TakeNameChange">{{loginName}}</span>
        </div>

      </div>

      <!--备注-->
      <div class="descDiv" v-if="CONFIG && descDiv && descDiv.descDivShow">
        <div class="descDiv_title">
          <span class="descDiv_title_span" v-if="descDiv.titleName" v-text="descDiv.titleName"></span>
        </div>
        <div class="descDiv_text">
          <textarea class="descDiv_text_" name="descDiv" cols="30" rows="10" maxlength="200" v-model="descInfo"></textarea>
        </div>
      </div>

      <!--  价格区域 -->
      <div class="allPrice_div" v-if="CONFIG">
        <div class="allPrice_div_title">
          <span class="allPrice_div_span">价格</span>
        </div>
        <span class="allPrice_div_span_text">{{bookMoney}}</span>
      </div>
      <!--提交按钮-->
      <div class="submitFrom">
        <el-button class="submitFrom_Button" @click="cutPage('idPayPageOrder')">订 阅</el-button>
      </div>
    </div>

    <!--idMagType 刊种div-->
    <div class="work_shoppingcart_05_idMagType" v-show="showPageName=='idMagType'" v-if="CONFIG && magType">
      <ul class="work_shoppingcart_05_idMagType_ul" v-if="idMagTypeList && idMagTypeList.length > 0">
        <li class="work_shoppingcart_05_idMagType_ul_li" v-for="(item, index) in idMagTypeList" :key="index">
          <!-- img 图片 -->
          <div class="work_shoppingcart_05_idMagType_ul_li_imgcontainter" :class="{work_shoppingcart_05_idMagType_ul_li_imgcontainter_active:idMagTypeCheckTime==item.magName}"  @click="selectMagTypeTime(item)">
            <img class="ui_list_pic_34_resourcelists_li_img"
                 :src=" item.magIsrc || require('@static/img/defaultCover.png')"
                 v-bind:alt="item.magName || 'noPic'" />
          </div>
        </li>
      </ul>
      <div class="work_shoppingcart_05_idMagType_select">
        <span class="work_shoppingcart_05_idMagType_select_button" @click="selectMagType()" v-text="magType.selectButtonName || 'submit'"></span>
      </div>
    </div>

    <!--idBillInfo 发票信息div-->
    <div class="work_shoppingcart_05_idBillInfo" v-show="showPageName=='idBillInfo'">
      <ul class="work_shoppingcart_05_idBillInfo_ul" >
        <li class="work_shoppingcart_05_idBillInfo_ul_li" :class="{work_shoppingcart_05_idBillInfo_ul_li_active:isReceipt==0}"   >
          <!-- 单项 -->
          <div class="work_shoppingcart_05_idBillInfo_ul_li_imgcontainter" @click="isGetBill(0)">不要发票</div>
        </li>
        <!--<li class="work_shoppingcart_05_idBillInfo_ul_li" :class="{work_shoppingcart_05_idBillInfo_ul_li_active:billInfo_name=='增值税普通发票'}"   >-->
        <!--&lt;!&ndash; 单项 &ndash;&gt;-->
        <!--<div class="work_shoppingcart_05_idBillInfo_ul_li_imgcontainter" @click="selectBillType('增值税普通发票')">增值税普通发票</div>-->
        <!--</li>-->
        <!--<li class="work_shoppingcart_05_idBillInfo_ul_li" :class="{work_shoppingcart_05_idBillInfo_ul_li_active:billInfo_name=='增值税专用发票'}"   >-->
        <!--&lt;!&ndash; 单项 &ndash;&gt;-->
        <!--<div class="work_shoppingcart_05_idBillInfo_ul_li_imgcontainter" @click="selectBillType('增值税专用发票')">增值税专用发票</div>-->
        <!--</li>-->
        <li class="work_shoppingcart_05_idBillInfo_ul_li" :class="{work_shoppingcart_05_idBillInfo_ul_li_active:billInfo_name=='增值税普通电子发票'}"   >
          <!-- 单项 -->
          <div class="work_shoppingcart_05_idBillInfo_ul_li_imgcontainter" @click="selectBillType('增值税普通电子发票')">增值税普通电子发票</div>
        </li>
      </ul>
      <div class="work_shoppingcart_05_idBillInfo_form" v-show="isReceipt==1">

        <div class="otherDiv_form_item">
          <span class="otherDiv_form_item_span">户名</span>
          <span class="otherDiv_form_item_span">
              <input type="text" maxlength="50" v-model="billFrom.billMan" value="个人">
            </span>
        </div>
        <div class="otherDiv_form_item">
          <span class="otherDiv_form_item_span">税号</span>
          <span class="otherDiv_form_item_span">
              <input type="text" maxlength="50" v-model="billFrom.billNum">
            </span>
        </div>
        <div class="otherDiv_form_item">
          <span class="otherDiv_form_item_span">电话</span>
          <span class="otherDiv_form_item_span">
              <input type="text" maxlength="50" v-model="billFrom.billPhone">
            </span>
        </div>
        <div class="otherDiv_form_item">
          <span class="otherDiv_form_item_span">地址</span>
          <span class="otherDiv_form_item_span">
              <input type="text" maxlength="50" v-model="billFrom.billSite">
            </span>
        </div>
        <div class="otherDiv_form_item">
          <span class="otherDiv_form_item_span">开户银行</span>
          <span class="otherDiv_form_item_span">
              <input type="text" maxlength="50" v-model="billFrom.billBack">
            </span>
        </div>
        <div class="otherDiv_form_item">
          <span class="otherDiv_form_item_span">银行账号</span>
          <span class="otherDiv_form_item_span">
              <input type="text" maxlength="50" v-model="billFrom.billBackNum">
            </span>
        </div>
      </div>
      <div class="work_shoppingcart_05_idBillInfo_select">
        <span class="work_shoppingcart_05_idBillInfo_select_button" @click="submitBillFrom()" v-text="magType.selectButtonName || 'submit'"></span>
      </div>
    </div>

    <!--订阅方式 -->
    <div class="idTakeDiv" v-show="showPageName=='idTakeDiv'">
      <span class="idTakeDiv_span" :class="{idTakeDiv_span_active:TakeNameChange=='明年全年订阅'}" @click="clickFunTakeNameChange('明年全年订阅')" >明年全年订阅</span>
      <span class="idTakeDiv_span" :class="{idTakeDiv_span_active:TakeNameChange=='按期订阅'}"  @click="clickFunTakeNameChange('按期订阅')" >
        <span class="idTakeDivNext_qi_Title">按期订阅</span>
        <!--<span>{{TakeNameChangeListNowChange}}</span>-->
        <span v-show="TakeNameChange=='按期订阅'" class="idTakeDivNext_qi_class">
          <!--<el-select class="idTakeDivNext_qi_class_select_end" @change="selectVal_end()" v-model="TakeNameEndValue" placeholder="订阅结束期数" :disabled="TakeNameChange=='按期订阅'" filterable>-->
             <!--<el-option class="idTakeDivNext_qi_class_select_end_option"-->
                        <!--v-for="(item1,index1) in TakeNameEndList"-->
                        <!--:label="item1"-->
                        <!--:value="item1"-->
                        <!--:key="index1">-->
               <!--{{item1}}-->
             <!--</el-option>-->
          <!--</el-select>-->

          <!--<el-select class="idTakeDivNext_qi_class_select_open" @change="selectVal_open()" v-model="TakeNameOpenValue" placeholder="订阅开始期数" :disabled="TakeNameChange=='按期订阅'" filterable>-->
             <!--<option class="idTakeDivNext_qi_class_select_open_option"-->
                        <!--v-for="(item,index) in TakeNameOpenList"-->
                        <!--:label="item"-->
                        <!--:value="item"-->
                        <!--:key="index">-->
               <!--{{item}}-->
             <!--</option>-->
          <!--</el-select>-->
  <select class="idTakeDivNext_qi_class_select_open" v-model="TakeNameOpenValue"  @change="selectVal_open()" placeholder="订阅开始期数" >
    <option class="idTakeDivNext_qi_class_select_open_option"
            v-for="(item,index) in TakeNameOpenList"
            :value="item" >
               {{item}}</option>
  </select>
          <span>-</span>

  <select class="idTakeDivNext_qi_class_select_end" v-model="TakeNameEndValue"   @change="selectVal_end()" placeholder="订阅结束期数" >
    <option class="idTakeDivNext_qi_class_select_end_option"
            v-for="(item1,index1) in TakeNameEndList"
            :value="item1" >
               {{item1}}</option>
  </select>
        </span>
      </span>

      <div class="work_shoppingcart_05_idBillInfo_select">
        <span class="work_shoppingcart_05_idBillInfo_select_button" @click="submitTakeFrom()" v-text="magType.selectButtonName || 'submit'"></span>
      </div>
    </div>


    <!--支付方式 信息 -->
    <div class="idPayPageOrder" v-show="showPageName=='idPayPageOrder'">
      <span class="idPayPageOrder_title">请在15分钟内支付订单</span>
      <div class="idPayPageOrder_ul">
        <div class="idPayPageOrder_li">
          <span class="idPayPageOrder_label">期刊名称：</span>
          <span class="idPayPageOrder_text">{{checkMagTypeName}}</span>
        </div>
        <div class="idPayPageOrder_li">
          <span class="idPayPageOrder_label">订阅方式：</span>
          <span class="idPayPageOrder_text">{{TakeNameChange}}</span>
        </div>
        <div class="idPayPageOrder_li">
          <span class="idPayPageOrder_label">发票信息：</span>
          <span class="idPayPageOrder_text">{{billInfo_name}}</span>
        </div>
      </div>

      <div class="work_shoppingcart_05_pay" v-if="payType && payType.payTypeShow">
        <div v-if="payType && payType.Balance && payType.Balance.iconClass" class="work_shoppingcart_05_pay_balance">
          <span class="work_shoppingcart_05_pay_Balance_radio" :class="{work_shoppingcart_05_pay_avtive:defaultPay=='Balance'}" @click="changeDefaultPay('Balance')"></span>
          <span class="work_shoppingcart_05_pay_icon work_shoppingcart_05_pay_Balance_icon" v-bind="{class: payType.Balance.iconClass}"></span>
          <span class="work_shoppingcart_05_pay_name work_shoppingcart_05_pay_Balance_name" v-text="payType.Balance.name"></span>
          <span v-if="payType.Balance.moneyShow" class="work_shoppingcart_05_pay_Balance_money">{{menberMoney}} {{payType.Balance.moneyUnit}}</span>
          <span v-if="payType.Balance.goRechargeShow" class="work_shoppingcart_05_pay_Balance_button">
            <a :href="payType.Balance.goRechargeUrl" v-text="payType.Balance.goRechargeButton">充值</a>
          </span>
        </div>
        <div v-if="payType && payType.Weixin && payType.Weixin.WeixinShow" class="work_shoppingcart_05_pay_balance">
          <span class="work_shoppingcart_05_pay_Balance_radio" :class="{work_shoppingcart_05_pay_avtive:defaultPay=='Weixin'}" @click="changeDefaultPay('Weixin')"></span>
          <span class="work_shoppingcart_05_pay_icon work_shoppingcart_05_pay_Weixin_icon" v-bind="{class: payType.Weixin.iconClass}"></span>
          <span class="work_shoppingcart_05_pay_name work_shoppingcart_05_pay_Weixin_name" v-text="payType.Weixin.name"></span>
        </div>
        <div v-if="payType && payType.Balance && balanceHintShow" class="work_shoppingcart_05_pay_balanceHint">
          <span v-text="payType.Balance.balanceHint"></span>
        </div>
      </div>

      <!--提交按钮-->
      <div class="submitFrom">
        <el-button class="submitFrom_Button" @click="goSubmit()">订 阅</el-button>
      </div>
    </div>


    <!--END 支付方式 信息-->


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
    name: 'work_shoppingcart_05',
    props: ['namespace', 'modulename'],
    reused: true,
    data() {
      return {
        CONFIG: null,
        resourceDetail: {}, // 详情信息
        resourceDetailConfig: {}, // 详情信息配置
        keys: {}, // 详情接口字段容器
        loginName: "", //ada123
        showPageName:"buyMain", // 当前展示的页面名称
        changeBuy:[], // 两个按钮
        checkMagTypeName:'',  //已选择的期刊类型
        checkMagTypeNameInfo:{}, //已选择的期刊类型 获取的接口信息
        idMagTypeCheckTime:"", //临时选择的期刊类型
        magType:{}, //购买方式的配置
        idMagTypeList:[],  //刊种列表
        delivery:{}, // 配送方式配置
        deliveryCheck:"", //已选择的配送方式
        deliveryList:[], //配送方式
        magPrice:0, // 杂志单价
        buyNum:1, // 订购数量
        TakeNameChange:"明年全年订阅", //现在订阅的类型  按期订阅  明年全年订阅
        TakeNameOpenValue:'1',
        TakeNameEndValue:'1',
        TakeNameOpenList:[],   //开始的下拉列表
        TakeNameEndList:[],     //结束的下拉列表
        TakeNameChangeList:"", //现在订阅的类型
        nextYearTakeNameChangeList:"", //今年剩下的
        nextYearTakeNameChangeList_next:"", //明年共
        TakeNameChangeyear:'',  //订阅年份
        TakeNameChangeListLength:0,//选择的一共多少期
        TakeNameChangeListLength_newYear:1,//一年一共多少期
        pricedan:0,
        takeType:{},
        buyNumDiv:{}, //订购数量配置
        otherDiv:{}, // 其他信息配置
        otherFrom:{   //其他信息表单设置
          otherMan:'',
          otherCompany:'',
          otherSite:'',
          otherPost:'',
          otherPhone:'',
        },
        isReceipt:0,  //是否需要发票  0不要 1要
        billInfo:{},// 发票配置
        descDiv:{}, //备注信息配置
        descInfo:"", //备注信息
        billInfo_name:"普通发票", //发票名称 已选择的
        billInfo_name_content:"XXXX公司明细",  //发票内容 已选择的
        billFrom:{
          billMan:'',
          billNum:'',
          billPhone:'',
          billSite:'',
          billBack:'',
          billBackNum:'',
        },


        menberData: {},
        contentType: $_$.bookContentType,
        pubId: "", //要加入购物车的书的pubId
        payType: {}, //支付方式配置
        defaultPay: "Balance", //默认支付方式  Balance  Weixin
        menberMoney: "0", //有多少余额
        bookMoney: "0", // 应该付款多少钱
        balanceHintShow: false, //是不是展示没钱提示
        Orderparams: {}, //提交订单条件
        curSelectedInvoice: {},
        temp: {}, //订单里的id
        tempList: {}, //订单单元
        orderSuccessUrl: '', //
        noLoginUrl:'../pages/login.html', //没有登陆就跳转到登录页
      };
    },

    mounted() {
      this.pubId = URL.parse(document.URL, true).query.pubId; // 从地址栏接收id
      this.pubId = 0;
      this.CONFIG = PROJECT_CONFIG[this.namespace].shoppingCart.shoppingCart_05[this.modulename];
      this.changeBuy = this.CONFIG.changeBuy;
      this.checkMagTypeName = this.changeBuy.checkMagTypeName;
      this.idMagTypeCheckTime = this.changeBuy.checkMagTypeName;
      this.magType = this.CONFIG.magType;
      this.takeType = this.CONFIG.takeType;
      this.delivery = this.CONFIG.delivery;
      this.buyNumDiv = this.CONFIG.buyNumDiv;
      this.otherDiv = this.CONFIG.otherDiv;
      this.billInfo = this.CONFIG.billInfo;
      this.descDiv = this.CONFIG.descDiv;



      this.getIdMagTypeList(); // 获取刊种列表
      // this.getDeliveryWay(); //获取配送方式

      this.orderSuccessUrl = this.CONFIG.orderSuccessUrl;
      this.payType = this.CONFIG.payType;
      this.resourceDetailConfig = this.CONFIG.getResourceDetail;
      this.keys = JSON.parse(JSON.stringify(getFieldAdapter(this.resourceDetailConfig.sysAdapter, this.resourceDetailConfig.typeAdapter)));
      if(typeof(this.CONFIG.noLoginUrl)!='undefined'){
        this.noLoginUrl = this.CONFIG.noLoginUrl;
      }

      this.showPageName = "buyMain"; // 当前展示的页面名称
    },

    created: function() {
      this.getMemberInfo().then((member) => {
        this.loginName = member.loginName;
        this.getMenberDetail(); //获取用户信息
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
      toUrlFun(toUrl){  //跳转到指定url
        if(toUrl){
          window.open( toUrl );
        }
      },
      cutPage(idPage){   //切换指定的div页面
        this.showPageName = idPage;
        //算出总价
        this.bookMoney = (this.pricedan)*(this.TakeNameChangeListLength);
        //console.log(this.bookMoney);
        //console.log(this.pricedan);
        //console.log(this.TakeNameChangeListLength);
      },
      getAllprice(){
        this.bookMoney = (this.pricedan)*(this.TakeNameChangeListLength);
      },
      clickFunTakeNameChange(item){
        this.TakeNameChange = item;
        if(item=='明年全年订阅'){
          this.TakeNameChangeList = this.nextYearTakeNameChangeList_next;
          this.TakeNameChangeyear = (new Date().getFullYear())+1;
        }else{
          this.TakeNameChangeyear = (new Date().getFullYear());
        }
        this.getAllprice();
      },
      getIdMagTypeList () { // 获取刊种列表
        Get(CONFIG.BASE_URL + 'spc/prodb/getMagList.do').then((rep) => {
          let datas = rep.data;
          if (datas.result && datas.data && datas.data.length > 0) {
            if(datas.result==1){
              this.idMagTypeList = datas.data;
              this.checkMagTypeName = datas.data[0].magName;
              this.getIdMagDo(this.checkMagTypeName)
            }
          }
        });
      },
      selectMagType(){  //选择期刊类型 提交表单
        this.checkMagTypeName = this.idMagTypeCheckTime;
        this.cutPage('buyMain');
        //获取刊物详细信息
        this.getIdMagDo(this.checkMagTypeName);
      },
      submitTakeFrom(){   //选择订阅方式 时间 提交表单
        this.cutPage('buyMain');
      },
      getIdMagDo(checkMagTypeName){  //选择期刊类型 获取期刊详细信息

          //
        // 'http://172.19.36.97:9092/spc-portal-web/'
        Get(CONFIG.BASE_URL + 'spc/prodb/getMag.do?magName=' + checkMagTypeName).then(rep => {
          if (rep.data && rep.data.result) {
            this.checkMagTypeNameInfo = rep.data.data;
            // "noPublishNum":3,
            //   "magDesc":"测试刊物简介",
            //   "totalNum":24,
            //   "price":"12",
            //   "nextYearPrice":"",
            //   "magName":"测试刊物"
//制作需要的几个参数
//             TakeNameOpenList = this.checkMagTypeNameInfo.noPublishNum
            // TakeNameOpenList = this.checkMagTypeNameInfo.totalNum
            this.TakeNameChangeList = '';
            this.TakeNameOpenList = [];
            this.TakeNameEndList = [];

            this.TakeNameChangeListLength = 0;
            for (var i=Number(this.checkMagTypeNameInfo.noPublishNum);i<=Number(this.checkMagTypeNameInfo.totalNum);i++)
            {
              this.TakeNameOpenList.push(i);
              this.TakeNameEndList.push(i);
              if(this.TakeNameChangeList==''){
                this.TakeNameChangeList = i;
              }else{
                this.TakeNameChangeList = this.TakeNameChangeList+','+i;
              }
              //过去今年的长度
              this.TakeNameChangeListLength++;
            }
            this.nextYearTakeNameChangeList = this.TakeNameChangeList;


//明年全年订阅
            for (var i=Number(1);i<=Number(this.checkMagTypeNameInfo.totalNum);i++)
            {
              if(this.nextYearTakeNameChangeList_next==''){
                this.nextYearTakeNameChangeList_next = i;
              }else{
                this.nextYearTakeNameChangeList_next = this.nextYearTakeNameChangeList_next+','+i;
              }
            }
            this.TakeNameChangeyear = new Date().getFullYear();
            this.TakeNameChangeList = this.nextYearTakeNameChangeList_next;
            this.TakeNameChangeListLength = this.checkMagTypeNameInfo.totalNum;
            this.TakeNameOpenValue = this.checkMagTypeNameInfo.noPublishNum;
            this.TakeNameEndValue = this.checkMagTypeNameInfo.totalNum;
            this.TakeNameChangeListLength_newYear = this.checkMagTypeNameInfo.totalNum;
            this.pricedan = this.checkMagTypeNameInfo.price;
            this.clickFunTakeNameChange("明年全年订阅");
            this.getAllprice();
          }
        });

      },
      selectVal_open(){
        this.TakeNameChangeList = '';
        this.TakeNameChangeListLength = 0;
        for (var i=Number(this.TakeNameOpenValue);i<=Number(this.TakeNameEndValue);i++)
        {
          if(this.TakeNameChangeList==''){
            this.TakeNameChangeList = i;
          }else{
            this.TakeNameChangeList = this.TakeNameChangeList+','+i;
          }
          this.TakeNameChangeListLength++;
        }
        this.TakeNameEndList = []
        for (var i=Number(this.TakeNameOpenValue);i<=Number(this.checkMagTypeNameInfo.totalNum);i++)
        {
          this.TakeNameEndList.push(i);
        }
        this.getAllprice();
        //console.log(this.TakeNameChangeList);
      },
      selectVal_end(){

        this.TakeNameChangeList = '';
        this.TakeNameChangeListLength = 0;
        for (var i=Number(this.TakeNameOpenValue);i<=Number(this.TakeNameEndValue);i++)
        {
          if(this.TakeNameChangeList==''){
            this.TakeNameChangeList = i;
          }else{
            this.TakeNameChangeList = this.TakeNameChangeList+','+i;
          }
          this.TakeNameChangeListLength++;
        }
        this.getAllprice();
      },
      selectMagTypeTime(item){  //临时选择选择期刊类型
        this.idMagTypeCheckTime = item.magName;
      },
      getDeliveryWay () {   //获取配送方式
        axios.get(CONFIG.BASE_URL + 'cart/findDeliverysByStatus.do').then(function (response) {
          this.deliveryList = response.data.data;
        }).catch(function (error) { });
      },
      selectdelivery(item){  //选择配送方式
        this.deliveryCheck = item.methods;
      },
      isGetBill(item){ //修改要不要发票
        this.isReceipt = item;
        this.selectBillType('不要发票');
      },
      selectBillType(item){  //选择发票类型
        this.billInfo_name = item;
      },
      submitBillFrom(){  //提交发票表单
        this.billInfo_name_content = this.billFrom.billMan;
        this.cutPage('buyMain');
      },
      goSubmit(){  //提交订单  校验器
        this.commitOrder();
      },


      dealResourceImg(eve) { // 处理图片尺寸
        DrawImage(eve.path[0], this.CONFIG.infoImgWidth, this.CONFIG.infoImgHeight);
      },
      toCustomFun(resourceDetail, config) { // 执行自定义事件
        window.open(toOtherPage(this.resourceDetail, this.CONFIG[config.method], this.keys));
      },
      getResourceDetail() { //获取商品详情
        let paramsObj = Object.assign({}, this.resourceDetailConfig.params);
        paramsObj.pubId = this.pubId;
        // CONFIG.BASE_URL +
        Get(CONFIG.BASE_URL + this.resourceDetailConfig.url + '?pubId=' + paramsObj.pubId + '&loginName=' + this.loginName).then((rep) => {
          let datas = rep.data;
          if(rep.status == 200 && datas.data) {
            this.resourceDetail = datas.data;
            //console.log(this.resourceDetail);
            this.resId = this.resourceDetail[this.keys.resId];
            this.bookMoney = Number(this.resourceDetail[this.keys.memberPrice]);
          }
        });
      },
      getMenberDetail() {
        // this.member.loginName = 'z111111';
        this.loginName = this.member.loginName;
        if(this.loginName == undefined || this.loginName == '') { // 未登录
          // 未登录就要跳转到登录页面哦
          location.href = this.noLoginUrl;
          return false;
        }
        Get(CONFIG.BASE_URL + 'user/getMemberByName.do', {
        //   Get("http://172.19.36.97:9092/spc-portal-web/user/getMemberByName.do", {
          params: {
            loginName: this.loginName
          }
        }).then(resp => {
          if(resp.data) {
            // //console.log(resp.data);
            this.menberData = resp.data.data;
            this.menberMoney = resp.data.data.virtualCoin;
          }
          // //console.log(resp.data)
        })
      },
      changeDefaultPay(Pay) { //修改支付方式
        this.defaultPay = Pay;
      },
      commitOrder() {
        if(this.loginName == undefined || this.loginName == '') { // 未登录
          return false;
        }
        ////console.log(Number(this.menberMoney) + '____');
        ////console.log(Number(this.bookMoney) + '====');
        // if(Number(this.bookMoney) > Number(this.menberMoney)) {
        //   this.balanceHintShow = true;
        //   return false;
        // }
        // if(this.balanceHintShow) {
        //   return false;
        // }
        //判断支付方式 生成不同的参数
        //如果是余额支付那么判断余额够不够
        this.setOrderParams();
        let loading = Vue.prototype.$loading({
          text: "数据加载中..."
        });
        // http://172.19.36.97:9092/spc-portal-web/order/submitSplitOrder.do
        var _this = this;
        // order/submitSplitOrder.do
        // 'http://172.19.36.97:9092/spc-portal-web/'
        // CONFIG.BASE_URL
        Post( CONFIG.BASE_URL + 'order/submitPeriodicalOrder.do', this.Orderparams).then(function(response) {
          // Post("http://172.19.36.97:9092/spc-portal-web/order/submitSplitOrder.do", this.Orderparams).then(function (response) {
          if(response.status == 200 && response.data) {
            let datas = response.data;
            if(datas.data && datas.result == 1 && datas.data.submitStatus) {
              // alert("购买完成！")
              location.href=_this.orderSuccessUrl + "?pubId=" + _this.pubId + "&&loginName=" + _this.loginName;
            } else {
              //console.log(datas.data.errMsg);
            }
          }
          loading.close();
        })
      },
      setOrderParams() {

        this.curSelectedInvoice = {
          invoiceType: "", // 发票类型
          receipttypes: "",
          receiptId: "明细", // 普通发票的明细  默认显示明细  汉字 明细
          receiptType: "", // 1:个人  2:单位
          receiptTitle: "", // 发票抬头：个人 / 公司名称
          taxpayerCode: "", // 纳税人识别号
          companyAddress: "", // 公司住址
          companyPhone: "", // 公司联系方式
          bankName: "", // 开户银行
          bankAccount: "" // 开户账号
        };
        this.tempList = {
          id: "", //不用填
          productId: this.resourceDetail.productId, //
          // combinationId: "94", //产品类型id  电子书 94
          nums: 1,    //
          totalPrice: this.bookMoney,
          pubId: this.pubId,
          couponsId: "", //优惠卷id 现在为0
          rankDiscountRatio: "", //这是优惠的汇率
          resourceId: this.resourceDetail.pub_resource_id,
          resourceName: this.resourceDetail.pub_resource_name,
          resourceType: "",
          periodicalType: "0", //传值空   一毛一样的
          periodicalYear: this.TakeNameChangeyear,   //哪年的
          periodicalMonth: this.TakeNameChangeList, //传值空
          combinationId: "0",
        };
        this.temp = {
          activityId: 0, //活动id  填0
          productType: "", //产品类型id  电子书 94
          periodicalType: "0",  //电子期刊是0
          periodicalName: this.checkMagTypeName,  //期刊名称
          periodicalYear: this.TakeNameChangeyear,   //哪年的
          periodicalMonth: this.TakeNameChangeList,  //6，7，8，9
          discountPrice: 0,
          id: '',
          code: "",
          totalPrice: this.bookMoney,
          list: [this.tempList],
        };
        this.Orderparams = {
          oremark: "wxShop",
          orderType: "periodical",   //期刊是这个 其他的都是book
          orderCode: "", //不用写
          balanceAmount: 0, // 如果是余额支付，那就写支付金额 不是就写0
          createTime: null, //不用写
          deliveryAddress: '', // 收货人整个地址 北京市海淀区 拼起来的地址
          deliveryContact: '', // 联系方式
          deliveryPerson: '', // 收件人
          deliveryPrice: 0, // 运费
          deliveryRemark: "", // 运费备注
          deliveryType: '', // 运输方式  汉字 顺丰
          discountAmount: '', //  商品各种活动优惠 不包含免运费的活动
          id: null, //不用写
          isReceipt: "0", //要不要发票， 0不需要 1要
          loginName: this.loginName,
          payAmount: this.bookMoney, // 应付金额 = 商品总价 + 运费
          payCode: "", //不用写
          payMethod: 'Weixin', // 支付方式： Weixin 微信支付 Alipay 支付宝支付  Balance 余额支付
          payRemark: '', // 订单备注
          payStatus: "", //空
          payTime: null,
          payType: 1, // 0线下支付  1在线支付
          payUser: "", //不用写
          realAmount: this.bookMoney, // 实付金额 = 应付金额-运费-余额支付
          receiptId: this.curSelectedInvoice.receiptId,
          receiptType: this.curSelectedInvoice.receiptType, //如果要发票的话  1 个人 2 单位
          receiptTitle: this.curSelectedInvoice.receiptType == 1 ? "个人" : this.curSelectedInvoice.receiptTitle,
          taxpayerCode: this.curSelectedInvoice.taxpayerCode,
          companyAddress: this.curSelectedInvoice.companyAddress,
          companyPhone: this.curSelectedInvoice.companyPhone,
          bankName: this.curSelectedInvoice.bankName,
          bankAccount: this.curSelectedInvoice.bankAccount,
          remark: "",
          siteId: CONFIG.SITE_CONFIG.siteId,
          splitOrderList: [this.temp], //aaa
          totalPrice: this.bookMoney, // 商品总价（不含优惠运费）
          couponsOrder: '', // 优惠券的密码 如果有两张 以数组形式传递
          point: 0
        };
      }

    }
  }
</script>
<style>
  .work_shoppingcart_05_idMagType_ul_li_imgcontainter_active{
    border: #00c000 2px solid;
  }
  .work_shoppingcart_05_delivery_ul_li_imgcontainter_active{
    border: #434cc0 2px solid;
  }
  .billInfo_checkBut_active{
    border: #c03c97 2px solid;
  }
  .idTakeDivNext_qi_class_select_open {
    float: left;
  }
  .idTakeDivNext_qi_class_select_end{
    float: left;
  }
  .idTakeDiv_span_active{
    border: #1ac03b 2px solid;
  }

</style>
