<!-- 资讯列表组件（含二级导航） Created by song 2018/05/07 -->
<template>
  <div class="ui_list_pic_28">
    <!-- 组件标题 取配置的name 或者 父栏目名称 -->
    <div class="ui_list_pic_28_comtitle_con" v-if="CONFIG && CONFIG.comTitle && CONFIG.comTitle.isShow">
      <h4 class="ui_list_pic_28_comtitle" v-if="columnLists && columnLists.length > 0"> {{ CONFIG.comTitle.name ? CONFIG.comTitle.name :  columnLists[0].name }}</h4> <!-- 栏目接口 不属于资源类 不需要字段兼容 -->
      <h4 class="ui_list_pic_28_comtitle" v-else> {{ CONFIG.comTitle.name ? CONFIG.comTitle.name : resourceLists[0][keys.colName] }}</h4>
    </div>
    <!-- 更多按钮 -->
    <div class="ui_list_pic_28_tomore_con" v-if="CONFIG && CONFIG.toMoreBtn && CONFIG.toMoreBtn.isShow" @click="toMore(moreBtnColumnObj)">
      <span class="ui_list_pic_28_tomore_name"> {{CONFIG.toMoreBtn.name}}</span>
      <i class="ui_list_pic_28_tomore_icon" v-bind="{class: CONFIG.toMoreBtn.iconClass}"></i>
    </div>

    <!-- 组件子栏目 取各个子栏目切换标签 -->
    <div class="ui_list_pic_28_navlists">
      <ul class="ui_list_pic_28_ul" v-if="columnLists && columnLists.length > 0">
        <li class="ui_list_pic_28_li" v-for="(nav, index) in columnLists" :key="index">
          <span class="ui_list_pic_28_nav" @click="getResourceLists(index, nav[keys.id])" :class="{'ui_list_pic_28_li_selectedNav': showNavIndex == index}"> {{nav.name}}</span>
        </li>
      </ul>
    </div>
    
    <!-- 组件子栏目 各个子栏目下的数据列表 -->
    <div class="ui_list_pic_28_resourcelists">
      <ul class="ui_list_pic_28_resourcelists_ul" v-if="resourceLists && resourceLists.length > 0">
        <li class="ui_list_pic_28_resourcelists_li" v-for="(item, index) in resourceLists" :key="index" v-if="index >= resourceListsConfig.startNum">
          <template v-for="(config, config_i) in resourceListsConfig.complicatedItem">
            <!-- 需要特殊处理的复杂项 -->
            <!-- img 图片 -->
            <div :key="config_i" v-if="config.name == 'img'" class="ui_list_pic_28_resourcelists_li_imgcontainter" v-show="showImgIndex == index && resourceListsConfig.showItem.indexOf('img') !== -1">
              <label class="ui_list_pic_28_resourcelists_img_label">{{config.display}}</label>
              <img class="ui_list_pic_28_resourcelists_li_img" v-bind="{class: 'ui_list_pic_28_resourcelists_' + config.field}" :src="item[keys[config.field]]" alt="暂无图片"/>
            </div>

            <!-- title 标题 -->
            <span :key="config_i" v-else-if="config.name == 'title'" v-show="resourceListsConfig.showItem.indexOf('title') !== -1"  :class="{'ui_list_pic_28_resourcelists_li_hover': showImgIndex == index}" @click="toDetail(item)" @mouseenter="toggleShowImg(index)" class="ui_list_pic_28_resourcelists_li_resnamecontainter">
              <span class="ui_list_pic_28_resourcelists_li_tips"></span><!-- 箭头 -->
              <label class="ui_list_pic_28_resourcelists_resname_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_29_resourcelists_' + config.field}" v-html="item[keys[config.field]]"></span>
            </span>

            <!-- price 价格 -->
            <span :key="config_i" v-else-if="config.name == 'price'" v-show="resourceListsConfig.showItem.indexOf('price') !== -1" class="ui_list_pic_29_resourcelists_li_pricecontainter">
              <label class="ui_list_pic_28_resourcelists_price_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_28_resourcelists_' + config.field}">{{ item[keys[config.field]]  | formatPriceNew }}</span>
            </span>

            <!-- time 时间 -->
            <span :key="config_i" v-else-if="config.name == 'time'" v-show="resourceListsConfig.showItem.indexOf('time') !== -1" class="ui_list_pic_28_resourcelists_li_timecontainter">
              <label class="ui_list_pic_28_resourcelists_time_label">{{config.display}}</label>
              <span v-bind="{class: 'ui_list_pic_28_resourcelists_' + config.field}">{{ item[keys[config.field]] }}</span>
            </span>

            <!-- 其他不需要特殊处理的简单项 -->
            <span :key="config_i" v-else v-bind="{class: 'ui_list_pic_28_resourcelists_' + config.field}">
              <label class="ui_list_pic_28_resourcelists_li_label">{{config.display}}</label>
              <span class="ui_list_pic_28_resourcelists_other">{{ item[keys[config.field]] }}</span>
            </span>

          </template>
        </li>
      </ul>

      <div class="ui_list_pic_28_resourcelists_nodata" v-if="resourceLists && resourceLists.length == 0">暂无数据</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Get, Post, DrawImage, getFieldAdapter, toOtherPage } from "@common";
import PROJECT_CONFIG from "projectConfig";

