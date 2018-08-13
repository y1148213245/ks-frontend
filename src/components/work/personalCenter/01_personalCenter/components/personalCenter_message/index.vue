<template>
  <section class="personalcenter-message-box">
    <div class="personalcenter-message-list">
      <div v-if="myMessageList.result && myMessageList.result.length > 0">
        <ul class="personalcenter-message-items">
          <li v-for="(item,index) in myMessageList.result" v-bind:key="index">
            <h4 class="title" @click="toMessageDetail(item)">{{item["pub_resource_name"]}}</h4>
            <span class="time">{{formatDateNEW(item["information_a_pubTime"])}}</span>
          </li>
        </ul>
        <ui_pagination :pageMessage="{totalCount: this.myMessageList.result && this.myMessageList.totalCount - 0 || 0}" :excuteFunction="pagingF" :page-sizes="[10]"></ui_pagination>
      </div>
      <div v-else class="personalcenter-message-nodata">
        <img src="../../assets/img/empty.png" alt="">
        <div>暂无消息</div>
      </div>
    </div>
    <div class="personalcenter-message-detail">
      <h4 class="title"></h4>
      <p class="time"></p>
      <div class="content"></div>
      <button class="backbtn el-button el-button--primary" @click="backMessageList()">返回</button>
    </div>
  </section>
</template>
  
<script type="text/ecmascript-6">
import { mapGetters, mapActions } from "vuex";
import moment from "moment"
export default {
  name: "message",
  reused: true,
  props: ["namespace"],
  data() {
    return {
      // readConfig: READ_CONFIG
    };
  },
  mounted: function () {
    this.$store.dispatch("personalCenter/queryUser", {
      loadedCallBack: this.loadedCallBack
    });
  },
  computed: {
    ...mapGetters("personalCenter/", {
      myMessageList: "getMyMessageList"
    })
  },
  methods: {
    loadedCallBack() {
      var param = {
        conditions: '[{"pub_col_id": "1258"}, {"pub_status": "1"}]',
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: "1",
        pageSize: "10",
        searchText: ""
      }
      // param = JSON.stringify(param);
      // console.log(this);
      this.$store.dispatch("personalCenter/queryMyMessageList", param);
    },
    pagingF: function ({ pageNo, pageSize }) {
      var param = {
        conditions: '[{"pub_col_id": "1258"}, {"pub_status": "1"}]',
        groupBy: "pub_resource_id",
        orderBy: "pub_a_order asc pub_lastmodified desc id asc",
        pageNo: pageNo,
        pageSize: pageSize,
        searchText: ""
      }
      this.$store.dispatch("personalCenter/queryMyMessageList", param);
    },
    toMessageDetail(item) {
      $(".personalcenter-message-list").hide();
      var $detail = $(".personalcenter-message-detail");
      $detail.find(".title").html(item["pub_resource_name"])
      $detail.find(".time").html(this.formatDateNEW(item["information_a_pubTime"]))
      $detail.find(".content").html(item["information_a_content"])
      $detail.show();
    },
    backMessageList() {
      $(".personalcenter-message-detail").hide();
      $(".personalcenter-message-list").show();
    },
    formatDateNEW(value) {
      if (value) {
        return moment(Number(value)).format("YYYY-MM-DD HH:mm:ss"); // 只接收Number类型
      } else {
        return '暂无日期';
      }
    },
  }
};
</script>
<style scoped>
.personalcenter-message-box {
  margin: 30px 0;
  font-size: 14px;
}
.personalcenter-message-nodata {
  text-align: center;
  font-size: 16px;
  color: #999;
}
.personalcenter-message-nodata img {
  width: 150px;
  margin-bottom: 20px;
}
.personalcenter-message-items {
  line-height: 50px;
  margin-bottom: 30px;
  min-height: 510px;
}
.personalcenter-message-items > li {
  border-bottom: 1px dashed #eee;
  text-align: right;
}
.personalcenter-message-items .title {
  float: left;
  cursor: pointer;
  max-width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

}

.personalcenter-message-detail {
  overflow: hidden;
  text-align: center;
  line-height: 30px;
  display: none;
  font-size: 14px;
}
.personalcenter-message-detail .title {
  font-size: 22px;
  line-height: 50px;
}
.personalcenter-message-detail .time {
  color: #999;
  margin-bottom:30px;
}
.personalcenter-message-detail .content{
  margin-bottom:50px;
  text-align: left;
}
.personalcenter-message-detail .backbtn{
  float:right;
}

</style>
