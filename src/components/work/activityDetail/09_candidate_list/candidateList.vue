<!-- 参选人列表 -->
<template>
  <section class="work_activitydetail_09">
    <!-- 参选人列表 -->
    <ul class="work_activitydetail_09-candidate_list" v-if="CONFIG.showType == 'candidate'">
      <li v-for="(item,i) in candidateList" :key="i">
        <img class="work_activitydetail_09-pic" :src="getPic(item[listKeys.pic])" title="头像" @click="openDialog(i)" />
        <span class="work_activitydetail_09-title" @click="openDialog(i)" v-text="item[listKeys.sysTopic]"></span>
        <el-button type="primary" class="work_activitydetail_09-vote" @click="toVote(item)">
          <i></i>
          <span>投上一票</span>
        </el-button>

        <span class="work_activitydetail_09-vote_num">{{item[listKeys.voteNum]}}
          <label>票</label>
        </span>
      </li>
    </ul>
    <!-- 获奖人列表 -->
    <div class="work_activitydetail_09-prizewinner_list" v-if="CONFIG.showType == 'prizewinner'">
      <h3>普通奖:一等奖</h3>
      <ul>
        <li v-for="(item,i) in candidateList" :key="i">
          <img class="work_activitydetail_09-pic" :src="getPic(item[listKeys.pic])" title="头像" @click="openDialog(i)" />
          <span class="work_activitydetail_09-title" @click="openDialog(i)" v-text="item[listKeys.sysTopic]"></span>
          <el-button type="primary" class="work_activitydetail_09-vote">
            <i></i>
            <span>投上一票</span>
          </el-button>

          <span class="work_activitydetail_09-vote_num">{{item[listKeys.voteNum]}}
            <label>票</label>
          </span>
        </li>
      </ul>

      <h3>普通奖:二等奖</h3>
      <ul>
        <li v-for="(item,i) in candidateList" :key="i">
          <img class="work_activitydetail_09-pic" :src="getPic(item[listKeys.pic])" title="头像" @click="openDialog(i)" />
          <span class="work_activitydetail_09-title" @click="openDialog(i)" v-text="item[listKeys.sysTopic]"></span>
          <el-button type="primary" class="work_activitydetail_09-vote">
            <i></i>
            <span>投上一票</span>
          </el-button>

          <span class="work_activitydetail_09-vote_num">{{item[listKeys.voteNum]}}
            <label>票</label>
          </span>
        </li>
      </ul>
    </div>
    <!-- 详情 -->

    <el-dialog :visible.sync="detailVisible" width="40%">
      <div class="work_activitydetail_09-detail">
        <img class="work_activitydetail_09-pic" :src="getPic(currentCandidate[listKeys.pic])" title="头像" />
        <span class="work_activitydetail_09-title" v-text="currentCandidate[listKeys.sysTopic]"></span>
        <el-button type="primary" class="work_activitydetail_09-vote" @click="toVote(currentCandidate)">
          <i></i>
          <span>投上一票</span>
        </el-button>

        <span class="work_activitydetail_09-vote_num">{{currentCandidate[listKeys.voteNum]}}
          <label>票</label>
        </span>

        <span class="work_activitydetail_09-description" v-html="currentCandidate[listKeys.description]"></span>
      </div>

    </el-dialog>
  </section>
</template>

