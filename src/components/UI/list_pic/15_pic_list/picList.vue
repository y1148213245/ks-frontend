<!-- 编辑列表 -->
<template>
  <div class="list_pic_15">
    <div class="list_pic_15-list">
      <div class="list_pic_15-list-entry" v-for="entry in list" :key="entry.id">
        <p class="list_pic_15-list-entry-img_box">
          <a class="list_pic_15-list-entry-img_box-a" href="javascript:void(0)" @click="toDetail(entry.id)">
            <img :src="entry && entry.pub_picMiddle" alt="暂无图片" class="list_pic_15-list-entry-img_box-img" onload="DrawImage(this,147,222)">
          </a>
        </p>
        <p class="list_pic_15-list-entry-author-p">
          <a href="" class="list_pic_15-list-entry-author-a" v-text="entry.information_SYS_AUTHORS"></a>
        </p>
        <p class="list_pic_15-list-entry-topic" v-text="entry.information_SYS_TOPIC" @click="toDetail(entry.id)" style="cursor: pointer;"></p>
        <p class="list_pic_15-list-entry-email" v-text="entry.information_a_collaborator || '暂无邮箱'"></p>
        <p class="list_pic_15-list-entry-callpage">
          <a href="javascript:void(0)" class="list_pic_15-list-entry-callpage-a" @click="goContribute(entry.information_a_collaborator)">去投稿</a>
        </p>
      </div>
    </div>

    <!--翻页-->
    <div class="list_pic_15-paging">
      <ui_pagination :pageMessage='{totalCount:totalCount} || null' :excuteFunction='pageCallBack' :pageSizes="pageSizes"></ui_pagination>
    </div>
    <!--翻页-->
  </div>
</template>

<script>
import URL from "url";
import PROJECT_CONFIG from "projectConfig";
import { Post } from "@common";
import * as interfaces from '@work/login/common/interfaces.js';
import { mapGetters } from 'vuex';

export default {
  name: 'ui_list_pic_15',
  reused: true,
  props: {
    namespace: String
  },
  data () {
    return {
      CONFIG: null,
      list: null,
      totalCount: 0,
      pageNo: 0,
      pageSize: 0,
      pageSizes: null,
    };
  },

  computed: {
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER
    })
  },

  created () {
    this.initConfig();
    // this.loadCols();
  },

  mounted () {
    this.loadCols();
  },

  methods: {
    initConfig () {
      let config = PROJECT_CONFIG[this.namespace].list_pic.ui_list_pic_15;
      this.CONFIG = config;
      this.pageNo = config.param.pageNo;
      this.pageSize = config.param.pageSize;
      this.pageSizes = config.pageSizes;
    },
    pageCallBack ({ pageNo, pageSize }) {
      this.pageNo = pageNo;
      this.pageSize = pageSize;
      this.loadCols();
    },
    loadCols() {
      let url=this.CONFIG.url+'?colId='+this.CONFIG.param.colId;
      Post(url).then((rep)=>{
        this.cols = rep.data.data;
        if (this.cols && this.cols instanceof Array && this.cols.length > 0) {
          this.loadList();
        }
      })
    },
    loadList() {
      let values = this.cols[0].id;
      for (let i = 1, len = this.cols.length; i < len; i++) {
        values += ' OR ' + this.cols[i].id;
      }
      this.conditions = "[{pub_col_id:" + values + ",op:'in'}]";
      let param=Object.assign({},this.CONFIG.resultParam,{conditions: this.conditions});
      Post(this.CONFIG.resultUrl,param).then((rep)=>{
        this.list = rep.data.result;
        this.totalCount = rep.data.totalCount;
      })
    },
    toDetail (id) {
      window.location.href = this.CONFIG.toDetailHref + id;
    },
    goContribute (value) {
      if (!(this.member && this.member.loginName)) {
        window.location.href = "./login.html";
        return;
      }
      var url = this.CONFIG.contributeBaseUrl + "authorName=" + this.member.loginName + "&userName=" + value;
      window.open(url);
    }
  }
}

</script>
<style>
.list_pic_15 {
  padding-top: 20px;
  overflow: hidden;

  font-family: "Microsoft Yahei", "微软雅黑", "\5FAE\8F6F\96C5\9ED1", "宋体";
  font-size: 12px;
  color: #656260;
}
.list_pic_15-list {
}
.list_pic_15-list-entry {
  float: left;
  margin-left: 40px;
  margin-bottom: 20px;
  width: 248px;
  height: 334px;
  padding: 20px 0px;
  border: 1px solid #dcdcdc;
  font-size: 14px;

  text-align: center;
}
.list_pic_15-list-entry-img_box {
  width: 147px;
  height: 222px;
  padding-left: 50px;
}
.list_pic_15-list-entry-img_box-a {
  outline: none;
  color: #888888;
  text-decoration: none;
}
.list_pic_15-list-entry-img_box-img {
  width: 100%;
  height: 100%;
  border: 0px;
  line-height: 150px;
}
.list_pic_15-list-entry-author-p {
  margin-top: 15px;
}
.list_pic_15-list-entry-author-a {
  outline: none;
  color: #888888;
  text-decoration-line: none;
}
.list_pic_15-list-entry-topic {
  display: block;
  margin: auto;
  max-width: 180px;
  line-height: 25px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
}
.list_pic_15-list-entry-email {
  display: block;
  margin: auto;
  max-width: 180px;
  line-height: 25px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.list_pic_15-list-entry-callpage {
  margin-top: 5px;
  line-height: 35px;
}
.list_pic_15-list-entry-callpage-a {
  display: inline-block;
  line-height: 32px;
  width: 210px;
  height: 32px;
  text-align: center;
  background: #ca0000;
  color: #fff;
  text-decoration-line: none;
}
.list_pic_15-paging {
  clear: both;
}
</style>

<style scoped>
.qtg {
  text-align: center;
  background: #ca0000;
  height: 32px;
  display: inline-block;
  line-height: 32px;
  width: 210px;
}
</style>
