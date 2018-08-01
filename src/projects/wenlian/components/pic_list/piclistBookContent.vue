<!-- 购买该书的用户还买  / 该作者其他图书 Created by song 2018/1/18 -->

<!-- 2018/03/31 已重新封装改组件  -->


<template>
  <div class="ui_pic_list_19 ui_pic_list_19_skin">
        <div class="titleHead" v-text="title"></div>
        <div class="listWrapper">
          <div v-if="booklist && booklist.length>0">
            <dl class="listDl" v-for="(entry, index) in booklist" v-if="index < 4" :key="index">
              <dt class="listDt">
                <img class="dtImg" :src="entry.bigPic"  alt="暂无图片" onload="DrawImage(this,90,130)"/>
              </dt>
              <dd class="listDd">
                <p class="resourceName">
                  <a class="resourceLink" :href="'../pages/bookdetail.html?pubId=' + entry.pubId" v-text="entry.resourceName || '暂无书名'" :title="entry.resourceName"></a>
                </p>
                <p class="author" :title="entry.author">作者: {{entry.author || '暂无作者'}}</p>
                <p class="priceCon">
                  <span class="memberPrice">{{entry.memberPrice | formatMoney}}</span>
                  <span class="ebPrice">{{entry.ebPrice | formatMoney}}</span>
                </p>
                <p class="star">
                  <el-rate v-model="entry.starNum - 0" :show-text="false" :max="5" disabled disabled-void-color="#c1c1c0"></el-rate>
                  <span class="comment">{{entry.commentNums || 0}}条评论</span>
                </p>
                <p class="abstract" :title="entry.bookAbstract" v-html="entry.bookAbstract || '暂无简介'"></p>
              </dd>
            </dl>
          </div>
          <div v-if="booklist && booklist.length == 0">暂无数据</div>
        </div>
      </div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import { Post, Get } from "@common";
import * as interfaces from "@work/login/common/interfaces.js";
import * as type from "@work/bookDetail/common/interfaces.js";
import Vue from 'vue';
import URL from "url";
import PROJECT_CONFIG from "projectConfig";

export default {
  name: "components_pic_list",
  reused: true,
  props: ['namespace', 'modulename'],
  data () {
    return {
      CONFIG: null,
      title: '',
      booklist: [],
      pubId: '',
    };
  },
  computed: {
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER
    }),
  },
  created () {
    let _this = this;
    this.$bus.$on('searchAuthor', function (data) {
      if (_this.modulename == 'otherbook') {
        _this.otherbook(data);
      }
    });
  },
  mounted () {
    this.pubId = URL.parse(window.location.href, true).query.pubId;
    let moduleName = this.modulename;
    this.CONFIG = PROJECT_CONFIG[this.namespace].picListBook[moduleName];
    this.title = this.CONFIG.title;
  },

  methods: {
    userbook (loginName) {  // 购买该书的用户还买
      let paramsObj = Object.assign({}, this.CONFIG.params);
      paramsObj.loginName = loginName;
      paramsObj.pubId = this.pubId;
      Get(CONFIG.BASE_URL+this.CONFIG.url, { params: paramsObj }).then((rep) => {
        if (rep.data.result === '1') {
          this.booklist = rep.data.data;
        }
      });
    },
    otherbook (author) { // 该作者其它图书 list.do接口
      let params = Object.assign({}, this.CONFIG.params);
      let isHas = false;
      params.conditions.map((item) => {
        if (item.hasOwnProperty('BOOK_SYS_AUTHORS')) {
          item.BOOK_SYS_AUTHORS = author
          isHas = true;
        }
      })
      if (!isHas) params.conditions.push({ BOOK_SYS_AUTHORS: author });

      params.conditions = JSON.stringify(params.conditions);
      Post(CONFIG.BASE_URL+this.CONFIG.url, params).then((rep) => {
        if (rep.data.success && rep.data.result.length > 0) {
          var tempList = [];
          var data = rep.data.result;
          for (var i = 0; i < data.length; i++) {
            tempList.push({
              bigPic: data[i].pub_POSTER && data[i].pub_POSTER.length ? data[i].pub_POSTER[0] : "",
              pubId: data[i].id,
              resourceName: data[i].pub_resource_name,
              author: data[i].BOOK_SYS_AUTHORS,
              memberPrice: data[i].prod_member_price,
              ebPrice: data[i].prod_sale_price,
              starNum: data[i].pub_star_num,
              commentNums: data[i].pub_comment_num,
              bookAbstract: data[i].BOOK_SYNOPSIS,
            })
          }
          this.booklist = tempList;
        }
      });
    }
  },
  filters: {
    formatMoney: function (value) {
      if (value) {
        return "¥ " + parseFloat(value).toFixed(2);
      } else {
        return "¥ 0.00" ;
      }
    }
  },
  watch: {
    member: function (newValue, oldVlue) {
      if (newValue.loginName && newValue.loginName != oldVlue.loginName && this.modulename == 'userbook') {
        this.userbook(newValue.loginName);
      }
    }
  }
}

