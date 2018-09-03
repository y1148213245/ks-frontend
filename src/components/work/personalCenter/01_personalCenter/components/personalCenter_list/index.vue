<template>
  <section class="personalcenter_list">
    <!-- 订单列表 -->
    <div v-show="currentShow=='list'" class="personalcenter_list_main">
      <div v-if="CONFIG && CONFIG.tabListShow && CONFIG.tabListShow.length>0" class="personalcenter_list_main_tab">
        <el-radio-group v-model="radio" @change="changeOrderList">
          <el-radio-button :label="item.type" v-for="(item, index) in CONFIG.tabListShow" :key="index">{{item.title}}</el-radio-button>
        </el-radio-group>
      </div>
      <div>
        <el-button type="primary" @click="allOrder()">{{getStaticText('fullOrder')? getStaticText('fullOrder') : '全部订单'}}</el-button>
        <el-button type="primary" @click="waitPayOrder()">{{getStaticText('waitForPayment') ? getStaticText('waitForPayment') : '等待付款'}}</el-button>
      </div>
      <div class="personalcenter_list_main_title">
        <el-row :gutter="1">
          <el-col :span="10">
            <el-date-picker class="personalcenter_list_main_title_picker" v-model="timeValue" type="datetimerange" range-separator="  ~  " :start-placeholder="getStaticText('startDate') ? getStaticText('startDate') : '开始日期'" :end-placeholder="getStaticText('endDate') ? getStaticText('endDate') : '结束日期'" :picker-options="pickerOptions2" :placeholder="getStaticText('selectTimeRange') ? getStaticText('selectTimeRange') : '选择时间范围'" align="left" value-format="yyyy-MM-dd HH:mm:ss" @change="changeDateValue">
            </el-date-picker>
          </el-col>
          <el-col :span="8">
            <div class="bg-purple-light">{{getStaticText('orderDetail') ? getStaticText('orderDetail') :'订单详情'}}</div>
          </el-col>
          <el-col :span="3">
            <div class="bg-purple-light">{{getStaticText('number') ? getStaticText('number') : '数量'}}</div>
          </el-col>
          <el-col :span="3">
            <div class="bg-purple-light">{{getStaticText('amountOfMoney') ? getStaticText('amountOfMoney') : '金额'}}</div>
          </el-col>
        </el-row>
      </div>
      <div v-if="myOrderList.data && myOrderList.data.length > 0">
        <div v-for="(Aitem,outIndex) in myOrderList.data" :key="outIndex">
          <div class="personalcenter_list_main_listBox">
            <div class="personalcenter_list_title_common bg-purple-light">
              <span>
                <i class="el-icon-time"></i> {{Aitem.createTime.split('.')[0]}}</span>
              <span>{{getStaticText('orderNumber') ? getStaticText('orderNumber') : '订单号'}}：{{Aitem.parentOrderCode}}</span>
            </div>
            <div v-for="(item,index) in Aitem.orderList" :key="index">
              <div class="personalcenter_list_title_common">
                <span>{{getStaticText('subSingleNumber') ? getStaticText('subSingleNumber') : '子单号'}}：{{item.orderCode}}</span>
                <el-button class="personalcenter_list_title_common_detailesbtn" type="text" @click="showDetails(outIndex,index)">{{getStaticText('orderDetail') ? getStaticText('orderDetail') : '订单详情'}}</el-button>
              </div>
              <el-row class="personalcenter_list_main_listBox_card" v-for="(item1,innerindex) in item.itemList" :key="innerindex">
                <el-col :span="15">
                  <div class="personalcenter_list_main_listBox_card_left">
                    <img v-bind:src="item1.bigPic || require('@static/img/defaultCover.png')" onload="DrawImage(this,120,100)" class="personalcenter_list_main_listBox_card_left_img" :alt="getStaticText('noCover') ? getStaticText('noCover') : '暂无封面'">
                    <div class="personalcenter_list_main_listBox_card_left_text">
                      <span class="mt5" :title="item1.productName">{{item1.productName||(getStaticText('noBookTitleForTheTimeBeing') ? getStaticText('noBookTitleForTheTimeBeing') : "暂无书名")}}</span>
                      <span v-if="orderType=='book'" class="personalcenter_list_main_listBox_card_left_author">{{getStaticText('author') ? getStaticText('author') : '作者'}}：{{item1.author||(getStaticText('noAuthor') ? getStaticText('noAuthor') : "暂无作者")}}</span>
                      <span v-else class="personalcenter_list_main_listBox_card_left_author">{{item1.periodicalRemark}}</span>
                    </div>
                  </div>
                </el-col>
                <el-col :span="3">
                  <div class="personalcenter_list_main_listBox_card_right">
                    <span v-if="item.itemList[0].productType== 94">{{getStaticText('ebookOrder') ? getStaticText('ebookOrder') : '电子书订单'}}</span>
                    <span v-if="item.itemList[0].productType== 91">{{getStaticText('paperBookOrder') ? getStaticText('paperBookOrder') : '纸书订单'}}</span>
                  </div>
                </el-col>
                <el-col :span="3">
                  <div class="personalcenter_list_main_listBox_card_right">x{{item1. productNum}}</div>
                </el-col>
                <el-col :span="3">
                  <div class="personalcenter_list_main_listBox_card_right">{{getStaticText('money') ? getStaticText('money') : '¥'}}{{(item1.memberPrice == "null" ? 0 : Number(item1.memberPrice)) * item1.productNum }}</div>
                </el-col>
              </el-row>
            </div>

            <div class="mt5">
              <div v-if="Aitem.payStatus==0 && Aitem.status==1" class="fr">
                <el-button type="text" @click="cancelOrder(outIndex)" id="testUseCancelLocation">
                  {{getStaticText('cancellationOfOrder') ? getStaticText('cancellationOfOrder') : '取消订单'}}
                </el-button>
                <el-button type="primary" @click="myCallBack(outIndex)">
                  {{getStaticText('payment') ? getStaticText('payment') : '付款'}}
                  <i class="el-icon-check el-icon--right"></i>
                </el-button>
              </div>
              <div v-if="Aitem.payStatus==1" class="fr">
                <el-button type="primary" @click="deleteOrder(outIndex)">
                  {{getStaticText('deleteOrder') ? getStaticText('deleteOrder') : '删除订单'}}
                  <i class="el-icon-check el-icon-close"></i>
                </el-button>
              </div>
            </div>
            <div class="personalcenter_list_main_listBox_footer">
              <div v-if="Aitem.payStatus==1">{{getStaticText('alreadyPaid') ? getStaticText('alreadyPaid') : '已付款'}}：
                <span>{{getStaticText('money') ? getStaticText('money') : '¥'}}{{Aitem.realAmount || 0 }}</span>
              </div>
              <div v-if="Aitem.payStatus==0 && Aitem.status==1">{{getStaticText('toBePaid') ? getStaticText('toBePaid') : '待支付'}}：
                <span>{{getStaticText('money') ? getStaticText('money') : '¥'}}{{Aitem.realAmount}}</span>
              </div>
            </div>
            <div class="personalcenter_list_main_listBox_footer" v-show="Aitem.balanceAmount!='0.00'">{{getStaticText('downloadCurrencyDeduction') ? getStaticText('downloadCurrencyDeduction') : '下载币抵扣'}}：
              <span>{{getStaticText('money') ? getStaticText('money') : '¥'}}{{Aitem.balanceAmount || 0 }}</span>
            </div>
            <!--<div class="personalcenter_list_main_listBox_footer" v-show="Aitem.couposAmount!='null' && Aitem.couposAmount!='0.00'">{{getStaticText('couponRelief') ? getStaticText('couponRelief') : '优惠券减免'}}：-->
              <!--<span>{{getStaticText('money') ? getStaticText('money') : '¥'}}{{Aitem.couposAmount || 0 }}</span>-->
            <!--</div>-->
            <!--<div class="personalcenter_list_main_listBox_footer" v-show="Aitem.orderList[0] && Aitem.orderList[0].activityRemark && Aitem.orderList[0].activityRemark!='0.00'">{{getStaticText('activityRemission') ? getStaticText('activityRemission') : '活动减免'}}：-->
              <!--<span>{{getStaticText('money') ? getStaticText('money') : '¥'}}{{Aitem.orderList[0] && Aitem.orderList[0] && Aitem.orderList[0].activityRemark || 0 }}</span>-->
            <!--</div>-->
            <div class="personalcenter_list_main_listBox_footer" v-show="Aitem.activityRemarkAll && Aitem.activityRemarkAll != 0">{{getStaticText('activityRemission') ? getStaticText('activityRemission') : '活动减免'}}：
              <span>{{getStaticText('money') ? getStaticText('money') : '¥'}}{{Aitem.activityRemarkAll || 0 }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="personalcenter_list_main_emptyColl" v-else>
        <img src="../../assets/img/empty.png" alt="">
        <div>{{getStaticText('orderIsEmpty') ? getStaticText('orderIsEmpty') : '订单是空的~快去购买吧'}}</div>
      </div>
      <ui_pagination :pageMessage="{totalCount: this.myOrderList.data && this.myOrderList.totalCount - 0 || 0}" :excuteFunction="pagingF" :page-sizes="[8,16,32,64]"></ui_pagination>
    </div>
    <!-- 图书订单详情 -->
    <div v-show="currentShow=='bookDetails'">
      <div id="demoID" v-show="KDNShow && KDNConfig"></div>
      <div v-for="item in orderDetails" :key="item.id">
        <div class="mb20">
          <el-card class="personalcenter_list_bookDetails_boxCard" v-if="item.itemList[0].productType == 91">
            <div slot="header" class="personalcenter_list_bookDetails_boxCard_clearfix">
              <i class="el-icon-location"></i>
              <span>{{getStaticText('receiptInformation') ? getStaticText('receiptInformation') : '收货信息'}}</span>
            </div>
            <div class="personalcenter_list_bookDetails_boxCard_text">
              <p>{{getStaticText('consignee') ? getStaticText('consignee') : '收货人'}}：
                <span>{{item.deliveryPerson}}</span>
              </p>
              <p>{{getStaticText('phone') ? getStaticText('phone') : '电话'}}：
                <span>{{item.deliveryContact}}</span>
              </p>
              <p>{{getStaticText('receivingAddress') ? getStaticText('receivingAddress') : '收货地址'}}：
                <span>{{item.deliveryAddress}}</span>
              </p>
            </div>
          </el-card>

          <el-card class="personalcenter_list_bookDetails_boxCard" v-if="item.receiptType != ''">
            <div slot="header" class="personalcenter_list_bookDetails_boxCard_clearfix">
              <i class="el-icon-printer"></i>
              <span>{{getStaticText('invoiceInformation') ? getStaticText('invoiceInformation') : '发票信息'}}</span>
            </div>
            <div class="personalcenter_list_bookDetails_boxCard_text">
              <p>{{getStaticText('invoiceType') ? getStaticText('invoiceType') : '发票类型'}}：
                <span v-if="item.receiptType==1">{{getStaticText('personal') ? getStaticText('personal') : '个人'}}</span>
                <span v-if="item.receiptType==2">{{getStaticText('valueAddedTaxInvoice') ? getStaticText('valueAddedTaxInvoice') : '增值税发票'}}</span>
              </p>
              <p>{{getStaticText('invoicesTitle') ? getStaticText('invoicesTitle') : '发票抬头'}}：
                <span>{{item.receiptTitle}}</span>
              </p>
              <p v-if="item.receiptType==1">{{getStaticText('invoiceContent') ? getStaticText('invoiceContent') : '发票内容'}}：
                <span>{{item.receiptId}}</span>
              </p>
            </div>
          </el-card>

          <el-card class="personalcenter_list_bookDetails_boxCard">
            <div slot="header" class="personalcenter_list_bookDetails_boxCard_clearfix">
              <i class="el-icon-goods"></i>
              <span>{{getStaticText('detailsOfPayment') ? getStaticText('detailsOfPayment') : '支付详情'}}</span>
            </div>
            <div class="personalcenter_list_bookDetails_boxCard_text">
              <p>{{getStaticText('paymentMethod') ? getStaticText('paymentMethod') : '支付方式'}}：
                <span v-if="item.payMethod=='Weixin'">{{getStaticText('weChatPayment') ? getStaticText('weChatPayment') : '微信支付'}}</span>
                <span v-if="item.payMethod=='Alipay'">{{getStaticText('alipay') ? getStaticText('alipay') : '支付宝'}}</span>
                <span v-if="item.payMethod=='Balance'">{{getStaticText('downloadedCurrency') ? getStaticText('downloadedCurrency') : '下载币'}}</span>
              </p>
              <p>{{getStaticText('commodityTotal') ? getStaticText('commodityTotal') : '商品总计'}}：
                <span>{{item.orderTotalPrice }}</span>
              </p>
              <p>{{getStaticText('freightTotal') ? getStaticText('freightTotal') : '运费总计'}}：
                <span>{{item.deliveryPrice}}{{getStaticText('yuan') ? getStaticText('yuan') : '元'}}</span>
              </p>
            </div>
          </el-card>
          <el-card class="personalcenter_list_bookDetails_boxCard">
            <div slot="header" class="personalcenter_list_bookDetails_boxCard_clearfix">
              <i class="el-icon-edit"></i>
              <span>{{getStaticText('noteInformation') ? getStaticText('noteInformation') : '备注信息'}}</span>
            </div>
            <div class="personalcenter_list_bookDetails_boxCard_text_payRemark">
              <p v-text="item.payRemark"></p>
            </div>
          </el-card>
        </div>
        <div class="personalcenter_list_bookDetails_status">
          <span v-if="item.payStatus==0 && item.status==1">{{getStaticText('pendingPayment') ? getStaticText('pendingPayment') : '订单状态：待付款'}}</span>
          <span v-if="item.payStatus==1">{{getStaticText('completed') ? getStaticText('completed') : '订单状态：已完成'}}</span>
          <span v-if="item.payStatus==0 && item.status==2">{{getStaticText('cancelled') ? getStaticText('cancelled') : '订单状态：已取消'}}</span>
        </div>
        <div class="personalcenter_list_title_common bg-purple-light">
          <span>
            <i class="el-icon-time"></i> {{item.createTime}}</span>
          <span>{{getStaticText('orderNumber') ? getStaticText('orderNumber') : '订单号'}}：{{item.orderCode}}</span>
        </div>
        <el-row class="personalcenter_list_main_listBox_card" v-for="item1 in item.itemList" :key="item1.id">
          <el-col :span="15">
            <div class="personalcenter_list_main_listBox_card_left">
              <img onload="DrawImage(this,120,100)" v-bind:src="item1.bigPic || require('@static/img/defaultCover.png')" class="personalcenter_list_main_listBox_card_left_img" :alt="getStaticText('noCover') ? getStaticText('noCover') :'暂无封面'">
              <div class="personalcenter_list_main_listBox_card_left_text">
                <span class="mt5" :title="item1.productName">{{item1.productName||(getStaticText('noBookTitleForTheTimeBeing') ? getStaticText('noBookTitleForTheTimeBeing') : "暂无书名")}}</span>
                <span class="personalcenter_list_main_listBox_card_left_author">{{getStaticText('author') ? getStaticText('author') : '作者'}}：{{item1.author||(getStaticText('noAuthor') ? getStaticText('noAuthor') : '暂无作者')}}</span>
              </div>
              <div v-if="item.itemList[0].productType == 91 && exchangeState" class="OperationDoubleBtn personalcenter_list_main_listBox_card_left_returnBtn">
                <el-button type="text" @click="showReturn(item,item1,1)">{{getStaticText('returnGoods') ? getStaticText('returnGoods') :'退货'}}</el-button>
                <el-button type="text" @click="showReturn(item,item1,2)">{{getStaticText('exchangeGoods') ? getStaticText('exchangeGoods') :'换货'}}</el-button>
              </div>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="personalcenter_list_main_listBox_card_right">x{{item1. productNum}}</div>
          </el-col>
          <el-col :span="3">
            <div class="personalcenter_list_main_listBox_card_right">{{getStaticText('money') ? getStaticText('money') : '¥'}} {{item1. memberPrice * item1. productNum }}</div>
          </el-col>
          <el-col :span="3">
            <div class="personalcenter_list_main_listBox_card_right personalcenter_list_bookDetails_textDecoration">{{getStaticText('money') ? getStaticText('money') : '¥'}} {{item1.productPrice * item1. productNum }}</div>
          </el-col>
        </el-row>
        <div class="personalcenter_list_bookDetails_goBackBtn">
          <el-button type="primary" @click="goBack()">{{getStaticText('return') ? getStaticText('return') : '返回'}}</el-button>
        </div>
        <div class="personalcenter_list_bookDetails_footerPrice">
          <span>{{getStaticText('totalOrder') ? getStaticText('totalOrder') : '订单总额：¥'}} {{item.orderTotalPrice + item.deliveryPrice }}</span>
          <br>
        </div>
      </div>
    </div>
    <!-- 期刊订单详情 -->
    <div v-show="currentShow=='periodicalDetails'">
      <div v-for="item in orderDetails" :key="item.id">
        <div class="personalcenter_list_title_common bg-purple-light">
          <span>
            <i class="el-icon-time"></i> {{item.createTime}}</span>
          <span>{{getStaticText('orderNumber') ? getStaticText('orderNumber') : '订单号'}}：{{item.orderCode}}</span>
        </div>
        <el-row class="personalcenter_list_main_listBox_card" v-for="item1 in item.itemList" :key="item1.id">
          <el-col :span="21">
            <div class="personalcenter_list_main_listBox_card_left">
              <img onload="DrawImage(this,120,100)" v-bind:src="item1.bigPic || require('@static/img/defaultCover.png')" class="personalcenter_list_main_listBox_card_left_img" :alt="getStaticText('noCover') ? getStaticText('noCover') : '暂无封面'">
              <div class="personalcenter_list_main_listBox_card_left_text">
                <span class="mt5" :title="item1.productName">{{item1.periodicalName|| (getStaticText('noPublication') ? getStaticText('noPublication') : '暂无刊名')}}</span>
                <span class="personalcenter_list_main_listBox_card_left_author">{{item1.periodicalRemark}}</span>
              </div>
            </div>
          </el-col>
          <el-col :span="3">
            <div class="personalcenter_list_main_listBox_card_right">{{getStaticText('money') ? getStaticText('money') : '¥'}}{{item1.realPrice}}</div>
          </el-col>
        </el-row>
        <div class="personalcenter_list_bookDetails_goBackBtn">
          <el-button type="primary" @click="goBack()">{{getStaticText('return') ? getStaticText('return') : '返回'}}</el-button>
        </div>
        <!-- <div class="personalcenter_list_bookDetails_footerPrice">
          <span>订单总额：{{item1.realPrice}}</span>
          </br>
        </div> -->
      </div>
    </div>
    <!--</div>-->
    <!-- 退货||换货 -->
    <div v-show="currentShow=='return'">
      <!--退货step-->
      <div v-if="goodsType == 1">
        <el-steps :active="0" simple>
          <el-step :title="getStaticText('submission') ? getStaticText('submission') : '提交申请'" icon="el-icon-edit"></el-step>
          <el-step :title="getStaticText('businessAudit') ? getStaticText('businessAudit') : '商家审核'" icon="el-icon-document"></el-step>
          <el-step :title="getStaticText('userDelivery') ? getStaticText('userDelivery') : '用户发货'" icon="el-icon-upload2"></el-step>
          <el-step :title="getStaticText('reviewOfRefunds') ? getStaticText('reviewOfRefunds') : '审核退款'" icon="el-icon-setting"></el-step>
          <el-step :title="getStaticText('completeTheReturnOfTheGoods') ? getStaticText('completeTheReturnOfTheGoods') : '完成退货'" icon="el-icon-check"></el-step>
        </el-steps>
      </div>
      <!--换货step-->
      <div v-if="goodsType == 2">
        <el-steps :active="0" simple>
          <el-step :title="getStaticText('submission') ? getStaticText('submission') : '提交申请'" icon="el-icon-edit"></el-step>
          <el-step :title="getStaticText('businessAudit') ? getStaticText('businessAudit') : '商家审核'" icon="el-icon-document"></el-step>
          <el-step :title="getStaticText('userDelivery') ? getStaticText('userDelivery') : '用户发货'" icon="el-icon-upload2"></el-step>
          <el-step :title="getStaticText('reviewOfRefunds') ? getStaticText('reviewOfRefunds') : '审核退款'" icon="el-icon-setting"></el-step>
          <el-step :title="getStaticText('completeTheReturnTransOfTheGoods') ? getStaticText('completeTheReturnTransOfTheGoods') : '完成换货'" icon="el-icon-check"></el-step>
        </el-steps>
      </div>
      <div class="personalcenter_list_main_title">
        <el-row :gutter="1">
          <el-col :span="14">
            <div class="personalcenter_list_title_common bg-purple-light">{{getStaticText('commodityName') ? getStaticText('commodityName') : '商品名称'}}</div>
          </el-col>
          <el-col :span="4">
            <div class="personalcenter_list_title_common bg-purple-light">{{getStaticText('purchaseQuantity') ? getStaticText('purchaseQuantity') : '购买数量'}}</div>
          </el-col>
          <el-col :span="6">
            <div class="personalcenter_list_title_common bg-purple-light">{{getStaticText('orderTime') ? getStaticText('orderTime') : '下单时间'}}</div>
          </el-col>
        </el-row>
      </div>
      <el-row class="personalcenter_list_main_listBox_card">
        <el-col :span="14">
          <div class="personalcenter_list_main_listBox_card_left">
            <img v-bind:src="returnBigPic || require('@static/img/defaultCover.png')" onload="DrawImage(this,120,100)" class="personalcenter_list_main_listBox_card_left_img" :alt="getStaticText('noCover') ? getStaticText('noCover') : '暂无封面'">
            <div class="personalcenter_list_main_listBox_card_left_text">
              <span class="mt5">{{returnProductName}}</span>
              <span class="personalcenter_list_main_listBox_card_left_author">{{getStaticText('author') ? getStaticText('author') : '作者'}}：{{returnAuthor}}</span>
            </div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="personalcenter_list_main_listBox_card_right">{{max}}</div>
        </el-col>
        <el-col :span="6">
          <div class="personalcenter_list_main_listBox_card_right">{{returnCreateTime}}</div>
        </el-col>
      </el-row>

      <div class="personalcenter_list_returnForm">
        <!-- 计数器 -->
        <div class="mb20">
          <span v-if="goodsType==1" class="mr20">{{getStaticText('returnQuantity') ? getStaticText('returnQuantity') : '退货数量'}}:</span>
          <span v-if="goodsType==2" class="mr20">{{getStaticText('returnTransQuantity') ? getStaticText('returnTransQuantity') : '换货数量'}}:</span>
          <el-input-number v-model="num" @change="handleChange" :min="1" :max="max" size="small"></el-input-number>
        </div>
        <!-- 文本框 -->
        <div class="mb20">
          <div class="mr20 disinlblo">{{getStaticText('problemDescription') ? getStaticText('problemDescription') : '问题描述'}}:</div>
          <el-input @change="textChange" @blur="textBlur" class="textarea" type="textarea" min="10" max="500" :autosize="{ minRows: 4, maxRows: 8}" :placeholder="getStaticText('pleaseDescribeTheProblem') ? getStaticText('pleaseDescribeTheProblem') : '请描述问题'" v-model="textarea" style="width:700px;vertical-align:text-top;float:left;">
          </el-input>
        </div>
        <!-- 图片上传 -->
        <div>
          <span class="mr20">{{getStaticText('uploadPicture') ? getStaticText('uploadPicture') : '上传图片'}}:</span>
          <el-upload class="disinlblo" :action="uploadUrl()" list-type="picture-card" name="headPicUrl" :headers="setToken" :limit="5" :before-upload="beforeHandleUpload" :on-preview="handlePictureCardPreview" :on-exceed="handleExceed" :on-remove="handleSuccess" :on-success="handleSuccess">
            <i class="el-icon-plus personalcenter_list_returnForm_plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </div>
      </div>
      <div v-if="goodsType==2">
        <work_shoppingcart_01_components_address namespace="address" @deliveryAddress="getDeliveryAddress"></work_shoppingcart_01_components_address>
      </div>
      <div class="personalcenter_list_returnForm_btn">
        <el-button v-if="goodsType == 1" type="primary" size="large" @click="applyReturnGoods()">{{getStaticText('applicationForReturn') ? getStaticText('applicationForReturn') : '申请退货'}}</el-button>
        <el-button v-if="goodsType == 2" type="primary" size="large" @click="applyReturnGoods()">{{getStaticText('applicationForReturnTrans') ? getStaticText('applicationForReturnTrans') : '申请换货'}}</el-button>
      </div>
    </div>
  </section>
</template>
<script type="text/ecmascript-6">
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
import kdnApi from "../../assets/js/KDN.js";
export default {
  name: "list",
  reused: true,
  props: ["namespace", "parentConfig"],
  created() {
    this.CONFIG = this.parentConfig.list;
    this.radio =
      this.CONFIG.tabListShow && this.CONFIG.tabListShow.length > 0
        ? this.CONFIG.tabListShow[0].type
        : "book";
    this.exchangeState =
      this.CONFIG && this.CONFIG.exchangeState
        ? this.CONFIG.exchangeState
        : false;
    this.KDNConfig =
      this.CONFIG && this.CONFIG.KDNConfig ? this.CONFIG.KDNConfig : false;

    this.pickerOptions2 = {
      shortcuts: [
        {
          text: this.getStaticText("lastWeek")
            ? this.getStaticText("lastWeek")
            : "最近一周",
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit("pick", [start, end]);
          }
        },
        {
          text: this.getStaticText("lastMonth")
            ? this.getStaticText("lastMonth")
            : "最近一个月",
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit("pick", [start, end]);
          }
        },
        {
          text: this.getStaticText("lastThreeMonths")
            ? this.getStaticText("lastThreeMonths")
            : "最近三个月",
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit("pick", [start, end]);
          }
        }
      ]
    };
  },
  mounted() {
    this.siteId = CONFIG.SITE_CONFIG.siteId;
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
    }),
    setToken() {
      return {
        token: window.localStorage.getItem("token")
      };
    }
  },
  data() {
    return {
      siteId: "",
      currentShow: "list",
      // 订单列表状态
      exchangeState: "", //退换货是否显示
      KDNConfig: "", //物流信息是否显示
      payStatusNum: "",
      displayCancel: "",
      radio: null, //tab
      CONFIG: null, // 当前组件配置
      orderType: "book", // 总单类型
      KDNShow: "false",
      // 退换货
      num: 1,
      max: 10,
      textarea: "",
      returnNum: "",
      dialogImageUrl: "",
      dialogVisible: false, //上传图片放大功能
      returnBigPic: "", //页面展示图片
      returnProductName: "", //页面展示商品名称
      returnAuthor: "", //页面展示作者
      returnCreateTime: "", //页面展示购买时间
      //退换货结束
      //退换货参数
      goodsOrderItemId: "",
      goodsAuthor: "", //作者
      goodsConfirmTime: "", //时间传空
      goodsCreateTime: "", //时间传空
      curSelectedAddress: {}, // 当前选择的地址 从地址选择子组件中接收到的
      goodsDeliveryStatus: 0, //值传0
      goodsId: 0, //值传0
      goodsLoginName: "", //用户名
      goodsLogisticsCompany: "", //物流名称,值传空
      goodsLogisticsNum: "", //物流单号,值传空
      goodsNum: "", //退换货数量
      goodsOrderCode: "",
      goodsBigPic: "", //商品图片
      goodsPictureList: [], //上传图片
      goodsProductName: "", //商品名称
      goodsOriginalNum: "", //购买总数
      goodsPubId: "",
      goodsReasons: "", //退货/换货原因
      goodsRefund: "", //值传空
      goodsReturnGoodsStatus: 0, //值传0
      goodsReturnMoneyStatus: 0, //值传0
      goodsSingleRefund: "", //值传空
      goodsStatus: 0, //值传0
      goodsSubmitLogisticsTime: "", //时间传空
      goodsType: 1, //1--退货 2 换
      goodsVerifyApplyReason: "", //值传空
      goodsVerifyReason: "", //值传空
      //退换货参数结束

      // pickerOptions2: {
      //   shortcuts: [
      //     {
      //       text: "最近一周",
      //       onClick(picker) {
      //         const end = new Date();
      //         const start = new Date();
      //         start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      //         picker.$emit("pick", [start, end]);
      //       }
      //     },
      //     {
      //       text: "最近一个月",
      //       onClick(picker) {
      //         const end = new Date();
      //         const start = new Date();
      //         start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      //         picker.$emit("pick", [start, end]);
      //       }
      //     },
      //     {
      //       text: "最近三个月",
      //       onClick(picker) {
      //         const end = new Date();
      //         const start = new Date();
      //         start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      //         picker.$emit("pick", [start, end]);
      //       }
      //     }
      //   ]
      // },
      pickerOptions2: {},
      timeValue: ""
    };
  },
  // filters: {
  //   filterFun: function(value) {
  //     if (typeof value == "string") {
  //       return "¥ " + parseInt(value).toFixed(2) + "元";
  //     } else {
  //       return "¥ " + value.toFixed(2) + "元";
  //     }
  //   }
  // },
  methods: {
    // 展示退换货
    showReturn(item, item1, type) {
      this.returnBigPic = item1.bigPic; //展示图片
      this.returnProductName = item1.productName; //展示商品名称
      this.returnAuthor = item1.author; //展示作者
      this.returnCreateTime = item.createTime; //展示时间
      this.max = item1.productNum; //退换货数量
      this.goodsOriginalNum = item1.productNum;
      this.goodsType = type; //退货or换货
      this.goodsOrderItemId = item1.id;
      this.goodsAuthor = item1.author;
      this.goodsLoginName = item.loginName;
      this.goodsProductName = item1.productName;
      this.goodsBigPic = item1.bigPic;
      this.goodsOrderCode = item.orderCode;
      this.goodsPubId = item1.pubId;
      this.goodsNum = 1;
      this.currentShow = "return";
    },
    // 文本框
    textChange(value) {
      this.goodsReasons = value;
    },
    textBlur() {
      if (this.goodsReasons.length == 0) {
      }
    },
    // 退换货计数器
    handleChange(value) {
      this.goodsNum = value;
    },
    // 退换货图片上传
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        this.getStaticText("upload5PicturesAtMost")
          ? this.getStaticText("upload5PicturesAtMost")
          : "`抱歉，最多上传5张图片`"
      );
    },
    beforeHandleUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isPNG = file.type === "image/png";
      const isBMP = file.type === "image/bmp";
      const isLt5M = file.size / 1024 / 1024 < 5;

      if (!isJPG && !isPNG && isBMP) {
        this.$message.error(
          this.getStaticText("pleaseUploadPngJpgOrBmpTypePictures")
            ? this.getStaticText("pleaseUploadPngJpgOrBmpTypePictures")
            : "请上传PNG、JPG或BMP类型图片"
        );
      }
      if (!isLt5M) {
        this.$message.error(
          this.getStaticText("uploadHeadImageSizeCanNotExceed5MB")
            ? this.getStaticText("uploadHeadImageSizeCanNotExceed5MB")
            : "上传头像图片大小不能超过 5MB!"
        );
      }
      return isBMP || isJPG || (isPNG && isLt5M);
    },
    handleRemove(file, fileList) {
      let picArr = [];
      for (let i = 0; i < fileList.length; i++) {
        picArr.push(fileList[i].response.data);
      }
      this.goodsPictureList = picArr;
    },
    handleSuccess(response, file, fileList) {
      let picArr = [];
      for (let i = 0; i < fileList.length; i++) {
        picArr.push(fileList[i].response.data);
      }
      this.goodsPictureList = picArr;
    },
    // 接收收货地址信息
    getDeliveryAddress(data) {
      this.curSelectedAddress = data;
    },
    uploadUrl: function() {
      return CONFIG.BASE_URL + "user/uploadPic.do";
    },
    // 退换货申请
    applyReturnGoods() {
      if (this.curSelectedAddress === null && this.goodsType == 2) {
        // 没有填写地址情况
        this.$message({
          type: "error",
          message: this.getStaticText("receiptAddressMustNotBeEmpty")
            ? this.getStaticText("receiptAddressMustNotBeEmpty")
            : "收货地址不得为空噢~"
        });
        return false;
      }
      var params = {
        orderItemId: this.goodsOrderItemId,
        originalNum: this.goodsOriginalNum,
        author: this.goodsAuthor,
        confirmTime: this.goodsConfirmTime, //""
        createTime: this.goodsCreateTime, //""
        deliveryAddress: this.curSelectedAddress
          ? this.curSelectedAddress.province +
            this.curSelectedAddress.city +
            this.curSelectedAddress.county +
            this.curSelectedAddress.address
          : "",
        deliveryContact: this.curSelectedAddress
          ? this.curSelectedAddress.phone
          : "",
        deliveryPerson: this.curSelectedAddress
          ? this.curSelectedAddress.contactor
          : "",
        deliveryStatus: this.goodsDeliveryStatus, //0
        id: this.goodsId, //0
        loginName: this.goodsLoginName,
        logisticsCompany: this.goodsLogisticsCompany,
        logisticsNum: this.goodsLogisticsNum,
        num: this.goodsNum,
        orderCode: this.goodsOrderCode,
        bigPic: this.goodsBigPic,
        pictureList: this.goodsPictureList,
        productName: this.goodsProductName,
        pubId: this.goodsPubId,
        reasons: this.goodsReasons,
        refund: this.goodsRefund, //""
        returnGoodsStatus: this.goodsReturnGoodsStatus, //0
        returnMoneyStatus: this.goodsReturnMoneyStatus, //0
        singleRefund: this.goodsSingleRefund, //""
        status: this.goodsStatus, //0
        submitLogisticsTime: this.goodsSubmitLogisticsTime, //""
        type: this.goodsType, //0
        verifyApplyReason: this.goodsVerifyApplyReason, //""
        verifyReason: this.goodsVerifyReason, //""
        cb: this.applyReturnGoodsCb
      };
      this.$store.dispatch("personalCenter/applyReturnGoods", params);
    },
    applyReturnGoodsCb(data) {
      if (data.result == 1) {
        this.$message({
          message: data.data.msg,
          type: "success"
        });
      } else {
        this.$message.error(
          this.getStaticText("failureToSubmitApplication")
            ? this.getStaticText("failureToSubmitApplication")
            : "抱歉，申请提交失败"
        );
      }
      this.goodsPictureList = [];
      this.textarea = "";
      this.currentShow = "list";
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
      if (this.orderType == "book") {
        if (this.orderDetails[0].itemList[0].productType == "91") {
          this.KDNShow = true;
          kdnApi.run({
            serviceType: "B",
            expCode: "YTO",
            expNo: "889645294678455192",
            showType: "normal",
            container: "demoID"
          });
        } else {
          this.KDNShow = false;
        }
        this.currentShow = "bookDetails";
      } else if (this.orderType == "periodical") {
        this.currentShow = "periodicalDetails";
      }
    },
    loadedCallBack() {
      var param = {
        pageIndex: 1,
        pageSize: 8,
        payStatus: "",
        status: "",
        orderType: this.orderType,
        orderListCallBack:this.activityRemarkAll
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
                    argus.payMethodCode +
                    "&siteId=" +
                    CONFIG.SITE_CONFIG.siteId,
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
                      _this.member.loginName +
                      "&payMethodCode=" +
                      argus.payMethodCode +
                      "&siteId=" +
                      CONFIG.SITE_CONFIG.siteId
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
              : this.getStaticText("incorrectSubmissionOfOrders")
                ? this.getStaticText("incorrectSubmissionOfOrders")
                : "订单提交有误";
            _this.$alert(
              errorMsg,
              _this.getStaticText("systemHints")
                ? _this.getStaticText("systemHints")
                : "系统提示",
              {
                confirmButtonText: _this.getStaticText("confirm")
                  ? _this.getStaticText("confirm")
                  : "确定"
              }
            );
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
    allOrder() {
      this.timeValue = "";
      this.payStatusNum = "";
      this.displayCancel = "";
      var param = {
        pageIndex: 1,
        pageSize: 8,
        payStatus: "",
        status: "",
        orderType: this.orderType,
        orderListCallBack:this.activityRemarkAll
      };
      this.$store.dispatch("personalCenter/queryOrderList", param);
    },
    waitPayOrder() {
      this.timeValue = "";
      this.payStatusNum = 0;
      this.displayCancel = 1;
      var param = {
        pageIndex: 1,
        pageSize: 8,
        payStatus: 0,
        status: 1,
        orderType: this.orderType,
        orderListCallBack:this.activityRemarkAll
      };
      this.$store.dispatch("personalCenter/queryOrderList", param);
    },
    pagingF({ pageNo, pageSize }) {
      var param = {
        pageIndex: pageNo,
        pageSize: pageSize,
        payStatus: this.payStatusNum,
        status: this.displayCancel,
        orderType: this.orderType,
        orderListCallBack:this.activityRemarkAll
      };
      this.$store.dispatch("personalCenter/queryOrderList", param);
    },
    cancelOrder(outIndex) {
      //文本待抽离
      this.$confirm("确定取消此订单？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        var id = this.myOrderList.data[outIndex].id;
        var param = {
          id: id,
          cb: this.cancelOrderCallb
        };
        this.$store.dispatch("personalCenter/cancelOrder", param);
      });
    },
    cancelOrderCallb(idata, rep) {
      if (idata == 1) {
        var param = {
          pageIndex: 1,
          pageSize: 8,
          payStatus: this.payStatusNum,
          status: this.displayCancel,
          orderType: this.orderType,
          orderListCallBack:this.activityRemarkAll
        };
        this.$store.dispatch("personalCenter/queryOrderList", param);
        this.$message({
          type: "success",
          message: this.getStaticText("abolishSuccess")
            ? this.getStaticText("abolishSuccess")
            : "取消成功"
        });
      } else {
        this.$message({
          type: "info",
          message: this.getStaticText("abolishFailed")
            ? this.getStaticText("abolishFailed")
            : "取消失败，请重试"
        });
      }
    },
    deleteOrder(outIndex) {
      //文本待抽离
      this.$confirm("确定删除此订单？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        var id = this.myOrderList.data[outIndex].id;
        var param = {
          id: id,
          cb: this.deleteOrderCallb
        };
        this.$store.dispatch("personalCenter/deleteOrder", param);
      });
    },
    deleteOrderCallb(idata, rep) {
      if (idata == 1) {
        var param = {
          pageIndex: 1,
          pageSize: 8,
          payStatus: this.payStatusNum,
          status: this.displayCancel,
          orderType: this.orderType,
          orderListCallBack:this.activityRemarkAll
        };
        this.$store.dispatch("personalCenter/queryOrderList", param);
        this.$message({
          type: "success",
          message: this.getStaticText("deleteSuccess")
            ? this.getStaticText("deleteSuccess")
            : "删除成功"
        });
      } else {
        this.$message({
          type: "info",
          message: this.getStaticText("deleteFailed")
            ? this.getStaticText("deleteFailed")
            : "删除失败，请重试"
        });
      }
    },
    changeOrderList(val) {
      if (val == "book") {
        this.orderType = "book";
      } else if (val == "periodical") {
        this.orderType = "periodical";
      } else {
        console.log("知识服务订单");
      }
      var param = {
        pageIndex: 1,
        pageSize: 8,
        payStatus: "",
        status: "",
        orderType: this.orderType,
        orderListCallBack:this.activityRemarkAll
      };
      this.$store.dispatch("personalCenter/queryOrderList", param);
    },
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
    filterFun: function(value) {
      if (typeof value == "string") {
        return (
          (this.getStaticText("money") ? this.getStaticText("money") : "¥ ") +
          parseInt(value).toFixed(2) +
          (this.getStaticText("yuan") ? this.getStaticText("yuan") : "元")
        );
      } else {
        return (
          (this.getStaticText("money") ? this.getStaticText("money") : "¥ ") +
          value.toFixed(2) +
          (this.getStaticText("yuan") ? this.getStaticText("yuan") : "元")
        );
      }
    },
    //计算活动减免额
    activityRemarkAll() {
      $.each(this.myOrderList.data,function (index, item) {
        var activityRemarkAll = 0;
        if(item.couposAmount != null && item.couposAmount != ''){
          activityRemarkAll += Number(item.couposAmount);
        }
        $.each(item.orderList,function (index, innerItem) {
          if(innerItem.activityRemark != '' && innerItem.activityRemark != null){
            activityRemarkAll += Number(innerItem.activityRemark);
          }
        });
        item.activityRemarkAll = activityRemarkAll.toFixed(2)
      })
    }
  }
};
</script>
<style scoped>
.fr {
  float: right;
}
.mt5 {
  margin-top: 5px;
}
.el-row .personalcenter_list_main_listBox_card_left .OperationDoubleBtn {
  float: right;
  width: 15%;
}
.personalcenter_list_main_listBox_card_left
  .personalcenter_list_main_listBox_card_left_text
  span {
  width: 370px;
}
.mb10 {
  margin-bottom: 10px;
}
.mb20 {
  margin-bottom: 20px;
}
.mr20 {
  margin-right: 20px;
}
.disinlblo {
  display: inline-block;
}
.bg-purple-light {
  background: #e5e9f2;
  border-radius: 4px;
}
.personalcenter_list_title_common {
  height: 40px;
  line-height: 40px;
  padding: 0 20px;
  border: 1px solid rgb(223, 236, 236);
}
.personalcenter_list_title_common span {
  float: left;
  font-size: 14px;
  margin-right: 50px;
}
.personalcenter_list_title_common_detailesbtn {
  float: right;
  margin-left: 20px;
}
.personalcenter_list_main_tab {
  margin-bottom: 20px;
}
.personalcenter_list_main_title {
  margin-top: 20px;
  text-align: center;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
}
.personalcenter_list_main_title_picker {
  width: 100%;
}
.personalcenter_list_main_listBox {
  margin: 50px 0;
}
.personalcenter_list_main_listBox_card {
  border: 1px solid rgb(223, 236, 236);
}
.personalcenter_list_main_listBox_card_left {
  margin: 10px;
  height: 100px;
}
.personalcenter_list_main_listBox_card_left_returnBtn {
  width: 550px;
  padding-top: 60px;
}
.personalcenter_list_main_listBox_card_left_img {
  float: left;
  text-align: center;
  line-height: 100px;
}
.personalcenter_list_main_listBox_card_left_text {
  height: 100px;
  float: left;
}
.personalcenter_list_main_listBox_card_left_text span {
  font-size: 18px;
  padding-left: 20px;
  line-height: 30px;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 380px;
}

