<!-- 个人中心我的工作台组件 -->
<template>
 <el-col :span="19" class="workbench">
   <!-- 活动列表 -->
    <el-table
    v-if="currentShow == 'activityList'"
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      label="活动名">
      <template slot-scope="scope">
        <span class="workbench-name" v-text="scope.row[config.keys_activity.name]" @click="toProductList(scope.row)"></span>
      </template>
    </el-table-column>
    <el-table-column
      :prop="config.keys_activity.date"
      label="评审时间"
      width="200">
    </el-table-column>
    <el-table-column
      :prop="config.keys_activity.productNum"
      label="分配作品数"
      width="100">
    </el-table-column>
    <el-table-column
      :prop="config.keys_activity.reviewStatus"
      label="任务状态"
      width="100">
    </el-table-column>
    <el-table-column
      label="比例"
      width="100">
      <template slot-scope="scope">
        <el-button @click="toPie()" type="text" size="small">查看比例</el-button>
      </template>
    </el-table-column>
  </el-table>

  <!-- 作品列表 -->
  <el-col :span="24" class="workbench-productList" v-if="currentShow == 'productList'">
    <el-table
      :data="productList"
      border
      style="width: 100%">
      <el-table-column
        :prop="config.keys_product.title"
        label="作文标题">
      </el-table-column>
      <el-table-column
        :prop="config.keys_product.award"
        label="获奖状态"
        width="100">
      </el-table-column>
      <el-table-column
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="toReview(scope.row)" type="text" size="small">评审</el-button>
          <el-button @click="toReview(scope.row)" type="text" size="small">查看评审</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="workbench-back_activitylist-button_box">
      <el-button type="button" class="el-button--primary" @click="toActivityList">返回</el-button>
    </div>
  </el-col> 
  <!-- 查看比例 -->
  <el-col v-if="currentShow == 'pie'" :span="24" class="workbench-pie">
    <el-col :span="24" class="workbench-pie-condition">
      <el-col :span="8">
        <el-select v-model="select_place" placeholder="选择地区" style="width:90%;">
          <el-option label="地区" value="place"></el-option>
        </el-select>
      </el-col>
      <el-col :span="8">
        <el-select v-model="select_school" placeholder="选择学校" style="width:90%;">
          <el-option label="学校" value="place"></el-option>
        </el-select>
      </el-col>
      <el-col :span="8">
        <el-select v-model="select_award" placeholder="选择奖项" style="width:90%;">
          <el-option label="奖项" value="place"></el-option>
        </el-select>
      </el-col>
    </el-col>
    <el-col :span="24">
      <div class="workbench-pie-content" id="pie"></div>
    </el-col>
    <div class="workbench-back_activitylist-button_box">
      <el-button type="button" class="el-button--primary" @click="toActivityList">返回</el-button>
    </div>
  </el-col>

   <!-- 评审 -->
   <el-col v-if="currentShow == 'review'" :span="24" class="workbench-review">
     <div class="workbench-review-product_title" v-text="productDetail[config.keys_productDetail.title]"></div>
     <div class="workbench-review-product_abstract" v-text="productDetail[config.keys_productDetail.abstract]"></div>
     <div class="workbench-review-product_content" v-text="productDetail[config.keys_productDetail.content]"></div>
     <div class="workbench-review-product_fujian">
        文件下载：<a href="#" v-text="productDetail[config.keys_productDetail.fujian]"></a>
     </div>
     <div class="workbench-review-history">
       <el-table
        :data="historyReviewList"
        stripe
        border
        style="margin:0 auto;width:300px;">
        <el-table-column
          :prop="config.keys_historyReview.no"
          label="#"
          width="100">
        </el-table-column>
        <el-table-column
          :prop="config.keys_historyReview.prize"
          label="历史评审结果"
          width="200">
        </el-table-column>
      </el-table>
     </div>
     <div class="workbench-review_box">
       <div class="workbench-review_box-simple_prize">
         普通奖：
        <el-radio v-model="simplePrize" label="1" border>无奖</el-radio>
        <el-radio v-model="simplePrize" label="2" border>一等奖</el-radio>
        <el-radio v-model="simplePrize" label="3" border>二等奖</el-radio>
        <el-radio v-model="simplePrize" label="4" border>三等奖</el-radio>
      </div>
      <div class="workbench-review_box-teacher_prize">
        教师指导奖：
        <el-radio v-model="teacherPrize" label="1" border>无奖</el-radio>
        <el-radio v-model="teacherPrize" label="2" border>指导奖1</el-radio>
        <el-radio v-model="teacherPrize" label="3" border>指导奖2</el-radio>
      </div>
     </div>
     <div class="workbench-back_review-button_box">
      <el-button type="button" class="el-button--primary" @click="toProductList">返回</el-button>
     </div>
   </el-col>
 </el-col>
