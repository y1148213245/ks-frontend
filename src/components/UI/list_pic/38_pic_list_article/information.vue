<!-- created by zrn at 2018-08-04 -->
<template>
  <div class="ui_list_pic_38">
    <div class="ui_list_pic_38_resourcelists">
      <template>
        <div class="ui_list_pic_38_resourcelists_item" v-for="(column, columnIndex) in articleData" v-if="articleData && articleData.length > 0" :key="columnIndex">
            <h1 class="ui_list_pic_38_resourcelists_columnname">{{column.name}}</h1>
            <ul class="ui_list_pic_38_resourcelists_ul" >
              <li class="ui_list_pic_38_resourcelists_li" v-for="(item, index) in column.data" :key="index" @click="(columnIndex === 0 && index < resourceListsConfig.freeNum || isBuy === 1) ? toCustomFun(item,1) : toCustomFun(item,2)">
                <template v-for="(config, config_i) in resourceListsConfig.complicatedItem">
                  <!-- 需要特殊处理的复杂项 -->
                  <!-- img 图片 -->
                  <div :key="config_i" v-if="config.name == 'img'" class="ui_list_pic_38_resourcelists_li_imgcontainter" @click="toCustomFun(item, config, keys)">
                    <label class="ui_list_pic_38_resourcelists_img_label">{{config.display}}</label>
                    <img class="ui_list_pic_38_resourcelists_li_img" v-bind="{class: 'ui_list_pic_38_resourcelists_' + config.field}" :src=" item[keys[config.field]] || require('@static/img/defaultCover.png')" :alt="getStaticText('noImg') ? getStaticText('noImg') : '暂无图片'" />
                  </div>

                  <!-- 自定义事件按钮 包括（title 标题） -->
                  <span :key="config_i" v-else-if="config.name == 'button'" v-bind="{class: 'ui_list_pic_38_resourcelists_btncontainer_' + config.field + '_' + config_i}" @click="toCustomFun(item, config, keys)">
                    <label class="ui_list_pic_38_resourcelists_btnlabel">{{config.display}}</label>
                    <span v-bind="{class: 'ui_list_pic_38_resourcelists__btncontainer_' + config.field}" v-if="keys[config.field]" v-html="item[keys[config.field]]"></span>
                  </span>

                  <!-- price 价格 -->
                  <span :key="config_i" v-else-if="config.name == 'price'" class="ui_list_pic_38_resourcelists_li_pricecontainter">
                    <label class="ui_list_pic_38_resourcelists_price_label">{{config.display}}</label>
                    <span v-bind="{class: 'ui_list_pic_38_resourcelists_' + config.field}">{{formatPriceNew(item[keys[config.field]])}}</span>
                  </span>

                  <!-- time 时间 -->
                  <span :key="config_i" v-else-if="config.name == 'time'" class="ui_list_pic_38_resourcelists_li_timecontainter">
                    <label class="ui_list_pic_38_resourcelists_time_label">{{config.display}}</label>
                    <span v-bind="{class: 'ui_list_pic_38_resourcelists_' + config.field}">{{formatDateNEW(item[keys[config.field]])}}</span>
                  </span>

                  <!-- 其他不需要特殊处理的简单项 -->
                  <span :key="config_i" v-else class="ui_list_pic_38_resourcelists_other">
                    <label class="ui_list_pic_38_resourcelists_li_label">{{config.display}}</label>
                    <span v-bind="{class: 'ui_list_pic_38_resourcelists_' + config.field}">{{ item[keys[config.field]] }}</span>
                  </span>

                </template>

                <div class="ui_list_pic_38_resourcelists_li_btnbox" v-if="columnIndex === 0 && index < resourceListsConfig.freeNum || isBuy === 1">
                    <el-button class="btnfree ui_list_pic_38_resourcelists_li_btnbox_btn">{{getStaticText('free') ? getStaticText('free') : '阅读'}}</el-button>
                </div>

                <div class="ui_list_pic_38_resourcelists_li_btnbox" v-else>
                    <el-button class="btnfee ui_list_pic_38_resourcelists_li_btnbox_btn">{{getStaticText('nofree') ? getStaticText('nofree') : '付费'}}</el-button>
                </div>
              </li>
            </ul>
        </div>
      </template>
      <div class="ui_list_pic_38_resourcelists_nodata" v-if="articleData && articleData.length == 0">{{getStaticText('noData') ? getStaticText('noData') : '暂无数据'}}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import * as interfaces from "@work/login/common/interfaces.js";
