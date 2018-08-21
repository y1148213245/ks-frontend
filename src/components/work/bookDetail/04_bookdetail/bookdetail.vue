<!-- 图书详情组件 NEW Created by song 2018/5/18. -->
<template>
  <div class="work_bookdetail_04">
    <div class="work_bookdetail_04_main" v-if="resourceDetail">
      <!--内容区域-->
      <section v-for="(outerConfig, key, config_i) in resourceDetailConfig.complicatedItem" v-if="resourceDetail" v-bind="{class: 'work_bookdetail_04_item_' + key}" :key="config_i">
        <template v-for="(config, innerConfig_i) in outerConfig">
          <!-- 需要特殊处理的复杂项 -->
          <!-- img 图片 -->
          <div v-if="config.name == 'img'" class="work_bookdetail_04_imgcontainter" @click="toCustomFun(config)">
            <label class="work_bookdetail_04_img_label">{{config.display}}</label>
            <img class="work_bookdetail_04_img" v-bind="{class: 'work_bookdetail_04_' + config.field}" :src="resourceDetail[keys[config.field]] || require('@static/img/defaultCover.png')" :alt="getStaticText('noImg') ? getStaticText('noImg') : '暂无图片'" @load="dealResourceImg($event)" />
          </div>

          <!-- 自定义事件按钮 包括（title 标题） -->
          <div v-else-if="config.name == 'button'" v-bind="{class: 'work_bookdetail_04_btncontainer_' + config.field + '_' + config_i}" @click="toCustomFun(config)">
            <i v-bind="{class: config.className}"></i>
            <label class="work_bookdetail_04_btnlabel">{{config.display}}</label>
            <span v-bind="{class: 'work_bookdetail_04__btncontainer_' + config.field}" v-if="keys[config.field]">{{ resourceDetail[keys[config.field]] }}</span>
          </div>

          <!-- price 价格 *** 特别注意： 价格要区分电子书和纸质书价格 *** -->

          <div v-else-if="config.name == 'price'" class="work_bookdetail_04_pricecontainter">
            <label class="work_bookdetail_04_price_label">{{config.display}}</label>
            <span v-bind="{class: 'work_bookdetail_04_' + config.field}">{{formatPriceNew(resourceDetail[keys[config.field]]) }}</span>
          </div>

          <!-- edit by song 2018/6/30 现在规定所有的价格都取 prod_member_price 和 prod_sale_price 分别表示售价（会员价）和原价 -->
          <!-- curPrice 纸质书价格 -->
          <div v-else-if="config.name == 'bPrice'" class="work_bookdetail_04_bpricecontainter">
            <section v-if="resourceDetail.contentType == (CONFIG && CONFIG.bookContentType.bookType ? CONFIG.bookContentType.bookType : '91')">
              <label class="work_bookdetail_04_price_label">{{config.display}}</label>
              <span v-bind="{class: 'work_bookdetail_04_bPrice_' + config.field}">{{formatPriceNew(resourceDetail[keys[config.field]])}}</span>
            </section>
            <section v-if="resourceDetail.contentType == (CONFIG && CONFIG.bookContentType.ebookType ? CONFIG.bookContentType.ebookType : '94')">
              <label class="work_bookdetail_04_price_label">{{config.display}}</label>
              <span v-if="resourceDetail.relBook" v-bind="{class: 'work_bookdetail_04_ebPrice_' + config.field}">{{formatPriceNew(resourceDetail.relBook[keys[config.field]])}}</span>
              <span v-if="!resourceDetail.relBook" class="work_bookdetail_04_ebPrice_noprice">{{getStaticText('noResource') ? getStaticText('noResource') : '暂无'}}</span>
            </section>
          </div>
          <!-- relPrice 电子书价格 -->
          <div v-else-if="config.name == 'ebPrice'" class="work_bookdetail_04_ebpricecontainter">
            <section v-if="resourceDetail.contentType == (CONFIG && CONFIG.bookContentType && CONFIG.bookContentType.bookType ? CONFIG.bookContentType.bookType : '91')">
              <label class="work_bookdetail_04_price_label">{{config.display}}</label>
              <span v-if="resourceDetail.relBook" v-bind="{class: 'work_bookdetail_04_bPrice_' + config.field}">{{formatPriceNew(resourceDetail.relBook[keys[config.field]])}}</span>
              <span v-if="!resourceDetail.relBook" class="work_bookdetail_04_bPrice_noprice">{{getStaticText('noResource') ? getStaticText('noResource') : '暂无'}}</span>
            </section>
            <section v-if="resourceDetail.contentType == (CONFIG && CONFIG.bookContentType && CONFIG.bookContentType.ebookType ? CONFIG.bookContentType.ebookType : '94')">
              <label class="work_bookdetail_04_price_label">{{config.display}}</label>
              <span v-bind="{class: 'work_bookdetail_04_ebPrice_' + config.field}">{{formatPriceNew(resourceDetail[keys[config.field]]) }}</span>
            </section>
          </div>

          <!-- time 时间 -->
          <div v-else-if="config.name == 'time'" class="work_bookdetail_04_timecontainter">
            <label class="work_bookdetail_04_time_label">{{config.display}}</label>
            <span v-bind="{class: 'work_bookdetail_04_' + config.field}">{{formatDateNEW(resourceDetail[keys[config.field]])}}</span>
          </div>

          <!-- 纸质书/电子书加入购物车 、收藏、点赞、分享  资讯收藏、点赞、分享-->
          <div v-else-if="config.name == 'addcart' || config.name == 'addebcart' || config.name == 'share' || config.name == 'like' || config.name == 'collect'" class="work_bookdetail_04_opcontainter">

            <div class="work_bookdetail_04_quantity_con" v-if="config.name == 'addcart'">
              <!-- 电子书不能调整数量 -->
              <el-button class="work_bookdetail_04_quantity_reduce" @click="changeQuantity(-1)">-</el-button>
              <el-input class="work_bookdetail_04_quantity_amount" v-model="quantity" type="number" @change="changeQuantity()"></el-input>
              <el-button class="work_bookdetail_04_quantity_reduce" @click="changeQuantity(+1)">+</el-button>
            </div>

            <div v-bind="{class: 'work_bookdetail_04_' + config.name}" @click="transFunction(config)">
              <label class="work_bookdetail_04_collect_label" v-if="config.name == 'collect'" :class="{work_bookdetail_04_collect_active: resourceDetail[keys.isCollect] == '1'}">
                <i v-bind="{class: config.className}"></i>{{config.display}}</label>
              <label class="work_bookdetail_04_like_label" v-else-if="config.name == 'like'" :class="{work_bookdetail_04_like_active: resourceDetail[keys.isLike] == '1'}">
                <i v-bind="{class: config.className}"></i>{{config.display}}</label>
              <div class="bdsharebuttonbox" data-tag="share_1" v-else-if="config.name == 'share'">
                <!--<a href="#" class="work_bookdetail_04_share_more" data-cmd="more" v-bind="{class: config.className}">-->
                <!--<span class="work_bookdetail_04_share_label">{{config.display}}</span>-->
                <!--</a>-->
                <ui_share_01 :namespace="namespace" :modulename="modulename_share"></ui_share_01>
              </div>

              <!-- 如果当前这本书是电子书 && 没有关联纸质书 购买纸书按钮置灰 -->
              <section v-else-if="config.name == 'addcart'" :class="{work_bookdetail_04_forbid_addcart: resourceDetail.contentType == (CONFIG && CONFIG.bookContentType && CONFIG.bookContentType.ebookType ? CONFIG.bookContentType.ebookType : '94') && !resourceDetail.relBook}">
                <label class="work_bookdetail_04_op_label">
                  <i v-bind="{class: config.className}"></i>{{config.display}}</label>
                <span v-bind="{class: 'work_bookdetail_04_' + config.field}">{{ resourceDetail[keys[config.field]]}}</span>
              </section>

              <!-- 如果当前这本书是纸质书 && 没有关联电子书 加入电子书按钮置灰 -->
              <section v-else-if="config.name == 'addebcart'" :class="{work_bookdetail_04_forbid_addebcart: resourceDetail.contentType == (CONFIG && CONFIG.bookContentType && CONFIG.bookContentType.bookType ? CONFIG.bookContentType.bookType : '91') && !resourceDetail.relBook}">
                <label class="work_bookdetail_04_op_label">
                  <i v-bind="{class: config.className}"></i>{{config.display}}</label>
                <span v-bind="{class: 'work_bookdetail_04_' + config.field}">{{ resourceDetail[keys[config.field]]}}</span>
              </section>

            </div>
          </div>

          <!-- probation 试读 -->
          <div v-else-if="config.name == 'probation'" class="work_bookdetail_04_probationcontainter" :class="{work_bookdetail_04_noProbation: !resourceDetail[keys.bookFreeDownLoadPath]}" @click="toCustomFun(config)">

            <div class="work_bookdetail_04_probationcontainter_shidu">
              <i v-bind="{class: config.className}"></i>
              <label class="work_bookdetail_04_probation_label" v-if="isBuy==0">{{config.display}}</label>
              <label class="work_bookdetail_04_probation_label" v-if="isBuy==1">{{config.display1}}</label>
              <span v-bind="{class: 'work_bookdetail_04_' + config.field}">{{ resourceDetail[keys[config.field]]}}</span>
            </div>
          </div>

          <!-- 促销活动 -->
          <div v-else-if="config.name == 'activity'" class="work_bookdetail_04_activitycontainter" @click="toCustomFun(config)">
            <i v-bind="{class: config.className}"></i>
            <label class="work_bookdetail_04_probation_label" v-html="config.display"></label>
            <section v-for="(activity, index) in resourceDetail[keys[config.field]]" :key="index" v-bind="{class: 'work_bookdetail_04_' + config.field}">
              <span>{{activity.discountName}}</span>
            </section>
          </div>

          <!-- 其他不需要特殊处理的简单项 -->
          <div v-else class="work_bookdetail_04_other">
            <i v-bind="{class: config.className}"></i>
            <label class="work_bookdetail_04_label">{{config.display}}</label>
            <span v-if="config.name == 'free' && config.field" v-bind="{class: 'work_bookdetail_04_' + config.field}" v-text="config.afterDisplay"></span>
            <span v-else-if="config.field" v-bind="{class: 'work_bookdetail_04_' + config.field}" v-html="resourceDetail[keys[config.field]] ||(getStaticText('noResource') ? getStaticText('noResource') : '暂无')"></span>
            <label class="work_bookdetail_04_afterlabel" v-if="resourceDetail[keys[config.field]] && config.afterDisplay">{{config.afterDisplay}}</label>
          </div>
        </template>
      </section>
      <el-input type="hidden" id="pub_comment_num" v-model="pub_comment_num"></el-input>
    </div>

    <!-- 有声书音频附件 -->
    <div class="work_bookdetail_04_audio_container" v-if="audioAttachmentConfig && audioAttachmentConfig.isShowAudio">
      <h4 class="work_bookdetail_04_audio_title" v-text="currentAudio && currentAudio.attachName"></h4>
      <br>
      <audio :src="currentAudio && currentAudio.url || ''" controls controlslist="nodownload"></audio>
      <br/>
      <ul class="work_bookdetail_04_audio_list" v-if="audioAttachment && audioAttachment.audio">
        <li v-for="(item, index) in (audioAttachment.audio || [])" :key="index" @click="palyAudio(item, audioAttachment.pub_audio, index)">
          <i class="el-icon-service"></i>
          <span v-text="item.attachName"></span>
        </li>
      </ul>
    </div>
    <!-- END 有声书音频附件 -->

    <!-- 组合购买 -->
    <div class="work_bookdetail_04_combinate" v-if=" combinateProductCfg.show && combinateProductLsit && combinateProductLsit.length > 0">
      <span class="work_bookdetail_04_combinate_title">{{combinateProductCfg.title}}</span>
      <ul class="work_bookdetail_04_combinate_main" >
        <li v-for="(list,key) in combinateProductLsit" v-bind:key="key" :data-id="list.id">
          <!-- 图书本身 -->
          <div class="work_bookdetail_04_combinate_book">
            <div class="work_bookdetail_04_combinate_image"><img :src="resourceDetail[keys['picSmall']] || require('@static/img/defaultCover.png')" :alt="getStaticText('noImg') ? getStaticText('noImg') : '暂无图片'" @load="dealResourceImg($event)"></div>
            <h4 class="work_bookdetail_04_combinate_name" :title="resourceDetail[keys['resName']]">{{resourceDetail[keys['resName']]}}</h4>
            <span class="work_bookdetail_04_combinate_price">价格 : {{ '￥' + Number(resourceDetail["memberPrice"]).toFixed(2)}}</span>
          </div>
          <div class="work_bookdetail_04_combinate_and">+</div>
          <!-- 组合列表 -->
          <div >
            <button class="work_bookdetail_04_combinate_btn prev" @click="combinateList($event,key,list.list.length)" :class="{'disable': showCombinateArr[key] == 0,'normal':showCombinateArr[key]!=0 }" v-show="list.list.length > 3" :data-changeBtn="key" :data-maxLength="list.list.length">&lt;</button>
            <ul class="work_bookdetail_04_combinate_list" >
              <li class="work_bookdetail_04_combinate_book" v-for="(item,index) in list.list" v-bind:key="index" v-show=" index >= showCombinateArr[key] && index < showCombinateArr[key] + 3" @click="toCombinateItemDetail(combinateProductCfg['toDetail'],item['pubId'])">
                <div class="work_bookdetail_04_combinate_image"><img :src="item['smallPic'] || require('@static/img/defaultCover.png')" :alt="getStaticText('noImg') ? getStaticText('noImg') : '暂无图片'" @load="dealResourceImg($event)"></div>
                <h4 class="work_bookdetail_04_combinate_name" :title="item['resourceName']">{{item["resourceName"]}}</h4>
                <span class="work_bookdetail_04_combinate_price ">价格 : {{ '￥' + Number(item["memberPrice"]).toFixed(2)}}</span>
              </li>
            </ul>
            <button class="work_bookdetail_04_combinate_btn next" @click="combinateList($event,key,list.list.length)" :class="{'disable': showCombinateArr[key] == list.list.length-4}" v-show="list.list.length > 3" :data-changeBtn="key" :data-maxLength="list.list.length">&gt;</button>
          </div>
          <div class="work_bookdetail_04_combinate_equal">=</div>
          <!-- 购买按钮 -->
          <div class="work_bookdetail_04_combinate_pay">
            <span class="work_bookdetail_04_combinate_price">套餐价 : <span>{{ '￥' + Number(list["combinationPrice"]).toFixed(2)}}</span></span>
            <span class="work_bookdetail_04_combinate_savemoney">省{{ '￥' + Number(list["savemoney"]).toFixed(2)}}</span>
            <span class="work_bookdetail_04_combinate_buy" @click="addcombinateProductToCart(combinateProductCfg['addCart'],list.id)">{{combinateProductCfg.lastBtn || '立即购买'}}</span>
          </div>
        </li>
      </ul>
    </div>
    <!-- END 组合购买-->

    <div class="work_bookdetail_04_tabBody" v-if="tabConfigList && tabConfigList.tabConfigshow">
      <!-- TAB切换 信息 -->
      <div class="work_bookdetail_04_tab" v-if="tabConfigList && tabConfigList.tabShow">
        <ul class="work_bookdetail_04_tab_div_ul" v-if="tabConfigList.tabList.length>0">
          <div v-for="(item, index) in tabConfigList.tabList">
            <li class="work_bookdetail_04_tab_div_ul_li" :class="{work_bookdetail_04_tab_div_ul_active:tabActiveIndex==index}" @click="selectTabItem(index)">{{item}}</li>
          </div>
        </ul>
      </div>
      <!-- END TAB切换 信息 -->

      <!-- 书籍相关信息 -->
      <div class="work_bookdetail_04_publicize_container" v-if="publicizeInfoConfig && publicizeInfoConfig.isShowPublicize  && tabActiveIndex == 0">
        <div class="work_bookdetail_04_publicize_topic_con">
          <template v-for="(item, index) in publicizeInfoConfig.showPublicize">
            <span :key="index"> {{ item }}</span>

            <div class="work_bookdetail_04_publicize_topic_con_content">
              <template v-for="(item1, index1) in publicizeInfo" v-if="item == item1.topic">
                <p :key="index1" class="work_bookdetail_04_publicize_topic_con_content_con" v-html="item1.content"></p>
              </template>
            </div>

          </template>
        </div>
      </div>
      <!-- END 书籍相关信息 -->
      <!-- 评论信息 -->
      <div class="work_bookdetail_04_review" v-if="tabConfigList && tabConfigList.reviewShow && tabActiveIndex == 1">
        <work_bookreview_01 :namespace="namespace" v-show="tabConfigList.reviewShow"></work_bookreview_01>
        <div class="work_bookdetail_04_review_button">
          <span class="work_bookdetail_04_review_button_span" @click="toCustomFun(tabConfigList.toAllReviewMethod)" v-text="tabConfigList.toAllReviewName"></span>
        </div>
      </div>
      <!-- END 评论信息 -->
    </div>
    <!--购买按钮 当然可以不用-->
    <div class="work_bookdetail_04_bugButton" v-if="CONFIG && bugButton"  :class="{'buyBtnOpacity':buyBtnOpacity}">
      <div class="work_bookdetail_04_bugButton_div_buy" v-if="isBuy==0" @click="toCustomFunMethod(bugButton.method)">
        <label class="work_bookdetail_04_btnlabel">{{bugButton.display}}</label>
      </div>
      <div class="work_bookdetail_04_bugButton_div_shelf" v-if="isBuy==1 && isAddShelf==0" @click="toCustomFunMethod(bugButton.method1)">
        <label class="work_bookdetail_04_btnlabel">{{bugButton.display1}}</label>
      </div>
      <div class="work_bookdetail_04_bugButton_div_read" v-if="isBuy==1 && isAddShelf==1" @click="toCustomFunMethod(bugButton.method2)">
        <label class="work_bookdetail_04_btnlabel">{{bugButton.display2}}</label>
      </div>
    </div>
    <!-- 购买弹出层 -->
    <el-dialog v-if="CONFIG && CONFIG.showDialog" :title="CONFIG.display.buyCourse" :visible.sync="isdialogShow" class="work_bookdetail_04_dialog">
      <div class="work_bookdetail_04_dialog_courseInfor">
        <div class="work_bookdetail_04_dialog_courseInfor_img">
          <img :src="resourceDetail.pub_picMiddle|| require('@static/img/defaultCover.png')" :alt="getStaticText('noImg') ? getStaticText('noImg') : '暂无图片'" @load="dealResourceImg($event)">
        </div>
        <div class="work_bookdetail_04_dialog_courseInfor_content">
          <div class="work_bookdetail_04_dialog_courseInfor_content_title">{{resourceDetail[keys.resName]}}</div>
          <div class="work_bookdetail_04_dialog_courseInfor_content_staticTime">{{CONFIG.display.courseUseTime}}</div>
          <div class="work_bookdetail_04_dialog_courseInfor_content_dynamicTime">2018年4月17日——2019年4月17日(暂无字段，写死)</div>
        </div>
        <div class="work_bookdetail_04_dialog_courseInfor_price">{{resourceDetail[keys.memberPrice] | formatPriceNew}}</div>
        <div class="work_bookdetail_04_dialog_courseInfor_needPay"><label>{{CONFIG.display.needPay}}</label>{{resourceDetail[keys.memberPrice] | formatPriceNew}}</div>
      </div>
      <div class="work_bookdetail_04_dialog_payWays">
        <div class="work_bookdetail_04_dialog_payWays_static">{{CONFIG.display.payWay}}</div>
        <el-radio v-model="payWays" :label="index" v-for="(item,index) in payWaysList" :key="index" @change="changePayWays(item.payCode)">{{item.payName}}</el-radio>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="commitOrder">{{CONFIG.display.sure}}</el-button>
        <el-button @click="isdialogShow = false">{{CONFIG.display.cancel}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import * as interfaces from "@work/login/common/interfaces.js";
import * as type from "@work/bookDetail/common/interfaces.js";
import Vue from 'vue';
import { Get, Post, DrawImage, getFieldAdapter, toOtherPage } from "@common";
import URL from 'url';
import PROJECT_CONFIG from "projectConfig";
import moment from "moment";
import axios from "axios";

export default {
  name: 'work_bookdetail_04',
  props: ['namespace', 'modulename'],
  reused: true,
  data () {
    return {
      isdialogShow: false,  //控制弹出层是否显示
      payWays: 0,  //支付方式
      currentPayWay: 'Alipay',  //当前的支付方式  Weixin/Alipay
      payWaysList: [],  //支付方式列表
      CONFIG: "",
      resourceDetail: {}, // 详情信息
      resourceDetailConfig: {}, // 详情信息配置
      keys: {}, // 详情接口字段容器
      publicizeInfo: [], // 相关信息
      publicizeInfoConfig: {}, // 相关信息配置
      resId: "",
      showPublicizeTopic: "",
      quantity: 1, // 商品数量
      loginName: "",
      contentType: $_$.bookContentType,
      pubId: "", //要加入购物车的书的pubId
      currentAudio: '',
      addCartConfig: {}, // 加入购物车配置
      collectOrLikeConfig: {}, // 收藏点赞配置
      audioAttachment: null, // 音频附件
      audioAttachmentConfig: {}, // 音频附件配置
      tabConfigList: {}, // tab配置
      tabActiveIndex: 0,//tab默认点击第一个
      modulename_share: 0,//tab默认点击第一个
      isAddShelf: 0, //默认没有加入书架
      isBuy: 0, //默认没有购买  0代表是否的意思  1代表是的意思
      isCart: 0, //默认没有
      isDiscuss: 0, //默认没有
      isDownload: 0, //默认没有
      isEb: 0, //默认没有
      bugButton: {},
      bookContentType: { // 书的类型  纸书：91 电子书 94
        bookType: '91',
        ebookType: '94',
      },
      pub_comment_num: '',   //评论数
      collectLikeOn:0,   //点赞或收藏是否在提交中   // 0 代表没有 可以执行  1代表不能，不能执行
      combinateProductLsit:[], // 初始化组合购买数组
      combinateProductCfg:{},  // 组合购买是否显示

      resType: '', // 当前详情所属资源类型       temp: {}, //订单里的id
      tempList: {}, //订单单元
      Orderparams: {},  //提交订单的参数
      payMoney: "",  //需要支付的金额
      commitInfo: {},   //订单信息
      buyBtnOpacity: true  //初次加载页面时按钮透明
    }
  },
  mounted () {
    var urlQuery = URL.parse(document.URL, true).query;
    this.pubId = urlQuery.pubId; // 从地址栏接收栏目id
    this.modulename_share = this.modulename + 'share';
    this.resourceDetailConfig = this.CONFIG.getResourceDetail;
    this.publicizeInfoConfig = this.CONFIG.getPublicizeInfo;
    if (typeof (this.CONFIG.tabConfigList) != "undefined") {
      this.tabConfigList = this.CONFIG.tabConfigList;  //tab配置
      this.tabActiveIndex = this.CONFIG.tabConfigList.tabActiveIndex;  //tab配置
    }
    if (typeof (this.CONFIG.tabConfigList.tabConfigshow) == "undefined") { //如果没配置就展示吧
      this.CONFIG.tabConfigList.tabConfigshow = true;
    }
    if (typeof (this.CONFIG.bugButton) != "undefined") {
      this.bugButton = this.CONFIG.bugButton;  //购买按钮配置
    }
    if (typeof (this.CONFIG.bookContentType) != "undefined") {
      this.bookContentType = this.CONFIG.bookContentType;  //书的类型  纸书：91 电子书 94
    }
    if (typeof (this.CONFIG.combinateProductCfg) != "undefined") { // 检查变量是否设置显示组合购买
      this.combinateProductCfg = this.CONFIG.combinateProductCfg;  // 根据配置初始化显示变量
    }

    this.addCartConfig = this.CONFIG.addCart;
    this.collectOrLikeConfig = this.CONFIG.collectOrLike;
    this.audioAttachmentConfig = this.CONFIG.getAudioAttachment;
    this.resType = urlQuery.resType; // 地址栏传当前资源类型
    this.keys = JSON.parse(JSON.stringify(getFieldAdapter(this.resType && this.resourceDetailConfig[this.resType] ? this.resourceDetailConfig[this.resType].sysAdapter : this.resourceDetailConfig.sysAdapter, this.resType && this.resourceDetailConfig[this.resType] ? this.resourceDetailConfig[this.resType].typeAdapter : this.resourceDetailConfig.typeAdapter)));
    this.showPublicizeTopic = this.publicizeInfoConfig.showPublicize.length ? this.publicizeInfoConfig.showPublicize[0] : 0;
    // this.getResourceDetail();  //获取图书详情信息
    if (this.audioAttachmentConfig && this.audioAttachmentConfig.isShowAudio) { // 获取音频列表
      this.getAudioDetail();
    }
  },

  created: function () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].work_bookdetail.work_bookdetail_04[this.modulename];
    this.getMemberInfo().then((member) => {
      this.loginName = member.loginName;
      this.$store.dispatch("bookDetail/" + type.CART_NUMS, this.loginName);
    });
  },

  computed: {
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER,
    }),
    ...mapGetters({
      getCartAmount: "bookDetail/getCartAmount", // 获取购物车原有商品总数量
      getTotalAmount: "login/getTotalAmount" // 获取购物车商品总数量
    })
  },

  methods: {
    ...mapActions("login", {
      getMemberInfo: interfaces.ACTION_KEEP_SESSION
    }),
    dealResourceImg (eve) {  // 处理图片尺寸
      DrawImage(eve.path[0], this.CONFIG.infoImgWidth, this.CONFIG.infoImgHeight);
    },
    toCustomFun (config) { // 执行自定义事件
      let _this = this;
      if(config.method == 'toBuyLayer'){

        if(this.loginName == undefined || this.loginName == '') { // 未登录
          this.$message({
            message: "请先登录",
            type: 'error',
            duration: 2000,
            onClose: function(){
              window.location = _this.CONFIG.loginUrl;
            }
          });
          return false;
        }
        this.isdialogShow = true;
        this.getPayMethodsBySiteId();
        return false;
      }
      if(config.field == 'saleUrl'){
        window.open(this.resourceDetail[this.keys[config.field]]);
        return false
      }
      if (config.method == 'toProbation') { // 执行免费试读操作
        //加入书架
        if(this.CONFIG.addBookshelfBeforeProbation) {
          Post(CONFIG.BASE_URL + 'user/addBookShelf.do' + '?loginName=' + this.loginName + '&pubId=' + this.pubId + '&type=2' + '&siteId=' + CONFIG.SITE_CONFIG.siteId).then((rep) => {
            var datas = rep.data;
            if (datas.result == "1") {
              this.getResourceDetail();  //获取图书详情信息
            }
          });
        }
        if(this.isBuy == "1"){  //判断是否购买 0=>未购买  1=>购买
          if(!this.resourceDetail[this.keys.bookdownloadpath]){  //已经购买 没有全文阅读地址
            this.$message({
              message: "本书没有阅读地址",
              type: 'error'
            });
            return false;
          }else {                                               //已经购买 有全文阅读地址
            this.CONFIG.toProbation.url = CONFIG.READ_URL;
            this.CONFIG.toProbation.fixedKeys.readType = 1;
          }
        }else {
          if (!this.resourceDetail[this.keys.bookFreeDownLoadPath]) { // 未购买  没有试读地址
            this.$message({
              message: "本书没有试读地址",
              type: 'error'
            });
            return false;
          }else {                                               //未购买 有试读阅读地址
            this.CONFIG.toProbation.url = CONFIG.READ_URL;
            this.CONFIG.toProbation.fixedKeys.readType = 0;
          }
        }
      }
      window.open(toOtherPage(this.resourceDetail, this.CONFIG[config.method], this.keys));
    },
    toCustomFunMethod (method) { // 执行自定义事件
      if(this.buyBtnOpacity){return}// 按钮透明时方法不可用 ， 数据加载完毕按钮不透明时方法可用
      if (method == 'toProbation') { // 执行免费试读操作
        if (!this.resourceDetail[this.keys.bookFreeDownLoadPath]) { // 没有试读地址
          return false;
        }
      }

      if (method == 'addBookShelf') { //加入书架
        Post(CONFIG.BASE_URL + 'user/addBookShelf.do' + '?loginName=' + this.loginName + '&pubId=' + this.pubId + '&type=1' + '&siteId=' + CONFIG.SITE_CONFIG.siteId).then((rep) => {
          var datas = rep.data;
          if (datas.result == "1") {
            let msg = datas.data.msg;
            this.$message({
              message: msg,
              type: 'success'
            });
            this.getResourceDetail();  //获取图书详情信息
          }
        });
        return false;
      }

      window.open(toOtherPage(this.resourceDetail, this.CONFIG[method], this.keys));
    },
    getPayMethodsBySiteId(){
      let params = Object.assign({},this.CONFIG.getPayMethodsBySiteId.params);
      Get(CONFIG.BASE_URL + this.CONFIG.getPayMethodsBySiteId.url + '?siteId='+CONFIG.SITE_CONFIG.siteId).then((rep) => {
        let datas = rep.data;
        if(datas.result == '1' && datas.data){
          this.payWaysList = datas.data;
        }
      });
    },
    changePayWays(value){  //当前的支付方式
      this.currentPayWay = value;
    },
    commitOrder() {
      this.isdialogShow = false;
      if(this.loginName == undefined || this.loginName == '') { // 未登录
        return false;
      }
      //判断支付方式 生成不同的参数
      //如果是余额支付那么判断余额够不够
      this.setOrderParams();
      let loadingTag = this.$loading({
        fullscreen: true ,
        text: this.CONFIG.display.drumpPage ? this.CONFIG.display.drumpPage : "正在跳转支付页面..."
      });
      var _this = this;
      Post(CONFIG.BASE_URL + _this.CONFIG.commitOrderUrl, _this.Orderparams).then(function(response) {
        if(response.status == 200 && response.data) {
          let datas = response.data;
          if(datas.data && datas.result == 1 && datas.data.submitStatus) {
            _this.commitInfo = datas.data;
            _this.toPay(loadingTag);
          } else {
            loadingTag.close();
            _this.$message({
              message: datas.error.errorMsg,
              type: error
            });
          }
        }
      })
    },
    toPay(loadingTag) {

      var argus = {
        orderId: this.commitInfo.orderId,
        orderCode: this.commitInfo.orderCode,
        status: this.commitInfo.status, // 订单状态
        payMethodCode: this.commitInfo.payMethodCode,
        paymentType: this.commitInfo.paymentType // true需要跳转 false不需要
      };
      if (this.commitInfo.submitStatus) {
        // 提交成功
        if (this.commitInfo.paymentType) {
          // 需要跳转支付宝支付/微信扫描二维码页面
          if (this.currentPayWay === "Alipay") {
            window.open(
              CONFIG.BASE_URL +
              "epay/getPayForm.do?orderId=" +
              argus.orderId +
              "&loginName=" +
              this.member.loginName +
              "&payMethodCode=" +
              argus.payMethodCode + '&siteId=' + CONFIG.SITE_CONFIG.siteId,
              "_self"
            );
          } else if (this.currentPayWay === "Weixin") {
            // 微信支付
            axios.get(
              CONFIG.BASE_URL +
              "epay/getPayForm.do?orderId=" +
              argus.orderId +
              "&loginName=" +
              this.member.loginName +
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
            this.commitInfo.orderCode +
            "/" +
            this.commitInfo.status +
            "/order";
        }
      } else {
        // 提交失败
        loadingTag.close();
        var errorMsg = this.commitInfo.errMsg
          ? this.commitInfo.errMsg
          : "订单提交有误";
        this.$alert(errorMsg, "系统提示", {
          confirmButtonText: "确定"
        });
      }
    },
    setOrderParams() {
      //设置提交订单的参数
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
        combinationId: "", //产品类型id  电子书 94
        nums: 1,
        totalPrice: this.payMoney,
        pubId: this.pubId,
        couponsId: "", //优惠卷id 现在为0
        rankDiscountRatio: "", //这是优惠的汇率
        resourceId: this.resourceDetail.pub_resource_id,
        resourceName: this.resourceDetail.pub_resource_name,
        resourceType: this.resourceDetail.prod_resource_type,
        periodicalType: "", //传值空
        periodicalYear: "", //传值空
        periodicalMonth: "", //传值空
        combinationId: "0",
      };
      this.temp = {
        activityId: 0, //活动id  填0
        productType: "", //产品类型id  电子书 94
        periodicalType: "",
        periodicalName: "",
        periodicalYear: "",
        periodicalMonth: "",
        discountPrice: 0,
        id: '',
        code: "",
        totalPrice: this.payMoney,
        list: [this.tempList],
      };
      this.Orderparams = {
          loginName: this.loginName,
          balanceAmount: 0, // 如果是余额支付，那就写支付金额 不是就写0
          bankName: this.curSelectedInvoice.bankName,
          companyAddress: this.curSelectedInvoice.companyAddress,
          companyPhone: this.curSelectedInvoice.companyPhone,
          couponsOrder: '', // 优惠券的密码 如果有两张 以数组形式传递
          createTime: null, //不用写
          deliveryAddress: '', // 收货人整个地址 北京市海淀区 拼起来的地址
          deliveryContact: '', // 联系方式
          deliveryPerson: '', // 收件人
          deliveryPrice: 0, // 运费
          deliveryRemark: "", // 运费备注
          deliveryType: '', // 运输方式  汉字 顺丰
          discountAmount: '', //  商品各种活动优惠 不包含免运费的活动
          id: 0, //不用写
          isReceipt: "0", //要不要发票， 0不需要 1要
          bankAccount: this.curSelectedInvoice.bankAccount,
          orderCode: "", //不用写
          orderType: "book",   //期刊是这个 其他的都是book
          oremark: "wxShop",
          payAmount: this.payMoney, // 应付金额 = 商品总价 + 运费
          payCode: "", //不用写
          payMethod: this.currentPayWay, // 支付方式： Weixin 微信支付 Alipay 支付宝支付  Balance 余额支付
          payRemark: '', // 订单备注
          payStatus: "", //空
          payTime: null,
          payType: 1, // 0线下支付  1在线支付
          payUser: "", //不用写
          point: 0,
          realAmount: this.payMoney, // 实付金额 = 应付金额-运费-余额支付
          receiptId: this.curSelectedInvoice.receiptId,
          receiptType: this.curSelectedInvoice.receiptType, //如果要发票的话  1 个人 2 单位
          receiptTitle: this.curSelectedInvoice.receiptType == 1 ? "个人" : this.curSelectedInvoice.receiptTitle,
          remark: "",
          siteId: CONFIG.SITE_CONFIG.siteId,
          splitOrderList: [this.temp], //aaa
          taxpayerCode: this.curSelectedInvoice.taxpayerCode,
          totalPrice: this.payMoney, // 商品总价（不含优惠运费）
      };
    },
    selectPublicize (item) { // 切换相关信息显示tab
      this.showPublicizeTopic = item;
    },
    selectTabItem (index) {    // 切换相关信息显示tab  zong
      this.tabActiveIndex = index;
    },
    getResourceDetail () {
      let paramsObj = Object.assign({}, this.resourceDetailConfig.params);
      paramsObj.pubId = this.pubId;
      Get(CONFIG.BASE_URL + this.resourceDetailConfig.url + '?pubId=' + paramsObj.pubId + '&loginName=' + this.loginName).then((rep) => {
        let datas = rep.data;
        if (rep.status == 200 && datas.data) {
          this.resourceDetail = datas.data;
          this.buyBtnOpacity = false;
          this.resId = this.resourceDetail[this.keys.resId];
          this.isBuy = this.resourceDetail.isBuy?this.resourceDetail.isBuy:this.isBuy;
          this.isAddShelf = this.resourceDetail.isAddShelf;
          this.isDiscuss = this.resourceDetail.isDiscuss;
          this.isCart = this.resourceDetail.isCart;
          this.isDownload = this.resourceDetail.isDownload;
          this.isEb = this.resourceDetail.isEb;
          this.pub_comment_num = this.resourceDetail.pub_comment_num;
          this.payMoney = Number(this.resourceDetail[this.keys.courseSalePrice]);
          if (this.publicizeInfoConfig && this.publicizeInfoConfig.isShowPublicize) {
            this.getPublicizeInfo(); // 获取图书相关信息
          }
          //获取组合购买数据
          this.combinateProductLsit = this.resourceDetail.combinateProductLsit;
          // 计算省下多少钱
          let thisBookPrice = Number(this.resourceDetail["memberPrice"]);
          if(this.combinateProductLsit && this.combinateProductLsit.length){
            this.combinateProductLsit.forEach(function(val,key,obj){
              let allPrice = 0;
              val.list.forEach(function(item,index,arr){
                allPrice += Number(item['memberPrice']);
              })
              val['savemoney'] = allPrice + thisBookPrice;
            });
          }
          this.showCombinateArr = new Array(this.combinateProductLsit.length);
          for(let i = 0; i < this.showCombinateArr.length ; i++){
            this.$set(this.showCombinateArr,i,0);
          }
        }
      });
    },
    getPublicizeInfo () {
      let paramsObj = Object.assign({}, this.publicizeInfoConfig.params);
      Get(CONFIG.BASE_URL + this.publicizeInfoConfig.url + '?doclibCode=' + paramsObj.doclibCode + '&docID=' + this.resId).then((rep) => {
        if (rep.status == 200 && rep.data && rep.data.length > 0) {
          this.publicizeInfo = rep.data;
        }
      });
    },
    getAudioDetail () { // 获取音频附件
      let paramsObj = Object.assign({}, this.audioAttachmentConfig.params);
      paramsObj.pubId = this.pubId;
      Get(CONFIG.BASE_URL + this.audioAttachmentConfig.url + '?pubId=' + paramsObj.pubId + '&loginName=' + this.loginName + '&siteId=' + paramsObj.siteId + '&attachTypes=' + paramsObj.attachTypes).then((rep) => {
        let datas = rep.data;
        if (datas.result == '1' && datas.data) {
          this.audioAttachment = datas.data;
        }
      });
    },
    palyAudio (item, urls, index) {
      let arr = JSON.parse(urls)
      item.url = arr[index];
      this.currentAudio = item
    },
    transFunction (config) {
      if (this[config.method]) {
        this[config.method](config);
      }
    },
    changeQuantity (op) {
      if (op > 0) {
        ++this.quantity;
        if (this.quantity > 200) { // 防止加过200
          this.quantity = 200;
          this.$alert(this.getStaticText('quantityOfGoodsMustNotExceedTwoHundred') ? this.getStaticText('quantityOfGoodsMustNotExceedTwoHundred') : "商品数量不能大于200", this.getStaticText('systemPrompt') ? this.getStaticText('systemPrompt') : "系统提示", {
            confirmButtonText: this.getStaticText('OK') ? this.getStaticText('OK') : "确定"
          });
        }
      } else if (op < 0) {
        --this.quantity;
        if (this.quantity < 1) { // 防止减到0
          this.quantity = 1
        }
      }
    },
    addCart (config) { // 加入购物车
      if (this.loginName == undefined || this.loginName == '') {  // 未登录
        window.open('../pages/login.html');
        return false
      }
      this.pubId = this.resourceDetail[this.keys.id];
      if (config.name == 'addcart') { // 执行纸质书加入购物车操作
        if (this.resourceDetail[this.keys.contentType] == this.bookContentType.ebookType) { // 判断这本书是不是电子书
          let relativeEBook = this.resourceDetail.relBook;
          if (relativeEBook) { // 这本书有对应纸质书
            this.pubId = relativeEBook[this.keys.id];
          } else { // 没有对于纸质书
            return false
            this.$message({
              message: this.getStaticText('noPaperBookInfo') ? this.getStaticText('noPaperBookInfo') : "该书没有对应纸质书，无法加入购物车",
              type: 'error'
            });
          }
        }
      } else if (config.name == 'addebcart') { // 执行电子书加入购物车操作
        if (this.resourceDetail[this.keys.contentType] == this.bookContentType.bookType) { // 判断这本书是不是纸质书
          let relativeBook = this.resourceDetail.relBook;
          if (relativeBook) { // 这本书有对应纸质书
            this.pubId = relativeBook[this.keys.id];
          } else { // 没有对于纸质书
            return false
            this.$message({
              message: this.getStaticText('noEBookInfo') ? this.getStaticText('noEBookInfo') : "该书没有对应电子书，无法加入购物车",
              type: 'error'
            });
          }
        }
      }
      let paramsObj = Object.assign({}, this.addCartConfig.params);
      Get(CONFIG.BASE_URL + this.addCartConfig.url + '?number=' + (config.name == 'addebcart' ? 1 : this.quantity) + '&loginName=' + this.loginName + '&activityId=0&pubId=' + this.pubId + '&colId=' + this.resourceDetail[this.keys.colId] + '&siteId=' + paramsObj.siteId).then((rep) => {
        var datas = rep.data;
        if (datas.result == "1") {
          let msg = datas.data.msg;
          this.$message({
            message: msg,
            type: 'success'
          });
          //原有的购物车数量
          let num = this.getCartAmount;
          this.$store.dispatch("login/getTotalAmount", parseInt(this.quantity) + num);//头部气泡上购物车数量
          this.$store.dispatch("bookDetail/" + type.CART_NUMS, this.loginName); //每次添加完购物车都要更新购物车数量
        } else {
          let errormsg = datas.error && datas.error.msg ? datas.data.error.msg : datas.data.msg;
          this.$message({
            message: errormsg,
            type: 'error'
          });
        }
      });
    },
    addcombinateProductToCart(config,combinateId){ //组合商品加入购物车
      if (this.loginName == undefined || this.loginName == '') {  // 未登录
        window.open('../pages/login.html');
        return false
      }
      if (typeof (config) == "undefined") {return;}
      Get(CONFIG.BASE_URL + config.url + '?loginName=' + this.loginName + '&combinateId=' + combinateId + '&siteId=' + config.params.siteId).then((rep) => {
        var datas = rep.data;
        if (datas.result == "1") {
          let msg = datas.data.msg;
          this.$message({
            message: msg,
            type: 'success'
          });
          //原有的购物车数量
          let num = this.getCartAmount;
          this.$store.dispatch("login/getTotalAmount", parseInt(this.quantity) + num);//头部气泡上购物车数量
          this.$store.dispatch("bookDetail/" + type.CART_NUMS, this.loginName); //每次添加完购物车都要更新购物车数量
        } else {
          let errormsg = datas.error && datas.error.msg ? datas.data.error.msg : datas.data.msg;
          this.$message({
            message: errormsg,
            type: 'error'
          });
        }
      });

    },
    toCombinateItemDetail(config,pubid){ // 去每一个组合购买图书的详情
       if (typeof (config) == "undefined") {return;}
       window.open(config.url + '?pubId=' + pubid);
    },
    collectOrLike (config) { // 点赞 或者 收藏
      if (this.loginName == undefined || this.loginName == '') {  // 未登录
        window.open('../pages/login.html');
        return false
      }
      if (this.collectLikeOn) {  // 未登录
        return false;
      }
      this.collectLikeOn = 1;
      let paramsObj = Object.assign({}, this.collectOrLikeConfig.params);
      Post(CONFIG.BASE_URL + this.collectOrLikeConfig.url + '?loginName=' + this.loginName + '&pubId=' + this.pubId + '&operateType=' + (config.name == 'collect' ? 0 : 1) + '&productId=' + this.resourceDetail[this.keys.productId] + '&siteId=' + paramsObj.siteId).then((rep) => {
        var datas = rep.data;
        if (datas.result == "1") {
          let msg = datas.data.msg;
          this.$message({
            message: msg,
            type: 'success'
          });
          this.getResourceDetail();  //获取图书详情信息
        }
        this.collectLikeOn = 0;
      });
    },
    /* 通过检索资源名获取pubId */
    getPubidByLocationQueryFromSyk () {
      if (!this.pubId) {
        let config = this.CONFIG.getPubidByLocationQueryFromSyk ? this.CONFIG.getPubidByLocationQueryFromSyk : {
          url:'spc/cms/publish/list.do',
          params:{
            conditions: [],
            groupBy: "pub_resource_id",
            orderBy: "pub_a_order asc pub_lastmodified desc",
            pageNo: "1",
            pageSize: "10",
            searchText: ""
          },queryParams:{
            title:'BOOK_SYS_TOPIC'
          }}
        let paramsObj = JSON.parse(JSON.stringify(config.params));

        let queryParams = {};
        for(let item in config.queryParams){
          let val = URL.parse(document.URL, true).query[item];/* 从地址栏接收资源名 */
          if (val) {/* 判断是否有重复条件 */
            let isHas = false;
            paramsObj.conditions.map(entry=>{
              if(entry.hasOwnProperty(config.queryParams[item])){
                isHas = true;
                entry[config.queryParams[item]] = val /* 条件值修改 */
              }
            })

            isHas ? '' : paramsObj.conditions.push({
            [config.queryParams[item]]:val/* 添加新条件 */
          })
          }
        }

        paramsObj.conditions = JSON.stringify(paramsObj.conditions)
        Post(CONFIG.BASE_URL + config.url,paramsObj).then(resp=>{
          let data = resp.data.result;
          this.pubId = data[0][this.keys.id]
          this.getResourceDetail();
        })
      } else {
        this.getResourceDetail();
      }

    },
    getStaticText (text) {
      if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]) {
        return this.CONFIG.staticText[text]
      } else {
        return false
      }
    },
    formatDateNEW (value) {
      if (value) {
        return moment(Number(value)).format("YYYY-MM-DD"); // 只接收Number类型
      } else {
        return this.getStaticText('noDate') ? this.getStaticText('noDate') : '暂无日期';
      }
    },
    formatPriceNew (value) {
    if (value) {
      return (this.getStaticText('yuan') ? this.getStaticText('yuan') : '￥') + Number(value).toFixed(2);
    } else {
      return (this.getStaticText('yuan') ? this.getStaticText('yuan') : '￥')+'0.00';
    }
    },
    combinateList(event,key,max){
      var $target = $(event.target);
      if($target.hasClass("disable")){return;}
      if($target.hasClass("prev")){
        this.$set(this.showCombinateArr,key,Number(this.showCombinateArr[key]) - 1)
      }else if($target.hasClass("next")){
        this.$set(this.showCombinateArr,key,Number(this.showCombinateArr[key]) + 1)
      }
    }
  },
  watch: {
    member: function (newValue, oldValue) {
      this.loginName = newValue.loginName;
      this.getPubidByLocationQueryFromSyk();
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

.work_bookdetail_04_publicize_topic {
  cursor: pointer;
}

.work_bookdetail_04_publicize_topic_active {
  color: red;
}

.work_bookdetail_04_quantity_con {
  width: 100%;
  height: 40px;
}

.work_bookdetail_04_quantity_reduce {
  width: 36px;
  text-align: center;
  height: 40px;
  float: left;
  border-radius: 0px;
}

.work_bookdetail_04_quantity_amount {
  width: 60px;
  height: 40px;
  float: left;
}

.work_bookdetail_04_quantity_amount input {
  width: 100%;
  text-align: center;
  height: 100%;
  border-radius: 0px;
}

.work_bookdetail_04_quantity_plus {
  width: 36px;
  text-align: center;
  border-radius: 0px;
  height: 40px;
  float: left;
}

.work_bookdetail_04_collect_active {
  color: red;
}

.work_bookdetail_04_like_active {
  color: red;
}

.work_bookdetail_04_imgcontainter {
  background-color: #ddd;
  width: 220px;
  height: 320px;
  position: relative;
}

.work_bookdetail_04_img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.buyBtnOpacity div{
  opacity: .6;
}
</style>
