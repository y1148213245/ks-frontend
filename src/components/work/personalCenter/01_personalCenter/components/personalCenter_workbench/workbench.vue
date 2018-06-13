<!-- 个人中心我的工作台组件 -->
<template>
  <section class="workbench">
    <!-- 活动列表 -->
    <template v-if="currentShow == 'activityList'">
      <el-table :data="distributeList" border style="width: 100%">
        <el-table-column label="活动名">
          <template slot-scope="scope">
            <span class="workbench-name" v-text="scope.row[config.keys_activity.name]" @click="toTaskList(scope.row)"></span>
          </template>
        </el-table-column>
        <el-table-column :prop="config.keys_activity.taskNum" label="任务数" width="100">
        </el-table-column>
        <el-table-column :prop="config.keys_activity.productNum" label="分配作品数" width="100">
        </el-table-column>
      </el-table>
    </template>
    <!-- 任务列表 -->
    <template v-if="currentShow == 'task'">
      <el-tabs v-model="taskStatus" @tab-click="taskListClick">
        <el-tab-pane label="未审核" name="1_SPC_2_SPC_4"></el-tab-pane>
        <el-tab-pane label="审核通过" name="3"></el-tab-pane>
      </el-tabs>
      <el-table :data="taskList" border style="width: 100%">
        <el-table-column label="任务名">
          <template slot-scope="scope">
            <span class="workbench-name" v-text="scope.row[config.keys_task.name]" @click="toProductList(scope.row)"></span>
          </template>
        </el-table-column>
        <el-table-column :prop="config.keys_task.createdTime" label="任务时间" :formatter="formateDate" width="150">
        </el-table-column>
        <el-table-column :prop="config.keys_task.selectNum" label="分配作品数" width="100">
        </el-table-column>
        <el-table-column :prop="config.keys_task.statusText" label="任务状态" width="100">
        </el-table-column>
        <el-table-column label="比例" width="100">
          <template slot-scope="scope">
            <el-button @click="toPie(scope.row)" type="text" size="small">查看比例</el-button>
          </template>
        </el-table-column>
        <el-table-column label="评奖" width="100">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="toProductList(scope.row)">查看任务</el-button>
          </template>
        </el-table-column>
      </el-table>
      <ui_pagination :pageMessage="{totalCount: this.taskTotalCount - 0 || 0}" :excuteFunction="taskPaging" ref="taskPaging"></ui_pagination>
      <div class="workbench-back_activitylist-button_box">
        <el-button type="button" class="el-button--primary" @click="toActivityList(null)">返回</el-button>
      </div>
    </template>
    <!-- 作品列表 -->
    <el-col :span="24" class="workbench-productList" v-if="currentShow == 'productList'">
      <!--保存状态切换-->
      <el-tabs v-model="tabState" @tab-click="tabClick">
        <el-tab-pane label="未处理" name="unsave"></el-tab-pane>
        <el-tab-pane label="已处理" name="save"></el-tab-pane>
      </el-tabs>
      <!-- 作品筛选 -->
      <div class="workbench-productList-place">
        <label class="workbench-search_label">地区:</label>
        <el-select v-model="workSearch.areaList" multiple placeholder="请选择地区">
          <el-option v-for="item in areaListOptions" :key="item" :label="item" :value="item">
          </el-option>
        </el-select>
      </div>

      <div class="workbench-productList-group">
        <label class="workbench-search_label">组别:</label>
        <el-select v-model="workSearch.group" placeholder="请选择组别">
          <el-option label="全部" :value="0"></el-option>
          <el-option v-for="(item,index) in classlimtOptions" :label="item.label" :value="item.value" :key="index"></el-option>
        </el-select>
      </div>

      <div class="workbench-productList-school">
        <label class="workbench-search_label">学校:</label>
        <el-select v-model="workSearch.school" placeholder="请选择学校">
          <el-option label="全部" :value="0"></el-option>
          <el-option v-for="(item,index) in schoolOptions" :label="item.label" :value="item.value" :key="index"></el-option>
        </el-select>
      </div>

      <div class="workbench-productList-prize">
        <label class="workbench-search_label">奖项:</label>

        <el-select v-model="workSearch.awardList" multiple placeholder="请选择奖项">
          <el-option v-for="item in awardListOptions" :key="item" :label="item" :value="item">
          </el-option>
        </el-select>
      </div>

      <div class="workbench-productList-name">
        <label class="workbench-search_label">作品名称:</label>
        <el-input v-model="workSearch.workName" placeholder="请输入作品名"></el-input>
        <el-button icon="el-icon-search" circle @click="formFilter">搜索</el-button>
      </div>

      <el-table :data="distributeWorkList" border style="width: 100%">
        <el-table-column :prop="config.keys_product.name" label="作文标题">
        </el-table-column>
        <el-table-column :prop="config.keys_product.commitStatus" label="获奖状态" width="100">
        </el-table-column>
        <el-table-column label="操作" width="100">
          <template slot-scope="scope">
            <el-button v-if="scope.row[config.keys_product.taskStatus] == 1 || scope.row[config.keys_product.taskStatus] == 4" @click="toReview(scope.row)" type="text" size="small">评审</el-button>
            <el-button v-else @click="toReview(scope.row)" type="text" size="small">查看评审</el-button>
          </template>
        </el-table-column>

      </el-table>
      <ui_pagination :pageMessage="{totalCount: this.workTotalCount - 0 || 0}" :excuteFunction="workPaging" ref="workPaging"></ui_pagination>
      <el-button v-if="taskDetail[config.keys_task.status] == 1 || taskDetail[config.keys_task.status] == 4" class="workbench-commit_review" type="primary" @click="commitAward()">提交评审</el-button>
      <div class="workbench-back_activitylist-button_box">
        <el-button type="button" class="el-button--primary" @click="toTaskList(null)">返回</el-button>
      </div>

    </el-col>
    <!-- 查看比例 -->
    <el-col v-if="currentShow == 'pie'" :span="24" class="workbench-pie">
      <el-col :span="24" class="workbench-pie-condition">
        <el-col :span="8">
          <el-select v-model="select_place" placeholder="选择地区" style="width:90%;" @change="pieSelectChange()">
            <el-option label="全部" :value="''"></el-option>
            <el-option v-for="(area,index) in areaListOptions" :label="area" :value="area" :key="index"></el-option>
          </el-select>
        </el-col>
        <el-col :span="8">
          <el-select v-model="select_school" placeholder="选择学校" style="width:90%;" @change="pieSelectChange()">
            <el-option label="全部" :value="''"></el-option>
            <el-option v-for="(school,index) in schoolOptions" :label="school.value" :value="school.value" :key="index"></el-option>
          </el-select>
        </el-col>
        <el-col :span="8">
          <el-select v-model="select_award" placeholder="选择奖项" style="width:90%;" @change="pieSelectChange()">
            <el-option v-for="(award,index) in awardListOptions" :label="award" :value="award" :key="index"></el-option>
          </el-select>
        </el-col>
      </el-col>
      <el-col :span="24">
        <div class="workbench-pie-content" id="pie"></div>
      </el-col>
      <div class="workbench-back_activitylist-button_box">
        <el-button type="button" class="el-button--primary" @click="toTaskList(null)">返回</el-button>
      </div>
    </el-col>

    <!-- 评审 -->
    <el-col v-if="currentShow == 'review'" :span="24" class="workbench-review">
      <div class="workbench-review-product_title" v-text="productDetail[config.keys_productDetail.title]"></div>
      <div class="workbench-review-product_abstract" v-html="productDetail[config.keys_productDetail.abstract]"></div>
      <div class="workbench-review-product_content" v-html="productDetail[config.keys_productDetail.content]"></div>
      <!-- <div class="workbench-review-product_fujian">
        文件下载：<a href="#" v-text="productDetail[config.keys_productDetail.fujian]"></a>
     </div> -->
      <div class="workbench-review-history" v-if="productRecord[config.keys_product.taskStatus] == 2 || productRecord[config.keys_product.taskStatus] == 3">
        <el-table :data="historyReviewList" stripe border style="margin:0 auto;width:600px;">

          <el-table-column :prop="config.keys_historyReview.commitTime" label="提交时间" :formatter="formateDate" width="300">
          </el-table-column>
          <el-table-column :prop="config.keys_historyReview.award" label="历史评审结果" width="300">
          </el-table-column>
        </el-table>
      </div>
      <!-- 评审按钮 -->
      <div id="radioCom" class="workbench-review_box" v-if="productRecord[config.keys_product.taskStatus] == 1 || productRecord[config.keys_product.taskStatus] == 4">
        <!-- v-if="productRecord[config.keys_product.taskStatus] == 1 || productRecord[config.keys_product.taskStatus] == 4" -->
      </div>

      <div class="workbench-pre_next">
        <el-button type="button" class="el-button--primary workbench-pre" @click="toPre()">上一篇</el-button>
        <el-button v-if="productRecord[config.keys_product.taskStatus] == 1 || productRecord[config.keys_product.taskStatus] == 4" type="button" class="el-button--primary workbench-next" @click="saveAndtoNext()">保存,下一篇</el-button>
        <el-button v-else type="button" class="el-button--primary workbench-next" @click="toNext()">下一篇</el-button>
      </div>
      <div class="workbench-back_review-button_box">
        <el-button type="button" class="el-button--primary" @click="toProductList('')">返回</el-button>
      </div>
    </el-col>
  </section>
