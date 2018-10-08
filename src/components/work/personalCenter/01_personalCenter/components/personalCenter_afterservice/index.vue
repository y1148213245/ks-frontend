<template>
  <section class="personalcenter_afterservice">
    <div v-show="currentShow=='afterserviceDetails'">
      <div class="mb20 selectBox">
        <label>{{getStaticText('orderType') ? getStaticText('orderType') : '订单类型'}}：</label>
        <el-select v-model="typeRadio" @change="changeTabType">
          <el-option
            v-for="(item, index) in defaultType"
            :key="index"
            :label="item.title"
            :value="item.type">
          </el-option>
        </el-select>
      </div>
      <div class="mb20 selectBox" style="padding-left: 50px;">
      <label>{{getStaticText('orderStatus') ? getStaticText('orderStatus') : '订单状态'}}：</label>
        <el-select v-model="stateRadio" @change="changeTabState" >
          <el-option
            v-for="(item, index) in defaultState"
            :key="index"
            :label="item.title"
            :value="item.type">
          </el-option>
        </el-select>



      </div>
      <el-table :data="returnGoodsList" border style="width: 100%">
        <el-table-column align="center" prop="id" :label="getStaticText('returnNumber') ? getStaticText('returnNumber') : '退换货编号'" width="120">
        </el-table-column>
        <el-table-column align="center" prop="orderCode" :label="getStaticText('orderNumber') ? getStaticText('orderNumber') : '订单编号'" width="260">
        </el-table-column>
        <el-table-column align="center" prop="productName" :label="getStaticText('goodsName') ? getStaticText('goodsName') : '商品名称'" width="220">
        </el-table-column>
        <el-table-column align="center" prop="createTime" :label="getStaticText('date') ? getStaticText('date') : '日期'" width="120">
        </el-table-column>
        <el-table-column align="center" prop="num" :label="getStaticText('count') ? getStaticText('count') : '数量'" width="80">
        </el-table-column>
        <el-table-column :label="getStaticText('operate') ? getStaticText('operate') : '操作'" align="center">
          <template slot-scope="scope">
            <el-button @click="showDetails(scope.row)" type="text" size="small">
              {{getStaticText('check') ? getStaticText('check') : '查看'}}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 退货详情 -->
    <div v-show="currentShow=='afterserviceReturnDetails'">
      <div v-if="!returnCancel">
        <el-steps :active="returnDetailsActive" align-center>
          <!-- v-if渲染 -->
          <el-step :title="getStaticText('submission') ? getStaticText('submission') : '提交申请'" icon="el-icon-edit"></el-step>
          <el-step :title="getStaticText('businessAudit') ? getStaticText('businessAudit') : '商家审核'" icon="el-icon-document" v-if="!exchangeDetailsErr"></el-step>
          <el-step :title="getStaticText('businessAuditNotPass') ? getStaticText('businessAuditNotPass') : '商家审核未通过'" icon="el-icon-document" v-if="exchangeDetailsErr"></el-step>
          <el-step :title="getStaticText('userDelivery') ? getStaticText('userDelivery') : '用户发货'" icon="el-icon-upload2"></el-step>
          <el-step :title="getStaticText('reviewOfRefunds') ? getStaticText('reviewOfRefunds') : '审核退款'" icon="el-icon-setting" v-if="!exchangeDetailsErr"></el-step>
          <el-step :title="getStaticText('refundNotPass') ? getStaticText('refundNotPass') : '审核退款未通过'" icon="el-icon-setting" v-if="exchangeDetailsErr"></el-step>
          <el-step :title="getStaticText('refundNotPass') ? getStaticText('refundNotPass') : '完成退货'" icon="el-icon-check"></el-step>
        </el-steps>
      </div>
      <!-- Book card -->
      <div class="afterservice_main_title">
        <el-row :gutter="1">
          <el-col :span="14">
            <div class="afterservice_title_common bg-purple-light">{{getStaticText('goodsName') ? getStaticText('goodsName') : '商品名称'}}</div>
          </el-col>
          <el-col :span="4">
            <div class="afterservice_title_common bg-purple-light">{{getStaticText('purchaseCount') ? getStaticText('purchaseCount') : '购买数量'}}</div>
          </el-col>
          <el-col :span="6">
            <div class="afterservice_title_common bg-purple-light">{{getStaticText('orderTime') ? getStaticText('orderTime') : '下单时间'}}</div>
          </el-col>
        </el-row>
      </div>
      <div class="afterservice_main_card">
        <el-row>
          <el-col :span="14">
            <div class="afterservice_main_card_left">
              <img v-bind:src="returnGoodsDetails.bigPic || '../assets/img/zwfm.png'" onload="DrawImage(this,120,100)" class="afterservice_main_card_left_img" :alt="getStaticText('noCover') ? getStaticText('noCover') : '暂无封面'">
              <div class="afterservice_main_card_left_text">
                <span class="mt5">{{returnGoodsDetails.productName}}</span>
                <span class="afterservice_main_card_left_author">{{getStaticText('author') ? getStaticText('author') : '作者'}}：{{returnGoodsDetails.author}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="afterservice_main_card_right">{{returnGoodsDetails.originalNum}}</div>
          </el-col>
          <el-col :span="6">
            <div class="afterservice_main_card_right">{{returnGoodsDetails.createTime}}</div>
          </el-col>
        </el-row>
      </div>
      <!-- Book card end-->
      <!-- details -->
      <div class="afterservice_details">
        <div class="mtb15">
          <span>{{getStaticText('returnCount') ? getStaticText('returnCount') : '退货数量'}}：{{returnGoodsDetails.num}}</span>
        </div>
        <div class="mtb15">
          <span>{{getStaticText('problemDescription') ? getStaticText('problemDescription') : '问题描述'}}：{{returnGoodsDetails.reasons}}</span>
        </div>
        <div class="mtb15">
          <span class="afterservice_details_img" v-if="imgArr.length">{{getStaticText('picture') ? getStaticText('picture') : '图片'}}：
            <div v-for="item in imgArr" class="afterservice_details_imgbox"><img :src="item" /></div>
          </span>
          <span v-else>{{getStaticText('noPicture') ? getStaticText('noPicture') : '暂无图片'}}</span>
        </div>
        <div v-if="returnDetailsActive>2">
          <div class="mtb15">
            <span>{{getStaticText('refundAmount') ? getStaticText('refundAmount') : '退款金额：￥'}}{{returnGoodsDetails.refund}}</span>
            <span>{{getStaticText('refundVirtualCoin') ? getStaticText('refundVirtualCoin') : '返还虚拟币：￥'}}{{returnGoodsDetails.refundVirtualCoin}}</span>
          </div>
          <div class="mtb15">
            <span>{{getStaticText('courierNumber') ? getStaticText('courierNumber') : '快递单号'}}：{{returnGoodsDetails.logisticsNum}}</span>
          </div>
        </div>
      </div>
      <!-- details end -->

      <!-- 处理中 -->
      <div class="afterservice_footer">
        <div class="afterservice_textcenter" v-if="returnDetailsActive==1 && returnDetailsErr==false">
          <hr>
          <div>{{getStaticText('returnApplicationAudit') ? getStaticText('returnApplicationAudit') : '退货申请审核中...'}}</div>
          <el-button type="primary" @click="returnGoodsDialog = true">{{getStaticText('cancelReturnApplication') ? getStaticText('cancelReturnApplication') : '取消退货申请'}}</el-button>
        </div>
        <!--不同意申请-->
        <div v-if="returnDetailsActive==1 && returnDetailsErr==true">
          <hr>
          <span class="afterservice_red">{{getStaticText('returnAuditFailed') ? getStaticText('returnAuditFailed') : '退货审核不通过'}}</span>
          <div>{{getStaticText('auditOpinion') ? getStaticText('auditOpinion') : '审核意见'}}:{{returnGoodsDetails.verifyApplyReason}}</div>
        </div>
        <!-- 待您邮寄 -->
        <div v-if="returnDetailsActive==2">
          <hr>
          <span class="afterservice_red mtb15">{{getStaticText('returnAuditPassed') ? getStaticText('returnAuditPassed') : '退货审核通过'}}</span>
          <div class="mtb15">
            <span>{{getStaticText('refundAmount') ? getStaticText('refundAmount') : '退款金额：￥'}}{{returnGoodsDetails.refund}}</span>
            <span>{{getStaticText('refundVirtualCoin') ? getStaticText('refundVirtualCoin') : '返还虚拟币：￥'}}{{returnGoodsDetails.refundVirtualCoin}}</span>
          </div>
          <div class="mtb15">
            <span>{{getStaticText('returnPolicy') ? getStaticText('returnPolicy') : '退货说明'}}：{{returnGoodsDetails.reasons}}</span>
          </div>
          <div class="mtb15">
            <span>{{getStaticText('courierCompany') ? getStaticText('courierCompany') : '快递公司'}}：</span>
            <el-select v-model="courierCompany" :placeholder="getStaticText('chooseCourierCompany') ? getStaticText('chooseCourierCompany') : '请选择快递公司'" @change="handleChange">
              <el-option v-for="item in defaultCourier" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            </el-cascader>
          </div>
          <div class="mtb15">
            <span>{{getStaticText('courierNumber') ? getStaticText('courierNumber') : '快递单号'}}：</span>
            <el-input v-model.number="courierNumber" :placeholder="getStaticText('writeCourierNumber') ? getStaticText('writeCourierNumber') : '请填写快递单号'" style="width:200px;display:inline-block"></el-input>
          </div>
          <div class="afterservice_textcenter">
            <el-button type="primary" @click="subInformation">{{getStaticText('submit') ? getStaticText('submit') : '提交'}}</el-button>
            <el-button type="primary" @click="returnGoodsDialog = true" style="padding: 12px">{{getStaticText('cancelApplication') ? getStaticText('cancelApplication') : '取消退货申请'}}</el-button>
          </div>
        </div>
        <!--取消退货申请的二次提示框-->
        <el-dialog :title="getStaticText('returnGoods') ? getStaticText('returnGoods') : '退货'" :visible.sync="returnGoodsDialog" width="600px">
          <span>{{getStaticText('confirmCancelReturn') ? getStaticText('confirmCancelReturn') : '是否确定要取消退货申请？'}}</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="returnGoodsDialog = false">{{getStaticText('cancel') ? getStaticText('cancel') : '取 消'}}</el-button>
            <el-button type="primary" @click="withdraw(returnGoodsDetails.id,'returnGoods')">{{getStaticText('confirm') ? getStaticText('confirm') : '确 定'}}</el-button>
          </span>
        </el-dialog>

        <!-- 处理中 -->
        <div class="afterservice_textcenter" v-if="returnDetailsActive==3">
          <hr>
          <div>{{getStaticText('businessReceiving') ? getStaticText('businessReceiving') : '商家收货中...'}}</div>
          <el-button type="primary" @click="returnGoodsDialog = true">{{getStaticText('cancelApplication') ? getStaticText('cancelApplication') : '取消退货申请'}}</el-button>
        </div>
        <!--等待退款-->
        <div v-if="returnDetailsActive==4">
          <hr>
          <span class="afterservice_red">{{getStaticText('businessAgreeRefund') ? getStaticText('businessAgreeRefund') : '商家收到退货商品，同意退款'}} </span>
          <div class="afterservice_textcenter">{{getStaticText('waitRefundArrive') ? getStaticText('waitRefundArrive') : '请等待退款到账'}}</div>
        </div>
        <!--不同意退款-->
        <div v-if="returnDetailsActive==4 && returnDetailsErr==true">
          <hr>
          <span class="afterservice_red">{{getStaticText('businessDisagreeRefund') ? getStaticText('businessDisagreeRefund') : '商家收到退货商品，不同意退款'}}</span>
          <div>{{getStaticText('auditOpinion') ? getStaticText('auditOpinion') : '审核意见'}}:{{returnGoodsDetails.verifyReason}}</div>
        </div>
        <!-- 已完成 -->
        <div class="afterservice_textcenter" v-if="returnDetailsActive==5">
          <hr>
          <span>{{getStaticText('completeReturn') ? getStaticText('completeReturn') : '退货完成'}}</span>
        </div>
        <!-- 取消换货 -->
        <div class="afterservice_textcenter" v-if="returnCancel">
          <hr>
          <div>{{getStaticText('cancelReturn') ? getStaticText('cancelReturn') : '退货申请已取消'}}</div>
        </div>
      </div>
    </div>
    <!-- 换货详情 -->
    <div v-show="currentShow=='afterserviceExchangeDetails'">
      <div v-if="!exchangeCancel">
        <el-steps :active="exchangeDetailsActive" align-center>
          <!-- v-if渲染 -->
          <el-step :title="getStaticText('submission') ? getStaticText('submission') : '提交申请'" icon="el-icon-edit"></el-step>
          <el-step :title="getStaticText('businessAudit') ? getStaticText('businessAudit') : '商家审核'" icon="el-icon-document" v-if="!exchangeDetailsErr"></el-step>
          <el-step :title="getStaticText('businessAuditNotPass') ? getStaticText('businessAuditNotPass') : '商家审核未通过'" icon="el-icon-error" v-if="exchangeDetailsErr"></el-step>
          <el-step :title="getStaticText('userDelivery') ? getStaticText('userDelivery') : '用户发货'" icon="el-icon-upload2"></el-step>
          <el-step :title="getStaticText('createExchangeOrder') ? getStaticText('createExchangeOrder') : '生成换货订单'" icon="el-icon-setting"></el-step>
        </el-steps>
      </div>
      <!-- Book card -->
      <div class="afterservice_main_title">
        <el-row :gutter="1">
          <el-col :span="14">
            <div class="afterservice_title_common bg-purple-light">{{getStaticText('goodsName') ? getStaticText('goodsName') : '商品名称'}}</div>
          </el-col>
          <el-col :span="4">
            <div class="afterservice_title_common bg-purple-light">{{getStaticText('purchaseCount') ? getStaticText('purchaseCount') : '购买数量'}}</div>
          </el-col>
          <el-col :span="6">
            <div class="afterservice_title_common bg-purple-light">{{getStaticText('orderTime') ? getStaticText('orderTime') : '下单时间'}}</div>
          </el-col>
        </el-row>
      </div>
      <div class="afterservice_main_card">
        <el-row>
          <el-col :span="14">
            <div class="afterservice_main_card_left">
              <img v-bind:src="returnGoodsDetails.bigPic || '../assets/img/zwfm.png'" onload="DrawImage(this,120,100)" class="afterservice_main_card_left_img" :alt="getStaticText('noCover') ? getStaticText('noCover') : '暂无封面'">
              <div class="afterservice_main_card_left_text">
                <span class="mt5">{{returnGoodsDetails.productName}}</span>
                <span class="afterservice_main_card_left_author">{{getStaticText('author') ? getStaticText('author') : '作者'}}：{{returnGoodsDetails.author}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="afterservice_main_card_right">{{returnGoodsDetails.num}}</div>
          </el-col>
          <el-col :span="6">
            <div class="afterservice_main_card_right">{{returnGoodsDetails.createTime}}</div>
          </el-col>
        </el-row>
      </div>
      <!-- Book card end-->
      <!-- details -->
      <div class="afterservice_details">
        <div class="mtb15">
          <span>{{getStaticText('exchangeCount') ? getStaticText('exchangeCount') : '换货数量'}}：{{returnGoodsDetails.num}}</span>
        </div>
        <div class="mtb15">
          <span>{{getStaticText('problemDescription') ? getStaticText('problemDescription') : '问题描述'}}：{{returnGoodsDetails.reasons}}</span>
        </div>
        <div class="mtb15">
          <span class="afterservice_details_img" v-if="imgArr.length">{{getStaticText('picture') ? getStaticText('picture') : '图片'}}：
            <div v-for="item in imgArr" class="afterservice_details_imgbox"><img :src="item" /></div>
          </span>
          <span v-else>{{getStaticText('noPicture') ? getStaticText('noPicture') : '暂无图片'}}</span>
        </div>
      </div>
      <!-- details end -->

      <div class="afterservice_footer">
        <!-- 处理中 -->
        <div class="afterservice_textcenter" v-if="exchangeDetailsActive==1 && exchangeDetailsErr==false">
          <hr>
          <div>{{getStaticText('exchangeApplicationAudit') ? getStaticText('exchangeApplicationAudit') : '换货申请审核中...'}}</div>
          <el-button type="primary" @click="exchangeGoodsDialog = true">{{getStaticText('cancelExchangeApplication') ? getStaticText('cancelExchangeApplication') : '取消换货申请'}}</el-button>
        </div>
        <!-- 不同意换货 -->
        <div v-if="exchangeDetailsActive==1 && exchangeDetailsErr==true">
          <hr>
          <span class="afterservice_red">{{getStaticText('exchangeAuditFailed') ? getStaticText('exchangeAuditFailed') : '换货审核不通过'}}</span>
          <div>{{getStaticText('auditOpinion') ? getStaticText('auditOpinion') : '审核意见'}}:{{returnGoodsDetails.verifyApplyReason}}</div>
        </div>
        <!-- 待您邮寄 -->
        <div v-if="exchangeDetailsActive==2">
          <hr>
          <span class="afterservice_red mtb15">{{getStaticText('exchangeAuditPassed') ? getStaticText('exchangeAuditPassed') : '换货审核通过'}}</span>
          <div class="mtb15">
            <span>{{getStaticText('exchangePolicy') ? getStaticText('exchangePolicy') : '换货说明'}}：{{returnGoodsDetails.reasons}}</span>
          </div>
          <div class="mtb15">
            <span>{{getStaticText('courierCompany') ? getStaticText('courierCompany') : '快递公司'}}：</span>
            <el-select v-model="courierCompany" :placeholder="getStaticText('chooseCourierCompany') ? getStaticText('chooseCourierCompany') : '请选择快递公司'" @change="handleChange">
              <el-option v-for="item in courierOptions" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
            </el-cascader>
          </div>
          <div class="mtb15">
            <span>{{getStaticText('courierNumber') ? getStaticText('courierNumber') : '快递单号'}}：</span>
            <el-input v-model.number="courierNumber" :placeholder="getStaticText('writeCourierNumber') ? getStaticText('writeCourierNumber') : '请填写快递单号'" style="width:200px;display:inline-block"></el-input>
          </div>
          <div class="afterservice_textcenter">
            <el-button type="primary" @click="subInformation">{{getStaticText('submit') ? getStaticText('submit') : '提交'}}</el-button>
            <el-button type="primary" @click="exchangeGoodsDialog = true">{{getStaticText('cancelExchangeApplication') ? getStaticText('cancelExchangeApplication') : '取消换货申请'}}</el-button>
          </div>
        </div>
        <!--取消换货申请二次提示框-->
        <el-dialog :title="getStaticText('exchangeGoods') ? getStaticText('exchangeGoods') : '换货'" :visible.sync="exchangeGoodsDialog" width="600px">
          <span>{{getStaticText('confirmCancelExchange') ? getStaticText('confirmCancelExchange') : '是否确定要取消换货申请？'}}</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="exchangeGoodsDialog = false">{{getStaticText('orderStatus') ? getStaticText('cancel') : '取 消'}}</el-button>
            <el-button type="primary" @click="withdraw(returnGoodsDetails.id,'exchangeGoods')">{{getStaticText('confirm') ? getStaticText('confirm') : '确 定'}}</el-button>
          </span>
        </el-dialog>
        <!-- 处理中 -->
        <div class="afterservice_textcenter" v-if="exchangeDetailsActive==3">
          <hr>
          <div>{{getStaticText('businessReceiving') ? getStaticText('businessReceiving') : '商家收货中...'}}</div>
          <el-button type="primary" @click="exchangeGoodsDialog = true">{{getStaticText('cancelExchangeApplication') ? getStaticText('cancelExchangeApplication') : '取消换货申请'}}</el-button>
        </div>
        <!-- 已完成 -->
        <div class="afterservice_textcenter" v-if="exchangeDetailsActive==4">
          <hr>
          <div>{{getStaticText('businessAgreeExchange') ? getStaticText('businessAgreeExchange') : '商家收到换货商品，同意换货'}}</div>
        </div>
        <!-- 取消换货 -->
        <div class="afterservice_textcenter" v-if="exchangeDetailsActive==5">
          <hr>
          <div>{{getStaticText('cancelExchange') ? getStaticText('cancelExchange') : '换货申请已取消'}}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
import { mapGetters, mapActions } from "vuex";
import api from "../../api/personalCenterApi.js";
export default {
  name: "afterservice",
  reused: true,
  props: ["namespace", "parentConfig"],
  created() {
    this.CONFIG = this.parentConfig.afterservice;
    this.defaultType =
      this.CONFIG && this.CONFIG.tabTypeShow.length > 0
        ? this.CONFIG.tabTypeShow
        : this.defaultType;
    this.defaultState =
      this.CONFIG && this.CONFIG.tabStateShow.length > 0
        ? this.CONFIG.tabStateShow
        : this.defaultState;
    this.defaultCourier =
      this.CONFIG && this.CONFIG.courierOptions.length > 0
        ? this.CONFIG.courierOptions
        : this.defaultCourier;
  },
  mounted() {
    this.$store.dispatch("personalCenter/queryUser", {
      loadedCallBack: this.loadedCallBack
    });
  },
  computed: {
    ...mapGetters({
      returnGoodsList: "personalCenter/getReturnGoodsList", // 获取退货列表
      returnGoodsDetails: "personalCenter/getReturnGoodsDetails" // 获取退货详情
    })
  },
  data() {
    return {
      defaultType: [
        {
          title: "全部订单",
          type: ""
        },
        {
          title: "退货订单",
          type: "1"
        },
        {
          title: "换货订单",
          type: "2"
        }
      ],
      defaultState: [
        {
          title: "全部状态",
          type: ""
        },
        {
          title: "处理中",
          type: "1"
        },
        {
          title: "待您邮寄",
          type: "2"
        },
        {
          title: "退款中",
          type: "3"
        },
        {
          title: "已完成",
          type: "4"
        },
        {
          title: "不同意退货",
          type: "5"
        },
        {
          title: "不同意退款",
          type: "6"
        },
        {
          title: "已取消",
          type: "7"
        }
      ],
      defaultCourier: [
        {
          value: "中通",
          label: "中通"
        },
        {
          value: "圆通",
          label: "圆通"
        },
        {
          value: "顺丰",
          label: "顺丰"
        },
        {
          value: "EMS",
          label: "EMS"
        }
      ],
      exchangeGoodsDialog: false, //取消换货申请添加二次确认弹窗
      returnGoodsDialog: false, //取消退货申请添加二次确认弹窗
      typeRadio: "", //订单类型
      stateRadio: "", //订单状态
      currentShow: "afterserviceDetails", //展示切换
      imgArr: [], //图片数组
      exchangeDetailsActive: 0, //换货active
      returnDetailsActive: 0, //退货active
      exchangeDetailsErr: false, //换货申请未通过
      returnDetailsErr: false, //退货申请未通过
      returnCancel: false, //取消退货
      exchangeCancel: false, //取消换货
      courierNumber: "", //快递单号
      logisticsCompany: "", //快递公司
      courierCompany: []
    };
  },
  methods: {
    getStaticText(text) {
      if (
        this.CONFIG &&
        this.CONFIG.staticText &&
        this.CONFIG.staticText[text]
      ) {
        return this.CONFIG.staticText[text];
      } else {
        return false;
      }
    },
    loadedCallBack() {
      var param = {
        pageIndex: 1,
        pageSize: 10,
        type: this.typeRadio,
        flag: this.stateRadio
      };
      this.$store.dispatch("personalCenter/getReturnGoodsList", param);
    },
    //类型筛选
    changeTabType(val) {
      this.typeRadio = val;
      this.loadedCallBack();
    },
    //状态筛选
    changeTabState(val) {
      this.stateRadio = val;
      this.loadedCallBack();
    },
    showDetails(data) {
      var param = {
        id: data.id,
        cb: this.showDetailsCallb
      };
      this.$store.dispatch("personalCenter/queryReturnGoodsDetails", param);
      if (data.type == 1) {
        this.currentShow = "afterserviceReturnDetails";
        if (
          data.deliveryStatus == 0 &&
          data.status == 0 &&
          data.returnMoneyStatus == 0
        ) {
          //处理中
          this.returnDetailsActive = 1;
        } else if (
          data.status == 1 &&
          data.deliveryStatus == 1 &&
          data.returnMoneyStatus == 0
        ) {
          //待您邮寄
          this.returnDetailsActive = 2;
        } else if (
          data.status == 1 &&
          data.deliveryStatus == 2 &&
          data.returnMoneyStatus == 0
        ) {
          //处理中
          this.returnDetailsActive = 3;
        } else if (
          data.status == 1 &&
          data.deliveryStatus == 3 &&
          data.returnMoneyStatus == 1
        ) {
          //退款中
          this.returnDetailsActive = 4;
        } else if (
          data.status == 1 &&
          data.deliveryStatus == 3 &&
          data.returnMoneyStatus == 2
        ) {
          //已完成
          this.returnDetailsActive = 5;
        } else if (
          data.status == 2 &&
          data.deliveryStatus == 0 &&
          data.returnMoneyStatus == 0
        ) {
          //审核不同意退货
          this.returnDetailsErr = true;
          this.returnDetailsActive = 1;
        } else if (
          data.status == 1 &&
          data.deliveryStatus == 3 &&
          data.returnMoneyStatus == 3
        ) {
          //收货后不同意退货
          this.returnDetailsErr = true;
          this.returnDetailsActive = 4;
        } else if (data.status == 5) {
          //取消退货
          this.returnCancel = true;
         // this.currentShow = "afterserviceReturnDetails";
          this.returnDetailsActive=0;
        }
      } else if (data.type == 2) {
        this.currentShow = "afterserviceExchangeDetails";
        if (data.deliveryStatus == 0 && data.status == 0) {
          //处理中
          this.exchangeDetailsActive = 1;
        } else if (data.status == 1 && data.deliveryStatus == 1) {
          //待您邮寄
          this.exchangeDetailsActive = 2;
        } else if (data.status == 1 && data.deliveryStatus == 2) {
          //处理中
          this.exchangeDetailsActive = 3;
        } else if (data.status == 1 && data.deliveryStatus == 4) {
          //已完成
          this.exchangeDetailsActive = 4;
        } else if (data.status == 2 && data.deliveryStatus == 0) {
          //不同意换货
          this.exchangeDetailsErr = true;
          this.exchangeDetailsActive = 1;
        } else if (data.status == 5) {
          //取消换货
          this.exchangeCancel=true;
          this.exchangeDetailsActive = 5;
          this.returnDetailsActive=0;
        }
      }
    },
    showDetailsCallb() {
      this.imgArr = this.returnGoodsDetails.pictureList;
    },
    handleChange(value) {
      // this.$message(value);
      this.logisticsCompany = value;
    },
    //提交快递信息
    subInformation() {
      var vm=this;
      if (this.courierNumber == "") {
        this.$message.error(vm.getStaticText('writeCourierNumber') ? vm.getStaticText('writeCourierNumber') : '请填写快递单号');
        return false;
      } else if (this.logisticsCompany == "") {
        this.$message.error(vm.getStaticText('chooseCourierCompany') ? vm.getStaticText('chooseCourierCompany') : '请填写快递单号');
        return false;
      } else {
        var params = {
          id: this.returnGoodsDetails.id,
          logisticsCompany: this.logisticsCompany,
          logisticsNum: this.courierNumber
        };
        api.submitLogisticsInfo(params).then(function(response) {
          if (response.data && response.data.result == '1') {
            vm.$message.success(vm.getStaticText('informationSubmitSuccess') ? vm.getStaticText('informationSubmitSuccess') : '信息提交成功');
          } else {
            vm.$message.error(vm.getStaticText('informationSubmitFail') ? vm.getStaticText('informationSubmitFail') : '抱歉，信息提交失败');
          }
          vm.currentShow = "afterserviceDetails";
        });
      }
    },
    withdraw(idNum,type) {
      let vm = this;
      var id = idNum;
      api.cancleReturnGoods(id).then(function(response) {
        if (response.data.result == 1) {
          if(type=="exchangeGoods"){
            vm.exchangeGoodsDialog = false;
          }else if(type=="returnGoods"){
            vm.returnGoodsDialog = false;
          }
          vm.$message({
            message: (vm.getStaticText('cancelSuccess') ? vm.getStaticText('cancelSuccess') : '取消成功'),
            type: "success"
          });
        } else {
          vm.$message.error(vm.getStaticText('cancelFail') ? vm.getStaticText('cancelFail') : '抱歉，取消失败');
        }
        vm.currentShow = "afterserviceDetails";
        vm.loadedCallBack();
      });
    }
  }
};
</script>
<style>
.el-table__body-wrapper,
.el-table__footer-wrapper,
.el-table__header-wrapper {
  width: 101%;
}
</style>

<style scoped>
.mb20 {
  margin-bottom: 20px;
}
.selectBox{
  float: left;
}
.mtb15 {
  margin: 15px 0;
}
.afterservice_textcenter {
  text-align: center;
  font-size: 30px;
  margin-bottom: 20px;
}
.afterservice_red {
  color: red;
}
.afterservice_main_title {
  margin-top: 20px;
  text-align: center;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
}
.afterservice_title_common {
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  border: 1px solid rgb(223, 236, 236);
}
.bg-purple-light {
  background: #e5e9f2;
  border-radius: 4px;
}
.afterservice_main_card {
  border: 1px solid rgb(223, 236, 236);
}
.afterservice_main_card_left {
  margin: 10px;
  height: 100px;
}
.afterservice_main_card_left_img {
  float: left;
  text-align: center;
  line-height: 100px;
}
.afterservice_main_card_left_text {
  height: 100px;
  float: left;
}
.afterservice_main_card_left_text span {
  font-size: 18px;
  padding-left: 20px;
  line-height: 30px;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 380px;
}

.afterservice_main_card_left_text span:last-child {
  font-size: 14px;
}
.afterservice_main_card_left_author {
  font-size: 14px;
  margin-top: 25px;
}
.afterservice_main_card_right {
  font-size: 16px;
  text-align: center;
  margin-top: 45px;
}
.afterservice_details {
  font-size: 16px;
  margin: 10px;
}
.afterservice_details_img {
  vertical-align: top;
}
.afterservice_details_imgbox {
  display: inline-block;
}
.afterservice_details_imgbox img {
  width: 150px;
  height: 150px;
  margin-left: 10px;
}
.afterservice_footer {
  margin: 10px;
}
.afterservice_footer hr {
  margin-bottom: 20px;
}
</style>
