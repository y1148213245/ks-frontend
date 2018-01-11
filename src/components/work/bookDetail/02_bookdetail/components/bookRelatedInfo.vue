<!-- 书籍详情页 下方的 图书简介、作者简介、目录三项内容 Created by song 2018/1/9 -->
<template>
  <!-- 图书目录等-->
  <div id="bookcata" class="book_detail_qt  mt15 pl15 cl">

    <div class="book_detail_qt_tab color_7e7 f14 pl20">
      <span class="pr10" @click="bfShow(0)"><i :class="{on:indexValue==0}"></i>图书简介</span>|
      <span class="pr10 pl10" @click="bfShow(1)"><i :class="{on:indexValue==1}"></i>作者简介</span>|
      <span class="pl10" @click="bfShow(2)"><i :class="{on:indexValue==2}"></i>目录</span>
    </div>

    <!-- 图书简介-->
    <div class="book_detail_qt_con line-h30 color_7e7 cl" v-show="indexValue==0">
      <div v-for="introduction in bookIntroduction" v-show="introduction.topic=='图书简介'">
        <span class="con" :class="{showjj:tsjj_state==false}" v-html="introduction.content"></span>
        </br>
            <span style="display:none;" class="con-all" v-html="introduction.content"></span>
        </br>
      </div>
      <a class="showAll fr color_727 f14" href="javascript://" @click="showAll_tsjj"><span>显示全部</span><i class="i-incline-down ml05" :class="{'i-incline-up':tsjj_state == true && indexValue == 0}"></i></a>
    </div>
    <!-- 图书简介-->
    <!-- 作者-->
    <div class="book_detail_qt_con line-h30 color_7e7 cl" style="display:none;" v-show="indexValue==1">
      <div v-for="introduction in bookIntroduction" v-show="introduction.topic=='作者简介'">
        <span  :class="{showjj:zzjj_state==false}" v-html="introduction.content"></span>
          </br>
            <span style="display:none;" class="con-all" v-html="introduction.content"></span>
          </br>
      </div>
      <a class="showAll fr color_727 f14" href="javascript://" @click="showAll_zzjj"><span>显示全部</span><i class="i-incline-down ml05" :class="{'i-incline-up':zzjj_state == true &&  indexValue == 1}"></i></a>
    </div>
    <!-- 作者简介-->
    <!-- 目录-->
    <div class="book_detail_qt_con line-h30 color_7e7 cl" style="display:none;" v-show="indexValue==2">
      <div v-for="introduction in bookIntroduction" v-show="introduction.topic=='目录'">
        <span class="con" :class="{showjj:ml_state==false}" v-html="introduction.content"></span>
        </br>
          <span style="display:none;" class="con-all" v-html="introduction.content"></span>
        </br>
      </div>
      <a class="showAll fr color_727 f14" href="javascript://" @click="showAll_ml"><span>显示全部</span><i class="i-incline-down ml05" :class="{'i-incline-up':ml_state == true && indexValue == 2}"></i></a>
    </div>
    <!-- 目录-->

  </div>
  <!-- 图书目录等-->
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
      tsjj_state: false,  //  控制图书简介按钮显示全部和隐藏全部
      zzjj_state: false,
      ml_state: false,
      x: 0,  //  控制图书简介按钮显示全部和隐藏全部
      y: 0,  //  控制作者简介按钮显示全部和隐藏全部
      m: 0,  //  控制目录按钮显示全部和隐藏全部
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
    showAll_tsjj () {
      if (this.x % 2 == 0) {
        this.tsjj_state = true;
        $(".showAll").children("span").html("收起全部")
      } else {
        this.tsjj_state = false;
        $(".showAll").children("span").html("显示全部")
      }
      this.x++;
    },

    showAll_zzjj () {
      if (this.y % 2 == 0) {
        this.zzjj_state = true;
        $(".showAll").children("span").html("收起全部")
      } else {
        this.zzjj_state = false;
        $(".showAll").children("span").html("显示全部")
      }
      this.y++;
    },

    showAll_ml () {
      if (this.m % 2 == 0) {
        this.ml_state = true;
        $(".showAll").children("span").html("收起全部")
      } else {
        this.ml_state = false;
        $(".showAll").children("span").html("显示全部")
      }
      this.m++;
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
<style scoped>
.showjj {
  display: inline-block;
  width: 100%;
  height: 100px;
  overflow: hidden;
}
</style>
