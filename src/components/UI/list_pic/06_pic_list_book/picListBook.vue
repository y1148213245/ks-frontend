<template>
  <div class="ui_list_pic_06 ui_list_pic_06_skin">
    <div class="ui_list_pic_06_title">浏览历史记录</div>
    <h6 class="titleHead" v-text="title"></h6>
    <div class="listWrapper">
      <div class="" name="data_column_block">
        <dl class="listCon" v-for="(entry, index) in list" v-if="index<(number || 4)" :key="index">
          <dt class="listDt">
            <a :href="((CONFIG && CONFIG.href )? CONFIG.href : './bookdetail.html?pubId=')+entry.id">
              <img :src="entry && entry.pub_picBig" onload="DrawImage(this,70,84)" :alt="getStaticText('noCover') ? getStaticText('noCover') : '暂无封面'" />
            </a>
          </dt>
          <dd class="jiaobiao" v-text="index+1" v-if="modulename === 'hotsalebank'"></dd>
          <dd class="listDd">
            <p class="title">
              <a :href="((CONFIG && CONFIG.href )? CONFIG.href : './bookdetail.html?pubId=')+entry.id" class="hot_sell_text" v-text="entry.pub_resource_name" :title="entry.pub_resource_name"></a>
            </p>

            <p class="hitcount" v-if="modulename === 'hotsalebank'">{{getStaticText('hits') ? getStaticText('hits') : '点击量：'}}{{entry.pub_read_num || 0}}</p>
            <p :class="{lineHeight: modulename === 'historyrecord'}">{{getStaticText('price') ? getStaticText('price') : '价格：￥'}}
              <span class="price">{{entry.memberPrice?Number(entry.memberPrice).toFixed(2):'0.00'}}</span>
            </p>
            <p class="delete" v-if="modulename === 'historyrecord'">
              <a href="javascript:void(0)" @click="deleteOneHistory(entry.id)">
                <i class="fa fa-trash-o" aria-hidden="true"></i>
              </a>
            </p>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { Post, Get, DrawImage, CookieUtils } from "@common";
import PROJECT_CONFIG from "projectConfig";
import { mapGetters } from "vuex";
import * as interfaces from "@work/login/common/interfaces.js";
import URL from "url";