import Vue from "vue";
import { Get, Post, getFieldAdapter, toOtherPage } from "@common";
import URL from "url";
import PROJECT_CONFIG from "projectConfig";
import moment from "moment";
export default {
  name: "ui_list_pic_38",
  props: ["namespace", "modulename"],
  reused: true,
  data() {
    return {
      CONFIG: "",
      articleData: [], //资源列表
      keys: {}, // 接口字段容器
      requestParams: "", // 去详情页需要传查询list.do的所有参数
      pageIndex: "1", // 页码 从 1 开始
      pageSize: "10", // 每页显示个数
      totalPages: "0", // 总页数
      totalCount: 0,
      pubId: "", // 资源id
      columnName: "",   // 稿件栏目名称
      loginName:'',
      isBuy: 0  //判断期刊是否被购买了
    };
  },
  created() {
    var uriQuery = URL.parse(document.URL, true).query;
    if (typeof uriQuery.pubId != "undefined") {
      this.pubId = uriQuery.pubId;
    }

     // 稿件的栏目名称(适应博览,博览财富)
    if (typeof uriQuery.columnName != "undefined") {
      this.columnName = uriQuery.columnName;
    }

    this.CONFIG =
      PROJECT_CONFIG[this.namespace].list_pic.list_pic_38[this.modulename];
    this.resourceListsConfig = this.CONFIG.getResourceLists;
    this.keys = JSON.parse(
      JSON.stringify(
        getFieldAdapter(
          this.CONFIG.getResourceLists.sysAdapter,
          this.CONFIG.getResourceLists.typeAdapter
        )
      )
    );
    this.getMagazine();
    this.getResourceLists();
  },
  computed: {
    ...mapGetters({
      bookInfo: 'bookDetail/bookDetailInfo',   // 图书详情信息
    }),
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER   // 用户信息
    }),
  },
  methods: {
    ...mapActions("login", {
      getMemberInfo: interfaces.ACTION_KEEP_SESSION
    }),
    // 获取期刊详情,获取isBuy字段,判断是否被购买了
    getMagazine(){
     this.getMemberInfo().then((member) => {
        this.loginName = member.loginName;
        Get(CONFIG.BASE_URL + 'book/getBookDetail.do?pubId=' + this.pubId + '&loginName=' + this.loginName).then((rep) => {
          let datas = rep.data;
          if (rep.status == 200 && datas.data) {
            this.isBuy = datas.data.isBuy;
          }
        });
      });
    },
    getResourceLists() {
      // 获取资源列表
      let paramsObj = Object.assign({}, this.resourceListsConfig.params);
      paramsObj.pageSize = this.resourceListsConfig.maxNum ? this.resourceListsConfig.maxNum + "": "15";
      this.pageSize = paramsObj.pageSize;
      paramsObj.pageNo = this.pageIndex;
      paramsObj.pageSize = this.pageSize;

      paramsObj.conditions.map(item => {
        if (item.hasOwnProperty("pub_parent_id")) {
          item.pub_parent_id = this.pubId ? this.pubId : item.pub_parent_id;
        }

        if (item.hasOwnProperty("PRODUCT-ARTICLE_COLUMNNAME")) {
          item["PRODUCT-ARTICLE_COLUMNNAME"] = this.columnName ? this.columnName : item["PRODUCT-ARTICLE_COLUMNNAME"];
        }
      });
      paramsObj.conditions = JSON.stringify(paramsObj.conditions);
      this.requestParams = paramsObj;
      //CONFIG.BASE_URL + 
      Post(CONFIG.BASE_URL + this.resourceListsConfig.url, paramsObj).then(
        rep => {
          let datas = rep.data;
          if (datas.success && datas.result && datas.result.length > 0) {
            let obj = {}, self = this;
            console.log(datas.result);
            datas.result.forEach((element,index) => {
              if(!obj[element["PRODUCT-ARTICLE_COLUMNNAME"]]){
                  self.articleData.push({
                      id: index,
                      name: element["PRODUCT-ARTICLE_COLUMNNAME"],
                      data: [element]
                  });
                  obj[element["PRODUCT-ARTICLE_COLUMNNAME"]] = element;
              }else{
                self.articleData.forEach(item=>{
                  if(item.name === element["PRODUCT-ARTICLE_COLUMNNAME"]){
                      item.data.push(element);
                  }
                });
              }
            });
            console.log(self.articleData);
            // let arr = [];
            // self.articleData.forEach((item, index)=>{
            //     if(item.name === item1.name){

            //     }
            // });

          }
          else if (!datas.success) {
              this.$message({
                message: datas.ddescription,
                type: 'error'
              });
            }
          }
      );
    },
    getStaticText (text) {
      if (this.CONFIG &&　this.CONFIG.staticText &&　 this.CONFIG.staticText[text]) {
        return this.CONFIG.staticText[text];
      } else {
        return false;
      }
    },
    toCustomFun (item, type) {
      // 执行自定义事件
      let detailParams = "";
      // 去详情页需要增加list.do请求的所有参数
      for (let param in this.requestParams) {
        detailParams =
          detailParams + "&" + param + "=" + this.requestParams[param];
      }
      if(type === 1){  //免费
        window.location.href = this.CONFIG.toFree + "?pubId=" + item.id + detailParams;
      }else if(type === 2){
        window.location.href = this.CONFIG.toFee + "?pubId=" + item.id + detailParams;
      }
    },
  }
};
</script>
