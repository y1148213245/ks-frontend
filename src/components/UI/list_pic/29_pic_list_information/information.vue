<!-- 资讯列表组件 Created by song 2018/05/10 -->
<template>
  <div class="ui_list_pic_29">

    <!-- 组件的标题、副标题、去更多传colId 都得从栏目详情的接口里面取值 -->
    <!-- 组件标题 取配置的name 或者 父栏目名称 -->
    <div class="ui_list_pic_29_comtitle_con" v-if="CONFIG && CONFIG.comTitle && CONFIG.comTitle.isShow && columnDetailInfo && columnKeys">
      <div :key="config_i" v-if="typeof(CONFIG.comTitle.isShowImg!='undefined') && CONFIG.comTitle.isShowImg" class="ui_list_pic_29_comtitle_imgdiv">
        <img class="ui_list_pic_29_comtitle_imgdiv_img" :src=" columnDetailInfo[columnKeys.bigPic]" :alt="getStaticText('noImg') ? getStaticText('noImg') : 暂无图片" />
      </div>
      <h4 class="ui_list_pic_29_comtitle"> {{CONFIG.comTitle.name ? CONFIG.comTitle.name : columnDetailInfo[columnKeys.name]}} </h4>
      <span class="ui_list_pic_29_comtitle_columnDetailInfo">{{columnDetailInfo[columnKeys.code]}}</span>
    </div>
    <!-- 更多按钮 -->
    <div class="ui_list_pic_29_tomore_con" v-if="CONFIG && CONFIG.toMoreBtn && CONFIG.toMoreBtn.isShow && columnDetailInfo" @click="toCustomFun(columnDetailInfo, CONFIG.toMoreBtn, columnKeys)">
      <span class="ui_list_pic_29_tomore_name"> {{CONFIG.toMoreBtn.name}}</span>
      <i class="ui_list_pic_29_tomore_icon" v-bind="{class: CONFIG.toMoreBtn.iconClass}"></i>
    </div>
    <!-- 排序 最新 热门 -->
    <div class="ui_list_pic_29_orderby_con" v-if="CONFIG && CONFIG.toOrderByBtn && toOrderByBtn.isShow && toOrderByBtn">
      <span class="ui_list_pic_29_orderby_name"> {{CONFIG.toOrderByBtn.name}}</span>
      <span class="ui_list_pic_29_orderby_span" v-for="(item, index) in toOrderByBtn.itemList" :key="index"  @click="toSetOrder(item)" :class="{toOrderByBtn_Active: item.itemField==activeSetOrder}">{{item.name}}</span>
    </div>

    <div class="ui_list_pic_29_resourcelists">
      <ul class="ui_list_pic_29_resourcelists_ul" v-if="resourceLists && resourceLists.length > 0">
        <li class="ui_list_pic_29_resourcelists_li" v-for="(item, index) in resourceLists" :key="index" v-if="index >= resourceListsConfig.startNum">
          <template v-for="(config, config_i) in resourceListsConfig.complicatedItem">
            <!-- 需要特殊处理的复杂项 -->
            <!-- img 图片 -->
            <div :key="config_i" v-if="config.name == 'img'" class="ui_list_pic_29_resourcelists_li_imgcontainter" @click="toCustomFun(item, config, keys)">
              <label class="ui_list_pic_29_resourcelists_img_label">{{config.display}}</label>
              <img class="ui_list_pic_29_resourcelists_li_img" v-bind="{class: 'ui_list_pic_29_resourcelists_' + config.field}" :src=" item[keys[config.field]] || require('@static/img/defaultCover.png')" :alt="getStaticText('noImg') ? getStaticText('noImg') : '暂无图片'" @load="dealResourceImg($event)"/>
            </div>

            <!-- 自定义事件按钮 包括（title 标题） -->
            <span :key="config_i" v-else-if="config.name == 'button'" v-bind="{class: 'ui_list_pic_29_resourcelists_btncontainer_' + config.field + '_' + config_i}" @click="toCustomFun(item, config, keys)">
              <label class="ui_list_pic_29_resourcelists_btnlabel">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_29_resourcelists__btncontainer_' + config.field}" v-if="keys[config.field]" v-html="item[keys[config.field]]"></span>
            </span>

            <!-- price 价格 -->
            <span :key="config_i" v-else-if="config.name == 'price'" class="ui_list_pic_29_resourcelists_li_pricecontainter">
              <label class="ui_list_pic_29_resourcelists_price_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_29_resourcelists_' + config.field}">{{ item[keys[config.field]]  | formatPriceNew }}</span>
            </span>

            <!-- time 时间 -->
            <span :key="config_i" v-else-if="config.name == 'time'" class="ui_list_pic_29_resourcelists_li_timecontainter">
              <label class="ui_list_pic_29_resourcelists_time_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_29_resourcelists_' + config.field}">{{ item[keys[config.field]] | formatDateNEW}}</span>
            </span>

            <!-- 其他不需要特殊处理的简单项 -->
            <span :key="config_i" v-else  class="ui_list_pic_29_resourcelists_other">
              <label class="ui_list_pic_29_resourcelists_li_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_29_resourcelists_' + config.field}">{{ item[keys[config.field]] }}</span>
            </span>

          </template>
        </li>
      </ul>

      <div class="ui_list_pic_29_resourcelists_nodata" v-if="resourceLists && resourceLists.length == 0">{{getStaticText('noData') ? getStaticText('noData') : '暂无数据'}}</div>
    </div>
    <ui_pagination class="ui_list_pic_29_ui_pagination" v-if="CONFIG && CONFIG.pagination && CONFIG.pagination.showPagination"  :pageMessage="{totalCount: totalCount}" :excuteFunction="paging" :page-sizes="CONFIG.pagination.pagesize"></ui_pagination>
  </div>
