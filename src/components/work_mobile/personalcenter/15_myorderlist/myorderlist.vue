<template>
  <div class="work_mobile_personalcenter_15">
    <div class="work_mobile_personalcenter_15_list" v-show="currentShow=='list'">
      <van-tabs v-model="active" @click="clickTab">
        <van-tab v-for="(item,index) in tabtitle" :title="item" :key="index">
        </van-tab>
      </van-tabs>
      <ul class="work_mobile_personalcenter_15_list_ul">
        <!-- v-if 和 v-for 分两个标签使用 -->
        <template v-if="consumeLists && consumeLists.length > 0">        
          <li class="work_mobile_personalcenter_15_list_ul_li" v-for="(item, outIndex) in consumeLists" :key="outIndex">
            <div class="work_mobile_personalcenter_15_list_ul_li_headinformation">
              <span class="work_mobile_personalcenter_15_list_ul_li_headinformation_parentOrderCode">{{display.orderNumber}}{{item.parentOrderCode}} </span>
              <span class="work_mobile_personalcenter_15_list_ul_li_headinformation_createTime"> {{item.createTime.slice(0,10)}} </span>
            </div>
            <ul class="work_mobile_personalcenter_15_list_ul_li_mainbox">
              <li class="work_mobile_personalcenter_15_list_ul_li_mainbox_li" v-for="(subItem, index) in item.orderList" :key="index">
                <ul class="work_mobile_personalcenter_15_list_ul_li_mainbox_li_ul" v-if="orderType=='book' || orderType=='periodical'">
                  <li class="work_mobile_personalcenter_15_list_ul_li_mainbox_li_ul_li" v-for="(order, innerindex) in  subItem.itemList" :key="innerindex" @click="toDetails(outIndex,index,item.realAmount)">
                    <van-card v-if="orderType=='book'" :title="order.productName" :desc="order.author" :num="order.productNum" :price="order.memberPrice" :thumb="order.bigPic">
                    </van-card>
                    <van-card v-else-if="orderType=='periodical'" :title="order.periodicalName" :desc="order.periodicalRemark" :price="order.totalPrice" :thumb="order.bigPic">
                    </van-card>
                  </li>
                </ul>
                <!-- 知识服务没有订单详情 -->
                <ul v-else class="work_mobile_personalcenter_15_list_ul_li_mainbox_li_ul work_mobile_personalcenter_15_list_ul_li_mainbox_li_ul02">
                  <li class="work_mobile_personalcenter_15_list_ul_li_mainbox_li_ul_li" v-for="(order, innerindex) in  subItem.itemList" :key="innerindex">
                    <van-card :title="order.productName" :desc="order.author" :price="order.productPrice">
                    </van-card>
                  </li>
                </ul>
                <div v-if="orderType !== 'knowledge'" class="work_mobile_personalcenter_15_list_ul_li_mainbox_footerinformation">
                  <span class="work_mobile_personalcenter_15_list_ul_li_mainbox_footerinformation_pendingPayment" v-if="item.payStatus==0 && item.status==1">{{display.pendingPayment}}</span>
                  <span class="work_mobile_personalcenter_15_list_ul_li_mainbox_footerinformation_collectGoods" v-if="item.payStatus==1&& subItem.deliveryStatus < 3">{{display.collectGoods}}</span>
                  <!-- <span class="work_mobile_personalcenter_15_list_ul_li_mainbox_footerinformation_complete" v-if="item.payStatus==5">{{display.complete}}</span> -->
                  <span class="work_mobile_personalcenter_15_list_ul_li_mainbox_footerinformation_complete" v-if="item.payStatus==1 && subItem.deliveryStatus==3">{{display.complete}}</span>

                  <span class="work_mobile_personalcenter_15_list_ul_li_mainbox_footerinformation_cancel" v-if="item.payStatus==0 && item.status==2">{{display.cancel}}</span>
                  <span class="work_mobile_personalcenter_15_list_ul_li_mainbox_footerinformation_deliveryPrice">{{display.express2}}{{display.money}}{{toFixed2(item.orderList[0].deliveryPrice)}}{{display.express2End}}</span>
                  <span class="work_mobile_personalcenter_15_list_ul_li_mainbox_footerinformation_total">{{display.total}}：<em><i>{{display.money}}</i>{{Number(item.realAmount)+Number(item.balanceAmount)}}</em></span>
                  <span class="work_mobile_personalcenter_15_list_ul_li_mainbox_footerinformation_totalnum" v-if="orderType=='book'">{{display.all}}{{item.totalProductNum}}{{display.numtext}}</span>
                  <!-- 期刊不展示数量-->
                  <span class="work_mobile_personalcenter_15_list_ul_li_mainbox_footerinformation_balanceDeduct" v-show="item.balanceAmount!='0.00'">{{display.balanceDeduct}}：{{display.money}}{{item.balanceAmount}}</span>
                </div>
                <div v-else class="work_mobile_personalcenter_15_book-list_service_li_content-box_totalmony">{{display.money}}{{item.realAmount}}</div>
                <div v-if="orderType !== 'knowledge'" class="work_mobile_personalcenter_15_list_ul_li_mainbox_li_ul_collectGoodsBtn">
                  <div v-if="subItem.itemList[0].productType!=94 && item.payStatus==1 && subItem.deliveryStatus==0" class="work_mobile_personalcenter_15_list_ul_li_mainbox_li_ul_collectGoodsBtn_pendingDelivery">
                    <span>{{display.pendingDelivery}}</span>
                  </div>
                  <div v-if="subItem.itemList[0].productType!=94 && item.payStatus==1 && subItem.deliveryStatus==2" class="work_mobile_personalcenter_15_list_ul_li_mainbox_li_ul_collectGoodsBtn_alreadyShipped">
                    <span>{{display.alreadyShipped}}</span>
                    <van-button size="small" @click="toLogistics">
                      {{display.lookLogistics}}
                    </van-button>
                    <van-button size="small" @click="toConfirm(outIndex,index)">
                      {{display.confirmReceipt}}
                    </van-button>
                  </div>
                  <div v-if="subItem.itemList[0].productType!=94 && item.payStatus==1 && subItem.deliveryStatus==3" class="work_mobile_personalcenter_15_list_ul_li_mainbox_li_ul_collectGoodsBtn_receivedGoods">
                    <span>{{display.receivedGoods}}</span>
                  </div>
                </div>
              </li>
              <div v-if="item.payStatus==0 && item.status==1 && orderType !== 'knowledge'" class="work_mobile_personalcenter_15_list_ul_li_mainbox_pendingPaymentBtn">
                <van-button size="small" @click="toPayOrder(outIndex)">
                  {{display.payment}}
                </van-button>
                <van-button size="small" @click="cancelOrder(outIndex)">
                  {{display.cancelOrder}}
                </van-button>
              </div>
              <div v-if="item.payStatus==5 && orderType !== 'knowledge'" class="work_mobile_personalcenter_15_list_ul_li_mainbox_completeBtn">
                <van-button size="small" @click="deleteOrder(outIndex)">
                  {{display.deleteOrder}}
                </van-button>
              </div>
            </ul>
          </li>
        </template>
        <span class="work_mobile_personalcenter_15_list_ul_empty" v-else>{{display.empty}}</span>
      </ul>
    </div>
    <!-- 订单详情 -->
    <div class="work_mobile_personalcenter_15_bookDetails" v-show="currentShow=='bookDetails'">
      <div class="work_mobile_personalcenter_15_bookDetails_title">{{display.pageTitle}}</div>
      <div class="work_mobile_personalcenter_15_bookDetails_mainbox" v-for="(item,index) in orderDetails" :key="index">
        <div class="work_mobile_personalcenter_15_bookDetails_mainbox_receiptinformation">
          <span class="work_mobile_personalcenter_15_bookDetails_mainbox_receiptinformation_person">{{item.deliveryPerson}}</span>
          <span class="work_mobile_personalcenter_15_bookDetails_mainbox_receiptinformation_contact">{{item.deliveryContact}}</span>
          <span class="work_mobile_personalcenter_15_bookDetails_mainbox_receiptinformation_address">{{item.deliveryAddress}}</span>
        </div>
        <div class="work_mobile_personalcenter_15_bookDetails_mainbox_timeandcode">
          <span class="work_mobile_personalcenter_15_bookDetails_mainbox_timeandcode_createTime">{{item.createTime.slice(0,10)}}</span>
          <span class="work_mobile_personalcenter_15_bookDetails_mainbox_timeandcode_orderCode">{{item.orderCode}}</span>
        </div>
        <div class="work_mobile_personalcenter_15_bookDetails_mainbox_orderstatus">
          <span v-if="item.payStatus==0 && item.status==1">{{display.pendingPayment}}</span>
          <span v-if="item.payStatus==1 && item.deliveryStatus < 3">{{display.collectGoods}}</span>
          <span v-if="item.payStatus==1 && item.deliveryStatus == 3">{{display.complete}}</span>
          <span v-if="item.payStatus==5">{{display.complete}}</span>
          <span v-if="item.payStatus==0 && item.status==2">{{display.cancel}}</span>
        </div>
        <ul class="work_mobile_personalcenter_15_bookDetails_mainbox_ul">
          <li v-for="inneritem  in  item.itemList" :key="inneritem.id" class="work_mobile_personalcenter_15_bookDetails_mainbox_li" @click="tobookdetails(inneritem)">
            <van-card :title="inneritem.productName" :desc="inneritem.author" :num="inneritem.productNum" :price="inneritem.memberPrice" :thumb="inneritem.bigPic">
            </van-card>
          </li>
        </ul>
        <div class="work_mobile_personalcenter_15_bookDetails_mainbox_footerinformation">
          <div class="work_mobile_personalcenter_15_bookDetails_mainbox_footerinformation_spans">
            <span class="work_mobile_personalcenter_15_bookDetails_mainbox_footerinformation_express">{{display.express2}}：{{display.money}}{{display.expressNone}}{{display.express2End}}</span>
            <span class="work_mobile_personalcenter_15_bookDetails_mainbox_footerinformation_total">{{display.total}}：<em><i>{{display.money}}</i>{{item.orderTotalPrice}}</em></span>
            <span class="work_mobile_personalcenter_15_bookDetails_mainbox_footerinformation_totalnum">{{display.all}}{{item.productNum}}{{display.numtext}}</span>
          </div>
          <span class="work_mobile_personalcenter_15_bookDetails_mainbox_footerinformation_express02">{{display.express}}：<em><i>{{display.money}}</i>{{item.deliveryPrice}}</em></span>
          <span class="work_mobile_personalcenter_15_bookDetails_mainbox_footerinformation_realPay">{{display.realPay}}：<em><i>{{display.money}}</i>{{item.realAmount}}</em></span>
        </div>
        <div class="work_mobile_personalcenter_15_bookDetails_mainbox_pendingPaymentBtn" v-if="item.payStatus==0 && item.status==1">
          <van-button size="small" @click="cancelOrder(outIndex)">
            {{display.cancelOrder}}
          </van-button>
          <van-button size="small" @click="toPayOrder(outIndex)">
            {{display.payment}}
          </van-button>
        </div>
        <div v-if="item.payStatus==5" class="work_mobile_personalcenter_15_bookDetails_mainbox_completeBtn">
          <van-button size="small" @click="deleteOrder(outIndex)">
            {{display.deleteOrder}}
          </van-button>
        </div>
        <!-- 确认收货 -->
        <div v-if="item.payStatus==1 && item.deliveryStatus==2" class="work_mobile_personalcenter_15_list_ul_li_mainbox_li_ul_collectGoodsBtn_confirm">
          <van-button size="small" @click="toConfirm(item.orderId,-1)">
            {{display.confirmReceipt}}
          </van-button>
        </div>
      </div>
    </div>
    <div class="work_mobile_personalcenter_15_periodicalDetails" v-show="currentShow=='periodicalDetails'">
      <div class="work_mobile_personalcenter_15_periodicalDetails_mainbox" v-for="item in orderDetails" :key="item.id">
        <div class="work_mobile_personalcenter_15_periodicalDetails_mainbox_timeandcode">
          <span class="work_mobile_personalcenter_15_periodicalDetails_mainbox_timeandcode_createTime">{{item.createTime.slice(0,10)}}</span>
          <span class="work_mobile_personalcenter_15_periodicalDetails_mainbox_timeandcode_orderCode">{{item.orderCode}}</span>
        </div>
        <div class="work_mobile_personalcenter_15_periodicalDetails_mainbox_orderstatus">
          <span v-if="item.payStatus==0 && item.status==1">{{display.pendingPayment}}</span>
          <span v-if="item.payStatus==1">{{display.collectGoods}}</span>
          <span v-if="item.payStatus==5">{{display.complete}}</span>
          <span v-if="item.payStatus==0 && item.status==2">{{display.cancel}}</span>
        </div>
        <ul class="work_mobile_personalcenter_15_periodicalDetails_mainbox_ul">
          <li v-for="inneritem in  item.itemList" :key="inneritem.id" class="work_mobile_personalcenter_15_periodicalDetails_mainbox_li"  @click="toperiodicalDetails(inneritem,$event)">
            <van-card :title="inneritem.periodicalName" :price="inneritem.totalPrice" :thumb="inneritem.bigPic" :desc="inneritem.periodicalRemark">
            </van-card>
            <div class="work_mobile_personalcenter_15_periodicalDetails_mainbox_footerinformation">
              <span class="work_mobile_personalcenter_15_periodicalDetails_mainbox_footerinformation_totalPrice">{{display.total}}：{{display.money}}{{inneritem.realPrice}}</span>
            </div>
          </li>
        </ul>
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
import { Tab, Tabs, Card, Toast, CellGroup } from "vant"; //标签页 卡片 轻提示
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
      kdnOptionsBaseUrl: "http://www.kdniao.com", //快递鸟地址
      loading: true,
      deliveryStatus: "", //订单发货状态
      noScroll: false // 取消订单的时候会请求下一页的数据
    };
  },

  computed: {
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER
    }),
    ...mapGetters({
      commitInfo: "personalCenter/getCommitInfo" // 获取订单号等信息
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
    this.CONFIRMRECEIPT = this.CONFIG.confirmReceipt; //确认收货接口
    this.display = this.CONFIG.display;
    this.tabtitle = this.display.tabTitle;
    this.initData();
    // this.active = sessionStorage.getItem("ordertab_active"); //记住tab切换状态
  },

  mounted() {
    /*检测滚动条*/
    $(window).scroll(() => {
      /**
       * function 下拉底部加载
       * params1: vue对象
       * params2: 回调方法
       */
      if (!this.noScroll) {
        mobileLoading(this, "queryMyOrder");
      }
    });
  },
  methods: {
    initData(loginName) {
      // 初始化数据
      this.pageSize = this.ORDERCONFIG.params.pageSize;
      this.pageIndex = this.ORDERCONFIG.params.pageIndex;
      this.consumeLists = [];
      if (this.active == 1) {
        this.orderType = "periodical";
      }
      this.queryMyOrder(loginName); // 获取我的订单
    },
    queryMyOrder(loginName) {
      if (!loginName && !this.member.loginName) {
        return false;
      }
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
        this.loading = false;
        this.noScroll = false;
      });
    },
    //tab切换
    clickTab(index) {
      if (index == 0) {
        this.orderType = "book";
      } else if (index == 1) {
        this.orderType = "periodical";
      } else {
        this.orderType = "knowledge";
      }
      // 把tab存储到sessionstorage里
      this.active = index;
      // sessionStorage.setItem("ordertab_active", this.active)
      this.initData();
    },
    //前往详情页
    toDetails(outIndex, index,realAmount) {
      var orderId = "";
      if (index === -1) {
        orderId = outIndex;
      } else {
        orderId = this.consumeLists[outIndex].orderList[index].orderId;
      }
      Get(CONFIG.BASE_URL + this.ORDERDETAILS.url + "?orderId=" + orderId).then(
        resp => {
          resp.data.data[0].realAmount = realAmount;
          this.orderDetails = resp.data.data;
          if (this.orderType == "book") {
            var urlData = window.location.href;
            let splicingUrl = urlData.substring(0, urlData.indexOf("#"));
            let splicingUrlend = urlData.substring(
              urlData.indexOf("#"),
              urlData.length
            );
            var jumpEditPage = splicingUrl + "?modal=details" + splicingUrlend;
            let urlDress = urlData.substring(0, urlData.indexOf("?"));
            if (urlDress == "") {
              history.pushState(null, "", jumpEditPage);
            }
            this.currentShow = "bookDetails";
          } else if (this.orderType == "periodical") {
            this.currentShow = "periodicalDetails";
            var urlData = window.location.href;
            let splicingUrl = urlData.substring(0, urlData.indexOf("#"));
            let splicingUrlend = urlData.substring(
              urlData.indexOf("#"),
              urlData.length
            );
            var jumpEditPage = splicingUrl + "?modal=details" + splicingUrlend;
            let urlDress = urlData.substring(0, urlData.indexOf("?"));
            if (urlDress == "") {
              history.pushState(null, "", jumpEditPage);
            }
          } else if (this.orderType == "knowledge") {
            this.currentShow = "knowledgeDetails";
            var urlData = window.location.href;
            let splicingUrl = urlData.substring(0, urlData.indexOf("#"));
            let splicingUrlend = urlData.substring(
              urlData.indexOf("#"),
              urlData.length
            );
            var jumpEditPage = splicingUrl + "?modal=details" + splicingUrlend;
            let urlDress = urlData.substring(0, urlData.indexOf("?"));
            if (urlDress == "") {
              history.pushState(null, "", jumpEditPage);
            }
          }
        }
      );
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
    toConfirm(outIndex, index) {
      var orderId = "";
      if (index === -1) {
        orderId = outIndex;
      } else {
        orderId = this.consumeLists[outIndex].orderList[index].orderId;
      }
      Get(
        CONFIG.BASE_URL +
          this.CONFIRMRECEIPT.url +
          "?orderId=" +
          orderId +
          "&loginName=" +
          this.member.loginName
      ).then(resp => {
        let res = resp.data;
        if (res.result == "1") {
          Toast.success({
            duration: 1000,
            message: "确认收货成功"
          });
          if (index === -1) {
            this.toDetails(outIndex, -1);
          } else {
            this.initData(this.member.loginName); //确认收货后再次请求列表
          }
        } else {
          Toast.fail({
            duration: 1000,
            message: "确认收货失败"
          });
        }
      });
    },
    //取消订单
    cancelOrder(outIndex) {
      var orderId = this.consumeLists[outIndex].id;
      Get(CONFIG.BASE_URL + this.ORDERCANCEL.url + "?orderId=" + orderId).then(
        resp => {
          if (resp.data.result == 1) {
            this.noScroll = true; // 给检测滚动条事件加锁
            this.initData();
            Toast.success({
              duration: 1000,
              message: "取消成功"
            });
          } else {
            Toast.fail({
              duration: 1000,
              message: "取消失败"
            });
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
          Toast.success({
            duration: 1000,
            message: "删除成功"
          });
        } else {
          Toast.fail({
            duration: 1000,
            message: "删除失败"
          });
        }
      });
    },
    //去付款
    toPayOrder(outIndex) {
      var payMethod = this.consumeLists[outIndex].orderList[0].payMethod;
    },
    //去图书详情
    tobookdetails(inneritem) {
      var toDetailUrl = this.CONFIG.toBookDetailUrl;
      var url =
        (toDetailUrl ? toDetailUrl : "./bookdetail.html") +
        "?pubId=" +
        inneritem.pubId;
      window.open(url);
    },
    //去刊种详情
    toperiodicalDetails(inneritem, event) {
      let target = event.target;
      switch (target.className) {
        case "van-card__thumb":
        case "van-card__title":
          var magListDetailUrl = this.CONFIG.toperiodicalDetailsUrl;
          var toMagListDetailUrl =
            (magListDetailUrl ? magListDetailUrl : "./magList.html") +
            "?magName=" +
            inneritem.periodicalName;
          window.open(toMagListDetailUrl);
          break;
      }
    },
    //去刊种详情
    toknowledgeDetails(inneritem) {},
    // 保留两位小数
    toFixed2(num) {
      var result = parseFloat(num);
      if (isNaN(result)) {
        return false;
      }
      result = Math.round(num * 100) / 100;
      let s_x = result.toString();
      let pos_decimal = s_x.indexOf(".");
      if (pos_decimal < 0) {
        pos_decimal = s_x.length;
        s_x += ".";
      }
      while (s_x.length <= pos_decimal + 2) {
        s_x += "0";
      }
      return s_x;
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
.work_mobile_personalcenter_15_book-list_service_li_content-box_totalmony {
  text-align: right;
  color: #e97e54;
  font-size: 0.3rem;
  padding-right: 5%;
}
.work_mobile_personalcenter_15
  .work_mobile_personalcenter_15_list_ul_li_mainbox_li_ul_collectGoodsBtn_confirm {
  background: #fff;
  overflow: hidden;
  padding: 0.12rem 0.33rem;
}
.work_mobile_personalcenter_15
  .work_mobile_personalcenter_15_list_ul_li_mainbox_li_ul_collectGoodsBtn_confirm
  .van-button {
  display: block;
  border: 1px solid #ff7d35;
  color: #ff5c03;
  height: 0.44rem;
  line-height: 0.44rem;
  padding: 0 0.23rem;
  margin-left: 0.2rem;
  -webkit-border-radius: 0.2rem;
  -moz-border-radius: 0.2rem;
  border-radius: 0.2rem;
  font-size: 0.24rem;
  float: right;
}

.work_mobile_personalcenter_15 {
  font-size: 0.3rem;
  padding: 0.5rem;
}
.sub-person
  .work_mobile_personalcenter_15_list_ul_li
  .work_mobile_personalcenter_15_list_ul_li_mainbox_footerinformation_balanceDeduct {
  float: right;
  margin-right: 10px;
}
</style>