</template>

<script>
import URL from "url";
import PROJECT_CONFIG from "projectConfig";
import { Post, Get } from "@common";
import { mapGetters, mapActions } from "vuex";
import * as interfaces from "@work/login/common/interfaces.js";
import Moment from "moment";
import Vue from "vue";
export default {
  name: "workbench",
  reused: true,
  props: {
    namespace: String,
    config: {
      type: Object,
      default () {
        return {
          reviewPrize: {
            defaultPrize: '未得奖'
          },
          keys_teacher: {
            name: 'SYS_TOPIC',
            id: 'SYS_DOCUMENTID'
          },
          keys_activity: {
            id: "ACTIVITY_SYS_DOCUMENTID",
            name: "ACTIVITY_SYS_TOPIC",
            begin: "ACTIVITY_BEGIN_TIMESTAMPNEW",
            end: 'ACTIVITY_END_TIMESTAMPNEW',
            productNum: "WORK_COUNT",
            taskNum: "TASK_COUNT",
            reviewStatus: "ACTIVITY_COMMIT_STATUS",
            verifyStatus: "ACTIVITY_VERIFY_STATUS",
            class: "CLASSLIMT",
            vReviewTime: 'vReviewTime',
            vCommitStatus: 'vCommitStatus'

          },
          keys_task: {
            id: 'SYS_DOCUMENTID',
            name: "TASK_NAME",
            selectNum: "SELECT_NUM",
            status: "STATUS",
            statusText: 'statusText',
            school: "SCHOOL",
            area: "AREA",
            taskInfo: "TASK_INFO",
            createdTime: "SYS_CREATED"
          },
          keys_product: {/* 评奖记录列表 */
            title: "SYS_TOPIC",
            name: "WORKSNAME",
            award: "AWARD",
            docId: "SYS_DOCUMENTID",
            workId: "WORKSID",
            commitStatus: "COMMIT_STATUS",
            taskStatus: "TASK_STATUS",

          },
          keys_productDetail: {
            id: "SYS_DOCUMENTID",
            title: "SYS_TOPIC",
            abstract: "SYS_ABSTRACT",
            content: "TEXTCONTENT",
            fujian: "fujian",
            status: 'SYS_CURRENTSTATUS'
          },
          keys_historyReview: {
            no: "no",
            award: "AWARD",
            commitTime: "COMMIT_TIME"
          },
          keys_award: {
            topic: "SYS_TOPIC",
            type: "AWARD_TYPE"
          },
          keys_preNext: {
            preDocId: "prev",
            preRecordId: "prevRecord",
            nextDocId: "next",
            nextRecordId: "nextRecord"
          }
        };
      }
    }
  },
  data () {
    return {
      CONFIG: null,
      echarts: require("echarts/lib/echarts"),
      distributeList: [] /* 活动列表 */,
      activityDetail: "",/* 活动详情 */
      taskList: [],/* 任务列表 */
      taskTotalCount: 0,
      taskStatus: "1_SPC_2_SPC_4",/* 当前筛选的任务状态 */
      taskDetail: "",/* 任务详情 */
      seacrhTaskConditions: {
        '3': {
          page: "1",
          size: "15"
        },
        '1_SPC_2_SPC_4': {
          page: "1",
          size: "15"
        }
      },
      seacrhWorkConditions: {/* 作品筛选条件 */
        save: {
          awardStatus: "save",
          workName: "",
          school: "",
          group: "",
          awardList: [],
          areaList: [],

          page: "1",
          size: "15"
        },
        unsave: {
          awardStatus: "unsave",
          workName: "",
          school: "",
          group: "",
          awardList: [],
          areaList: [],

          page: "1",
          size: "15"
        }
      },
      workSearch: {/* 作品条件绑定dom */
        areaList: [],
        school: "",
        group: "",
        workName: "",
        awardList: [],
        awardStatus: "unsave"
      },
      distributeWorkList: [] /* 当前作品列表 */,
      workTotalCount: 0,/* 作品总数 */
      workPageNo: '1',/* 作品分页页码 */
      workPageSize: '15',/* 作品分页页容 */
      productDetail: "" /* 当前作品详情 */,
      productRecord: "",/* 评奖记录详情 */
      award: "",/* 保存的奖项 */
      awardList: [] /* 当前奖项列表 */,
      selectAwards: [] /* 选中的奖项 */,
      taskId: "",/* 当前任务id */
      teacherId: "" /* 当前教师id */,
      activityId: "" /* 当前活动id */,
      recordId: "" /* 作品列表中取到的数据, 用于评奖 */,
      productDocId: "" /* 当前作品id */,
      preNext: "" /* 上一页下一页数据 */,

      schoolOptions: [],//筛选学校列表
      classlimtOptions: [],//筛选组别列表
      areaListOptions: [],//筛选地区列表
      awardListOptions: [],//筛选奖项列表
      tabState: 'unsave',//已保存/未保存切换  默认未保存
      historyReviewList: [],/* 历史评审结果 */
      currentShow: "activityList",
      select_place: "",
      select_school: "",
      select_award: ""
    };
  },

  computed: {
    ...mapGetters("login", {
      getMemberInfo: interfaces.GET_MEMBER
    })
  },

  created () {
    this.initConfig();
    require("echarts/lib/chart/pie");
    require("echarts/lib/component/tooltip");
    require("echarts/lib/component/legendScroll");
    require("echarts/theme/shine")
    require("echarts/theme/macarons")

  },

  mounted () {
    if (this.getMemberInfo && this.getMemberInfo.identifyId) {
      this.getTeacher(this.getMemberInfo.identifyId);
    }
  },

  methods: {
    /* 动态radio */
    addRadioComponent () {
      let _this = this;
      let awardList = JSON.parse(JSON.stringify(this.awardList));
      let data = {
        awardList: awardList,
        vmodel: {}
      };
      let html = ''

      for (let index = 0; index < awardList.length; index++) {
        const item = awardList[index];

        data.vmodel['data' + item.id] = {}
        data.vmodel['data' + item.id].type = item.type;
        data.vmodel['data' + item.id].val = '';


        item.topics.map(entry => {
          if (entry.topic == this.config.reviewPrize.defaultPrize) {
            let award = item.type + ':' + _this.config.reviewPrize.defaultPrize;
            data.vmodel['data' + item.id].val = award;
            _this.radioChlick(award);
          }
        })
        _this.award.map(entry => {
          if (entry.indexOf(item.type + ':') > -1) {
            data.vmodel['data' + item.id].val = entry
            _this.radioChlick(entry)
          }
        })

        html += `
          <div class="workbench-review_box-simple_prize">
          <label>{{awardList[${index}].type}}:</label>
          <el-radio-group v-model="vmodel.${'data' + item.id}.val" @change="radioClick">
            <el-radio  v-for="(item,i) in awardList[${index}].topics" :label="awardList[${index}].type + ':' + item.topic" :key="i">{{item.topic}}</el-radio>
          </el-radio-group>
          </div>
        `
      }

      let options = {
        template: `<div> ${html} </div>`,
        data () {
          return data
        },
        methods: {
          radioClick (val) {
            console.log(val)
            _this.radioChlick(val)
          }
        }
      }
      const Component = Vue.extend(options)

      const radios = new Component().$mount()

      $("#radioCom").html(radios.$el)
    },
    initConfig () {
      this.CONFIG = PROJECT_CONFIG[this.namespace];
    },
    /* 去任务列表 */
    toTaskList (row) {
      this.currentShow = "task";
      let param = row ? row[this.config.keys_activity.id] : this.activityId;
      this.activityId = param;

      this.getTaskList();
      this.getAwardList();
      this.getActivityDetail();
      this.$nextTick(() => {
        this.$refs['taskPaging'].changeCurrentPage(this.seacrhTaskConditions[this.taskStatus].page - 0, this.seacrhTaskConditions[this.taskStatus].size - 0);
      })
    },
    /* 任务列表点击事件 */
    taskListClick () {
      this.toTaskList();
    },
    /* 去作品列表 */
    toProductList (row) {
      this.selectAwards = [];

      this.currentShow = "productList";
      let param = row ? row[this.config.keys_task.id] : this.taskId;
      this.taskId = param;
      this.getDistributeWorkList();
      this.getTaskInfo(); //获取地区

      $("#radioCom").html('')
      this.$nextTick(() => {
        this.$refs['workPaging'].changeCurrentPage(this.seacrhWorkConditions[this.workSearch.awardStatus].page - 0, this.seacrhWorkConditions[this.workSearch.awardStatus].size - 0);
      })

    },
    /* 去评奖 */
    toReview (row) {
      this.currentShow = "review";
      let param = row ? row[this.config.keys_product.workId] : this.productDocId;
      this.productDocId = param;
      this.recordId = row
        ? row[this.config.keys_product.docId]
        : this.recordId;

      this.getProductDetail(param);
      this.getDistributeWorkPrevNext();
      this.getSaveAward();

    },
    toPie (row) {
      this.currentShow = "pie";
      this.taskId = row ? row[this.config.keys_task.id] : this.productDocId;
      this.getRatio()
      this.getTaskInfo()

    },
    toActivityList () {
      this.currentShow = "activityList";
    },
    /* 通过教师获取教师参与的活动 */
    getDistributeList () {
      this.distributeList = [];
      Get(CONFIG.BASE_URL + "spc/prodb/activity/distributeList.do", {
        params: {
          teacher: this.teacherId,
          page: "1",
          pageSize: "15"
        }
      }).then(resp => {
        let list = resp.data.data;

        for (let index = 0; index < list.length; index++) {
          const element = list[index];
          break;
        }
        this.distributeList = list;
      });
    },
    /* 获取活动详情 */
    getActivityDetail () {
      this.activityDetail = "";
      this.classlimtOptions = [];

      let params = {
        doclibCode: 'PORTAL_ACTIVITY',
        docID: this.activityId
      }
      Get(CONFIG.BASE_URL + 'spc/prodb/detail.do', { params }).then(resp => {
        this.activityDetail = resp.data;
        let classlimtValue = this.activityDetail[this.config.keys_activity.class].split(';');
        let classlimtArr = []
        for (let i = 0; i < classlimtValue.length; i++) {
          let classlimtObj = {};
          classlimtObj.value = classlimtValue[i];
          classlimtObj.lable = classlimtValue[i];
          classlimtArr.push(classlimtObj);
        }
        this.classlimtOptions = classlimtArr;
      })
    },
    /* 通过教师id和活动id获取任务列表 */
    //状态是以 （1,2,3,4）返回的，1是已分配，2是待审核，3是审核通过，4是审核未通过
    getTaskList () {
      this.taskList = []
      let params = {
        doclibCode: "ZPRWK",
        relations: "1,1,3",
        cols: "TASK_TEACHERID,ACTIVITYID,STATUS",
        symbols: "2,2,2",
        vals: this.teacherId + "," + this.activityId + "," + this.taskStatus,
        page: this.seacrhTaskConditions[this.taskStatus].page,
        size: this.seacrhTaskConditions[this.taskStatus].size
      };
      let _this = this;
      Post(CONFIG.BASE_URL + "spc/prodb/searchNLP.do", params).then(resp => {
        if (resp.data.content.length > 0) {
          let taskList = resp.data.content

          let msg = "";
          for (let index = 0; index < taskList.length; index++) {
            const element = taskList[index];
            switch (element[_this.config.keys_task.status]) {
              case 1:
                element.statusText = '已分配';
                break;
              case 2:
                element.statusText = '待审核';
                break;
              case 3:
                element.statusText = '审核通过';
                break;
              case 4:
                element.statusText = '审核未通过';
                break;
              default:
                element.statusText = '无状态';
                break;
            }
          }
          _this.taskList = taskList;

        }
        _this.taskTotalCount = resp.data.totalElements;
      });
    },
    /* 获取任务获奖比例 */
    getRatio () {

      let params = {
        activityID: this.activityId,
        teacherID: this.teacherId,
        taskID: this.taskId,
        awardType: this.select_award,
        area: this.select_place,
        school: this.select_school
      }

      Get(CONFIG.BASE_URL + "spc/prodb/activity/api/activity/getRatioByTaskID.do", { params }).then(resp => {
        let award = resp.data.data;

        this.$nextTick(this.initEchartsPie(award));
      });
    },
    /* 通过会员身份证号获取教师id */
    getTeacher (identifyId) {
      this.teacherId = "";
      let params = {
        doclibCode: "PORTAL_TEACHER",
        relations: "1",
        cols: "ID_NUMBER",
        symbols: "2",
        vals: identifyId
      };
      Post(CONFIG.BASE_URL + "spc/prodb/searchNLP.do", params).then(resp => {
        if (resp.data.content.length > 0) {
          this.teacherId = resp.data.content[0][this.config.keys_teacher.id];
          this.getDistributeList();
        }
      });
    },
    /* 获取任务的 地区.学校.年级  */
    //TASK_INFO
    getTaskInfo () {
      this.taskDetail = "";
      this.areaListOptions = [];
      this.schoolOptions = [];
      this.select_place = "";
      this.select_school = "";

      Get(CONFIG.BASE_URL + "spc/prodb/detail.do", {
        params: {
          doclibCode: "ZPRWK",
          docID: this.taskId
        }
      }).then(resp => {
        let taskInfo = JSON.parse(resp.data[this.config.keys_task.taskInfo]);
        let schoolArr = [];
        let areaArr = [];
        for (let i = 0; i < taskInfo.length; i++) {
          let schoolName = {};
          let areaName = [];
          schoolName.value = taskInfo[i][this.config.keys_task.school];
          schoolName.lable = taskInfo[i][this.config.keys_task.school];
          areaName = taskInfo[i][this.config.keys_task.area];
          schoolArr.push(schoolName);
          areaArr.push(areaName);
        }
        this.areaListOptions = areaArr.duplicateRemoval();/* duplicateRemoval: 工具arrayUtiles中的去重方法 */
        this.schoolOptions = schoolArr.duplicateRemoval();

        this.taskDetail = resp.data;
      });
    },
    /* 通过任务id获取作品列表 */
    getDistributeWorkList () {
      this.distributeWorkList = []
      let params = {
        doclibCode: "PORTAL_AWARDRECORD",
        relations: "1",
        cols: "TASKID",
        symbols: "2",
        vals: this.taskId,
        page: this.seacrhWorkConditions[this.workSearch.awardStatus].page - 1 + '',
        size: this.seacrhWorkConditions[this.workSearch.awardStatus].size
      };

      this.addWorkSearchParams(params)

      Post(CONFIG.BASE_URL + "spc/prodb/searchNLP.do", params).then(resp => {
        if (resp.data.content.length > 0) {
          let distributeWorkList = resp.data.content
          for (let index = 0; index < distributeWorkList.length; index++) {
            const element = distributeWorkList[index];
            if (!element[this.config.keys_product.commitStatus]) {
              element[this.config.keys_product.commitStatus] = '未评审'
            }
          }
          this.distributeWorkList = distributeWorkList;

        }
        this.workTotalCount = resp.data.totalElements;
      });

    },
    /* 添加筛选参数 */
    addWorkSearchParams (params) {
      let conditions = JSON.parse(JSON.stringify(this.seacrhWorkConditions[this.workSearch.awardStatus]))

      for (const key in conditions) {
        if (conditions.hasOwnProperty(key)) {
          const element = conditions[key];
          switch (key) {
            case 'areaList': {
              if (element.length > 0) {
                let vals = '';
                element.map(item => {
                  vals += '_SPC_' + item

                })
                addParams(3, 'AREA', 2, vals.substring(5, vals.length));
              }
              break;
            }
            case 'school': {
              if (element) {
                addParams(1, 'SCHOOL', 2, element)
              }
              break;
            }
            case 'group': {
              if (element) {
                addParams(1, 'CLASS', 2, element)
              }
              break;
            }
            case 'workName': {
              if (element) {
                addParams(1, 'WORKSNAME', 1, element)
              }
              break;
            }
            case 'awardList': {
              if (element.length > 0) {
                let vals = "";
                element.map(item => {
                  vals += '_SPC_' + item
                })
                addParams(3, 'AWARD', 1, vals.substring(5, vals.length))
              }
              break;
            }
            case 'awardStatus': {
              if (element == 'save') {
                addParams(1, 'AWARD', 8, '1')
              } else {
                addParams(1, 'AWARD', 7, '1')
              }
              break;
            }
            default: {
              console.log('该属性没有对应筛选项');
              break;
            }
          }
        }
      }
      function addParams (relations, cols, symbols, vals) {
        params.relations += ',' + relations
        params.cols += ',' + cols
        params.symbols += ',' + symbols
        params.vals += ',' + vals
      }
    },
    /*已保存 未保存切换 */
    tabClick (tab, event) {

      let conditions = JSON.parse(JSON.stringify(this.seacrhWorkConditions[tab.name]))

      this.workSearch.areaList = conditions.areaList;
      this.workSearch.school = conditions.school;
      this.workSearch.group = conditions.group;
      this.workSearch.workName = conditions.workName;
      this.workSearch.awardList = conditions.awardList;
      this.workSearch.awardStatus = tab.name;

      this.getDistributeWorkList();
    },
    /* 任务分页 */
    taskPaging ({ pageNo, pageSize }) {
      this.seacrhTaskConditions[this.taskStatus].page = pageNo;
      this.seacrhTaskConditions[this.taskStatus].size = pageSize;
      this.getTaskList();
    },
    /* 作品分页 */
    workPaging ({ pageNo, pageSize }) {
      /* 缓存分页 */
      this.seacrhWorkConditions[this.workSearch.awardStatus].page = pageNo;
      this.seacrhWorkConditions[this.workSearch.awardStatus].size = pageSize;
      this.getDistributeWorkList();
    },
    /* 通过库码和docId获取作品详情 */
    getProductDetail (docId) {
      Get(CONFIG.BASE_URL + "spc/prodb/detail.do", {
        params: {
          doclibCode: "PORTAL_WORKS",
          docID: docId
        }
      }).then(resp => {
        this.productDetail = resp.data;
        this.productDocId = this.productDetail[
          this.config.keys_productDetail.id
        ];
        this.getHistoryAward(this.productDocId);
      });
    },
    /* 获取已保存的奖项 */
    getSaveAward () {
      this.award = [];
      this.productRecord = '';

      let params = {
        doclibCode: "PORTAL_AWARDRECORD",
        relations: "1,1",
        cols: "TASKID,SYS_DOCUMENTID",
        symbols: "2,2",
        vals: this.taskId + ',' + this.recordId
      };
      Post(CONFIG.BASE_URL + "spc/prodb/searchNLP.do", params).then(resp => {
        if (resp.data.content.length > 0) {
          let distributeWorkList = resp.data.content;
          let award = null;
          if (distributeWorkList.length > 0) {
            let awardsArr = []
            if (distributeWorkList[0][this.config.keys_product.award]) {
              awardsArr = distributeWorkList[0][this.config.keys_product.award].split(',')
            }

            this.award = awardsArr;
            this.productRecord = distributeWorkList[0]
            this.$nextTick(() => {
              this.addRadioComponent();
            })


          }

        }
      });
    },
    /* 根据WORKSID和'已提交'状态获取历史奖项 */
    getHistoryAward (id) {
      let _this = this;
      let params = {
        doclibCode: "PORTAL_AWARDRECORD",
        relations: "1,1",
        cols: "WORKSID,TASK_STATUS",
        symbols: "2,2",
        vals: id + ",3",
        page: '0',
        size: '99'
      };
      Post(CONFIG.BASE_URL + "spc/prodb/searchNLP.do ", params).then(
        resp => {
          this.historyReviewList = resp.data.content;
        }
      );
    },
    /* 通过activityId获取奖项列表 */
    getAwardList () {
      this.awardList = [];/* 奖项对象数组 */
      this.awardListOptions = [];/* 奖项字符串数组 */
      this.select_award = "";/* 饼图选中奖项类型 */

      let _this = this;
      let params = {
        doclibCode: "PORTAL_AWARD",
        relations: 1,
        cols: "ACTIVITYID",
        symbols: 2,
        vals: this.activityId,
        page: 1,
        size: 99
      };
      Post(CONFIG.BASE_URL + "spc/prodb/searchNLP.do", params).then(resp => {
        let arr = resp.data.content;
        let awards = [];
        let awardTypeArr = [];
        /* 遍历返回数据, */
        for (let index = 0; index < arr.length; index++) {
          const element = arr[index];

          if (awards.length == 0) {
            let item = {
              id: index,
              type: element[_this.config.keys_award.type],
              topics: [
                {
                  topic: element[_this.config.keys_award.topic]
                }
              ]
            };
            awards.push(item);
          } else {
            /* 遍历存储容器,同一type */
            let isHad = false;
            for (let j = 0; j < awards.length; j++) {
              const award = awards[j];
              if (award.type == element[_this.config.keys_award.type]) {
                award.topics.push({
                  topic: element[_this.config.keys_award.topic]
                });
                isHad = true;
                break;
              }
            }
            if (!isHad) {
              let item = {
                id: index,
                type: element[_this.config.keys_award.type],
                topics: [
                  {
                    topic: element[_this.config.keys_award.topic]
                  }
                ]
              };
              awards.push(item);
            }
          }
          awardTypeArr.push(element[_this.config.keys_award.type] + ':' + element[_this.config.keys_award.topic]);
        }
        this.awardList = awards;

        this.awardListOptions = awardTypeArr
        this.select_award = this.awardListOptions[0].split(':')[0]
        // this.$nextTick(() => {
        //   $(".none_radio").prop("checked", 'checked');
        // })
      });
    },
    /* 点击奖项 */
    radioChlick (award) {
      let awardArr = award.split(':');
      let awardType = awardArr[0]
      let awardTopic = awardArr[1]
      let isHas = false;
      for (let index = 0; index < this.selectAwards.length; index++) {
        let element = this.selectAwards[index];
        if (element.indexOf(awardType) >= 0) {
          this.selectAwards[index] = award;
          isHas = true;
          break;
        }
      }
      if (!isHas) {
        this.selectAwards.push(award);
      }

    },
    /* 传recordId和奖项保存评奖 */
    saveAward () {
      Post(CONFIG.BASE_URL + "spc/prodb/activity/saveAward.do", {
        docId: this.recordId,
        award: this.selectAwards.join(",")
      }).then(resp => {
        let result = resp.data.result;
        if (result == "1") {
          this.$message({
            type: "success",
            message: "保存成功"
          });
        } else {
          this.$message({
            message: "保存失败",
            type: "error"
          });
        }
      });
    },
    /* 传teacherId提交评奖 */
    commitAward () {
      let params = {
        taskId: this.taskId
      };
      Get(CONFIG.BASE_URL + "spc/prodb/activity/commitTaskAward.do", {
        params
      }).then(resp => {
        let result = resp.data.result;
        if (result == 1) {
          this.$message({
            type: "success",
            message: "提交成功"
          });
        } else {
          this.$message({
            type: "error",
            message: "还有作品未评奖"
          });
        }
        /* 刷新作品列表 */
        this.toProductList();
      });
    },
    /* 获取上一篇下一篇 */
    getDistributeWorkPrevNext () {
      let params = {
        doclibCode: "PORTAL_AWARDRECORD",
        relations: "1",
        cols: "TASKID",
        symbols: "2",
        vals: this.taskId + '',
        page: '0',
        size: '99',
        docID: this.recordId + ''
      };

      this.addWorkSearchParams(params)

      Post(CONFIG.BASE_URL + "spc/prodb/searchNLPPrevNext.do",
        params
      ).then(resp => {
        this.preNext = resp.data;
      });
    },
    /* 上一篇 */
    toPre () {


      let recordId = this.preNext[this.config.keys_preNext.preDocId];
      if (recordId == null || recordId == this.recordId) {
        this.$message({
          type: "warning",
          message: "已是第一篇"
        });
      } else {
        this.selectAwards = []
        this.recordId = recordId;
        this.getProductDetailByRecordId();
      }
    },
    /* 下一篇 */
    saveAndtoNext () {

      if (this.selectAwards.length == this.awardList.length) {
        this.saveAward();
        this.toNext();
      } else {
        this.$message({
          type: "warning",
          message: "请评奖"
        });
      }

    },
    toNext () {

      let recordId = this.preNext[this.config.keys_preNext.nextDocId];

      if (recordId == null || recordId == this.recordId) {
        this.$message({
          duration: 0,
          showClose: true,
          type: "warning",
          message: "已是最后一篇"
        });
      } else {
        this.selectAwards = []
        this.recordId = recordId;
        this.getProductDetailByRecordId();
      }
    },
    /* 通过recordid获取作品id */
    getProductDetailByRecordId () {
      let params = {
        doclibCode: "PORTAL_AWARDRECORD",
        relations: "1",
        cols: "SYS_DOCUMENTID",
        symbols: "2",
        vals: this.recordId
      }


      Post(CONFIG.BASE_URL + "spc/prodb/searchNLP.do", params).then(resp => {
        if (resp.data.content.length > 0) {
          this.productDocId = resp.data.content[0][this.config.keys_product.workId];
          this.toReview();
        }

      })

    },
    formFilter () {

      let conditions = JSON.parse(JSON.stringify(this.workSearch))

      this.seacrhWorkConditions[this.workSearch.awardStatus].areaList = conditions.areaList;
      this.seacrhWorkConditions[this.workSearch.awardStatus].school = conditions.school;
      this.seacrhWorkConditions[this.workSearch.awardStatus].group = conditions.group;
      this.seacrhWorkConditions[this.workSearch.awardStatus].workName = conditions.workName;
      this.seacrhWorkConditions[this.workSearch.awardStatus].awardList = conditions.awardList;

      this.getDistributeWorkList()
    },
    formateDate (row, col, cell) {
      return Moment(Number(cell)).format("YYYY-MM-DD")
    },
    /* 饼图数据筛选事件 */
    pieSelectChange () {
      this.getRatio()
    },
    /* 初始化饼图 */
    initEchartsPie (data) {
      let legendData = [];
      let seriesData = [];
      let color = [];
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const element = data[key];
          let colorRGB = randomRgbColor()
          legendData.push(key);
          seriesData.push({ value: element, name: key })
          // color.push(colorRGB)
        }
      }

      let option = {
        // title: {
        //   text: '某站点用户访问来源',
        //   subtext: '纯属虚构',
        //   x: 'center'
        // },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: legendData
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: seriesData,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ],
        // color:color



      };
      let echarts = this.echarts.init(document.getElementById("pie"), 'macarons');

      echarts.setOption(option);
      function randomRgbColor () { //随机生成RGB颜色
        var r = Math.floor(Math.random() * 256); //随机生成256以内r值
        var g = Math.floor(Math.random() * 256); //随机生成256以内g值
        var b = Math.floor(Math.random() * 256); //随机生成256以内b值
        return `rgb(${r},${g},${b})`; //返回rgb(r,g,b)格式颜色
      }
    }

  },
  watch: {
    getMemberInfo: function (nv, ov) {
      if (nv.identifyId) {
        this.getTeacher(nv.identifyId);
      }

    }
  }
};
</script>
<style>
.workbench .el-table__body-wrapper {
  overflow: hidden;
}
.workbench .el-table {
  margin-top: 10px;
}

