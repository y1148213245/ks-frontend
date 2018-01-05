<!-- 书籍详情页 下方的 内容简介、作者简介、目录三项内容 created by song 2018/1/4 -->
<template>
  <div class="comment-box">
    <h3>内容简介</h3>
    <div v-for="introduction in bookIntroduction" v-if="introduction.topic=='内容简介'">
      <p v-html="introduction.content"></p>
    </div>
    <div class="title-block">
      <h4>作者简介</h4>
    </div>
    <div v-for="introduction in bookIntroduction" v-if="introduction.topic=='作者简介'">
      <p v-html="introduction.content"></p>
    </div>
    <div class="title-block">
      <h4>目录</h4>
    </div>
    <ul v-for="introduction in bookIntroduction" v-if="introduction.topic == '目录'">
      <li v-html="introduction.content"></li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "work_bookdetail_01_bookrelatedinfo",
  reused: true,
  props: ['namespace'],
  data () {
    return {
    };
  },

  components: {},

  computed: {
    ...mapGetters({
      bookIntroduction: 'bookDetail/bookIntroduction',
    }),
  },

  mounted () { },

  methods: {}
}

</script>
<style>
.comment-box {
  padding-left: 100px;
}

.comment-box h3,
.comment-related h3 {
  padding: 16px 0px;
  border-top: 1px solid #7f7f7f;
}

.comment-box ul {
  list-style-type: none;
}

.comment-box .title-block {
  padding: 4px 0 4px 20px;
  border-left: 3px solid #ae0f29;
  margin: 24px 0px;
  background: #f5f5f5;
}

.comment-box .title-block h1,
.comment-box .title-block h2,
.comment-box .title-block h3,
.comment-box .title-block h4 {
  margin-bottom: 0;
}

h3 {
  font-size: 18px;
}

.comment-box p,
.news-detail p {
  text-indent: 2em;
  color: #404040;
}
</style>