<!-- 资讯列表组件 Created by song 2018/05/10 -->
<template>
  <div class="ui_list_pic_29">

    <!-- 组件的标题、副标题、去更多传colId 都得从栏目详情的接口里面取值 -->
    <!-- 组件标题 取配置的name 或者 父栏目名称 -->
    <div class="ui_list_pic_29_comtitle_con" v-if="CONFIG && CONFIG.comTitle && CONFIG.comTitle.isShow && columnDetailInfo && columnKeys">
      <div :key="config_i" v-if="typeof(CONFIG.comTitle.isShowImg!='undefined') && CONFIG.comTitle.isShowImg" class="ui_list_pic_29_comtitle_imgdiv">
        <img class="ui_list_pic_29_comtitle_imgdiv_img" :src=" columnDetailInfo[columnKeys.bigPic]" :alt="getStaticText('noImg') ? getStaticText('noImg') : '暂无图片'" />
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
      <span class="ui_list_pic_29_orderby_span" v-for="(item, index) in toOrderByBtn.itemList" :key="index" @click="toSetOrder(item)" :class="{toOrderByBtn_Active: item.itemField==activeSetOrder}">{{item.name}}</span>
    </div>

    <!-- 排序2 最新 热门(带升降排序) -->
    <div class="ui_list_pic_29_orderby_con1" v-if="CONFIG && CONFIG.toOrderByBtn2 && CONFIG.toOrderByBtn2.isShow">
      <span class="ui_list_pic_29_orderby_name1"> {{CONFIG.toOrderByBtn2.name}}</span>
      <span class="ui_list_pic_29_orderby_span1" v-for="(item, index) in CONFIG.toOrderByBtn2.itemList" :key="index" @click="toSetOrder2(item)" :class="{'toOrderByBtn_Activedesc': item.itemField.order == activeSetOrder2 , 'toOrderByBtn_Activeasc' : item.itemField2.order == activeSetOrder2}">
        {{item.name}}
        <a href="javascript:;" class="ui_list_pic_29_orderby_one"></a>
        <a href="javascript:;" class="ui_list_pic_29_orderby_two"></a>
        </span>
    </div>

    <!-- 搜索框 -->
    <div class="ui_list_pic_29_search_con" v-if="CONFIG.showSearchBtn">
      <el-input class="ui_list_pic_29_search_input" v-model="searchText"></el-input>
      <i class="el-icon-search ui_list_pic_29_search_icon" @keyup.enter="getResourceLists()" @click="getResourceLists()"></i>
    </div>

    <!-- 总的条目 zrn add it at 2018-09-29 -->
    <div class="ui_list_pic_29_totalnumbox" v-if="CONFIG && CONFIG.isShowTotal">
      <span class="ui_list_pic_29_totalnumbox_word1">{{getStaticText('total') ? getStaticText('total') : '共有'}}</span>
      <span class="ui_list_pic_29_totalnum">{{totalCount}}</span>
      <span class="ui_list_pic_29_totalnumbox_word1">{{getStaticText('productQuantity') ? getStaticText('productQuantity') : '条搜索结果'}}</span>
    </div>

    <div class="ui_list_pic_29_resourcelists">
      <ul class="ui_list_pic_29_resourcelists_ul" v-if="resourceLists && resourceLists.length > 0">
        <li class="ui_list_pic_29_resourcelists_li" v-for="(item, index) in resourceLists" :key="index" v-if="index >= resourceListsConfig.startNum">
          <template v-for="(config, config_i) in resourceListsConfig.complicatedItem">
            <!-- 需要特殊处理的复杂项 -->
            <!-- img 图片 -->
            <div :key="config_i" v-if="config.name == 'img'" class="ui_list_pic_29_resourcelists_li_imgcontainter" @click="toCustomFun(item, config, keys)">
              <label class="ui_list_pic_29_resourcelists_img_label">{{config.display}}</label>
              <img class="ui_list_pic_29_resourcelists_li_img" v-bind="{class: 'ui_list_pic_29_resourcelists_' + config.field}" :src=" item[keys[config.field]] || require('@static/img/defaultCover.png')" :alt="getStaticText('noImg') ? getStaticText('noImg') : '暂无图片'" @load="dealResourceImg($event)" />
            </div>

            <!-- 自定义事件按钮 包括（title 标题） -->
            <span :key="config_i" v-else-if="config.name == 'button'" v-bind="{class: 'ui_list_pic_29_resourcelists_btncontainer_' + config.field + '_' + config_i}" @click="toCustomFun(item, config, keys)">
              <label class="ui_list_pic_29_resourcelists_btnlabel">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_29_resourcelists__btncontainer_' + config.field}" v-if="keys[config.field]" v-html="item[keys[config.field]]"></span>
            </span>

            <!-- price 价格 -->
            <span :key="config_i" v-else-if="config.name == 'price'" class="ui_list_pic_29_resourcelists_li_pricecontainter">
              <label class="ui_list_pic_29_resourcelists_price_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_29_resourcelists_' + config.field}">{{formatPriceNew(item[keys[config.field]])}}</span>
            </span>

            <!-- time 时间 -->
            <span :key="config_i" v-else-if="config.name == 'time'" class="ui_list_pic_29_resourcelists_li_timecontainter">
              <label class="ui_list_pic_29_resourcelists_time_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_29_resourcelists_' + config.field}">{{formatDateNEW(item[keys[config.field]])}}</span>
            </span>

            <!-- 其他不需要特殊处理的简单项 -->
            <span :key="config_i" v-else class="ui_list_pic_29_resourcelists_other">
              <label class="ui_list_pic_29_resourcelists_li_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_29_resourcelists_' + config.field}">{{ item[keys[config.field]] }}</span>
            </span>

          </template>
        </li>
      </ul>

      <div class="ui_list_pic_29_resourcelists_nodata" v-if="resourceLists && resourceLists.length == 0">{{getStaticText('noData') ? getStaticText('noData') : '暂无数据'}}</div>
    </div>
    <ui_pagination class="ui_list_pic_29_ui_pagination" v-if="CONFIG && CONFIG.pagination && CONFIG.pagination.showPagination" :pageMessage="{totalCount: totalCount}" :excuteFunction="paging" :page-sizes="CONFIG.pagination.pagesize"></ui_pagination>
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
import moment from "moment";
import $ from "jquery"
import qs from 'qs'

