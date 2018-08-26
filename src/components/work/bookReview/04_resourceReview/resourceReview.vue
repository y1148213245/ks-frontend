<!-- 资源评论组件 -->
<template>
  <section class="work_bookreview_04">
    <el-input v-if="isComment" type="textarea" class="work_bookreview_04-comment_text" v-model="commentText"></el-input>
    <el-button v-if="isComment" type="primary" class="work_bookreview_04-comment_button" @click="addComment">评论</el-button>
    <ul>
      <template v-for="(item,index) in commentList">
        <li :key="index" class="work_bookreview_04-commonts_item">
          <img class="work_bookreview_04-commonts_item_img" :src="item.picture" />
          <div class="work_bookreview_04-commonts_item_name" v-text="item.loginName"></div>
          <span class="work_bookreview_04-commonts_item_time" v-text="item.createTime"></span>
          <p class="work_bookreview_04-commonts_content" v-text="item.content"></p>
        </li>
      </template>

    </ul>
  </section>
</template>

<script>
import URL from 'url'
import PROJECT_CONFIG from 'projectConfig'
import { Post, Get, getFieldAdapter } from '@common'
import * as interfaces from "@work/login/common/interfaces.js";
import { mapGetters } from 'vuex';
export default {
  name: 'work_bookreview_04',
  reused: true,
  props: {
    namespace: String,
    modulename: String
  },
  data () {
    return {
      CONFIG: null,
      detailCache: '',
      detailKeys: null,
      commentText: '',
      commentList: '',
      isComment:false
    };
  },

  computed: {
    ...mapGetters("login", {
      member: interfaces.GET_MEMBER   // 用户信息
    }),
  },

  created () {
    this.initConfig();
    this.$bus.on(this.CONFIG.event.listenDetailLoadedName, this.getCommentList)
    // this.getCommentList();
  },

  mounted () { },

  methods: {
    initConfig () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].bookreview.work_bookreview_04[this.modulename]
      // this.CONFIG = {
      //   event: {
      //     listenDetailLoadedName: 'resourceDetailLoaded',
      //     detailAdapter: {
      //       sysAdapter: 'sykAdapter',
      //       typeAdapter: 'bookAdapter'
      //     }
      //   },
      //   addComment: {
      //     url: 'comment/addComment.do',
      //     params: {
      //       parentId: "0", type: "1",
      //     }
      //   }
      // }
      this.detailKeys = getFieldAdapter(
        this.CONFIG.event.detailAdapter.sysAdapter,
        this.CONFIG.event.detailAdapter.typeAdapter
      );
    },
    getCommentList (detail) {
      if (detail) {
        this.detailCache = detail;
      }
      let keys = this.detailKeys;

      let params = {
        pubId: this.detailCache[keys.id] ? this.detailCache[keys.id] : '',
        pageIndex: '1',
        pageSize: '999',
        siteId: CONFIG.SITE_CONFIG.siteId
      }
      Get(CONFIG.BASE_URL + 'comment/comments.do', { params }).then(resp => {
        if (resp.data.data) {
          this.commentList = resp.data.data;
        }
      })
      /* 判断是否允许评论 */
      this.isComment = (keys.isComment && this.detailCache.hasOwnProperty(keys.isComment)) ? (this.detailCache[keys.isComment] == '是') : true ;
    },
    addComment () {
      if (!this.member || !this.member.loginName) {
        this.$message({
          type: 'warning',
          message: '请登录'
        })
        return false
      }
      if (this.commentText.replace(/(^\s*)|(\s*$)/g, "") == "") {
        this.$message({
          type: 'warning',
          message: '评论不能为空'
        })
        return false
      }
      let detail = this.detailCache;
      let keys = this.detailKeys;
      let url = this.CONFIG.addComment.url

      let params = {
        pubId: detail[keys.id] ? detail[keys.id] : '',
        colId: detail[keys.colId] ? detail[keys.colId] : '',
        deviceName: 'pc',
        resourceId: detail[keys.resId] ? detail[keys.resId] : '',
        resourceName: detail[keys.resName] ? detail[keys.resName] : '',
        loginName: this.member.loginName,
        content: this.commentText,
        siteId: CONFIG.SITE_CONFIG.siteId,
        starNum: 0,
        activityId: ""
      }
      params = Object.assign(params, this.CONFIG.addComment.params);
      Post(CONFIG.BASE_URL + url, params).then(resp => {
        if (resp.data.result == 1) {
          let msg = resp.data.data.msg;
          this.$message({
            type: 'success',
            message: msg
          })
          this.getCommentList()
        }else{
          this.$message({
            type: 'warning',
            message: '评论失败'
          })
        }
      })
    }
  }
}
</script>
<style>
</style>