</template>

<script>
import Vue from "vue";
import {
  Get,
  Post,
  DrawImage,
  getFieldAdapter,
  toOtherPage,
  mobileLoading
} from "@common";
import URL from "url";
import PROJECT_CONFIG from "projectConfig";
import ui_pagination from "../../pagination/pagination/pagination";
import { Icon, Toast } from "vant";

export default {
  name: "ui_list_pic_29",
  props: ["namespace", "modulename"],
  reused: true,
  data() {
    return {
      CONFIG: "",
      resourceLists: [], //资源列表
      keys: {}, // 接口字段容器
      columnKeys: {}, // 栏目字段适配容器
      colId: "",
      columnDetailInfo: "", // 栏目详细信息
      requestParams: "", // 去详情页需要传查询list.do的所有参数
      isMobileLoading: false, //默认不是下拉增量加载
      pageIndex: "1", // 页码 从 1 开始
      pageSize: "10", // 每页显示个数
      totalPages: "0", // 订单总页数
      pageNo: "1",
      pageNoz: "1",
      pageIndexz: "1",
      totalCount: 0,
      toOrderByBtn: {}, // 排序配置
      activeSetOrder: "pub_a_order asc pub_lastmodified desc id asc",
      pubId: "", //
      cascadId: "" //
    };
  },

  created() {
    var uriQuery = URL.parse(document.URL, true).query;
    // this.colId = uriQuery.colId; // 从地址栏接收栏目id
    if (typeof uriQuery.colId != "undefined") {
      this.colId = uriQuery.colId;
    }
    if (typeof uriQuery.pubId != "undefined") {
      this.pubId = uriQuery.pubId;
    }
    if (typeof uriQuery.cascadId != "undefined") {
      this.cascadId = uriQuery.cascadId;
    }

    this.CONFIG =
      PROJECT_CONFIG[this.namespace].list_pic.list_pic_29[this.modulename];
    this.resourceListsConfig = this.CONFIG.getResourceLists;
    this.keys = JSON.parse(
      JSON.stringify(
        getFieldAdapter(
          this.CONFIG.getResourceLists.sysAdapter,
          this.CONFIG.getResourceLists.typeAdapter
        )
      )
    );
    if (
      this.CONFIG.getSubTitle &&
      this.CONFIG.getSubTitle.sysAdapter &&
      this.CONFIG.getSubTitle.typeAdapter
    ) {
      // 兼容没有配栏目字段适配器的组件
      this.columnKeys = JSON.parse(
        JSON.stringify(
          getFieldAdapter(
            this.CONFIG.getSubTitle.sysAdapter,
            this.CONFIG.getSubTitle.typeAdapter
          )
        )
      );
    }
    //增量加载
    if (typeof this.CONFIG.isMobileLoading != "undefined") {
      if (this.CONFIG.isMobileLoading) {
        this.isMobileLoading = this.CONFIG.isMobileLoading;
      }
    }
    if (typeof this.CONFIG.toOrderByBtn != "undefined") {
      if (this.CONFIG.toOrderByBtn) {
        this.toOrderByBtn = this.CONFIG.toOrderByBtn;
        this.activeSetOrder = this.toOrderByBtn.itemFieldDefult;
      }
    }
    //  = "";

    if (this.CONFIG && this.CONFIG.onEvent && this.CONFIG.onEvent.eventName) {
      // 通过接收广播获取栏目id
      this.$bus.$on(this.CONFIG.onEvent.eventName, data => {
        this.resourceLists = [];
        this.totalCount = 0;
        this.changeColId(data[0]);
        this.getResourceLists();
        this.getColumnSubTitle();
      });
    } else {
      this.getResourceLists();
      this.getColumnSubTitle();
    }

    // this.getColumnSubTitle(); // $on方法回调是异步的
  },

  mounted() {
    let _this = this;
    /*检测滚动条*/
    $(window).scroll(() => {
      /**
       * function 下拉底部加载
       * params1: vue对象
       * params2: 回调方法
       */
      if (_this.isMobileLoading) {
        mobileLoading(_this, "getResourceLists");
        this.pageNoz = _this.pageNo;
        this.pageIndexz = _this.pageIndex;
      }
    });
  },

  methods: {
    toSetOrder(item) {
      //修改默认排序
      this.activeSetOrder = item.itemField;
      this.getResourceLists();
    },
    changeColId(item) {
      // 在广播事件外修改colId
      this.colId = item;
    },
    toCustomFun(item, config, keys) {
      // 执行自定义事件
      let detailParams = "";
      if (config.method == "toDetail") {
        // 去详情页需要增加list.do请求的所有参数
        for (let param in this.requestParams) {
          detailParams =
            detailParams + "&" + param + "=" + this.requestParams[param];
        }
      } else if (config.method == "sourceUrl") {
        window.open(item[this.keys.sourceUrl]);
        return false;
      } else if (config.method == "downloadUrl") {
        // 如果sourceUrl为空,则判断pub_widget_url数组里的值 by shenqian
        let itemUrlArr = item["pub_widget_url"]; //获取下载列表的url数组
        itemUrlArr &&
          itemUrlArr.length > 0 &&
          $.each(urlItem => {
            let link;
            if (document.getElementById("downloadFileLink")) {
              //如果页面存在downloadFileLink元素
              link = document.getElementById("downloadFileLink");
              link.parentNode.removeChild(link); // 移除downloadFileLink元素
            }
            link = document.createElement("a"); //创建新的downloadFileLink元素
            link.id = "downloadFileLink";
            link.download = "";
            link.target = "_blank";
            link.href = urlItem;
            document.body.appendChild(link); // 添加到页面解决火狐无法触发click方法
            link.click();
            link.parentNode.removeChild(link); // 移除downloadFileLink元素
          });
        return false;

        //npm run dev
        // 如果sourceUrl为空,则判断pub_widget_url数组里的值 -- end
      }
      window.open(
        toOtherPage(item, this.CONFIG[config.method], keys) + detailParams
      );
    },
    getColumnSubTitle() {
      // 获取栏目副标题
      Post(
        CONFIG.BASE_URL +
          this.CONFIG.getSubTitle.url +
          "?colId=" +
          (this.colId ? this.colId : this.CONFIG.getSubTitle.params.colId)
      ).then(rep => {
        let datas = rep.data;
        if (datas.success && datas.data) {
          this.columnDetailInfo = datas.data;
        }
      });
    },
    getResourceLists(pagingParams) {
      // 获取资源列表
      let paramsObj = Object.assign({}, this.resourceListsConfig.params);
      paramsObj.pageSize = this.resourceListsConfig.maxNum
        ? this.resourceListsConfig.maxNum + ""
        : "15";
      this.pageSize = paramsObj.pageSize;
      if (pagingParams) {
        paramsObj.pageNo = pagingParams.pageNo;
        paramsObj.pageSize = pagingParams.pageSize;
      } else {
        paramsObj.pageNo = this.pageIndex;

        // if(typeof(this.pageIndex)=="number"){
        //   paramsObj.pageNo = "'"+this.pageIndexz+"'";
        //   paramsObj.pageIndex = "'"+this.pageIndexz+"'";
        // }else{
        //   paramsObj.pageNo = this.pageNoz;
        //   paramsObj.pageIndex = this.pageIndexz;
        // }
        paramsObj.pageSize = this.pageSize;
      }

      if (typeof this.CONFIG.toOrderByBtn != "undefined") {
        if (this.CONFIG.toOrderByBtn) {
          paramsObj.orderBy = this.activeSetOrder;
        }
      }
      // this.activeSetOrder = paramsObj.orderBy;

      paramsObj.conditions.map(item => {
        if (item.hasOwnProperty(this.keys.colId)) {
          item[this.keys.colId] = this.colId
            ? this.colId
            : item[this.keys.colId];
        }
        if (item.hasOwnProperty("pub_parent_id")) {
          item.pub_parent_id = this.pubId ? this.pubId : item.pub_parent_id;
        }
        if (item.hasOwnProperty("BOOK_BOOK_CASCADID")) {
          item.BOOK_BOOK_CASCADID = this.cascadId
            ? this.cascadId
            : item.BOOK_BOOK_CASCADID;
        }
      });
      paramsObj.conditions = JSON.stringify(paramsObj.conditions);
      this.requestParams = paramsObj;
      Post(CONFIG.BASE_URL + this.resourceListsConfig.url, paramsObj).then(
        rep => {
          let datas = rep.data;
          if (datas.success && datas.result && datas.result.length > 0) {
            this.totalCount = datas.totalCount;
            if (this.isMobileLoading) {
              if (datas.success && datas.result.length > 0) {
                this.resourceLists = this.resourceLists.concat(datas.result);
                this.totalPages = datas.totalPages;
                this.pageNo = datas.pageNo;
                this.pageNoz = datas.pageNo;
                this.pageSize = datas.pageSize;
              } else if (datas.success) {
                Toast.fail({
                  duration: 1000,
                  message: datas.description
                });
              }
            } else {
              this.resourceLists = datas.result;
            }
          }
        }
      );
    },
    dealResourceImg(eve) {
      DrawImage(
        eve.path[0],
        this.CONFIG.infoImgWidth,
        this.CONFIG.infoImgHeight
      );
    },
    paging: function({ pageNo, pageSize }) {
      // 翻页
      var pagingParams = {
        pageNo: pageNo,
        pageSize: pageSize
      };
      this.getResourceLists(pagingParams);
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
    }
  }
};
</script>
<style>
.toOrderByBtn_Active {
  border: #00ff00 2px solid;
}

.ui_list_pic_29_tomore_con {
  cursor: pointer;
}

.ui_list_pic_29_tomore_icon {
  transform: rotateZ(180deg);
}

.ui_list_pic_29_resourcelists_li_imgcontainter {
  cursor: pointer;
  position: relative;
  top: 0px;
  left: 0px;
  width: 200px;
  height: 160px;
  overflow: hidden;
  background-color: #eee;
}

.ui_list_pic_29_resourcelists_li_img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