.personalcenter_list_main_listBox_card_left_text span:last-child {
  font-size: 14px;
}
.personalcenter_list_main_listBox_card_left_author {
  font-size: 14px;
  margin-top: 25px;
}
.personalcenter_list_main_listBox_card_right {
  font-size: 16px;
  text-align: center;
  margin-top: 45px;
}
.personalcenter_list_main_listBox_footer {
  font-size: 18px;
  float: right;
  margin: 5px 20px 0 0;
}
.personalcenter_list_main_listBox_footer span {
  color: red;
}
.personalcenter_list_main_emptyColl {
  text-align: center;
  padding: 50px 0px;
}
.personalcenter_list_main_emptyColl img {
  width: 150px;
}
/* KDN */
.kdnlogin-box {
  position: fixed;
  left: 50%;
  top: 50%;
  width: 900px;
  height: 600px;
  border: 1px solid #ccc;
  margin-left: -350px;
  margin-top: -300px;
  background-color: #fff;
}
.kdnlogin-title {
  height: 40px;
  line-height: 40px;
  background-color: #e5e5e5;
  padding-left: 15px;
}
.kdnlogin-close {
  color: #333;
  float: right;
  vertical-align: middle;
  margin-top: -1px;
  margin-right: 15px;
  cursor: pointer;
}
.kdnlogin-close:hover {
  color: #555;
}
/* KDN */
/* 详情页 */
.personalcenter_list_bookDetails_textDecoration {
  text-decoration: line-through;
}
.personalcenter_list_bookDetails_boxCard {
  vertical-align: top;
  width: 210px;
  display: inline-block;
}
.personalcenter_list_bookDetails_boxCard p {
  margin-bottom: 10px;
}
.personalcenter_list_bookDetails_boxCard_clearfix span {
  margin-left: 3px;
  color: #303133;
  font-size: 16px;
}
.personalcenter_list_bookDetails_boxCard_text p {
  color: #303133;
  font-size: 14px;
}
.personalcenter_list_bookDetails_boxCard_text_payRemark {
  color: #303133;
  font-size: 14px;
  word-break: break-word;
}
.personalcenter_list_bookDetails_boxCard_text p span {
  color: #606266;
}
.personalcenter_list_bookDetails_status {
  float: right;
  margin-right: 20px;
  font-size: 14px;
  line-height: 42px;
}
.personalcenter_list_bookDetails_goBackBtn {
  float: right;
  margin: 25px 10px 0 10px;
}
.personalcenter_list_bookDetails_footerPrice {
  display: block;
  margin-top: 30px;
  float: right;
}
.personalcenter_list_bookDetails_footerPrice span {
  font-size: 20px;
  margin: 20px;
}
/* 详情页 */
/*退换货*/
.personalcenter_list_returnForm {
  border: 1px solid rgb(236, 223, 223);
  margin-top: 30px;
  padding: 30px;
}
.personalcenter_list_returnForm_plus {
  margin: 55px auto;
}
.personalcenter_list_returnForm_btn {
  margin: 30px 5px;
  float: right;
}
/*退换货*/
</style>
