<template>
  <div class="work_mobile_personalcenter_15">
    <div class="work_mobile_personalcenter_15_list" v-show="currentShow=='list'">
      <van-tabs v-model="active" @click="clickTab">
        <van-tab v-for="(item,index) in tabtitle" :title="item" :key="index">
        </van-tab>
      </van-tabs>
      <ul class="work_mobile_personalcenter_15_list_ul">
        <li class="work_mobile_personalcenter_15_list_ul_li" v-if="consumeLists && consumeLists.length > 0" v-for="(item, outIndex) in consumeLists" :key="outIndex">
          <div class="work_mobile_personalcenter_15_list_ul_li_headinformation">
            <span class="work_mobile_personalcenter_15_list_ul_li_headinformation_parentOrderCode"> {{item.parentOrderCode}} </span>
            <span class="work_mobile_personalcenter_15_list_ul_li_headinformation_createTime"> {{item.createTime}} </span>
          </div>
          <ul class="work_mobile_personalcenter_15_list_ul_li_mainbox">
            <li class="work_mobile_personalcenter_15_list_ul_li_mainbox_li" v-for="(subItem, index) in item.orderList" :key="index">
              <ul class="work_mobile_personalcenter_15_list_ul_li_mainbox_li_ul">
                <li class="work_mobile_personalcenter_15_list_ul_li_mainbox_li_ul_li" v-for="(order, innerindex) in  subItem.itemList" :key="innerindex" @click="toDetails(outIndex,index)">
                  <van-card :title="order.productName" :desc="order.author" :num="order.productNum" :price="order.memberPrice" :thumb="order.bigPic">
                  </van-card>
                </li>
              </ul>
            </li>
            <div class="work_mobile_personalcenter_15_list_ul_li_mainbox_footerinformation">
              <span class="work_mobile_personalcenter_15_list_ul_li_mainbox_footerinformation_pendingPayment" v-if="item.payStatus==0 && item.status==1">{{display.pendingPayment}}</span>
              <span class="work_mobile_personalcenter_15_list_ul_li_mainbox_footerinformation_collectGoods" v-if="item.payStatus==1">{{display.collectGoods}}</span>
              <span class="work_mobile_personalcenter_15_list_ul_li_mainbox_footerinformation_complete" v-if="item.payStatus==5">{{display.complete}}</span>
              <span class="work_mobile_personalcenter_15_list_ul_li_mainbox_footerinformation_cancel" v-if="item.payStatus==0 && item.status==2">{{display.cancel}}</span>
              <span class="work_mobile_personalcenter_15_list_ul_li_mainbox_footerinformation_total">{{display.total}}：{{item.realAmount}}</span>
            </div>
            <div class="work_mobile_personalcenter_15_list_ul_li_mainbox_pendingPaymentBtn" v-if="item.payStatus==0 && item.status==1">
              <van-button size="small" @click="cancelOrder(outIndex)">
                {{display.cancelOrder}}
              </van-button>
              <van-button size="small">
                {{display.payment}}
              </van-button>
            </div>
            <div v-if="item.payStatus==1" class="work_mobile_personalcenter_15_list_ul_li_mainbox_collectGoodsBtn">
              <van-button size="small" @click="toLogistics">
                {{display.lookLogistics}}
              </van-button>
              <van-button size="small" @click="toConfirm">
                {{display.confirmReceipt}}
              </van-button>
            </div>
            <div v-if="item.payStatus==5" class="work_mobile_personalcenter_15_list_ul_li_mainbox_completeBtn">
              <van-button size="small" @click="deleteOrder(outIndex)">
                {{display.deleteOrder}}
              </van-button>
            </div>
          </ul>
        </li>
        <span class="work_mobile_personalcenter_15_list_ul_empty" v-if="consumeLists && consumeLists.length == 0">{{display.empty}}</span>
      </ul>
    </div>
    <div class="work_mobile_personalcenter_15_details" v-show="currentShow=='details'">
      <div class="work_mobile_personalcenter_15_details_mainbox" v-for="item in orderDetails" :key="item.id">
        <div class="work_mobile_personalcenter_15_details_mainbox_orderstatus">
          <span v-if="item.payStatus==0 && item.status==1">{{display.pendingPayment}}</span>
          <span v-if="item.payStatus==1">{{display.collectGoods}}</span>
          <span v-if="item.payStatus==5">{{display.complete}}</span>
          <span v-if="item.payStatus==0 && item.status==2">{{display.cancel}}</span>
        </div>
        <div class="work_mobile_personalcenter_15_details_mainbox_receiptinformation">
          <span class="work_mobile_personalcenter_15_details_mainbox_receiptinformation_person">{{item.deliveryPerson}}</span>
          <span class="work_mobile_personalcenter_15_details_mainbox_receiptinformation_contact">{{item.deliveryContact}}</span>
          <span class="work_mobile_personalcenter_15_details_mainbox_receiptinformation_address">{{item.deliveryAddress}}</span>
        </div>
        <div class="work_mobile_personalcenter_15_details_mainbox_timeandcode">
          <span class="work_mobile_personalcenter_15_details_mainbox_timeandcode_createTime">{{item.createTime}}</span>
          <span class="work_mobile_personalcenter_15_details_mainbox_timeandcode_orderCode">{{item.orderCode}}</span>
        </div>
        <ul class="work_mobile_personalcenter_15_details_mainbox_ul">
          <li v-for="(inneritem, innerindex) in  item.itemList" :key="inneritem.id" class="work_mobile_personalcenter_15_details_mainbox_li">
            <van-card :title="inneritem.productName" :desc="inneritem.author" :num="inneritem.productNum" :price="inneritem.memberPrice" :thumb="inneritem.bigPic">
            </van-card>
          </li>
        </ul>
        <div>
          <van-button @click="goBack()">返回</van-button>
        </div>
        <div class="work_mobile_personalcenter_15_details_mainbox_footerinformation">
          <span class="work_mobile_personalcenter_15_details_mainbox_footerinformation_total">{{display.total}}：{{item.orderTotalPrice | filterFun}}</span>
          <span class="work_mobile_personalcenter_15_details_mainbox_footerinformation_express">{{display.express}}：{{item.deliveryPrice | filterFun}}</span>
          <span class="work_mobile_personalcenter_15_details_mainbox_footerinformation_realPay">{{display.realPay}}：{{item.orderTotalPrice + item.deliveryPrice | filterFun}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Get, mobileLoading } from "@common";
