<template>
  <div class="personalcenter-samplebook-box">
    <!-- <div>{{samplebookList}}</div> -->
    <div class="personalcenter-samplebook-data" v-if="samplebookList.content&&samplebookList.content.length > 0">
      <div class="personalcenter-samplebook-page" v-if="showSamplebookPage == showSamplebookPageList[0]">
      <h4 class="personalcenter-samplebook-title">我的申请记录</h4>
      <div class="personalcenter-samplebook-table">
        <el-table border :data="samplebookList.content" style="width: 100%">
          <el-table-column label="申请时间" align="center">
            <template slot-scope="scope">
              <span>{{formatDateNEW(scope.row['SYS_CREATED'])}}</span>
            </template>
          </el-table-column>
          <el-table-column label="申请教材" align="center">
            <template slot-scope="scope">
              <span>{{scope.row['SYS_TOPIC']?scope.row['SYS_TOPIC']:"暂无"}}</span>
            </template>
          </el-table-column>
          <el-table-column label="申请结果" align="center" prop="">
            <template slot-scope="scope">
              <span>{{scope.row['STYLEBOOK_STATUS']?scope.row['STYLEBOOK_STATUS']:"暂无"}}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作" align="center">
            <template slot-scope="scope">
              <button class="personalcenter-samplebook-todetail" @click="toSamplebookDetail(scope.row)">查看详情</button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="personalcenter-samplebook-page">
        <ui_pagination :pageMessage="{totalCount: this.samplebookList.content && this.samplebookList.totalElements - 0 || 0}" :excuteFunction="toPageN" :page-sizes="[CONFIG['pageSize']]"></ui_pagination>
      </div>
    </div>
    <div class="personalcenter-samplebook-page01" v-if="showSamplebookPage == showSamplebookPageList[1]">
      <div class="personalcenter-samplebook-detail">
        <div class="personalcenter-samplebook-detail-content">
          <div>物流信息</div>
          <div class="personalcenter-samplebook-logistical">
            <div id="logisticalId" v-if="showLogistical && showLogisticalConfig"></div>
            <div v-else>暂无物流信息</div>
          </div>
          <ul class="personalcenter-samplebook-detail-list">
            <li class="personalcenter-samplebook-detail-firstitem">
              <span>申请时间</span>
              <span>申请教材</span>
            </li>
            <li>
              <span>{{formatDateNEW(samplebookDetail['SYS_CREATED'])}}</span>
              <span>{{samplebookDetail['SYS_TOPIC']?samplebookDetail['SYS_TOPIC']:"暂无"}}</span>
            </li>
          </ul>
          <div class="personalcenter-samplebook-detail-state"><span>申请进度:</span>{{samplebookDetail['STYLEBOOK_STATUS']?samplebookDetail['STYLEBOOK_STATUS']:"暂无"}}</div>
        </div>
        <button class="personalcenter-samplebook-detail-back el-button el-button--primary" @click="toSempleboolPage(0)">返回</button>
      </div>
    </div>
    </div>
    <div v-else class="personalcenter-samplebook-nodata">
      <img src="../../assets/img/empty.png" alt="">
        <div>暂无数据</div>
    </div>
    
  </div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
import { mapGetters, mapActions } from "vuex";
// import api from "../../api/personalCenterApi.js";
import kdnApi from "../../assets/js/KDN.js";
import moment from "moment";
export default {
  name: "samplebook",
  reused: true,
  props: ["namespace", "parentConfig"],
  created() {
    this.CONFIG = this.parentConfig.samplebook;
    // this.logisticalConfig = this.CONFIG && this.CONFIG.logisticalConfig ? this.CONFIG.logisticalConfig : false;
  },
  mounted() {
    this.$store.dispatch("personalCenter/queryUser", {
      loadedCallBack: this.loadedCallBack
    });
  },
  computed: {
    ...mapGetters("personalCenter/", {
      samplebookList: "getSamplebookList",
      member: "getMember",  // this.member.loginName
    })
    // ...mapGetters({
    //   samplebookList: "personalCenter/getSamplebookList", // 获取申请列表
    // })
  },
  data() {
    return {
      showSamplebookPage:"index",   //显示页面
      showSamplebookPageList:[      //显示页面的列表
        "index",
        "detail"
      ],
      samplebookDetail:{},      //详情的数据
      // samplebookPrames:{}        //传递的参数
      showLogistical:false,         //展示物流信息
      showLogisticalConfig:{}           //物流信息配置
    };
  },
  methods: {
    loadedCallBack() {
      this.CONFIG;
      this.$store.dispatch("personalCenter/getSamplebookList", this.CONFIG);
    },
    toPageN:function ({ pageNo, pageSize }) {
      this.CONFIG.pageIndex = pageNo;
      this.CONFIG.pageSize = pageSize;
      this.$store.dispatch("personalCenter/getSamplebookList", this.CONFIG);
    },
    toSamplebookDetail(data){
      this.samplebookDetail = data;
      this.toSempleboolPage(1);
      // 可以先判断快递号=>TRACKING_NUMBER 再显示 先改成true显示
      this.showLogistical = true;
      kdnApi.run({
        serviceType: "B",
        expCode: "YTO",
        expNo: "889645294678455192",
        showType: "normal",
        container: "logisticalId"
      });
    },
    toSempleboolPage(num){
      this.showSamplebookPage = this.showSamplebookPageList[num];
    },
    formatDateNEW(value) {
      if (value) {
        return moment(Number(value)).format("YYYY-MM-DD HH:mm:ss"); // 只接收Number类型
      } else {
        return '暂无日期';
      }
    }
  }
};
</script>

<style scoped>
.personalcenter-samplebook-nodata {
  text-align: center;
  font-size: 16px;
  color: #999;
}
.personalcenter-samplebook-nodata img {
  width: 150px;
  margin-bottom: 20px;
}
.personalcenter-samplebook-title{
  font-size: 16px;
  line-height: 60px;
}
.personalcenter-samplebook-todetail{
  border:none;
  background:none;
  cursor: pointer;
  color:#166cc9;
}
.personalcenter-samplebook-todetail:hover{ 
  text-decoration: underline;
}
.personalcenter-samplebook-detail-list{
  border:1px solid #a7c0db;
  line-height: 40px;
  width:600px;
  font-size: 14px;
  margin:20px 0;
  text-align: center;
}
.personalcenter-samplebook-detail-list li{
  background:#fff;
  overflow: hidden;
}
.personalcenter-samplebook-detail-list li>span{
  float: left;
  width:50%;
}
.personalcenter-samplebook-detail-list li.personalcenter-samplebook-detail-firstitem{
  background:#f6f8f9;
}
.personalcenter-samplebook-detail-state{
  font-size: 20px;
  color:#166cc9;
  line-height: 50px;
  margin-bottom: 30px;
}













</style>
