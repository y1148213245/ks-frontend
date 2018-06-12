<!--随手记-->
<template>

      <section class="personalcenter_note">
        <div class="wzdh_jsb f14 color_6f6 mb30" >
          <div class="wzdh_jsb_list pb30 mb30" v-for="(item,index) in searchNoteList.content" :key="index">
            <div class="wzdh_jsb_tit line-h18 mb05">
            <a class="f14 color_494" @click="goToContent(item.SYS_DOCUMENTID)">{{item.SYS_TOPIC}}</a>
            <span class="fr color_727">{{item.SYS_CREATED }}</span></div>
            <div class="wzdh_jsb_con">
              <div class="wzdh_jsb_con_01 color_8d8 innercontent" v-html="noteListContent[index]">
              </div>
              <div class="wzdh_jsb_con_02"><span class="fr"><a @click="goToDeleteNote(item.SYS_DOCUMENTID)"><i class="wzdh_jsb_con_04 mr05"></i>删除</a></span><span class="fr mr10"><a  @click="goToEditNote(item.SYS_DOCUMENTID)"><i class="wzdh_jsb_con_03 mr05 on"></i>编辑</a></span></div>
            </div>
          </div>
          <el-button type="primary" @click="goToCreateNote" class=" fr color_fff pl30 pr30">增加记录</el-button>
        </div>  
        <ui_pagination :pageMessage="{totalCount: this.searchNoteList.content && this.searchNoteList.totalElements - 0 || 0}" :excuteFunction="pagingF" :page-sizes="[3,6,12,24]"></ui_pagination>
		</section>


</template>
<script type="text/ecmascript-6">
import { mapGetters } from "vuex";
import moment from "moment";
import showdown from "showdown";
export default {
  name: "note",
  reused: true,
  props: ["namespace"],
  mounted: function() {
    this.$store.dispatch("personalCenter/queryUser", {
      loadedCallBack: this.loadedCallBack
    });
  },
  data() {
    return {
      noteListContent: null
    };
  },
  computed: {
    ...mapGetters("personalCenter/", {
      searchNoteList: "getSearchNoteList",
      member: "getMember"
    })
  },
  filters: {
    //时间格式化
    formatDate: function(time) {
      if (time !== undefined && time !== "" && time !== null) {
        return moment(time).format("YYYY-MM-DD");
      }
    }
  },
  methods: {
    loadedCallBack() {
      var params = {
        loginName: this.member.loginName,
        page: 0,
        size: 3
      };
      this.$store.dispatch("personalCenter/searchNoteList", params);
    },
    pagingF({ pageNum, pageSize }) {
      var params = {
        loginName: this.member.loginName,
        page: 1,
        size: pageSize
      };
      this.$store.dispatch("personalCenter/searchNoteList", params);
    },
    goToDeleteNote(num) {
      var params = {
        DocIDs: num,
        cb: this.deleteCallBack
      };
      this.$store.dispatch("personalCenter/deleteNote", params);
    },
    deleteCallBack(rep) {
      var params = {
        loginName: this.member.loginName,
        page: 0,
        size: 3
      };
      this.$store.dispatch("personalCenter/searchNoteList", params);
      if (rep.success == true) {
        this.$notify({
          title: "成功",
          message: rep.msg,
          type: "success",
          duration: 2000
        });
      } else {
        this.$notify({
          title: "失败",
          message: rep.msg,
          type: "error",
          duration: 2000
        });
      }
    },
    goToCreateNote() {
      window.location.href = "./createNote.html";
    },
    goToEditNote(num) {
      window.location.href =
        "./editNote.html?DocId=" +
        num +
        "&user=" +
        this.member.loginName;
    },
    goToContent(num) {
      window.location.href =
        "./noteContent.html?DocId=" +
        num +
        "&user=" +
        this.member.loginName;
    }
  },
  watch: {
    searchNoteList: function(nv, ov) {
      if (nv != ov) {
        let arr = [];
        for (
          let i = 0, len = this.searchNoteList.content.length;
          i < len;
          i++
        ) {
          const converter = new showdown.Converter();
          arr.push(converter.makeHtml(this.searchNoteList.content[i].CONTENT));
        }
        this.noteListContent = arr;
      }
    }
  }
};
</script>
<style scoped>
a {
  cursor: pointer;
}
.fr {
  float: right;
}
.fl {
  float: left;
}
.f14 {
  font-size: 14px;
}
.mr05 {
  margin-right: 5px;
}
.mr10 {
  margin-right: 10px;
}
.pb30 {
  padding-bottom: 30px;
}
.pl30 {
  padding-left: 30px;
}
.pr30 {
  padding-right: 30px;
}
.mb30 {
  margin-bottom: 30px;
}
.innercontent {
  height: 90px;
  overflow: hidden;
  margin: 5px 0;
}
.color_494 {
  color: #494949;
}
.color_8d8 {
  color: #8d8c8c;
}
.main {
  width: 1200px;
  margin: 0 auto;
  background-color: #fff;
}
.container {
  padding: 30px 55px;
  overflow: hidden;
}
 