import { mapGetters } from "vuex";
import * as interfaces from "@work/login/common/interfaces.js";
import PROJECT_CONFIG from "projectConfig";
import { Tab, Tabs, Card, Toast } from "vant"; //标签页 卡片 轻提示
Vue.use(Tab).use(Tabs);
Vue.use(Card);
export default {
  name: "work_mobile_personalcenter_15",
  props: ["namespace"],
  reused: true,
  data() {
    return {
      CONFIG: null,
      display: "", // 组件静态文本
      consumeLists: [],
      orderDetails: [],
      currentShow: "list", //页面切换(list--订单页 details--详情页)
      totalCount: "0", // 订单总个数
      totalPages: "0", // 订单总页数
      pageIndex: "1", // 页码 从 1 开始
      pageSize: "15", // 每页显示个数
      orderType: "book", // 总单类型
      active: 0, //tab
      tabtitle: [], //tab切换
      expCode: "YTO", //快递方式
      expNo: "889645294678455192", //快递单号
      kdnOptionsBaseUrl: "http://www.kdniao.com" //快递鸟地址
    };
  },

  computed: {
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER
    })
  },

  created() {
    this.CONFIG =
      PROJECT_CONFIG[
        this.namespace
      ].work_mobile_personalcenter.work_mobile_personalcenter_15;
    this.ORDERCONFIG = this.CONFIG.getMyOrder; //获取订单列表接口
    this.ORDERDETAILS = this.CONFIG.getOrderDetails; //获取订单详情接口
    this.ORDERCANCEL = this.CONFIG.cancelOrder; //取消订单接口
    this.ORDERDELETE = this.CONFIG.deleteOrder; //删除订单接口
    this.display = this.CONFIG.display;
    this.tabtitle = this.display.tabTitle;
    this.initData();
  },

  mounted() {
    /*检测滚动条*/
    $(window).scroll(() => {
      /**
       * function 下拉底部加载
       * params1: vue对象
       * params2: 回调方法
       */
      mobileLoading(this, "queryMyOrder");
    });
  },
  methods: {
    initData(loginName) {
      // 初始化数据
      this.pageSize = this.ORDERCONFIG.params.pageSize;
      this.pageIndex = this.ORDERCONFIG.params.pageIndex;
      this.queryMyOrder(loginName); // 获取我的订单
    },
    queryMyOrder(loginName) {
      let params = Object.assign({}, this.ORDERCONFIG.params);
      Get(
        CONFIG.BASE_URL +
          this.ORDERCONFIG.url +
          "?loginName=" +
          (loginName ? loginName : this.member.loginName) +
          "&pageIndex=" +
          this.pageIndex +
          "&pageSize=" +
          this.pageSize +
          "&siteId=" +
          CONFIG.SITE_CONFIG.siteId +
          "&payStatus=" +
          params.payStatus +
          "&status=" +
          params.status +
          "&orderType=" +
          this.orderType
      ).then(resp => {
        let res = resp.data;
        // this.consumeLists = res.data;
        if (res.result == "1" && res.data.length > 0) {
          this.consumeLists = this.consumeLists.concat(res.data);
          this.totalCount = res.totalCount;
          this.totalPages = res.totalPages;
        }
      });
    },
    //tab切换
    clickTab(index) {
      if (index == 0) {
        this.orderType = "book";
      } else if (index == 1) {
        this.orderType = "periodical";
      } else {
        console.log("知识服务订单");
      }
      this.initData();
    },
    //前往详情页
    toDetails(outIndex, index) {
      var orderId = this.consumeLists[outIndex].orderList[index].orderId;
      Get(CONFIG.BASE_URL + this.ORDERDETAILS.url + "?orderId=" + orderId).then(
        resp => {
          this.orderDetails = resp.data.data;
          this.currentShow = "details";
        }
      );
    },
    //返回订单页
    goBack() {
      this.currentShow = "list";
    },
    //前往物流页
    toLogistics() {
      this.backUrl = window.location.href;
      window.location.href =
        this.kdnOptionsBaseUrl +
        "/JSInvoke/MSearchResult.aspx?expCode=" +
        this.expCode +
        "&expNo=" +
        this.expNo +
        "&backUrl=" +
        window.location.href;
    },
    //确认收货
    toConfirm() {},
    //取消订单
    cancelOrder(outIndex) {
      var orderId = this.consumeLists[outIndex].id;
      Get(CONFIG.BASE_URL + this.ORDERCANCEL.url + "?orderId=" + orderId).then(
        resp => {
          console.log(resp);
          if (resp.data.result == 1) {
            this.initData();
            Toast.success("取消成功");
          } else {
            Toast.fail("取消失败");
          }
        }
      );
    },
    //删除订单
    deleteOrder(outIndex) {
      var id = this.consumeLists[outIndex].id;
      Get(CONFIG.BASE_URL + this.ORDERDELETE.url + "?id=" + id).then(resp => {
        if (resp.data.result == 1) {
          this.initData();
          Toast.success("删除成功");
        } else {
          Toast.fail("删除失败");
        }
      });
    }
  },
  filters: {
    filterFun: function(value) {
      return "¥ " + value.toFixed(2) + "元";
    }
  },
  watch: {
    member: function(newValue, oldValue) {
      if (newValue.loginName && newValue.loginName != oldValue.loginName) {
        this.initData(newValue.loginName); // 初始化数据之后再执行查询订单的方法
      }
    }
  }
};
</script>

<style>
.work_mobile_personalcenter_15 {
  font-size: 0.3rem;
  padding: 0.5rem;
}
</style>