export default {
  name: "ui_list_pic_29",
  props: ["namespace", "modulename"],
  reused: true,
  data () {
    return {
      CONFIG: "",
      resourceLists: [], //资源列表
      keys: {}, // 接口字段容器
      columnKeys: {}, // 栏目字段适配容器
      colId: "",
      allColId: '', //查关联稿件
      columnDetailInfo: "", // 栏目详细信息
      requestParams: "", // 去详情页需要传查询list.do的所有参数
      isMobileLoading: false, //默认不是下拉增量加载
      pageIndex: "1", // 页码 从 1 开始
      pageSize: "", // 每页显示个数
      totalPages: "0", // 订单总页数
      pageNo: "1",
      pageNoz: "1",
      pageIndexz: "1",
      totalCount: 0,
      toOrderByBtn: {}, // 排序配置
      activeSetOrder: "pub_a_order asc pub_lastmodified desc id asc",
      pubId: "", //
      cascadId: "", //分类id
      searchText: "",
      columnName: "",  // 稿件的栏目名称
      seriesId:"", // 丛书的id
      authorSysTopic: "", // 作者名字
      activeSetOrder2: "", // 带升降排序
      orderBy:'',
      articleNature: "" // 稿件标签(金融博览)
    };
  },

  created () {
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

    // 稿件的栏目名称(适应博览,博览财富)
    if (typeof uriQuery.columnName != "undefined") {
      this.columnName = uriQuery.columnName;
    }
    // 丛书的id (金融书城PC)
    if(uriQuery.seriesId && uriQuery.seriesId != "undefined"){
      this.seriesId = uriQuery.seriesId;
    }
    // if (typeof uriQuery.seriesId !== "undefined") {
    //   this.seriesId = uriQuery.seriesId;
    // }

    // 作者名字(金融博览财富)
    if (typeof uriQuery.authorSysTopic != "undefined") {
      this.authorSysTopic = uriQuery.authorSysTopic;
    }

    

    this.CONFIG =PROJECT_CONFIG[this.namespace].list_pic.list_pic_29[this.modulename];
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

    // 带升降排序
    if (typeof this.CONFIG.toOrderByBtn2 != "undefined") {
      if (this.CONFIG.toOrderByBtn2) {
        this.activeSetOrder2 = this.CONFIG.toOrderByBtn2.itemFieldDefult;
      }
    }
    //  = "";

    if (this.CONFIG && this.CONFIG.onEvent && this.CONFIG.onEvent.eventName) {
      // 通过接收广播获取栏目id
      this.$bus.$on(this.CONFIG.onEvent.eventName, data => {
        this.resourceLists = [];
        this.totalCount = 0;
        this.changeColId(data[0]);
        this.getResourceFun();
      });
    } else if (this.CONFIG && this.CONFIG.onEvent && this.CONFIG.onEvent.onColumnInfo) { // 与左侧导航组件交互
      this.$bus.$on(this.CONFIG.onEvent.onColumnInfo, (data) => {
        this.resourceLists = [];
        this.totalCount = 0;
        this.searchText = ''; // 每次都要清空搜索内容
        this.changeColId(data.id);
        this.getResourceFun();
      })
    } else if (this.CONFIG && this.CONFIG.onEvent && this.CONFIG.onEvent.onPubIdInfo) {   //接受pubid 广播修改
      this.$bus.$on(this.CONFIG.onEvent.onPubIdInfo, data => {
        this.resourceLists = [];
        this.totalCount = 0;
        this.pubId = data.id;
        this.getResourceFun();
      });
    } else if (this.CONFIG && this.CONFIG.onEvent && this.CONFIG.onEvent.onCascadId) {   //接受cascadId 广播修改
      this.$bus.$on(this.CONFIG.onEvent.onCascadId, data => {
        this.resourceLists = [];
        this.totalCount = 0;
        this.cascadId = data[0];
        this.getResourceFun();
      });
    } else if(this.CONFIG && this.CONFIG.onEvent && this.CONFIG.onEvent.onArticleNature){
      this.$bus.$on(this.CONFIG.onEvent.onArticleNature, data => {
        this.resourceLists = [];
        this.totalCount = 0;
        this.articleNature = data.fieldName;
        this.getResourceFun();
      });
    }else {
      this.getResourceFun();
    }

    // this.getColumnSubTitle(); // $on方法回调是异步的

    // 获取location搜索变量
    this.locationQuery = URL.parse(document.URL, true).query;
    // 初始加载
    if(this.CONFIG.isAutoLoad){
      this.autoLoad();
    }
    // 广播排序
    let _self = this;
    this.$bus.$on(_self.CONFIG.eventName_loadDate,function(item){
      _self.orderBy = item.orderBy;
      _self.autoLoad();
    });
  },

  mounted () {
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
    autoLoad(){
      let paramsObj = Object.assign({}, this.resourceListsConfig.params);
      // paramsObj.conditions = '[{"pub_col_id":1129}]';
      paramsObj.pageSize = this.pageSize ? this.pageSize :paramsObj.pageSize;
      paramsObj.pageNo = this.pageNo ? this.pageNo : paramsObj.pageNo;
      paramsObj.orderBy = this.orderBy ? this.orderBy : paramsObj.orderBy;
      // 模糊查询
      var newSearchText =this.locationQuery.searchText || '';
      let searchTextObj = '';
      if (this.CONFIG.isMoreFieldSearch) {
        for (var i=0;i<this.CONFIG.isMoreFieldSearch.length;i++){
          searchTextObj = searchTextObj+' '+this.CONFIG.isMoreFieldSearch[i]+":"+"*"+newSearchText+"*";
          if(i<(this.CONFIG.isMoreFieldSearch.length-1)){
            searchTextObj = searchTextObj + ' OR ';
          }
        }
      }else{
        searchTextObj = newSearchText;
      }
      paramsObj.searchText = searchTextObj;
      Post(CONFIG.BASE_URL + this.resourceListsConfig.url, paramsObj).then(
        rep => {
          let datas = rep.data;
          if (datas.success) {
            this.totalCount = datas.totalCount;
            if (datas.success && datas.result.length > 0) {
                this.resourceLists = datas.result;
            } else if (datas.success && datas.result.length == 0) {
              this.resourceLists=[];
            }
          }
        }
      );
    },
    getResourceFun () {
      this.getResourceLists();
      this.getColumnSubTitle();
    },
    toSetOrder (item) {
      //修改默认排序
      this.activeSetOrder = item.itemField;
      this.totalCount = 0;
      this.getResourceLists();
    },
    toSetOrder2 (item) {
      //修改默认排序
      if(this.activeSetOrder2 == item.itemField.order){
        this.activeSetOrder2 = item.itemField2.order;
      }else{
        this.activeSetOrder2 = item.itemField.order;
      }
      this.getResourceLists();
    },
    changeColId (item) {
      // 在广播事件外修改colId
      this.colId = item;
    },
    toCustomFun (item, config, keys) {
      // 执行自定义事件
      let detailParams = "";
      if (config.method == "toDetail") {
        // 去详情页需要增加list.do请求的所有参数
        for (let param in this.requestParams) {
          detailParams =
            detailParams + "&" + param + "=" + this.requestParams[param];
        }
      } else if (config.method == "sourceUrl") {
        if(config.target == "blank"){
          window.open(item[this.keys.sourceUrl]);
        }else{
          window.location.href=item[this.keys.sourceUrl];
        }
        return false;
      } else if (config.method == "downloadUrl") {
        // 如果sourceUrl为空,则判断pub_widget_url数组里的值 by shenqian
        let itemUrlArr = item["pub_widget_url"]; //获取下载列表的url数组
        itemUrlArr &&
          itemUrlArr.length > 0 &&
          $.each(itemUrlArr, function(key, value){
            let link;
            if (document.getElementById("downloadFileLink")) {
              //如果页面存在downloadFileLink元素
              link = document.getElementById("downloadFileLink");
              link.parentNode.removeChild(link); // 移除downloadFileLink元素
            }
            link = document.createElement("a"); //创建新的downloadFileLink元素
            link.id = "downloadFileLink";
            link.download = "";
            link.target = "_self";
            link.href = value;
            document.body.appendChild(link); // 添加到页面解决火狐无法触发click方法
            link.click();
            link.parentNode.removeChild(link); // 移除downloadFileLink元素
          });
        return false;

        //npm run dev
        // 如果sourceUrl为空,则判断pub_widget_url数组里的值 -- end
      } else if (config.method == "toResourceDetail") { // 去资源详情页（区分视频组、音频组、课件三种资源）
        window.open(toOtherPage(item, this.CONFIG[config.method][item[this.keys.pubResType]], keys));
      }else if(config.method == "toApp"){
        let toApp = this.CONFIG.toApp;
        if (toApp.type == 'phone') {
          let params = '';
          for (let index = 0; index < toApp.phone.values.length; index++) {
            const element = toApp.phone.values[index];
            params += item[element] + ',';
          }
          params = params.substring(0, params.length - 1);
          eval(toApp.phone.functionName + '(' + params + ')');
        }
        return false;
      }
      window.open(toOtherPage(item, this.CONFIG[config.method], keys) + detailParams) ;
    },
    getColumnSubTitle () {
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
    getResourceLists (pagingParams) {
      // 获取资源列表
      let paramsObj = Object.assign({}, this.resourceListsConfig.params);
      let self = this;

      if(this.CONFIG && this.CONFIG.search && this.CONFIG.search.isLikeSearch){
        if(this.CONFIG.search.searchField && this.CONFIG.search.searchField.length > 0){
          let arr = [];
          this.CONFIG.search.searchField.forEach(function(item,index){
            var obj = item +":*" + self.searchText + "*";
            arr.push(obj);
          });
          paramsObj.searchText = arr.join("OR");
        }else{
          paramsObj.searchText = this.searchText;
        }
      }else{
        paramsObj.searchText = this.searchText; //检索
      }

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

      if (typeof this.CONFIG.toOrderByBtn2 != "undefined") {
        if (this.CONFIG.toOrderByBtn2) {
          paramsObj.orderBy = this.activeSetOrder2;
        }
      }
      // this.activeSetOrder = paramsObj.orderBy;

      paramsObj.conditions.map(item => {
        if (item.hasOwnProperty(this.keys.colId)) {
          item[this.keys.colId] = this.colId
            ? this.colId
            : item[this.keys.colId];
        }
        if (item.hasOwnProperty(this.keys.allColId) && this.CONFIG.isQueryRelResource) {
          item[this.keys.allColId] = this.colId
            ? this.colId
            : item[this.keys.allColId];
        }
        
        // pub_parent_id冲突
        if (item.hasOwnProperty("pub_parent_id")) {
          if(item.pub_parent_id == "pubId"){
            item.pub_parent_id = this.pubId;
          }else if(item.pub_parent_id == "seriesId"){
            item.pub_parent_id = this.seriesId;
          }else{
            // 向下兼容
            if(this.seriesId){
              item.pub_parent_id = this.seriesId;
            }else{
              item.pub_parent_id = this.pubId ? this.pubId : item.pub_parent_id;
            }
          }
        }
        if (item.hasOwnProperty("BOOK_BOOK_CASCADID")) {
          item.BOOK_BOOK_CASCADID = this.cascadId
            ? this.cascadId
            : item.BOOK_BOOK_CASCADID;
        }

        // 好书快听
        if (item.hasOwnProperty("REVIEW_BOOK_CASCADID")) {
          item.REVIEW_BOOK_CASCADID = this.cascadId
            ? this.cascadId
            : item.REVIEW_BOOK_CASCADID;
        }

        // 有声书
        if (item.hasOwnProperty("BOOK_MATERIAL_BOOK_CASCADID")) {
          item.BOOK_MATERIAL_BOOK_CASCADID = this.cascadId
            ? this.cascadId
            : item.BOOK_MATERIAL_BOOK_CASCADID;
        }

        if (item.hasOwnProperty("PRODUCT-ARTICLE_COLUMNNAME")) {
          item["PRODUCT-ARTICLE_COLUMNNAME"] = this.columnName ? this.columnName : item["PRODUCT-ARTICLE_COLUMNNAME"];
        }

        // 读取站点ID(by zrn)
        if(item.hasOwnProperty("pub_site_id")){
          item.pub_site_id = item.pub_site_id ? item.pub_site_id: CONFIG.SITE_CONFIG.siteId;
        }

        // 稿件作者
        if(item.hasOwnProperty("PRODUCT-ARTICLE_SYS_AUTHORS")){
          item["PRODUCT-ARTICLE_SYS_AUTHORS"] = this.authorSysTopic ? this.authorSysTopic : item["PRODUCT-ARTICLE_SYS_AUTHORS"];
        }

        // 稿件标签(金融博览)
        if(item.hasOwnProperty("PRODUCT-ARTICLE_ARTICLE_NATURE")){
            item["PRODUCT-ARTICLE_ARTICLE_NATURE"] = this.articleNature ? this.articleNature : item["PRODUCT-ARTICLE_ARTICLE_NATURE"];
        }

      });
      paramsObj.conditions = JSON.stringify(paramsObj.conditions);
      this.requestParams = paramsObj;
      Post(CONFIG.BASE_URL + this.resourceListsConfig.url, paramsObj).then(
        rep => {
          let datas = rep.data;
          if (datas.success) {
            this.totalCount = datas.totalCount;
            if (datas.success && datas.result.length > 0) {
              if (this.isMobileLoading) {
                this.resourceLists = this.resourceLists.concat(datas.result);
              }else{
                this.resourceLists = datas.result;
                //默认发出第一条数据的pubId
                if(this.resourceLists && this.resourceLists.length > 0){
                  if(typeof(this.CONFIG.emitEvent)!== 'undefined'  && this.CONFIG.emitEvent.contextEventName){
                    this.$bus.$emit(this.CONFIG.emitEvent.contextEventName,  { id: this.resourceLists[0].id });
                  }
                }
              }
              this.totalPages = datas.totalPages;
              this.pageNo = datas.pageNo;
              this.pageNoz = datas.pageNo;
              this.pageSize = datas.pageSize;
            } else if (datas.success && datas.result.length == 0) {
              // Toast.fail({
              //   duration: 1000,
              //   message: datas.description
              // });
              this.resourceLists=[];
            }
          }
        }
      );
    },
    dealResourceImg (eve) {
      DrawImage(
        eve.path[0],
        this.CONFIG.infoImgWidth,
        this.CONFIG.infoImgHeight
      );
    },
    paging: function ({ pageNo, pageSize }) {
      // 翻页
      if(!this.CONFIG.isAutoLoad){
        var pagingParams = {
          pageNo: pageNo,
          pageSize: pageSize
        };
        this.getResourceLists(pagingParams);
      }else{
        this.pageNo = pageNo;
        this.pageSize = pageSize;
        console.log(this.pageSize)
        this.autoLoad();
      }
    },
    getStaticText (text) {
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
      return (this.getStaticText('yuan') ? this.getStaticText('yuan') : '￥') +'0.00';
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

.ui_list_pic_29_search_con {
  width: 400px;
  position: relative;
}

.ui_list_pic_29_search_icon {
  cursor: pointer;
  position: absolute;
  right: 8px;
  font-size: 24px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