export default {
  name: 'ui_list_pic_28',
  props: ['namespace', 'modulename'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      columnLists: [],  // 栏目对象
      keys: {}, // 接口字段容器
      showNavIndex: 0, // 当前展示导航
      showImgIndex: 0, // 当前展示资讯图片
      resourceLists: [], // 某一栏目下对应的数据
      resourceListsConfig: {}, // 资源列表配置
      moreBtnColumnObj: {}, // 去更多按钮调取对象 如果有子栏目：去更多传的是当前栏目列表第一个子元素的所属栏目id; 如果没有子栏目：去更多传的是该栏目id
      requestParams: "", // 去详情页需要传查询list.do的所有参数
    };
  },

  mounted () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.list_pic_28[this.modulename];
    this.resourceListsConfig = this.CONFIG.getResourceLists;
    this.showImgIndex = this.resourceListsConfig.startNum;
    this.keys = getFieldAdapter(this.CONFIG.getResourceLists.sysAdapter, this.CONFIG.getResourceLists.typeAdapter);

    if (this.CONFIG.haveChildNavTag) { // 有子栏目作为切换标签才请求子栏目切换列表
      this.getColumnLists();
    } else { // 否则只请求子栏目列表下的数据
      this.getResourceLists(this.showNavIndex)
    }
  },

  methods: {
    toggleShowImg (index) {  // 鼠标移上去显示当前这条咨询的图片
      this.showImgIndex = index;
      this.dealResourceImg(this.showImgIndex);
    },
    getColumnLists () {
      let columnLists = this.CONFIG.getColumnList;
      // TODO： post方式请求传参 request payload && query string parameters
      this.moreBtnColumnObj[this.keys.colId] = columnLists.params.colId;
      Post(CONFIG.BASE_URL + columnLists.url + '?colId=' + columnLists.params.colId).then((rep) => {
        let datas = rep.data;
        if (datas.success && datas.data.length > 0) { // 有子栏目
          this.columnLists = datas.data;
          // console.log(this.columnLists);
          let colId = this.columnLists[0].id;
          this.getResourceLists(this.showNavIndex, colId);
        }
      });
    },
    getResourceLists (index, colId) {
      let _this = this;
      this.showNavIndex = index;
      this.resourceLists = []; //初始化数据
      let paramsObj = Object.assign({}, this.resourceListsConfig.params);

      paramsObj.pageSize = this.resourceListsConfig.maxNum ? this.resourceListsConfig.maxNum + '' : '15';
      paramsObj.conditions.map((item) => {
        if (item.hasOwnProperty('pub_col_id')) {
          item.pub_col_id = colId ? colId : item.pub_col_id;
          if (_this.CONFIG.haveChildNavTag && _this.CONFIG.toMore.hasOwnProperty('isGetSubCol') && _this.CONFIG.toMore.isGetSubCol) {
            _this.moreBtnColumnObj[_this.keys.colId] = colId ? colId : item.pub_col_id;
          } else {
              _this.moreBtnColumnObj[_this.keys.colId] = _this.CONFIG.getColumnList.params.colId;
          }
        }
      })
      paramsObj.conditions = JSON.stringify(paramsObj.conditions);
      this.requestParams = paramsObj;
      Post(CONFIG.BASE_URL + this.resourceListsConfig.url, paramsObj).then((rep) => {
        let datas = rep.data;
        if (datas.success && datas.result && datas.result.length > 0) {
          this.resourceLists = datas.result;

        }
      });
    },
    dealResourceImg (index) {
      var imgDomArr = document.getElementsByClassName('ui_list_pic_28_resourcelists_li_img');
      imgDomArr.onload = DrawImage(imgDomArr[index], this.CONFIG.infoImgWidth, this.CONFIG.infoImgHeight);
    },
    toMore (item) { // 去更多列表
      window.open(toOtherPage(item, this.CONFIG.toMore, this.keys));
    },
    toDetail (item) { // 去详情
      let detailParams = "";
      for (let param in this.requestParams) {
        detailParams = detailParams + '&' + param + '=' + this.requestParams[param]
      }
      window.open(toOtherPage(item, this.CONFIG.toDetail, this.keys) + detailParams);
    }
  }
}

</script>
<style>
.ui_list_pic_28_li {
  display: inline-block;
}

.ui_list_pic_28_nav {
  margin: 10px 10px;
  cursor: pointer;
}

.ui_list_pic_28_li_selectedNav {
  color: #da0b2d;
}

.ui_list_pic_28_resourcelists_ul {
  padding-left: 230px;
  position: relative;
}

.ui_list_pic_28_resourcelists_li {
  height: 30px;
  line-height: 30px;
}

.ui_list_pic_28_resourcelists_li_imgcontainter {
  cursor: pointer;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 200px;
  height: 160px;
  overflow: hidden;
  background-color: #eee;
}

.ui_list_pic_28_resourcelists_li_img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.ui_list_pic_28_resourcelists_li_resnamecontainter {
  cursor: pointer;
}

.ui_list_pic_28_resourcelists_li_hover {
  color: #3eac5b;
  font-weight: bold;
}

.ui_list_pic_28_resourcelists_li_hover .ui_list_pic_28_resourcelists_li_tips {
  position: relative;
}

.ui_list_pic_28_resourcelists_li_hover
  .ui_list_pic_28_resourcelists_li_tips:after {
  content: "";
  position: absolute;
  top: 4px;
  left: -12px;
  border-top: 7px solid transparent;
  border-right: 7px solid #3eac5b;
  border-bottom: 7px solid transparent;
}

.ui_list_pic_28_comtitle {
  display: inline-block;
}

.ui_list_pic_28_tomore_icon {
  transform: rotateZ(180deg);
}

.ui_list_pic_28_tomore_con {
  cursor: pointer;
}
</style>