</script>
<style>
/* 结构样式 */
.ui_pic_list_19 {
  margin-top: 35px;
  clear: both;
}

.ui_pic_list_19 .titleHead {
  padding-left: 15px;
  height: 48px;
  line-height: 48px;
}

.ui_pic_list_19 .listWrapper {
  padding: 20px 32px;
  border-width: 1px;
  border-top: 0px;
  overflow: hidden;
}

.ui_pic_list_19 .listWrapper .listDl {
  padding-right: 15px;
  float: left;
  margin-top: 0;
  margin-bottom: 20px;
}

.ui_pic_list_19 .listDl .listDt {
  padding-right: 15px;
  float: left;
  line-height: 1.42857143;
}

.ui_pic_list_19 .listDl .listDd {
  width: 136px;
  float: left;
}

.ui_pic_list_19 .listDl .listDd .resourceName {
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0 0 10px;
}

.ui_pic_list_19 .resourceName .resourceLink {
  display: inline-block;
  width: 136px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.ui_pic_list_19 .listDl .author {
  display: inline-block;
  width: 136px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 0 0 10px;
}

.ui_pic_list_19 .listDl .priceCon {
  padding-bottom: 3px;
  margin: 0 0 10px;
}

.ui_pic_list_19 .listDl .priceCon .memberPrice {
  margin-right: 4px;
}

.ui_pic_list_19 .listDl .star {
  margin: 0 0 10px;
}

.ui_pic_list_19_skin .listDl .star i {
  margin-right: 2px;
}

.ui_pic_list_19 .listDl .star .comment {
  float: right;
  margin-top: -21px;
  margin-left: 79px;
  position: absolute;
}

.ui_pic_list_19 .listDl .abstract {
  width: 136px;
  max-height: 66px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-height: 15px;
  margin: 0 0 10px;
}
/* end 结构样式 */

/* 皮肤样式 */
.ui_pic_list_19_skin .titleHead {
  font-size: 14px;
  color: #737373;
  background: #eaeaea;
  font-weight: bold;
}

.ui_pic_list_19_skin .listWrapper {
  border-style: solid;
  border-color: #d7d7d7;
}

.ui_pic_list_19_skin .listWrapper .listDl.listDt {
  font-weight: bold;
}

.ui_pic_list_19_skin .listDl .listDd .resourceName {
  font-size: 14px;
}

.ui_pic_list_19_skin .resourceName .resourceLink {
  color: #c50000;
  text-decoration: none;
}

.ui_pic_list_19_skin .resourceName .author {
  color: #8d8c8c;
}

.ui_pic_list_19_skin .listDl .priceCon .memberPrice {
  color: #c50000;
}

.ui_pic_list_19_skin .listDl .priceCon .ebPrice {
  text-decoration: line-through;
  color: #9c9595;
  font-size: 10px;
}

.ui_pic_list_19_skin .listDl .abstract {
  color: #878787;
  font-size: 10px;
}

.ui_pic_list_19_skin .listDl .star i {
  font-size: 13px;
}

.ui_pic_list_19_skin .listDl .star .comment {
  color: #515151;
}
/* end 皮肤样式 */
</style>
