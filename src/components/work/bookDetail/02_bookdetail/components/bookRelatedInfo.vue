<!-- 书籍详情页 下方的 图书简介、作者简介、目录三项内容 Edit by song 2018/1/9 -->
<template>
  <div class="work_bookdetail_02_related work_bookdetail_02_related_skin">

    <div class="relatedHead">
      <span v-for="(item, index) in titleList"  @click="bfShow(index)" :key="index">
        <i :class="{active:indexValue === item.ind}"></i>
        <span>{{item.title}}</span>
        <span v-if="index !== titleList.length-1">|</span>
      </span>
    </div>
  
    <div class="briefIntro" v-for="(item, index) in titleList" :key="index" v-show="indexValue === item.ind">
      <div v-for="(introduction, ind) in bookIntroduction" v-if="introduction.topic == item.title" :key="ind">
        <span :class="{showBriefIntro:item.flag}" v-html="introduction.content"></span>
        <span style="display:none;" class="con-all" v-html="introduction.content"></span>
      </div>
      <a class="showAllIntro" @click="showAllEve(item)"><span>显示全部</span><i class="btnDown" :class="{'btnUp':!item.flag && indexValue == item.ind}"></i></a>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters, mapActions, mapState } from 'vuex';
import moment from "moment";
import Vue from 'vue';
import $ from 'jquery';

export default {
  name: "work_bookdetail_02_bookrelatedinfo",
  reused: true,
  props: ['namespace'],
  mounted: function () {
  },
  data () {
    return {
      indexValue: 0,
      titleList: [{
        ind: 0,
        title: '图书简介',
        flag: true,
      }, {
        ind: 1,
        title: '作者简介',
        flag: true,
      }, {
        ind: 2,
        title: '目录',
        flag: true,
      }]
    }
  },
  computed: {
    ...mapGetters({
      bookIntroduction: 'bookDetail/bookIntroduction',
    }),
  },
  methods: {
    bfShow (index) {
      this.indexValue = index;
    },
    showAllEve (item) {
      item.flag = !item.flag;
      if (item.flag) {
        $(".showAllIntro").children("span").html("显示全部")
      } else {
        $(".showAllIntro").children("span").html("收起全部")
      }
    },
  },
  filters: {
    formatDate: function (time) {
      if (time !== undefined && time !== '' && time !== null) {
        return moment(time).format("YYYY-MM-DD");
      }
    }
  },
  watch: {
  }
}


</script>
<style>
.work_bookdetail_02_related .relatedHead {
  line-height: 30px;
  border-bottom-width: 2px;
  padding-left: 20px;
}

.work_bookdetail_02_related .relatedHead span {
  position: relative;
  padding-right: 10px;
}

.work_bookdetail_02_related .relatedHead .active {
  position: absolute;
  background-position: -12px -74px;
  width: 13px;
  height: 13px;
  bottom: -12px;
  left: 40%;
}

.work_bookdetail_02_related .briefIntro {
  padding: 10px 34px;
  line-height: 30px;
  clear: both;
}

.work_bookdetail_02_related .showBriefIntro {
  display: inline-block;
  width: 100%;
  height: 100px;
  overflow: hidden;
}

.work_bookdetail_02_related .briefIntro .showAllIntro {
  float: right;
}

.work_bookdetail_02_related .btnDown {
  background-position: -3px -279px;
  -moz-box-orient: vertical;
  background-repeat: no-repeat;
  display: inline-block;
  height: 10px;
  vertical-align: middle;
  width: 12px;
  margin-left: 5px;
}

.work_bookdetail_02_related .btnUp {
  background-position: -20px -279px;
}
</style>