.daohang {
  height: 52px;
  line-height: 52px;
  border-bottom: 2px solid #c50000;
  padding-left: 15px;
}
.wdzh_hy .wdzh_yqhy i,
.wdzh_hy .wdzh_hy_tx,
.wzdh_xgxx i,
.wzdh_xgyx .wzdh_xgyx_ico,
.wzdh_xgyx .wzdh_xgyx_bdyx i,
.wzdh_xgyx .wzdh_xgyx_yzm i,
.wzdh_yzsf_sj i,
.wdsj_name i.wdsj_name_wz,
.wdsj_name i.wdsj_name_tp,
.wzdh_yzsjh .wzdh_yzsjh_ico,
.wzdh_yzsjh .wzdh_yzsjh_jsj i,
.wzdh_yzsjh .wzdh_yzsjh_yzm i,
.wzdh_bmwtyz .wzdh_bmwtyz_ico,
.wzdh_bmwtyz .wzdh_bmwtyz_wt i,
.wzdh_bmwtyz .wzdh_bmwtyz_da i,
.wzdh_xgmm .wzdh_xgmm_ico,
.wzdh_xgmm .wzdh_xgmm_xmm i,
.wzdh_xgmm .wzdh_xgmm_cf i,
.wzdh_jf .wzdh_jf_duih_01 i.jf_duih_03,
.wzdh_yhq_con_list_tab_con table tr td div.yhq_con_01,
.wzdh_jsb .wzdh_jsb_con i,
.jlxq_con span i,
.jlxq_con .jlxq_nr i,
.wzdh_wddd_sel .wzdh_wddd_sel_02 i,
.wzdh_ddxq_ddxx .wzdh_ddxq_ddxx_con i,
.wzdh_jrgwcts .wzdh_jrgwcts_cg_01 i,
.wzdh_gwctjcg .wzdh_gwctjcg_cg_dingdan i,
.wzdh_gwctjcg .wzdh_gwctjcg_cg_zffs i,
.wzdh_gwctjcg_cg_zffs_list table.bank_xq i {
  background: url(../../assets/img/bg_10.png) no-repeat;
  display: inline-block;
  vertical-align: middle;
}
.line-h18 {
  line-height: 18px;
}
.color_6f6 {
  color: #6f6f6f;
}
.wzdh_jsb {
  padding: 30px 20px;
  border: 1px solid #cbcbcb;
  overflow: hidden;
}
.wzdh_jsb_list {
  border-bottom: 1px dashed #d6d6d6;
}
.wzdh_jsb .wzdh_jsb_con i.wzdh_jsb_con_03 {
  background-position: -398px -418px;
  width: 15px;
  height: 17px;
}
.wzdh_jsb .wzdh_jsb_con i.on {
  background-position: -374px -418px;
}
.wzdh_jsb .wzdh_jsb_con i.wzdh_jsb_con_04 {
  background-position: -398px -444px;
  width: 15px;
  height: 17px;
}
.wzdh_jsb .wzdh_jsb_zjjl {
  background: #ca0000;
  line-height: 30px;
  height: 30px;
}
</style>
