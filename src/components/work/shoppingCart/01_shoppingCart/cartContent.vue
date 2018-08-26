// 购物车组件
<template>
  <div class="shoppingCartWrapper">
    <!-- 购物车商品列表页面 -->
    <div id="cartWrapper" class="main_car" v-show="showItem == 'showCartWrapper'" v-loading="loading">
      <!-- shopping cart-->
      <div v-if="productList && productList.length>0">
        <div class="container" id="priceChange" v-if="priceChangeList.length !== 0">
          <div class="priceInfo">
            {{getStaticText('priceChangeInfo') ? getStaticText('priceChangeInfo') : '价格变更信息：'}}</div>
          <div v-for="info in priceChangeList">
            <span v-text="info.name"></span>
            <span>{{getStaticText('priceDescInfo') ? getStaticText('priceDescInfo'): '商品比加入购物车时价格降低了'}}</span>
            <span v-text="info.diffPrice"></span>
            <span>{{getStaticText('money') ? getStaticText('money') : '元'}}</span>
          </div>
        </div>
        <div class="container cartContainer">
          <div id="productListWrapper">
            <!-- product-->
            <div class="cart-item">
              <!--product head-->
              <div class="cart-item-head">
                <ul>
                  <li class="selectAll" @change="selectAll()">
                    <el-checkbox v-model="selectedAll"></el-checkbox>
                    <span>{{getStaticText('selectAll') ? getStaticText('selectAll') : '全选'}}</span>
                  </li>
                  <li>{{getStaticText('productInfo') ? getStaticText('productInfo') : '商品信息'}}</li>
                  <li>{{getStaticText('unitPrice') ? getStaticText('unitPrice') : '单价（元）'}}</li>
                  <li>{{getStaticText('quantity') ? getStaticText('quantity') : '数量'}}</li>
                  <li>{{getStaticText('sumPrice') ? getStaticText('sumPrice') : '金额'}}</li>
                  <li>{{getStaticText('operation') ? getStaticText('operation') : '操作'}}</li>
                </ul>
              </div>
              <!-- product list -->
              <ul class="cart-item-list" v-for="item in productList">
                <!--{{productList}}-->
                <div style="height:30px"></div>
                <div class="promotion" v-if="item.activityName">
                <span class="promotionInfo" v-bind:class="{checkedLi: item.selectedOne}">
                  <span>{{getStaticText('onSale') ? getStaticText('onSale') : '促销'}}</span>
                  <span>{{item.activityName}}</span>
                </span>
                </div>
                <li v-for="product in item.list" v-if="item.productType == bookTypeTag || item.productType == seriesTypeTag" class="bookWrapper"
                    v-bind:class="{checkedLi: product.checked}">
                  <div class="cart-tab-1">
                    <div class="cart-item-check">
                      <el-checkbox v-model="product.checked" @change="selectedProduct(product, item)"></el-checkbox>
                    </div>
                  </div>
                  <div class="cart-tab-2">
                    <div class="cart-item-pic">
                      <img v-bind:src="product.smallPic || '../assets/img/zwfm.png'" onload="DrawImage(this,80,80)">
                      <!--<img src="~projects/wenlian/assets/img/bookex.jpg" alt="">-->
                    </div>
                    <div class="cart-item-title">
                      <div class="item-name">
                        <a
                          v-bind:href="(CONFIG && CONFIG.directUrl && CONFIG.directUrl[product.productType] ? CONFIG.directUrl[product.productType] : './bookdetail.html') + '?pubId=' + product.pubId+'&columnId='+product.colId" class="scoped_text" :title="product.productName">{{product.productName}}</a>
                      </div>
                      <div class="author">
                        <span class="scoped_text">{{getStaticText('author') ? getStaticText('author') : '作者：'}}</span>
                        <span v-text="product.author" :title="product.author" class="scoped_text"></span>
                      </div>
                    </div>
                  </div>
                  <div class="cart-tab-3">
                    <div class="item-price">
                      <span>{{formatMoney(product.productPrice)}}</span>
                    </div>
                    <select name="" v-if="product.productDiscountList.length > 0" style="max-width:350px;" @change="selectActivity($event, product, item)">
                      <option value="0">{{getStaticText('dontParticipateAnyActivities') ? getStaticText('dontParticipateAnyActivities') : '不参与任何活动'}}</option>
                      <option v-for="(item, ind) in product.productDiscountList" v-bind="{selected: item.id === product.activityId ? 'selected' : false, value: item.id}">
                        <span>{{item.discountName}}</span>
                      </option>
                    </select>
                  </div>
                  <div class="cart-tab-4">
                    <div class="quantity">
                      <a href="javascript:void(0)" v-on:click="changeQuantity(product,-1)">-</a>
                      <input class="productNums" type="number" v-model="product.nums"
                             @keyup="changeQuantity(product, 0, $event.currentTarget.value)"
                             @keypress="checkNumber($event, product)" @blur="checkProductNums(product)">
                      <a href="javascript:void(0)" v-on:click="changeQuantity(product,1)">+</a>
                    </div>
                  </div>
                  <div class="cart-tab-5">
                    <div class="item-price-total">
                      <span> {{(Math.round(product.productPrice * product.nums * 100) / 100).toFixed(2)}}</span>
                    </div>
                  </div>
                  <div class="cart-tab-6">
                    <div class="cartOpration">
                      <div class="delete opertion" @click="deleteProduct(product.id)">
                        <span>{{getStaticText('delete') ? getStaticText('delete') : '删除'}}</span>
                      </div>
                      <div class="favorit opertion" @click="addFavorite(product)">
                    <span v-if="product.isCollect === '0' && isShowCollectButton">
                      <span>{{getStaticText('addToCollection') ? getStaticText('addToCollection') : '添加收藏'}}</span>
                    </span>
                        <span v-if="product.isCollect === '1' && isShowCollectButton">
                      <span>{{getStaticText('haveCollected') ? getStaticText('haveCollected'): '已收藏'}}</span>
                    </span>
                      </div>
                      <div v-if="product.isCollect != '1' && isShowCollectButton" class="moveFavorite opertion" @click="moveFavorite(product)">
                        <span>{{getStaticText('moveToCollection') ? getStaticText('moveToCollection') : '移入收藏'}}</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li v-for="product in item.list" v-if="item.productType == ebookTypeTag || item.productType == ejournalTypeTag" class="ebookWrapper"
                    v-bind:class="{checkedLi: product.checked}">
                  <div class="cart-tab-1">
                    <div class="cart-item-check">
                      <el-checkbox v-model="product.checked" @change="selectedProduct(product, item)"></el-checkbox>
                    </div>
                  </div>
                  <div class="cart-tab-2">
                    <div class="cart-item-pic">
                      <img v-bind:src="product.smallPic || '../assets/img/zwfm.png'" onload="DrawImage(this,80,80)" :alt="getStaticText('noImg') ? getStaticText('noImg') : '暂无图片'" style="line-height: 80px;text-align: center;float: left;">
                    </div>
                    <div class="cart-item-title">
                      <div class="item-name">
                        <a v-bind:href="(CONFIG && CONFIG.directUrl && CONFIG.directUrl[product.productType] ? CONFIG.directUrl[product.productType] : './bookdetail.html') +'pubId=' + product.pubId" class="scoped_text" :title="product.productName">{{product.productName}}</a>
                        <span class="scoped_text" v-if="item.productType == ebookTypeTag"> {{getStaticText('ebook') ? getStaticText('ebook') : '(电子书)'}}</span>
                        <span class="scoped_text" v-if="item.productType == ejournalTypeTag"> {{getStaticText('ejournal') ? getStaticText('ejournal') : '(电子期刊)'}}</span>
                      </div>
                      <div class="author">
                        <span class="scoped_text">{{getStaticText('author') ? getStaticText('author') : '作者：'}}</span>
                        <span v-text="product.author" :title="product.author" class="scoped_text"></span>
                      </div>
                    </div>
                  </div>
                  <div class="cart-tab-3">
                    <div class="item-price">
                      <span>{{formatMoney(product.productPrice)}}</span>
                    </div>
                    <select name="" v-if="product.productDiscountList.length > 0" style="max-width:350px;" @change="selectActivity($event, product, item)">
                      <option value="0">{{getStaticText('dontParticipateAnyActivities') ? getStaticText('dontParticipateAnyActivities') : '不参与任何活动'}}</option>
                      <option v-for="(item, ind) in product.productDiscountList" v-bind="{selected: item.id === product.activityId ? 'selected' : false, value: item.id}">
                        <span>{{item.discountName}}</span>
                      </option>
                    </select>
                  </div>
                  <div class="cart-tab-4">
                    <span v-text="product.nums"></span><!--电子书不显示数量调节-->
                  </div>
                  <div class="cart-tab-5">
                    <div class="item-price-total">
                      <span>{{getStaticText('yuan') ? getStaticText('yuan') : '￥'}}</span>
                      <span> {{product.productPrice * product.nums}}</span>
                    </div>
                  </div>
                  <div class="cart-tab-6">
                    <div class="cartOpration">
                      <div class="delete opertion" @click="deleteProduct(product.id)">
                        <span>{{getStaticText('delete') ? getStaticText('delete') : '删除'}}</span>
                      </div>
                      <div class="favorit opertion" @click="addFavorite(product)">
                    <span v-if="product.isCollect === '0' && isShowCollectButton">
                      <span>{{getStaticText('addToCollection') ? getStaticText('addToCollection') : '添加收藏'}}</span>
                    </span>
                        <span v-if="product.isCollect === '1' && isShowCollectButton">
                      <span>{{getStaticText('haveCollected') ? getStaticText('haveCollected') : '已收藏'}}</span>
                    </span>
                      </div>
                      <div v-if="product.isCollect != '1' && isShowCollectButton" class="moveFavorite opertion" @click="moveFavorite(product)">
                        <span>{{getStaticText('moveToCollection') ? getStaticText('moveToCollection') : '移入收藏'}}</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <!--product clearing-->
          <div class="normalClearing" :class="{fixedClearing: showFixedClearing}">
            <div id="clearingWrapper">
              <div class="selectAllProduct" @change="selectAll()">
                <el-checkbox v-model="selectedAll"></el-checkbox>
                <span>{{getStaticText('selectAll') ? getStaticText('selectAll') : '全选'}}</span>
              </div>
              <div class="clearing">
                <div class="zeroTips" v-if="showZeroTips">
                  <span></span>
                  {{getStaticText('selectAtLeastOne') ? getStaticText('selectAtLeastOne'): '请选择至少一件商品噢~'}}
                </div>
                <el-button type="primary" @click="clearing()">{{getStaticText('settleAccounts') ? getStaticText('settleAccounts') : '结算'}}</el-button>
              </div>
              <div class="detail">
                <div class="totalMoney">
                  <span class="sitRight">{{getStaticText('totalPrice') ? getStaticText('totalPrice') : '总价：'}}</span>
                  <span>{{formatMoney(totalMoney)}}</span>
                </div>
                <div class="save">
                  <span class="sitRight">{{getStaticText('haveSaved') ? getStaticText('haveSaved') : '已节省：'}}</span>
                  <span>{{formatMoney(saveAmount)}}</span>
                </div>
              </div>
              <div class="selectedProduct">
                <span>{{getStaticText('haveSelected') ? getStaticText('haveSelected') : '已选中'}}<span class="selectedProductCount" v-text="totalNum">0</span>{{getStaticText('productQuanity') ? getStaticText('productQuanity'): '件商品'}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- empty shopping cart-->
      <div v-if="productList.length==0">
        <div class="emptyCart">
          <img src="./assets/img/emptyCart.png" alt="">
          <div class="emptyInfo">{{getStaticText('cartEmptyInfo') ? getStaticText('cartEmptyInfo') : '您的购物车还是空的，赶紧行动吧！'}}</div>
        </div>
      </div>
    </div>
    <!-- END 购物车商品列表页面 -->

    <!-- 购物车提交订单页面 -->
    <div id="orderWrapper" class="main_car" v-show="showItem == 'showOrderWrapper'">
      <div class="container">

        <!-- 收货地址组件 -->
        <!-- 需要发票 或者 不全是电子书才显示收货地址组件 -->
        <work_shoppingcart_01_components_address v-show="needInvoice === '1' || allEbook === false" namespace="address" @deliveryAddress="getDeliveryAddress"></work_shoppingcart_01_components_address>
        <!-- END 收货地址组件 -->

        <div class="invoice">
          <div class="infoHead">{{getStaticText('invoiceInfo') ? getStaticText('invoiceInfo') : '发票信息'}}</div>
          <div :class="{orderContent: needInvoice === '0', chooseInvoice: needInvoice === '1'}">
            <span>{{getStaticText('chooseWetherNeedInvoice') ? getStaticText('chooseWetherNeedInvoice') : '选择是否需要发票：'}}</span>
            <template>
              <el-radio v-model="needInvoice" label="1">{{getStaticText('yes') ? getStaticText('yes'): '是'}}</el-radio>
              <el-radio v-model="needInvoice" label="0">{{getStaticText('no') ? getStaticText('no') : '否'}}</el-radio>
            </template>
          </div>

          <!-- 发票信息组件 -->
          <work_shoppingcart_01_components_invoice v-show="needInvoice === '1'" namespace="invoice" @invoiceInfo="getInvoiceInfo"></work_shoppingcart_01_components_invoice>
          <!-- END 发票信息组件 -->

        </div>

        <!-- 优惠券模块 -->
        <div class="discount" v-if="isShowCoupon">
          <div class="infoHead">{{getStaticText('discountCoupon') ? getStaticText('discountCoupon') : '优惠券'}}</div>
          <div class="myCouponsWrapper">
            <div class="disabledCoupons" v-for="(list, index) in couponsList"  v-if="couponsList.length > 0" :class="{'myCoupons': list.isAvailablesm === true, 'activeCoupons': selectedCouponsPassword === list.password}" @click="selectCoupon(list, index)" @mouseenter="showCancelBtn(list.password)" @mouseleave="hideCancelBtn(list.password)">
              <div v-if="list.type === 'fullCut'">
                <p style="margin-bottom: 5px;">
                  <span class="f30">{{getStaticText('yuan') ? getStaticText('yuan') : '￥'}}{{list.cprice}}</span>
                  <span>{{getStaticText('satisfy') ? getStaticText('satisfy') : '满'}} {{list.fullPrice}} {{getStaticText('toUse') ? getStaticText('toUse'): '使用'}}</span>
                </p>
              </div>
              <div v-if="list.type === 'deduction'">
                <p style="margin-bottom: 5px;">
                  <span class="f30">{{getStaticText('yuan') ? getStaticText('yuan') : '￥'}}{{list.cprice}}</span>
                  <span>{{getStaticText('deduction') ? getStaticText('deduction') : '直接抵扣'}}</span>
                </p>
              </div>
              <div v-if="list.type === 'discountRate'">
                <p style="margin-bottom: 5px;">
                  <span class="f30">{{list.cprice | formatDiscount}}{{getStaticText('discount') ? getStaticText('discount') : '折'}}</span>
                  <span>{{getStaticText('discountRate') ? getStaticText('discountRate') : '折扣率'}}</span>
                </p>
              </div>
              <div>
                <p class="couponRange">{{getStaticText('date') ? getStaticText('date') : '日期：'}}{{list.cbtime | formatTime}} - {{list.cetime | formatTime}}</p>
                <p class="couponRange">{{getStaticText('only') ? getStaticText('only') : '仅限：'}}
                  <span v-if="list.couponRange === 'book'">{{getStaticText('paperBook') ? getStaticText('paperBook') : '纸质书'}}</span>
                  <span v-if="list.couponRange === 'ebook'">{{getStaticText('ebook') ? getStaticText('ebook') : '电子书'}}</span>
                  <span style="cursor: pointer;" :title="list.classifyName">{{list.classifyName | formatName}}{{getStaticText('classification') ? getStaticText('classification') : '分类'}}</span>
                </p>
              </div>
              <div class="cancelCoupons" v-if="showCancelCoupons === true && selectedCouponsPassword === list.password" @click.stop="cancelCouponsEve(list)">{{getStaticText('deselect') ? getStaticText('deselect') : '取消选择'}}</div>
            </div>
            <div v-if="couponsList.length === 0">{{getStaticText('noCoupons') ? getStaticText('noCoupons') : '暂无优惠券~'}}</div>
          </div>
        </div>
        <!-- END 优惠券模块 -->

        <!-- 支付方式模块 -->
        <div class="payment">
          <div class="infoHead">{{getStaticText('modeOfPayment') ? getStaticText('modeOfPayment') : '支付方式'}}</div>
          <div class="orderContent">
            <el-radio-group v-model="payWay" size="small" fill="#f6163c">
          <span v-for="(pay, index) in paymentList" @click="selectPayWay(pay, index)">
            <el-radio :label="index">{{pay.payName}}</el-radio>
          </span>
            </el-radio-group>
          </div>
        </div>
        <!-- END 支付方式模块 -->

        <div class="payremark">
          <div class="infoHead">{{getStaticText('postscript') ? getStaticText('postscript') : '备注信息'}}</div>
          <div class="orderContent">
            <span>{{getStaticText('inputPostscript') ? getStaticText('inputPostscript') : '填写备注信息'}}</span>
            <el-input :placeholder="getStaticText('pleaseInputPostscript') ? getStaticText('pleaseInputPostscript') : '请输入备注信息'" id="payremark" :maxlength="50" @blur="checkPayremark()" v-model="payremark" ref="payremark"></el-input>
            <p>{{getStaticText('youCanAlsoInput') ? getStaticText('youCanAlsoInput') : '您还可以输入'}}<span>{{50-payremark.length}}</span>{{getStaticText('wordQuanity') ? getStaticText('wordQuanity') : '个字'}}</p>
          </div>
        </div>

        <!-- 已选商品列表模块 -->
        <div class="selectedProductList">
          <div class="proList">{{getStaticText('productList') ? getStaticText('productList') : '商品列表'}}</div>
          <!--order product list-->
          <div class="cart-item">
            <ul class="cart-item-list" v-for="item in orderList" v-if="item.list.length>0">
              <div style="height:30px"></div>
              <div class="promotion" v-if="item.activityName">
              <span class="promotionInfo">
                  <span>{{getStaticText('onSale') ? getStaticText('onSale') : '促销'}}</span>
                  <span>{{item.activityName}}</span>
              </span>
              </div>
              <li v-for="product in item.list">
                <div class="cart-tab-1">
                  <div class="cart-item-pic">
                    <img v-bind:src="product.smallPic || '../assets/img/zwfm.png'" onload="DrawImage(this,80,80)">
                  </div>
                  <div class="cart-item-title">
                    <div class="item-name">
                      <span>{{product.productName}}</span>
                      <span v-if="product.productType == ebookTypeTag">{{getStaticText('ebookClass') ? getStaticText('ebookClass') : '(电子书)'}}</span>
                      <span v-if="product.productType == ejournalTypeTag">{{getStaticText('ejournalClass') ? getStaticText('ejournalClass') : '(电子期刊)'}}</span>
                    </div>
                    <div class="author">
                      <span>{{getStaticText('author') ? getStaticText('author') : '作者：'}}</span>
                      <span v-text="product.author"></span>
                    </div>
                  </div>
                </div>
                <div class="cart-tab-2">
                  <div class="item-price">
                    <span>{{formatMoney(product.productPrice)}}</span>
                  </div>
                </div>
                <div class="cart-tab-3">
                  <div v-text="product.nums"></div>
                  <div class="item-stock">
                  </div>
                </div>
                <div class="cart-tab-4">
                  <div class="item-price-total">
                    <span> {{formatMoney(product.productPrice * product.nums)}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- END 已选商品列表模块 -->

        <!-- 提交订单尾部 -->
        <div class="orderFooter">
          <div class="amount">
            <span>{{getStaticText('totalCount') ? getStaticText('totalCount') : '共计'}}{{orderDetail.totalNum}} {{getStaticText('productQuanity') ? getStaticText('productQuanity'): '件商品'}}</span>
            <span>{{getStaticText('shouldPay') ? getStaticText('totalCount') : '应付：'}}{{formatMoney(orderDetail.bookTotalMoney + orderDetail.ebookTotalMoney)}}</span>
          </div>
          <div class="virtual">
            <span>{{getStaticText('totalHave') ? getStaticText('totalHave') : '共有'}}{{virtualCoin}} {{getStaticText('downloadCoin') ? getStaticText('downloadCoin') : '下载币'}}</span>
            <span>{{getStaticText('toUse') ? getStaticText('toUse') : '使用'}}</span>
            <!-- <input type="number" id="virtualCoin" v-on:input="getRmbCoin()"
                   @keypress="checkVirtual($event)"> -->
            <input type="text" id="virtualCoin" @keyup="checkVirtual()" v-model="downloadCoin">
            <span>{{getStaticText('downloadCoin') ? getStaticText('downloadCoin') : '下载币'}}</span>
          </div>
          <!-- 下载币和人民币的比例关系是根据后台配置的比例来的 不是固定的 -->
          <div class="coinremark">
            <span>{{getStaticText('oneCoinEqualsOneYuan') ? getStaticText('oneCoinEqualsOneYuan') : '1下载币='}}</span>
            <span v-text="exchangeRate"></span>
            <span>{{getStaticText('money') ? getStaticText('money') : '元'}}</span> 
          </div>
          <div class="orderDetail" :class="{hideTrans:allEbook === true && needInvoice === '0'}">
            <div class="disc">{{getStaticText('reducePrice') ? getStaticText('reducePrice') : '优惠：-'}} {{formatMoney(orderDetail.bookSaveMoney + orderDetail.ebookSaveMoney)}}</div>
            <div class="vir">{{getStaticText('downloadCoinReduce') ? getStaticText('downloadCoinReduce') : '下载币：-'}} {{formatMoney(rmbCoin)}}</div>
            <div class="transWay dropup" v-show="allEbook === false || needInvoice === '1'">
              <span>{{getStaticText('modeOfDistribution') ? getStaticText('modeOfDistribution') : '配送方式：'}}</span>
              <div class="transwayDrop">
                <el-dropdown size="mini" :split-button="true" type="primary" trigger="click" @command="selectDelivery">
                  {{selectedDelivery.methods}}
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item :key="index" v-for="(item, index) in deliveryList" :command="item">{{item.methods}}</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
              <span>{{getStaticText('carriage') ? getStaticText('carriage') : '运费：'}}{{formatMoney(selectedDelivery.deliveryPrice)}}</span>
            </div>
          </div>
          <div class="payAmount">
            <span>{{getStaticText('actuallyPaid') ? getStaticText('actuallyPaid') : '实付金额：'}}</span>
            <!-- 全部都是电子书并且不需要发票 这个时候不要配送费 -->
            <span class="payTotalAmount"
                  v-if="allEbook === true && needInvoice === '0'">{{formatMoney(orderDetail.bookTotalMoney - orderDetail.bookSaveMoney + orderDetail.ebookTotalMoney - rmbCoin - orderDetail.ebookSaveMoney)}}</span>
            <span class="payTotalAmount"
                  v-else>{{formatMoney(orderDetail.bookTotalMoney - orderDetail.bookSaveMoney + orderDetail.ebookTotalMoney - orderDetail.ebookSaveMoney - rmbCoin + selectedDelivery.deliveryPrice)}}</span>
          </div>
          <div class="commitOrder">
            <el-button v-if="!hasCommitOrder" type="primary" size="large" @click="commitOrder()">{{getStaticText('submitOrder') ? getStaticText('submitOrder') : '提交订单'}}</el-button>
            <el-button v-else plain size="large" disabled>{{getStaticText('submitOrder') ? getStaticText('submitOrder') : '提交订单'}}</el-button>
          </div>
        </div>
        <!-- END 提交订单尾部 -->
      </div>
    </div>
    <!-- END 购物车提交订单页面 -->
  </div>
</template>
<script type="text/ecmascript-6">
  import Vue from "vue";
  import * as type from "@work/shoppingCart/common/interfaces.js";
  import * as interfaces from "@work/login/common/interfaces.js";
  import { mapGetters, mapActions } from "vuex";
  import axios from "axios";
  import moment from "moment";
  import $ from "jquery";
  import { Base64 } from 'js-base64';
  // import {DrawImage} from "@common";
  import PROJECT_CONFIG from "projectConfig";

  export default {
    name: "work_shoppingcart_01_cart",
    reused: true,
    props: {
      namespace: { // 购物车命名空间 需要多语言才配置
        type: String,
        default: null
      },
      isShowCollectButton: {  // 收藏按钮控制 有些站点不需要
        type: Boolean,
        default: true
      },
      isShowCoupon: {         // 优惠券按钮控制 有些站点不需要
        type: Boolean,
        default: true
      }
    },
    created: function () {
      this.getMemberInfo().then((member) => {
        this.member.loginName = member.loginName;
        this.loadCallBack();
      });
      this.CONFIG = this.namespace ? PROJECT_CONFIG[this.namespace].shoppingCart.shoppingCart_01.cartContent : null; // 兼容处理
    },
    mounted: function () {
      var _this = this;
      /* this.$store.dispatch("shoppingcart/queryUser", { // 先去vuex获取一下用户信息
        loadCallBack: this.loadCallBack
      }); */
      if (window.location.hash) { // #/myOrder  提交订单页面 即在提交订单页面执行刷新操作
        this.getRecordOrder();
      } else {                    // 购物车列表页面 即 结算页面
        this.showItem = "showCartWrapper";
      }
      this.$store.dispatch("shoppingcart/" + type.GET_PAYMENT);   // 获取支付方式
      this.$store.dispatch("shoppingcart/" + type.GET_DELIVERY);  // 获取物流运输方式

      this.priceInfo();          // 查询价格变更信息列表

      let hasTop = false;
      $(window).scroll(function (event) {               // 监控滚动条 控制下方结算按钮要始终在可视区域
        if ($(".normalClearing").length > 0) {
          if(!hasTop){
            _this.elementTop = $($(".normalClearing")[0]).offset().top;
            hasTop = true;
          }
          var clientHeight = $(window)[0].innerHeight; // 屏幕可视高度
          var scrollTop = $(window).scrollTop();       // 元素距离窗口最上边的高度
          _this.toogleFixed(_this.elementTop, clientHeight, scrollTop);
        }
      });
    },
    data () {
      return {
        loading: false,
        exchangeRate: 1, // 虚拟币和人民币的换算比例 默认1
        member: {
          loginName: ''
        },
        hasCommitOrder: false, // 是否已经提交订单 避免重复提交订单
        /* 购物车列表页面 */
        showItem: "showCartWrapper",
        selectedAll: false,       // 是否全选状态：默认不全选
        totalMoney: 0,            // 总金额
        totalNum: 0,              // 总数量
        saveAmount: 0,            // 节省总金额
        selectedProductList: {},  // c:减金额
        selectedProductListArray: [],
        freeFreight: false,   // 是否免运费状态：默认不免运费
        sendPoints: 0,        // 送积分
        orderProductList: [], // 订单商品列表 从购物车页面带到订单页面
        priceChangeList: [],  // 价格变更信息列表
        showFixedClearing: false,
        showZeroTips: false,  // 提示要选择至少一件商品的框框
        /* 提交订单页 */
        needInvoice: "0",     // 是否需要发票： 1 是    0 否  默认不需要发票
        selectedInvoice: 1,
        coupons: "",
        payWay: 0,
        payremark:"",
        payMethod: "0",       // 支付方式 0 微信支付 1 支付宝支付
        selectedDelivery: {},
        selectedOrderList: [],
        allEbook: true, // 只有电子书的时候不显示收货地址和快递信息,默认都是电子书
        allBook: true, // 全部都是纸质书 优惠码需要使用
        activityValue: "",
        bookTotalMoney: 0, // 纸质书总价
        bookSaveMoney: 0, // 纸质书节省金额
        ebookTotalMoney: 0, // 电子书总价
        ebookSaveMoney: 0, // 电子书节省金额
        couponSaveMoney: [], // 使用优惠券优惠总金额
        couponProductListWrapper: {}, // 使用优惠券优惠商品列表
        selectedCouponsPassword: "", // 当前选择的优惠券id
        bookTypeTag: "91", // 纸书类型代号
        ebookTypeTag: "94", // 电子书类型代号
        ejournalTypeTag: '149', // 电子期刊类型代号
        seriesTypeTag: '177', // 丛书类型代号
        showCancelCoupons: false,
        elementTop: 0,  // 底部结算栏距离顶部的高度
        curSelectedAddress: {}, // 当前选择的地址 从地址选择子组件中接收到的
        curSelectedInvoice: {   // 当前选择的发票 从发票信息子组件中接收到的
          invoiceType: "普通发票", // 发票类型 默认显示普通发票
          receipttypes: "个人",
          receiptType: "1",       // 1:个人  2:单位
          receiptId: "明细",      // 普通发票的明细  默认显示明细
          receiptTitle: "",       // 公司名称
          taxpayerCode: "",       // 纳税人识别号
          companyAddress: "",     // 公司住址 即注册地址
          companyPhone: "",       // 公司联系方式 即注册电话
          bankName: "",           // 开户银行
          bankAccount: ""         // 开户账号
        },
        downloadCoin: "", // 下载币
        balancePay: false, // 下载币全额支付
        CONFIG:null
      };
    },
    computed: {
      ...mapGetters({
        // member: "shoppingcart/getMember",               // 在vuex里面获取用户信息
        productList: "shoppingcart/getProductList",        // 获取购物车商品列表
        deleteStatus: "shoppingcart/getDeleteStatus",      // 删除商品状态
        favoriteStatus: "shoppingcart/getFavoriteStatus",  // 添加收藏状态
        orderList: "shoppingcart/getOrderList",            // 获取订单商品列表
        orderDetail: "shoppingcart/getOrderDetail",        // 获取订单详情：总价 总数 节省 运费 积分
        paymentList: "shoppingcart/getPaymentList",        // 获取支付方式
        deliveryList: "shoppingcart/getDeliveryList",      // 获取配送方式
        commitInfo: "shoppingcart/getCommitInfo",          // 获取订单号
        virtualCoin: "shoppingcart/getVirtualCoin",        // 获取用户下载币总数量
        rmbCoin: "shoppingcart/getRmbCoin",                // 获取用户下载币兑换人民币
        couponsList: "shoppingcart/getCouponsList"         // 用户优惠券列表
      }),
      recordOrder: function () {
        // 将订单从本地存储中取出来
        var _this = this;
        var tempList = [];
        if (this.orderList.length > 0) {
          tempList = this.orderList;
        } else {
          tempList =JSON.parse(Base64.decode(window.sessionStorage.getItem("recordOrder"))).recordOrderList;
        }
        tempList.forEach(function (items) {
          if (items.list.length > 0) {
            _this.selectedOrderList.push(items);
          }
        });
        return {
          recordOrderList: tempList
        };
      },
      recordOrderDetail: function () {
        // 将订单详细信息从本地存储中取出来
        var tempDetails = JSON.parse(
          window.sessionStorage.getItem("recordOrderDetail")
        );
        return {
          totalMoney:
            this.orderDetail.totalNum !== 0
              ? this.orderDetail.totalMoney
              : tempDetails.totalMoney,
          totalNum:
            this.orderDetail.totalNum !== 0
              ? this.orderDetail.totalNum
              : tempDetails.totalNum,
          saveAmount:
            this.orderDetail.totalNum !== 0
              ? this.orderDetail.saveAmount
              : tempDetails.saveAmount,
          freeFreight:
            this.orderDetail.totalNum !== 0
              ? this.orderDetail.freeFreight
              : tempDetails.freeFreight,
          sendPoints:
            this.orderDetail.totalNum !== 0
              ? this.orderDetail.sendPoints
              : tempDetails.sendPoints,
          bookTotalMoney:
            this.orderDetail.totalNum !== 0
              ? this.orderDetail.bookTotalMoney
              : tempDetails.bookTotalMoney,
          bookSaveMoney:
            this.orderDetail.totalNum !== 0
              ? this.orderDetail.bookSaveMoney
              : tempDetails.bookSaveMoney,
          ebookTotalMoney:
            this.orderDetail.totalNum !== 0
              ? this.orderDetail.ebookTotalMoney
              : tempDetails.ebookTotalMoney,
          ebookSaveMoney:
            this.orderDetail.totalNum !== 0
              ? this.orderDetail.ebookSaveMoney
              : tempDetails.ebookSaveMoney
        };
      }
    },
    methods: {
      ...mapActions("login", {
        getMemberInfo: interfaces.ACTION_KEEP_SESSION
      }),
      //验证备注信息
      checkPayremark:function(){
        if(this.$refs.payremark.$refs.input._value.length > 50){
          this.$alert(this.getStaticText('remarksShouldNotExceedFiftyCharacters') ? this.getStaticText('remarksShouldNotExceedFiftyCharacters') : "备注不能超过50个字符 ", this.getStaticText('systemPrompt') ? this.getStaticText('systemPrompt') : "系统提示", {
            confirmButtonText: this.getStaticText('yes') ? this.getStaticText('yes') : "确定"
          });
        }
      },
      /************ 商品列表页 即结算页面 ************/
      selectActivity (event, product, item) { // 更换活动
        product.checked = false;
        this.$forceUpdate();
        var _this = this;
        var params = {
          param: {
            loginName: this.member.loginName,
            productId: product.productId,
            activityId: event.target.value
          },
          myCallBack: function () {
            if (this.changeActivity) {
              _this.$store.dispatch("shoppingcart/" + type.QUERY_SHOPPING_CART, { param: { loginName: _this.member.loginName } });
              window.location.reload();
            } else {
              _this.$message({
                type: "error",
                message: _this.getStaticText('activityReplacementFail') ? _this.getStaticText('activityReplacementFail') : "活动更换失败~"
              });
            }
          }
        };
        _this.$store.dispatch("shoppingcart/" + type.CHANGE_ACTIVITY, params);
      },
      toogleFixed: function (eleTop, clientHeight, scrollTop) {  // 结算条要始终显示在可视区域
        if (scrollTop + clientHeight < eleTop) {
          this.showFixedClearing = true;
        } else {
          this.showFixedClearing = false;
        }
      },
      loadCallBack: function () {   // 一进页面就要通过查询用户之后立即执行的操作 比如：查询商品列表、下载币、优惠券
        /* var _this = this;
        var params = {
          param: {
            loginName: this.member.loginName
          },
          myCallback: function () {
            var eleTop; // 元素距离窗口最上边的高度
            var clientHeight; // 屏幕可视高度
            var scrollTop; // 元素距离窗口最上边的高度

            _this.$nextTick(function () {
              if ($(".normalClearing").length > 0) {
                _this.elementTop = $($(".normalClearing")[0]).offset().top;
                clientHeight = $(window)[0].innerHeight;
                scrollTop = $(window).scrollTop();
                _this.toogleFixed(_this.elementTop, clientHeight, scrollTop);
              }
            });
          }
        }; */
        // this.$store.dispatch("shoppingcart/" + type.QUERY_SHOPPING_CART, params);              // 购物车商品列表
        this.$store.dispatch("shoppingcart/" + type.QUERY_VIRTUAL_COIN, this.member.loginName); // 下载币数量
        this.$store.dispatch("shoppingcart/" + type.QUERY_COUPONS, { loginName: this.member.loginName, type: "noUse" }); // 优惠券列表
        var eleTop; // 元素距离窗口最上边的高度
        var clientHeight; // 屏幕可视高度
        var scrollTop; // 元素距离窗口最上边的高度
        this.$nextTick( () => {
          if ($(".normalClearing").length > 0) {
            this.elementTop = $($(".normalClearing")[0]).offset().top;
            clientHeight = $(window)[0].innerHeight;
            scrollTop = $(window).scrollTop();
            this.toogleFixed(this.elementTop, clientHeight, scrollTop);
          }
        });
      },
      setRecordOrder: function () {  // 商品列表和订单详情（优惠金额、总数、总价等）要存在 sessionStorage 里面 刷新页面要取
        // JSON.stringify(this.recordOrder);
        window.sessionStorage.setItem("recordOrder", Base64.encode(JSON.stringify(this.recordOrder))); // 商品列表
        window.sessionStorage.setItem("recordOrderDetail", JSON.stringify(this.recordOrderDetail)); // 订单详情
      },
      getRecordOrder: function () {  // 取存在 sessionStorage 里面的东西
        var _this = this;
        var sessionOrderList = JSON.parse(Base64.decode(window.sessionStorage.getItem("recordOrder"))).recordOrderList;
        this.allEbook = JSON.parse(window.sessionStorage.getItem("allEbook")); // 电子书状态
        this.allBook = JSON.parse(window.sessionStorage.getItem("allBook")); // 纸质书状态
        this.showItem = window.sessionStorage.getItem("showItem"); // 显示状态
        sessionOrderList.forEach(function (item) {
          _this.orderList.push(item);
        });
        sessionOrderList.forEach(function (items) {
          if (items.list.length > 0) {
            _this.selectedOrderList.push(items);
          }
        });
        var tempDetail = JSON.parse(
          window.sessionStorage.getItem("recordOrderDetail")
        );
        _this.orderDetail.totalMoney = tempDetail.totalMoney;
        _this.orderDetail.totalNum = tempDetail.totalNum;
        _this.orderDetail.saveAmount = tempDetail.saveAmount;
        _this.orderDetail.freeFreight = tempDetail.freeFreight;
        _this.orderDetail.sendPoints = tempDetail.sendPoints;
        _this.orderDetail.bookTotalMoney = tempDetail.bookTotalMoney;
        _this.orderDetail.bookSaveMoney = tempDetail.bookSaveMoney;
        _this.orderDetail.ebookTotalMoney = tempDetail.ebookTotalMoney;
        _this.orderDetail.ebookSaveMoney = tempDetail.ebookSaveMoney;
      },
      deleteProduct: function (id) {  // 删除商品
        var _this = this;
        this.$confirm(_this.getStaticText('areYouSureToDeleteTheItem') ? _this.getStaticText('areYouSureToDeleteTheItem') : "您确定要删除该商品吗?", _this.getStaticText('systemPrompt') ? _this.getStaticText('systemPrompt') : "系统提示", {
          confirmButtonText: _this.getStaticText('confirm') ? _this.getStaticText('confirm') : "确定",
          cancelButtonText: _this.getStaticText('cancel') ? _this.getStaticText('cancel') : "取消",
          type: "warning"
        }).then(function () {
          _this.loading = true; // 加loading防止操作请求时间太长 造成视觉误差
          var param = {
            ids: id,
            cb: function () {
              if (this.deleteStatus) {
                _this.$message({
                  type: "success",
                  message: _this.getStaticText('deleteSuccess') ? _this.getStaticText('deleteSuccess') : "删除成功!"
                });
                _this.$store.dispatch("shoppingcart/" + type.QUERY_SHOPPING_CART, { param: { loginName: _this.member.loginName } });
              } else {
                _this.$message({
                  type: "error",
                  message: _this.getStaticText('deleteFailed') ? _this.getStaticText('deleteFailed') : "删除失败!"
                });
              }
              _this.loading = false;
            }
          };
          _this.$store.dispatch("shoppingcart/" + type.DELETE_CART_PRODUCT, param);
        });
      },
      selectAll: function () {       // 商品全选操作
        var _this = this;
        var data = this.productList;
        for (var i = 0; i < data.length; i++) {
          var dataList = data[i].list;
          for (var j = 0; j < dataList.length; j++) {
            dataList[j].checked = this.selectedAll;
          }
        }
        data.forEach(function (data) {
          data.selectedOne = false;
          Vue.set(data, "selectedOne", _this.selectedAll);
        });
        this.calcTotalMoney();
      },
      selectedProduct: function (product, item) { // 选择某个商品
        item.selectedOne = false; // 默认一个也没有选中
        this.isSelectAll();
        this.calcTotalMoney();
        var list = item.list;
        list.forEach(function (listItem) {
          if (listItem.checked === true) {
            Vue.set(item, "selectedOne", true);
          }
        });
      },
      isSelectAll: function () {    // 判断是否全选
        var status = true; // 全选与否的状态
        var data = this.productList;
        for (var i = 0; i < data.length; i++) {
          var dataList = data[i].list;
          for (var j = 0; j < dataList.length; j++) {
            if (!dataList[j].checked) { // 非全选状态
              status = false;
            }
          }
        }
        this.selectedAll = status ? true : false;
      },
      calcTotalMoney: function () { // 计算选中商品总价（不参加任何活动的单纯计算）
        this.calSaveMoney();
        var totalMoney = 0; // 所有商品总价
        var totalNum = 0;
        var data = this.productList;
        for (var i = 0; i < data.length; i++) {
          var dataList = data[i].list;
          for (var j = 0; j < dataList.length; j++) {
            if (dataList[j].checked) {
              totalMoney += dataList[j].productPrice * dataList[j].nums; // 不加任何活动时候的总价格
              totalNum += Number(dataList[j].nums); // 勾选商品总数
              var list = this.selectedProductList["activity" + dataList[j].activityId + dataList[j].productType].list; // 把当前勾选中的商品放到他的活动id对应的对象里的list数组里面
              list.push(dataList[j]); // 整理出来的所有类型活动的商品
              if (list.length > 0) {
                var discountType = list[0].discountType; // 满多收钱 + 4种操作：cutMoney discount freeFare sendPoints 外加不参加任何活动
                var referAmount = list[0].amount; // 满多少 这是减的标准线 超过了才能减 不超过不能减
                var curTotalMoney = 0; // 某个类型活动的总金额
                switch (discountType) {
                  case "cutMoney": // 满多少钱减多少钱
                    var discountAmount = list[0].discountAmount; // 减多少钱
                    list.forEach(function (item) {
                      curTotalMoney += item.productPrice * item.nums;
                    });
                    if (dataList[j].discountRule === "fullReduce") { // 一级活动分类：满多少钱 + 4种操作 减钱
                      if (curTotalMoney >= referAmount) { // 满足满多少钱减多少钱的条件
                        this.selectedProductList["activity" + dataList[j].activityId + dataList[j].productType].saveValue = discountAmount;
                      }
                    } else if (dataList[j].discountRule === "fixedDiscount") { // 一级活动分类：固定折扣 减钱
                      this.selectedProductList["activity" + dataList[j].activityId + dataList[j].productType].saveValue = discountAmount > curTotalMoney ? curTotalMoney : discountAmount;
                    }
                    this.selectedProductList["activity" + dataList[j].activityId + dataList[j].productType].totalPrice = curTotalMoney;
                    break;
                  case "discount": // 满多少钱打折
                    var discountRatio = list[0].discountRatio; // 折扣力度
                    list.forEach(function (item) {
                      curTotalMoney += item.productPrice * item.nums; // 总金额
                    });
                    if (dataList[j].discountRule === "fullReduce") { // 一级活动分类：满多少钱 + 4种操作 打折
                      if (curTotalMoney >= referAmount) { // 满足满多少钱打折的条件
                        this.selectedProductList["activity" + dataList[j].activityId + dataList[j].productType].saveValue = curTotalMoney - curTotalMoney * (discountRatio / 100);
                      } else {
                        this.selectedProductList[
                        "activity" +
                        dataList[j].activityId +
                        dataList[j].productType
                          ].saveValue = 0;
                      }
                    } else if (dataList[j].discountRule === "fixedDiscount") {
                      // 一级活动分类：固定折扣 打折
                      this.selectedProductList[
                      "activity" +
                      dataList[j].activityId +
                      dataList[j].productType
                        ].saveValue =
                        curTotalMoney - curTotalMoney * (discountRatio / 100);
                    }
                    this.selectedProductList[
                    "activity" +
                    dataList[j].activityId +
                    dataList[j].productType
                      ].totalPrice = curTotalMoney;
                    break;
                  case "freeFare": // 满多少减运费
                    list.forEach(function (item) {
                      curTotalMoney += item.productPrice * item.nums;
                    });
                    if (dataList[j].discountRule === "fullReduce") {
                      // 一级活动分类：满多少钱 + 4种操作 免运费
                      if (curTotalMoney >= referAmount) {
                        // 满足满多少免运费的条件
                        this.freeFreight = true;
                      } else {
                        this.freeFreight = false;
                      }
                    } else if (dataList[j].discountRule === "fixedDiscount") {
                      // 一级活动分类：固定折扣 免运费
                      this.freeFreight = true;
                    }
                    this.selectedProductList[
                    "activity" +
                    dataList[j].activityId +
                    dataList[j].productType
                      ].totalPrice = curTotalMoney;
                    break;
                  case "sendPoints": //满多少送积分  待定
                    var points = list[0].points;
                    var curTotalPoints = 0;
                    list.forEach(function (item) {
                      curTotalMoney += item.productPrice * item.nums;
                    });
                    if (dataList[j].discountRule === "fullReduce") {
                      // 一级活动分类：满多少钱 + 4种操作 送积分
                      if (curTotalMoney >= referAmount) {
                        // 满足满多少钱送积分的条件
                        this.selectedProductList[
                        "activity" +
                        dataList[j].activityId +
                        dataList[j].productType
                          ].sendPoints = points;
                      } else {
                        this.selectedProductList[
                        "activity" +
                        dataList[j].activityId +
                        dataList[j].productType
                          ].sendPoints = 0;
                      }
                    } else if (dataList[j].discountRule === "fixedDiscount") {
                      // 一级活动分类：固定折扣 送积分
                      this.selectedProductList[
                      "activity" +
                      dataList[j].activityId +
                      dataList[j].productType
                        ].sendPoints = points;
                    }
                    this.selectedProductList[
                    "activity" +
                    dataList[j].activityId +
                    dataList[j].productType
                      ].totalPrice = curTotalMoney;
                    break;
                  default:
                    // 不参与任何活动的商品
                    /*console.info('do not participate any activity');*/
                    this.totalMoney = totalMoney;
                    this.saveAmount = 0;
                    list.forEach(function (item) {
                      curTotalMoney += item.productPrice * item.nums;
                    });
                    this.selectedProductList[
                    "activity" +
                    dataList[j].activityId +
                    dataList[j].productType
                      ].totalPrice = curTotalMoney;
                }
              }
            } else {
              this.totalMoney = totalMoney;
            }
          }
        }
        var saveMoneyArray = [];
        var bookTotalMoneyArray = [];
        var bookSaveMoneyArray = [];
        var ebookTotalMoneyArray = [];
        var ebookSaveMoneyArray = [];
        var sendPointsArray = [];
        var _this = this;
        this.selectedProductListArray.forEach(function (item) {
          saveMoneyArray.push(item.saveValue);
          sendPointsArray.push(item.sendPoints); // 积分
          if (item.productType === _this.bookTypeTag || item.productType == _this.seriesTypeTag) {
            // book
            bookTotalMoneyArray.push(item.totalPrice);
            bookSaveMoneyArray.push(item.saveValue);
          } else if (item.productType === _this.ebookTypeTag || item.productType === _this.ejournalTypeTag) {
            // ebook
            ebookTotalMoneyArray.push(item.totalPrice);
            ebookSaveMoneyArray.push(item.saveValue);
          }
        });
        this.saveAmount =
          saveMoneyArray.length > 0 ? eval(saveMoneyArray.join("+")) : 0;
        this.bookTotalMoney =
          bookTotalMoneyArray.length > 0
            ? eval(bookTotalMoneyArray.join("+"))
            : 0;
        this.bookSaveMoney =
          bookSaveMoneyArray.length > 0 ? eval(bookSaveMoneyArray.join("+")) : 0;
        this.ebookTotalMoney =
          ebookTotalMoneyArray.length > 0
            ? eval(ebookTotalMoneyArray.join("+"))
            : 0;
        this.ebookSaveMoney =
          ebookSaveMoneyArray.length > 0
            ? eval(ebookSaveMoneyArray.join("+"))
            : 0;
        this.sendPoints =
          sendPointsArray.length > 0 ? eval(sendPointsArray.join("+")) : 0;
        this.totalMoney = totalMoney - this.saveAmount;
        this.totalNum = totalNum;
      },
      calSaveMoney: function () {   // 计算节省金额
        this.selectedProductListArray = [];
        var _this = this;
        this.productList.forEach(function (item) {
          // 前端根据后端返回多少种活动来拟好相应的对象 对象是根据活动id命名的 push到选择商品的数组里面   错误点：没有区分电子书和纸质书
          _this.selectedProductList[
          "activity" + item.activityId + item.productType
            ] = {};
          _this.selectedProductList[
          "activity" + item.activityId + item.productType
            ].list = [];
          _this.selectedProductList[
          "activity" + item.activityId + item.productType
            ].saveValue = 0; // 默认初始值 节省 0 元
          _this.selectedProductList[
          "activity" + item.activityId + item.productType
            ].sendPoints = 0; // 送积分 默认值 0 积分
          _this.selectedProductList[
          "activity" + item.activityId + item.productType
            ].totalPrice = 0;
          _this.selectedProductList[
          "activity" + item.activityId + item.productType
            ].productType =
            item.productType;
          _this.selectedProductList[
          "activity" + item.activityId + item.productType
            ].activityName =
            item.activityName;
          _this.selectedProductList[
          "activity" + item.activityId + item.productType
            ].activityId =
            item.activityId;
          _this.selectedProductListArray.push(
            _this.selectedProductList[
            "activity" + item.activityId + item.productType
              ]
          );
        });
      },
      maxQuantity(nums) {
        if (nums > 200) { // 防止加过200
          this.$alert(this.getStaticText('theQuantityOfProductsMustNotExceedTwoHundred') ? this.getStaticText('theQuantityOfProductsMustNotExceedTwoHundred') :"商品数量不能大于200", this.getStaticText('systemPrompt') ? this.getStaticText('systemPrompt') : "系统提示", {
            confirmButtonText: this.getStaticText('confirm') ? this.getStaticText('confirm') : "确定",
          });
        }
      },
      changeQuantity: function (product, val, fixedVal) { // 改变纸质书商品数量
        if (val > 0) {
          ++product.nums;
          if (product.nums > 200) { // 防止加过200
            this.maxQuantity(product.nums)
          }
        } else if (val < 0) {
          product.nums--;
          if (product.nums < 1) { // 防止减到0
            product.nums = 1;
          }
        }
        if (fixedVal) { // 手动输入固定值
          if (fixedVal > 200) { // 防止加过200
            this.maxQuantity(fixedVal);
            product.nums = 200;
          } else if (fixedVal < 1) { // 防止减到0
            product.nums = 1;
          } else {
            product.nums = fixedVal;
          }
        }
        this.calcTotalMoney();
        var changeCountParams = {
          productId: product.productId,
          number: product.nums,
          loginName: this.member.loginName
        };
        this.$store.dispatch(
          "shoppingcart/" + type.CHANGE_PRODUCT_COUNT,
          changeCountParams
        );
        var tempLength = 0;
        for (var i = 0; i < this.productList.length; i++) {
          for (var j = 0; j < this.productList[i].list.length; j++) {
            tempLength += Number(this.productList[i].list[j].nums);
          }
        }
        this.$store.dispatch("login/getTotalAmount", tempLength); // 购物车角标商品总数
      },
      addFavorite: function (product) {  // 添加收藏
        var _this = this;
        var params = {
          param: {
            loginName: this.member.loginName,
            pubId: product.pubId,
            productId: product.productId,
            operateType: "0"
          },
          myCallback: function () {
            if (this.favoriteStatus === "00") {
              _this.$message({
                message: _this.getStaticText('collectSuccess') ? _this.getStaticText('collectSuccess') : "收藏成功",
                type: "success"
              });
            } else if (this.favoriteStatus === "000") {
              _this.$message({
                message: _this.getStaticText('cancelCollectSuccess') ? _this.getStaticText('cancelCollectSuccess') : "取消收藏成功",
                type: "success"
              });
            }
            _this.$store.dispatch(
              "shoppingcart/" + type.QUERY_SHOPPING_CART,
              { param: { loginName: _this.member.loginName } }
            );
          }
        };
        this.$store.dispatch("shoppingcart/" + type.ADD_FAVORITE, params);
      },
      moveFavorite: function (product) { // 移入收藏
        var _this = this;
        if (product.isCollect === "1") { // 已收藏的话就直接移除就行
          var param = {
            ids: product.id,
            cb: function () {
              if (this.deleteStatus) { // 删除成功以后再重新load购物车数据
                _this.$store.dispatch("shoppingcart/" + type.QUERY_SHOPPING_CART, { param: { loginName: _this.member.loginName } });
                _this.$message({
                  type: "success",
                  message: _this.getStaticText('moveIntoCollectionFolderSuccess') ? _this.getStaticText('moveIntoCollectionFolderSuccess') : "成功移入收藏夹"
                });
              } else {
                _this.$message({
                  type: "error",
                  message: _this.getStaticText('moveIntoCollectionFolderFailed') ? _this.getStaticText('moveIntoCollectionFolderFailed') : "移入收藏夹失败"
                });
              }
            }
          };
          _this.$store.dispatch("shoppingcart/" + type.DELETE_CART_PRODUCT, param);
          return false;
        }
        var params = { // 没有收藏过的商品需要先收藏后删除
          param: {
            loginName: this.member.loginName,
            pubId: product.pubId,
            productId: product.productId,
            operateType: "0"
          },
          myCallback: function () {
            if (this.favoriteStatus === "00") { // 添加收藏成功
              var param = {
                ids: product.id,
                cb: function () {
                  if (this.deleteStatus) { // 删除成功以后再重新load购物车数据
                    _this.$store.dispatch("shoppingcart/" + type.QUERY_SHOPPING_CART, { param: { loginName: _this.member.loginName } });
                    _this.$message({
                      type: "success",
                      message: _this.getStaticText('moveIntoCollectionFolderSuccess') ? _this.getStaticText('moveIntoCollectionFolderSuccess') : "成功移入收藏夹"
                    });
                  } else {
                    _this.$message({
                      type: "error",
                      message: _this.getStaticText('moveIntoCollectionFolderFailed') ? _this.getStaticText('moveIntoCollectionFolderFailed') : "移入收藏夹失败"
                    });
                  }
                }
              };
              _this.$store.dispatch("shoppingcart/" + type.DELETE_CART_PRODUCT, param);
            }
          }
        };
        this.$store.dispatch("shoppingcart/" + type.ADD_FAVORITE, params);
      },
      priceInfo: function () {     // 计算价格变更信息
        var _this = this;
        loadPriceChangeInfo();

        function loadPriceChangeInfo () {
          setTimeout(function () {
            if (_this.productList && _this.productList.length > 0) {
              var outerLength = _this.productList.length;
              for (var i = 0; i < outerLength; i++) {
                var innerLength = _this.productList[i].list.length;
                for (var j = 0; j < innerLength; j++) { // 判断 现在的价格 小于 加入购物车时的价格
                  var product = _this.productList[i].list[j];
                  if ((product.productPrice - 0).toFixed(2) < (product.productPriceIn - 0).toFixed(2)) {  // 相同小数点进行比较 不然会出现'53'<'53.00'
                    let priceChange = {};
                    priceChange.name = product.productName;
                    priceChange.diffPrice = (parseFloat(product.productPriceIn) - product.productPrice).toFixed(2); // 降了多少
                    _this.priceChangeList.push(priceChange);
                  }
                }
              }
            } else {
              loadPriceChangeInfo();
            }
          }, 50);
        }
      },
      checkNumber: function (event, product) { // 购买数量格式校验
        if (!String.fromCharCode(event.keyCode).match(/\d/)) {
          event.preventDefault();
        }
        if ($(".productNums").val().length > 4) {
          event.preventDefault();
        }
      },
      checkProductNums: function (product) { // @keyup的时候一并判断就可以 失去焦点不用重复判断
        /* var _this = this;
        if (Number($(".productNums").val()) <= 0) {
          this.$alert(_this.getStaticText('numberOfProductsMustBeMoreThanZero') ? _this.getStaticText('numberOfProductsMustBeMoreThanZero') : "商品数量必须大于0", _this.getStaticText('systemPrompt') ? _this.getStaticText('systemPrompt') : "系统提示", {
            confirmButtonText: _this.getStaticText('confirm') ? _this.getStaticText('confirm') : "确定",
            callback: function () {
              $(".productNums").val(1);
              _this.changeQuantity(product, 0, 1);
            }
          });
        } else if (Number($(".productNums").val()) > 200) {
          this.$alert(_this.getStaticText('theQuantityOfProductsMustNotExceedTwoHundred') ? _this.getStaticText('theQuantityOfProductsMustNotExceedTwoHundred') : "商品数量不能大于200", _this.getStaticText('systemPrompt') ? _this.getStaticText('systemPrompt') : "系统提示", {
            confirmButtonText: _this.getStaticText('confirm') ? _this.getStaticText('confirm') : "确定",
            callback: function () {
              $(".productNums").val(200);
              _this.changeQuantity(product, 0, 200);
            }
          });
        } */
      },
      clearing: function () { // 结算：即为初次进入提交订单页面 要将电子书状态、商品列表信息和结算详细信息存在本地
        var _this = this;
        var detailParams = {
          totalMoney: this.totalMoney,
          totalNum: this.totalNum,
          saveAmount: this.saveAmount,
          freeFreight: this.freeFreight,
          sendPoints: this.sendPoints,
          bookTotalMoney: this.bookTotalMoney,
          bookSaveMoney: this.bookSaveMoney,
          ebookTotalMoney: this.ebookTotalMoney,
          ebookSaveMoney: this.ebookSaveMoney
        };
        this.selectedProductListArray.forEach(function (items) {
          if (items.list.length > 0) {
            items.list.forEach(function (item) {
              _this.orderProductList.push(item);
            });
          }
        });
        if (this.orderProductList.length > 0) {
          this.$store.dispatch(
            "shoppingcart/" + type.QUERY_ORDER_PRODUCT,
            this.selectedProductListArray
          );
          this.$store.dispatch(
            "shoppingcart/" + type.QUERY_ORDER_DETAIL,
            detailParams
          );
          this.showItem = "showOrderWrapper";
          window.location.hash = "/myOrder/" + this.member.loginName;
          window.sessionStorage.setItem("showItem", this.showItem); // 显示状态
          if (this.deliveryList.length > 0) {
            this.selectedDelivery = JSON.parse(
              JSON.stringify(this.deliveryList[0])
            );
          }
          if (this.freeFreight) {
            this.selectedDelivery.deliveryPrice = 0;
          }
        } else {
          this.showZeroTips = true;
          setTimeout(function () {
            _this.showZeroTips = false;
          }, 2000);
          return false; // 当一件商品也没有选择
        }
        this.orderList.forEach(function (item) {
          if (item.list.length > 0) {
            if (item.productType === _this.bookTypeTag || item.productType === _this.seriesTypeTag) {
              // 纸质书
              _this.allEbook = false;
            }
            if (item.productType === _this.ebookTypeTag || item.productType === _this.ejournalTypeTag) {
              // 电子书
              _this.allBook = false;
            }
            window.sessionStorage.setItem(
              "allEbook",
              JSON.stringify(_this.allEbook)
            ); // 电子书状态
            window.sessionStorage.setItem(
              "allBook",
              JSON.stringify(_this.allBook)
            ); // 纸质书状态
          }
        });
        /* 一提交订单就查看一下虚拟币和人民币的比例 */
        axios.get(CONFIG.BASE_URL + 'rechargeVirtualCoin/getRbm.do?virtualCoin=' + 1).then(function (response) {
          if(response.data && response.data.result=='1') {
            _this.exchangeRate = response.data.data;
          }
        })
        this.getDeliveryFee(); // 根据物流模板实时获取物流费用
        this.setRecordOrder();
        this.dealCouponStyle();
      },
      getDeliveryFee() { // 物流费用 根据物流公司 + 商品的重量 + 收货地区 来变化运费
        /* console.log(this.selectedDelivery)
        console.log(this.orderList);
        console.log(this.curSelectedAddress); */
        let totalWeight = 0;
        this.orderList.map((item) => {
          if(item.list.length>0) {
            item.list.map((subItem) => {
              totalWeight += Number(subItem.weight);
            })
          }
        })
        var params = {
          expenseTemp: this.selectedDelivery && this.selectedDelivery.expenseTemp ? this.selectedDelivery.expenseTemp : '', // 物流公司下的模板Id
          city: this.curSelectedAddress ? this.curSelectedAddress.province : '', // 收件城市 省
          weight: totalWeight, // 选择结算的所有纸质商品（纸质书/纸质期刊）的重量
        }
        axios.get(CONFIG.BASE_URL + 'order/getDeliveryFee.do' + '?expenseTemp=' + params.expenseTemp + '&city=' + encodeURI(params.city) + '&weight=' + params.weight).then((response) => {
          if(response.data && response.data.result == '1') { // 请求成功
            this.selectedDelivery.deliveryPrice = Number(response.data.data);
            /* 运费随物流模板实时变化 那每次重新计算的时候都要重新计算订单实付总额 防止支付负数 */
            var bookPrice = this.orderDetail.bookTotalMoney - this.orderDetail.bookSaveMoney + this.orderDetail.ebookTotalMoney - this.orderDetail.ebookSaveMoney;// 商品实付总价
            if (Number(bookPrice + this.selectedDelivery.deliveryPrice - this.rmbCoin) < 0) { // 商品实付总价 + 运费 - 虚拟币抵扣 < 0
              this.downloadCoin = bookPrice + this.selectedDelivery.deliveryPrice; // 前端页面显示的下载币数值
              this.$store.state.shoppingcart.rmbCoin = bookPrice + this.selectedDelivery.deliveryPrice;
            }
          }
        })
      },
      dealCouponStyle: function () { // 优惠券高亮处理
        /**
         * 优惠券高亮与否的处理 2017/12/6
         * 优惠券分三种：折扣 discountRate、固定抵扣 deduction、满xx减xx fullCut
         * 已参加活动的商品不能再使用优惠券
         * 没有参加活动的商品按 类型（book/ebook） 和 分类 （JAVA/C/...）重新组合
         **/
        var _this = this;
        var couponsProductWrapper = {}; // 按 类型 和 分类 重新组合的订单列表
        this.orderList.forEach(function (item) { // 遍历订单列表 此时是按不同活动组合的商品列表
          item.list.forEach(function (pro) {
            if (!(couponsProductWrapper[item.productType + "-" + pro.catId] && couponsProductWrapper[item.productType + "-" + pro.catId].length > 0)) {
              couponsProductWrapper[item.productType + "-" + pro.catId] = [];
            }
            couponsProductWrapper[item.productType + "-" + pro.catId].push(pro); // 按 类型 和 分类 重新组合的订单列表
          });
        });
        this.couponsList.forEach(function (coupon) { // 遍历优惠券列表
          var couponsType = []; // 优惠券的种类 array 如 ["91-88340", "91-88341", "91-88342"]
          var type = coupon.couponRange === "book" ? _this.bookTypeTag : _this.ebookTypeTag;
          var idWrapper = coupon.classifyId.split(",");
          for (var i = 0; i < idWrapper.length; i++) {
            couponsType.push(type + "-" + idWrapper[i]);
          }
          for (let couponsProduct in couponsProductWrapper) { // 循环订单列表
            var ind = couponsType.join().indexOf(couponsProduct);
            if (ind !== -1) {
              var couponsProductLists = couponsProductWrapper[couponsProduct]; // 能使用优惠券的商品列表
              if (!(_this.couponProductListWrapper[coupon.type + '-' + coupon.id] && _this.couponProductListWrapper[coupon.type + '-' + coupon.id].length > 0)) {
                _this.couponProductListWrapper[coupon.type + '-' + coupon.id] = [];
              }
              _this.couponProductListWrapper[coupon.type + '-' + coupon.id].push(couponsProductLists);
              if (coupon.type === "deduction" || coupon.type === "discountRate") {
                // 固定抵扣 和 折扣 没有总金额限制
                coupon.isAvailablesm = true;
              } else if (coupon.type === "fullCut") {
                // 满xx减xx 有总金额的限制
                var fullAmount = 0; // 能使用满减优惠券商品的总金额
                var orderProductList = JSON.parse(Base64.decode(window.sessionStorage.getItem("recordOrder"))).recordOrderList;
                couponsProductLists.forEach(function (full) {
                  // fullAmount += full.nums * full.productPrice;
                  if (full.activityId === "0" && full.activityName === "") {   // 没有参加活动的商品
                    fullAmount += full.nums * full.productPrice;
                  } else {  // *** 参加了活动的商品 在判断能不能参与某优惠券的时候 要拿参加完活动的价格去判断 不能拿原价去判断
                    let listTotalPrice = 0;
                    for(var k = 0; k < orderProductList.length; k++) {
                      for(var u = 0; u < orderProductList[k].list.length; u++) {
                          listTotalPrice += orderProductList[k].list[u].nums * orderProductList[k].list[u].productPrice;
                          if (full.id === orderProductList[k].list[u].id) {
                           full.activitySavePrice = orderProductList[k].saveValue; // 某单个商品参与的活动节省总金额 不能等同于该商品参加活动节省金额 因为这个活动里可能有多件商品
                        }
                      }
                    }
                    for(var k = 0; k < orderProductList.length; k++) {
                      for(var u = 0; u < orderProductList[k].list.length; u++) {
                        if (full.id === orderProductList[k].list[u].id) {
                           full.afterActivityPrice = full.nums * full.productPrice - ((full.nums * full.productPrice / listTotalPrice) * full.activitySavePrice).toFixed(2);  // 参加了活动的商品节省金额按占比重折算出来
                        }
                      }
                    }
                    fullAmount += full.afterActivityPrice;
                  }
                });
                if (fullAmount >= (coupon.fullPrice - 0).toFixed(2)) {
                  // 符合满减条件
                  coupon.isAvailablesm = true;
                }
              }
            }
          }
        });
      },
      /************ 提交订单页面 ************/
      getDeliveryAddress (data) {  // 接收收货地址信息
        this.curSelectedAddress = data;
      },
      getInvoiceInfo (data) {      // 接收发票信息
      // debugger
        this.curSelectedInvoice = data;
      },
      selectCoupon: function (item, index) {  // 选择某个可用优惠券
        if (this.couponProductListWrapper[item.type + '-' + item.id]) {
          this.selectedCouponsPassword = item.password;
          var couponProductList = this.couponProductListWrapper[item.type + '-' + item.id];
          var fullAmount = 0; // 能使用满减优惠券商品的总金额
          couponProductList.forEach( (list) => {
            for(var i = 0; i < list.length; i++) {
              if (list[i].activityId === 0 && list[i].activityName === "") {  // 没有参加活动的商品
                fullAmount += list[i].nums * list[i].productPrice;
              } else { // 参加了活动的商品
                fullAmount += list[i].afterActivityPrice;
              }
            }
          });
          if (item.type === "deduction") {
            this.couponSaveMoney =
              fullAmount >= item.cprice ? item.cprice : fullAmount;
          } else if (item.type === "discountRate") {
            this.couponSaveMoney =
              Math.round((fullAmount - fullAmount * item.cprice) * 100) / 100;
          } else if (item.type === "fullCut") {
            this.couponSaveMoney = item.cprice;
          }
        } else {
          /*console.log("该优惠券是不能使用的优惠券");*/
          return false;
        }
        if (item.couponRange === "ebook") {
          // 电子书
          this.orderDetail.ebookSaveMoney =
            JSON.parse(window.sessionStorage.getItem("recordOrderDetail"))
              .ebookSaveMoney + this.couponSaveMoney;
        } else {
          // 纸质书
          this.orderDetail.bookSaveMoney =
            JSON.parse(window.sessionStorage.getItem("recordOrderDetail"))
              .bookSaveMoney + this.couponSaveMoney;
        }
        /*this.orderDetail.saveAmount = JSON.parse(window.sessionStorage.getItem('recordOrderDetail')).saveAmount + this.couponSaveMoney;*/
        /**
         * ebookSaveMoney 电子书节省金额
         * bookSaveMoney  纸质书节省金额
         * saveAmount     总节省金额
         * 当且仅当没有用优惠券时  saveAmount === ebookSaveMoney + bookSaveMoney
         * 用了优惠券  ebookSaveMoney/bookSaveMoney === 商品本身活动优惠 + 优惠券优惠
         **/
      },
      showCancelBtn: function (password) {    // 可用优惠券上鼠标移入会出现取消选择按钮
        if (this.selectedCouponsPassword === password) {
          this.showCancelCoupons = true;
        }
      },
      hideCancelBtn: function (password) {    // 可用优惠券上鼠标移出会隐藏取消选择按钮
        if (this.selectedCouponsPassword === password) {
          this.showCancelCoupons = false;
        }
      },
      cancelCouponsEve: function (item) {     // 取消优惠券的选择
        this.selectedCouponsPassword = "";
        this.couponSaveMoney = 0;
        if (item.couponRange === "ebook") { // 电子书
          this.orderDetail.ebookSaveMoney = JSON.parse(window.sessionStorage.getItem("recordOrderDetail")).ebookSaveMoney + this.couponSaveMoney;
        } else { // 纸质书
          this.orderDetail.bookSaveMoney = JSON.parse(window.sessionStorage.getItem("recordOrderDetail")).bookSaveMoney + this.couponSaveMoney;
        }
        this.orderDetail.saveAmount = JSON.parse(window.sessionStorage.getItem("recordOrderDetail")).saveAmount + this.couponSaveMoney;
      },
      selectDelivery: function (item) {  // 选择快递方式
        this.selectedDelivery = item;
        var tempFreight = JSON.parse(
          window.sessionStorage.getItem("recordOrderDetail")
        );
        if ((tempFreight && tempFreight.freeFreight) || this.freeFreight) {
          this.selectedDelivery.deliveryPrice = 0;
        }
      },
      selectPayWay: function (item, index) { // 选择支付方式
        this.payWay = index;
        this.payMethod = item.payCode + "";
      },
      commitOrder: function () {        // 最终提交订单
        var _this = this;
        var temp = [];
        this.selectedOrderList.forEach(function (item) {
          temp.push(item);
        });
        if (this.curSelectedAddress === null && this.allEbook === false) { // 没有填写地址情况
          _this.$message({
            type: "error",
            message: _this.getStaticText('shippingAddressMustNotBeEmpty') ? _this.getStaticText('shippingAddressMustNotBeEmpty') : "收货地址不得为空噢~"
          });
          return false;
        }
        this.hasCommitOrder = true; // 防止重复提交订单
        // var payremark = $("#payremark").find("input").val();
        // 订单备注信息
        var curRealAmount = Number($(".payTotalAmount")[0].innerHTML.match(/[0-9]\d*\.?[0-9]\d*/)[0]); // 应付金额
        if (this.needInvoice === "0") {
          this.curSelectedInvoice = {
            invoiceType: "",  // 发票类型
            receipttypes: "",
            receiptType: "",  // 1:个人  2:单位
            receiptId: "",    // 普通发票的明细  默认显示明细
            receiptTitle: "", // 发票抬头：个人 / 公司名称
            taxpayerCode: "", // 纳税人识别号
            companyAddress: "", // 公司住址
            companyPhone: "",   // 公司联系方式
            bankName: "",       // 开户银行
            bankAccount: ""     // 开户账号
          };
        }
        var params = {
          param: {
            balanceAmount: this.$store.state.shoppingcart.rmbCoin, // 使用下载币抵扣金额
            createTime: null,
            deliveryAddress: this.curSelectedAddress ? this.curSelectedAddress.province + this.curSelectedAddress.city + this.curSelectedAddress.county + this.curSelectedAddress.address : "",
            deliveryProvince: this.curSelectedAddress ? this.curSelectedAddress.province : '', // 收货地址的省份
            deliveryCity: this.curSelectedAddress ? this.curSelectedAddress.city : '', // 收货地址的市
            deliveryArea: this.curSelectedAddress ? this.curSelectedAddress.county : '', // 收货地址的区
            deliveryContact: this.curSelectedAddress ? this.curSelectedAddress.phone : "",
            deliveryPerson: this.curSelectedAddress ? this.curSelectedAddress.contactor : "",
            deliveryPrice: this.allEbook === true && this.needInvoice === "0" ? "" : this.selectedDelivery.deliveryPrice, // 运费
            deliveryRemark: "",
            deliveryType: this.allEbook === true && this.needInvoice === "0" ? "" : this.selectedDelivery.id, // 运输方式
            discountAmount: this.orderDetail.saveAmount, // 商品各种活动优惠 不包含免运费的活动
            id: 0,
            isReceipt: "1",
            loginName: this.member.loginName,
            orderCode: "",
            payAmount: this.allEbook === true && this.needInvoice === "0" ? this.orderDetail.totalMoney + this.orderDetail.saveAmount : this.orderDetail.totalMoney + this.orderDetail.saveAmount + this.selectedDelivery.deliveryPrice, // 应付金额 = 商品总价 + 运费
            payCode: "",
            payMethod: this.balancePay ? 'Balance' : this.payMethod, // 支付方式： Weixin 微信支付 Alipay 支付宝支付 Balance 下载币支付 // edit by mmc 2018/3/29
            payRemark: this.payremark, // 订单备注
            payStatus: "",
            payTime: null,
            payType: 1, // 0线下支付  1在线支付
            payUser: "",
            realAmount: curRealAmount, // 实付金额 = 商品总价 + 运费 - 商品各种活动优惠 - 使用下载币抵扣金额
            receiptId:
              this.curSelectedInvoice.receiptType == 1 ? this.curSelectedInvoice.receiptId : "",
            receiptType: this.curSelectedInvoice.receiptType,
            receiptTitle:
              this.curSelectedInvoice.receiptType == 1
                ? "个人"
                : this.curSelectedInvoice.receiptTitle,
            taxpayerCode: this.curSelectedInvoice.taxpayerCode,
            companyAddress: this.curSelectedInvoice.companyAddress,
            companyPhone: this.curSelectedInvoice.companyPhone,
            bankName: this.curSelectedInvoice.bankName,
            bankAccount: this.curSelectedInvoice.bankAccount,
            remark: "",
            siteId: CONFIG.SITE_CONFIG.siteId,
            splitOrderList: temp,
            totalPrice: this.orderDetail.totalMoney + this.orderDetail.saveAmount, // 商品总价（不含优惠运费）
            couponsOrder: this.selectedCouponsPassword, // 优惠券的密码 如果有两张 以数组形式传递
            point: this.orderDetail.sendPoints,
            orderType: 'book', // book 图书总单（包括电子书、纸质书、单独期刊） periodical 订阅
          },
          myCallback: function () {
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
                if (_this.payMethod === "Alipay") {
                  // 支付宝支付
                  loadingTag.close();
                  window.open(
                    CONFIG.BASE_URL +
                    "epay/getPayForm.do?orderId=" +
                    argus.orderId +
                    "&loginName=" +
                    _this.member.loginName +
                    "&payMethodCode=" +
                    argus.payMethodCode + '&siteId=' + CONFIG.SITE_CONFIG.siteId,
                    "_self"
                  );
                } else if (_this.payMethod === "Weixin") {
                  // 微信支付
                  axios.get(
                    CONFIG.BASE_URL +
                    "epay/getPayForm.do?orderId=" +
                    argus.orderId +
                    "&loginName=" +
                    _this.member.loginName +
                    "&payMethodCode=" +
                    argus.payMethodCode + '&siteId=' + CONFIG.SITE_CONFIG.siteId
                  )
                    .then(function (response) {
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
                      loadingTag.close();
                    });
                }
                window.history.pushState(
                  null,
                  null,
                  "../pages/errorpage.html"
                ); // 添加历史记录
              } else {
                // 不需要跳转支付页面 实付金额为0
                loadingTag.close();
                window.location.href =
                  "../pages/commitorder.html#/commitOrder/" +
                  _this.commitInfo.orderCode +
                  "/" +
                  _this.commitInfo.status +
                  "/order";
              }
            } else {
              // 提交失败
              loadingTag.close();
              var errorMsg = this.commitInfo.errMsg
                ? this.commitInfo.errMsg
                : (this.getStaticText('orderSubmissionError') ? this.getStaticText('orderSubmissionError') : "订单提交有误");
              _this.$alert(errorMsg, _this.getStaticText('systemPrompt') ? _this.getStaticText('systemPrompt') : "系统提示", {
                confirmButtonText: _this.getStaticText('confirm') ? _this.getStaticText('confirm') : "确定"
              });
            }
          }
        };
        // console.log(params);
        this.$store.dispatch("shoppingcart/" + type.COMMIT_ORDER, params);
        let loadingTag = _this.$loading({ fullscreen: true });
      },
      getRmbCoin: function () {         // 实时兑换下载币为人民币
        var _this = this;
        if (_this.downloadCoin == "") { // 清空输入框
          _this.$store.state.shoppingcart.rmbCoin = 0;
          return false;
        }
        var virtual = Number(_this.downloadCoin);
        if (virtual > _this.virtualCoin) {
          _this.$alert(_this.getStaticText('downloadCoinNotEnough') ? _this.getStaticText('downloadCoinNotEnough') : "下载币不足~", _this.getStaticText('systemPrompt') ? _this.getStaticText('systemPrompt') : "系统提示", {
            confirmButtonText: _this.getStaticText('confirm') ? _this.getStaticText('confirm') : "确定"
          });
          _this.$store.state.shoppingcart.rmbCoin = _this.virtualCoin;
          _this.downloadCoin = _this.virtualCoin;
        }
        var params = {
          param: virtual,
          myCallbacks: function () {
            if (this.rmbCoin) {  // 下载币兑换成功
              var payAmount = _this.orderDetail.totalMoney + _this.selectedDelivery.deliveryPrice; // 默认实付=应付-优惠活动+运费
              if (_this.allEbook && _this.needInvoice === "0") {
                // 全是电子书并且不需要发票
                payAmount = _this.orderDetail.bookTotalMoney + _this.orderDetail.ebookTotalMoney - _this.orderDetail.bookSaveMoney - _this.orderDetail.ebookSaveMoney;
                _this.balancePay = false;
              }
              if (this.rmbCoin < 0){
                _this.balancePay = false;
                _this.$alert(_this.getStaticText('downloadCoinDiscountCanNotBeLessThanZero') ? _this.getStaticText('downloadCoinDiscountCanNotBeLessThanZero') : "下载币优惠数额不能小于0噢~", _this.getStaticText('systemPrompt') ? _this.getStaticText('systemPrompt') : "系统提示", {
                  confirmButtonText: _this.getStaticText('confirm') ? _this.getStaticText('confirm') : "确定"
                });
                _this.$store.state.shoppingcart.rmbCoin = 0;
                _this.downloadCoin = 0;
              }
              if (this.rmbCoin.toFixed(2) > payAmount) {
                _this.balancePay = true;
                _this.$alert(_this.getStaticText('downloadCoinDiscountCanNotBeMoreThanAmountActuallyPaid') ? _this.getStaticText('downloadCoinDiscountCanNotBeMoreThanAmountActuallyPaid') : "下载币优惠数额不得大于实付金额噢~", _this.getStaticText('systemPrompt') ? _this.getStaticText('systemPrompt') : "系统提示", {
                  confirmButtonText: _this.getStaticText('confirm') ? _this.getStaticText('confirm') : "确定"
                });
                var rate = _this.downloadCoin / _this.$store.state.shoppingcart.rmbCoin.toFixed(3); // 计算转换率
                _this.$store.state.shoppingcart.rmbCoin = payAmount;
                _this.downloadCoin = (payAmount * rate).toFixed(2);
              }
            }
          }
        };
        this.$store.dispatch("shoppingcart/" + type.GET_RMB_COIN, params);
      },
      checkVirtual: function () {  //  键盘按下事件 控制下载币输入框只能输入数字 和 小数点
        if (this.downloadCoin != '' && this.downloadCoin.substr(0, 1) == '.') { //修复第一个字符是小数点 的情况
          this.downloadCoin = "";
        }
        this.downloadCoin = this.downloadCoin.replace(/^0*(0\.|[1-9])/, '$1'); //解决 粘贴不生效
        this.downloadCoin = this.downloadCoin.replace(/[^\d.]/g, ""); //清除“数字”和“.”以外的字符
        this.downloadCoin = this.downloadCoin.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
        this.downloadCoin = this.downloadCoin.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
        this.downloadCoin = this.downloadCoin.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //只能输入两个小数
        if (this.downloadCoin.indexOf(".") < 0 && this.downloadCoin != "") { //以上已经过滤，此处控制的是如果没有小数点，首位不能为类似于 01、02的金额
          if (this.downloadCoin.substr(0, 1) == '0' && this.downloadCoin.length == 2) {
            this.downloadCoin = this.downloadCoin.substr(1, this.downloadCoin.length);
          }
        }
        this.getRmbCoin();
      },
      getStaticText(text){
        if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]){
          return this.CONFIG.staticText[text]
        }else {
          return false
        }
      },
      formatMoney: function (value) {
        if (value) {
          return (this.getStaticText('yuan') ? this.getStaticText('yuan') : "¥ ") + Number(value).toFixed(2);
        } else {
          return (this.getStaticText('yuan') ? this.getStaticText('yuan') : "¥ ") + '0.00';
        }
      },
    },
    filters: {
      // formatMoney: function (value) {
      //   if (value) {
      //     return "¥ " + Number(value).toFixed(2);
      //   } else {
      //     return "¥ " + value;
      //   }
      // },
      formatTime: function (value) {
        if (value) {
          return moment(value).format("YYYY.MM.DD");
        }
      },
      formatDiscount: function (value) {
        return value * 10;
      },
      formatName: function (value) {
        if (value) {
          return value.replace(/,/g, "，");
        }
      }
    },
    watch: {
      curSelectedAddress(newValue, oldValue) { // 更换收货地址 需要相应调整物流价格
        this.curSelectedAddress = newValue;
        this.getDeliveryFee();
      },
      selectedDelivery(newValue, oldValue) { // 更换物流公司 需要相应调整物流价格
        this.selectedDelivery = newValue;
        this.getDeliveryFee();
      },
      couponsList: function (newValue, oldValue) { // 监听优惠券列表 处理提交订单页面刷新时优惠券不高亮显示问题
        if (window.location.hash) {
          this.dealCouponStyle();
        }
      },
      needInvoice: function (newValue, oldValue) { // 切换是否需要发票触发
        var _this = this;
        if (newValue !== oldValue && this.allEbook === true) {
          _this.downloadCoin = "";
          if (newValue === "0") { // 不需要发票
            this.selectedDelivery.deliveryPrice = 0;
            this.$store.state.shoppingcart.rmbCoin = 0;
          } else {                // 需要发票
            this.deliveryList.forEach(function (item) {
              if (_this.selectedDelivery.methods === item.methods) {
                _this.selectedDelivery.deliveryPrice = item.deliveryPrice;
              }
            });
          }
        }
      },
      deliveryList: function (newValue, oldValue) { // 在订单页面执行刷新操作触发
        if (newValue !== oldValue && this.showItem == "showOrderWrapper") {
          this.selectedDelivery = JSON.parse(JSON.stringify(newValue[0]));
          var tempDetail = JSON.parse(
            window.sessionStorage.getItem("recordOrderDetail")
          );
          if (tempDetail && tempDetail.freeFreight && this.needInvoice === "0") {
            this.selectedDelivery.deliveryPrice = 0;
            console.log("%c注意：当前订单要免运费", "color:red");
          } else {
            console.log("%c注意：当前订单不免运费", "color:red");
          }
        }
      },
      paymentList: function () {
        if (this.paymentList.length > 0) {
          this.payMethod = this.paymentList[0].payCode + '';
        }
      }
    }
  };
