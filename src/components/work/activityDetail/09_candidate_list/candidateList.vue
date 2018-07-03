<!-- 参选人列表 -->
<template>
  <section class="work_activitydetail_09">
    <!-- 参选人列表 -->
    <ul class="work_activitydetail_09-candidate_list" v-if="CONFIG.showType == 'candidate'">
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

    <el-dialog title="提示" :visible.sync="detailVisible" width="40%">
      <div class="work_activitydetail_09-detail">
        <img class="work_activitydetail_09-pic" :src="getPic(currentCandidate[listKeys.pic])" title="头像" />
        <span class="work_activitydetail_09-title" v-text="currentCandidate[listKeys.sysTopic]"></span>
        <el-button type="primary" class="work_activitydetail_09-vote">
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
import { Post, getFieldAdapter } from '@common'
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
      candidateList: [],
      listKeys: null,
      detailKeys: null,
      currentCandidate: {}
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

      this.detailKeys = getFieldAdapter(
        this.CONFIG.activityDetail.sysAdapter,
        this.CONFIG.activityDetail.typeAdapter
      );
      this.listKeys = getFieldAdapter(
        this.CONFIG.getCandidateList.sysAdapter,
        this.CONFIG.getCandidateList.typeAdapter
      );

    },
    getCandidateList (detail) {
      this.candidateList = []
      let config = this.CONFIG.getCandidateList
      let params = {
        doclibCode: config.params.doclibCode,
        relations: '1',
        cols: 'ACTIVITYID',
        symbols: '2',
        vals: detail[this.detailKeys.resId] + ''
      }
      Post(CONFIG.BASE_URL + 'spc/prodb/searchNLP.do', params).then(resp => {
        this.candidateList = resp.data.content
        console.log(resp.data);
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
