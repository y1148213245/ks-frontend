<template>
    <section class="personalcenter_list">
            <!-- 订单列表 -->
            <div v-show="currentShow=='list'">
                <div>
                    <el-button type="primary" v-on:click="all()">全部订单</el-button>
                    <el-button type="primary" v-on:click="wait()">等待付款</el-button>
                </div>
                <div class="ordernav">
                    <el-row :gutter="1">
                        <el-col :span="9">
                            <div class="block">
                                <el-date-picker v-model="value4" type="datetimerange" range-separator="  ~  " start-placeholder="开始日期" end-placeholder="结束日期" :picker-options="pickerOptions2" placeholder="选择时间范围" align="left" value-format="yyyy-MM-dd HH:mm:ss" @change="changeDateValue">
                                </el-date-picker>
                            </div>
                        </el-col>
                        <el-col :span="9">
                            <div class="grid-content bg-purple-light">订单详情</div>
                        </el-col>
                        <el-col :span="3">
                            <div class="grid-content bg-purple-light">数量</div>
                        </el-col>
                        <el-col :span="3">
                            <div class="grid-content bg-purple-light">金额</div>
                        </el-col>

                    </el-row>
                </div>
                <div v-if="myOrderList.data && myOrderList.data.length > 0">
                    <div v-for="(Aitem,outIndex) in myOrderList.data" :key="outIndex">
                        <div class="mainlist">
                            <div class="grid-content bg-purple-light" style="padding:0 20px;border: 1px solid rgb(223, 236, 236);">
                                <span style="display:inline-block;float:left;font-size:14px;margin-top:7px;margin-right:50px;">
                                    <i class="el-icon-time"></i> {{Aitem.createTime.split('.')[0]}}</span>
                                <span style="display:inline-block;float:left;font-size:14px;margin-top:7px;margin-right:50px;">订单号：{{Aitem.parentOrderCode}}</span>
                                <!-- <span style="display:inline-block;float:left;font-size:14px;margin-top:7px;margin-right:50px;" v-if="Aitem.orderList[0].deliveryPerson">收货人：{{Aitem.orderList[0].deliveryPerson}}</span> -->
                                <!-- 隐藏总单的订单状态 -->
                                <!-- <span style="display:inline-block;float:left;font-size:14px;margin-top:7px;float:right" v-if="Aitem.payStatus==0 && Aitem.status==1">订单状态：待付款</span>
                                <span style="display:inline-block;float:left;font-size:14px;margin-top:7px;float:right" v-if="Aitem.payStatus==1">订单状态：进行中</span>
                                <span style="display:inline-block;float:left;font-size:14px;margin-top:7px;float:right" v-if="Aitem.payStatus==5">订单状态：已完成</span>
                                <span style="display:inline-block;float:left;font-size:14px;margin-top:7px;float:right" v-if="Aitem.payStatus==0 && Aitem.status==2">订单状态：已取消</span> -->
                            </div>

                            <div v-for="(item,index) in Aitem.orderList" :key="index">

                                <div class="grid-content" style="padding:0 20px;border: 1px solid rgb(223, 236, 236);">
                                    <span style="display:inline-block;float:left;font-size:14px;margin-top:7px;margin-right:50px;">子单号：{{item.orderCode}}</span>
                                    <!-- <el-button type="text" @click="dialogTableVisible = true">联系客服</el-button> -->
                                    <el-button type="text" @click="showDetails(outIndex,index)" style="float:right;display:inline-block;margin-left:20px;">订单详情</el-button>

                                    <!--<el-dialog title="联系客服" :visible.sync="dialogTableVisible">
                                    <div class="cent">
                                        <div class="grid-content bg-purple" style="padding:0 20px">
                                            <span style="display:inline-block;float:left;font-size:14px;margin-top:7px;margin-right:310px;">订单号：{{item.orderCode}}</span>
                                        </div>
                                        <el-row>
                                            <el-col :span="18">
                                                <div style="margin: 10px;height: 100px;width:550px;">
                                                    <img v-bind:src="item.itemList.bigPic" style="height: 100px;width: 100px;float:left;">
                                                    <div class="itemlist" style="width:450px;">
                                                        <span style="width:350px;" :title="item.itemList[index].productName">{{item.itemList[0].productName}}</span>
                                                        <span style="font-size:16px;">作者：{{item.itemList[index].author}}</span>
                                                        <span style="margin-top:20px;">数量：{{item.itemList[index]. productNum}}</span>
                                                    </div>
                                                </div>
                                            </el-col>
                                            <el-col :span="6" class="bord bordl">{{item.itemList[0]. productPrice * item.itemList[0]. productNum| filterFun}}</el-col>
                                        </el-row>
                                    </div>
                                    <div style="margin:20px 0 10px 20px">
                                        <p style="font-size:20px">请发邮件至</p>
                                        <p style="text-align:center">asdasdasdasd@123.com</p>
                                    </div>
                                    </br>
                                </el-dialog>-->

                                </div>

                                <el-row class="cent" v-for="(item1,innerindex) in item.itemList" :key="innerindex">
                                    <el-col :span="15">
                                        <div style="margin: 10px;height: 100px;">
                                            <img v-bind:src="item1.bigPic || '../assets/img/zwfm.png'" onload="DrawImage(this,120,100)" style="float:left;text-align: center;line-height: 100px;" alt="暂无封面">
                                            <div class="itemlist">
                                                <span style="margin-top:5px;" :title="item1.productName">{{item1.productName||"暂无书名"}}</span>
                                                <span style="font-size:14px;margin-top:25px;">作者：{{item1.author||"暂无作者"}}</span>
                                            </div>
                                        </div>
                                    </el-col>
                                    <el-col :span="3">
                                        <div style="font-size:16px;text-align:center;margin-top:45px;">
                                            <span v-if="item.itemList[0].productType== 94">电子书订单</span>
                                            <span v-if="item.itemList[0].productType== 91">纸书订单</span>
                                        </div>
                                    </el-col>
                                    <el-col :span="3">
                                        <div style="font-size:16px;text-align:center;margin-top:45px;">x{{item1. productNum}}</div>
                                    </el-col>
                                    <el-col :span="3">
                                        <div style="font-size:16px;text-align:center;margin-top:45px;">{{item1. productPrice * item1. productNum | filterFun}}</div>
                                    </el-col>
                                </el-row>
                            </div>

                            <div style="margin-top:5px;">

                                <div v-if="Aitem.payStatus==0 && Aitem.status==1" class="elbutt">
                                    <el-button type="text" @click="cancelOrder(outIndex)" id="testUseCancelLocation">
                                        取消订单
                                    </el-button>
                                    <el-button type="primary" @click="myCallBack(outIndex)">
                                        付款
                                        <i class="el-icon-check el-icon--right"></i>
                                    </el-button>
                                </div>
                                <div v-if="Aitem.payStatus==1" class="elbutt">
                                    <el-button type="primary" @click="deleteOrder(outIndex)">
                                        删除订单
                                        <i class="el-icon-check el-icon-close"></i>
                                    </el-button>
                                </div>

                            </div>
                          <div class="realAmount">
                            <div v-if="Aitem.payStatus==1" style="display:inline-block;margin-left:30px;">已付款：<span>￥{{Aitem.realAmount || 0 }}</span></div>
                            <div v-if="Aitem.payStatus==0 && Aitem.status==1">待支付：<span>￥{{Aitem.realAmount}}</span></div>
                          </div>
                          <div class="realAmount" v-show="Aitem.balanceAmount!='0.00'" style="display:inline-block">下载币抵扣：<span>￥{{Aitem.balanceAmount || 0 }}</span></div>
                          <div class="realAmount" v-show="Aitem.couposAmount!='null' && Aitem.couposAmount!='0.00'">优惠券减免：<span>￥{{Aitem.couposAmount || 0 }}</span></div>
                          <div class="realAmount" v-show="Aitem.orderList[0] && Aitem.orderList[0].activityRemark && Aitem.orderList[0].activityRemark!='0.00'">活动减免：<span>￥{{Aitem.orderList[0] && Aitem.orderList[0] && Aitem.orderList[0].activityRemark || 0 }}</span></div>
                        </div>
                    </div>
                </div>
                <div class="emptyColl" v-else>
                    <img src="../../assets/img/empty.png" alt="">
                    <div>订单是空的~快去购买吧</div>
                </div>
                <ui_pagination :pageMessage="{totalCount: this.myOrderList.data && this.myOrderList.totalCount - 0 || 0}" :excuteFunction="pagingF" :page-sizes="[8,16,32,64]"></ui_pagination>
            </div>
            <!-- 订单详情 -->
            <div v-show="currentShow=='details'">
                <div v-for="item in orderDetails" :key="item.id">
                    <div style="margin-bottom:20px;">
                    <el-card class="box-card"  v-if="item.itemList[0].productType == 91 ">
                    <div slot="header" class="clearfix">
                    <i class="el-icon-location"></i><span>收货信息</span>
                    </div>
                    <div  class="text item">
                    <p>收货人：<span>{{item.deliveryPerson}}</span></p>
                    <p>电话：<span>{{item.deliveryContact}}</span></p>
                    <p>收货地址：<span>{{item.deliveryAddress}}</span></p>
                    </div>
                    </el-card>

                    <el-card class="box-card" style="vertical-align: top;" v-if="item.receiptType != ''">
                    <div slot="header" class="clearfix">
                     <i class="el-icon-printer"></i><span>发票信息</span>
                    </div>
                    <div  class="text item">
                    <p>发票类型：
                        <span v-if="item.receiptType==1">个人</span>
                        <span v-if="item.receiptType==2">增值税发票</span>
                    </p>
                    <p>发票抬头：<span>{{item.receiptTitle}}</span></p>
                    <p v-if="item.receiptType==1">发票内容：<span>{{item.receiptId}}</span></p>
                    </div>
                    </el-card>

                    <el-card class="box-card" style="vertical-align: top;">
                    <div slot="header" class="clearfix">
                    <i class="el-icon-goods"></i><span>支付详情</span>
                    </div>
                    <div  class="text item">
                    <p>支付方式：
                        <span v-if="item.payMethod=='Weixin'">微信支付</span>
                        <span v-if="item.payMethod=='Alipay'">支付宝</span>
                        <span v-if="item.payMethod=='Balance'">下载币</span>
                    </p>
                    <p>商品总计：<span>{{item.orderTotalPrice | filterFun}}</span></p>
                    <p>运费总计：<span>{{item.deliveryPrice}}元</span></p>
                    </div>
                    </el-card>
                    <el-card class="box-card" style="vertical-align: top;">
                    <div slot="header" class="clearfix">
                    <i class="el-icon-edit"></i><span>备注信息</span>

                    </div>
                    <div  class="text item" style="word-break:break-word;">
                    <p v-text="item.payRemark"></p>
                    </div>
                    </el-card>
                    </div>


                    <div style="float:right;margin-right:20px;">
                        <span style="display:inline-block;float:left;font-size:14px;margin-top:7px;float:right" v-if="item.payStatus==0 && item.status==1">订单状态：待付款</span>
                        <span style="display:inline-block;float:left;font-size:14px;margin-top:7px;float:right" v-if="item.payStatus==1">订单状态：已完成</span>
                        <span style="display:inline-block;float:left;font-size:14px;margin-top:7px;float:right" v-if="item.payStatus==0 && item.status==2">订单状态：已取消</span>
                    </div>
                    <div class="grid-content bg-purple" style="padding:0 20px;border: 1px solid rgb(223, 236, 236);">
                        <span style="display:inline-block;float:left;font-size:14px;margin-top:7px;margin-right:50px;">

                            <i class="el-icon-time"></i> {{item.createTime}}</span>
                        <span style="display:inline-block;float:left;font-size:14px;margin-top:7px;margin-right:50px;">订单号：{{item.orderCode}}</span>
                    </div>
                    <el-row class="cent" v-for="item1 in item.itemList" :key="item1.id">
                        <el-col :span="15">
                            <div style="height: 100px;">
                                <img onload="DrawImage(this,120,100)" v-bind:src="item1.bigPic || '../assets/img/zwfm.png'" style="float:left;text-align: center;line-height: 100px;" alt="暂无封面">
                                <div class="itemlist">
                                    <span style="margin-top:5px;" :title="item1.productName">{{item1.productName||"暂无书名"}}</span>
                                    <span style="font-size:16px;margin-top:25px;">作者：{{item1.author||"暂无作者"}}</span>
                                </div>
                                <!-- <el-button @click="showReturn(item,item1)" v-if="item.itemList[0].productType == 91">退货</el-button> -->
                            </div>
                        </el-col>
                        <el-col :span="3">
                            <div style="font-size:16px;text-align:center;margin-top:45px;">x{{item1. productNum}}</div>
                        </el-col>
                        <el-col :span="3">
                            <div style="font-size:16px;text-align:center;margin-top:45px;">{{item1. memberPrice * item1. productNum | filterFun}}</div>
                        </el-col>
                        <el-col :span="3">
                            <div style="font-size:16px;text-align:center;margin-top:45px;text-decoration: line-through;">{{item1. productPrice * item1. productNum | filterFun}}</div>
                        </el-col>

                    </el-row>
                    <div style="float:right; margin:25px 10px 0 10px;">
                      <el-button type="primary" @click="goBack()">返回</el-button>
                    </div>
                    <div class="paybutt">
                      <!-- <el-button type="primary" size="large" v-if="this.myOrderList[outIndex]==0 && this.myOrderList[outIndex].status==1">提交订单</el-button> -->
                        <span style="font-size:20px;margin:20px;">订单总额：{{item.orderTotalPrice + item.deliveryPrice | filterFun}}</span>
                        </br>
                    </div>


                </div>
            </div>
            <!-- 退货 -->
            <div v-show="currentShow=='return'">
              <div style="margin-bottom:10px;">
              <el-steps :space="150" :active="1" :align-center="true" :center="true" >
                <el-step title="提交申请" icon="el-icon-edit"></el-step>
                <el-step title="商家审核" icon="el-icon-document"></el-step>
                <el-step title="用户发货" icon="el-icon-upload2"></el-step>
                <el-step title="审核退款" icon="el-icon-setting"></el-step>
                <el-step title="完成退货" icon="el-icon-check"></el-step>
              </el-steps>
              </div>

              <div class="ordernav">
                    <el-row :gutter="1">
                        <el-col :span="14">
                            <div class="grid-content bg-purple-light">商品名称</div>
                        </el-col>
                        <el-col :span="4">
                            <div class="grid-content bg-purple-light">购买数量</div>
                        </el-col>
                        <el-col :span="6">
                            <div class="grid-content bg-purple-light">下单时间</div>
                        </el-col>
                    </el-row>
                </div>
              <el-row class="cent">
                  <el-col :span="14">
                      <div style="margin: 10px;height: 100px;">
                          <img v-bind:src="returnBigPic || '../assets/img/zwfm.png'" onload="DrawImage(this,120,100)" style="float:left;text-align: center;line-height: 100px;" alt="暂无封面">
                          <div class="itemlist">
                              <span style="margin-top:5px;">{{returnProductName}}</span>
                              <span style="font-size:14px;margin-top:25px;">作者：{{returnAuthor}}</span>
                          </div>
                      </div>
                  </el-col>
                  <el-col :span="4">
                      <div style="font-size:16px;text-align:center;margin-top:45px;">{{max}}</div>
                  </el-col>
                  <el-col :span="6">
                      <div style="font-size:16px;text-align:center;margin-top:45px;">{{returnCreateTime}}</div>
                  </el-col>
              </el-row>

              <div style="border:1px solid rgb(236, 223, 223);margin-top:30px;padding:30px">
                  <!-- 计数器 -->
                  <div style=" margin-bottom:20px;">
                      <span style="margin-right:20px;">退货数量:</span>
                      <el-input-number v-model="num" @change="handleChange" :min="1" :max="max" size="small"></el-input-number>
                  </div>
                  <!-- 文本框 -->
                  <div style="margin-bottom:20px;">
                      <div style="margin-right:20px;display:inline-block;">问题描述:</div>
                      <el-input @change="textChange" @blur="textBlur" class="textarea" type="textarea" :autosize="{ minRows: 4, maxRows: 8}" placeholder="请描述问题" v-model="textarea" style="width:700px;vertical-align:text-top;float：left;">
                      </el-input>
                  </div>
                  <!-- 图片上传 -->
                  <div>
                    <span style="margin-right:20px;">上传图片:</span>
                      <el-upload
                        style="display:inline-block;"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove">
                        <i class="el-icon-plus" style="margin:55px auto;!important"></i>
                      </el-upload>
                      <el-dialog v-model="dialogVisible" size="tiny">
                        <img width="100%" :src="dialogImageUrl" alt="">
                      </el-dialog>
                  </div>
                </div>
                <div style="margin:30px 5px;float:right;">
                      <el-button type="primary" size="large"  @click="applyReturnGoods()">申请退货</el-button>
                </div>
            </div>
    </section>