<script>
import URL from 'url'
import PROJECT_CONFIG from 'projectConfig'
import { Get, Post, getFieldAdapter } from '@common'
export default {
  name: 'work_activitydetail_09',
  reused: true,
  props: {
    namespace: String,
    modulename: String
  },
  data () {
    return {
      CONFIG: null,
      detailVisible: false,/* 详情弹出状态 */
      activityDetailCache: null,/* 活动详情 */
      candidateList: [],
      listKeys: null,
      detailKeys: null,
      currentCandidate: {},
      awardList: []/* 活动奖项列表 */
    };
  },

  computed: {},

  created () {
    this.initConfig();
    this.$bus.$on(this.CONFIG.activityDetail.event.listenName, this.getCandidateList)
  },

  mounted () { },

  methods: {
    initConfig () {
      this.CONFIG = PROJECT_CONFIG[this.namespace].activityDetail.work_activitydetail_09[this.modulename];
      /* 活动详情字段 */
      this.detailKeys = getFieldAdapter(
        this.CONFIG.activityDetail.sysAdapter,
        this.CONFIG.activityDetail.typeAdapter
      );
      /* 参赛人字段 */
      this.listKeys = getFieldAdapter(
        this.CONFIG.getCandidateList.sysAdapter,
        this.CONFIG.getCandidateList.typeAdapter
      );

    },
    getCandidateList (detail) {
      if (detail) {
        this.activityDetailCache = detail;
      }
      // this.candidateList = []
      let params = this.CONFIG.getCandidateList.params
      params.relations = '';
      params.cols = '';
      params.symbols = '';
      params.vals = '';

      /* 添加参数 */
      this.addConditions(params, 'getCandidateList', 'getActivityDetailData')
      this.addConditions(params, 'getCandidateList', 'fixedParams')

      let reg = /,$/gi;
      params.relations = params.relations.replace(reg, "");
      params.cols = params.cols.replace(reg, "");
      params.symbols = params.symbols.replace(reg, "");
      params.vals = params.vals.replace(reg, "");

      Post(CONFIG.BASE_URL + 'spc/prodb/searchNLP.do', params).then(resp => {
        this.candidateList = resp.data.content
        this.getAwardList();
      })
    },
    /* 添加请求的配置参数 */
    addConditions (params, getType, configType) {

      let paramsConfig = this.CONFIG[getType][configType]; //array

      paramsConfig.map(item => {
        params.relations += item.relations + ',';
        params.cols += item.cols + ',';
        params.symbols += item.symbols + ',';

        switch (configType) {
          case 'getActivityDetailData': {
            /* 获取活动详情数据 */
            params.vals += this.activityDetailCache[this.detailKeys[item.vals]] + ',';/* 通过指定适配器字段取活动详情的值 */
            break;
          }
          default: {
            /* 获取固定参数 */
            params.vals += item.vals + ',';
            break;
          }
        }

      })

    },
    /* 获取活动奖项列表 */
    getAwardList () {
      let url = this.CONFIG.getAwardList.url;
      let params = this.CONFIG.getAwardList.params;
      params.relations = '';
      params.cols = '';
      params.symbols = '';
      params.vals = '';

      this.addConditions(params, 'getAwardList', 'getActivityDetailData')
      Get(CONFIG.BASE_URL + url, {
        params
      }).then((resp) => {
        let data = resp.data.content;

        let arr = [];
        let list = this.candidateList
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
          let award = {
            title: '',
            products: [],
          }

          let awardText = element.AWARD_TYPE + ':' + element.SYS_TOPIC;
          award.title = awardText;

          if (list && list instanceof Array) {
            let arrAward = list.filter(entry => {
              return entry.AWARD && entry.AWARD.indexOf(awardText) != -1
            })
            award.products = arrAward;
            arr.push(award)
          }

        }
        debugger
        this.awardList = arr;
      })

    },
    getStaticText (text) {

    },
    /* 打开详情弹窗 */
    openDialog (index) {
      this.detailVisible = true;
      this.currentCandidate = this.candidateList[index]
    },
    /* 获取头像路径 */
    getPic (recordID) {
      if (recordID) {
        return CONFIG.BASE_URL + 'dynamicFile/stream.do?recordID=' + recordID
      } else {
        return ''
      }
    },
    toVote (candidate) {
      let url = 'spc/prodb/activity/voteForActivityItem.do';
      let params = {
        docID: candidate[this.listKeys.sysDocumentId]
      }
      Get(CONFIG.BASE_URL + url, { params }).then(resp => {
        let data = resp.data;
        if (data.result == 1) {
          this.$message({
            type: 'success',
            message: '投票成功'
          })
          this.getCandidateList();
          if (this.currentCandidate.hasOwnProperty(this.listKeys.voteNum)) {
            this.currentCandidate[this.listKeys.voteNum]++
          }
        }
      })
    }

  }
}
</script>
<style>
.work_activitydetail_09-pic {
  width: 150px;
  height: 200px;
}
</style>
