<template>

<div class="main_jlxq" >
	<div class="jlxq_con pt15 pr30 pb50 pl30">
		<div class="jlxq_tit f20 pb10" v-html="postForm.SYS_TOPIC"></div>
		<div class="jlxq_other f14 color_aba pt10"><span>{{postForm.SYS_CREATED }}</span></div>
		<div class="jlxq_nr pb05 mb10">
			<div class="f14 line-h24 pt20 color_737" v-html="html"></div>
		</div>	
	</div>
</div>
</div>

</template>

<script>
import api from "../../api/personalCenterApi";
// import {formatDate} from '../../../../../components/utils/data';
import showdown from "showdown";
export default {
  name: "note_content",
  reused: true,
  props: ["namespace"],
  data() {
    return {
      DocId: "",
      user: "",
      postForm: "",
      html: ""
    };
  },
  created() {
    var getUrlStr = function(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    };
    this.DocId = getUrlStr("DocId");
    this.user = getUrlStr("user");
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      var params = {
        DocIDs: this.DocId,
        loginName: this.user
      };
      api
        .fetchArticle(params)
        .then(response => {
          this.postForm = response.data;
          const converter = new showdown.Converter();
          this.html = converter.makeHtml(this.postForm.CONTENT);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  filters: {
    //时间格式化
    formatTime: function(time) {
      if (time !== undefined && time !== "" && time !== null) {
        let date = new Date(time);
        return formatDate(date, "yyyy-MM-dd hh:mm:ss");
      }
    }
  }
};
</script>

<style>
/*记录详情*/
.main_jlxq,
.main_ssj {
  width: 1200px;
  margin: 0 auto 48px auto;
  overflow: hidden;
  background: #fff;
}
.main_jlxq .jlxq_nav,
.main_ssj .ssj_nav {
  border-bottom: 2px solid #da0b2d;
}
.jlxq_con .jlxq_tit {
  color: #ca0000;
  border-bottom: 1px solid #fce8e8;
  text-align: center;
}
.jlxq_other {
  overflow: hidden;
  text-align: center;
}
.jlxq_other span.dz,
.jlxq_other span.sc {
  cursor: pointer;
}
.jlxq_other span i {
  height: 18px;
  width: 18px;
}
.jlxq_other span i.jlxq_other_01 {
  background-position: -70px -450px;
}
.jlxq_other span i.jlxq_other_01_cg {
  background-position: -70px -469px;
}
.jlxq_other span i.jlxq_other_02 {
  background-position: -70px -410px;
}
.jlxq_other span i.jlxq_other_02_cg {
  background-position: -70px -430px;
}
.jlxq_other span i.jlxq_other_03 {
  background-position: -70px -488px;
}
.jlxq_other span.share:hover .jlxq_other_03 {
  background-position: -70px -506px;
}
.jlxq_con .jlxq_nr {
  border-bottom: 1px dashed #d6d6d6;
  overflow: hidden;
}
.jlxq_con .jlxq_nr i.jlxq_nr_del {
  background-position: -429px -480px;
  width: 20px;
  height: 22px;
}
.jlxq_pinglun textarea.pinglun_k {
  border: 1px solid #c50000;
  width: 100%;
  height: 105px;
}
.jlxq_pinglun .pinglun_btn {
  border: 0px;
  color: #fff;
  line-height: 30px;
  height: 30px;
  width: 120px;
  background: #c50000;
  cursor: pointer;
}
</style>