</template>
<script type="text/ecmascript-6">
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  name: "list",
  reused: true,
  props: ["namespace"],
  mounted() {
    this.$store.dispatch("personalCenter/queryUser", {
      loadedCallBack: this.loadedCallBack
    });
  },
  computed: {
    ...mapGetters({
      /*member: "page/member/login/getMember", // 获取用户信息*/
      member: "personalCenter/getMember", // 在vuex里面获取用户信息
      myOrderList: "personalCenter/getOrderList", // 获取订单列表
      orderDetails: "personalCenter/getOrderDetails", // 获取订单详情
      commitInfo: "personalCenter/getCommitInfo" // 获取订单号等信息
    })
  },
  data() {
    return {
      currentShow: "list",
      title: ["list", "details", "return"],
      myData: [],
      dialogTableVisible: false,
      // 订单列表状态
      payStatusNum: "",
      displayCancel: "",
      // 退换货
      num: 1,
      max: 10,
      textarea: "",
      dialogImageUrl: "",
      dialogVisible: false,
      returnNum: "",
      returnAuthor: "",
      returnCreateTime: "",
      returnBigPic: "",
      returnProductName: "",
      returnReasons: "",
      //退换货结束
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value4: ""
    };
  },
  filters: {
    filterFun: function(value) {
      return "¥ " + value.toFixed(2) + "元";
    }
  },
  methods: {
    /*显示状态*/
    showCurrent(index) {
      this.currentShow = this.title[index];
    },
    // 展示退换货
    showReturn(item, item1) {
      let productName = item1.productName;
      let author = item1.author;
      let bigPic = item1.bigPic;
      let orderCode = item.orderCode;
      let loginName = item.loginName;
      let returnNum = item1.productNum;
      let createTime = item.createTime;
      let pubId = item1.pubId;

      this.max = returnNum;
      this.returnAuthor = author;
      this.returnCreateTime = createTime;
      this.returnProductName = productName;
      this.returnBigPic = bigPic;

      console.log(orderCode);
      console.log(returnNum);
      console.log(createTime);
      console.log(loginName);
      console.log(pubId);
      console.log(productName);
      console.log(author);
      console.log(bigPic);
      console.log(returnNum);
      this.currentShow = "return";
    },
    // 文本框
    textChange(value) {
      console.log(value);
      let textValue = value;
      this.returnReasons = textValue;
    },
    textBlur() {
      if (this.returnReasons.length == 0) {
      }
      console.log(this.returnReasons);
    },
    // 退换货计数器
    handleChange(value) {
      console.log(value);
    },
    // 退换货图片上传
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 退换货申请
    applyReturnGoods() {
      var params = {
        orderItemId:1,

      };
      this.$store.dispatch("personalCenter/applyReturnGoods", params);
    },
    // 详情页返回列表页
    goBack() {
      this.currentShow = "list";
    },
    showDetails(outIndex, index) {
      var orderId = this.myOrderList.data[outIndex].orderList[index].orderId;
      var param = {
        orderId: orderId,
        cb: this.showDetailsCallb
      };
      this.$store.dispatch("personalCenter/queryOrderDetails", param);
    },
    showDetailsCallb() {
      this.currentShow = "details";
    },
    loadedCallBack() {
      var param = {
        pageIndex: 1,
        pageSize: 8,
        payStatus: "",
        status: ""
      };
      this.$store.dispatch("personalCenter/queryOrderList", param);
    },
    // 订单付款
    myCallBack(outIndex, index) {
      var payMethod = this.myOrderList.data[outIndex].orderList[0].payMethod;
      var _this = this;
      var loading = {};
      var params = {
        param: {
          parentOrderCode: this.myOrderList.data[outIndex].parentOrderCode
        },
        myCallback: function() {
          var argus = {
            orderId: _this.commitInfo.orderId,
            orderCode: _this.commitInfo.orderCode,
            status: _this.commitInfo.status, // 订单状态
            payMethodCode: _this.commitInfo.payMethodCode,
            paymentType: _this.commitInfo.paymentType // true需要跳转 false不需要
          };
          if (this.commitInfo.submitStatus) {
            // 提交成功
            if (_this.commitInfo.paymentType) {
              // 需要跳转支付宝支付/微信扫描二维码页面
              if (payMethod === "Alipay") {
                // 支付宝支付
                loading.close();
                window.open(
                  CONFIG.BASE_URL +
                    "/epay/getPayForm.do?orderId=" +
                    argus.orderId +
                    "&loginName=" +
                    _this.member.loginName +
                    "&payMethodCode=" +
                    argus.payMethodCode + '&siteId=' + CONFIG.SITE_CONFIG.siteId,
                  "_self"
                );
                window.history.pushState(null, null, "../pages/errorpage.html"); // 添加历史记录
              } else if (payMethod === "Weixin") {
                // 微信支付

                axios
                  .get(
                    CONFIG.BASE_URL +
                      "/epay/getPayForm.do?orderId=" +
                      argus.orderId +
                      "&loginName=" +
                      _this.member.loginName + "&payMethodCode=" +
                    argus.payMethodCode + '&siteId=' + CONFIG.SITE_CONFIG.siteId
                  )
                  .then(function(response) {
                    loading.close();
                    var data = response.data.substring(
                      response.data.indexOf("<a>") + 3,
                      response.data.indexOf("</a>")
                    );
                    var orderCode = response.data.substring(
                      response.data.indexOf("<div>") + 5,
                      response.data.indexOf("</div>")
                    );
                    window.location.href =
                      "../pages/qrcode.html?data=" +
                      data +
                      "&orderCode=" +
                      orderCode;
                  });
              }
            } else {
              // 不需要跳转支付页面 实付金额为0
              window.location.href =
                "../pages/commitorder.html#/commitOrder/" +
                _this.commitInfo.orderCode +
                "/" +
                _this.commitInfo.status +
                "/order";
            }
          } else {
            // 提交失败
            loading.close();
            var errorMsg = this.commitInfo.errMsg
              ? this.commitInfo.errMsg
              : "订单提交有误";
            _this.$alert(errorMsg, "系统提示", {
              confirmButtonText: "确定"
            });
          }
        }
      };
      this.$store.dispatch("personalCenter/commitOrder", params);
      loading = this.$loading({ fullscreen: true });
    },
    changeDateValue(value) {
      var stime = value[0];
      var etime = value[1];
      var param = {
        stime: stime,
        etime: etime
      };
      this.$store.dispatch("personalCenter/queryTimeList", param);
    },
    // 订单筛选 删除 取消
    all() {
      this.payStatusNum = "";
      this.displayCancel = "";
      var param = {
        pageIndex: 1,
        pageSize: 8,
        payStatus: "",
        status: ""
      };
      this.$store.dispatch("personalCenter/queryOrderList", param);
    },
    wait() {
      this.payStatusNum = 0;
      this.displayCancel = 1;
      var param = {
        pageIndex: 1,
        pageSize: 8,
        payStatus: 0,
        status: 1
      };
      this.$store.dispatch("personalCenter/queryOrderList", param);
    },
    pagingF({ pageNo, pageSize }) {
      var param = {
        pageIndex: pageNo,
        pageSize: pageSize,
        payStatus: this.payStatusNum,
        status: this.displayCancel
      };
      this.$store.dispatch("personalCenter/queryOrderList", param);
    },
    cancelOrder(outIndex) {
      var id = this.myOrderList.data[outIndex].id;
      var param = {
        id: id,
        cb: this.cancelOrderCallb
      };
      this.$store.dispatch("personalCenter/cancelOrder", param);
    },
    cancelOrderCallb(idata, rep) {
      if (idata == 1) {
        var param = {
          pageIndex: 1,
          pageSize: 8,
          payStatus: this.payStatusNum,
          status: this.displayCancel
        };
        this.$store.dispatch("personalCenter/queryOrderList", param);
        this.$message({
          type: "success",
          message: "取消成功"
        });
      } else {
        this.$message({
          type: "info",
          message: "取消失败，请重试"
        });
      }
    },
    deleteOrder(outIndex) {
      var id = this.myOrderList.data[outIndex].id;
      var param = {
        id: id,
        cb: this.deleteOrderCallb
      };
      this.$store.dispatch("personalCenter/deleteOrder", param);
    },
    deleteOrderCallb(idata, rep) {
      if (idata == 1) {
        var param = {
          pageIndex: 1,
          pageSize: 8,
          payStatus: this.payStatusNum,
          status: this.displayCancel
        };
        this.$store.dispatch("personalCenter/queryOrderList", param);
        this.$message({
          type: "success",
          message: "删除成功"
        });
      } else {
        this.$message({
          type: "info",
          message: "删除失败，请重试"
        });
      }
    }
  }
};
</script>
<style scoped>
.mainlist {
  margin: 50px 0;
}

