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
            <img class="work_bookdetail_04_img" v-bind="{class: 'work_bookdetail_04_' + config.field}" :src=" resourceDetail[keys[config.field]] " alt="暂无图片" @load="dealResourceImg($event)" />
          </div>

          <!-- 自定义事件按钮 包括（title 标题） -->
          <div v-else-if="config.name == 'button'" v-bind="{class: 'work_bookdetail_04_btncontainer_' + config.field + '_' + config_i}" @click="toCustomFun(config)">
            <i v-bind="{class: config.className}"></i>
            <label class="work_bookdetail_04_btnlabel">{{config.display}}</label>
            <span v-bind="{class: 'work_bookdetail_04__btncontainer_' + config.field}" v-if="keys[config.field]">{{ resourceDetail[keys[config.field]] }}</span>
          </div>

          <!-- price 价格 -->
          <div v-else-if="config.name == 'price'" class="work_bookdetail_04_pricecontainter">
            <label class="work_bookdetail_04_price_label">{{config.display}}</label>
            <span v-bind="{class: 'work_bookdetail_04_' + config.field}">{{ resourceDetail[keys[config.field]] | formatPriceNew }}</span>
          </div>

          <!-- time 时间 -->
          <div v-else-if="config.name == 'time'" class="work_bookdetail_04_timecontainter">
            <label class="work_bookdetail_04_time_label">{{config.display}}</label>
            <span v-bind="{class: 'work_bookdetail_04_' + config.field}">{{ resourceDetail[keys[config.field]] | formatDateNEW}}</span>
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
              <label class="work_bookdetail_04_op_label" v-else>
                <i v-bind="{class: config.className}"></i>{{config.display}}</label>
              <span v-bind="{class: 'work_bookdetail_04_' + config.field}">{{ resourceDetail[keys[config.field]]}}</span>
            </div>

          </div>

          <!-- probation 试读 -->
          <div v-else-if="config.name == 'probation'" class="work_bookdetail_04_probationcontainter" :class="{work_bookdetail_04_noProbation: !resourceDetail[keys.bookFreeDownLoadPath]}" @click="toCustomFun(config)">
            <i v-bind="{class: config.className}"></i>
            <label class="work_bookdetail_04_probation_label">{{config.display}}</label>
            <span v-bind="{class: 'work_bookdetail_04_' + config.field}">{{ resourceDetail[keys[config.field]]}}</span>
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
            <span v-if="config.field" v-bind="{class: 'work_bookdetail_04_' + config.field}" v-html="resourceDetail[keys[config.field]] || '暂无'"></span>
          </div>
        </template>
      </section>
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

    <div class="work_bookdetail_04_tabBody">
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
  name: 'work_bookdetail_04',
  props: ['namespace', 'modulename'],
  reused: true,
  data () {
    return {
      CONFIG: null,
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
    };
  },

  mounted () {
    this.pubId = URL.parse(document.URL, true).query.pubId; // 从地址栏接收栏目id
    this.CONFIG = PROJECT_CONFIG[this.namespace].work_bookdetail.work_bookdetail_04[this.modulename];
    this.modulename_share = this.modulename + 'share';
    this.resourceDetailConfig = this.CONFIG.getResourceDetail;
    this.publicizeInfoConfig = this.CONFIG.getPublicizeInfo;
    if (typeof (this.CONFIG.tabConfigList) != "undefined") {
      this.tabConfigList = this.CONFIG.tabConfigList;  //tab配置
      this.tabActiveIndex = this.CONFIG.tabConfigList.tabActiveIndex;  //tab配置
    }
    this.addCartConfig = this.CONFIG.addCart;
    this.collectOrLikeConfig = this.CONFIG.collectOrLike;
    this.audioAttachmentConfig = this.CONFIG.getAudioAttachment;
    this.keys = JSON.parse(JSON.stringify(getFieldAdapter(this.resourceDetailConfig.sysAdapter, this.resourceDetailConfig.typeAdapter)));
    this.showPublicizeTopic = this.publicizeInfoConfig.showPublicize.length ? this.publicizeInfoConfig.showPublicize[0] : 0;
    // this.getResourceDetail();  //获取图书详情信息
    if (this.audioAttachmentConfig && this.audioAttachmentConfig.isShowAudio) { // 获取音频列表
      this.getAudioDetail();
    }
  },

  created: function () {
    this.getMemberInfo().then((member) => {
      this.loginName = member.loginName;
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
      if (config.method == 'toProbation') { // 执行免费试读操作
        if (!this.resourceDetail[this.keys.bookFreeDownLoadPath]) { // 没有试读地址
          return false
        }
      }
      window.open(toOtherPage(this.resourceDetail, this.CONFIG[config.method], this.keys));
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
          this.resId = this.resourceDetail[this.keys.resId];
          if (this.publicizeInfoConfig && this.publicizeInfoConfig.isShowPublicize) {
            this.getPublicizeInfo(); // 获取图书相关信息
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
          this.$alert("商品数量不能大于200", "系统提示", {
            confirmButtonText: "确定"
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
      if (!this.loginName) {  // 未登录
        // this.$message({
        //   message: "请登录",
        //   type: 'error'
        // });

        window.open( '../pages/login.html');
        return false
      }
      this.pubId = this.resourceDetail[this.keys.id];
      if (config.name == 'addcart') { // 执行纸质书加入购物车操作
        if (this.resourceDetail[this.keys.contentType] == this.contentType.ebookType) { // 判断这本书是不是电子书
          let relativeEBook = this.resourceDetail.relBook;
          if (relativeEBook) { // 这本书有对应纸质书
            this.pubId = relativeEBook[this.keys.id];
          } else { // 没有对于纸质书
            this.$message({
              message: "该书没有对应纸质书，无法加入购物车",
              type: 'error'
            });
            return false
          }
        }
      } else if (config.name == 'addebcart') { // 执行电子书加入购物车操作
        if (this.resourceDetail[this.keys.contentType] == this.contentType.bookType) { // 判断这本书是不是纸质书
          let relativeBook = this.resourceDetail.relBook;
          if (relativeBook) { // 这本书有对应纸质书
            this.pubId = relativeBook[this.keys.id];
          } else { // 没有对于纸质书
            this.$message({
              message: "该书没有对应电子书，无法加入购物车",
              type: 'error'
            });
            return false
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
        } else {
          let errormsg = datas.error &&  datas.error.msg ? datas.data.error.msg : datas.data.msg;
          this.$message({
            message: errormsg,
            type: 'error'
          });
        }
      });
    },
    collectOrLike (config) { // 点赞 或者 收藏
      if (!this.loginName) {  // 未登录
        // this.$message({
        //   message: "请登录",
        //   type: 'error'
        // });
        window.open( '../pages/login.html');
        return false
      }
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
      });
    }

  },
  watch: {
    member: function (newValue, oldValue) {
      this.loginName = newValue.loginName;
      this.getResourceDetail();
    }
  }
}

</script>
<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type='number'] {
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
</style>