</template>

<script>
import URL from 'url'
import PROJECT_CONFIG from 'projectConfig'
import { Post } from '@common'

export default {
  name: 'workbench',
  reused: true,
  props: {
    namespace: String,
    config: {
      type: Object,
      default () {
        return {
          keys_activity: {
            name: 'name',
            date: 'date',
            productNum: 'productNum',
            reviewStatus: 'reviewStatus',
          },
          keys_product: {
            title: 'title',
            award: 'award',
          },
          keys_productDetail: {
            title: 'title',
            abstract: 'abstract',
            content: 'content',
            fujian: 'fujian',
          },
          keys_historyReview: {
            no: 'no',
            prize: 'prize'
          }
        }
      }
    }
  },
  data () {
    return {
      CONFIG: null,
      echarts: require('echarts/lib/echarts'),
      tableData: [{
        name: '教育局XXX做出重ddddddddddddddddddddddddddddddddddddddddddddddd要指示',
        date: '2016-11-24至2016-12-30',
        productNum: '70',
        reviewStatus: '已提交评审',
      }, {
        name: '教育局XXX做出重ddddddddddddddddddddddddddddddddddddddddddddddd要指示',
        date: '2016-11-24至2016-12-30',
        productNum: '70',
        reviewStatus: '已提交评审',
      },
      {
        name: '教育局XXX做出重ddddddddddddddddddddddddddddddddddddddddddddddd要指示',
        date: '2016-11-24至2016-12-30',
        productNum: '70',
        reviewStatus: '已提交评审',
      },
      {
        name: '教育局XXX做出重ddddddddddddddddddddddddddddddddddddddddddddddd要指示',
        date: '2016-11-24至2016-12-30',
        productNum: '70',
        reviewStatus: '已提交评审',
      }],
      productList: [
        {
          title: '教育局XXX做出重要指示',
          award: '未评分',
        },
        {
          title: '教育局XXX做出重要指示',
          award: '未评分',
        }
      ],
      productDetail: {
        title: '作品标题',
        abstract: '简介，滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答',
        content: '内容，滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答滴答',
        fujian: '附件',
      },
      simplePrize: '1',//普通奖
      teacherPrize: '1',//教师指导奖
      historyReviewList: [
        {
          no: '一审',
          prize: '二等奖'
        },
        {
          no: '二审',
          prize: '一等奖'
        }
      ],
      currentShow: 'activityList',
      select_place: '',
      select_school: '',
      select_award: '',
    };
  },

  computed: {},

  created () {
    this.initConfig();
    require("echarts/lib/chart/pie");
    require('echarts/lib/component/tooltip');
    require("echarts/lib/component/legendScroll");
  },

  mounted () {
  },

  methods: {
    initConfig () {
      this.CONFIG = PROJECT_CONFIG[this.namespace]
    },
    toProductList (row) {
      this.currentShow = 'productList'
    },
    toReview () {
      this.currentShow = 'review';
    },
    toPie () {
      this.currentShow = 'pie';
      this.$nextTick(this.initEchartsPie)
    },
    toActivityList () {
      this.currentShow = 'activityList';
    },
    initEchartsPie () {
      let option = {
        // title: {
        //   text: '某站点用户访问来源',
        //   subtext: '纯属虚构',
        //   x: 'center'
        // },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['一等奖', '二等奖', '三等奖', '未获奖']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '一等奖' },
              { value: 310, name: '二等奖' },
              { value: 234, name: '三等奖' },
              { value: 135, name: '未获奖' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      let echarts = this.echarts.init(document.getElementById('pie'));

      echarts.setOption(option);
    },
  }
}
</script>
<style>
.workbench .el-table__body-wrapper {
  overflow: hidden;
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
}
</style>