export default {
  name: "ui_list_pic_06_book_list",
  reused: true,
  props: ["namespace", "number", "modulename"],
  data () {
    return {
      list: [],
      CONFIG: null,
      title: '',
      pubId: ''
    }
  },
  computed: {
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER
    }),
    ...mapGetters({
      bookInfo: 'bookDetail/bookDetailInfo',
    }),
  },
  created () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].list_pic.picListBook[this.modulename];
    this.CONFIG.params.num=2;
    this.pubId = URL.parse(document.URL, true).query.pubId;
  },
  mounted () {
    this.title = this.CONFIG.title;
    this.resourceDetailConfig = this.CONFIG.getBookDetail;
    // this.CONFIG = this.namespace ? PROJECT_CONFIG[this.namespace].list_pic.picListBook : PROJECT_CONFIG.list_pic.picListBook;
    this.hotsalebank();  // 首页 —— 热销排行组件  &  图书详情页 —— 浏览历史组件
  },
  methods: {
    hotsalebank: function () {
      Post(CONFIG.BASE_URL + this.CONFIG.url, this.CONFIG.params || {
        conditions: "[{pub_col_id:'131'},{pub_status:'1'}]",
        groupBy: "pub_resource_id",
        orderBy: "pub_read_num desc",
        pageNo: "1",
        pageSize: this.number || "15",
        searchText: ""
      }).then((rep) => {
        this.list = rep.data.result;
      });
    },
    addgethistorylist: function (loginName) {
      Get(CONFIG.BASE_URL + '/browserHistory/addBrowserHistory.do?pubId=' + this.pubId + '&loginName=' + loginName).then((repsonse) => {
        if (repsonse.data.result === '1') {
          this.gethistorylist(loginName);
        }
      })
    },
    gethistorylist (loginName) {
      let param = Object.assign({}, this.CONFIG.params);
      param.username = loginName;
      Get(CONFIG.BASE_URL + this.CONFIG.url, { params: param }).then((rep) => {
        var data = rep.data.data;
        var hasData = rep.status === 200 && data && Object.prototype.toString.call(data) === "[object Array]" && data.length > 0 ? true : false;
        if (hasData) {
          var dataList = []; // 历史记录返回的数据字段与模板上的不同 处理一下字段名称
          var len = data.length;
          for (var i = 0; i < len; i++) {console.log(data[i].memberPrice)
            var temp = {
              pub_picBig: data[i].bigPic, // 封面图
              pub_read_num: data[i].pub_read_num, //点击量
              memberPrice: data[i].memberPrice,  // 价格
              pub_resource_name: data[i].resourceName, // 书名
              id: data[i].pubId
            };
            dataList.push(temp);
          }
          this.list = dataList;
        } else {
          this.list = [];
        }
      })
    },
    deleteOneHistory (pubId) {
      if (this.member.loginName) {
        Get(CONFIG.BASE_URL + 'browserHistory/deleteOneHistory.do?&loginName=' + this.member.loginName + '&pubId=' + pubId).then((rep) => {
          if (rep.data.result === "1") {
            this.$message({
              type: "success",
              message: this.getStaticText('deleteSuccess') ? this.getStaticText('deleteSuccess') : "删除成功!"
            });
            this.gethistorylist(this.member.loginName);
          } else {
            this.$message({
              type: "error",
              message: this.getStaticText('deleteFailed') ? this.getStaticText('deleteFailed') : "删除失败!"
            });
          }
        })
      } else {
        var tempList = JSON.parse(window.localStorage.getItem('newHistoryLog'));
        for (var i = 0, len = tempList.length; i < len; i++) {
          if (tempList[i].pubId == pubId) {
            tempList.splice(i, 1);  // Array.splice(index, length, [item]) 用于替换、删除、添加  会改变原始数组
            this.$message({
              type: "success",
              message: this.getStaticText('deleteSuccess') ? this.getStaticText('deleteSuccess') : "删除成功!"
            });
            break;
          }
        }
        window.localStorage.setItem('newHistoryLog', JSON.stringify(tempList));
        this.list = tempList;
      }

    },
    unLogHistory () { // 未登录状态下历史记录
      let resourceDetail = {};
      let paramsObj = Object.assign({}, this.resourceDetailConfig.params);
      paramsObj.pubId = this.pubId;
      Get(CONFIG.BASE_URL + this.resourceDetailConfig.url + '?pubId=' + paramsObj.pubId + '&loginName=' + this.loginName).then((rep) => {
        let datas = rep.data;
        if (rep.status == 200 && datas.data) {
          resourceDetail = datas.data;
          this.dealHistory(resourceDetail);
        }
      });
    },
    dealHistory (item) {
      var queryStorage = JSON.parse(window.localStorage.getItem('newHistoryLog')) ? JSON.parse(window.localStorage.getItem('newHistoryLog')) : [];
      for (let i in queryStorage) {
        if (this.bookInfo.resourceName == queryStorage[i].pub_resource_name || this.pubId == queryStorage[i].id ) { // 浏览历史里面已经有了
          queryStorage.splice(i, 1); // 先删除
          break;
        }
      }
      queryStorage.unshift(item);  // 返回长度
      queryStorage.splice(this.number - 1, queryStorage.length - this.number)
      window.localStorage.setItem('newHistoryLog', JSON.stringify(queryStorage)); //存
      this.list = JSON.parse(window.localStorage.getItem('newHistoryLog'));
    },
    getStaticText (text) {
      if (this.CONFIG && this.CONFIG.staticText && this.CONFIG.staticText[text]) {
        return this.CONFIG.staticText[text]
      } else {
        return false
      }
    }
  },
  watch: {
    member: function (newValue, oldValue) {
      if (this.modulename === 'historyrecord') {
        if (newValue.loginName && newValue.loginName !== oldValue.loginName) { // 已经登录时 历史浏览记录从后台请求
          this.addgethistorylist(newValue.loginName);   // 添加历史记录
        } else if (!newValue.loginName) {
          if (this.resourceDetailConfig) { // 后期加的获取图书详情的配置
            this.unLogHistory();
          }
        }
      }
    },
    bookInfo: function (newv, oldv) {
      if (newv.pubId !== oldv.pubId && this.modulename === 'historyrecord') {
        var loginName = this.member.loginName;
        if (!loginName) {    //未登录时 历史浏览记录存 cookie
          this.dealHistory(newv);
        }
      }
    }
  }
}
</script>
<style>
.ui_list_pic_06 {
  margin-top: 30px;
}

.ui_list_pic_06 .titleHead {
  height: 29px;
  line-height: 29px;
  width: 222px;
  text-align: center;
}

.ui_list_pic_06 .listWrapper {
  height: 437px;
  border-width: 2px;
  border-top: none;
  width: 218px;
}

.ui_list_pic_06 .listCon {
  padding: 23px 10px 30px 15px;
  border-bottom-width: 2px;
  margin: 0 7px 0px 10px;
  overflow: hidden;
  position: relative;
  clear: both;
}

.ui_list_pic_06 .listCon .listDt {
  float: left;
}

.ui_list_pic_06 .listCon .jiaobiao {
  position: absolute;
  top: 15px;
  left: 8px;
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  border-radius: 50%;
}

.ui_list_pic_06 .listCon .listDd {
  padding-left: 15px;
  float: left;
}

.ui_list_pic_06 .listCon .title {
  height: 30px;
  line-height: 30px;
}

.ui_list_pic_06 .listCon .hitcount {
  padding-top: 15px;
}

.ui_list_pic_06 .listCon .lineHeight {
  line-height: 35px;
}

.ui_list_pic_06 .listCon .delete {
  background-position: -8px -28px;
  width: 20px;
  height: 20px;
  float: right;
}

.ui_list_pic_06 .listCon .delete a {
  text-indent: -99999px;
  display: inline-block;
  width: 20px;
  height: 20px;
}

.ui_list_pic_06 .hot_sell_text {
  display: inline-block;
  width: 80px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
