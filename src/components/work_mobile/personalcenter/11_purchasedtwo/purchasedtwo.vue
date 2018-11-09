<template>
    <div class="work_mobile_personalcenter_11">
      <div class="work_mobile_personalcenter_11_tabs">
        <ul class="work_mobile_personalcenter_11_tabs_ul">
          <li class="work_mobile_personalcenter_11_tabs_li" v-for="(tab,index) in tabsList" :class="[index == currentIndex ? 'isActive' : '']" @click="changeTab(tab,index)" :key="index">
            {{tab.title}}
          </li>
        </ul>
      </div>
      <div class="work_mobile_personalcenter_11_book" v-if="0 == currentIndex">
        <div class="work_mobile_personalcenter_11_select">
          <!-- <select v-model="selected">
            <option v-for="option in options" :value="option.value">{{option.text}}</option>
          </select> -->
          <span v-for="(option, index) in options" :key="index" @click="selected = option.value" :class="[{selectedModel: selected == option.value}, 'work_mobile_personalcenter_11_select' +  index]">
            {{option.text}}
          </span>
        </div>
        <div v-if="selected == '1'" class="work_mobile_personalcenter_11_book-list">
          <van-loading color="black" v-if="isLoading"/>
          <ul class="work_mobile_personalcenter_11_book-list_ul">
            <li class="work_mobile_personalcenter_11_book-list_li_one" v-for="(book, index) in boughtBooksList" :key="index" v-if="boughtBooksList && boughtBooksList.length > 0">
              <div v-if="book.midPic" class="work_mobile_personalcenter_11_book-list_li_img-box">
                <img class="work_mobile_personalcenter_11_book-list_li_img-box_img" :src="book.midPic" :alt="display.noPicture || '暂无图片'" @click="toBookPage(book)"/>
              </div>
              <div v-else class="work_mobile_personalcenter_11_book-list_li_img-box">
                <img class="work_mobile_personalcenter_11_book-list_li_img-box_img" :src="book.bigPic" :alt="display.noPicture || '暂无图片'" @click="toBookPage(book)"/>
              </div>
              <div class="work_mobile_personalcenter_11_book-list_li_content-box_bookName" @click="toBookPage(book)">
                {{book.productName}}
              </div>
            </li>
          </ul>
          <span v-if="isHasBook">{{display.noData[currentIndex]}}</span>
        </div>
        <div v-if="selected == '2'" class="work_mobile_personalcenter_11_book-list">
          <van-loading color="black" v-if="isLoading"/>
          <ul class="work_mobile_personalcenter_11_book-list_ul">
            <li class="work_mobile_personalcenter_11_book-list_li_two" v-for="(book, index) in boughtBooksList" :key="index" v-if="boughtBooksList && boughtBooksList.length > 0">
              <div class="work_mobile_personalcenter_11_book-list_li_img-box">
                <img class="work_mobile_personalcenter_11_book-list_li_img-box_img" :src="book.midPic" :alt="display.noPicture || '暂无图片'" />
              </div>
              <div class="work_mobile_personalcenter_11_book-list_li_content-box">
                <div class="work_mobile_personalcenter_11_book-list_li_content-box_bookName">{{display.bookName || '书名：'}}
                  <span v-text="book.productName"></span>
                </div>
                <div class="work_mobile_personalcenter_11_book-list_li_content-box_author">{{display.author || '作者：'}}
                  <span v-text="book.author"></span>
                </div>
              </div>
            </li>
          </ul>
          <span v-if="isHasBook">{{display.noData[currentIndex]}}</span>
        </div>
      </div>
      <div class="work_mobile_personalcenter_11_periodical" v-if="1 == currentIndex">
        <div class="work_mobile_personalcenter_11_book-list_periodical">
          <van-loading color="black" v-if="isLoading"/>
          <ul class="work_mobile_personalcenter_11_book-list_periodical_ul">
            <li class="work_mobile_personalcenter_11_book-list_periodical_li" v-for="(book, index) in boughtBooksList" :key="index" v-if="boughtBooksList && boughtBooksList.length > 0">
              <div class="work_mobile_personalcenter_11_book-list_periodical_li_img-box">
                <img class="work_mobile_personalcenter_11_book-list_periodical_li_img-box_img" @click="toMagazinePage(book)" :src="book.pub_picSmall" :alt="display.noPicture || '暂无图片'"/>
              </div>
              <div class="work_mobile_personalcenter_11_book-list_periodical_li_content-box">
                <div class="work_mobile_personalcenter_11_book-list_periodical_li_content-box_bookName">{{display.periodicalName || '期刊名：'}}
                  <span v-text="book.pub_resource_name"  @click="toMagazinePage(book)"></span>
                </div>
                <div class="work_mobile_personalcenter_11_book-list_periodical_li_content-box_author">{{display.periodicalContent || '期刊内容：'}}
                  <span v-text="book.MAGAZINE_SYNOPSIS"></span>
                </div>
              </div>
            </li>
          </ul>
          <span v-if="isHasPeriodical">{{display.noData[currentIndex]}}</span>
        </div>
      </div>
      <div class="work_mobile_personalcenter_11_service" v-if="2 == currentIndex">
        <div class="work_mobile_personalcenter_11_book-list_service">
          <van-loading color="black" v-if="isLoading"/>
          <ul class="work_mobile_personalcenter_11_book-list_service_ul">
            <li class="work_mobile_personalcenter_11_book-list_service_li" v-for="(book, index) in boughtBooksList" :key="index" v-if="boughtBooksList && boughtBooksList.length > 0">
              <div class="work_mobile_personalcenter_11_book-list_service_li_outer-content-box">
                <div class="work_mobile_personalcenter_11_book-list_service_li_img-box_type">{{book.docLibNameReal}}</div>
                <div class="work_mobile_personalcenter_11_book-list_service_li_content-box">
                  <div class="work_mobile_personalcenter_11_book-list_service_li_content-box_title" @click="toKnowledgePage(book)">
                    <span v-text="book.docName"></span>
                  </div>
                  <div :class="{'work_mobile_personalcenter_11_book-list_service_li_content-box_inline':true}">
                    <div class="work_mobile_personalcenter_11_book-list_service_li_content-box_sourceForm">{{display.sourceForm || '资源来源：'}}
                      <span>{{display.knowledgeService || '知识服务'}}</span>
                    </div>
                    <div class="work_mobile_personalcenter_11_book-list_service_li_content-box_sourceType">{{display.sourceType || '来源类型：'}}
                      <span>{{book.docLibNameReal}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <span v-if="isHasService">{{display.noData[currentIndex]}}</span>
        </div>
      </div>
    </div>
</template>

<script>
import { Post, Get, mobileLoading, readUtils } from "@common";
import { mapGetters } from "vuex";
import * as interfaces from "@work/login/common/interfaces.js";
import PROJECT_CONFIG from "projectConfig";
import { Loading } from "vant";
import Vue from "vue";
Vue.use(Loading);

export default {
  name: "work_mobile_personalcenter_11",
  props: ["namespace"],
  reused: true,
  data() {
    return {
      CONFIG: null,
      display: "", //用于显示静态文字
      pageIndex: "1", // 页码 从 1 开始
      pageSize: "15", // 每页显示个数
      totalCount: "0", // 订单总个数
      totalPages: "0", // 订单总页数
      boughtBooksList: [], //已购图书列表
      tabsList: [], //选项卡列表
      loginName: "",
      currentIndex: "0",
      tab: {
        type: "2",
        status: "3"
      },
      selected: "1",
      options: [],
      isLoading: "false",
      isHasBook: false,
      isHasPeriodical: false,
      isHasService: false,
      periodicalLetterData: []
    };
  },
  computed: {
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER
    })
  },
  created() {
    this.CONFIG =
      PROJECT_CONFIG[
        this.namespace
      ].work_mobile_personalcenter.work_mobile_personalcenter_11;
    this.display = this.CONFIG.display;
    this.tabsList = this.display.tabsList;
    this.options = this.display.options;
  },
  mounted() {
    this.$bus.$emit(
      this.CONFIG.emitEvent.contextEventName,
      this.display.navTitle
    );
    let _self = this;
    /*检测滚动条*/
    $(window).scroll(() => {
      /**
       * function 下拉底部加载
       * params1: vue对象
       * params2: 回调方法
       */
      if (_self.currentIndex === 1) {
        // 期刊的分页单独处理
        mobileLoading(this, "getperiodicalMore");
      } else {
        mobileLoading(this, "queryMyBoughtBooks");
      }
    });
  },
  methods: {
    //tab切换
    changeTab(tab, index) {
      this.selected = "1";
      this.tab = tab;
      //切换时需要重置pageIndex和pageSize
      this.pageIndex = this.CONFIG.getBoughtBooks.params.pageIndex;
      this.pageSize = this.CONFIG.getBoughtBooks.params.pageSize;
      //切换tab
      this.currentIndex = index;
      //因为数组是拼接的，所以获取数据前先清空数据列表
      this.boughtBooksList = [];
      $(window).scrollTop(0);
      //获取数据
      switch (index) {
        case 0:
          this.queryMyBoughtBooks(this.loginName, this.tab);
          break; //去调图书接口
        case 1:
          this.queryMyBoughtBooks(this.loginName, this.tab);
          break; //去调期刊接口
        case 2:
          this.queryMyBoughtBooks(this.loginName, this.tab);
          break; //去知识服务外链
        // case 2: window.open(this.CONFIG.toKnowledgeService); break;  //去知识服务外链
      }
    },
    initData(loginName) {
      this.pageIndex = this.CONFIG.getBoughtBooks.params.pageIndex;
      this.pageSize = this.CONFIG.getBoughtBooks.params.pageSize;
      let params = Object.assign({}, this.CONFIG.getBoughtBooks.params);
      //将需要变化的参数传进来
      // params.type = type;
      // params.status = status;
      this.tab.type = params.type;
      this.tab.status = params.status;
      this.queryMyBoughtBooks(loginName, this.tab); //页面初始化获取已购买图书的全部数据
    },
    queryMyBoughtBooks(loginName, tab) {
      this.isLoading = true;
      this.isHasBook = false;
      this.isHasPeriodical = false;
      this.isHasService = false;
      let params = Object.assign({}, this.CONFIG.getBoughtBooks.params);
      let _self = this;
      let pageSizeCount = this.pageSize;
      getData(pageSizeCount);
      function getData(pageSize) {
        Get(
          CONFIG.BASE_URL +
            _self.CONFIG.getBoughtBooks.url +
            "?loginName=" +
            (loginName ? loginName : _self.member.loginName) +
            "&pageIndex=" +
            _self.pageIndex +
            "&pageSize=" +
            pageSize +
            "&type=" +
            (tab ? tab.type : _self.tab.type) +
            "&siteId=" +
            CONFIG.SITE_CONFIG.siteId +
            "&productType=" +
            (_self.tab.productType ? _self.tab.productType : "") +
            "&status=" +
            (tab ? tab.status : _self.tab.status)
        ).then(resp => {
          let res = resp.data;
          _self.isLoading = false;
          if (res.result == "1" && res.data.length > 0) {
            _self.totalCount = res.totalCount;
            if (_self.currentIndex !== 1) {
              // 知识服务条目处理
              res.data.forEach(item => {
                item.docLibNameReal = _self.getStaticText(item.docLibName);
              });
              _self.boughtBooksList = _self.boughtBooksList.concat(res.data);
              _self.totalPages = res.totalPages;
            } else {
              _self.periodicalLetterData = res.data;
              // 期刊再次请求
              if (pageSize < _self.totalCount) {
                pageSize = _self.totalCount;
                // 一次取完期刊的数据
                getData(pageSize);
              } else {
                _self.getperiodicalMore(pageSize);
              }
            }
          } else {
            _self.isHasBook = true;
            _self.isHasPeriodical = true;
            _self.isHasService = true;
          }
        });
      }
    },
    getperiodicalMore(pageSize) {
      /* 初始化条件 */
      let conditions = [
        { MAGAZINE_PERIOD_NUM: [], op: "in" },
        { MAGAZINE_PUBLISH_YEAR: [], op: "in" },
        { pub_resource_name: [], op: "in" }
      ];
      let conditions_str = "";
      let changedKeys = []; //有变化的key名
      /* 遍历数据 */
      this.periodicalLetterData.forEach(item => {
        /* 遍历数据中每一个属性 */
        for (const key in item) {
          conditions.forEach(condition => {
            /* 遍历条件 */
            for (const condition_key in condition) {
              /* 遍历每个条件中每个属性 */
              const element = condition[condition_key];
              if (key == condition_key) {
                /* 对比赋值 */
                condition[condition_key].push(item[key]);
                changedKeys.push(condition_key);
              }
            }
          });
        }
      });
      /* 去重 */
      changedKeys = [...new Set(changedKeys)];
      conditions.forEach(item => {
        changedKeys.forEach(key => {
          if (item.hasOwnProperty(key)) {
            item[key] = [...new Set(item[key])].join(" ");
          }
        });
      });
      conditions_str = JSON.stringify(conditions);
      let paramsObj = {
        conditions: conditions_str,
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: this.pageIndex,
        pageSize: this.pageSize,
        searchText: ""
      };
      Post(CONFIG.BASE_URL + this.CONFIG.url, paramsObj).then(res => {
        this.isLoading = false;
        this.boughtBooksList = this.boughtBooksList.concat(res.data.result);
        this.totalCount = res.totalCount;
        if (this.boughtBooksList.length < 1) {
          this.isHasBook = true;
          this.isHasPeriodical = true;
          this.isHasService = true;
        }
      });
    },
    // contentType //内容类型 91纸质书 94电子书 PORTAL_WORKS:作品
    toBookPage(book) {
      if (book.contentType === "91") {
        var url =
          (this.CONFIG.toDetailUrl
            ? this.CONFIG.toDetailUrl
            : "./bookdetail.html") +
          "?pubId=" +
          book.pubId;
        window.open(url, "_self");
      } else if (book.contentType === "94") {
        /* 新增阅读接口返回url 依赖全局配置'晒书阅读配置 CONFIG.SHAISHU_READ'
          CONFIG.SHAISHU_READ.type 阅读文件类型
        */
        if (CONFIG && CONFIG.SHAISHU_READ) {
          let resId = book.resourceId;
          let resType = book.resourseType;
          let type = CONFIG.SHAISHU_READ.type;
          let proType = book.productType;
          // let siteId = CONFIG.SITE_CONFIG.siteId;
          readUtils.shaishuRead.full(resId, resType, type, proType);
        } else {
          let params = Object.assign({}, this.CONFIG.toProbationParams);
          var url =
            CONFIG.READ_URL +
            "?bookId=" +
            book.resourceId +
            "&readType=" +
            (params.readType ? params.readType : "0") +
            "&bookName=" +
            book.resourceName +
            "&userName=&siteType=" +
            (params.siteType ? params.siteType : "0");
          window.open(url, "_self");
        }
      }
    },
    toMagazinePage(book) {
      // window.location.href = this.CONFIG.toPeriodicalDetailsPageUrl ? this.CONFIG.toPeriodicalDetailsPageUrl : './maginfo.html' + '?pubId='+magazine.pubId;
      if (CONFIG && CONFIG.SHAISHU_READ) {
        let resId = book.resourceId;
        let resType = book.resourseType;
        let type = CONFIG.SHAISHU_READ.type;
        let proType = book.productType;
        // let siteId = CONFIG.SITE_CONFIG.siteId;
        readUtils.shaishuRead.full(resId, resType, type, proType);
      } else {
        let params = Object.assign({}, this.CONFIG.toProbationParams);
        var url =
          CONFIG.READ_URL +
          "?bookId=" +
          book.pub_resource_id +
          "&readType=" +
          (params.readType ? params.readType : "0") +
          "&bookName=" +
          book.pub_resource_name +
          "&userName=&siteType=" +
          (params.siteType ? params.siteType : "0");
        if (this.tab.productType) {
          url += "&doclibCode=" + this.tab.productType;
        }
        window.open(url, "_self");
      }
    },
    toKnowledgePage(book) {
      let url =
        this.CONFIG.toKnowledgePageUrl +
        book.docLibName +
        "?docId=" +
        book.docId +
        "&title=" +
        book.docName +
        "&docLibId=" +
        book.docLibId;
      window.open(url, "_target");
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
  },
  watch: {
    member: function(newValue, oldValue) {
      if (newValue.loginName && newValue.loginName != oldValue.loginName) {
        this.initData(newValue.loginName); // 初始化数据之后再执行查询已购图书的方法
        this.loginName = newValue.loginName;
      }
    }
  }
};
</script>