</script>
<style>
  .scoped_text {
    display: inline-block;
    max-width: 150px;
    line-height: 25px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>

<style>
  #orderWrapper .orderFooter div.coinremark{
    height: 16px;
    line-height: 16px;
    font-size: 12px;
    color: red;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  .shoppingCartWrapper {
    min-height: 600px;
  }

  #cartWrapper {
    padding-bottom: 24px;
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
    margin-top: 36px;
  }

  #cartWrapper .cartContainer {
    font-size: 14px;
  }

  #cartWrapper #priceChange .priceInfo {
    color: #ff2832;
  }

  #cartWrapper #productListWrapper {
    margin-top: 20px;
  }

  #productListWrapper .cart-item-head ul {
    background: #ecebeb;
    height: 36px;
    line-height: 36px;
  }

  #productListWrapper .selectAll {
    text-align: left;
    cursor: pointer;
  }

  #productListWrapper .selectAll span {
    margin-left: 6px;
  }

  #productListWrapper .cart-item-list .quantity {
    border: 1px solid #dcdcdc;
    height: 28px;
    width: 111px;
    line-height: 28px;
    font-size: 14px;
    margin: 5px auto;
    overflow: hidden;
    float: none;
  }

  #productListWrapper .cart-item-list .quantity a {
    display: block;
    float: left;
    height: 28px;
    width: 28px;
    background-color: #f4f4f4;
    color: #323232;
  }
  #cartWrapper .cart-item-list .quantity a:hover {
    text-decoration: none;
  }

  #productListWrapper .cart-item-list .ebookWrapper .quantity a {
    cursor: not-allowed;
  }

  #productListWrapper .cart-item-list .quantity input {
    width: 52px;
    height: 28px;
    float: left;
    padding: 0;
    text-align: center;
    border: 1px solid #dcdcdc;
    border-width: 0 1px;
    background-color: #fff;
  }

  .cart-item-list .promotion {
    height: 40px;
    line-height: 40px;
    margin: 8px;
    display: table-row;
    white-space: nowrap;
    position: relative;
    text-align: left !important;
  }

  .cart-item-list .promotion .promotionInfo {
    color: #ff2832;
    padding-left: 20px;
    position: absolute;
    width: 100%;
    border: 1px solid #e7e7e7;
    border-bottom: 0px;
    box-sizing: border-box;
  }

  .cart-item-list .promotion .promotionInfo span {
    color: #4a4a4a;
  }

  .cart-item-list .promotion .promotionInfo span:first-child {
    background: #f2f1f1;
    border: 1px solid #979797;
    border-radius: 4px;
    width: 52px;
    height: 24px;
    line-height: 24px;
    display: inline-block;
    text-align: center;
    margin-right: 12px;
  }

  .cart-item-list .cartOpration {
    text-align: left;
    padding-left: 25%;
  }

  .cart-item-list .cartOpration img {
    width: 22px;
    margin-right: 5px;
  }

  .cart-item-list .cartOpration .opertion:hover {
    color: #ff2832;
    text-decoration: underline;
  }

  .cart-item-list .cartOpration div {
    cursor: pointer;
  }

  #cartWrapper .normalClearing {
    height: 50px;
    margin-top: 24px;
    background-color: #ffffff;
    border: 1px solid #f0f0f0;
  }

  #cartWrapper .normalClearing #clearingWrapper {
    height: 100%;
  }

  #cartWrapper .fixedClearing {
    position: fixed;
    bottom: -1px;
    left: 0px;
    width: 100%;
    box-shadow: 0 -1px 8px rgba(0, 1, 1, 0.08);
    z-index: 999;
  }

  #cartWrapper .fixedClearing #clearingWrapper {
    width: 1140px;
    position: relative;
    margin: 0 auto;
    height: 52px;
  }

  #clearingWrapper .selectAllProduct {
    float: left;
    height: 100%;
    line-height: 52px;
    margin-left: 22px;
    cursor: pointer;
  }

  #cartWrapper .selectedEle {
    display: inline-block;
    width: 14px;
    height: 14px;
    border: 1px solid #bcbcbc;
    background-color: #fff;
    text-decoration: none;
    border-radius: 3px;
    font-size: 0;
    font-size: 0;
    line-height: 0;
    overflow: hidden;
    margin: 0 5px 1px 0;
    vertical-align: text-bottom;
  }

  #cartWrapper .selectedEle:hover {
    border-color: #ff2832;
  }

  #clearingWrapper .clearing .zeroTips span {
    width: 22px;
    height: 30px;
    display: inline-block;
    vertical-align: middle;
    background-image: url(./assets/img/attention.png);
    background-position-y: 5px;
    background-position-x: 0px;
    background-repeat: no-repeat;
    float: left;
  }

  #clearingWrapper .clearing .zeroTips {
    position: absolute;
    top: -40px;
    left: -22px;
    font-size: 12px;
    padding: 0 40px 0px 20px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #f0f0f0;
    background-color: #ffffff;
    box-shadow: 0 -1px 8px rgba(0, 1, 1, 0.08);
    white-space: nowrap;
  }

  #clearingWrapper .clearing {
    float: right;
    position: relative;
    height: 50px;
  }

  #clearingWrapper .clearing button {
    border-radius: 0px;
    height: 100%;
  }

  #clearingWrapper .clearing span {
    height: 28px;
    float: right;
    line-height: 28px;
    width: 100px;
    text-align: center;
    cursor: pointer;
    color: #fff !important;
    font-size: 16px;
    font-weight: bold;
  }

  #clearingWrapper .detail .save span:nth-child(2) {
    text-decoration: line-through;
  }

  #clearingWrapper .detail {
    float: right;
    height: 100%;
    margin-right: 20px;
  }

  #clearingWrapper .detail .sitRight {
    width: 60px;
    display: inline-block;
    text-align: right;
  }

  #clearingWrapper .detail .totalMoney span:nth-child(2) {
    font-size: 20px;
    font-weight: bold;
    color: #ff2832;
  }

  #clearingWrapper .selectedProduct {
    height: 52px;
    line-height: 52px;
    float: right;
    margin-right: 30px;
    text-align: right;
  }

  #clearingWrapper .selectedProduct .selectedProductCount {
    color: #e84141;
    margin: 0px 5px;
  }

  #productListWrapper .checkedLi {
    background: #fffaf7;
  }

  /* 空购物车*/
  #cartWrapper .emptyCart {
    text-align: center;
    padding: 40px 0px;
  }

  #cartWrapper .emptyCart .emptyInfo {
    margin-top: 20px;
    color: #323232;
  }

  #orderWrapper {
    margin-top: 36px;
    color: #4a4a4a;
    font-size: 14px;
    padding-bottom: 24px;
  }

  /********* START 发票信息 *********/

  #orderWrapper .invoice .chooseInvoice {
    height: 50px;
    padding-left: 28px;
    line-height: 70px;
  }

  #orderWrapper .invoice .chooseInvoice label {
    height: 16px;
    box-sizing: border-box;
  }

  #orderWrapper .invoice .orderContent {
    line-height: 80px;
  }

  #orderWrapper .chooseInvoice {
    height: 50px;
    padding-left: 28px;
  }

  /********* END 发票信息 *********/

  #orderWrapper a:hover {
    color: #ff2832;
    text-decoration: underline !important;
  }

  #orderWrapper .infoHead {
    width: 100%;
    height: 36px;
    line-height: 36px;
    padding-left: 16px;
    background-color: #f6f6f6;
  }

  #orderWrapper .discount .myCouponsWrapper {
    padding: 8px 28px 28px 28px;
  }

  #orderWrapper .discount .myCouponsWrapper .f30 {
    font-size: 30px;
  }

  #orderWrapper .discount .myCouponsWrapper .couponRange {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 5px;
  }

  #orderWrapper .discount .activeCoupons {
    border: 2px solid #c50000;
    background-color: #74d2d4;
    background-image: none !important;
  }

  #orderWrapper .discount .cancelCoupons {
    background-color: rgba(253, 253, 253, 0.8);
    color: #e43a3d;
    padding: 0 3px 0 5px;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
  }
  #orderWrapper .discount .disabledCoupons {
    width: 250px;
    display: inline-block;
    border-radius: 6px;
    margin-right: 26px;
    margin-top: 20px;
    padding: 0px 12px 2px 12px;
    color: #fff;
    cursor: not-allowed;
    background-image: url(./assets/img/disabledCoupons.png);
    background-repeat: no-repeat;
    position: relative;
  }

  #orderWrapper .discount .myCoupons {
    width: 250px;
    display: inline-block;
    border-radius: 6px;
    margin-right: 26px;
    margin-top: 20px;
    padding: 0px 12px 2px 12px;
    color: #fff;
    cursor: pointer;
    background-image: url(./assets/img/coupons.png);
    background-repeat: no-repeat;
  }

  #orderWrapper .discount .el-input {
    width: 160px;
  }

  #orderWrapper .payremark .el-input {
    width: 300px;
  }
  #orderWrapper .payremark p {
    display: inline-block;
    margin-left:10px;
    font-size:12px;
  }
  #orderWrapper .payremark p span{
    color:red;
  }
  #orderWrapper .discount .el-input input {
    height: 30px;
    line-height: 30px;
    margin-left: 10px;
  }

  #orderWrapper .payremark .el-input input {
    height: 30px;
    line-height: 30px;
    margin-left: 10px;
  }

  #orderWrapper .orderContent {
    height: 80px;
    padding-left: 28px;
  }

  #orderWrapper .discount .orderContent {
    line-height: 80px;
  }

  #orderWrapper .payremark .orderContent {
    line-height: 80px;
  }

  #orderWrapper .payment .orderContent {
    position: relative;
  }

  #orderWrapper .payment .orderContent .el-radio-group {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  #orderWrapper .cart-item-list > li > div:first-child {
    padding-left: 20px;
    width: 40%;
  }

  #orderWrapper .cart-tab-1 .cart-item-title div {
    text-align: left;
  }

  #orderWrapper .cart-item-list div {
    text-align: center;
  }

  #orderWrapper .orderFooter div {
    height: 50px;
    line-height: 50px;
    text-align: right;
  }

  #orderWrapper .orderFooter .virtual input {
    width: 70px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    border: 1px solid #ddd;
  }

  #orderWrapper .orderFooter .commitOrder {
    cursor: pointer;
    float: right;
  }

  #orderWrapper .orderFooter .amount span:first-child {
    margin-right: 20px;
  }

  #orderWrapper .orderFooter .virtual span:first-child {
    margin-right: 20px;
  }

  #orderWrapper .orderFooter .orderDetail {
    height: 100px;
    background-color: #fafafa;
    padding-right: 16px;
  }

  #orderWrapper .orderFooter .hideTrans {
    height: 70px;
  }

  #orderWrapper .orderFooter .orderDetail div {
    height: 30px;
    line-height: 38px;
  }

  #orderWrapper .orderFooter .orderDetail .transwayDrop {
    display: inline-block;
    margin-right: 30px;
  }

  #orderWrapper .orderFooter .orderDetail ul {
    min-width: 100px !important;
  }

  #orderWrapper .orderFooter .orderDetail .caret {
    float: right;
    margin-top: 7px;
    margin-left: 12px;
  }

  #orderWrapper .orderFooter .orderDetail a:hover {
    color: #4a4a4a;
    text-decoration: none !important;
  }

  #orderWrapper .orderFooter .payAmount span:last-child {
    font-size: 24px;
    font-weight: bold;
  }

  #orderWrapper .discount .couponsRight {
    margin-left: 16px;
    color: #42b983;
  }

  #orderWrapper .discount .couponsWrong {
    margin-left: 16px;
    color: #ff0000;
  }

  #orderWrapper .payment .orderContent label {
    margin-right: 20px;
  }

  #wl_header .wrap .nav a:hover {
    color: #ffffff;
    text-decoration: none;
  }
  .disabledCoupons{
    pointer-events: none;
  }
  .myCoupons{
    pointer-events: visible;
  }
</style>
