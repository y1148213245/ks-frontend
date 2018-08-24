<!-- 资源评论组件 -->
<template>
  <section class="work_bookreview_04">
    <el-input type="textarea" class="work_bookreview_04-comment_text" v-model="commentText"></el-input>
    <el-button type="primary" class="work_bookreview_04-comment_button" @click="addComment">评论</el-button>
    <ul>
      <li></li>
    </ul>
  </section>
</template>

<script>
import URL from 'url'
import PROJECT_CONFIG from 'projectConfig'
import { Post, Get } from '@common'
export default {
  name: 'work_bookreview_04',
  reused: true,
  props: {
    namespace: String,
  },
  data () {
    return {
      CONFIG: null,
      detailCache: null,
      commentText:'',
    };
  },

  computed: {},

  created () {
    this.initConfig();
    this.$bus.on(this.CONFIG.event.listenDetailLoadedName, this.getCommentList)
  },

  mounted () { },

  methods: {
    initConfig () {
      // this.CONFIG = PROJECT_CONFIG[this.namespace].bookreview.work_bookreview_04
      this.CONFIG = {
        event: {
          listenDetailLoadedName: 'detailLoaded',

        },
        url: 'spc/cms/publish/list.do',
        keys: {},
        eventName_loadDate: 'loadSearchResult',
      }
    },
    getCommentList (detail) {
      if (detail) {
        this.detailCache = detail;
      }
      let params = {
        pubId: '1256',
        pageIndex: '1',
        pageSize: '',
        siteId: ''
      }
      Get(CONFIG.BASE_URL + 'comment/comments.do', { params }).then(resp => {

      })
    },
    addComment () {

      let params = {
        pubId: '1256',
        loginName: 'william',
        content: 'dwadwa',
        siteId: '1'
      }
      Post(CONFIG.BASE_URL + 'comment/addComment.do', params).then(resp => {

      })
    }
  }
}
</script>
<style>
</style>