.cent {
  border: 1px solid rgb(223, 236, 236);
}

.itemlist {
  height: 100px;
  float: left;
}

.itemlist span {
  font-size: 18px;
  padding-left: 20px;
  line-height: 30px;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 380px;
}

.itemlist span:last-child {
  font-size: 14px;
}

.bord {
  height: 140px;
  line-height: 140px;
  font-size: 18px;
  text-align: center;
  border-right: 1px solid rgb(223, 236, 236);
}

.bordl {
  border-left: 1px solid rgb(223, 236, 236);
}

.ordernav {
  margin-top: 20px;
  text-align: center;
  font-size: 16px;
  line-height: 36px;
}

.elbutt {
  float: right;
}

.el-row {
  &:last-child {
    margin-bottom: 0;
  }
  overflow: hidden;
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.emptyColl {
  text-align: center;
  padding: 50px 0px;
}

.emptyColl img {
  width: 150px;
}
.item {
  font-size: 16px;
  line-height: 36px;
}

.title {
  padding-left: 20px;
}

.det p {
  text-indent: 0.5em;
  width: 192.7px;
  word-break: break-all;
}
.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.paybutt {
  display: block;
  margin-top: 30px;
  float: right;
}
.realAmount {
  font-size: 18px;
  float: right;
  margin: 5px 20px 0 0;
}
.realAmount span {
  color: red;
}
/* 退换货 */
</style>
<style>
.el-input-number__decrease {
  height: 29px !important;
}
.el-input-number__increase {
  height: 29px !important;
}
.el-icon-minus {
  margin-top: 8px;
}
.el-icon-plus {
  margin-top: 7px;
}
.box-card {
  width: 210px;
  display: inline-block;
}
.box-card p {
  margin-bottom: 10px;
}
.box-card .clearfix span {
  margin-left: 3px;
  color: #303133;
  font-size: 16px;
}
.box-card .text p {
  color: #303133;
  font-size: 14px;
}
.box-card .text p span {
  color: #606266;
}
</style>