.workbench-name {
  cursor: pointer;
}
.workbench-productList {
  width: 100%;
}
.workbench-pie {
}
.workbench-pie-condition {
  padding: 10px 0;
}
.workbench-pie-content {
  width: 100%;
  height: 500px;
}
.workbench-back_activitylist-button_box,
.workbench-back_review-button_box {
  width: 100%;
  padding: 20px 0;
  text-align: right;
}

.workbench-review-product_title {
  padding: 20px 0;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.workbench-review-product_abstract {
  padding: 20px 0;
  color: dimgray;
  font-size: 14px;
}
.workbench-review-product_content {
  padding: 20px 0;
  font-size: 14px;
}
.workbench-review-product_fujian {
  padding: 20px 0;
}

.workbench-review-history {
  padding: 20px 0;
}

.workbench-review_box {
}
.workbench-review_box-simple_prize,
.workbench-review_box-teacher_prize {
  padding-left: 100px;
  margin: 10px auto;
}
.workbench-commit_review {
  margin-top: 10px;
}
.workbench-next {
  float: right;
}

.workbench .el-select {
  width: 80%;
}
.workbench-productList-place,
.workbench-productList-school,
.workbench-productList-group,
.workbench-productList-prize {
  display: inline-block;
  width: 33%;
  margin: 7px 0;
}
.workbench-productList-name {
  width: 65.5%;
  display: inline-block;
}
.workbench-productList-place,
.workbench-productList-school,
.workbench-productList-group,
.workbench-productList-prize {
  display: inline-block;
  /* margin-right: 10px; */
}
.workbench-search_label {
  display: inline-block;
}
.workbench-productList-prize .workbench-search_label,
.workbench-productList-place .workbench-search_label {
  height: 30px;
  line-height: 30px;
}
.el-checkbox-group .el-checkbox:first-child {
  margin-left: 30px;
}
.workbench-productList-name .workbench-search_label {
  /* width: 9%; */
}
.workbench-productList-name .el-input {
  width: 70%;
}
.workbench-productList-name .el-button {
  /* width: 10%; */
}
/* ui美化样式 */
.workbench .el-table--enable-row-hover .el-table__body tr:hover > td {
  background: #f5f5f5;
  color: #4a4a4a;
}
.workbench-review_box {
  background: #f1f6ed;
  padding: 12px;
  margin-bottom: 20px;
}
.workbench-review_box-simple_prize,
.workbench-review_box-teacher_prize {
  margin: 20px auto;
  font-size: 14px;
  font-weight: bold;
}
.workbench-review_box-simple_prize label,
.workbench-review_box-teacher_prize label {
  color: #949494;
  font-size: 13px;
  margin-right: 20px;
}
.workbench-review_box-simple_prize input,
.workbench-review_box-teacher_prize input {
  margin: 0px 10px 0px 30px;
}
.workbench-review-product_abstract {
  font-style: italic;
  font-size: 13px;
}
.workbench-review-product_content {
  font-size: 14px;
  line-height: 1.8;
}
</style>
