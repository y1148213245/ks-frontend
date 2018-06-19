<template>
  <div class="ui_mobile_list_05">
    <div class="ui_mobile_list_05_relatebook_title">
      相关图书
    </div>
    <div class="ui_mobile_list_05_content">
      <ul class="ui_mobile_list_05_relatebook_list" v-if="getRelateBookList && getRelateBookList.length>0">
        <li class="ui_mobile_list_05_relatebook" v-for="(item, index) in getRelateBookList" v-if="index<7" :key="index">
          <a class="ui_mobile_list_05_a">
            <img class="ui_mobile_list_05_img" :src="item[keys.pic]" @click="toDetail(item)">
            <div class="ui_mobile_list_05_bookname" v-text="item && item[keys.Bookname]" @click="toDetail(item)"></div>
            <div class="ui_mobile_list_05_sysAuthor" v-if="item && bookAuthors && bookAuthors.Authorsfield && item[bookAuthors.Authorsfield]">{{bookAuthors.display}}{{item[bookAuthors.Authorsfield]}}</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Get } from "@common";
import URL from "url";
import PROJECT_CONFIG from "projectConfig";

export default {
  name: "ui_mobile_list_05",
  props: ['namespace'],
  reused: true,
  data () {
    return {
      CONFIG: null,
      getRelateBookList: [],//热门推荐列表
      pubId: "",
      keys: {},
      bookAuthors: {},   //作者 新增
    };
  },
  mounted () {
    this.CONFIG = PROJECT_CONFIG[this.namespace].relatebooklist.relatebooklist_01;
    this.keys = this.CONFIG.keys;
    if (typeof (this.keys.BookAuthors) != 'undefined') {
      this.bookAuthors = this.keys.BookAuthors;
    }
    this.pubId = URL.parse(window.location.href, true).query.pubId; // pubId
    this.queryRelatedList();
  },

  methods: {
    toDetail (item) {
      let toDetailType = this.CONFIG.toDetailType;
      if (toDetailType.type == 'phone') {
        let params = '';
        for (let index = 0; index < toDetailType.phone.values.length; index++) {
          const element = toDetailType.phone.values[index];
          params += item[element] + ',';
        }
        params = params.substring(0, params.length - 1)
        eval(toDetailType.phone.functionName + '(' + params + ')')
      } else if (toDetailType.type == 'href') {
        let url = toDetailType.href.url + '?';
        for (const key in toDetailType.href.keys) {
          const element = toDetailType.href.keys[key];
          url += key + '=' + item[element] + '&';
        }
        for (const key in toDetailType.href.fixedKeys) {
          const element = toDetailType.href.fixedKeys[key];
          url += key + '=' + element + '&';
        }
        url = url.substring(0, url.length - 1)
        window.location.href = url;
      }
    },
    queryRelatedList () {
      var peramsObj = Object.assign({}, this.CONFIG.params);
      peramsObj.pubId = this.pubId;

      Get(CONFIG.BASE_URL + this.CONFIG.url, { params: peramsObj }).then(rep => {
        var datas = rep.data.data.bookcat;
        if (datas && datas instanceof Array && datas.length > 0) {
          this.getRelateBookList = datas.slice(0, this.CONFIG.maxRelateNumber);
        }
      });
    }
  },
}
</script>

<style>
.ui_mobile_list_05 {
  margin-top: 0.6rem;
  /*overflow: hidden;*/
}

.ui_mobile_list_05_relatebook_title {
  font-size: 0.26rem;
  margin-left: 0.3rem;
}

.ui_mobile_list_05_content {
  margin-left: 0.3rem;
  overflow-x: hidden;
  overflow-y: hidden;
  white-space: nowrap;
  /* width: 100%; */
  clear: both;
  margin-top: 0.3rem;
}

.ui_mobile_list_05_relatebook_list {
  margin: 0 auto;
  padding: 0;
  max-width: 16rem;
  position: relative;
  width: auto;
  overflow-x: scroll;
  overflow-y: hidden;
}

.ui_list_01-scroll-list li:first-child {
  margin-left: 0;
}

.ui_list_01-scroll-list li:last-child {
  margin-right: 0.6rem;
}

.ui_mobile_list_05_relatebook {
  display: inline-block;
  margin-left: 0.4rem;
  list-style-type: none;
}

.ui_mobile_list_05_a {
  display: block;
  width: 1.62rem;
  text-decoration: none;
  color: #939393;
}

.ui_mobile_list_05_img {
  border-radius: 3px;
  /*width: 100%;*/
  width: 1.62rem;
  height: 2.12rem;
  border: none;
}

.ui_mobile_list_05_bookname {
  color: #5b5b5b;
  font-size: 0.28rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-break: break-all;
  overflow: hidden;
  white-space: normal;
  line-height: 0.39rem;
  height: 0.75rem;
}
</style>