<style scoped>
.work_mobile_personalcenter_11_service {
  margin-top: 1.06rem;
}
.work_mobile_personalcenter_11_book-list_service_li {
  padding: 0.22rem 0.4rem 0.22rem 1rem;
  margin-bottom: 0.15rem;
  overflow: hidden;
  font-size: 0.2rem;
  color: #666;
  background: #fff;
  position: relative;
  /* background: #fff url(../img/li-bor.png) repeat-y; */
}
.work_mobile_personalcenter_11_book-list_service_li_img-box {
  float: left;
  width: 2.2rem;
  height: 3.2rem;
  margin-right: 0.3rem;
  background: #f8f8f8;
}
.work_mobile_personalcenter_11_book-list_service_li_content-box_title {
  margin-bottom: 0.18rem;
  font-size: 0.3rem;
  white-space: nowrap;
  -ms-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #000;
}
.work_mobile_personalcenter_11_book-list_service_li_content-box_desc {
  font-size: 0.2rem;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.work_mobile_personalcenter_11_book-list_service_li_content-box_author,
.work_mobile_personalcenter_11_book-list_service_li_content-box_sourceForm,
.work_mobile_personalcenter_11_book-list_service_li_content-box_publicTime,
.work_mobile_personalcenter_11_book-list_service_li_content-box_sourceType,
.work_mobile_personalcenter_11_book-list_service_li_content-box_desc {
  margin-bottom: 0.1rem;
}
.work_mobile_personalcenter_11_book-list_service_li_content-box_sourceForm02 {
  text-align: right;
  width: 100%;
}
.work_mobile_personalcenter_11_book-list_service_li_content-box_desc {
  font-size: 0.18rem;
}
.work_mobile_personalcenter_11_book-list_service_li_img-box_type {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  font-size: 0.24rem;
  width: 0.7rem;
  /* height: .7rem; */
  border-radius: 0.1rem;
  border: 1px solid #124be0;
  text-align: center;
  line-height: 0.3rem;
  padding-top: 0.04rem;
  color: #124be0;
}
.work_mobile_personalcenter_11_book-list_service_li_content-box_inline
  .work_mobile_personalcenter_11_book-list_service_li_content-box_author,
.work_mobile_personalcenter_11_book-list_service_li_content-box_inline
  .work_mobile_personalcenter_11_book-list_service_li_content-box_publicTime,
.work_mobile_personalcenter_11_book-list_service_li_content-box_inline
  .work_mobile_personalcenter_11_book-list_service_li_content-box_sourceForm,
.work_mobile_personalcenter_11_book-list_service_li_content-box_inline
  .work_mobile_personalcenter_11_book-list_service_li_content-box_sourceType {
  display: inline-block;
  margin-right: 0.5rem;
}

.isActive {
  color: #1b6d85;
  background-color: #cccccc;
}
.work_mobile_personalcenter_11_tabs {
  overflow: hidden;
}
.work_mobile_personalcenter_11_select {
  text-align: right;
  padding-right: 20px;
}
.work_mobile_personalcenter_11_book-list_ul {
  padding: 20px;
  overflow: hidden;
}
.work_mobile_personalcenter_11_tabs_li {
  float: left;
  width: 100px;
  height: 30px;
  line-height: 30px;
  margin: 10px;
  text-align: center;
}
.work_mobile_personalcenter_11 {
  font-size: 14px;
}
.work_mobile_personalcenter_11_book-list_li_one {
  min-height: 100px;
  width: 50%;
  float: left;
}
.work_mobile_personalcenter_11_book-list_li_two {
  height: 100px;
  width: 100%;
}
.work_mobile_personalcenter_11_book-list_li_img-box {
  width: 30%;
  float: left;
}
.work_mobile_personalcenter_11_book-list_li_content-box {
  width: 70%;
  float: right;
}
</style>
