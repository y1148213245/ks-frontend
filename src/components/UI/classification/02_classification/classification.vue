<!--  -->
<template>
  <div class="ui_classification_02">
        <div class="ui_classification_02_all" @click="showAllCata()">
          <span class="ui_classification_02_allCata">{{getStaticText('allClassifications') ? getStaticText('allClassifications') : '全部分类'}}</span>
          <i :class="{'el-icon-arrow-down': !detailshow}"></i>
          <i :class="{'el-icon-arrow-up': detailshow}"></i>
        </div>
        <div class="ui_classification_02_detail" :class="{ui_classification_02_detailshow: detailshow}">
          <div class="ui_classification_02_detailcon">
            <dl class="ui_classification_02_dl" v-for="(entry,index) in (navCategory || 0)" v-show="index<col_loading_num" :key="index">
              <dt class="ui_classification_02_dt"><a href="javascript:" @click="toBookList(entry.id)" class="one_title f14" v-text="entry.text"></a></dt>
              <dd class="ui_classification_02_dd">
                <template v-for="(sub_entry,index) in entry.children">
                  <a href="javascript:" @click="toBookList(sub_entry.cascadeId)" :key="index" v-text="sub_entry.text"></a>
                  <span class="ui_classification_02_subline">|</span>
                </template>
              </dd>
            </dl>
          </div>
          <a v-if="col_loading_num!=999" class="ui_classification_02_showAllCon" @click="bindShowAll()" href="javascript:">
            <span :class="{ui_classification_02_showallbtn:showAll}">{{getStaticText('showAll') ? getStaticText('showAll') : '显示全部'}}</span>
            <span :class="{ui_classification_02_showallbtn:!showAll}">{{getStaticText('closeAll') ? getStaticText('closeAll') : '收起全部'}}</span>
          </a>
        </div>
      </div>
</template>

<script>
import { Get } from "@common";
import PROJECT_CONFIG from "projectConfig";

export default {
  name: 'ui_classification_02',
  props: ['namespace'],
  reused: true,
  data () {
    return {
      CONFIG: "",
      navCategory: [],  // 图书分类导航
      col_loading_num: 5,
      showAll: false, // 是否展示全部分类
      detailshow: false,
    };
  },

  mounted () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].classification.classification_02;
    this.queryNavCategory();  // 左侧图书分类导航
  },
  methods: {
    bindShowAll: function () { //更多分类
      this.col_loading_num = this.col_loading_num === 5 ? this.navCategory.length + 1 : 5;
      this.showAll = !this.showAll;
    },
    queryNavCategory () {
      Get(CONFIG.BASE_URL+this.CONFIG.url, { "params": this.CONFIG.params }).then((res) => {
        var data = res.data;
        if (data && data.length) {
          this.navCategory = data;
        }
      });
    },
    showAllCata () {
      this.detailshow = !this.detailshow;
    },
    toBookList (id) {  // 去图书列表
      window.location.href = (this.CONFIG.bookListUrl ? this.CONFIG.bookListUrl : '../pages/bookList.html') + '?cascadeId=' + id + '&cascadId=' + id;
    },
    getStaticText (text) {
      if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]) {
        return this.CONFIG.staticText[text]
      } else {
        return false
      }
    },
  }
}

</script>
<style>
.ui_classification_02_all {
  border-right: 1px solid #908f8f;
  position: relative;
  cursor: pointer;
  font-size: 16px;
}

.ui_classification_02_allCata {
  height: 25px;
  padding-left: 30px;
  background: url(./assets/img/allcata.png) no-repeat -2px -85px;
}

.ui_classification_02_detail {
  display: none;
}

.ui_classification_02_detailshow {
  display: block;
}

.ui_classification_02_showallbtn {
  display: none;
}

.ui_classification_02_dl {
  padding: 5.88px 17px;
}

.ui_classification_02_dt {
  height: 40px;
  line-height: 40px;
}

.ui_classification_02_dd {
  margin-left: 0px;
}

.ui_classification_02_dd .ui_classification_02_subline {
  padding: 0px 10px;
}

.ui_classification_02_dd .ui_classification_02_subline:last-child {
  visibility: hidden;
}

.ui_classification_02_showAllCon {
  float: right;
  padding: 10px;
}
</style>
